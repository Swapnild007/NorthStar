# NorthStar 2.0 Incident Case Files

Status: initial source-grounded case-study pack; integration into the lesson renderer and learner assessment is still required.

## Teaching format

Each case distinguishes public-record facts from learner analysis. “Recovery” means documented service restoration or containment, not proof that every affected system was fully remediated. Do not infer an unreported root cause, attacker identity, or complete eradication. Learner exercises use only the sanitized facts and synthetic artifacts supplied in NorthStar.

## Case 01: WannaCry and healthcare continuity (May 2017)

### Incident snapshot
On 12 May 2017, WannaCry ransomware spread internationally. It encrypted data and disrupted NHS services in England. The National Audit Office (NAO) reported that at least 81 of 236 trusts were affected, including through direct infection or operational disruption, and that thousands of appointments and operations were cancelled. The NAO found infected organizations had unpatched or unsupported Windows systems vulnerable to the attack; it also noted that internet-facing firewall measures could have provided protection.

### Documented response and recovery
NHS England declared a major incident and focused on maintaining emergency care. Local and national communications were difficult because some email systems were unavailable or shut down as a precaution. NHS staff used contingency procedures, and by 16 May only two hospitals were still diverting patients, according to the parliamentary account. A researcher’s discovery of the malware’s kill-switch domain helped stop further encryption, but this should not be confused with a complete enterprise remediation program.

A 2023 NHS England continuity case study from County Durham and Darlington describes how unaffected partner services used alternative channels when connected services were restricted: telephone bookings, landline/radio coordination, physical transfer of imaging media, and paper/fax workflows. Those are local continuity examples, not a claim that every NHS trust used the same process.

### Analysis: confirmed facts vs. interpretation
- Confirmed in the NAO report: vulnerable unpatched/unsupported systems were involved; preparation and local rehearsal were insufficient; service disruption and cancellations occurred.
- Analysis for learners: patch governance, asset inventory, network segmentation/firewall controls, tested offline communication and clinical continuity procedures can reduce likelihood or impact.
- Do not claim that a single patching action would by itself have prevented every disruption, or that all post-incident systems were immediately secure.

### Learner assignment
Using the supplied fictional hospital asset register, patch-status table and service-dependency map:
1. Identify assets and services exposed by the missing security update.
2. Build a time-ordered response timeline, marking facts, assumptions and unknowns.
3. Propose containment and continuity actions that preserve urgent care.
4. Create a 30-day corrective-action register with owner, evidence and verification test.
5. Explain how to validate restoration without reconnecting untrusted devices prematurely.

### Evaluation criteria
Accurate use of source facts; patient-safety and continuity considerations; practical prioritization; evidence-based remediation; explicit uncertainties and verification criteria.

### Primary sources
- UK National Audit Office, *Investigation: WannaCry cyber attack and the NHS* (2017): https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/
- NHS England, *Business continuity management toolkit case study: WannaCry attack* (published 21 April 2023): https://www.england.nhs.uk/long-read/case-study-wannacry-attack/
- NHS England Digital, *WannaCry Ransomware Using SMB Vulnerability* (technical containment and recovery guidance; page last edited 17 February 2020): https://digital.nhs.uk/cyber-alerts/2017/cc-1411

## Case 02: Colonial Pipeline operational shutdown (May 2021)

### Incident snapshot
The U.S. Department of Energy reports that Colonial Pipeline proactively shut down its pipeline system on 7 May 2021 in response to a ransomware attack. The company announced a restart of the entire system on 13 May, with product delivery commencing to all markets. DOE activated its Energy Response Organization and coordinated with industry, interagency and state partners to assess impacts and support safe resumption.

### Documented response and recovery
The public DOE account documents the shutdown, coordination and restart dates. This case file does not treat the restart announcement as proof that every corporate IT system, data set or security control had been fully restored or independently validated. The learner should distinguish restoration of a critical service from eradication, rebuilding, credential hygiene and longer-term assurance.

### Analysis: confirmed facts vs. interpretation
- Confirmed in DOE’s account: shutdown on 7 May; full pipeline system restart announced on 13 May; federal coordination and supply-impact mitigation took place.
- Analysis for learners: incident response in critical infrastructure must coordinate cyber containment with operational safety, continuity, external stakeholders and public communications.
- The case facts here do not establish the precise initial access path or the full technical remediation sequence. Learners must not invent those details.

### Learner assignment
For a fictional fuel-distribution operator, use the supplied mock incident log, dependency map and executive update:
1. Separate confirmed facts from unverified reports.
2. Draft decision points for isolating affected business systems while protecting operational safety.
3. Map communications among incident command, operations, regulators, suppliers and the public.
4. Define service-restoration gates and post-restoration monitoring.
5. Produce an after-action review with corrective actions, accountable owners and evidence of closure.

### Evaluation criteria
Safety-aware decision logic; clear roles and escalation; explicit uncertainty; credible recovery gates; measurable actions and audit trail.

### Primary source
- U.S. Department of Energy, *Colonial Pipeline Cyber Incident*: https://www.energy.gov/ceser/colonial-pipeline-cyber-incident

## Case 03: SolarWinds Orion supply-chain compromise (disclosed 2020)

### Incident snapshot
This case examines a software supply-chain compromise in which malicious activity was introduced through a trusted software update channel. CISA published technical guidance and remediation material for organizations affected by the SolarWinds Orion compromise. The exact exposure and required response differed by organization; use the relevant CISA advisories and an organization’s own forensic evidence rather than assuming a universal impact.

### Response and remediation study
Learners should study the published CISA response guidance as a sequence of scoping, investigation, containment and recovery decisions. Preserve the distinction between removing a known compromised component and establishing that identities, persistence mechanisms, downstream systems and sensitive data are no longer at risk. Any organization-specific conclusion requires organization-specific evidence.

### Learner assignment
Using a synthetic software inventory, update provenance records, identity logs and endpoint timeline:
1. Trace which systems received a potentially affected update.
2. Identify evidence needed to establish exposure, execution and downstream access.
3. Propose a containment plan that includes credential and trust review.
4. Define a trusted rebuild/redeployment process and validation gates.
5. Write an executive summary separating confirmed scope, plausible risk and unresolved questions.

### Evaluation criteria
Supply-chain reasoning; provenance and scope discipline; evidence preservation; identity and persistence review; defensible recovery validation; clear communication of unknowns.

### Primary sources
- CISA, *Guidance for Responding to a Compromise of SolarWinds Orion* (official response guidance): https://www.cisa.gov/news-events/alerts/aa20-352a
- CISA, *SolarWinds and Active Directory/M365 incident response guidance* (technical guidance): https://www.cisa.gov/resources-tools/resources/solarwinds-compromise
