const VERSION="1.3.0";
const COURSE=window.NORTHSTAR_COURSE||{title:"Cyber Security Management & Data Science",shortTitle:"CYBER SECURITY · MANAGEMENT · DATA SCIENCE"};
const AI_CONFIG=window.NORTHSTAR_AI||{model:"Qwen3-0.6B-q4f16_1-MLC",provider:"WebLLM",mode:"local-browser"};

function readStoredJSON(key,fallback){
 try{
  const raw=localStorage.getItem(key);
  return raw===null?fallback:JSON.parse(raw);
 }catch(error){
  console.warn(`NorthStar ignored invalid local storage for ${key}.`,error);
  return fallback;
 }
}

const savedCompleted=readStoredJSON("ns_completed_lessons",[]);
const savedLabs=readStoredJSON("ns_lab_state",{});

const curriculum=(Array.isArray(window.NORTHSTAR_CURRICULUM)?window.NORTHSTAR_CURRICULUM:[]).map(c=>({...c,lessons:(c.lessons||[]).map(l=>({...l,...(window.NORTHSTAR_LESSON_ENRICHMENT?.[l.id]||{})}))}));
const labs=[
 ["Packet Recon","Analyze a controlled packet capture","Beginner","Inspect packets, identify protocols, and document observations."],
 ["Web Surface","Map a deliberately vulnerable web surface","Intermediate","Enumerate an intentionally isolated application and record its attack surface."],
 ["Detection Drill","Turn telemetry into a detection rule","Intermediate","Inspect simulated telemetry and produce a defensible detection hypothesis."],
 ["Incident Room","Triage a simulated security incident","Advanced","Build a timeline from controlled evidence and document containment decisions."]
];
const nav=[["home","Home","⌂"],["learn","Learn","▤"],["ai","AI","✦"],["labs","Labs","⌁"],["progress","Progress","◉"]];
const savedAI=readStoredJSON("ns_ai_messages",null);
let aiEngine=null;
let aiLoading=false;
let aiProgress=0;
let aiError="";
const state={
 route:"home",filter:"All",completedLessons:Array.isArray(savedCompleted)?savedCompleted:[],
 labState:typeof savedLabs==="object"&&savedLabs?savedLabs:{},
 messages:Array.isArray(savedAI)&&savedAI.length?savedAI:[["ai","I’m your NorthStar AI Mentor. I run locally in your browser, so your conversation does not need a NorthStar server."]],
 selectedCourse:0,selectedLesson:0,selectedLab:0,lessonTab:"Read",checkAnswer:"",filterExplicit:false
};
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const allLessons=()=>curriculum.flatMap(c=>Array.isArray(c.lessons)?c.lessons:[]);
const totalLessons=()=>allLessons().length;
const LEARNER_KEY="ns_learner_model";
const learnerState=()=>{
 const fallback={version:"1.0",mastery:{},attempts:{},checks:{},lastActivity:null};
 const saved=readStoredJSON(LEARNER_KEY,fallback);
 return saved&&typeof saved==="object"?{
  ...fallback,...saved,
  mastery:typeof saved.mastery==="object"&&saved.mastery?saved.mastery:{},
  attempts:typeof saved.attempts==="object"&&saved.attempts?saved.attempts:{},
  checks:typeof saved.checks==="object"&&saved.checks?saved.checks:{}
 }:fallback;
};
const lessonMastery=id=>{const s=learnerState();return Number(s.mastery?.[id]||0)};
const overallMastery=()=>{const ids=allLessons().map(l=>l.id).filter(Boolean);return ids.length?Math.round(ids.reduce((n,id)=>n+lessonMastery(id),0)/ids.length):0};
const CURRICULUM_STANDARD=window.NORTHSTAR_CURRICULUM_STANDARD||{version:"2.0"};
const lessonKey=(course,lesson)=>curriculum[course]?.lessons?.[lesson]?.id||"";
const completedCount=()=>state.completedLessons.filter(id=>allLessons().some(l=>l.id===id)).length;
const labCompletedCount=()=>Object.values(state.labState).filter(v=>v==="completed").length;
const overallPercent=()=>Math.round(((completedCount()/Math.max(1,totalLessons()))+(labCompletedCount()/labs.length))/2*100);
const courseProgress=i=>{const ls=curriculum[i]?.lessons||[];return ls.length?Math.round(ls.filter(l=>state.completedLessons.includes(l.id)).length/ls.length*100):0};
const persist=()=>{
 localStorage.setItem("ns_completed_lessons",JSON.stringify(state.completedLessons));
 localStorage.setItem("ns_lab_state",JSON.stringify(state.labState));
 localStorage.setItem("ns_ai_messages",JSON.stringify(state.messages.slice(-40)));
};
const go=r=>{state.route=r;window.scrollTo({top:0,behavior:"smooth"});render()};
const iconFor=i=>["◈","◎","☁","◉","⌁","◇"][i]||"•";

function render(){
 const app=document.querySelector("#app");
 const active=(r)=>state.route===r||((state.route==="lesson")&&r==="learn")||((state.route==="lab")&&r==="labs");
 app.innerHTML=`<div class="app-shell">
   <aside class="desktop-rail">
    <div class="rail-brand"><span class="brand-mark">N</span><span>NorthStar</span></div>
    <div class="rail-links">${nav.map(n=>`<button class="${active(n[0])?"active":""}" data-route="${n[0]}"><span>${n[2]}</span>${n[1]}</button>`).join("")}</div>
    <div class="rail-note">“Disciplined learning creates extraordinary capability.”</div>
   </aside>
   <main class="main">
    <header class="topbar">
      <div class="brand"><span class="brand-mark">N</span><span class="brand-copy">NorthStar<small>${esc(COURSE.shortTitle)}</small></span></div>
      <div class="profile" title="NorthStar learner">NS</div>
    </header>
    <div id="view"></div>
    <nav class="nav" aria-label="Primary navigation">${nav.map(n=>`<button class="${active(n[0])?"active":""}" data-route="${n[0]}" aria-label="${n[1]}"><span class="nav-icon">${n[2]}</span>${n[1]}</button>`).join("")}</nav>
   </main>
 </div>`;
 const viewRenderer=views[state.route]||views.home;
 let viewHTML="";
 try{
  viewHTML=viewRenderer();
 }catch(error){
  console.error("NorthStar view render failure:",error);
  viewHTML=`<section class="fade"><div class="card glass" style="padding:28px"><span class="eyebrow">NorthStar recovery</span><h1 class="title">Learning is still here.</h1><p class="subtitle">The lesson data loaded, but this screen encountered a rendering error. Refreshing with the new application bundle should restore the learning view.</p><button class="cta" onclick="location.reload()">Reload NorthStar</button></div></section>`;
 }
 document.querySelector("#view").innerHTML=viewHTML;
 bind();
}

