const VERSION="0.2.0";

const savedCompleted=JSON.parse(localStorage.getItem("ns_completed_lessons")||"[]");
const savedLabs=JSON.parse(localStorage.getItem("ns_lab_state")||"{}");

const state={
  route:"home",
  filter:"All",
  completedLessons:Array.isArray(savedCompleted)?savedCompleted:[],
  labState:typeof savedLabs==="object"&&savedLabs?savedLabs:{},
  messages:[["ai","I’m your NorthStar companion. Ask about a concept, lab, or learning path."]],
  selectedCourse:0,
  selectedLab:0,
  lessonTab:"Read",
  checkAnswer:""
};

const curriculum=[
  ["01","Security Foundations","Networking, Linux, identity and core security concepts","12 lessons","Foundation"],
  ["02","Network Security","TCP/IP, segmentation, protocols, firewalls and traffic analysis","16 lessons","Network"],
  ["03","Systems & Cloud","Operating systems, cloud architecture and hardening","14 lessons","Foundation"],
  ["04","Defensive Security","Detection engineering, logs, SIEM and incident response","18 lessons","Defensive"],
  ["05","Offensive Security","Web, API, application and adversary simulation fundamentals","20 lessons","Offensive"],
  ["06","Security Engineering","Automation, secure development and security architecture","15 lessons","Foundation"]
];

const labs=[
  ["Packet Recon","Analyze a controlled packet capture","Beginner","Inspect packets, identify protocols, and document observations."],
  ["Web Surface","Map a deliberately vulnerable web surface","Intermediate","Enumerate an intentionally isolated application and record its attack surface."],
  ["Detection Drill","Turn telemetry into a detection rule","Intermediate","Inspect simulated telemetry and produce a defensible detection hypothesis."],
  ["Incident Room","Triage a simulated security incident","Advanced","Build a timeline from controlled evidence and document containment decisions."]
];

const nav=[
  ["home","Home","⌂"],
  ["learn","Learn","▤"],
  ["labs","Labs","⌁"],
  ["ai","AI","✦"],
  ["progress","Progress","◉"]
];

const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const lessonId=i=>"course-"+i;
const totalLessons=curriculum.length;
const completedCount=state=>state.completedLessons.length;
const labCompletedCount=state=>Object.values(state.labState).filter(v=>v==="completed").length;
const overallPercent=()=>Math.min(100,Math.round(((completedCount(state)/totalLessons)+(labCompletedCount(state)/labs.length))/2*100));

const persist=()=>{
  localStorage.setItem("ns_completed_lessons",JSON.stringify(state.completedLessons));
  localStorage.setItem("ns_lab_state",JSON.stringify(state.labState));
};

const go=r=>{state.route=r;window.scrollTo({top:0,behavior:"smooth"});render()};

function render(){
  const app=document.querySelector("#app");
  app.innerHTML=`<main class="shell">
    <header class="top">
      <div class="brand"><span class="mark">N</span><span>NorthStar</span></div>
      <span class="eyebrow">v${VERSION}</span>
    </header>
    <div id="view"></div>
    <nav class="nav" aria-label="Primary navigation">
      ${nav.map(n=>`<button class="${state.route===n[0]||(["lesson"].includes(state.route)&&n[0]==="learn")||(["lab"].includes(state.route)&&n[0]==="labs")?"active":""}" data-route="${n[0]}" aria-label="${n[1]}">
        <span class="nav-icon">${n[2]}</span>${n[1]}
      </button>`).join("")}
    </nav>
  </main>`;
  document.querySelector("#view").innerHTML=(views[state.route]||views.home)();
  bind();
}

