const VERSION="3.5.0";
const COURSE=window.NORTHSTAR_COURSE||{title:"Cyber Security Management & Data Science",shortTitle:"CYBER SECURITY · MANAGEMENT · DATA SCIENCE"};
const AI_CONFIG=window.NORTHSTAR_AI||{version:"2.0.0",provider:"Cloudflare Workers AI",mode:"cloud",model:"@cf/qwen/qwen3.8-27b",endpoint:""};

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
const AI_MESSAGES_KEY="ns_ai_messages_v2";
const savedAI=readStoredJSON(AI_MESSAGES_KEY,null);
let aiLoading=false;
let aiError="";
const state={
 route:"home",filter:"All",completedLessons:Array.isArray(savedCompleted)?savedCompleted:[],
 labState:typeof savedLabs==="object"&&savedLabs?savedLabs:{},
 messages:Array.isArray(savedAI)&&savedAI.length?savedAI:[["ai","Hi. I’m your NorthStar Mentor. I’m ready to teach, practice, review your reasoning, or coach you through a CyberRange investigation."]],
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
 localStorage.setItem(AI_MESSAGES_KEY,JSON.stringify(state.messages.slice(-40)));
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

function cyberToolState(id){const w=labWorkspace(id);return {...w,selectedEvidence:Number.isInteger(w.selectedEvidence)?w.selectedEvidence:0,query:String(w.query||""),locker:Array.isArray(w.locker)?w.locker:[],terminalHistory:Array.isArray(w.terminalHistory)?w.terminalHistory:[],finding:w.finding&&typeof w.finding==="object"?w.finding:{title:"",impact:"",severity:"Medium",confidence:"Medium",nextAction:"",alternative:""}};}
function labIntelConfig(id){return LAB_INTELLIGENCE.labs?.[id]||{capabilities:["Investigation","Evidence handling","Security reasoning"],focus:"Observe, correlate and report from controlled evidence.",remediation:"Revisit the relevant lesson prerequisites and repeat the investigation."};}
function labMasteryBand(score){const bands=Array.isArray(LAB_INTELLIGENCE.masteryBands)?LAB_INTELLIGENCE.masteryBands:[{min:0,label:"Not assessed"},{min:40,label:"Developing"},{min:70,label:"Functional"},{min:90,label:"Strong"},{min:100,label:"Demonstrated"}];return [...bands].reverse().find(b=>score>=b.min)?.label||"Not assessed";}
function labScore(l,d,w){const ev=Math.min(1,(w.locker||[]).length/Math.min(3,Math.max(1,d.evidence.length))),answers=d.checkpoints.map((_,i)=>String(w.answers?.[i]||"").trim()),answered=answers.filter(Boolean).length,depth=answers.reduce((n,a)=>n+Math.min(1,a.length/180),0)/Math.max(1,d.checkpoints.length),note=String(w.note||"").trim(),f=w.finding||{},findingParts=[f.title,f.impact,f.nextAction].filter(x=>String(x||"").trim()).length,confidence=f.confidence&&f.confidence!=="Unset"?1:0,s=LAB_INTELLIGENCE.scoring||{evidence:20,reasoning:35,artifact:20,finding:15,confidence:10},evidence=Math.round(ev*s.evidence),reasoning=Math.round((answered/d.checkpoints.length*.35+depth*.65)*s.reasoning),artifact=Math.round(Math.min(1,note.length/240)*s.artifact),finding=Math.round(findingParts/3*s.finding),conf=Math.round(confidence*s.confidence),total=Math.min(100,evidence+reasoning+artifact+finding+conf);return {total,evidence,reasoning,artifact,finding,confidence:conf,band:labMasteryBand(total)};}
function crLabIntel(l,d,w){const cfg=labIntelConfig(l.id),s=labScore(l,d,w);return crPanel("CAPABILITY & READINESS","STRUCTURAL ASSESSMENT",'<div class="cr-intel-head"><div><span class="cr-score-label">READINESS</span><b>'+s.total+'%</b><small>'+esc(s.band)+'</small></div><div><span>FOCUS</span><p>'+esc(cfg.focus)+'</p></div></div><div class="cr-score-grid">'+[["Evidence",s.evidence,LAB_INTELLIGENCE.scoring?.evidence||20],["Reasoning",s.reasoning,LAB_INTELLIGENCE.scoring?.reasoning||35],["Artifact",s.artifact,LAB_INTELLIGENCE.scoring?.artifact||20],["Finding",s.finding,LAB_INTELLIGENCE.scoring?.finding||15],["Confidence",s.confidence,LAB_INTELLIGENCE.scoring?.confidence||10]].map(x=>'<div><span>'+x[0]+'</span><i><em style="width:'+Math.min(100,Math.round(x[1]/x[2]*100))+'%"></em></i><b>'+x[1]+'</b></div>').join("")+'</div><div class="cr-capabilities"><span>CAPABILITIES</span>'+cfg.capabilities.map(x=>'<b>'+esc(x)+'</b>').join("")+'</div><div class="cr-remediation"><span>REMEDIATION TRIGGER</span><p>'+esc(cfg.remediation)+'</p></div>');}
function crLabFinding(l,d,w){const f=w.finding||{};return crPanel("STRUCTURED FINDING","ANALYST DECISION",'<div class="cr-report-fields"><label>Finding title<input data-lab-finding="title" value="'+esc(f.title||"")+'" placeholder="What did you determine?"></label><label>Severity<select data-lab-finding="severity"><option '+(f.severity==="Low"?"selected":"")+' >Low</option><option '+(f.severity==="Medium"||!f.severity?"selected":"")+' >Medium</option><option '+(f.severity==="High"?"selected":"")+' >High</option><option '+(f.severity==="Critical"?"selected":"")+' >Critical</option></select></label><label>Impact / scope<textarea data-lab-finding="impact" placeholder="What is affected and why does it matter?">'+esc(f.impact||"")+'</textarea></label><label>Confidence<select data-lab-finding="confidence"><option '+(f.confidence==="Low"?"selected":"")+' >Low</option><option '+(f.confidence==="Medium"||!f.confidence?"selected":"")+' >Medium</option><option '+(f.confidence==="High"?"selected":"")+' >High</option></select></label><label>Next action<textarea data-lab-finding="nextAction" placeholder="What should happen next?">'+esc(f.nextAction||"")+'</textarea></label><label>Alternative explanation / limitation<textarea data-lab-finding="alternative" placeholder="What could make the conclusion incomplete?">'+esc(f.alternative||"")+'</textarea></label></div>');}

function labTerminalOutput(l,w,cmd){const c=String(cmd||"").trim(),d=getLabDetails(l.id),e=d.evidence||[],x=c.toLowerCase();if(!c)return "";if(x==="help")return ["AVAILABLE COMMANDS","  help","  status","  evidence","  inspect <n>","  filter <term>","  timeline","  connections","  process-tree","  headers","  cert","  iam","  image","  mail","  prompt","  findings","  whoami","  clear","This console is simulated. Commands never execute on a real system."].join("\n");if(x==="status")return ["CYBERRANGE STATUS","  mode: SIMULATION","  target: TRAINING DATASET","  external IO: DISABLED","  evidence: "+e.length+" records","  checkpoints: "+d.checkpoints.length,"  locked evidence: "+(w.locker||[]).length].join("\n");if(x==="whoami")return ["northstar@lab-sandbox","role: learner","access: controlled simulation"].join("\n");if(x==="evidence"||x==="timeline")return e.map((v,i)=>"["+String(i+1).padStart(2,"0")+"] "+v).join("\n");if(x==="connections")return e.filter(v=>/connection|HTTPS|TCP|TLS|DNS|→/i.test(v)).join("\n")||"No connection telemetry in this lab.";if(x==="process-tree")return e.filter(v=>/process|powershell|chrome|winword|explorer|agent|executable/i.test(v)).join("\n")||"No process telemetry in this lab.";if(x==="headers")return e.filter(v=>/HTTP|Cookie|Set-Cookie|GET|POST|403|401|302/i.test(v)).join("\n")||"No HTTP telemetry in this lab.";if(x==="cert")return e.filter(v=>/TLS|certificate|issuer|CN=|validation|ClientHello|ServerHello/i.test(v)).join("\n")||"No certificate telemetry in this lab.";if(x==="iam")return e.filter(v=>/role=|AssumeRole|iam:|user=|source=|identity/i.test(v)).join("\n")||"No IAM telemetry in this lab.";if(x==="image")return e.filter(v=>/image=|container=|digest=|base=|port|runtime|package|user=/i.test(v)).join("\n")||"No container metadata in this lab.";if(x==="mail")return e.filter(v=>/From:|Return-Path|SPF|DKIM|DMARC|URL|email|message/i.test(v)).join("\n")||"No mail telemetry in this lab.";if(x==="prompt")return e.filter(v=>/SYSTEM|USER|TOOL|MODEL|prompt|policy|untrusted/i.test(v)).join("\n")||"No AI prompt telemetry in this lab.";if(x==="findings")return (w.locker||[]).length?["EVIDENCE LOCKER","",...(w.locker.map(n=>e[n]||""))].join("\n"):"Evidence locker is empty.";if(x.startsWith("filter "))return e.filter(v=>v.toLowerCase().includes(c.slice(7).trim().toLowerCase())).join("\n")||"No matching evidence.";if(x.startsWith("inspect ")){const n=Number(x.split(/\s+/)[1]);return Number.isInteger(n)&&n>=1&&n<=e.length?["EVENT "+String(n).padStart(2,"0"),e[n-1],"","Analyst note: observation only. Explain why it matters before forming a conclusion."].join("\n"):"Usage: inspect <evidence number>";}if(x==="clear")return "__CLEAR__";return "command not found: "+c+"\nType 'help'.";}function crTerminal(l,w){const history=Array.isArray(w.terminalHistory)?w.terminalHistory:[];const lines=history.flatMap(v=>["> "+v.cmd,v.out==="__CLEAR__"?"":v.out]).filter(Boolean);const output=lines.length?lines.map(v=>"<div>"+esc(v).replace(/\n/g,"<br>")+"</div>").join(""):'<div class="terminal-dim">CyberRange shell ready. Type <b>help</b> to inspect the safe command set.</div>';return crPanel("SECURE TERMINAL","SIMULATED SHELL",'<div class="cr-terminal"><div class="cr-terminal-bar"><span><i></i><i></i><i></i></span><b>northstar@cyberrange:~</b><em>NO EXECUTION</em></div><div class="cr-terminal-output">'+output+'</div><form data-lab-terminal-form class="cr-terminal-form"><span>›</span><input data-lab-terminal autocomplete="off" spellcheck="false" placeholder="help / status / evidence / inspect 01"><button>RUN</button></form></div>');}
function crPanel(title,meta,body,cls=""){return '<section class="cr-panel '+cls+'"><header><span>'+esc(title)+'</span><em>'+esc(meta||"")+'</em></header>'+body+'</section>';}
function crOperatorHud(l,d,w,answered,pct){const locked=(w.locker||[]).length;return "<div class='cr-operator-hud'><div class='hud-cell'><span>RANGE</span><b>ISOLATED</b><small>NO EXTERNAL IO</small></div><div class='hud-cell'><span>OBJECTIVE</span><b>"+esc(String(l.objective||"Investigation"))+"</b><small>OBSERVE · CORRELATE · REPORT</small></div><div class='hud-cell'><span>EVIDENCE</span><b>"+locked+" LOCKED / "+d.evidence.length+"</b><small>LOCAL EVIDENCE STORE</small></div><div class='hud-cell hud-progress'><span>PROGRESS</span><b>"+pct+"%</b><div><i style='width:"+pct+"%'></i></div></div></div>";}
function cyberHeader(l){return '<div class="cr-header"><div><button class="back" data-route="labs">← CyberRange</button><div class="cr-kicker">NORTHSTAR // CYBERRANGE 2.0</div><h1>'+esc(l.title)+'</h1><p>'+esc(l.subtitle)+' · <b>'+esc(l.level)+'</b> · '+esc(l.duration||"Practice")+'</p></div><div class="cr-live"><i></i><b>SIMULATION</b><span>LOCAL ONLY</span><small>LAB '+String(state.selectedLab+1).padStart(3,"0")+'</small></div></div>';}
function crEvidence(l,w){const data=Array.isArray(l?.evidence)?l:getLabDetails(l?.id);const q=w.query.toLowerCase();const rows=data.evidence.map((x,i)=>({x,i})).filter(o=>!q||o.x.toLowerCase().includes(q));return '<div class="cr-toolbar"><div class="cr-search"><span>⌕</span><input data-lab-query placeholder="Filter evidence…" value="'+esc(w.query)+'"></div><span class="cr-count">'+rows.length+'/'+data.evidence.length+' EVENTS</span></div><div class="cr-table">'+rows.map(o=>'<div class="cr-row-wrap"><button class="cr-row '+(o.i===w.selectedEvidence?"selected":"")+'" data-lab-select="'+o.i+'"><span>'+String(o.i+1).padStart(2,"0")+'</span><code>'+esc(o.x)+'</code><i>INSPECT</i></button><button class="cr-lock" data-lab-lock="'+o.i+'">'+((w.locker||[]).includes(o.i)?"UNLOCK":"LOCK")+'</button></div>').join("")+'</div>';}
function crEvidenceLocker(l,w){const data=getLabDetails(l.id),items=(w.locker||[]).map(n=>({n,x:data.evidence[n]})).filter(o=>o.x);return crPanel("EVIDENCE LOCKER",String(items.length).padStart(2,"0")+" ITEMS",'<div class="cr-locker">'+(items.length?items.map(o=>'<button class="cr-locker-item" data-lab-select="'+o.n+'"><span>EVT-'+String(o.n+1).padStart(2,"0")+'</span><code>'+esc(o.x)+'</code><i>OPEN</i></button>').join(""):'<div class="cr-empty-locker">Select an observation and add it here. Evidence stays local to this lab.</div>')+'</div>');}
function crInspector(l,w){const data=Array.isArray(l?.evidence)?l:getLabDetails(l?.id);const x=data.evidence[w.selectedEvidence]||data.evidence[0]||"No evidence selected";return crPanel("EVIDENCE INSPECTOR","SELECTED EVENT",'<div class="cr-inspector"><div class="cr-signal">EVENT '+String(w.selectedEvidence+1).padStart(2,"0")+'</div><code>'+esc(x)+'</code><p>Select observations and explain why they matter. NorthStar does not pre-label the answer for you.</p><div class="cr-facts"><span><b>TYPE</b> SIMULATED</span><span><b>SOURCE</b> LAB DATASET</span><span><b>TRUST</b> CONTROLLED</span></div></div>');}
function crInstrument(l,w){const id=l.id,d=getLabDetails(id),e=d.evidence||[],sel=e[w.selectedEvidence]||e[0]||"",evidence=crEvidence(l,w),inspector=crInspector(l,w);
if(id==="packet-recon")return '<div class="cr-workstation-grid">'+crPanel("PACKET CAPTURE","PCAP // SIMULATED",'<div class="cr-capture-head"><div><b>'+e.length*178+'</b><span>PACKETS LOADED</span></div><div><b>TCP / UDP</b><span>PROTOCOLS</span></div><div><b>'+String(w.selectedEvidence+1).padStart(2,"0")+'</b><span>SELECTED</span></div></div>'+evidence,"wide")+crPanel("PACKET INSPECTOR","LAYER VIEW",'<div class="cr-packet-detail"><div class="packet-row"><span>SUMMARY</span><b>'+esc(sel)+'</b></div><div class="packet-row"><span>NETWORK</span><b>SIMULATED IPv4 · CONTROLLED FLOW</b></div><div class="packet-row"><span>TRANSPORT</span><b>TCP · FLAGS / PORT CONTEXT</b></div><div class="packet-row"><span>PAYLOAD</span><b>REDACTED TRAINING DATA</b></div></div>')+crPanel("CONNECTION MAP","FLOW CORRELATION",'<div class="cr-connection-map"><span>CLIENT</span><i>──── TCP ────</i><span>DESTINATION</span></div>')+'</div>';
if(id==="tls-inspector")return '<div class="cr-workstation-grid">'+crPanel("TLS HANDSHAKE","SEQUENCE // SIMULATED",'<div class="cr-handshake">'+["ClientHello · SNI","ServerHello · TLS 1.3","Certificate · CN / issuer","Validation · chain","Finished · encrypted data"].map((x,i)=>'<div class="'+(i<=w.selectedEvidence?"active":"")+'"><span>0'+(i+1)+'</span><b>'+x+'</b><small>'+esc(e[i]||"Observation available")+'</small></div>').join("")+'</div>',"wide")+crPanel("CERTIFICATE INSPECTOR","TRUST EVIDENCE",'<div class="cr-cert"><div><span>SUBJECT</span><b>training.northstar.local</b></div><div><span>ISSUER</span><b>NorthStar Lab CA</b></div><div><span>PROTOCOL</span><b>TLS 1.3</b></div><div><span>VALIDATION</span><b>TRUSTED IN LAB STORE</b></div><p>Trust is contextual. Verify hostname and validation policy before generalizing.</p></div>')+'</div>';
if(id==="http-request-lab"||id==="web-surface"||id==="auth-boundary")return '<div class="cr-workstation-grid">'+crPanel("HTTP TRANSACTION","REQUEST / RESPONSE",'<div class="cr-http-split"><div><span>REQUEST</span><code>'+esc(sel)+'</code><pre>GET /api/profile HTTP/1.1\nCookie: session=LAB-7F3\nAccept: application/json</pre></div><div><span>RESPONSE</span><code>HTTP/1.1 403 Forbidden</code><pre>Set-Cookie: session=LAB-7F3\nContent-Type: application/json\nCache-Control: no-store</pre></div></div>',"wide")+crPanel("ROUTE INVENTORY","TRUST BOUNDARY",'<div class="cr-route-grid">'+["PUBLIC","AUTHENTICATED","PRIVILEGED"].map((x,i)=>'<div><span>'+x+'</span><b>'+[2,2,1][i]+' routes</b></div>').join("")+'</div>')+'</div>';
if(id==="windows-event-hunt"||id==="endpoint-process-hunt"||id==="detection-drill"||id==="log-triage"||id==="dns-hunt"||id==="linux-process")return '<div class="cr-workstation-grid">'+crPanel("TELEMETRY STREAM","EVENTS // SIMULATED",'<div class="cr-telemetry">'+e.map((x,i)=>'<button class="'+(i===w.selectedEvidence?"selected":"")+'" data-lab-select="'+i+'"><span>'+String(i+1).padStart(2,"0")+'</span><code>'+esc(x)+'</code><i>EVENT</i></button>').join("")+'</div>',"wide")+crPanel("PROCESS / ENTITY TREE","CORRELATION",'<div class="cr-tree"><div>USER <b>→</b> EXPLORER / WINWORD</div><div class="indent">PROCESS <b>→</b> POWERSHELL / AGENT</div><div class="indent2">NETWORK <b>→</b> SIMULATED DESTINATION</div></div>')+crPanel("DETECTION CONTEXT","ANALYST VIEW",'<div class="cr-detection-context"><span>BASELINE</span><span>SEQUENCE</span><span>GAP</span><p>Correlate identity, process and network evidence before assigning a disposition.</p></div>')+'</div>';
if(id==="cloud-iam-review")return '<div class="cr-workstation-grid">'+crPanel("IDENTITY GRAPH","IAM // SIMULATED",'<div class="cr-iam-graph"><span>analyst01<small>ReadOnly</small></span><i>→</i><span>deploy01<small>Deploy</small></span><i>→</i><span>Admin<small>AssumeRole</small></span></div>',"wide")+crPanel("AUDIT TRAIL","ACCESS EVENTS",evidence)+crPanel("LEAST PRIVILEGE","REVIEW",'<div class="cr-control"><b>QUESTION</b><p>Is each permission required by the documented workflow?</p><span>Compare role, source identity and change record.</span></div>')+'</div>';
if(id==="container-security-room")return '<div class="cr-workstation-grid">'+crPanel("IMAGE MANIFEST","SUPPLY CHAIN // SIMULATED",'<div class="cr-manifest"><div><span>IMAGE</span><b>api:v4</b></div><div><span>DIGEST</span><b>sha256:LAB123</b></div><div><span>BASE</span><b>debian</b></div><div><span>USER</span><b>root</b></div></div>',"wide")+crPanel("RUNTIME ROOM","CONTAINER TELEMETRY",evidence)+crPanel("EXPOSURE MAP","SERVICE BOUNDARY",'<div class="cr-exposure"><span>HOST</span><i>↔</i><b>8080</b><i>↔</i><span>API CONTAINER</span></div>')+'</div>';
if(id==="phishing-triage")return '<div class="cr-workstation-grid">'+crPanel("MAIL HEADER ANALYZER","MESSAGE // SIMULATED",'<div class="cr-mail"><div><span>VISIBLE FROM</span><b>payroll-update@payr0ll.example</b></div><div><span>RETURN-PATH</span><b>bounce@mailer.example</b></div><div><span>SPF</span><b class="good">PASS</b></div><div><span>DKIM</span><b class="good">PASS</b></div><div><span>DMARC</span><b class="warn">FAIL ALIGNMENT</b></div></div>',"wide")+crPanel("URL INSPECTOR","PASSIVE ANALYSIS",'<div class="cr-url"><span>DESTINATION</span><code>https://payr0ll.example/verify</code><p>No payload execution. Compare visible domain, authenticated domains and user context.</p></div>')+crPanel("TRIAGE SIGNAL","ANALYST VIEW",'<div class="cr-signal-grid"><span>IDENTITY</span><span>AUTHENTICATION</span><span>URL</span><span>CONTEXT</span></div>')+'</div>';
if(id==="ai-prompt-defense")return '<div class="cr-workstation-grid">'+crPanel("PROMPT STACK","TRUST BOUNDARY // SIMULATED",'<div class="cr-prompt-stack">'+["SYSTEM POLICY","USER MESSAGE","UNTRUSTED TOOL RESULT","MODEL OUTPUT"].map((x,i)=>'<div class="layer layer-'+i+'"><span>0'+(i+1)+'</span><b>'+x+'</b><small>'+esc(e[i]||"Controlled observation")+'</small></div>').join("")+'</div>',"wide")+crPanel("TRUST BOUNDARY","AUTHORITY MODEL",'<div class="cr-trust-boundary"><span>SYSTEM</span><i>HIGHER AUTHORITY</i><span>USER / TOOL DATA</span><i>UNTRUSTED CONTENT</i><span>MODEL</span></div>')+crPanel("EVALUATION CONSOLE","DEFENSIVE TEST",'<div class="cr-eval"><div><b>CANARY</b><span>HIDDEN-LAB-SECRET</span></div><div><b>EXPECTED</b><span>REFUSE SECRET DISCLOSURE</span></div><div><b>OBSERVED</b><span>COMPARE MODEL OUTPUT</span></div></div>')+'</div>';
return '<div class="cr-workstation-grid">'+crPanel("LAB TELEMETRY","CONTROLLED DATASET",evidence,"wide")+inspector+'</div>';}
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
 labs:()=>{
  const total=labs.length,done=labCompletedCount();
  let h='<section class="fade lab-catalog"><div class="range-hero"><div><span class="eyebrow">CyberRange 2.0 · Adaptive practice</span><h1 class="title">Operate the range.</h1><p class="subtitle">From first principles to enterprise investigations. Every lab is controlled, evidence-driven and mapped to a practical security skill.</p></div><div class="range-stat"><b>'+done+'/'+total+'</b><span>labs completed</span></div></div><div class="range-rails"><div><b>FOUNDATION</b><span>Start with no prior security experience.</span></div><div><b>INVESTIGATE</b><span>Observe → correlate → hypothesize → report.</span></div><div><b>ADVANCED</b><span>Unknown scenarios test transfer, not memory.</span></div></div>';
  LAB_TRACKS.forEach(track=>{const items=labs.filter(x=>x.track===track.id);if(!items.length)return;h+='<div class="lab-track"><div class="lab-track-head"><div><span class="eyebrow">'+esc(track.label)+'</span><h2>'+esc(track.label)+'</h2><p>'+esc(track.desc)+'</p></div><b>'+items.length+' LAB'+(items.length===1?"":"S")+'</b></div><div class="lab-grid">';
   items.forEach(l=>{const i=labs.indexOf(l),st=state.labState[i]||"ready";h+='<article class="lab-card '+(st==="completed"?"completed":"")+'"><div class="lab-card-top"><span>LAB '+String(i+1).padStart(3,"0")+'</span><em>'+esc(l.level)+'</em></div><h3>'+esc(l.title)+'</h3><p>'+esc(l.subtitle)+'</p><div class="lab-meta"><span>'+esc(l.duration)+'</span>'+l.skills.slice(0,3).map(x=>'<i>'+esc(x)+'</i>').join("")+'</div><button data-lab="'+i+'">'+(st==="completed"?"Review":"Start Lab →")+'</button></article>'});
   h+='</div></div>';
  });
  h+='<div class="range-safety"><span class="eyebrow">SAFETY BOUNDARY</span><h2>Controlled cyber range</h2><p>NorthStar labs use simulated evidence and local learner state. They do not scan, attack, connect to or modify external systems.</p></div></section>';
  return h
 }, lab:()=>{const l=labs[state.selectedLab],d=getLabDetails(l.id),st=state.labState[state.selectedLab]||"ready",w=cyberToolState(l.id);const answered=d.checkpoints.filter((_,i)=>String(w.answers?.[i]||"").trim()).length;const note=String(w.note||"");const activeTool=state.labTool||"overview";const pct=Math.min(100,Math.round(answered/d.checkpoints.length*100));const tools=[["overview","Mission","⌁"],["workspace","Workspace","⌘"],["evidence","Evidence","◈"],["console","Terminal","$"],["analysis","Assessment","◎"],["timeline","Timeline","◷"],["findings","Report","✓"]],flow=[["Understand",answered>0||note.trim().length>0,"Scope"],["Analyze",answered>=1,"Inspect"],["Reason",answered>=2,"Hypothesize"],["Report",note.trim().length>=40,"Evidence artifact"]];let h='<section class="fade cyberrange-pro"><div class="cr-shell">'+cyberHeader(l)+crOperatorHud(l,d,w,answered,pct)+'<div class="cr-layout"><aside class="cr-rail"><div class="cr-mission"><span>MISSION</span><b>LAB '+String(state.selectedLab+1).padStart(3,"0")+'</b><small>'+esc(l.track||"Security Practice")+'</small></div><nav>';tools.forEach(t=>{h+='<button class="'+(activeTool===t[0]?"active":"")+'" data-lab-tool="'+t[0]+'"><i>'+t[2]+'</i>'+t[1]+'</button>'});h+='</nav><div class="cr-progress"><div><span>INVESTIGATION</span><b>'+answered+'/'+d.checkpoints.length+'</b></div><div class="cr-meter"><i style="width:'+pct+'%"></i></div></div><div class="cr-rail-foot">LOCAL EVIDENCE<br>NO EXTERNAL ACCESS</div></aside><main class="cr-main">';if(activeTool==="overview"){h+=crPanel("MISSION CONTROL","ACTIVE",'<div class="cr-brief"><div><span class="eyebrow">OBJECTIVE</span><h2>'+esc(l.objective)+'</h2><p>'+esc(d.scenario)+'</p></div><div class="cr-kpis"><div><b>'+d.evidence.length+'</b><span>Evidence</span></div><div><b>'+d.checkpoints.length+'</b><span>Checks</span></div><div><b>'+answered+'</b><span>Answered</span></div></div></div>');h+=crPanel("INVESTIGATION WORKFLOW","OPERATE THE RANGE",'<div class="cr-flow">'+flow.map((x,i)=>'<div class="'+(x[1]?"done":"")+'"><span>'+(x[1]?"✓":i+1)+'</span><b>'+x[0]+'</b><small>'+x[2]+'</small></div>').join("")+'</div>');h+=crInstrument(l,w);h+=crEvidenceLocker(l,w);}else if(activeTool==="workspace"){h+=crInstrument(l,w);h+=crEvidenceLocker(l,w);}else if(activeTool==="evidence"){h+=crPanel("EVIDENCE FEED","SIMULATED RECORDS",crEvidence(l,w));h+=crInspector(l,w);h+=crEvidenceLocker(l,w);}else if(activeTool==="console"){h+=crTerminal(l,w);h+=crEvidenceLocker(l,w);}else if(activeTool==="analysis"){h+=crLabIntel(l,d,w);h+=crPanel("ASSESSMENT CONSOLE",answered+"/"+d.checkpoints.length+" COMPLETE",'<div class="cr-checks">'+d.checkpoints.map((q,i)=>'<article class="'+(String(w.answers?.[i]||"").trim()?"done":"")+'"><header><span>Q0'+(i+1)+'</span><b>'+esc(q)+'</b></header><textarea data-lab-answer="'+i+'" placeholder="Record your reasoning...">'+esc(w.answers?.[i]||"")+'</textarea>'+((w.revealedHints||[]).includes(i)?'<div class="cr-hint">HINT // '+esc(d.hints[i])+'</div>':'<button class="chip" data-lab-hint="'+i+'">Request hint</button>')+'</article>').join("")+'</div>');}else if(activeTool==="timeline"){h+=crPanel("TIMELINE","CHRONOLOGICAL",'<div class="cr-timeline">'+d.evidence.map((x,i)=>'<button class="'+(i===w.selectedEvidence?"selected":"")+'" data-lab-select="'+i+'"><span>0'+(i+1)+'</span><i></i><code>'+esc(x)+'</code></button>').join("")+'</div>');h+=crInspector(l,w);}else{h+=crLabFinding(l,d,w);h+=crPanel("FINDINGS & EVIDENCE ARTIFACT","SUBMISSION",'<div class="cr-report"><div><span class="eyebrow">DELIVERABLE</span><h2>'+esc(d.deliverable)+'</h2><p>'+esc(d.success)+'</p></div><textarea data-lab-note="'+l.id+'" placeholder="Document observations, reasoning, conclusion, alternative explanation, uncertainty and next action...">'+esc(note)+'</textarea><div class="cr-report-foot"><span>LOCAL EVIDENCE STORE · '+note.trim().length+' CHARS</span><button class="cyber-submit" data-lab-complete>'+(st==="completed"?"✓ LAB COMPLETED":"SUBMIT INVESTIGATION")+'</button></div></div>');}h+='</main></div><div class="cr-stage"><span>STAGE</span>'+flow.map(x=>'<b class="'+(x[1]?"done":"")+'">'+x[0]+'</b>').join("")+'<em>CONTROLLED CYBER RANGE</em></div></div></section>';return h}, ai:()=>`<section class="fade mentor-page">
  <div class="mentor-hero">
    <div class="mentor-identity">
      <div class="mentor-avatar" aria-hidden="true"><span>✦</span><i></i></div>
      <div>
        <div class="mentor-eyebrow">NORTHSTAR INTELLIGENCE</div>
        <h1>AI Mentor</h1>
        <p>Your cybersecurity tutor, routed through OmniRoute. No LLM is stored on your device.</p>
      </div>
    </div>
    <div class="mentor-connection ${AI_CONFIG.endpoint?"online":"setup"}"><i></i><span>${AI_CONFIG.endpoint?"ONLINE":"CONNECTING"}</span><small>${AI_CONFIG.endpoint?"CLOUD INFERENCE":"WORKER ENDPOINT REQUIRED"}</small></div>
  </div>
  <div class="mentor-mode-dock">
    ${Object.entries({teacher:["Teacher","Learn it"],socratic:["Socratic","Think it"],practice:["Practice","Try it"],lab:["Lab Coach","Investigate"],reviewer:["Reviewer","Prove it"]}).map(([id,x])=>'<button class="mentor-mode-card '+((window.NORTHSTAR_MENTOR_UI?.getMode?.()||"teacher")===id?"active":"")+'" data-mentor-mode="'+id+'"><b>'+esc(x[0])+'</b><small>'+esc(x[1])+'</small></button>').join("")}
  </div>
  <div class="mentor-shell">
    <aside class="mentor-profile-card">
      <div class="mentor-avatar large"><span>✦</span><i></i></div>
      <b>NorthStar Mentor</b>
      <span>Cybersecurity learning companion</span>
      <div class="mentor-profile-status"><i></i> OmniRoute Cloud · no model on device</div>
      <div class="mentor-mini-stats">
        <div><b>${overallMastery()}%</b><span>Mastery</span></div>
        <div><b>${completedCount()}</b><span>Lessons</span></div>
        <div><b>${labCompletedCount()}</b><span>Labs</span></div>
      </div>
      <button class="mentor-new-chat" data-clear-chat>New conversation</button>
    </aside>
    <section class="mentor-chat-panel">
      <div class="mentor-chat-head">
        <div><span class="mentor-live-dot"></span><div><b>NorthStar Mentor</b><small>${AI_CONFIG.endpoint?"Ready to help":"Connect the NorthStar AI Worker to enable the mentor"}</small></div></div>
        <span class="mentor-model-pill">OMNIROUTE · ${esc(AI_CONFIG.model||"AUTO")}</span>
      </div>
      <div class="mentor-context-strip">
        <span>ADAPTIVE</span>
        <b>${(window.NORTHSTAR_MENTOR_UI?.diagnosis?.().band)||"Not assessed"}</b>
        <small>Evidence drives progression, not completion alone.</small>
      </div>
      <div class="messages mentor-messages" id="messages">
        ${state.messages.map((m,i)=>`<div class="mentor-message-row ${m[0]==="user"?"from-user":"from-ai"}"><div class="mentor-message-avatar">${m[0]==="user"?"NS":"✦"}</div><div class="msg ${m[0]==="user"?"user":""} ${i===state.messages.length-1&&m[0]==="ai"&&aiLoading?"ai-stream":""}">${esc(m[1])}</div></div>`).join("")}
        ${aiLoading?'<div class="mentor-typing"><span></span><span></span><span></span><em>Mentor is thinking…</em></div>':""}
      </div>
      <div class="mentor-suggestions">
        <button class="mentor-suggestion" data-prompt="Explain this from first principles with a simple example.">Explain simply</button>
        <button class="mentor-suggestion" data-prompt="Give me one practice task. Do not give me the answer until I attempt it.">Practice with me</button>
        <button class="mentor-suggestion" data-prompt="Diagnose what I understand and tell me the one prerequisite I should repair first.">Diagnose me</button>
        <button class="mentor-suggestion" data-prompt="Review my reasoning for accuracy, evidence, assumptions, and uncertainty.">Review my reasoning</button>
      </div>
      <form class="composer mentor-composer" id="chat">
        <input id="prompt" autocomplete="off" ${aiLoading?"disabled":""} placeholder="Message your mentor…" />
        <button class="send mentor-send" ${aiLoading?"disabled":""} aria-label="Send message">↑</button>
      </form>
      <div class="mentor-footnote"><span>PRIVATE BY DESIGN</span> Conversation history stays in this browser. Inference runs in the cloud.</div>
    </section>
  </div>
</section>`,
progress:()=>{const p=overallPercent();return `<section class="fade"><span class="eyebrow">Progress</span><h1 class="title" style="font-size:42px;letter-spacing:-.055em;margin:8px 0">See your evidence.</h1><div class="section grid two"><div class="card glass progress-card"><div class="ring" style="--p:${p}%"><span>${p}%</span></div><h2>Overall progress</h2><p class="subtitle">${completedCount()} of ${totalLessons()} lessons and ${labCompletedCount()} of ${labs.length} labs completed.</p></div><div class="card glass"><span class="eyebrow">Skill matrix</span>${skillRows()}</div></div><div class="section grid stats"><div class="stat glass"><b>${completedCount()}</b><span>Lessons complete</span></div><div class="stat glass"><b>${totalLessons()-completedCount()}</b><span>Lessons remaining</span></div><div class="stat glass"><b>${labCompletedCount()}</b><span>Labs complete</span></div><div class="stat glass"><b>${curriculum.length}</b><span>Learning paths</span></div></div></section>`}
};

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
 document.querySelectorAll("[data-mentor-mode]").forEach(b=>b.onclick=()=>{if(window.NORTHSTAR_MENTOR_UI?.setMode?.(b.dataset.mentorMode)){render()}});
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
function mentorMode(){
 return window.NORTHSTAR_MENTOR_UI?.getMode?.()||"teacher";
}

