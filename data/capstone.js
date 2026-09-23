window.NORTHSTAR_CAPSTONE={
version:"1.0",
id:"enterprise-security-capstone",
title:"NorthStar Enterprise Security Capstone",
subtitle:"Design, investigate and defend a security programme for a realistic enterprise scenario.",
description:"The capstone integrates technical security, data analysis, engineering, governance and executive communication. It is a simulation: no external systems are accessed.",
scenario:"A 900-person healthcare-services company is modernizing identity, customer applications and cloud workloads. The organization has fragmented logging, inconsistent privileged access reviews, a growing third-party footprint and an unresolved incident involving an employee workstation. You are the security lead asked to produce a defensible 90-day response and a 12-month improvement roadmap.",
stages:[
{id:"frame",title:"1. Problem framing",prompt:"Define business objectives, scope, assumptions, stakeholders and the decisions the capstone must support.",artifact:"One-page problem statement and scope boundary."},
{id:"assets",title:"2. Asset & business-impact model",prompt:"Identify critical identities, applications, data, endpoints, cloud workloads and third parties. Assign business impact and ownership.",artifact:"Asset register with owner, sensitivity, availability need and business impact."},
{id:"threat",title:"3. Threat & trust-boundary model",prompt:"Map major trust boundaries, plausible threat scenarios and the controls that reduce risk.",artifact:"Threat model with assumptions and evidence gaps."},
{id:"architecture",title:"4. Security architecture",prompt:"Design identity, segmentation, secrets, application, endpoint and cloud controls appropriate to the scenario.",artifact:"Security architecture diagram plus control rationale."},
{id:"telemetry",title:"5. Detection & response",prompt:"Define telemetry sources, high-value detections, triage logic and incident-response priorities.",artifact:"Telemetry map and detection strategy."},
{id:"analytics",title:"6. Data & evidence analysis",prompt:"Use the provided simulated evidence to build a timeline, quantify patterns and state confidence and limitations.",artifact:"Analysis notebook-style narrative, evidence table and findings."},
{id:"risk",title:"7. Risk treatment & roadmap",prompt:"Prioritize risks, select treatments, identify owners, estimate sequencing and describe residual risk.",artifact:"Risk register, treatment decisions and 90-day/12-month roadmap."},
{id:"executive",title:"8. Executive defense",prompt:"Communicate the problem, evidence, decisions, trade-offs, investment and residual uncertainty to an executive audience.",artifact:"Executive brief and final defense script."}
],
rubric:[
{id:"framing",label:"Problem framing",weight:10,standard:"Scope and decisions are explicit; assumptions and stakeholders are identified."},
{id:"technical",label:"Technical architecture",weight:20,standard:"Controls address identity, application, endpoint, network, cloud and data boundaries."},
{id:"evidence",label:"Evidence & analysis",weight:20,standard:"Findings distinguish observation, inference, confidence and limitation."},
{id:"detection",label:"Detection & response",weight:15,standard:"Telemetry and response priorities are linked to realistic threat scenarios."},
{id:"risk",label:"Risk & governance",weight:15,standard:"Treatment choices reflect business impact, ownership, cost and residual risk."},
{id:"communication",label:"Executive communication",weight:10,standard:"Decision-relevant communication is concise, accurate and uncertainty-aware."},
{id:"professional",label:"Professional judgment",weight:10,standard:"Authorization, privacy, ethics and evidence handling are treated as controls."}
],
completion:"A capstone is complete only when every stage has an artifact and the learner has recorded a final defense. Completion does not imply professional certification or real-world authorization.",
safety:"All scenario data is simulated. Do not connect the exercise to real organizations, credentials, infrastructure or personal data."
};