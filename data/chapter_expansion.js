/* NorthStar 2.0 chapter-completion layer.
 * Builds a consistent, lesson-specific teaching contract for every core lesson.
 * Inputs come from the authored curriculum; this layer supplements rather than replaces it.
 * Practice must use synthetic data, local sandboxes, or systems with explicit authorization.
 */
(function(){
  "use strict";
  const paths=Array.isArray(window.NORTHSTAR_CURRICULUM)?window.NORTHSTAR_CURRICULUM:[];
  const out={};
  const clean=x=>String(x||"").trim();
  const escList=x=>Array.isArray(x)?x.map(clean).filter(Boolean):[];
  const titleCase=s=>clean(s).replace(/\s+/g," ");
  const make=(lesson,path,index)=>{
    const title=titleCase(lesson.title||("Core lesson "+lesson.id));
    const objective=clean(lesson.objective||lesson.learningGoal||"Explain the core idea and apply it responsibly.");
    const terms=escList(lesson.concepts);
    const termLine=terms.length?terms.slice(0,6).join(", "):title;
    const originalRead=clean(lesson.read||lesson.explanation||"");
    const originalExample=lesson.examples?.[0]||lesson.example||null;
    const exampleTitle=clean(originalExample?.title||"A practical decision");
    const exampleBody=clean(originalExample?.body||originalExample||"");
    const priorCase=clean(lesson.case||"");
    const chapterCase=priorCase||("A team must make a decision involving "+title+". The available evidence is incomplete, the system has a legitimate business purpose, and the team must avoid disrupting users. Define the question, scope, assumptions, relevant evidence, safe next action and conditions for escalation.");
    const guide=[
      {title:"Conceptual foundation",time:"15 min"},
      {title:"Mechanism and assumptions",time:"20 min"},
      {title:"Security and operational implications",time:"20 min"},
      {title:"Applied case analysis",time:"15 min"},
      {title:"Evidence artifact",time:"15 min"},
      {title:"Practice, retrieval and reflection",time:"15 min"}
    ];
    const deepDive=[
      {title:"1. Define the idea and its boundary",body:"Start with the lesson objective: "+objective+" Define "+termLine+" in plain language. Identify the system, people, data and decisions in scope. Separate what the concept guarantees from what it does not guarantee; name any prerequisite knowledge and assumptions."},
      {title:"2. Trace the mechanism",body:"Describe the sequence from input or initiating event, through the relevant components and control points, to the observable output. At each step ask: who or what acts, what permission is used, what can fail, and what record would show that the step occurred? Use the lesson's own terminology and diagram or example where provided."},
      {title:"3. Evaluate risk and alternatives",body:"Connect "+title+" to confidentiality, integrity, availability, safety, privacy and operational continuity as applicable. Consider at least one normal explanation and one failure or misuse path. Prioritize by impact, likelihood, exposure and uncertainty rather than by a tool label alone. Choose the least disruptive control that addresses the stated risk."},
      {title:"4. Verify and communicate",body:"A defensible answer includes a scoped question, source-backed observations, reasoning, uncertainty, limitations and a next action. Validate the result with an independent check when practical. Record assumptions and preserve relevant evidence; do not claim that an absence of logs proves an event did not occur."}
    ];
    const examples=[{
      title:exampleTitle,
      body:exampleBody||("Suppose a team is applying "+title+" to a small, fictional organization. First state the business goal and the boundary being examined. Use the concepts "+termLine+" to map the steps and identify the control that matters. Compare the expected behavior with a supplied synthetic observation, note what the observation cannot establish, then recommend a proportionate next step.")
    }];
    const steps=[
      "Restate the objective of "+title+" in your own words and define the relevant terms: "+termLine+".",
      "Draw or write the mechanism as an ordered sequence. Mark the actors, inputs, outputs, trust boundaries and assumptions.",
      "Work through the example using the supplied lesson material. Label each statement as a fact, inference, hypothesis or recommendation.",
      "Use only a synthetic dataset, local sandbox or explicitly authorized environment. Collect the minimum evidence needed to answer the lesson question.",
      "Produce a short artifact: scope, method, observations, reasoning, result, uncertainty and recommended next action.",
      "Check your result against the lesson objective and rubric. Correct unsupported claims and record one open question."
    ];
    const mistakes=[
      "Memorizing terms without being able to explain the mechanism or boundary.",
      "Treating a tool result, single observation or correlation as a complete conclusion.",
      "Ignoring assumptions, data quality, scope, user impact or alternate explanations.",
      "Making a recommendation without naming an owner, verification step or limitation."
    ];
    const takeaways=[
      "Explain "+title+" using the objective and core concepts, not only a memorized definition.",
      "Trace how the mechanism works and identify where its security or operational boundary sits.",
      "Support conclusions with relevant evidence, state uncertainty and choose a safe, verifiable next action."
    ];
    const rubric=[
      "Conceptual accuracy: defines the key terms and explains the mechanism in a clear sequence.",
      "Analysis: identifies scope, assumptions, relevant risks and at least one plausible alternative explanation.",
      "Application: completes a proportionate exercise in a synthetic or authorized environment and produces the requested artifact.",
      "Evidence and communication: distinguishes observations from inference, states limitations and gives a testable next step."
    ];
    const qas=[
      {q:"What is the central idea of "+title+"?",a:objective,why:"A useful explanation connects the lesson objective to the named concepts and the system boundary."},
      {q:"What makes an analysis of "+title+" defensible?",a:"A clear scope, explicit assumptions, relevant evidence, reproducible reasoning, stated limitations and a proportionate next action.",why:"These elements allow another learner or reviewer to understand and challenge the conclusion."}
    ];
    const check={
      q:"Which approach best demonstrates understanding of "+title+"?",
      options:[
        "Repeat the definition without applying it.",
        "Make a confident claim from one unverified signal.",
        "Explain the mechanism, apply it to the scoped case, and support the conclusion with evidence and limitations.",
        "Skip verification because the recommended tool produced an output."
      ],
      answer:"Explain the mechanism, apply it to the scoped case, and support the conclusion with evidence and limitations.",
      why:"NorthStar 2.0 measures understanding through explanation, application, evidence and reflection, not completion alone."
    };
    return {
      learningGoal:"Master "+title+" from first principles, then demonstrate the skill through a scoped case, guided practice and a reviewable evidence artifact.",
      notes:[
        "Prerequisite check: "+clean(lesson.prerequisite||"Review the prior pathway lesson and its key terms.")+".",
        "Keep a running distinction between observations, interpretations and decisions.",
        "Use the lesson's supplied reference material and record any source or data limitations.",
        "Hands-on work is restricted to owned systems, synthetic data or environments where explicit authorization has been granted."
      ],
      studyPlan:guide,
      deepDive,
      examples,
      case:chapterCase,
      caseQuestions:[
        "What is the exact question, scope and business or user impact?",
        "Which concepts from "+termLine+" explain the mechanism or control boundary?",
        "Which observations are available, and what additional evidence is needed?",
        "What benign alternative, failure mode or uncertainty should be considered?",
        "What is the safest next action, who owns it, and how will the result be verified?"
      ],
      practice:"Complete a short, evidence-led application of "+title+" and submit a concise analyst or learner note.",
      practiceSteps:steps,
      mistakes,
      takeaways,
      assessmentRubric:rubric,
      qa:qas,
      check,
      reflection:"What assumption in your analysis of "+title+" is most uncertain? What specific observation or source would change your conclusion?"
    };
  };
  for(const path of paths){
    for(const lesson of (Array.isArray(path.lessons)?path.lessons:[])){
      if(!lesson||!lesson.id||String(lesson.id).startsWith("supp-")||String(lesson.id).startsWith("ns20-"))continue;
      out[lesson.id]=make(lesson,path,0);
    }
  }
  window.NORTHSTAR_CHAPTER_EXPANSION=out;
})();
