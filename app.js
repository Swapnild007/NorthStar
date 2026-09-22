const VERSION="3.2.0";
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
const LAB_INTELLIGENCE=window.NORTHSTAR_LAB_INTELLIGENCE||{version:"1.0",scoring:{evidence:20,reasoning:35,artifact:20,finding:15,confidence:10},labs:{}};

const curriculum=(Array.isArray(window.NORTHSTAR_CURRICULUM)?window.NORTHSTAR_CURRICULUM:[]).map(c=>({...c,lessons:(c.lessons||[]).map(l=>({...l,...(window.NORTHSTAR_LESSON_ENRICHMENT?.[l.id]||{})}))}));
const labs=window.NORTHSTAR_LABS||[];
const LAB_DETAILS=window.NORTHSTAR_LAB_DETAILS||{};
const LAB_TRACKS=window.NORTHSTAR_LAB_TRACKS||[];
const getLabDetails=id=>{const d=LAB_DETAILS?.[id];return d&&Array.isArray(d.checkpoints)&&Array.isArray(d.evidence)?d:{scenario:"Controlled cybersecurity investigation.",evidence:["No scenario evidence loaded. Reload the current application bundle."],checkpoints:["Describe the observation available in the lab.","Identify what evidence is missing.","State the next safe investigation step."],hints:["Start with observable facts.","Separate evidence from inference.","Choose a controlled next observation."],deliverable:"Document observations, reasoning and next action.",success:"Produce an evidence-backed investigation note."};};
function labWorkspaceKey(id){return "ns_lab_workspace_"+id}
function labWorkspace(id){
 const fallback={answers:{},revealedHints:[],note:""};
 return {...fallback,...readStoredJSON(labWorkspaceKey(id),fallback)};
}
function saveLabWorkspace(id,w){localStorage.setItem(labWorkspaceKey(id),JSON.stringify(w))}
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
 app.innerHTML=`<div class="app-shell ${state.route==="lab"?"lab-mode":""}">
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

function cyberToolState(id){const w=labWorkspace(id);return {...w,selectedEvidence:Number.isInteger(w.selectedEvidence)?w.selectedEvidence:0,query:String(w.query||""),locker:Array.isArray(w.locker)?w.locker:[],terminalHistory:Array.isArray(w.terminalHistory)?w.terminalHistory:[]};}
function labTerminalOutput(l,w,cmd){const c=String(cmd||"").trim(),d=getLabDetails(l.id),e=d.evidence||[],x=c.toLowerCase();if(!c)return "";if(x==="help")return ["AVAILABLE COMMANDS","  help","  status","  evidence","  inspect <n>","  filter <term>","  timeline","  connections","  process-tree","  headers","  cert","  iam","  image","  mail","  prompt","  findings","  whoami","  clear","This console is simulated. Commands never execute on a real system."].join("\n");if(x==="status")return ["CYBERRANGE STATUS","  mode: SIMULATION","  target: TRAINING DATASET","  external IO: DISABLED","  evidence: "+e.length+" records","  checkpoints: "+d.checkpoints.length,"  locked evidence: "+(w.locker||[]).length].join("\n");if(x==="whoami")return ["northstar@lab-sandbox","role: learner","access: controlled simulation"].join("\n");if(x==="evidence"||x==="timeline")return e.map((v,i)=>"["+String(i+1).padStart(2,"0")+"] "+v).join("\n");if(x==="connections")return e.filter(v=>/connection|HTTPS|TCP|TLS|DNS|→/i.test(v)).join("\n")||"No connection telemetry in this lab.";if(x==="process-tree")return e.filter(v=>/process|powershell|chrome|winword|explorer|agent|executable/i.test(v)).join("\n")||"No process telemetry in this lab.";if(x==="headers")return e.filter(v=>/HTTP|Cookie|Set-Cookie|GET|POST|403|401|302/i.test(v)).join("\n")||"No HTTP telemetry in this lab.";if(x==="cert")return e.filter(v=>/TLS|certificate|issuer|CN=|validation|ClientHello|ServerHello/i.test(v)).join("\n")||"No certificate telemetry in this lab.";if(x==="iam")return e.filter(v=>/role=|AssumeRole|iam:|user=|source=|identity/i.test(v)).join("\n")||"No IAM telemetry in this lab.";if(x==="image")return e.filter(v=>/image=|container=|digest=|base=|port|runtime|package|user=/i.test(v)).join("\n")||"No container metadata in this lab.";if(x==="mail")return e.filter(v=>/From:|Return-Path|SPF|DKIM|DMARC|URL|email|message/i.test(v)).join("\n")||"No mail telemetry in this lab.";if(x==="prompt")return e.filter(v=>/SYSTEM|USER|TOOL|MODEL|prompt|policy|untrusted/i.test(v)).join("\n")||"No AI prompt telemetry in this lab.";if(x==="findings")return (w.locker||[]).length?["EVIDENCE LOCKER","",...(w.locker.map(n=>e[n]||""))].join("\n"):"Evidence locker is empty.";if(x.startsWith("filter "))return e.filter(v=>v.toLowerCase().includes(c.slice(7).trim().toLowerCase())).join("\n")||"No matching evidence.";if(x.startsWith("inspect ")){const n=Number(x.split(/\s+/)[1]);return Number.isInteger(n)&&n>=1&&n<=e.length?["EVENT "+String(n).padStart(2,"0"),e[n-1],"","Analyst note: observation only. Explain why it matters before forming a conclusion."].join("\n"):"Usage: inspect <evidence number>";}if(x==="clear")return "__CLEAR__";return "command not found: "+c+"\nType 'help'.";}function crTerminal(l,w){const history=Array.isArray(w.terminalHistory)?w.terminalHistory:[];const lines=history.flatMap(v=>["> "+v.cmd,v.out==="__CLEAR__"?"":v.out]).filter(Boolean);const output=lines.length?lines.map(v=>"<div>"+esc(v).replace(/\n/g,"<br>")+"</div>").join(""):'<div class="terminal-dim">CyberRange shell ready. Type <b>help</b> to inspect the safe command set.</div>';return crPanel("SECURE TERMINAL","SIMULATED SHELL",'<div class="cr-terminal"><div class="cr-terminal-bar"><span><i></i><i></i><i></i></span><b>northstar@cyberrange:~</b><em>NO EXECUTION</em></div><div class="cr-terminal-output">'+output+'</div><form data-lab-terminal-form class="cr-terminal-form"><span>›</span><input data-lab-terminal autocomplete="off" spellcheck="false" placeholder="help / status / evidence / inspect 01"><button>RUN</button></form></div>');}
function crPanel(title,meta,body,cls=""){return '<section class="cr-panel '+cls+'"><header><span>'+esc(title)+'</span><em>'+esc(meta||"")+'</em></header>'+body+'</section>';}
function crOperatorHud(l,d,w,answered,pct){const locked=(w.locker||[]).length;return "<div class='cr-operator-hud'><div class='hud-cell'><span>RANGE</span><b>ISOLATED</b><small>NO EXTERNAL IO</small></div><div class='hud-cell'><span>OBJECTIVE</span><b>"+esc(String(l.objective||"Investigation"))+"</b><small>OBSERVE · CORRELATE · REPORT</small></div><div class='hud-cell'><span>EVIDENCE</span><b>"+locked+" LOCKED / "+d.evidence.length+"</b><small>LOCAL EVIDENCE STORE</small></div><div class='hud-cell hud-progress'><span>PROGRESS</span><b>"+pct+"%</b><div><i style='width:"+pct+"%'></i></div></div></div>";}
function cyberHeader(l){return '<div class="cr-header"><div><button class="back" data-route="labs">← CyberRange</button><div class="cr-kicker">NORTHSTAR // CYBERRANGE 2.0</div><h1>'+esc(l.title)+'</h1><p>'+esc(l.subtitle)+' · <b>'+esc(l.level)+'</b> · '+esc(l.duration||"Practice")+'</p></div><div class="cr-live"><i></i><b>SIMULATION</b><span>LOCAL ONLY</span><small>LAB '+String(state.selectedLab+1).padStart(3,"0")+'</small></div></div>';}
function crEvidence(l,w){const data=Array.isArray(l?.evidence)?l:getLabDetails(l?.id);const q=w.query.toLowerCase();const rows=data.evidence.map((x,i)=>({x,i})).filter(o=>!q||o.x.toLowerCase().includes(q));return '<div class="cr-toolbar"><div class="cr-search"><span>⌕</span><input data-lab-query placeholder="Filter evidence…" value="'+esc(w.query)+'"></div><span class="cr-count">'+rows.length+'/'+data.evidence.length+' EVENTS</span></div><div class="cr-table">'+rows.map(o=>'<div class="cr-row-wrap"><button class="cr-row '+(o.i===w.selectedEvidence?"selected":"")+'" data-lab-select="'+o.i+'"><span>'+String(o.i+1).padStart(2,"0")+'</span><code>'+esc(o.x)+'</code><i>INSPECT</i></button><button class="cr-lock" data-lab-lock="'+o.i+'">'+((w.locker||[]).includes(o.i)?"UNLOCK":"LOCK")+'</button></div>').join("")+'</div>';};

function practiceScenario(l){
 const title=String(l.title||"this lesson").trim();
 const concepts=(l.concepts||[]).filter(Boolean).slice(0,6);
 const objective=String(l.objective||l.learningGoal||"").trim();
 const rawCase=String(l.case||"").trim();
 const generic=/scoped problem|must collect enough evidence|defensible technical decision|analyze the system, identify uncertainty/i.test(rawCase);
 let scenario=generic?"":rawCase;
 let task="";
 if(/tcp\/ip mental model/i.test(title)){
  scenario="A packet is moving from a client to a server. Use the TCP/IP model to explain what each layer contributes, which address identifies the endpoint at each layer, and where a failure would appear in evidence.";
  task="Trace one client-to-server connection from Ethernet framing through ARP and IP delivery to TCP. Name the MAC addresses, IP addresses and ports involved, then explain what a packet capture should show at each step.";
 }else if(/http|web architecture/i.test(title)){
  scenario="A browser requests a web page from an application. Trace the request from the browser to the server and identify where DNS, TCP, TLS, HTTP and the application boundary appear.";
  task="Draw the request path in order, identify the protocol at each stage, and state one observable failure signal for each stage.";
 }else if(/tls|certificate/i.test(title)){
  scenario="A client connects to a service over TLS and receives a certificate chain. Determine what the client must validate before trusting the connection.";
  task="Trace the trust decision from certificate presentation to hostname, validity and chain verification. State what evidence would prove each validation succeeded or failed.";
 }else if(/linux|operating system|process|permission|filesystem/i.test(title)){
  scenario="A Linux host shows unexpected behavior from a running process. Investigate the process, its identity, permissions, resources and observable activity without changing the system.";
  task="Trace the process from execution to resource access. Identify the security boundary involved, the evidence you would collect, and the observation that would distinguish expected behavior from a compromise.";
 }else if(/sql|database/i.test(title)){
  scenario="An application reads and writes records through a database. Investigate how input reaches the query layer and how access should be constrained.";
  task="Trace the data from application input to database operation. Identify the trust boundary, the expected authorization decision, and the evidence that would reveal unsafe query construction or excessive privilege.";
 }else if(/python|programming|algorithm|data structure/i.test(title)){
  scenario="You need to implement and verify a small program that processes security-relevant input.";
  task="State the input, transformation and expected output for this lesson. Work one concrete example, identify an edge case, and explain how you would test it.";
 }else{
  scenario=generic?"":scenario;
  task="Demonstrate the objective of this lesson by applying "+title+" to a concrete security situation. Explain the mechanism, identify the relevant boundary or failure mode, and specify the evidence that would support your conclusion.";
 }
 if(!scenario)scenario="Apply "+title+" to a realistic security situation using the concepts and objective of this lesson.";
 const procedure=[
  "Define the system, actors, assets and scope.",
  concepts.length?"Identify the relevant concepts: "+concepts.join(", ")+".":"Identify the lesson concepts that control the outcome.",
  "Trace the mechanism step by step and state the expected behavior.",
  "Identify the failure, abuse case or boundary condition that would change the conclusion.",
  "Specify the evidence you would collect and explain why it is sufficient.",
  "Write your conclusion, one limitation and one follow-up question."
 ];
 return {scenario,task,objective,procedure};
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
 h+='<div><span class="eyebrow">Application</span><h2>Practice by doing</h2><p class="subtitle">This is the application stage. Solve the scenario before reading any confirmation.</p></div>';
 h+='<div class="inset case-card"><span class="eyebrow">Scenario</span><p class="subtitle">'+esc(p.scenario)+'</p></div>';
 h+='<div class="inset"><span class="eyebrow">Your task</span><h3>'+esc(p.task)+'</h3>';
 if(p.objective)h+='<p class="subtitle"><b>Lesson objective:</b> '+esc(p.objective)+'</p>';
 h+='<p class="subtitle">Your answer should contain the mechanism, evidence, conclusion and one limitation.</p></div>';
 h+='<div class="inset"><span class="eyebrow">Investigation procedure</span><ol class="practice-steps">'+p.procedure.map(x=>'<li>'+esc(String(x).replace(/^\s*\d+[.)]\s*/,""))+'</li>').join("")+'</ol></div>';
 h+='<div class="inset"><span class="eyebrow">Evidence checkpoint</span><strong>Produce an evidence artifact</strong><p class="subtitle">'+esc(data.evidence||"Record scope, observations, reasoning, conclusion, limitation and next action.")+'</p></div>';
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
  if(data.evidence)evidence.push("Evidence artifact: "+data.evidence);
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
  if(data.evidence)evidence.push("Evidence to produce: "+data.evidence);
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
 document.querySelectorAll("[data-lab]").forEach(b=>{b.onclick=()=>{state.selectedLab=Number(b.dataset.lab);state.labTool="overview";state.labState[state.selectedLab]=state.labState[state.selectedLab]==="completed"?"completed":"started";persist();state.route="lab";render()};});
 document.querySelectorAll("[data-lab-tool]").forEach(b=>b.onclick=()=>{state.labTool=b.dataset.labTool;render()});
 document.querySelectorAll("[data-lab-select]").forEach(b=>b.onclick=()=>{const l=labs[state.selectedLab],w=cyberToolState(l.id);w.selectedEvidence=Number(b.dataset.labSelect);saveLabWorkspace(l.id,w);render()});
 document.querySelectorAll("[data-lab-lock]").forEach(b=>b.onclick=()=>{const l=labs[state.selectedLab],w=cyberToolState(l.id),n=Number(b.dataset.labLock);w.locker=Array.isArray(w.locker)?w.locker:[];w.locker=w.locker.includes(n)?w.locker.filter(x=>x!==n):[...w.locker,n];saveLabWorkspace(l.id,w);render()});
 document.querySelectorAll("[data-lab-terminal-form]").forEach(form=>{form.onsubmit=e=>{e.preventDefault();const input=form.querySelector("[data-lab-terminal]"),cmd=input?.value.trim();if(!cmd)return;const l=labs[state.selectedLab],w=labWorkspace(l.id),out=labTerminalOutput(l,w,cmd);w.terminalHistory=Array.isArray(w.terminalHistory)?w.terminalHistory:[];if(out==="__CLEAR__")w.terminalHistory=[];else w.terminalHistory=[...w.terminalHistory,{cmd:cmd,out:out}].slice(-12);saveLabWorkspace(l.id,w);state.labTool="console";render();};});
 document.querySelectorAll("[data-lab-query]").forEach(el=>el.oninput=()=>{const l=labs[state.selectedLab],w=cyberToolState(l.id);w.query=el.value;saveLabWorkspace(l.id,w);render()});
 document.querySelectorAll("[data-lab-answer]").forEach(el=>el.oninput=()=>{const l=labs[state.selectedLab],w=labWorkspace(l.id);w.answers=Object.assign({},w.answers,{[el.dataset.labAnswer]:el.value});saveLabWorkspace(l.id,w);});
 document.querySelectorAll("[data-lab-note]").forEach(el=>el.oninput=()=>{const w=labWorkspace(el.dataset.labNote);w.note=el.value;saveLabWorkspace(el.dataset.labNote,w);});
 document.querySelectorAll("[data-lab-finding]").forEach(el=>el.oninput=()=>{const l=labs[state.selectedLab],w=cyberToolState(l.id);w.finding=Object.assign({},w.finding,{[el.dataset.labFinding]:el.value});saveLabWorkspace(l.id,w);});
 document.querySelectorAll("[data-lab-hint]").forEach(b=>b.onclick=()=>{const l=labs[state.selectedLab],w=labWorkspace(l.id);w.revealedHints=Array.from(new Set([...(w.revealedHints||[]),Number(b.dataset.labHint)]));saveLabWorkspace(l.id,w);render();});
 const labComplete=document.querySelector("[data-lab-complete]");
 if(labComplete)labComplete.onclick=()=>{const l=labs[state.selectedLab],d=getLabDetails(l.id),w=cyberToolState(l.id),f=w.finding||{},answered=d.checkpoints.filter((_,i)=>String(w.answers?.[i]||"").trim()).length,score=labScore(l,d,w);const missing=[];if(answered<d.checkpoints.length)missing.push("all investigation checkpoints");if((w.locker||[]).length<2)missing.push("at least 2 locked evidence items");if(String(w.note||"").trim().length<120)missing.push("a 120+ character analyst narrative");if(!String(f.title||"").trim())missing.push("a finding title");if(!String(f.impact||"").trim())missing.push("impact / scope");if(!String(f.nextAction||"").trim())missing.push("a next action");if(score.total<70)missing.push("a readiness score of at least 70%");if(missing.length){alert("Complete before submission:\n• "+missing.join("\n• "));return;}state.labState[state.selectedLab]="completed";w.completedAt=new Date().toISOString();w.assessment=score;saveLabWorkspace(l.id,w);persist();render()};
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
