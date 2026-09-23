import fs from "node:fs";
import path from "node:path";
import {spawn} from "node:child_process";

const root=process.cwd();
const required=[
 "index.html","app.js","styles.css",
 "data/curriculum.js","data/lesson_enrichment.js","data/mentor_engine.js",
 "data/mentor_ui.js","data/ai.js","data/cyberrange.js","data/lab_intelligence.js",
 "data/competency_completion.js","data/advanced_labs.js","data/capstone.js","data/assessment_engine.js"
];
for(const file of required){
 if(!fs.existsSync(path.join(root,file)))throw new Error("Missing required file: "+file);
}

const jsFiles=fs.readdirSync(path.join(root,"data")).filter(x=>x.endsWith(".js")).map(x=>"data/"+x);
for(const file of ["app.js",...jsFiles]){
 const result=await new Promise(resolve=>{
  const p=spawn(process.execPath,["--check",file],{cwd:root});
  let stderr="";
  p.stderr.on("data",d=>stderr+=d);
  p.on("close",code=>resolve({code,stderr}));
 });
 if(result.code!==0)throw new Error("Syntax failure in "+file+"\n"+result.stderr);
}

function loadWindow(file,name){
 const source=fs.readFileSync(path.join(root,file),"utf8");
 const w={};
 return new Function("window",source+"\n;return window["+JSON.stringify(name)+"];")(w);
}

const base=loadWindow("data/curriculum.js","NORTHSTAR_CURRICULUM");
const additions=loadWindow("data/competency_completion.js","NORTHSTAR_COMPETENCY_COMPLETION");
const baseLabs=loadWindow("data/cyberrange.js","NORTHSTAR_LABS");
const advancedLabs=loadWindow("data/advanced_labs.js","NORTHSTAR_ADVANCED_LABS");
const advancedDetails=loadWindow("data/advanced_labs.js","NORTHSTAR_ADVANCED_LAB_DETAILS");
const capstone=loadWindow("data/capstone.js","NORTHSTAR_CAPSTONE");
const assessment=loadWindow("data/assessment_engine.js","NORTHSTAR_ASSESSMENT");

if(!Array.isArray(base)||base.length!==16)throw new Error("Expected 16 core pathways.");
const coreLessons=base.reduce((n,c)=>n+(Array.isArray(c.lessons)?c.lessons.length:0),0);
if(coreLessons!==140)throw new Error("Expected 140 core lessons; found "+coreLessons);
if(!Array.isArray(additions)||additions.length!==7)throw new Error("Expected 7 competency-completion lessons.");
const allLessons=[...base.flatMap(c=>c.lessons||[]),...additions];
const ids=allLessons.map(l=>l.id);
const duplicateIds=ids.filter((id,i)=>ids.indexOf(id)!==i);
if(duplicateIds.length)throw new Error("Duplicate lesson ids: "+duplicateIds.join(", "));
for(const lesson of allLessons){
 if(!lesson.id||!lesson.title||!lesson.objective)throw new Error("Incomplete lesson: "+JSON.stringify(lesson.id));
}

const labs=[...(baseLabs||[]),...(advancedLabs||[])];
const details=advancedDetails||{};
if(labs.length!==17)throw new Error("Expected 17 labs; found "+labs.length);
for(const lab of advancedLabs||[]){
 const detail=details[lab.id];
 if(!detail||detail.evidence?.length<4||detail.checkpoints?.length<4||detail.hints?.length<4)throw new Error("Incomplete advanced lab: "+lab.id);
}

if(!capstone||capstone.stages?.length!==8||capstone.rubric?.length!==7)throw new Error("Capstone contract incomplete.");
if(typeof assessment?.evaluateLesson!=="function"||typeof assessment?.recordLesson!=="function")throw new Error("Assessment engine contract incomplete.");

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
for(const src of [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>m[1])){
 const clean=src.split("?")[0].replace(/^\.\//,"");
 if(!fs.existsSync(path.join(root,clean)))throw new Error("Broken script asset: "+src);
}

const app=fs.readFileSync(path.join(root,"app.js"),"utf8");
if(app.includes("data.evidence||"))throw new Error("Stale practice-panel data.evidence reference remains.");
if(!app.includes("capstone:()=>"))throw new Error("Capstone route is not wired.");
if(!app.includes("window.NORTHSTAR_ASSESSMENT"))throw new Error("Assessment engine is not wired.");
const ai=fs.readFileSync(path.join(root,"data/ai.js"),"utf8");
if(!ai.includes('provider:"OmniRoute"')||!ai.includes('localModel:false')||!ai.includes('deviceModelStorage:false'))throw new Error("AI architecture contract failed.");

console.log("NorthStar final QA: OK");
console.log(JSON.stringify({
 corePathways:base.length,
 coreLessons,
 completionLessons:additions.length,
 totalLessons:allLessons.length,
 labs:labs.length,
 capstoneStages:capstone.stages.length,
 assessment:"wired",
 ai:"OmniRoute -> cloud model; no local model"
},null,2));
