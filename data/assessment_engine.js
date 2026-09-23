window.NORTHSTAR_ASSESSMENT={
version:"1.0",
weights:{knowledge:0.35,reasoning:0.25,application:0.25,completion:0.15},
clamp(v){return Math.max(0,Math.min(100,Math.round(Number(v)||0)))},
evaluateLesson({correct=false,reasoningChars=0,practiceChars=0,completed=false}={}){
 const knowledge=correct?100:0;
 const reasoning=this.clamp(Math.min(100,(Number(reasoningChars)||0)/180*100));
 const application=this.clamp(Math.min(100,(Number(practiceChars)||0)/240*100));
 const completion=completed?100:0;
 const w=this.weights;
 const mastery=this.clamp(knowledge*w.knowledge+reasoning*w.reasoning+application*w.application+completion*w.completion);
 return {mastery,knowledge,reasoning,application,completion,band:this.band(mastery)};
},
band(score){const s=this.clamp(score);if(s>=90)return"Strong";if(s>=70)return"Functional";if(s>=40)return"Developing";if(s>0)return"Exposed";return"Not assessed"},
recordLesson(id,result){
 const raw=(()=>{try{return JSON.parse(localStorage.getItem("ns_learner_model")||"{}")}catch{return{}}})();
 raw.version="2.0";
 raw.mastery=raw.mastery&&typeof raw.mastery==="object"?raw.mastery:{};
 raw.attempts=raw.attempts&&typeof raw.attempts==="object"?raw.attempts:{};
 raw.checks=raw.checks&&typeof raw.checks==="object"?raw.checks:{};
 raw.attempts[id]=Number(raw.attempts[id]||0)+1;
 raw.mastery[id]=Math.max(Number(raw.mastery[id]||0),result.mastery);
 raw.checks[id]={score:result.mastery,knowledge:result.knowledge,reasoning:result.reasoning,application:result.application,updated:new Date().toISOString()};
 raw.lastActivity=new Date().toISOString();
 localStorage.setItem("ns_learner_model",JSON.stringify(raw));
 return raw;
},
summary(ids=[]){
 const raw=(()=>{try{return JSON.parse(localStorage.getItem("ns_learner_model")||"{}")}catch{return{}}})();
 const values=ids.map(id=>Number(raw.mastery?.[id]||0));
 const assessed=values.filter(v=>v>0);
 return {mastery:assessed.length?Math.round(assessed.reduce((a,b)=>a+b,0)/assessed.length):0,assessed:assessed.length,total:ids.length};
}
};