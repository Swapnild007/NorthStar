(()=>{"use strict";
const KEY="ns_mentor_ui_state",CTX="ns_mentor_context",DIAG="ns_mentor_diagnosis";
const MODES={
 teacher:["Teacher","First principles → example → check"],
 socratic:["Socratic","One focused question → your reasoning"],
 practice:["Practice","One task → your attempt → feedback"],
 lab:["Lab Coach","Evidence → correlation → next observation"],
 reviewer:["Reviewer","Accuracy → evidence → assumptions"],
 coder:["Code Mentor","Explain → code → test → improve"]
};
const read=(k,f)=>{try{const x=localStorage.getItem(k);return x===null?f:JSON.parse(x)}catch{return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
function getMode(){const mode=read(KEY,{mode:"teacher"}).mode;return MODES[mode]?mode:"teacher"}
function setMode(mode){if(MODES[mode]){write(KEY,{mode});return true}return false}
function capture(){
 const lesson=document.querySelector(".lesson-card");
 const lab=document.querySelector(".lab-mode .cr-operator-hud")?.closest(".app-shell");
 let context={type:"none",title:"No active context",objective:"Open a lesson or lab."};
 if(lesson)context={type:"lesson",title:lesson.querySelector("h1")?.textContent?.trim()||"Active lesson",objective:lesson.querySelector(".subtitle")?.textContent?.trim()||"Lesson context"};
 if(lab)context={type:"lab",title:lab.querySelector("h1")?.textContent?.trim()||"CyberRange investigation",objective:lab.querySelector(".cr-brief h2")?.textContent?.trim()||"Controlled investigation",evidence:lab.querySelector(".cr-operator-hud")?.textContent?.replace(/\s+/g," ").trim()||""};
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
window.NORTHSTAR_MENTOR_UI={MODES,getMode,setMode,capture,diagnosis};
capture();diagnosis();
})();