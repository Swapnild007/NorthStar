# NorthStar 2.0 — Syllabus-to-Platform Coverage Crosswalk

Audit date: 2026-09-27  
Basis: the uploaded *Applied Cybersecurity Mastery Program — Deep Edition* syllabus and the NorthStar 2.0 information architecture. This is a planning crosswalk, not proof that repository lessons already satisfy the topics.

## Executive result

The syllabus provides a broad progression from beginner foundations through core security, authorized offensive practice, defensive operations, cloud/DevSecOps, specialization and frontier research. The platform architecture should expose the same material through multiple user journeys: Explore, Learn, Reference, Practice and Investigate, rather than presenting it as a single linear course.

**Important distinction:** the syllabus is a module-level outline, while the 171-chapter repository inventory has not yet been inspected row by row. Therefore this crosswalk identifies intended coverage and validation work; it does not certify the existing chapters as complete or missing.

## Crosswalk

| Syllabus phase/module | Primary NorthStar domain(s) | Required content treatment | Audit / acceptance evidence |
|---|---|---|---|
| Phase 0: beginner bridge, computing/OS, networking, security mindset | Foundations; OS/platform security; networking | Define prerequisites and vocabulary; teach OS/network concepts from first principles; include safe setup and baseline exercises | Map every related lesson ID; check clear beginner progression, worked examples, safe lab instructions and checkpoint |
| 1.1 Cryptography | Cryptography; tools/reference | Explain symmetric/asymmetric cryptography, hashes, HMAC, signatures, PKI, X.509, TLS and common failure modes | Versioned primary references; exercises distinguish encryption, hashing and signing; rationale-backed assessment |
| 1.2 IAM | Identity; OS/platform security | MFA/passwordless, RBAC/ABAC/PAM, SSO protocols, directory services and authentication risks | Protocol-flow diagrams, identity lifecycle scenario, least-privilege practice and assessment |
| 1.3 Network security | Networking; SOC/detection; architecture | Firewalls, IDS/IPS, SIEM foundations, ZTNA, NAC, DDoS and wireless security | Network diagrams, log/traffic lab, configuration safety and remediation evidence |
| 1.4 Endpoint/app basics | OS/platform security; application security; GRC | Malware/EDR/XDR concepts, hardening baselines, secure SDLC and web risk orientation | Host hardening before/after exercise, sourced controls and relevant checks |
| 1.5 GRC and cyber law | GRC/privacy; foundations | Risk methods, management systems, privacy/compliance examples, jurisdictional legal awareness, authorization and rules of engagement | Clearly scoped jurisdiction/date, primary legal/regulatory references, risk register and authorization gate |
| 1.6 Security operations | SOC/detection; vulnerability management; tools | SOC workflows, log management, vulnerability lifecycle and scoring concepts | Ingest and interpret logs, triage scenario, operational rubric and source/version notes |
| 2.0 Methodology frameworks | Authorized testing; architecture; case studies | Engagement lifecycle, threat modeling, scoped testing, ATT&CK-based emulation and distinct deliverables | Written scope/RoE gate, test plan and reporting rubric |
| 2.1 Reconnaissance/OSINT | Authorized testing; threat intelligence | Passive vs active collection, asset discovery and evidence handling | Only owned/authorized targets; scope checklist, reproducible notes and reporting |
| 2.2 Vulnerability analysis/exploitation | Vulnerability management; authorized testing; malware/reverse engineering | Scanning vs verification, vulnerability mechanics, privilege boundaries and controlled demonstrations | Isolated lab, safe proof-of-concept constraints, fix validation and cleanup |
| 2.3 Web application testing | Application security; web/API/cloud-native | OWASP risks, ASVS, API/authentication and business-logic testing | Vulnerable training app only, request/response walkthrough, remediation and retest |
| 2.4 Active Directory/internal testing | Identity; OS/platform security; authorized testing | Directory architecture, authentication, delegation, attack-path concepts and defensive telemetry | Lab-only exercise, corresponding detections and remediation, no live unauthorized targets |
| 2.5 C2/evasion/post-exploitation | Authorized testing; SOC/detection; case studies | Teach threat behavior and detection/validation in bounded emulation, with defensive framing | Explicit authorization, constrained simulation, no operational guidance for real-world intrusion; telemetry and detection deliverables |
| 2.6 Wireless/Bluetooth/RF/physical | Mobile/IoT/OT; networking; authorized testing | Explain protocols and threat models; use permitted lab hardware and lawful RF practices | Written authorization, jurisdictional review, isolated equipment, data minimization and safety checks |
| 2.7 Mobile/IoT testing | Mobile/IoT/embedded; OS/platform security | App analysis, device controls, firmware concepts, debug interfaces and secure updates | Test-owned devices/firmware, documented consent, lab safety and defensive fixes |
| 2.8 Reporting/bug bounty | GRC; authorized testing; tools/reference | Executive summary, evidence, impact, remediation, disclosure and scope discipline | Report template, evidence quality rubric, in-scope-only rules and retest |
| 3.1 Detection/SIEM | SOC/detection; networking; OS/platform security | Detection-as-code, telemetry, alert tuning and coverage | Reproducible detection rule, test event, false-positive discussion and evaluation |
| 3.2 Hunting/intelligence | SOC/detection; threat intelligence; case studies | Hypothesis-led hunting, IOC vs TTP reasoning, intelligence lifecycle | Cited intelligence sources, hunt notebook, confidence/limitations and findings |
| 3.3 Incident response/forensics | Forensics/IR; case studies; SOC | Response lifecycle, evidence acquisition, chain of custody, memory/disk/network analysis | Evidence-handling checklist, tabletop, timeline and incident report |
| 3.4 Malware analysis | Malware/reverse engineering; forensics/IR | Static/dynamic analysis, sandboxing, YARA and basic reverse engineering | Isolated analysis VM, benign training samples, safety/cleanup, sourced analysis notes |
| 3.5 Purple teaming | SOC/detection; authorized testing | Collaborative validation of controls and detections; measure gaps and response | Approved test plan, detection evidence, remediation owner and re-test |
| 4.1 Cloud security | Cloud/infrastructure/virtualization; identity | Shared responsibility, cloud IAM, network design, posture management, container/Kubernetes controls | Cloud-specific source links, least-privilege configuration lab and teardown |
| 4.2 DevSecOps/secure SDLC | Application security; cloud-native; architecture | Threat modeling, SAST/DAST/SCA, CI/CD, IaC and supply-chain controls | Pipeline exercise with findings, fixes and reproducible test evidence |
| 4.3 Architecture/Zero Trust | Architecture/resilience; identity; GRC | Security views, trust boundaries, segmentation, data protection and Zero Trust | Architecture diagram, explicit assumptions, trade-offs and risk treatment |
| 4.4 Applied AI/emerging threats | AI/agent security; cryptography; GRC | AI/LLM security risks, prompt injection, data/model risks, deepfakes and post-quantum overview | Threat model, bounded demonstrations, mitigations and current-source review |
| 4.5 Specialization | Red team; blue team; cloud; GRC | Separate optional pathways with clear entry criteria and shared foundational references | Track-specific capstone rubric and transparent prerequisites |
| Phase 5: frontier research/tooling/emulation/publication | Vulnerability research; tools/reference; authorized testing | Responsible research, fuzzing/crash analysis, disclosure, open-source work and communication | Ethics and disclosure gate, reproducible artifact, peer review and documented limitations |
| Cross-cutting threads, certifications, software/hardware appendices, timeline | Career/curriculum navigation; tools/reference; GRC | Keep career guidance and tool lists distinct from core conceptual instruction; label versions, licensing, jurisdiction and alternatives | Periodic tool/link review; no tool list substitutes for concept teaching; regional caveats |

