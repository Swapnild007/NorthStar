const VERSION="0.3.0";

const savedCompleted=JSON.parse(localStorage.getItem("ns_completed_lessons")||"[]");
const savedLabs=JSON.parse(localStorage.getItem("ns_lab_state")||"{}");

const state={
  route:"home", filter:"All", search:"",
  completedLessons:Array.isArray(savedCompleted)?savedCompleted:[],
  labState:typeof savedLabs==="object"&&savedLabs?savedLabs:{},
  messages:[["ai","I’m your NorthStar companion. Ask about a concept, lab, or learning path."]],
  selectedCourse:0, selectedLesson:0, selectedLab:0, lessonTab:"Read", checkAnswer:""
};

const labs=[
  ["Packet Recon","Analyze a controlled packet capture","Beginner","Inspect packets, identify protocols, and document observations."],
  ["Web Surface","Map a deliberately vulnerable web surface","Intermediate","Enumerate an intentionally isolated application and record its attack surface."],
  ["Detection Drill","Turn telemetry into a detection rule","Intermediate","Inspect simulated telemetry and produce a defensible detection hypothesis."],
  ["Incident Room","Triage a simulated security incident","Advanced","Build a timeline from controlled evidence and document containment decisions."]
];

const nav=[["home","Home","⌂"],["learn","Learn","▤"],["labs","Labs","⌁"],["ai","AI","✦"],["progress","Progress","◉"]];
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const course=()=>NORTHSTAR_CURRICULUM[state.selectedCourse];
const lesson=()=>course().lessons[state.selectedLesson];
const totalLessons=NORTHSTAR_CURRICULUM.reduce((n,c)=>n+c.lessons.length,0);
const completedCount=()=>state.completedLessons.length;
const labCompletedCount=()=>Object.values(state.labState).filter(v=>v==="completed").length;
const overallPercent=()=>Math.min(100,Math.round(((completedCount()/totalLessons)+(labCompletedCount()/labs.length))/2*100));
const persist=()=>{localStorage.setItem("ns_completed_lessons",JSON.stringify(state.completedLessons));localStorage.setItem("ns_lab_state",JSON.stringify(state.labState));};
const go=r=>{state.route=r;window.scrollTo({top:0,behavior:"smooth"});render();};

function render(){
  const app=document.querySelector("#app");
  app.innerHTML=`<main class="shell"><header class="top"><div class="brand"><span class="mark">N</span><span>NorthStar</span></div><span class="eyebrow">v${VERSION}</span></header><div id="view"></div><nav class="nav" aria-label="Primary navigation">${nav.map(n=>`<button class="${state.route===n[0]||(["lesson","course"].includes(state.route)&&n[0]==="learn")||(["lab"].includes(state.route)&&n[0]==="labs")?"active":"" )}" data-route="${n[0]}" aria-label="${n[1]}"><span class="nav-icon">${n[2]}</span>${n[1]}</button>`).join("")}</nav></main>`;
  document.querySelector("#view").innerHTML=(views[state.route]||views.home)();
  bind();
}

