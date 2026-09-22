(()=>{"use strict";
const KEY="ns_mentor_ui_state";
const CONTEXT_KEY="ns_mentor_context";
const modes={
 teacher:["Teacher","First principles, examples, prerequisite repair."],
 socratic:["Socratic","One question at a time. Make me reason."],
 practice:["Practice","Short exercises with observable answers."],
 lab:["Lab Coach","Evidence-led hints. Do not reveal the conclusion."],
 reviewer:["Reviewer","Critique reasoning, evidence, assumptions and clarity."]
};
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const read=(k,f)=>{try{const x=localStorage.getItem(k);return x===null?f:JSON.parse(x)}catch{return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const modeState=()=>read(KEY,{mode:"teacher"});
function captureContext(){
 const lesson=document.querySelector(".lesson-card");
 const lab=document.querySelector(".cyberrange-pro");
 if(lesson){
  const title=lesson.querySelector("h1")?.textContent?.trim()||"";
  const objective=lesson.querySelector(".lesson-card > .subtitle")?.textContent?.trim()||"";
  if(title)write(CONTEXT_KEY,{type:"lesson",title,objective,updated:new Date().toISOString()});
 }
 if(lab){
  const title=lab.querySelector(".cr-header h1")?.textContent?.trim()||"";
  const objective=lab.querySelector(".cr-brief h2")?.textContent?.trim()||"";
  const locker=[...lab.querySelectorAll(".cr-locker-item")].map(x=>x.textContent.trim()).slice(0,5);
  const evidence=lab.querySelector(".cr-operator-hud")?.textContent?.replace(/\s+/g," ").trim()||"";
  if(title)write(CONTEXT_KEY,{type:"lab",title,objective,locker,evidence,updated:new Date().toISOString()});
 }
}
function context(){return read(CONTEXT_KEY,{type:"none",title:"No active context",objective:"Open a lesson or CyberRange investigation before asking for contextual coaching."})}
function promptFor(mode,q){
 const c=context(),m=modes[mode]||modes.teacher;
 return "[NORTHSTAR MENTOR CONTEXT]\nMode: "+m[0]+"\nContext type: "+c.type+"\nTopic: "+c.title+"\nObjective: "+c.objective+(c.type==="lab"?"\nVisible lab state: "+(c.evidence||"")+"\nLocked evidence: "+(c.locker||[]).join(" | "):"")+"\n\nMentor behavior: "+m[1]+"\nLearner request: "+q;
}
function patchAI(){
 const root=document.querySelector("#view");
 if(!root||!root.querySelector(".chat")||root.dataset.mentorPatched==="1")return;
 root.dataset.mentorPatched="1";
 const s=modeState(),c=context();
 const host=root.querySelector(".mentor-shell")||root.firstElementChild;
 if(!host)return;
 const head=host.querySelector(".section-head")||host.firstElementChild;
 const bar=document.createElement("div");
 bar.className="mentor-mode-bar mentor-ui-injected";
 bar.innerHTML=Object.entries(modes).map(([id,m])=>'<button type="button" class="mentor-mode '+(s.mode===id?"active":"")+'" data-mentor-ui-mode="'+id+'"><b>'+esc(m[0])+'</b><small>'+esc(m[1])+'</small></button>').join("");
 host.insertBefore(bar,host.querySelector(".chat")||host.firstChild);
 const ctx=document.createElement("div");
 ctx.className="mentor-context mentor-ui-injected";
 ctx.innerHTML='<div><span>CONTEXT</span><b>'+esc(c.title)+'</b><small>'+esc(c.objective||"Local learner context")+'</small></div><div><span>MODE</span><b>'+esc(modes[s.mode]?.[0]||"Teacher")+'</b><small>Context is prepared locally in this browser.</small></div>';
 host.insertBefore(ctx,host.querySelector(".chat")||null);
 const actions=document.createElement("div");
 actions.className="mentor-actions mentor-ui-injected";
 ["Explain this from first principles","Quiz me one question at a time","Give me a short practice task","Review my reasoning"].forEach(q=>{
  const b=document.createElement("button");b.type="button";b.className="chip";b.textContent=q;
  b.addEventListener("click",()=>{const input=root.querySelector("#prompt");if(input){input.value=q;input.focus()}});
  actions.appendChild(b);
 });
 host.insertBefore(actions,host.querySelector(".chat")||null);
 const form=root.querySelector("#chat");
 if(form){
  form.addEventListener("submit",()=>{const input=form.querySelector("#prompt");if(input&&input.value.trim())input.value=promptFor(modeState().mode,input.value.trim())},{capture:true});
 }
 bar.querySelectorAll("[data-mentor-ui-mode]").forEach(b=>b.onclick=()=>{write(KEY,{mode:b.dataset.mentorUiMode});root.querySelectorAll(".mentor-ui-injected").forEach(x=>x.remove());root.dataset.mentorPatched="";patchAI()});
}
function run(){captureContext();patchAI()}
new MutationObserver(run).observe(document.body,{subtree:true,childList:true});
run();
})();