import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const required=[
 "index.html","app.js","styles.css",
 "data/curriculum.js","data/lesson_enrichment.js",
 "data/cyberrange.js","data/lab_intelligence.js",
 "data/competency_completion.js","data/advanced_labs.js","data/capstone.js","data/assessment_engine.js"
];
for(const file of required)if(!fs.existsSync(path.join(root,file)))throw new Error("Missing required file: "+file);

const curriculumSource=fs.readFileSync(path.join(root,"data/curriculum.js"),"utf8");
const additionsSource=fs.readFileSync(path.join(root,"data/competency_completion.js"),"utf8");
const labsSource=fs.readFileSync(path.join(root,"data/cyberrange.js"),"utf8");
const advancedSource=fs.readFileSync(path.join(root,"data/advanced_labs.js"),"utf8");
const capstoneSource=fs.readFileSync(path.join(root,"data/capstone.js"),"utf8");

const parseArray=(source,startToken)=>{
 const start=source.indexOf(startToken);
 if(start<0)throw new Error("Missing array token: "+startToken);
 const open=source.indexOf("[",start);
 const end=source.indexOf("];",open);
 if(open<0||end<0)throw new Error("Malformed array: "+startToken);
 return new Function("return "+source.slice(open,end+1))();
};
const parseWindowObject=(source,name)=>{
 const start=source.indexOf(name+"=");
 if(start<0)throw new Error("Missing object: "+name);
 const open=source.indexOf("{",start);
 const end=source.lastIndexOf("};");
 if(open<0||end<0)throw new Error("Malformed object: "+name);
 return new Function("return "+source.slice(open,end+1))();
};

const base=parseArray(curriculumSource,"const NORTHSTAR_CURRICULUM");
const additions=parseArray(additionsSource,"window.NORTHSTAR_COMPETENCY_COMPLETION");
const baseLabs=parseArray(labsSource,"window.NORTHSTAR_LABS");
const advancedLabs=parseArray(advancedSource,"window.NORTHSTAR_ADVANCED_LABS");
const capstone=parseWindowObject(capstoneSource,"window.NORTHSTAR_CAPSTONE");

if(!Array.isArray(base)||base.length!==16)throw new Error("Expected 16 core pathways; found "+(base?.length||0));
const coreLessons=base.reduce((n,c)=>n+(Array.isArray(c.lessons)?c.lessons.length:0),0);
if(coreLessons!==140)throw new Error("Expected 140 core lessons; found "+coreLessons);
if(!Array.isArray(additions)||additions.length!==7)throw new Error("Expected 7 competency-completion lessons; found "+(additions?.length||0));
const allLessons=[...base.flatMap(c=>c.lessons||[]),...additions];
const ids=allLessons.map(l=>l.id);
const duplicateIds=ids.filter((id,i)=>ids.indexOf(id)!==i);
if(duplicateIds.length)throw new Error("Duplicate lesson ids: "+duplicateIds.join(", "));
for(const lesson of allLessons)if(!lesson.id||!lesson.title||!lesson.objective)throw new Error("Incomplete lesson: "+JSON.stringify(lesson.id));

if(baseLabs.length!==12)throw new Error("Expected 12 base labs; found "+baseLabs.length);
if(advancedLabs.length!==5)throw new Error("Expected 5 advanced labs; found "+advancedLabs.length);
if(!capstone||capstone.stages?.length!==8||capstone.rubric?.length!==7)throw new Error("Capstone contract incomplete.");

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
for(const src of [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>m[1])){
 const clean=src.split("?")[0].replace(/^\.\//,"");
 if(!fs.existsSync(path.join(root,clean)))throw new Error("Broken script asset: "+src);
}
const app=fs.readFileSync(path.join(root,"app.js"),"utf8");
if(!app.includes("capstone:()=>"))throw new Error("Capstone route is not wired.");
if(!app.includes("data-capstone-stage"))throw new Error("Capstone workspace is not wired.");
if(!app.includes("window.NORTHSTAR_ASSESSMENT"))throw new Error("Assessment engine is not wired.");
if(!app.includes("data-practice-response"))throw new Error("Practice evidence capture is not wired.");
if(app.includes("data.evidence||"))throw new Error("Stale practice-panel reference remains.");
if(html.includes("workers/mentor"))throw new Error("Obsolete worker gateway reference remains in index.html.");
for(const requiredAsset of ["competency_completion.js","advanced_labs.js","capstone.js","assessment_engine.js"])if(!html.includes(requiredAsset))throw new Error("Missing final release asset: "+requiredAsset);

console.log("NorthStar final QA: OK");
console.log(JSON.stringify({corePathways:base.length,coreLessons,completionLessons:additions.length,totalLessons:allLessons.length,baseLabs:baseLabs.length,advancedLabs:advancedLabs.length,capstoneStages:capstone.stages.length},null,2));
