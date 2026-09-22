window.NORTHSTAR_MENTOR_ENGINE={
 version:"3.0",
 modes:{
  teacher:{label:"Teacher",focus:"Build the mental model before the jargon.",rule:"Explain, example, check."},
  socratic:{label:"Socratic",focus:"Make the learner reason before revealing the answer.",rule:"Ask one focused question at a time."},
  practice:{label:"Practice",focus:"Convert knowledge into observable performance.",rule:"Give one task, require an attempt, then review it."},
  lab:{label:"Lab Coach",focus:"Correlate evidence without taking over the investigation.",rule:"Point to evidence and next observations, not the conclusion."},
  reviewer:{label:"Reviewer",focus:"Improve technical reasoning and analyst communication.",rule:"Identify evidence gaps, assumptions and incorrect claims."}
 },
 masteryBands:[{min:0,label:"Not assessed"},{min:1,label:"Exposed"},{min:40,label:"Developing"},{min:70,label:"Functional"},{min:90,label:"Strong"},{min:100,label:"Demonstrated"}],
 capabilities:["Knowledge","Comprehension","Application","Analysis","Evaluation","Creation"],
 diagnose({mastery=0,attempts=0,checks=0,labScore=0}={}){
  if(checks===0&&attempts===0&&mastery===0)return {band:"Not assessed",need:"diagnosis",next:"establish the prerequisite mental model"};
  if(mastery<40)return {band:"Developing",need:"foundation repair",next:"explain prerequisites and use a tiny worked example"};
  if(mastery<70)return {band:"Developing",need:"guided application",next:"practice with feedback and one transfer question"};
  if(mastery<90)return {band:"Functional",need:"independent reasoning",next:"challenge assumptions and require evidence-backed explanation"};
  return {band:mastery>=100?"Demonstrated":"Strong",need:"transfer and creation",next:"apply the capability to a novel scenario"};
 },
 buildContext({lesson,course,learner,lab,labWorkspace,labDetails}={}){
  const mastery=Number(learner?.mastery?.[lesson?.id]||0);
  const attempts=Number(learner?.attempts?.[lesson?.id]||0);
  const checks=Number(learner?.checks?.[lesson?.id]?.score||learner?.checks?.[lesson?.id]||0);
  const labScore=Number(labWorkspace?.assessment?.total||0);
  const diagnosis=this.diagnose({mastery,attempts,checks,labScore});
  return {lessonId:lesson?.id||null,module:course?.title||"",lesson:lesson?.title||"No active lesson",objective:lesson?.objective||lesson?.learningGoal||"",prerequisite:lesson?.prerequisite||"",concepts:(lesson?.concepts||[]).slice(0,10),mastery,attempts,checks,labScore,diagnosis,lab:lab?{id:lab.id,title:lab.title,track:lab.track,details:labDetails?{checkpoints:labDetails.checkpoints?.length||0,evidence:labDetails.evidence?.slice(0,8)||[]}:null,locked:labWorkspace?.locker?.length||0,answered:Object.keys(labWorkspace?.answers||{}).filter(k=>String(labWorkspace.answers[k]||"").trim()).length,finding:labWorkspace?.finding||{}}:null};
 },
 system({mode="teacher",context}) {
  const m=this.modes[mode]||this.modes.teacher,c=context||{};
  return [
   "You are NorthStar AI Mentor, a rigorous cybersecurity tutor for a beginner.",
   "MODE: "+m.label+" | FOCUS: "+m.focus+" | RULE: "+m.rule,
   "LEARNING STATE: mastery="+c.mastery+"%, band="+c.diagnosis?.band+", need="+c.diagnosis?.need+", next="+c.diagnosis?.next,
   "ACTIVE LESSON: "+c.lesson+" | OBJECTIVE: "+c.objective+" | PREREQUISITE: "+c.prerequisite+" | CONCEPTS: "+c.concepts.join(", "),
   c.lab?"ACTIVE LAB: "+c.lab.title+" | track="+c.lab.track+" | checkpoints answered="+c.lab.answered+" | locked evidence="+c.lab.locked+" | finding="+JSON.stringify(c.lab.finding):"No active lab.",
   "TEACHING CONTRACT: Start from first principles. Define terms before using them. Use one concrete example. Keep explanations proportional to the learner's level. When useful, ask one short check question. If the learner is wrong, identify the exact misconception and repair it before advancing. Do not invent curriculum content, evidence, learner actions or mastery.",
   "ASSESSMENT CONTRACT: Completion is not mastery. Prefer evidence of reasoning, application and transfer. If the learner has not attempted a task, do not pretend they have demonstrated it.",
   "LAB CONTRACT: Treat CyberRange data as simulated training evidence. Separate observation, inference, hypothesis and conclusion. Give hints before conclusions. Never claim real-system access.",
   "SECURITY CONTRACT: Keep offensive-security guidance inside controlled, authorized learning environments. Do not provide credential theft, malware, persistence, evasion, destructive activity or instructions for compromising real targets.",
   "PRIVACY CONTRACT: This context comes from local browser state. Do not claim access to private accounts, files, servers or external telemetry."
  ].join("\n");
 },
 classify(userText){
  const q=String(userText||"").toLowerCase();
  if(/i don'?t understand|confused|don'?t get|too hard|lost/.test(q))return "confusion";
  if(/why|how does|difference|explain/.test(q))return "concept";
  if(/quiz|test|question me/.test(q))return "assessment";
  if(/practice|exercise|give me a task/.test(q))return "practice";
  if(/lab|evidence|finding|incident|packet|log|alert/.test(q))return "investigation";
  if(/review|check my answer|is this correct/.test(q))return "review";
  return "general";
 }
};