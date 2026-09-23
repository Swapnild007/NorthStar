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

const storage=new Map();
const context={
  window:{},
  localStorage:{getItem:key=>storage.has(key)?storage.get(key):null,setItem:(key,value)=>storage.set(key,String(value)),removeItem:key=>storage.delete(key)},
  document:{querySelector:()=>null,querySelectorAll:()=>[]},
  location:{hostname:"127.0.0.1",protocol:"http:"},
  console
};
vm.createContext(context);
for(const file of [
 "data/course.js","data/ai.js","data/mentor.js","data/mentor_engine.js","data/mentor_ui.js",
 "data/curriculum.js","data/curriculum2.js","data/learner.js","data/lesson_enrichment.js",
 "data/cyberrange.js","data/lab_intelligence.js","data/competency_completion.js",
 "data/advanced_labs.js","data/capstone.js","data/assessment_engine.js"
]) vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),context,{filename:file});

const base=context.window.NORTHSTAR_CURRICULUM;
const additions=context.window.NORTHSTAR_COMPETENCY_COMPLETION;
if(!Array.isArray(base)||base.length!==16) throw new Error("Expected 16 core pathways.");
const coreLessons=base.reduce((n,c)=>n+(Array.isArray(c.lessons)?c.lessons.length:0),0);
if(coreLessons!==140) throw new Error("Expected 140 core lessons; found "+coreLessons);
if(!Array.isArray(additions)||additions.length!==7) throw new Error("Expected 7 competency completion lessons.");
const allLessons=[...base.flatMap(c=>c.lessons||[]),...additions];
const ids=new Set();
for(const l of allLessons){
 if(!l.id||ids.has(l.id)) throw new Error("Duplicate/missing lesson id: "+l.id);
 ids.add(l.id);
 if(!l.title||!l.objective) throw new Error("Lesson missing title/objective: "+l.id);
}
const coursesWithAdditions=new Set(additions.map(x=>String(x.course)));
if(coursesWithAdditions.size!==6) throw new Error("Competency additions do not span expected pathways.");

const labs=[...(context.window.NORTHSTAR_LABS||[]),...(context.window.NORTHSTAR_ADVANCED_LABS||[])];
const details={...(context.window.NORTHSTAR_LAB_DETAILS||{}),...(context.window.NORTHSTAR_ADVANCED_LAB_DETAILS||{})};
if(labs.length<17) throw new Error("Expected at least 17 labs; found "+labs.length);
for(const lab of labs){
 const d=details[lab.id];
 if(!d||!Array.isArray(d.evidence)||!Array.isArray(d.checkpoints)||!Array.isArray(d.hints)) throw new Error("Incomplete lab detail: "+lab.id);
}
const cap=context.window.NORTHSTAR_CAPSTONE;
if(!cap||cap.stages?.length!==8||cap.rubric?.length<7) throw new Error("Capstone is incomplete.");
if(!context.window.NORTHSTAR_ASSESSMENT?.evaluateLesson||!context.window.NORTHSTAR_ASSESSMENT?.recordLesson) throw new Error("Assessment engine incomplete.");

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
