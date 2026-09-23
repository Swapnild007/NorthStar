window.NORTHSTAR_ADVANCED_LABS=[
{id:"malware-triage-foundations",title:"Malware Triage Room",subtitle:"Characterize a simulated sample without uncontrolled execution",level:"Advanced",track:"Malware & Forensics",duration:"45 min",objective:"Preserve provenance, inspect simulated malware evidence and produce a behavior-focused triage note.",skills:["Malware","Static analysis","Behavior","IOCs","Evidence"]},
{id:"database-security-review",title:"Database Security Review",subtitle:"Assess a multi-tenant data boundary",level:"Advanced",track:"Application Security",duration:"45 min",objective:"Review database privileges, authorization boundaries, data protection and audit evidence.",skills:["Database","Least privilege","Authorization","Audit"]},
{id:"api-security-review",title:"API Security Review",subtitle:"Evaluate a service contract and trust boundaries",level:"Advanced",track:"Application Security",duration:"45 min",objective:"Identify authentication, object authorization, validation, rate-limit and error-handling requirements.",skills:["API","OAuth concepts","Authorization","Validation","Telemetry"]},
{id:"mobile-security-review",title:"Mobile Security Review",subtitle:"Threat-model a managed mobile application",level:"Advanced",track:"Mobile & IoT",duration:"45 min",objective:"Map mobile permissions, secure storage, device-management and privacy boundaries.",skills:["Mobile","Permissions","Secure storage","MDM","Privacy"]},
{id:"security-decision-room",title:"Security Decision Room",subtitle:"Turn evidence into a governance decision",level:"Advanced",track:"Governance & Risk",duration:"50 min",objective:"Choose a defensible risk treatment while balancing evidence, business impact, uncertainty and authorization.",skills:["Risk","Governance","Evidence","Trade-offs","Communication"]}
];
window.NORTHSTAR_ADVANCED_LAB_TRACKS=[
{id:"Malware & Forensics",label:"Malware & Forensics",desc:"Controlled evidence exercises for malware behavior and forensic reasoning."},
{id:"Mobile & IoT",label:"Mobile & IoT",desc:"Device, application and privacy boundary analysis."}
];
window.NORTHSTAR_ADVANCED_LAB_DETAILS={
"malware-triage-foundations":{
scenario:"A training sandbox produced a controlled malware-analysis record. No real executable is provided and no external system is contacted.",
evidence:["Sample ID: NS-TRAIN-041","SHA-256: training-hash-redacted","Static type: PE executable","Strings: update, config, api/v1","Behavior: creates child process in sandbox","Behavior: writes file to simulated user-writable path","Behavior: contacts test endpoint 10.50.0.20:443","EDR: sample execution contained"],
checkpoints:["What provenance and integrity facts are established?","Which observations describe behavior rather than intent?","Which indicators are useful but potentially brittle?","What evidence would increase confidence in the behavior assessment?"],
hints:["Start with sample identity and provenance.","A process tree is an observation; intent is an inference.","Hashes are precise but can change when a file changes.","Correlate file, process and network evidence."],
deliverable:"Produce a malware triage note with provenance, observed behaviors, indicators, confidence and limitations.",
success:"Demonstrate controlled, evidence-first malware reasoning without claiming real-world execution."
},
"database-security-review":{
scenario:"A simulated SaaS application serves three tenants from a shared database. Review the access design without connecting to a real database.",
evidence:["App identity: svc-orders","Database role: orders_rw","Granted: SELECT, INSERT, UPDATE on tenant_orders","Granted: CREATE TABLE","API: GET /orders/{id}","Authorization: user token validated","Object owner check: not recorded","Audit: SELECT/UPDATE events enabled","Backup: encrypted","Replica: read-only"],
checkpoints:["Which privilege is broader than the application need?","Where is object-level tenant authorization missing from the evidence?","Which controls protect backups and replicas?","What audit evidence would prove cross-tenant access was prevented?"],
hints:["Least privilege applies to database roles.","Authentication does not prove tenant authorization.","Consider data lifecycle, not only primary storage.","Look for both successful and denied access events."],
deliverable:"Write a database security review with privilege findings, authorization gap, data-protection controls and evidence requests.",
success:"Separate query safety, authorization, privilege and lifecycle controls."
},
"api-security-review":{
scenario:"A training API exposes profile, invoice and administrative resources. Evaluate its security contract.",
evidence:["POST /login → 200 token issued","GET /profile → 200 for token subject","GET /invoice/842 → 200","GET /invoice/843 → 200 with same token","GET /admin/users → 403","POST /search → 200","Rate-limit header: absent","Error response: stack trace omitted","Audit event: request ID recorded"],
checkpoints:["Which observation suggests an object-authorization review is needed?","What control is missing from the evidence for abuse resistance?","Which response indicates authorization is enforced for admin resources?","What additional test evidence would distinguish intended invoice access from an authorization flaw?"],
hints:["A token does not automatically authorize every object.","Look for request frequency controls.","403 is an access-control observation, not proof of perfect authorization.","You need controlled ownership and expected-access evidence."],
deliverable:"Produce an API review covering authentication, object authorization, validation, abuse controls, error handling and telemetry.",
success:"Identify control gaps without claiming a vulnerability until evidence supports it."
},
"mobile-security-review":{
scenario:"A managed mobile application handles customer records and uses camera and notification features. Review its trust boundaries.",
evidence:["App sandbox enabled","Permissions: camera, notifications, location-always","Credential storage: platform secure store","Customer cache: encrypted","MDM: device encryption required","MDM: screen-lock required","Lost device: remote revoke supported","Telemetry: device ID, login time, approximate location","Third-party SDK: analytics"],
checkpoints:["Which permission deserves a purpose review?","Which controls protect credentials and cached data?","What privacy question should be asked about telemetry?","What should happen when a device is lost?"],
hints:["Least privilege applies to permissions.","Secure storage and encrypted cache address different assets.","Telemetry should have a defined purpose and retention.","Remote revoke limits account exposure after loss."],
deliverable:"Write a mobile threat model with assets, permissions, privacy concerns and controls.",
success:"Apply least privilege and privacy-by-design to mobile architecture."
},
"security-decision-room":{
scenario:"A simulated business unit has a high-impact security finding but incomplete evidence. The task is to recommend a treatment while preserving uncertainty.",
evidence:["Asset: customer identity service","Business impact: high","Observed control gap: privileged access review overdue","Evidence confidence: medium","Compensating control: MFA enforced","Exposure: internal administrative network","Remediation estimate: 3 weeks","Temporary control: weekly manual review","Owner: Identity team"],
checkpoints:["What is known versus uncertain?","Which treatment reduces risk while evidence is incomplete?","What compensating control should be monitored?","What decision and rationale should an executive receive?"],
hints:["Separate risk from certainty.","A temporary control can reduce exposure while remediation is underway.","State owner, deadline and residual uncertainty.","Executives need impact, decision, cost and residual risk."],
deliverable:"Produce a risk-treatment decision note with evidence, options, chosen treatment, owner, deadline and residual uncertainty.",
success:"Translate technical evidence into a defensible governance decision."
}
};