const views={
home:()=>{
  const p=overallPercent();
  return `<section class="fade">
    <div class="hero glass">
      <span class="eyebrow">Capability platform</span>
      <h1 class="title">Your capability.<br>Your path.<br>Your evidence.</h1>
      <p class="subtitle">A structured cybersecurity environment for learning, practicing, and proving real-world capability.</p>
      <div class="grid stats">
        <div class="card glass stat"><b>${p}%</b><span>Capability progress</span></div>
        <div class="card glass stat"><b>${labs.length}</b><span>Labs available</span></div>
        <div class="card glass stat"><b>${completedCount(state)}</b><span>Lessons complete</span></div>
      </div>
    </div>

    <div class="section">
      <div class="section-head"><h2>Continue learning</h2><button class="action" data-route="learn">View path</button></div>
      <button class="card glass lesson clickable" data-course="1" style="width:100%;text-align:left">
        <div class="icon">02</div>
        <div class="lesson-main"><strong>Network Security</strong><small>TCP/IP · traffic · segmentation</small>
          <div class="progress"><i style="width:${state.completedLessons.includes(lessonId(1))?100:42}%"></i></div>
        </div><b>${state.completedLessons.includes(lessonId(1))?"100":"42"}%</b>
      </button>
    </div>

    <div class="section grid two">
      <div class="card glass">
        <span class="eyebrow">Next action</span>
        <h2>Complete your first packet analysis</h2>
        <p class="subtitle">Move from theory to observable evidence in a controlled lab.</p>
        <button class="chip active" data-route="labs" style="margin-top:14px">Open Labs →</button>
      </div>
      <div class="card glass">
        <span class="eyebrow">Capability snapshot</span>
        <div class="skill"><span>Networking</span><b>${state.completedLessons.includes(lessonId(1))?100:42}%</b></div>
        <div class="skill"><span>Linux</span><b>${p>40?35:28}%</b></div>
        <div class="skill"><span>Detection</span><b>${labCompletedCount(state)>0?25:12}%</b></div>
      </div>
    </div>
  </section>`;
},

learn:()=>{
  const filtered=state.filter==="All"?curriculum:curriculum.filter(c=>c[4]===state.filter);
  return `<section class="fade">
    <span class="eyebrow">Curriculum</span>
    <h1 class="title">Build the stack.</h1>
    <p class="subtitle">Progress from foundations to security engineering without hiding the hard parts.</p>
    <div class="tabs" role="tablist">${["All","Foundation","Network","Defensive","Offensive"].map(x=>`<button role="tab" aria-selected="${state.filter===x}" class="chip ${state.filter===x?"active":""}" data-filter="${x}">${x}</button>`).join("")}</div>
    <div class="list">
      ${filtered.length?filtered.map(c=>{
        const i=curriculum.indexOf(c);
        const done=state.completedLessons.includes(lessonId(i));
        return `<button class="card glass school clickable" data-course="${i}" style="width:100%;text-align:left">
          <div class="icon">${c[0]}</div><div><strong>${c[1]}</strong><p>${c[2]}</p></div>
          <span class="badge ${done?"done":""}">${done?"Complete":c[3]}</span>
        </button>`;
      }).join(""):'<div class="empty card glass">No curriculum items match this filter.</div>'}
    </div>
    <div class="section card glass">
      <span class="eyebrow">Lesson engine</span><h2>Read → Practice → Check</h2>
      <p class="subtitle">Each lesson has an actual interactive tab flow and stores completion locally on this device.</p>
    </div>
  </section>`;
},

lesson:()=>{
  const c=curriculum[state.selectedCourse];
  const id=lessonId(state.selectedCourse);
  const done=state.completedLessons.includes(id);
  let panel="";
  if(state.lessonTab==="Read"){
    panel=`<h2>What to understand</h2><p class="subtitle">The TCP/IP model gives you a practical mental model for interpreting packets and network telemetry. Focus on addressing, transport behavior, ports, and the difference between a connection and an application protocol.</p><div class="card inset"><strong>Evidence checkpoint</strong><p class="subtitle">Explain the TCP three-way handshake in your own words before moving to the packet lab.</p></div>`;
  }else if(state.lessonTab==="Practice"){
    panel=`<h2>Practice</h2><p class="subtitle">Put the concept into a concrete observation. Identify these three properties in a hypothetical TCP connection.</p><div class="practice-grid"><div class="card inset"><strong>1 · Addressing</strong><p class="subtitle">Which fields identify the communicating hosts?</p></div><div class="card inset"><strong>2 · Transport</strong><p class="subtitle">Which protocol establishes reliable delivery?</p></div><div class="card inset"><strong>3 · Application</strong><p class="subtitle">Does TCP itself tell you whether the payload is HTTP, SSH, or another application protocol?</p></div></div>`;
  }else{
    panel=`<h2>Check</h2><p class="subtitle">Which sequence represents the normal TCP connection establishment?</p>
      <div class="check-options">${["SYN → SYN/ACK → ACK","ACK → SYN → FIN","SYN → ACK → RST"].map(x=>`<button class="option ${state.checkAnswer===x?"selected":""}" data-answer="${esc(x)}">${x}</button>`).join("")}</div>
      <p class="feedback" id="feedback">${state.checkAnswer?(state.checkAnswer==="SYN → SYN/ACK → ACK"?"Correct. That is the three-way handshake.":"Not quite. Revisit the transport sequence and try again."):"Select an answer to check it."}</p>`;
  }
  return `<section class="fade">
    <button class="back" data-route="learn">← Back to curriculum</button>
    <div class="card glass">
      <span class="eyebrow">Lesson ${c[0]} · ${c[1]}</span>
      <h1 class="title" style="font-size:36px">${c[1]}</h1>
      <p class="subtitle">${c[2]}.</p>
      <div class="tabs" role="tablist">${["Read","Practice","Check"].map(t=>`<button role="tab" aria-selected="${state.lessonTab===t}" class="chip ${state.lessonTab===t?"active":""}" data-lesson-tab="${t}">${t}</button>`).join("")}</div>
      <div class="section tab-panel">${panel}</div>
      <div class="lesson-footer">
        <span class="status ${done?"success":""}">${done?"✓ Completed":"In progress"}</span>
        <button class="chip active" data-complete-lesson>${done?"Completed":"Mark lesson complete"}</button>
      </div>
    </div>
  </section>`;
},

labs:()=>`<section class="fade">
  <span class="eyebrow">Practice environment</span><h1 class="title">Labs that leave evidence.</h1>
  <p class="subtitle">Controlled exercises designed to turn concepts into observable skills.</p>
  <div class="list section">${labs.map((l,i)=>{
    const s=state.labState[i]||"ready";
    return `<article class="card glass lesson lab">
      <div class="icon">0${i+1}</div><div class="lesson-main"><strong>${l[0]}</strong><small>${l[1]}</small></div>
      <button class="badge ${s==="completed"?"done":""}" data-lab="${i}">${s==="completed"?"Done":s==="started"?"Resume":"Start"}</button>
    </article>`;
  }).join("")}</div>
  <div class="section card glass"><span class="eyebrow">Lab status</span><h2>Execution layer</h2><p class="subtitle">The interface is ready for a future sandbox/runner. This phase does not pretend that a real isolated execution environment exists.</p></div>
</section>`,

lab:()=>{
  const l=labs[state.selectedLab];
  const status=state.labState[state.selectedLab]||"ready";
  return `<section class="fade"><button class="back" data-route="labs">← Back to labs</button>
    <div class="card glass"><span class="eyebrow">Controlled lab</span><h1 class="title" style="font-size:36px">${l[0]}</h1>
      <p class="subtitle">${l[1]}.</p>
      <div class="section card inset"><span class="badge ${status==="completed"?"done":""}">${status==="completed"?"Completed":status==="started"?"In progress":l[2]}</span><h2>Objective</h2><p class="subtitle">${l[3]}</p><h2>Runner status</h2><p class="subtitle">${status==="completed"?"Evidence checkpoint recorded locally.":"Not connected. This phase validates the interface and workflow only."}</p></div>
      <div class="lesson-footer">
        <button class="chip" data-route="labs">Return to labs</button>
        <button class="chip active" data-lab-complete>${status==="completed"?"Completed":status==="started"?"Complete lab":"Start lab"}</button>
      </div>
    </div>
  </section>`;
},

ai:()=>`<section class="fade">
  <span class="eyebrow">AI companion</span><h1 class="title">Think with the system.</h1>
  <p class="subtitle">Use the companion to explain, challenge, and connect what you are learning.</p>
  <div class="tabs"><button class="chip" data-prompt="Explain TCP three-way handshake simply">Explain a concept</button><button class="chip" data-prompt="Give me a networking practice question">Practice question</button><button class="chip" data-prompt="What should I learn next?">Next step</button></div>
  <div class="section card glass chat"><div class="messages">${state.messages.map(m=>`<div class="msg ${m[0]==="user"?"user":""}">${esc(m[1])}</div>`).join("")}</div>
    <form class="composer" id="chat"><input id="prompt" autocomplete="off" placeholder="Ask: explain TCP three-way handshake"><button class="send">Send</button></form>
  </div>
</section>`,

progress:()=>{
  const p=overallPercent();
  return `<section class="fade"><span class="eyebrow">Progress</span><h1 class="title">See the evidence.</h1>
    <div class="section grid two"><div class="card glass progress-card"><div class="ring" style="--p:${p}%"><span>${p}%</span></div><h2>Capability path</h2><p class="subtitle">Knowledge, practice and evidence are tracked separately.</p></div>
    <div class="card glass"><span class="eyebrow">Skill matrix</span>
      ${[["Networking",state.completedLessons.includes(lessonId(1))?100:42],["Linux",p>40?35:28],["Web Security",labCompletedCount(state)>1?30:18],["Detection",labCompletedCount(state)>0?25:12],["Automation",p>70?20:8]].map(s=>`<div class="skill"><span>${s[0]}</span><div class="meter"><i style="width:${s[1]}%"></i></div></div>`).join("")}
    </div></div>
    <div class="section grid stats"><div class="card glass stat"><b>${completedCount(state)}</b><span>Lessons</span></div><div class="card glass stat"><b>${labCompletedCount(state)}</b><span>Labs</span></div><div class="card glass stat"><b>${Math.max(0,totalLessons-completedCount(state))}</b><span>Lessons remaining</span></div></div>
  </section>`;
}
};

