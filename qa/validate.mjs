import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root=process.cwd();
const required=[
 "index.html","app.js","styles.css",
 "data/curriculum.js","data/lesson_enrichment.js","data/mentor_engine.js",
 "data/mentor_ui.js","data/ai.js","data/cyberrange.js","data/lab_intelligence.js",
 "data/competency_completion.js","data/advanced_labs.js","data/capstone.js","data/assessment_engine.js"
];
for(const file of required) if(!fs.existsSync(path.join(root,file))) throw new Error("Missing required file: "+file);

const jsFiles=fs.readdirSync(path.join(root,"data")).filter(x=>x.endsWith(".js")).map(x=>"data/"+x);
for(const file of ["app.js",...jsFiles]) {
 const {status,stderr}=await new Promise(resolve=>{
  import("node:child_process").then(({spawn})=>{
   const p=spawn(process.execPath,["--check",file],{cwd:root});
   let err="";p.stderr.on("data",d=>err+=d);p.on("close",code=>resolve({status:code,stderr:err}));
  });
 });
 if(status!==0) throw new Error("Syntax failure in "+file+"\n"+stderr);
}

const loadWindow=(file,name)=>{
 const source=fs.readFileSync(path.join(root,file),"utf8");
 const w={};
 return new Function("window",source+"\n;return window["+JSON.stringify(name)+"];")(w);
};
const base=loadWindow("data/curriculum.js","NORTHSTAR_CURRICULUM");
const additions=loadWindow("data/competency_completion.js","NORTHSTAR_COMPETENCY_COMPLETION");
const labs=loadWindow("data/cyberrange.js","NORTHSTAR_LABS");
const advancedLabs=loadWindow("data/advanced_labs.js","NORTHSTAR_ADVANCED_LABS");
const advancedDetails=loadWindow("data/advanced_labs.js","NORTHSTAR_ADVANCED_LAB_DETAILS");
const capstone=loadWindow("data/capstone.js","NORTHSTAR_CAPSTONE");
const assessment=loadWindow("data/assessment_engine.js","NORTHSTAR_ASSESSMENT");

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
for(const src of [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>m[1])) {
 const clean=src.split("?")[0].replace(/^\.\//,"");
 if(!fs.existsSync(path.join(root,clean))) throw new Error("Broken script asset: "+src);
}
const app=fs.readFileSync(path.join(root,"app.js"),"utf8");
if(app.includes("data.evidence||")) throw new Error("Stale practice-panel data.evidence reference remains.");
if(!app.includes("window.NORTHSTAR_CAPSTONE")) throw new Error("Capstone not wired into app.");
if(!app.includes("window.NORTHSTAR_ASSESSMENT")) throw new Error("Assessment engine not wired into app.");
const ai=fs.readFileSync(path.join(root,"data/ai.js"),"utf8");
if(!ai.includes('provider:"OmniRoute"')||!ai.includes('localModel:false')||!ai.includes('deviceModelStorage:false')) throw new Error("AI architecture contract failed.");

console.log("NorthStar final QA: OK");
console.log(JSON.stringify({
 corePathways:base.length,
 coreLessons,
 completionLessons:additions.length,
 totalLessons:allLessons.length,
 labs:labs.length,
 capstoneStages:cap.stages.length,
 assessment:"wired",
 ai:"OmniRoute -> cloud model; no local model"
},null,2));
