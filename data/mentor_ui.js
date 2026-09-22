(()=>{"use strict";
const KEY="ns_mentor_ui_state",CTX="ns_mentor_context",DIAG="ns_mentor_diagnosis";
const MODES={
 teacher:["Teacher","First principles → example → check"],
 socratic:["Socratic","One focused question → your reasoning"],
 practice:["Practice","One task → your attempt → feedback"],
 lab:["Lab Coach","Evidence → correlation → next observation"],
 reviewer:["Reviewer","Accuracy → evidence → assumptions"]
};
const read=(k,f)=>{try{const x=localStorage.getItem(k);return x===null?f:JSON.parse(x)}catch{return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
function getMode(){return read(KEY,{mode:"teacher"}).mode||"teacher"}
function capture(){
 const lesson=document.querySelector(".lesson-card");
 const lab=document.querySelector(".lab-mode .cr-operator-hud")?.closest(".app-shell");
 let context={type:"none",title:"No active context",objective:"Open a lesson or lab."};
 if(lesson){
  context={type:"lesson",title:lesson.querySelector("h1")?.textContent?.trim()||"Active lesson",objective:lesson.querySelector(".subtitle")?.textContent?.trim()||"Lesson context"};
 }
 if(lab){
  context={type:"lab",title:lab.querySelector("h1")?.textContent?.trim()||"CyberRange investigation",objective:lab.querySelector(".cr-brief h2")?.textContent?.trim()||"Controlled investigation",evidence:lab.querySelector(".cr-operator-hud")?.textContent?.replace(/\s+/g," ").trim()||""};
 }
 write(CTX,context);return context;
}
function diagnosis(){
 const raw=read("ns_learner_model",{mastery:{},attempts:{},checks:{}});
 const vals=Object.values(raw.mastery||{}).map(Number).filter(Number.isFinite);
 const mastery=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0;
 const attempts=Object.values(raw.attempts||{}).reduce((n,v)=>n+Number(v||0),0);
 const checks=Object.values(raw.checks||{}).length;
 let band="Not assessed",next="diagnose the prerequisite mental model";
 if(mastery>=90){band="Strong";next="transfer the skill to a novel scenario"}
 else if(mastery>=70){band="Functional";next="independent reasoning and evidence-backed application"}
 else if(mastery>=40){band="Developing";next="guided practice and misconception repair"}
 else if(mastery>0){band="Exposed";next="foundation repair with a worked example"}
 const d={mastery,band,attempts,checks,next,updated:new Date().toISOString()};write(DIAG,d);return d;
}
function renderChrome(root){
 if(root.dataset.mentorBuilt==="1")return;
 const chat=root.querySelector(".chat");if(!chat)return;
 root.dataset.mentorBuilt="1";
 const mode=getMode(),d=diagnosis(),c=capture();
 const host=chat.parentElement;
 const bar=document.createElement("div");bar.className="mentor-mode-bar";
 bar.innerHTML=Object.entries(MODES).map(([id,x])=>'<button type="button" class="mentor-mode '+(id===mode?"active":"")+'" data-mentor-mode="'+id+'"><b>'+esc(x[0])+'</b><small>'+esc(x[1])+'</small></button>').join("");
 host.insertBefore(bar,chat);
 const dash=document.createElement("div");dash.className="mentor-dashboard";
 dash.innerHTML='<div><span>CONTEXT</span><b>'+esc(c.title)+'</b><small>'+esc(c.objective)+'</small></div><div><span>LEARNER STATE</span><b>'+d.band+' · '+d.mastery+'%</b><small>Next: '+esc(d.next)+'</small></div><div><span>MENTOR CONTRACT</span><b>ADAPTIVE</b><small>Completion ≠ mastery. Evidence drives progression.</small></div>';
 host.insertBefore(dash,chat);
 const actions=document.createElement("div");actions.className="mentor-actions";
 ["Teach this from first principles","Diagnose my understanding","Give me one practice task","Review my reasoning"].forEach(t=>{const b=document.createElement("button");b.type="button";b.className="chip";b.textContent=t;b.onclick=()=>{const i=root.querySelector("#prompt");if(i){i.value=t;i.focus()}};actions.appendChild(b)});
 host.insertBefore(actions,chat);
 bar.querySelectorAll("[data-mentor-mode]").forEach(b=>b.onclick=()=>{write(KEY,{mode:b.dataset.mentorMode});location.reload()});
 const form=root.querySelector("#chat");
 if(form)form.addEventListener("submit",()=>{const input=form.querySelector("#prompt");if(!input?.value.trim())return;const context=read(CTX,c),diag=diagnosis(),m=MODES[getMode()]||MODES.teacher;input.value="[NorthStar Mentor Context]\nMode: "+m[0]+"\nContext: "+context.type+" / "+context.title+"\nObjective: "+context.objective+"\nLearner state: "+diag.band+" at "+diag.mastery+"%\nAdaptive next step: "+diag.next+"\nMentor rule: "+m[1]+"\n\nLearner request: "+input.value.trim()},{capture:true});
}
function run(){const root=document.querySelector("#view");if(root){capture();diagnosis();renderChrome(root)}}
new MutationObserver(run).observe(document.body,{subtree:true,childList:true});
run();
})();