const views={
home:()=>{
 const p=overallPercent(), next=NORTHSTAR_CURRICULUM.findIndex(c=>c.lessons.some(l=>!state.completedLessons.includes(l.id)));
 const ci=next<0?0:next, c=NORTHSTAR_CURRICULUM[ci], li=c.lessons.findIndex(l=>!state.completedLessons.includes(l.id));
 const lessonIndex=li<0?0:li;
 return `<section class="fade"><div class="hero glass"><span class="eyebrow">Capability platform</span><h1 class="title">Your capability.<br>Your path.<br>Your evidence.</h1><p class="subtitle">A structured cybersecurity environment for learning, practicing, and proving real-world capability.</p><div class="grid stats"><div class="card glass stat"><b>${p}%</b><span>Capability progress</span></div><div class="card glass stat"><b>${labs.length}</b><span>Labs available</span></div><div class="card glass stat"><b>${completedCount()}/${totalLessons}</b><span>Lessons complete</span></div></div></div>
 <div class="section"><div class="section-head"><h2>Continue learning</h2><button class="action" data-route="learn">View path</button></div><button class="card glass lesson clickable" data-course="${ci}" data-lesson="${lessonIndex}" style="width:100%;text-align:left"><div class="icon">${c.code}</div><div class="lesson-main"><strong>${c.lessons[lessonIndex].title}</strong><small>${c.title} · ${c.lessons[lessonIndex].objective}</small><div class="progress"><i style="width:${state.completedLessons.includes(c.lessons[lessonIndex].id)?100:18}%"></i></div></div><b>${state.completedLessons.includes(c.lessons[lessonIndex].id)?"100":"18"}%</b></button></div>
 <div class="section grid two"><div class="card glass"><span class="eyebrow">Next action</span><h2>Turn theory into evidence</h2><p class="subtitle">Open a controlled lab and connect your learning to an observable task.</p><button class="chip active" data-route="labs" style="margin-top:14px">Open Labs →</button></div><div class="card glass"><span class="eyebrow">Capability snapshot</span><div class="skill"><span>Foundation</span><b>${Math.min(100,Math.round(completedCount()/10*100))}%</b></div><div class="skill"><span>Network</span><b>${Math.min(100,Math.round(state.completedLessons.filter(id=>id.startsWith("ns-")).length/5*100))}%</b></div><div class="skill"><span>Defensive</span><b>${Math.min(100,Math.round(state.completedLessons.filter(id=>id.startsWith("ds-")).length/5*100))}%</b></div></div></div></section>`;
},
learn:()=>{
 const filtered=state.filter==="All"?NORTHSTAR_CURRICULUM:NORTHSTAR_CURRICULUM.filter(c=>c.category===state.filter);
 const q=state.search.trim().toLowerCase();
 const shown=filtered.filter(c=>!q||c.title.toLowerCase().includes(q)||c.description.toLowerCase().includes(q)||c.lessons.some(l=>l.title.toLowerCase().includes(q)));
 return `<section class="fade"><span class="eyebrow">Curriculum</span><h1 class="title">Build the stack.</h1><p class="subtitle">A real course → lesson structure with objectives, practice and checks.</p><div class="tabs" role="tablist">${["All","Foundation","Network","Defensive","Offensive"].map(x=>`<button role="tab" aria-selected="${state.filter===x}" class="chip ${state.filter===x?"active":""}" data-filter="${x}">${x}</button>`).join("")}</div><div class="search-row"><input id="curriculum-search" value="${esc(state.search)}" placeholder="Search courses or lessons" aria-label="Search curriculum"></div><div class="list section">${shown.length?shown.map((c)=>{const i=NORTHSTAR_CURRICULUM.indexOf(c);const done=c.lessons.filter(l=>state.completedLessons.includes(l.id)).length;return `<button class="card glass school clickable" data-course="${i}" style="width:100%;text-align:left"><div class="icon">${c.code}</div><div><strong>${c.title}</strong><p>${c.description}</p></div><span class="badge ${done===c.lessons.length?"done":""}">${done}/${c.lessons.length}</span></button>`;}).join(""):'<div class="empty card glass">No curriculum items match your search.</div>'}</div><div class="section card glass"><span class="eyebrow">Lesson engine</span><h2>Course → Lesson → Read → Practice → Check</h2><p class="subtitle">Completion is now tracked per lesson rather than per course.</p></div></section>`;
},
course:()=>{
 const c=course();
 return `<section class="fade"><button class="back" data-route="learn">← Back to curriculum</button><div class="card glass"><span class="eyebrow">Course ${c.code} · ${c.category}</span><h1 class="title" style="font-size:36px">${c.title}</h1><p class="subtitle">${c.description}</p><div class="list section">${c.lessons.map((l,i)=>{const done=state.completedLessons.includes(l.id);return `<button class="card glass school clickable" data-course="${state.selectedCourse}" data-lesson="${i}" style="width:100%;text-align:left"><div class="icon">${String(i+1).padStart(2,"0")}</div><div><strong>${l.title}</strong><p>${l.objective}</p></div><span class="badge ${done?"done":""}">${done?"✓ Done":"Start"}</span></button>`;}).join("")}</div></div></section>`;
},
lesson:()=>{
 const c=course(), l=lesson(), done=state.completedLessons.includes(l.id);
 let panel="";
 if(state.lessonTab==="Read") panel=`<h2>What to understand</h2><p class="subtitle">${l.read}</p><div class="card inset"><strong>Objective</strong><p class="subtitle">${l.objective}</p></div>`;
 else if(state.lessonTab==="Practice") panel=`<h2>Practice</h2><p class="subtitle">${l.practice}</p><div class="card inset"><strong>Evidence checkpoint</strong><p class="subtitle">Write your observation in your own words before checking the answer.</p></div>`;
 else panel=`<h2>Check</h2><p class="subtitle">${l.check.q}</p><div class="check-options">${l.check.options.map(x=>`<button class="option ${state.checkAnswer===x?"selected":""}" data-answer="${esc(x)}">${x}</button>`).join("")}</div><p class="feedback">${state.checkAnswer?(state.checkAnswer===l.check.answer?"Correct.":"Not quite. Re-read the lesson and try again."):"Select an answer to check it."}</p>`;
 return `<section class="fade"><button class="back" data-route="course">← Back to ${c.title}</button><div class="card glass"><span class="eyebrow">Lesson ${String(state.selectedLesson+1).padStart(2,"0")} · ${c.title}</span><h1 class="title" style="font-size:36px">${l.title}</h1><p class="subtitle">${l.objective}</p><div class="tabs" role="tablist">${["Read","Practice","Check"].map(t=>`<button role="tab" aria-selected="${state.lessonTab===t}" class="chip ${state.lessonTab===t?"active":""}" data-lesson-tab="${t}">${t}</button>`).join("")}</div><div class="section tab-panel">${panel}</div><div class="lesson-footer"><span class="status ${done?"success":""}">${done?"✓ Completed":"In progress"}</span><button class="chip active" data-complete-lesson>${done?"Completed":"Mark lesson complete"}</button></div></div></section>`;
},
labs:()=>`<section class="fade"><span class="eyebrow">Practice environment</span><h1 class="title">Labs that leave evidence.</h1><p class="subtitle">Controlled exercises designed to turn concepts into observable skills.</p><div class="list section">${labs.map((l,i)=>{const s=state.labState[i]||"ready";return `<article class="card glass lesson lab"><div class="icon">0${i+1}</div><div class="lesson-main"><strong>${l[0]}</strong><small>${l[1]}</small></div><button class="badge ${s==="completed"?"done":""}" data-lab="${i}">${s==="completed"?"Done":s==="started"?"Resume":"Start"}</button></article>`;}).join("")}</div><div class="section card glass"><span class="eyebrow">Lab status</span><h2>Execution layer</h2><p class="subtitle">The interface is ready for a future isolated sandbox/runner. This phase does not pretend that a real execution environment exists.</p></div></section>`,
lab:()=>{const l=labs[state.selectedLab],status=state.labState[state.selectedLab]||"ready";return `<section class="fade"><button class="back" data-route="labs">← Back to labs</button><div class="card glass"><span class="eyebrow">Controlled lab</span><h1 class="title" style="font-size:36px">${l[0]}</h1><p class="subtitle">${l[1]}.</p><div class="section card inset"><span class="badge ${status==="completed"?"done":""}">${status==="completed"?"Completed":status==="started"?"In progress":l[2]}</span><h2>Objective</h2><p class="subtitle">${l[3]}</p><h2>Runner status</h2><p class="subtitle">${status==="completed"?"Evidence checkpoint recorded locally.":"Not connected. This phase validates the interface and workflow only."}</p></div><div class="lesson-footer"><button class="chip" data-route="labs">Return to labs</button><button class="chip active" data-lab-complete>${status==="completed"?"Completed":status==="started"?"Complete lab":"Start lab"}</button></div></div></section>`},
ai:()=>`<section class="fade"><span class="eyebrow">AI companion</span><h1 class="title">Think with the system.</h1><p class="subtitle">Use the companion to explain, challenge, and connect what you are learning.</p><div class="tabs"><button class="chip" data-prompt="Explain TCP three-way handshake simply">Explain a concept</button><button class="chip" data-prompt="Give me a networking practice question">Practice question</button><button class="chip" data-prompt="What should I learn next?">Next step</button></div><div class="section card glass chat"><div class="messages">${state.messages.map(m=>`<div class="msg ${m[0]==="user"?"user":""}">${esc(m[1])}</div>`).join("")}</div><form class="composer" id="chat"><input id="prompt" autocomplete="off" placeholder="Ask about a NorthStar concept"><button class="send">Send</button></form></div></section>`,
progress:()=>{const p=overallPercent();return `<section class="fade"><span class="eyebrow">Progress</span><h1 class="title">See the evidence.</h1><div class="section grid two"><div class="card glass progress-card"><div class="ring" style="--p:${p}%"><span>${p}%</span></div><h2>Capability path</h2><p class="subtitle">${completedCount()} of ${totalLessons} lessons and ${labCompletedCount()} of ${labs.length} labs completed.</p></div><div class="card glass"><span class="eyebrow">Skill matrix</span>${[["Foundation",state.completedLessons.filter(id=>["sf-","sc-","se-"].some(x=>id.startsWith(x))).length],["Network",state.completedLessons.filter(id=>id.startsWith("ns-")).length],["Defensive",state.completedLessons.filter(id=>id.startsWith("ds-")).length],["Offensive",state.completedLessons.filter(id=>id.startsWith("os-")).length]].map(s=>`<div class="skill"><span>${s[0]}</span><div class="meter"><i style="width:${Math.min(100,s[1]/5*100)}%"></i></div></div>`).join("")}</div></div><div class="section grid stats"><div class="card glass stat"><b>${completedCount()}</b><span>Lessons complete</span></div><div class="card glass stat"><b>${labCompletedCount()}</b><span>Labs complete</span></div><div class="card glass stat"><b>${totalLessons-completedCount()}</b><span>Lessons remaining</span></div></div></section>`;}
};