const views={
 home:()=>{
  const p=overallPercent(), cp=courseProgress(2);
  const activity=allLessons().filter(l=>state.completedLessons.includes(l.id)).slice(-3).reverse();
  return `<section class="fade">
   <div class="hero glass">
    <span class="eyebrow">Capability platform</span>
    <h1>Your capability.<br>Your path.<br>A safer tomorrow.</h1>
    <p>${esc(COURSE.description)}</p>
    <button class="cta" data-route="learn">Continue Learning →</button>
   </div>
   <div class="grid stats">
    <div class="stat glass"><b>${p}%</b><span>Overall progress</span></div>
    <div class="stat glass"><b>${completedCount()}</b><span>Lessons completed</span></div>
    <div class="stat glass"><b>${labCompletedCount()}</b><span>Labs completed</span></div>
    <div class="stat glass"><b>${curriculum.length}</b><span>Learning paths</span></div>
   </div>
   <div class="section card glass">
    <div class="section-head"><h2>Learning path</h2><button data-route="learn">View all →</button></div>
    <div class="path">${curriculum.map((c,i)=>`<div class="path-step ${courseProgress(i)===100?"done":i===1?"active":""}"><div class="path-dot">${courseProgress(i)===100?"✓":iconFor(i)}</div><div class="path-label">${c.title.replace("Security ","")}</div></div>`).join("")}</div>
   </div>
   <div class="section">
    <div class="section-head"><h2>Continue learning</h2><button data-route="learn">See all →</button></div>
    <button class="card glass learning-card clickable" data-course="2" data-lesson="0" style="width:100%">
      <div class="course-icon">02</div><div class="course-main"><strong>${curriculum[2]?.title||"Networking & Network Security"}</strong><small>Lesson ${Math.min(5,(curriculum[2]?.lessons||[]).length)} · TCP/IP · traffic · segmentation</small><div class="progress"><i style="width:${cp||42}%"></i></div></div><b>${cp||42}%</b>
    </button>
   </div>
   <div class="section grid quick-grid">
    <button class="card glass quick clickable" data-route="learn"><span class="quick-icon">▤</span><span><strong>Learn</strong><small>Curriculum</small></span></button>
    <button class="card glass quick clickable" data-route="labs"><span class="quick-icon">⌁</span><span><strong>Labs</strong><small>Hands-on</small></span></button>
    <button class="card glass quick clickable" data-route="ai"><span class="quick-icon">✦</span><span><strong>AI Mentor</strong><small>Ask & learn</small></span></button>
    <button class="card glass quick clickable" data-route="progress"><span class="quick-icon">◉</span><span><strong>Progress</strong><small>Track growth</small></span></button>
   </div>
   <div class="section grid activity-grid">
    <div class="card glass"><div class="section-head"><h2>Recent activity</h2><button data-route="progress">View all →</button></div>
     ${activity.length?activity.map(l=>`<div class="activity-item"><span class="activity-dot">✓</span><div><strong>${esc(l.title)}</strong><small>Completed · NorthStar curriculum</small></div></div>`).join(""):'<div class="empty">Your completed lessons will appear here.</div>'}
    </div>
    <div class="card glass"><div class="section-head"><h2>Skill matrix</h2><button data-route="progress">Details →</button></div>
      ${skillRows()}
    </div>
   </div>
   <div class="section quote glass"><strong>“Cybersecurity isn’t just a career. It’s a responsibility.”</strong></div>
  </section>`;
 },
 learn:()=>{
  const modules=curriculum.map((c,i)=>({
    c,i,lessons:Array.isArray(c.lessons)?c.lessons:[],meta:c.meta&&typeof c.meta==="object"?c.meta:{}
  })).sort((a,b)=>Number(a.c.code)-Number(b.c.code));
  const categories=["All",...new Set(modules.map(x=>x.c.category).filter(Boolean))];
  const activeFilter=state.filterExplicit&&categories.includes(state.filter)?state.filter:"All";
  if(!state.filterExplicit||state.filter!==activeFilter)state.filter=activeFilter;
  const filtered=activeFilter==="All"?modules:modules.filter(x=>x.c.category===activeFilter);
  const total=modules.reduce((n,x)=>n+x.lessons.length,0);
  const visibleTotal=filtered.reduce((n,x)=>n+x.lessons.length,0);
  return `<section class="fade">
   <span class="eyebrow">Academic learning path</span>
   <h1 class="title" style="font-size:42px;letter-spacing:-.055em;margin:8px 0">Build real capability.</h1>
   <p class="subtitle">${modules.length} pathways · ${total} active lessons · ${esc(COURSE.workload||"Self-paced")} guided study · case analysis · applied practice · assessment evidence.</p>
   <div class="module-summary glass">
    <div><b>${filtered.length}</b><span>Modules shown</span></div>
    <div><b>${visibleTotal}</b><span>Lessons in view</span></div>
    <div><b>${total}</b><span>Lessons total</span></div>
   </div>
   <div class="tabs">${categories.map(x=>`<button class="chip ${activeFilter===x?"active":""}" data-filter="${x}">${x}</button>`).join("")}</div>
   <div class="list section module-list">
    ${filtered.map(({c,i,lessons:ls,meta:m})=>{
      const p=courseProgress(i),next=ls.findIndex(l=>!state.completedLessons.includes(l.id));
      return `<article class="card glass module-card">
       <button class="school clickable" ${!ls.length?"disabled":`data-course="${i}" data-lesson="${next<0?0:next}"`}>
        <div class="course-icon">${esc(c.code||String(i+1).padStart(2,"0"))}</div>
        <div class="course-main">
         <div class="module-title-row"><strong>${esc(c.title)}</strong><span class="badge ${p===100?"done":""}">${p===100?"Complete":esc(m.level||c.category||"Curriculum")}</span></div>
         <p>${esc(m.focus||c.description||"")}</p>
         <div class="progress"><i style="width:${p}%"></i></div>
         <small><b>${ls.length} lessons</b> · ${esc(m.load||"Self-paced")} · ${p}% complete</small>
        </div>
       </button>
       <details class="module-details" open>
        <summary>Module outline & academic depth</summary>
        <div class="module-detail-grid">
         <div class="lesson-index">
          <div class="lesson-index-head"><span class="eyebrow">Complete lesson index</span><strong>${ls.length} lessons</strong></div>
          <div class="lesson-list">
           ${ls.map((lesson,li)=>`<button class="lesson-index-row ${state.completedLessons.includes(lesson.id)?"done":""}" data-course="${i}" data-lesson="${li}"><span class="lesson-number">${String(li+1).padStart(2,"0")}</span><span class="lesson-index-main"><strong>${esc(lesson.title)}</strong><small>${esc(lesson.time||"Self-paced")} · ${state.completedLessons.includes(lesson.id)?"Completed":"Not started"}</small></span><span class="lesson-arrow">›</span></button>`).join("")}
          </div>
         </div>
         <div><span class="eyebrow">Learning outcomes</span><ul>${(m.outcomes||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
         <div><span class="eyebrow">Core topics</span><div class="topic-list">${(m.topics||[]).map(x=>`<span class="topic">${esc(x)}</span>`).join("")}</div></div>
         <div><span class="eyebrow">Case analysis</span><p>${esc(m.case||"Applied case analysis.")}</p></div>
         <div><span class="eyebrow">Assessment</span><p>${esc(m.assessment||"Knowledge check and applied exercise.")}</p></div>
         <div><span class="eyebrow">Practical lab</span><p>${esc(m.lab||"Controlled practical exercise.")}</p></div>
        </div>
       </details>
      </article>`;
    }).join("")}
   </div>
   <div class="section card glass">
    <span class="eyebrow">Academic design</span>
    <h2>Learn → Apply → Analyze → Evidence</h2>
    <p class="subtitle">NorthStar uses a postgraduate-style applied structure: conceptual foundations, case analysis, simulations or controlled exercises, and evidence-based assessment. The benchmark is informed by publicly described IIM Information Systems, analytics, digital transformation and cybersecurity teaching approaches; this is not an official IIM curriculum.</p>
   </div>
  </section>`;
 }, lesson:()=>{
  const c=curriculum[state.selectedCourse],l=c?.lessons?.[state.selectedLesson];
  if(!c||!l)return `<div class="empty card glass">Lesson unavailable.</div>`;
  const done=state.completedLessons.includes(l.id);
  const list=a=>Array.isArray(a)?a.filter(Boolean):[];
  const paragraphs=String(l.read||"").split(/\\n\\n|\n\n/).filter(Boolean);
  const highlights=list(l.highlights), sections=list(l.sections), notes=list(l.notes), takeaways=list(l.takeaways);
  const examples=Array.isArray(l.examples)?l.examples:[], qas=Array.isArray(l.qa)?l.qa:[], plan=Array.isArray(l.studyPlan)?l.studyPlan:[];
  const visual=l.visual, graph=l.graph;
  const graphHtml=graph?`<div class="visual-card lesson-graph"><span class="eyebrow">${esc(graph.title||"Learning graph")}</span><p class="visual-caption">${esc(graph.caption||"Use the pattern to reason about the concept.")}</p><div class="graph-bars">${(graph.items||[]).map(x=>`<div class="graph-row"><div class="graph-label"><span>${esc(x.label)}</span><b>${esc(x.value)}</b></div><div class="graph-track"><i style="width:${Math.max(0,Math.min(100,Number(x.percent)||0))}%"></i></div></div>`).join("")}</div></div>`:"";
  const visualHtml=visual?`<div class="visual-card"><span class="eyebrow">${esc(visual.title||"Visual model")}</span><p class="visual-caption">${esc(visual.caption||"")}</p><div class="visual-steps">${(visual.steps||[]).map((x,i)=>`<div class="visual-step"><span>${i+1}</span><strong>${esc(x)}</strong></div>`).join("")}</div></div>`:"";
  let panel="";
  if(state.lessonTab==="Read")panel=`<div class="lesson-stack">
   <div class="lesson-meta"><span><b>Study time</b>${esc(l.time||"Self-paced")}</span><span><b>Prerequisite</b>${esc(l.prerequisite||"None")}</span></div>
   ${l.learningGoal?`<div class="inset callout"><strong>Learning goal</strong><p class="subtitle">${esc(l.learningGoal)}</p></div>`:""}
   ${l.why?`<div class="inset callout"><strong>Why this matters</strong><p class="subtitle">${esc(l.why)}</p></div>`:""}
   ${l.competency?`<div class="inset"><strong>Competency target</strong><p class="subtitle">${esc(l.competency)}</p></div>`:""}
   ${Array.isArray(l.deepDive)&&l.deepDive.length?`<div class="depth-grid">${l.deepDive.map((x,i)=>`<div class="depth-card"><span>${i+1}</span><div><b>${esc(x.title||"Deep dive")}</b><p>${esc(x.body||"")}</p></div></div>`).join("")}</div>`:""}
   ${l.math?`<div class="inset example-card"><span class="eyebrow">${esc(l.math.title||"Mathematical foundation")}</span><h3>Intuition → formula → interpretation</h3><p class="subtitle">${esc(l.math.body||"")}</p><div class="answer-note"><b>How to study it</b><p>${esc(l.math.intuition||"Understand the quantities first, then calculate and interpret.")}</p></div></div>`:""}
   ${l.dataQuality?`<div class="inset"><strong>${esc(l.dataQuality.title)}</strong><ul class="lesson-list">${(l.dataQuality.items||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`:""}
   ${Array.isArray(l.modelWorkflow)&&l.modelWorkflow.length?`<div class="inset"><strong>Model development workflow</strong><ol class="practice-steps">${l.modelWorkflow.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div>`:""}
   ${highlights.length?`<div class="depth-grid">${highlights.map((x,i)=>`<div class="depth-card highlight-card"><span>${i+1}</span><div><b>Key idea</b><p>${esc(x)}</p></div></div>`).join("")}</div>`:""}
   ${plan.length?`<div class="inset lesson-roadmap"><div class="roadmap-head"><div><span class="eyebrow">Lesson roadmap</span><strong>How to use your study time</strong><p class="subtitle">These are the focused passes that make up this lesson. Open each block to study the material, work an example, practise, and check your understanding.</p></div><span class="badge">${plan.reduce((n,x)=>{const m=String(x[1]||"").match(/\d+/);return n+(m?Number(m[0]):0)},0)} min</span></div><div class="study-plan">${plan.map((x,i)=>`<div class="plan-row"><span>${i+1}</span><div><b>${esc(x[0])}</b><small>${esc(x[1])}</small></div><span class="roadmap-state">Expanded below</span></div>`).join("")}</div></div>`:""}${studyBlocksHtml(l)}
   ${deepLessonBlocks(l)}
   <div><h2>What to understand</h2>${paragraphs.map(x=>`<p class="subtitle lesson-paragraph">${esc(x)}</p>`).join("")}</div>
   ${sections.map(s=>`<div class="inset"><strong>${esc(s.title)}</strong>${String(s.body||"").split(/\\n\\n|\n\n/).filter(Boolean).map(x=>`<p class="subtitle">${esc(x)}</p>`).join("")}</div>`).join("")}
   ${(l.concepts||[]).length?`<div class="inset"><strong>Core concepts</strong><div class="topic-list">${(l.concepts||[]).map(x=>`<span class="topic">${esc(x)}</span>`).join("")}</div></div>`:""}
   ${(l.glossary||[]).length?`<div class="inset"><strong>Beginner vocabulary</strong><div class="vocab-list">${(l.glossary||[]).map(x=>`<div><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join("")}</div></div>`:""}
   ${visualHtml}${graphHtml}
   ${examples.length?examples.map((x,i)=>`<div class="inset example-card"><span class="eyebrow">Worked example ${i+1}</span><h3>${esc(x.title||"Example")}</h3><p class="subtitle">${esc(x.body||x)}</p>${x.answer?`<div class="answer-note"><b>Reasoning</b><p>${esc(x.answer)}</p></div>`:""}</div>`).join(""):`<div class="inset example-card"><strong>Worked example</strong><p class="subtitle">${esc(l.example||"Apply the concept to a realistic security scenario.")}</p></div>`}
   ${l.case?`<div class="inset case-card"><span class="eyebrow">Case analysis</span><h3>${esc(l.caseTitle||"Case study")}</h3><p class="subtitle">${esc(l.case)}</p>${l.caseQuestions?`<ul class="lesson-list">${l.caseQuestions.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}</div>`:""}
   ${notes.length?`<div class="note-card"><span class="eyebrow">Study notes</span>${notes.map(x=>`<div class="note-row"><span>✦</span><p>${esc(x)}</p></div>`).join("")}</div>`:""}
   ${takeaways.length?`<div class="inset takeaway-card"><strong>Key takeaways</strong><ol>${takeaways.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div>`:""}
   ${Array.isArray(l.assessmentRubric)&&l.assessmentRubric.length?`<div class="inset"><span class="eyebrow">Assessment standard</span><ul class="lesson-list">${l.assessmentRubric.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`:""}
   ${Array.isArray(l.references)&&l.references.length?`<div class="inset"><span class="eyebrow">Academic references</span><div class="vocab-list">${l.references.map(x=>`<div><b>${esc(x.name)}</b><span><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">Open source ↗</a></span></div>`).join("")}</div></div>`:""}
  </div>`;
  else if(state.lessonTab==="Practice")panel=practicePanel(l);
  else if(state.lessonTab==="Q&A")panel=qnaPanel(l);
  else panel=checkPanel(l);
  return `<section class="fade"><button class="back" data-route="learn">← Back to curriculum</button><div class="card glass lesson-card">
   <span class="eyebrow">Lesson ${c.code} · ${esc(c.title)}</span><h1>${esc(l.title)}</h1><p class="subtitle">${esc(l.objective)}</p>
   <div class="tabs">${["Read","Practice","Q&A","Check"].map(t=>`<button class="chip ${state.lessonTab===t?"active":""}" data-lesson-tab="${t}">${t}</button>`).join("")}</div>
   <div class="section tab-panel">${panel}</div>
   <div class="lesson-footer"><span class="status ${done?"success":""}">${done?"✓ Completed":"In progress"}</span><button class="chip active" data-complete-lesson>${done?"Completed":"Mark lesson complete"}</button></div>
  </div></section>`;
 },
 labs:()=>`<section class="fade"><span class="eyebrow">Practice environment</span><h1 class="title" style="font-size:42px;letter-spacing:-.055em;margin:8px 0">Practice with evidence.</h1><p class="subtitle">Controlled exercises designed to turn concepts into observable skills.</p>
  <div class="list section">${labs.map((l,i)=>{const s=state.labState[i]||"ready";return `<article class="card glass learning-card"><div class="course-icon">0${i+1}</div><div class="course-main"><strong>${l[0]}</strong><small>${l[1]} · ${l[2]}</small></div><button class="badge ${s==="completed"?"done":""}" data-lab="${i}">${s==="completed"?"Done":s==="started"?"Resume":"Start"}</button></article>`}).join("")}</div>
  <div class="section card glass"><span class="eyebrow">Execution layer</span><h2>Sandbox contract pending</h2><p class="subtitle">The workflow is real; execution is intentionally not faked. A future isolated runner can plug into this interface.</p></div>
 </section>`,
 lab:()=>{const l=labs[state.selectedLab],s=state.labState[state.selectedLab]||"ready";return `<section class="fade"><button class="back" data-route="labs">← Back to labs</button><div class="card glass lesson-card"><span class="eyebrow">Controlled lab</span><h1>${l[0]}</h1><p class="subtitle">${l[1]}.</p><div class="inset"><span class="badge ${s==="completed"?"done":""}">${s==="completed"?"Completed":s==="started"?"In progress":l[2]}</span><h2>Objective</h2><p class="subtitle">${l[3]}</p><h2>Runner status</h2><p class="subtitle">${s==="completed"?"Evidence checkpoint recorded locally.":"Not connected. Interface workflow only."}</p></div><div class="lesson-footer"><button class="chip" data-route="labs">Return</button><button class="chip active" data-lab-complete>${s==="completed"?"Completed":s==="started"?"Complete lab":"Start lab"}</button></div></div></section>`},
 ai:()=>`<section class="fade">
  <div class="section-head"><div><span class="eyebrow">AI companion</span><h1 class="title" style="font-size:42px;letter-spacing:-.055em;margin:8px 0">NorthStar AI Mentor</h1></div><button class="chip" data-clear-chat>Clear chat</button></div>
  <p class="subtitle">A real local LLM running in your browser. No API key is embedded in NorthStar.</p>
  <div class="tabs"><button class="chip" data-prompt="Explain TCP three-way handshake simply">Explain a concept</button><button class="chip" data-prompt="Give me a networking practice question">Practice question</button><button class="chip" data-prompt="What should I learn next in cybersecurity?">Next step</button></div>
  <div class="section card glass chat">
    <div class="ai-status ${aiError?"error":aiLoading?"loading":"ready"}">${aiLoading?`Loading local model… ${Math.round(aiProgress*100)}%`:aiError?esc(aiError):aiEngine?"● Local AI ready":"Local AI will initialize when you send your first message."}</div>
    <div class="messages" id="messages">${state.messages.map((m,i)=>`<div class="msg ${m[0]==="user"?"user":""} ${i===state.messages.length-1&&m[0]==="ai"&&aiLoading?"ai-stream":""}">${esc(m[1])}</div>`).join("")}</div>
    <form class="composer" id="chat"><input id="prompt" autocomplete="off" ${aiLoading?"disabled":""} placeholder="Ask NorthStar anything about cybersecurity"><button class="send" ${aiLoading?"disabled":""}>Send</button></form>
  </div>
 </section>`,
 progress:()=>{const p=overallPercent();return `<section class="fade"><span class="eyebrow">Progress</span><h1 class="title" style="font-size:42px;letter-spacing:-.055em;margin:8px 0">See your evidence.</h1><div class="section grid two"><div class="card glass progress-card"><div class="ring" style="--p:${p}%"><span>${p}%</span></div><h2>Overall progress</h2><p class="subtitle">${completedCount()} of ${totalLessons()} lessons and ${labCompletedCount()} of ${labs.length} labs completed.</p></div><div class="card glass"><span class="eyebrow">Skill matrix</span>${skillRows()}</div></div><div class="section grid stats"><div class="stat glass"><b>${completedCount()}</b><span>Lessons complete</span></div><div class="stat glass"><b>${totalLessons()-completedCount()}</b><span>Lessons remaining</span></div><div class="stat glass"><b>${labCompletedCount()}</b><span>Labs complete</span></div><div class="stat glass"><b>${curriculum.length}</b><span>Learning paths</span></div></div></section>`}
};

function practiceScenario(l){
 const examples=Array.isArray(l.examples)?l.examples.filter(Boolean):[];
 const scenario=String(l.case||"").trim() || String(examples[0]?.body||"").trim() || String(l.practice||"").trim();
 const concepts=(l.concepts||[]).slice(0,5).join(", ");
 const title=l.title||"this lesson";
 const task=String(l.caseQuestions?.[0]||"").trim() || ("Analyze the scenario using the concepts from "+title+". State what should happen, what could fail, and what evidence would distinguish the two.");
 const procedure=[
  scenario?"1. Define the system, actors and scope described in the scenario.":"1. Define the system, actors and scope for the exercise.",
  concepts?"2. Identify the relevant concepts: "+concepts+".":"2. Identify the lesson concepts that control the outcome.",
  "3. Trace the mechanism step by step and state the expected behavior.",
  "4. Identify the failure, abuse case or abnormal behavior that would change the conclusion.",
  "5. Specify the evidence you would collect and explain why it is sufficient.",
  "6. Write your conclusion, one limitation and one follow-up question."
 ];
 return {scenario,task,procedure};
}
function qnaData(l){
 const qas=Array.isArray(l.qa)?l.qa.filter(x=>x&&x.q):[];
 const cases=Array.isArray(l.caseQuestions)?l.caseQuestions.filter(Boolean):[];
 return {qas,cases};
}
function checkData(l){
 const check=l.check&&typeof l.check==="object"?l.check:{};
 const cases=Array.isArray(l.caseQuestions)?l.caseQuestions.filter(Boolean):[];
 const scenario=String(l.case||"").trim();
 return {check,cases,scenario};
}
function practicePanel(l){
 const p=practiceScenario(l);
 let h='<div class="lesson-stack">';
 h+='<div><span class="eyebrow">Application</span><h2>Practice by doing</h2><p class="subtitle">Use the lesson to solve a concrete scenario. This is not a recall quiz.</p></div>';
 if(p.scenario)h+='<div class="inset case-card"><span class="eyebrow">Scenario</span><p class="subtitle">'+esc(p.scenario)+'</p></div>';
 h+='<div class="inset"><span class="eyebrow">Your task</span><strong>'+esc(p.task)+'</strong><p class="subtitle">Write your reasoning before looking for confirmation. The goal is to demonstrate application, not reproduce the lesson text.</p></div>';
 h+='<div class="inset"><span class="eyebrow">Investigation procedure</span><ol class="practice-steps">'+p.procedure.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ol></div>';
 h+='<div class="inset"><strong>Evidence checkpoint</strong><p class="subtitle">'+esc(l.evidence||"Produce a scoped evidence artifact containing observations, reasoning, conclusion and limitations.")+'</p></div>';
 if((l.mistakes||[]).length)h+='<div class="inset"><strong>Common mistakes to avoid</strong><ul class="lesson-list">'+(l.mistakes||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul></div>';
 if(l.reflection)h+='<div class="note-card"><span class="eyebrow">Self-explanation</span><p>'+esc(l.reflection)+'</p></div>';
 return h+'</div>';
}
function qnaPanel(l){
 const q=qnaData(l);
 let h='<div class="lesson-stack"><div><span class="eyebrow">Recall + reasoning</span><h2>Questions & answers</h2><p class="subtitle">Answer from memory first, then open the explanation. Q&A tests understanding; Practice tests application.</p></div>';
 if(q.qas.length){
  h+='<div class="qa-group"><span class="eyebrow">Core knowledge</span>';
  h+=q.qas.map((x,i)=>'<details class="qa-card"><summary><span>'+(i+1)+'</span><b>'+esc(x.q)+'</b></summary><div><b>Answer</b><p>'+esc(x.a||"Explain the concept using the lesson material.")+'</p>'+(x.why?'<b>Why</b><p>'+esc(x.why)+'</p>':"")+'</div></details>').join("");
  h+='</div>';
 }else h+='<div class="inset"><strong>Core knowledge</strong><p class="subtitle">No authored recall set is available for this lesson yet. Use the Check tab for the scored knowledge check.</p></div>';
 if(q.cases.length){
  h+='<div class="qa-group"><span class="eyebrow">Reasoning prompts</span>';
  h+=q.cases.map((x,i)=>'<details class="qa-card reasoning-card"><summary><span>R'+(i+1)+'</span><b>'+esc(x)+'</b></summary><div><b>How to answer</b><p>State the relevant concept, your reasoning, the evidence you would inspect, and one limitation.</p></div></details>').join("");
  h+='</div>';
 }
 return h+'</div>';
}
function checkPanel(l){
 const cd=checkData(l),c=cd.check,options=Array.isArray(c.options)?c.options:[];
 const noteKey="ns_check_note_"+l.id,savedNote=localStorage.getItem(noteKey)||"";
 let h='<div class="lesson-stack"><div><span class="eyebrow">Assessment</span><h2>Check your understanding</h2><p class="subtitle">First answer independently. Then use the explanation to identify the exact concept you need to revisit.</p></div>';
 if(c.q){
  h+='<div class="inset check-card"><span class="eyebrow">Knowledge check</span><p class="check-question"><b>'+esc(c.q)+'</b></p><div class="check-options">'+options.map(x=>'<button class="option '+(state.checkAnswer===x?"selected":"")+'" data-answer="'+esc(x)+'">'+esc(x)+'</button>').join("")+'</div><p class="feedback">'+(state.checkAnswer?(state.checkAnswer===c.answer?"✓ Correct. "+esc(c.why||"Your reasoning matches the lesson."):"Not quite. Revisit the relevant concept, then try again."):"Select an answer to check it.")+'</p>'+(c.explain?'<div class="answer-note"><b>Explanation</b><p>'+esc(c.explain)+'</p></div>':"")+'</div>';
 }else h+='<div class="inset"><strong>Knowledge check</strong><p class="subtitle">No multiple-choice check is authored for this lesson yet.</p></div>';
 if(cd.scenario){
  h+='<div class="inset"><span class="eyebrow">Transfer check</span><strong>Apply the lesson to this case</strong><p class="subtitle">'+esc(cd.scenario)+'</p>';
  if(cd.cases.length)h+='<ul class="lesson-list">'+cd.cases.slice(0,3).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>';
  h+='<p class="subtitle"><b>Success standard:</b> identify the relevant concept, explain the mechanism, cite evidence, and state a limitation.</p></div>';
 }
 h+='<div class="inset reasoning-check"><span class="eyebrow">Reasoning check</span><strong>Explain your answer in your own words</strong><p class="subtitle">Write a short explanation. This is intentionally not auto-graded.</p><textarea class="check-note" data-check-note="'+esc(noteKey)+'" placeholder="What makes your answer correct? What evidence supports it?">'+esc(savedNote)+'</textarea><small>Your response stays in this browser.</small></div>';
 return h+'</div>';
}
function studyBlockContent(l,title,index){
 const plan=Array.isArray(l.studyPlan)?l.studyPlan:[];
 const sections=Array.isArray(l.sections)?l.sections.filter(Boolean):[];
 const deep=Array.isArray(l.deepDive)?l.deepDive.filter(Boolean):[];
 const examples=Array.isArray(l.examples)?l.examples.filter(Boolean):[];
 const qas=Array.isArray(l.qa)?l.qa.filter(Boolean):[];
 const steps=Array.isArray(l.practiceSteps)?l.practiceSteps.filter(Boolean):[];
 const highlights=Array.isArray(l.highlights)?l.highlights.filter(Boolean):[];
 const mistakes=Array.isArray(l.mistakes)?l.mistakes.filter(Boolean):[];
 const takeaways=Array.isArray(l.takeaways)?l.takeaways.filter(Boolean):[];
 const caseQuestions=Array.isArray(l.caseQuestions)?l.caseQuestions.filter(Boolean):[];
 const notes=Array.isArray(l.notes)?l.notes.filter(Boolean):[];
 const refs=Array.isArray(l.references)?l.references.filter(Boolean):[];
 const t=String(title||"").toLowerCase();
 const sec=(i)=>sections[i]||null;
 const dd=(i)=>deep[i]||null;
 const ex=(i)=>examples[i]||null;
 let lead=l.learningGoal||l.objective||"Build the concept from first principles and connect it to observable security practice.";
 let ideas=[];
 let application=[];
 let evidence=[];
 let example=null;
 let check=null;
 let heading="First principles";
 if(index===0){
  heading="Build the mental model";
  if(sec(0))ideas.push(sec(0).body);
  if(dd(0))ideas.push(dd(0).body);
  if(l.concepts?.length)ideas.push("Core vocabulary: "+l.concepts.slice(0,8).join(", ")+".");
  example=ex(0);
  check=qas[0]||l.check;
 }else if(index===1){
  heading="Understand the mechanism";
  if(sec(1))ideas.push(sec(1).body);
  if(dd(1))ideas.push(dd(1).body);
  if(l.read)ideas.push(String(l.read).split(/\\n\\n|\n\n/).filter(Boolean)[1]||String(l.read).split(/\\n\\n|\n\n/).filter(Boolean)[0]);
  example=ex(0)||ex(1);
  check=qas[1]||qas[0];
 }else if(index===2){
  heading="Connect it to security";
  if(sec(2))ideas.push(sec(2).body);
  if(dd(2))ideas.push(dd(2).body);
  ideas.push(...highlights.slice(0,3));
  if(l.why)application.push(l.why);
  if(l.case)application.push("Case: "+l.case);
  example=ex(1)||ex(0);
  check=qas[3]||qas[0];
 }else if(index===3){
  heading="Reason about evidence and failure";
  if(sec(3))ideas.push(sec(3).body);
  if(dd(3))ideas.push(dd(3).body);
  ideas.push(...notes.slice(0,3));
  evidence.push(...mistakes.slice(0,3));
  if(l.evidence)evidence.push("Evidence artifact: "+l.evidence);
  check=qas[2]||qas[0];
 }else if(index===4){
  heading="Apply the lesson to a case";
  if(sec(4))ideas.push(sec(4).body);
  if(l.case)application.push(l.case);
  application.push(...caseQuestions.slice(0,5));
  example=ex(1)||ex(0);
  check=qas[3]||qas[0];
 }else{
  heading="Practice, retrieve and prove mastery";
  application.push(l.practice||"Apply the lesson independently.");
  application.push(...steps.slice(0,6));
  if(l.reflection)application.push("Reflection: "+l.reflection);
  evidence.push(...takeaways.slice(0,3));
  if(l.evidence)evidence.push("Evidence to produce: "+l.evidence);
  check=qas[0]||l.check;
 }
 const ideaHtml=ideas.filter(Boolean).map(x=>`<li>${esc(String(x))}</li>`).join("");
 const appHtml=application.filter(Boolean).map(x=>`<li>${esc(String(x))}</li>`).join("");
 const evidenceHtml=evidence.filter(Boolean).map(x=>`<li>${esc(String(x))}</li>`).join("");
 const rubric=(Array.isArray(l.assessmentRubric)?l.assessmentRubric:[]).slice(0,4).map(x=>`<li>${esc(String(x))}</li>`).join("");
 const refHtml=refs.slice(0,2).map(x=>`<li><a href="${esc(x.url||"#")}" target="_blank" rel="noopener">${esc(x.name||"Reference")}</a></li>`).join("");
 const time=plan[index]?.[1]||"";
 return `<details class="study-block" ${index===0?"open":""}>
  <summary><span class="study-block-num">${index+1}</span><span class="study-block-title"><b>${esc(title)}</b><small>First principles → explanation → application → evidence</small></span><span class="study-block-time">${esc(String(time))}</span></summary>
  <div class="study-block-body">
   <div class="study-block-section"><span class="eyebrow">${esc(heading)}</span><p>${esc(String(lead))}</p></div>
   ${ideaHtml?`<div class="study-block-section"><span class="eyebrow">Teaching material</span><ul class="lesson-list">${ideaHtml}</ul></div>`:""}
   ${example?`<div class="study-block-section block-example"><span class="eyebrow">Worked example</span><strong>${esc(example.title||"Example")}</strong><p>${esc(example.body||String(example))}</p>${example.answer?`<div class="answer-note"><b>Reasoning</b><p>${esc(example.answer)}</p></div>`:""}</div>`:""}
   ${appHtml?`<div class="study-block-section"><span class="eyebrow">Apply it</span><ol class="practice-steps">${appHtml}</ol></div>`:""}
   ${evidenceHtml?`<div class="study-block-section"><span class="eyebrow">Evidence and pitfalls</span><ul class="lesson-list">${evidenceHtml}</ul></div>`:""}
   ${rubric&&index===5?`<div class="study-block-section"><span class="eyebrow">Mastery standard</span><ul class="lesson-list">${rubric}</ul></div>`:""}
   ${refHtml&&index===5?`<div class="study-block-section"><span class="eyebrow">References</span><ul class="lesson-list">${refHtml}</ul></div>`:""}
   ${check?`<div class="study-block-section block-check"><span class="eyebrow">Quick check</span><p><b>${esc(check.q||"Explain the idea in your own words.")}</b></p>${Array.isArray(check.options)?`<ul class="lesson-list">${check.options.map(o=>`<li>${esc(o)}</li>`).join("")}</ul>`:""}<details class="mini-answer"><summary>Reveal explanation</summary><p>${esc(check.a||check.answer||check.why||check.explain||"Revisit the relevant section and explain the reasoning.")}</p></details></div>`:""}
  </div>
 </details>`;
}
function studyBlocksHtml(l){
 const plan=Array.isArray(l.studyPlan)?l.studyPlan:[];
 if(!plan.length)return "";
 return `<div class="inset study-blocks-shell">
  <div class="study-blocks-head"><div><span class="eyebrow">Deep study blocks</span><strong>Learn the lesson in focused passes</strong><p class="subtitle">Each time block now contains teaching material, first-principles context, examples, practice or retrieval. The blocks are parts of this lesson, not additional lessons.</p></div><div class="study-block-actions"><button type="button" class="mini-btn" data-study-expand>Expand all</button><button type="button" class="mini-btn" data-study-collapse>Collapse all</button></div></div>
  <div class="study-block-list">${plan.map((x,i)=>studyBlockContent(l,String(x[0]||`Study block ${i+1}`),i)).join("")}</div>
 </div>`;
}

function deepLessonBlocks(l){
 const esc2=esc;
 const deep=(l.deepDive||[]).map(x=>"<div class=\"inset depth-section\"><span class=\"eyebrow\">"+esc2(x.title)+"</span><p class=\"subtitle\">"+esc2(x.body)+"</p></div>").join("");
 const rubric=(l.assessmentRubric||[]).map(x=>"<li>"+esc2(x)+"</li>").join("");
 const refs=(l.references||[]).map(x=>"<p class=\"subtitle\"><a href=\""+esc2(x.url)+"\" target=\"_blank\" rel=\"noopener\">"+esc2(x.name)+"</a></p>").join("");
 return (l.why?"<div class=\"inset callout\"><strong>Why this matters</strong><p class=\"subtitle\">"+esc2(l.why)+"</p></div>":"")+deep+(rubric?"<div class=\"inset\"><span class=\"eyebrow\">Assessment standard</span><ul class=\"lesson-list\">"+rubric+"</ul></div>":"")+(refs?"<div class=\"inset\"><span class=\"eyebrow\">Academic references</span>"+refs+"</div>":"");
}
function skillRows(){
 const vals=[
  ["Network Security",courseProgress(2)],
  ["System Security",courseProgress(3)],
  ["Defensive Security",courseProgress(4)],
  ["Offensive Security",courseProgress(5)],
  ["Security Engineering",courseProgress(6)]
 ];
 return vals.map(s=>`<div class="skill"><span>${s[0]}</span><div class="meter"><i style="width:${s[1]}%"></i></div><b>${s[1]}%</b></div>`).join("");
}

function bind(){
 document.querySelectorAll("[data-route]").forEach(b=>b.onclick=()=>go(b.dataset.route));
 document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;state.filterExplicit=b.dataset.filter!=="All";render()});
 document.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{state.selectedCourse=Number(b.dataset.course);state.selectedLesson=Number(b.dataset.lesson||0);state.lessonTab="Read";state.checkAnswer="";state.route="lesson";render()});
 document.querySelectorAll("[data-lesson-tab]").forEach(b=>b.onclick=()=>{state.lessonTab=b.dataset.lessonTab;render()});
 document.querySelectorAll("[data-study-expand]").forEach(b=>b.onclick=()=>{b.closest(".study-blocks-shell")?.querySelectorAll("details.study-block").forEach(d=>d.open=true)});
 document.querySelectorAll("[data-study-collapse]").forEach(b=>b.onclick=()=>{b.closest(".study-blocks-shell")?.querySelectorAll("details.study-block").forEach(d=>d.open=false)});
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{state.checkAnswer=b.dataset.answer;render()});
 document.querySelectorAll("[data-check-note]").forEach(el=>el.oninput=()=>localStorage.setItem(el.dataset.checkNote,el.value));
 const complete=document.querySelector("[data-complete-lesson]");
 if(complete)complete.onclick=()=>{
 const id=lessonKey(state.selectedCourse,state.selectedLesson);
 if(id&&!state.completedLessons.includes(id)){
  state.completedLessons.push(id);
  const ls=learnerState();
  ls.mastery=ls.mastery||{};
  ls.mastery[id]=Math.max(Number(ls.mastery[id]||0),70);
  ls.lastActivity=new Date().toISOString();
  localStorage.setItem(LEARNER_KEY,JSON.stringify(ls));
 }
 persist();render();
};
 document.querySelectorAll("[data-lab]").forEach(b=>b.onclick=()=>{state.selectedLab=Number(b.dataset.lab);state.labState[state.selectedLab]=state.labState[state.selectedLab]==="completed"?"completed":"started";persist();state.route="lab";render()});
 const labComplete=document.querySelector("[data-lab-complete]");
 if(labComplete)labComplete.onclick=()=>{state.labState[state.selectedLab]="completed";persist();render()};
 document.querySelectorAll("[data-prompt]").forEach(b=>b.onclick=()=>{const input=document.querySelector("#prompt");if(input){input.value=b.dataset.prompt;input.focus()}});
 const clear=document.querySelector("[data-clear-chat]");
 if(clear)clear.onclick=()=>{state.messages=[["ai","Chat cleared. I’m ready for your next cybersecurity question."]];persist();render()};
 const form=document.querySelector("#chat");
 if(form)form.onsubmit=async e=>{
   e.preventDefault();
   const input=document.querySelector("#prompt"),q=input?.value.trim();
   if(!q||aiLoading)return;
   state.messages.push(["user",q],["ai",""]);
   persist();render();
   await askNorthStar(q);
 };
}
async function ensureAI(){
 if(aiEngine)return aiEngine;
 if(aiLoading)return null;
 aiLoading=true;aiError="";aiProgress=0;render();
 try{
   const webllm=await import("https://esm.run/@mlc-ai/web-llm@0.2.82");
   aiEngine=await webllm.CreateMLCEngine(AI_CONFIG.model,{
     initProgressCallback:p=>{aiProgress=typeof p?.progress==="number"?p.progress:aiProgress;const el=document.querySelector(".ai-status");if(el)el.textContent=`Loading local model… ${Math.round(aiProgress*100)}%`;},
   });
   aiLoading=false;render();
   return aiEngine;
 }catch(err){
   aiLoading=false;
   aiError="Local AI could not start. Use Chrome with WebGPU enabled and reload the page.";
   console.error(err);
   render();
   return null;
 }
}

function mentorSystem(){
 const pathSummary=curriculum.map(c=>c.title+": "+(c.lessons||[]).map(l=>l.title).join(", ")).join("\n");
 const current=state.route==="lesson"?curriculum[state.selectedCourse]?.lessons?.[state.selectedLesson]:null;
 const currentContext=current?"Current lesson: "+current.title+". Objective: "+(current.objective||"Not specified")+". Concepts: "+(current.concepts||[]).join(", "):"No lesson is currently open.";
 const progress="Learner progress: "+completedCount()+" of "+totalLessons()+" lessons completed; concept mastery is "+overallMastery()+"%. Curriculum standard "+CURRICULUM_STANDARD.version+".";
 return "You are NorthStar AI Mentor, the cybersecurity tutor inside NorthStar.\nTeach clearly to a true beginner while remaining technically accurate. Never assume prior knowledge when the learner signals confusion.\n"+currentContext+"\n"+progress+"\nUse the NorthStar curriculum as the primary learning map:\n"+pathSummary+"\nTeaching protocol: diagnose what the learner understands; explain from first principles; use a concrete example; ask one short check question when useful; connect the concept to the next prerequisite or skill. Do not overwhelm the learner with unexplained jargon.\nFor labs, prefer hints and investigation questions before a complete solution. Distinguish simulated exercises from real execution.\nFocus on defensive security, secure engineering, authorized testing and controlled labs. For offensive-security questions, keep guidance scoped to systems the learner owns or is explicitly authorized to test; do not provide instructions that facilitate real-world compromise, credential theft, malware, persistence, evasion, or destructive activity.\nDo not claim access to NorthStar backend systems, private files, accounts, or external user data. The current AI runtime is "+(AI_CONFIG.mode||"local-browser")+" using "+(AI_CONFIG.model||"configured model")+"."; 
}

async function askNorthStar(q){
 const engine=await ensureAI();
 if(!engine)return;
 const history=state.messages.slice(-14).map(m=>({role:m[0]==="user"?"user":"assistant",content:m[1]}));
 const system={role:"system",content:mentorSystem()};
 const target=document.querySelector(".ai-stream");
 try{
   const stream=await engine.chat.completions.create({messages:[system,...history],temperature:.5,max_tokens:500,stream:true});
   let reply="";
   for await(const chunk of stream){
     reply+=chunk.choices?.[0]?.delta?.content||"";
     state.messages[state.messages.length-1][1]=reply;
     const el=document.querySelector(".ai-stream");
     if(el){el.textContent=reply;el.scrollIntoView({block:"nearest"});}
   }
   persist();aiError="";render();
 }catch(err){
   console.error(err);
   state.messages[state.messages.length-1][1]="I hit a local inference error. Reload the page and try again.";
   aiError="Inference failed. Your model stays local; no API key was exposed.";
   persist();render();
 }
}
;

// Boot the application after all view and event handlers are defined.
function boot(){
 try{
  render();
 }catch(error){
  console.error("NorthStar boot failure:",error);
  const app=document.querySelector("#app");
  if(app){
   app.innerHTML=`<main style="min-height:100vh;display:grid;place-items:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;background:#f5f8fc;color:#0f172a"><section style="max-width:560px;width:100%;padding:24px;border-radius:24px;background:rgba(255,255,255,.9);border:1px solid #e2e8f0;box-shadow:0 20px 60px rgba(15,23,42,.08)"><strong style="display:block;font-size:18px;margin-bottom:8px">NorthStar could not start</strong><p style="color:#64748b;line-height:1.5;margin:0 0 16px">The application hit a startup error. Reload once; if the problem remains, send this screen to the NorthStar developer.</p><button onclick="location.reload()" style="border:0;border-radius:14px;padding:11px 16px;background:#2563eb;color:white;font-weight:800">Reload NorthStar</button></section></main>`;
  }
 }
}
boot();