function bind(){
  document.querySelectorAll("[data-route]").forEach(b=>b.onclick=()=>go(b.dataset.route));

  document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;render()});

  document.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{
    state.selectedCourse=Number(b.dataset.course);
    state.lessonTab="Read";
    state.checkAnswer="";
    state.route="lesson";
    render();
  });

  document.querySelectorAll("[data-lesson-tab]").forEach(b=>b.onclick=()=>{state.lessonTab=b.dataset.lessonTab;render()});

  document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{state.checkAnswer=b.dataset.answer;render()});

  const complete=document.querySelector("[data-complete-lesson]");
  if(complete)complete.onclick=()=>{
    const id=lessonId(state.selectedCourse);
    if(!state.completedLessons.includes(id))state.completedLessons.push(id);
    persist();render();
  };

  document.querySelectorAll("[data-lab]").forEach(b=>b.onclick=()=>{
    state.selectedLab=Number(b.dataset.lab);
    state.labState[state.selectedLab]=state.labState[state.selectedLab]==="completed"?"completed":"started";
    persist();state.route="lab";render();
  });

  const labComplete=document.querySelector("[data-lab-complete]");
  if(labComplete)labComplete.onclick=()=>{
    state.labState[state.selectedLab]="completed";
    persist();render();
  };

  document.querySelectorAll("[data-prompt]").forEach(b=>b.onclick=()=>{
    const input=document.querySelector("#prompt");
    if(input){input.value=b.dataset.prompt;input.focus();}
  });

  const form=document.querySelector("#chat");
  if(form)form.onsubmit=e=>{
    e.preventDefault();
    const input=document.querySelector("#prompt");
    const q=input.value.trim();
    if(!q)return;
    state.messages.push(["user",q],["ai","For this UI phase, the companion is a local interaction shell. A real model connection will be added only when the backend contract is defined."]);
    render();
  };
}

render();