function bind(){
 document.querySelectorAll("[data-route]").forEach(b=>b.onclick=()=>go(b.dataset.route));
 document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;render()});
 const search=document.querySelector("#curriculum-search"); if(search){search.oninput=()=>{state.search=search.value;render();const el=document.querySelector("#curriculum-search");el.focus();el.setSelectionRange(el.value.length,el.value.length);};}
 document.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{state.selectedCourse=Number(b.dataset.course);state.selectedLesson=Number(b.dataset.lesson||0);state.lessonTab="Read";state.checkAnswer="";state.route=b.dataset.lesson!==undefined?"lesson":"course";render();});
 document.querySelectorAll("[data-lesson-tab]").forEach(b=>b.onclick=()=>{state.lessonTab=b.dataset.lessonTab;render()});
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{state.checkAnswer=b.dataset.answer;render()});
 const complete=document.querySelector("[data-complete-lesson]"); if(complete)complete.onclick=()=>{if(!state.completedLessons.includes(lesson().id))state.completedLessons.push(lesson().id);persist();render();};
 document.querySelectorAll("[data-lab]").forEach(b=>b.onclick=()=>{state.selectedLab=Number(b.dataset.lab);state.labState[state.selectedLab]=state.labState[state.selectedLab]==="completed"?"completed":"started";persist();state.route="lab";render();});
 const labComplete=document.querySelector("[data-lab-complete]");if(labComplete)labComplete.onclick=()=>{state.labState[state.selectedLab]="completed";persist();render();};
 document.querySelectorAll("[data-prompt]").forEach(b=>b.onclick=()=>{const input=document.querySelector("#prompt");if(input){input.value=b.dataset.prompt;input.focus();}});
 const form=document.querySelector("#chat");if(form)form.onsubmit=e=>{e.preventDefault();const input=document.querySelector("#prompt"),q=input.value.trim();if(!q)return;state.messages.push(["user",q],["ai","For this UI phase, the companion is a local interaction shell. A real model connection will be added only when the backend contract is defined."]);render();};
}
render();