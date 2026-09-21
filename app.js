const VERSION="0.2.0";
const COURSE=window.NORTHSTAR_COURSE||{title:"Cyber Security Management & Data Science",shortTitle:"CYBER SECURITY · MANAGEMENT · DATA SCIENCE"};

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

const curriculum=Array.isArray(window.NORTHSTAR_CURRICULUM)?window.NORTHSTAR_CURRICULUM:[];
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
 selectedCourse:0,selectedLesson:0,selectedLab:0,lessonTab:"Read",checkAnswer:""
};
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const allLessons=()=>curriculum.flatMap(c=>c.lessons||[]);
const totalLessons=()=>allLessons().length;
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
 document.querySelector("#view").innerHTML=(views[state.route]||views.home)();bind();
}

const views={
 home:()=>{
  const p=overallPercent(), cp=courseProgress(1);
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
    <button class="card glass learning-card clickable" data-course="1" data-lesson="0" style="width:100%">
      <div class="course-icon">02</div><div class="course-main"><strong>${curriculum[1]?.title||"Network Security"}</strong><small>Lesson ${Math.min(5,(curriculum[1]?.lessons||[]).length)} · TCP/IP · traffic · segmentation</small><div class="progress"><i style="width:${cp||42}%"></i></div></div><b>${cp||42}%</b>
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
  const categories=["All",...new Set(curriculum.map(c=>c.category).filter(Boolean))];
  const filtered=state.filter==="All"?curriculum:curriculum.filter(c=>c.category===state.filter);
  return `<section class="fade">
   <span class="eyebrow">Academic learning path</span>
   <h1 class="title" style="font-size:42px;letter-spacing:-.055em;margin:8px 0">Build real capability.</h1>
   <p class="subtitle">${curriculum.length} pathways · ${totalLessons()} active lessons · case analysis · applied practice · assessment evidence.</p>
   <div class="tabs">${categories.map(x=>`<button class="chip ${state.filter===x?"active":""}" data-filter="${x}">${x}</button>`).join("")}</div>
   <div class="list section">${filtered.map(c=>{
     const i=curriculum.indexOf(c),p=courseProgress(i),next=(c.lessons||[]).findIndex(l=>!state.completedLessons.includes(l.id)),m=c.meta||{};
     return `<article class="card glass module-card">
       <button class="school clickable" ${(!c.lessons||!c.lessons.length)?"disabled":`data-course="${i}" data-lesson="${next<0?0:next}"`}>
        <div class="course-icon">${c.code}</div>
        <div class="course-main"><div class="module-title-row"><strong>${esc(c.title)}</strong><span class="badge ${p===100?"done":""}">${p===100?"Complete":c.status==="planned"?"Roadmap":m.level||c.category}</span></div><p>${esc(m.focus||c.description)}</p><div class="progress"><i style="width:${p}%"></i></div><small>${(c.lessons||[]).length} lessons · ${m.load||"Self-paced"} · ${p}% complete</small></div>
       </button>
       <details class="module-details">
        <summary>Module outline & academic depth</summary>
        <div class="module-detail-grid">
         <div><span class="eyebrow">Learning outcomes</span><ul>${(m.outcomes||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
         <div><span class="eyebrow">Core topics</span><div class="topic-list">${(m.topics||[]).map(x=>`<span class="topic">${esc(x)}</span>`).join("")}</div></div>
         <div><span class="eyebrow">Case analysis</span><p>${esc(m.case||"Applied case analysis.")}</p></div>
         <div><span class="eyebrow">Assessment</span><p>${esc(m.assessment||"Knowledge check and applied exercise.")}</p></div>
         <div><span class="eyebrow">Practical lab</span><p>${esc(m.lab||"Controlled practical exercise.")}</p></div>
        </div>
       </details>
     </article>`;
   }).join("")}</div>
   <div class="section card glass">
    <span class="eyebrow">Academic design</span>
    <h2>Learn → Apply → Analyze → Evidence</h2>
    <p class="subtitle">NorthStar uses a postgraduate-style applied structure: conceptual foundations, case analysis, simulations or controlled exercises, and evidence-based assessment. The benchmark is informed by publicly described IIM Information Systems, analytics, digital transformation and cybersecurity teaching approaches; this is not an official IIM curriculum.</p>
   </div>
  </section>`;
 },
 lesson:()=>{
  const c=curriculum[state.selectedCourse],l=c?.lessons?.[state.selectedLesson];if(!c||!l)return `<div class="empty card glass">Lesson unavailable.</div>`;
  const done=state.completedLessons.includes(l.id),meta=l.meta||{};
  let panel="";
  if(state.lessonTab==="Read")panel=`<div class="lesson-stack">
   <div class="lesson-meta"><span><b>Study time</b>${esc(l.time||"Self-paced")}</span><span><b>Prerequisite</b>${esc(l.prerequisite||"None")}</span></div>
   <div><h2>What to understand</h2>${String(l.read||"").split(/\\n\\n|\n\n/).filter(Boolean).map(x=>`<p class="subtitle lesson-paragraph">${esc(x)}</p>`).join("")}</div>
   <div class="inset"><strong>Core concepts</strong><div class="topic-list">${(l.concepts||[]).map(x=>`<span class="topic">${esc(x)}</span>`).join("")}</div></div>
   <div class="inset"><strong>Beginner vocabulary</strong><div class="vocab-list">${(l.glossary||[]).map(x=>`<div><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join("")}</div></div>
   ${l.visual?`<div class="visual-card"><span class="eyebrow">${esc(l.visual.title||"Visual model")}</span><p class="visual-caption">${esc(l.visual.caption||"")}</p><div class="visual-steps">${(l.visual.steps||[]).map((x,i)=>`<div class="visual-step"><span>${i+1}</span><strong>${esc(x)}</strong></div>`).join("")}</div></div>`:""}<div class="inset"><strong>Worked example</strong><p class="subtitle">${esc(l.example||"Apply the concept to a realistic security scenario.")}</p></div>
   <div class="inset"><strong>Case analysis</strong><p class="subtitle">${esc(l.case||"Analyze a controlled scenario and state your assumptions.")}</p></div>
  </div>`;
  else if(state.lessonTab==="Practice")panel=`<div class="lesson-stack">
   <div><h2>Applied practice</h2><p class="subtitle">${esc(l.practice)}</p></div>
   <div class="inset"><strong>Evidence checkpoint</strong><p class="subtitle">${esc(l.evidence||"Write your observation or answer before moving on. Keep the evidence reproducible and scoped.")}</p></div>
   <div class="inset"><strong>Common mistakes to avoid</strong><ul class="lesson-list">${(l.mistakes||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  </div>`;
  else panel=`<div class="lesson-stack"><h2>Check your understanding</h2><p class="subtitle">${esc(l.check.q)}</p><div class="check-options">${l.check.options.map(x=>`<button class="option ${state.checkAnswer===x?"selected":""}" data-answer="${esc(x)}">${esc(x)}</button>`).join("")}</div><p class="feedback">${state.checkAnswer?(state.checkAnswer===l.check.answer?"Correct. "+esc(l.check.why||""): "Not quite. Re-read the lesson and try again."):"Select an answer to check it."}</p></div>`;
  return `<section class="fade"><button class="back" data-route="learn">← Back to curriculum</button><div class="card glass lesson-card">
   <span class="eyebrow">Lesson ${c.code} · ${esc(c.title)}</span><h1>${esc(l.title)}</h1><p class="subtitle">${esc(l.objective)}</p>
   <div class="tabs">${["Read","Practice","Check"].map(t=>`<button class="chip ${state.lessonTab===t?"active":""}" data-lesson-tab="${t}">${t}</button>`).join("")}</div>
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

function skillRows(){
 const vals=[
  ["Network Security",Math.max(0,courseProgress(1))],
  ["System Security",courseProgress(2)],
  ["Defensive Security",courseProgress(3)],
  ["Offensive Security",courseProgress(4)],
  ["Security Engineering",courseProgress(5)]
 ];
 return vals.map(s=>`<div class="skill"><span>${s[0]}</span><div class="meter"><i style="width:${s[1]}%"></i></div><b>${s[1]}%</b></div>`).join("");
}

function bind(){
 document.querySelectorAll("[data-route]").forEach(b=>b.onclick=()=>go(b.dataset.route));
 document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;render()});
 document.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{state.selectedCourse=Number(b.dataset.course);state.selectedLesson=Number(b.dataset.lesson||0);state.lessonTab="Read";state.checkAnswer="";state.route="lesson";render()});
 document.querySelectorAll("[data-lesson-tab]").forEach(b=>b.onclick=()=>{state.lessonTab=b.dataset.lessonTab;render()});
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{state.checkAnswer=b.dataset.answer;render()});
 const complete=document.querySelector("[data-complete-lesson]");
 if(complete)complete.onclick=()=>{const id=lessonKey(state.selectedCourse,state.selectedLesson);if(id&&!state.completedLessons.includes(id))state.completedLessons.push(id);persist();render()};
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
   aiEngine=await webllm.CreateMLCEngine("Qwen3-0.6B-q4f16_1-MLC",{
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
 const pathSummary=curriculum.map(c=>`${c.title}: ${(c.lessons||[]).map(l=>l.title).join(", ")}`).join("\n");
 return `You are NorthStar AI Mentor, the cybersecurity tutor inside NorthStar.
Teach clearly to a beginner while remaining technically accurate.
Use the NorthStar curriculum as the primary learning map:
${pathSummary}
Focus on defensive security, secure engineering, authorized testing and controlled labs.
For offensive-security questions, keep guidance scoped to systems the learner owns or is explicitly authorized to test; do not provide instructions that facilitate real-world compromise, credential theft, malware, persistence, evasion, or destructive activity.
When useful, structure answers as concept, example, practice, and check.
Do not claim access to NorthStar backend systems or external user data.`;
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
