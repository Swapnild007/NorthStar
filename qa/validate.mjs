import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const required=[
 "index.html","app.js","styles.css",
 "data/curriculum.js","data/lesson_enrichment.js","data/mentor_engine.js",
 "data/mentor_ui.js","data/ai.js","data/cyberrange.js","data/lab_intelligence.js",
 "data/competency_completion.js","data/advanced_labs.js","data/capstone.js","data/assessment_engine.js"
];
for(const file of required)if(!fs.existsSync(path.join(root,file)))throw new Error("Missing required file: "+file);

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const app=fs.readFileSync(path.join(root,"app.js"),"utf8");
const curriculum=fs.readFileSync(path.join(root,"data/curriculum.js"),"utf8");
const additions=fs.readFileSync(path.join(root,"data/competency_completion.js"),"utf8");
const labs=fs.readFileSync(path.join(root,"data/cyberrange.js"),"utf8");
const advancedLabs=fs.readFileSync(path.join(root,"data/advanced_labs.js"),"utf8");
const capstone=fs.readFileSync(path.join(root,"data/capstone.js"),"utf8");
const assessment=fs.readFileSync(path.join(root,"data/assessment_engine.js"),"utf8");
const ai=fs.readFileSync(path.join(root,"data/ai.js"),"utf8");

const scriptRefs=[...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>m[1].split("?")[0].replace(/^\.\//,""));
for(const ref of scriptRefs)if(!fs.existsSync(path.join(root,ref)))throw new Error("Broken script asset: "+ref);

const coreLessonIds=(curriculum.match(/"id":\s*"[^"]+"/g)||[]).length;
const completionLessons=(additions.match(/id:"supp-/g)||[]).length;
const advancedLabCount=(advancedLabs.match(/id:"[^"]+"/g)||[]).length;
const capstoneStageCount=(capstone.match(/id:"[^"]+"/g)||[]).length;
const baseLabCount=(labs.match(/id:"[^"]+"/g)||[]).length;

if(coreLessonIds<140)throw new Error("Core curriculum invariant failed: fewer than 140 lesson records.");
if(completionLessons!==7)throw new Error("Competency completion invariant failed: expected 7.");
if(advancedLabCount!==5)throw new Error("Advanced lab invariant failed: expected 5.");
if(baseLabCount!==12)throw new Error("Base lab invariant failed: expected 12.");
if(capstoneStageCount<8)throw new Error("Capstone stage invariant failed.");
if(!app.includes("capstone:()=>"))throw new Error("Capstone route is not wired.");
if(!app.includes("data-capstone-stage"))throw new Error("Capstone workspace is not wired.");
if(!app.includes("window.NORTHSTAR_ASSESSMENT"))throw new Error("Assessment engine is not wired.");
if(!app.includes("data-practice-response"))throw new Error("Practice evidence capture is not wired.");
if(app.includes("data.evidence||"))throw new Error("Stale practice-panel reference remains.");
if(!ai.includes('provider:"OmniRoute"')||!ai.includes('localModel:false')||!ai.includes('deviceModelStorage:false'))throw new Error("AI architecture contract failed.");
if(html.includes("workers/mentor"))throw new Error("Obsolete worker gateway reference remains in index.html.");
if(!html.includes("competency_completion.js")||!html.includes("advanced_labs.js")||!html.includes("capstone.js")||!html.includes("assessment_engine.js"))throw new Error("Final release assets are not loaded.");

console.log("NorthStar final QA: OK");
console.log(JSON.stringify({
 coreLessonRecords:coreLessonIds,
 completionLessons,
 baseLabs:baseLabCount,
 advancedLabs:advancedLabCount,
 capstoneStages:capstoneStageCount,
 ai:"OmniRoute -> cloud model",
 localModel:false
},null,2));