function mentorContextPayload(){
 const current=state.route==="lesson"?curriculum[state.selectedCourse]?.lessons?.[state.selectedLesson]:null;
 const learner=learnerState();
 const mastery=current?lessonMastery(current.id):overallMastery();
 const attempts=current?Number(learner.attempts?.[current.id]||0):Object.values(learner.attempts||{}).reduce((n,v)=>n+Number(v||0),0);
 const checks=current?Number(learner.checks?.[current.id]||0):Object.keys(learner.checks||{}).length;
 let lab=null,labScoreValue=0;
 if(state.route==="lab"){
  const l=labs[state.selectedLab];
  if(l){
   const d=getLabDetails(l.id),w=cyberToolState(l.id),s=labScore(l,d,w);
   lab={id:l.id,title:l.title,track:l.track,checkpointCount:d.checkpoints.length,answeredCheckpoints:d.checkpoints.filter((_,i)=>String(w.answers?.[i]||"").trim()).length,evidenceEntries:d.evidence.slice(0,8),lockedEvidence:(w.locker||[]).length,finding:w.finding||{}};
   labScoreValue=s.total;
  }
 }
 const context={
  lesson:current?.title||"No active lesson",
  module:curriculum[state.selectedCourse]?.title||"None",
  objective:current?.objective||current?.learningGoal||"No active lesson objective",
  prerequisite:current?.prerequisite||"Not specified",
  concepts:Array.isArray(current?.concepts)?current.concepts.slice(0,8):[],
  mastery,attempts,checks,labScore:labScoreValue
 };
 if(window.NORTHSTAR_MENTOR_ENGINE?.buildContext){
  try{
   const built=window.NORTHSTAR_MENTOR_ENGINE.buildContext({
    lesson:current||null,
    course:curriculum[state.selectedCourse]||null,
    learner:{mastery,attempts,checks},
    lab:state.route==="lab"?labs[state.selectedLab]:null,
    labWorkspace:state.route==="lab"?labWorkspace(labs[state.selectedLab]?.id||""):null,
    labDetails:state.route==="lab"?getLabDetails(labs[state.selectedLab]?.id||""):null
   });
   if(built?.lessonId)context.lessonId=built.lessonId;
   if(built?.diagnosis)context.diagnosis=built.diagnosis;
   if(built?.lab)context.lab=built.lab;
  }catch(error){console.warn("NorthStar mentor context bridge skipped.",error)}
 }
 if(lab)context.lab=lab;
 return context;
}

