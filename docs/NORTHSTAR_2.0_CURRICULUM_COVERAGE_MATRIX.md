# NorthStar 2.0 — Curriculum Coverage Matrix (Baseline Draft)

**Branch:** `northstar-2.0-foundation`  
**Purpose:** Establish a traceable coverage inventory before expanding or rewriting lessons.  
**Status key:**  
- **Declared:** existing README/master standard says the area is included; lesson-level depth has not yet been verified.
- **Targeted addition:** a named completion lesson exists in the current content data; lesson quality and app integration still need QA.
- **Audit required:** coverage is a 2.0 requirement, but this initial review has not confirmed its depth or evidence.
- **Evolving:** content needs dated source review and a maintenance owner.

This matrix is a planning baseline, not a claim that every competency is already taught to mastery. The current curriculum is a large JavaScript data asset; a complete lesson-by-lesson traceability pass and execution of the repository QA script remain outstanding.

| Domain | Current evidence from project docs/data | Baseline status | 2.0 audit / authoring action |
|---|---|---|---|
| 1. Computing & digital foundations | README sequence starts with Computer & Digital Foundations; master standard lists hardware, OS, filesystems, data representation and CLI | Declared; audit required | Verify beginner explanations, practical CLI/OS exercises, prerequisites and evidence |
| 2. Networking & protocols | README lists networking; master standard enumerates TCP/IP, DNS, routing, segmentation and monitoring | Declared; audit required | Map protocol concepts to packet/flow interpretation tasks and safe simulations |
| 3. Programming & automation | Independent Coding Lab documented for HTML/CSS/JS/Python | Declared; audit required | Check progressive coding practice, debugging, secure automation and offline/runtime limitations |
| 4. Security principles & threat fundamentals | Security foundations included in master standard and course sequence | Declared; audit required | Verify CIA, threat modeling, attack surface, risk and control reasoning are taught from first principles |
| 5. Cryptography & key management | Explicitly listed as a key under-deep area in the master standard | Audit required | Confirm symmetric/asymmetric crypto, hashes, signatures, TLS concepts, key lifecycle and misuse cases |
| 6. Identity & access management | Included in core security and cloud coverage | Declared; audit required | Trace authentication, authorization, MFA, federation, lifecycle, least privilege and access reviews |
| 7. Secure software engineering | Secure SDLC, coding, dependencies and assurance are listed in the standard | Declared; audit required | Verify secure design/review/testing activities and developer-oriented practice |
| 8. Web, mobile & API security | API security and mobile security are identified as completion additions; standard includes web/API depth | Targeted addition; audit required | Validate lesson depth, safe toy-app exercises, sessions, input handling and API authorization |
| 9. Defensive operations & SOC | Defensive security and SOC/blue-team content are in the stated programme sequence | Declared; audit required | Map log sources, triage, SIEM logic, detection tuning, false positives and analyst reporting |
| 10. Incident response, forensics & recovery | Digital Forensics Foundations completion lesson exists; IR/recovery included in standard | Targeted addition; audit required | Verify preservation, chain of custody, timeline reasoning, response lifecycle and recovery validation |
| 11. Vulnerability management & authorized testing | Vulnerability management and offensive/defensive security listed in programme | Declared; audit required | Ensure scope/authorization, asset inventory, validation, prioritization and remediation evidence |
| 12. Cloud & infrastructure security | Cloud/DevSecOps included in programme sequence and master standard | Declared; audit required | Trace IAM, network/storage controls, workload hardening, monitoring and cloud incident response |
| 13. Security architecture & engineering | Explicitly required in master standard | Audit required | Verify architecture patterns, trust boundaries, threat models, control selection and design trade-offs |
| 14. Governance, risk, compliance & privacy | Cybersecurity management in sequence; privacy and legal/ethics identified as gaps/additions | Targeted addition; audit required; evolving | Validate risk treatment, control assurance, privacy engineering, India-specific law/regulatory content and review dates |
| 15. Threat intelligence & malware analysis | Malware Concepts & Analysis Foundations completion lesson exists; threat intel in standard | Targeted addition; audit required | Check safe static triage, IOC limitations, intelligence lifecycle and defensive use; no uncontrolled execution |
| 16. Digital forensics & cybercrime investigation | Digital Forensics Foundations exists; cyber law/ethics also targeted | Targeted addition; audit required | Add evidence handling, investigation scope, reporting, limitations and jurisdiction-aware professional practice |
| 17. Wireless, IoT & OT security | Mobile security addition documented; IoT/OT are listed as advanced environments | Audit required | Determine present coverage; build isolated, non-production scenarios and safety constraints where needed |
| 18. Data science, AI & AI security | Data science and machine learning included in programme title/standard; AI/ML security listed as a gap | Declared for DS/ML; AI security audit required; evolving | Verify statistics/SQL/model evaluation and add ML/LLM threat models, governance and defensive controls |
| 19. Security testing, assurance & resilience | Testing, control effectiveness, continuity and resilience appear in master standard | Audit required | Map test planning, assurance evidence, resilience exercises, recovery objectives and lessons learned |
| 20. Professional practice, research & communication | Security research/technical communication is a named completion addition | Targeted addition; audit required | Check documentation, evidence-based writing, uncertainty, ethics, collaboration and portfolio outputs |

## Existing content areas explicitly named as targeted completion lessons

The master standard describes targeted additions for digital forensics, malware analysis foundations, database security, API security, cyber law/ethics, mobile security, and security research/technical communication. This confirms named topic coverage in project documentation/data, not that the topics meet the 2.0 quality bar.

## Required next pass: lesson-level traceability

For every current lesson and lab, record:
- Stable lesson/lab ID and title
- Primary domain and specific competency
- Level and prerequisites
- Learning objectives mapped to measurable verbs
- Teaching-contract elements present/missing
- Practice type (simulation, local toy environment, isolated range, evidence exercise)
- Observable learner evidence
- Assessment type and remediation path
- Source URLs, source version/date, last reviewed date
- Review outcome: **Pass / Enrich / Rewrite / Split / Retire / Verify**

Do not treat a topic as “covered” solely because its name appears in a title or overview. A competency counts as covered only when the lesson teaches it, gives the learner an appropriate opportunity to apply it, and checks the resulting understanding or evidence.

## Verification queue

1. Run the existing Node 22 syntax and structural QA workflow on the working branch.
2. Parse the current pathway and lesson objects using a safe, non-executing inspection approach where possible; avoid evaluating untrusted source with `new Function`.
3. Sample lessons from each pathway and inspect full fields, not only titles/objectives.
4. Generate the lesson-to-competency matrix from actual IDs and objectives, then manually review ambiguous mappings.
5. Review the seven targeted additions and lab catalog against the same quality/safety rubric.
6. Update this matrix with evidence-backed status, gaps, and prioritized authoring tasks.