## Platform-wide completion checklist

- [ ] Each syllabus module maps to one or more stable repository lesson IDs.
- [ ] Every lesson is assigned a canonical domain and relevant user journeys.
- [ ] No duplicate lessons are created where a canonical lesson plus linked reference/lab is sufficient.
- [ ] Chapter-specific learning outcomes, instruction, worked example, assessment rationales and applied deliverable are reviewed.
- [ ] Labs have explicit authorization, environment, reset/cleanup and privacy requirements.
- [ ] Visuals are included when they clarify architecture, sequence, trust boundaries, evidence flow or comparisons; otherwise the reviewer records why a visual is unnecessary.
- [ ] References are authoritative, link-checked and version/date-aware.
- [ ] Content is reviewed for technical accuracy and rendered on mobile and desktop.
- [ ] Navigation, search, lesson IDs, progress state and assessment tracking pass regression checks.
- [ ] Every chapter has reviewer, review date, disposition and remediation record.

## Standards and source maintenance

The supplied syllabus names NIST NICE, NIST CSF 2.0, ISO/IEC 27001, MITRE ATT&CK, PTES, OSSTMM, OWASP Top 10 and ASVS as alignment references. Treat these as alignment targets, not blanket endorsements or proof of conformance. Record the exact edition/version and the specific learning outcomes mapped to each framework.

For workforce alignment, use the current NICE Framework Components version rather than relying only on the older SP 800-181 Rev. 1 publication: NIST's current-versions page lists Components v2.2.0 (April 28, 2026). The NIST CSF 2.0 resource center is the authoritative starting point for framework resources. Re-check version status during release review.

## Completion decision

**Syllabus-to-architecture crosswalk: documented.**  
**Actual 171-entry mapping and chapter quality audit: still open.**  
**OS platform-by-platform audit: still unverified pending lesson-ID/content inspection.**  
**Freeze: not approved.**

The remaining blocker is not the absence of a planning standard. It is access to a complete machine-readable export of the live curriculum entries (stable ID, title, category/module, body, references, assessments and visual metadata) and then a chapter-by-chapter inspection plus build/render validation. Do not replace this evidence with an assumed mapping based on syllabus headings.