function mentorClassification(q){
 return window.NORTHSTAR_MENTOR_ENGINE?.classify?.(q)||"general";
}

function mentorEndpoint(){
 const configured=String(AI_CONFIG.endpoint||"").trim().replace(/\/$/,"");
 if(configured)return configured;
 const local=String(AI_CONFIG.localEndpoint||"").trim().replace(/\/$/,"");
 if(AI_CONFIG.allowLocalEndpoint && local && location.protocol==="http:" && location.hostname!=="swapnild007.github.io") return local;
 return "";
}

async function askNorthStar(q){
 const endpoint=mentorEndpoint();
 if(!endpoint){
  state.messages[state.messages.length-1][1]=/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname)
   ? "OmniRoute is not detected. Start OmniRoute on this device, then try again."
   : "NorthStar is configured for local OmniRoute. Open the NorthStar app locally on the same device where OmniRoute is running.";
  aiError="Cloud Mentor endpoint is not configured.";
  persist();render();return;
 }
 aiLoading=true;aiError="";render();
 const history=state.messages.slice(-14).map(m=>({role:m[0]==="user"?"user":"assistant",content:m[1]}));
 const mentor={mode:mentorMode(),classification:mentorClassification(q),context:mentorContextPayload()};
 try{
  const localMode=Boolean(AI_CONFIG.allowLocalEndpoint && /^(localhost|127\\.0\\.1)$/.test(location.hostname));
  let omniKey="";
  if(localMode){
   omniKey=String(sessionStorage.getItem("ns_omniroute_key")||"");
   if(!omniKey){
    omniKey=String(window.prompt("Enter your local OmniRoute API key. It will be kept only for this browser session.")||"").trim();
    if(omniKey)sessionStorage.setItem("ns_omniroute_key",omniKey);
   }
  }
  const headers={"Content-Type":"application/json"};
  if(omniKey)headers.Authorization="Bearer "+omniKey;
  const response=await fetch(endpoint+"/v1/chat/completions",{
   method:"POST",
   headers,
   body:JSON.stringify({messages:history,mentor})
  });
  if(!response.ok){
   let detail="";
   try{const e=await response.json();detail=e?.error||""}catch{}
   throw new Error(detail||("Mentor gateway returned HTTP "+response.status));
  }
  if(!response.body)throw new Error("Mentor gateway returned no stream.");
  const reader=response.body.getReader(),decoder=new TextDecoder();
  let buffer="",reply="";
  while(true){
   const {value,done}=await reader.read();
   if(done)break;
   buffer+=decoder.decode(value,{stream:true});
   const events=buffer.split(/\\r?\\n\\r?\\n/);buffer=events.pop()||"";
   for(const event of events){
    for(const line of event.split(/\\r?\\n/)){
     if(!line.startsWith("data:"))continue;
     const payload=line.slice(5).trim();
     if(!payload||payload==="[DONE]")continue;
     try{
      const data=JSON.parse(payload);
      const delta=data?.choices?.[0]?.delta?.content??data?.response??"";
      if(delta){reply+=delta;state.messages[state.messages.length-1][1]=reply;const el=document.querySelector(".ai-stream");if(el)el.textContent=reply;}
     }catch{}
    }
   }
  }
  if(!reply)throw new Error("The mentor returned an empty response.");
  aiLoading=false;aiError="";persist();render();
 }catch(err){
  console.error("NorthStar cloud mentor error:",err);
  aiLoading=false;
  state.messages[state.messages.length-1][1]="I couldn’t reach the cloud mentor. Check the Worker connection and try again.";
  aiError=err?.message||"Cloud mentor unavailable.";
  persist();render();
 }
}

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
