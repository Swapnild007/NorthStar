# NorthStar 2.0 — Cybersecurity Academy Blueprint

**Owner:** Swapnil Dalvi  
**Status:** Product and curriculum blueprint  
**Branch:** `northstar-2.0-foundation`  
**Purpose:** Establish the scope, curriculum architecture, quality bar, and staged delivery plan for NorthStar 2.0 before changing the existing learner experience.

## Product promise

NorthStar 2.0 is a comprehensive, continuously maintained cybersecurity learning and practice platform. It should help a learner progress from computing fundamentals to role-focused competence through connected explanations, guided practice, safe labs, assessments, projects, and a searchable reference library.

“Comprehensive” means broad coverage with explicit depth and learning outcomes, not a claim that one static course can contain every detail of a fast-changing field. Each topic must identify its prerequisites, level, practical relevance, sources, last-reviewed date, and safety boundaries.

## Non-negotiable principles

1. **Preserve the existing application.** Audit first; implement on a separate branch; do not replace working screens, content, storage, or APK behavior without a reviewed migration plan.
2. **Teach from first principles.** Define terms, explain mechanisms and trade-offs, show worked examples, then require independent practice.
3. **Separate exposure from mastery.** Opening a lesson is not proof of understanding. Track practice evidence and assessment results separately.
4. **Practice safely and legally.** Offensive techniques are taught only in owned, explicitly authorized, purpose-built environments. Provide defensive context, scope, containment, and cleanup instructions.
5. **Ground claims in maintained references.** Prefer primary standards, vendor documentation, reputable research, and dated advisories. Mark version-sensitive material and review it periodically.
6. **Be transparent about limits.** No false promises of job readiness, complete protection, or exhaustive coverage. Show what a learner has and has not demonstrated.
7. **Accessible and offline-conscious.** Design for mobile, keyboard use, readable contrast, low bandwidth, and durable local progress where feasible.

## Curriculum architecture

Use a layered curriculum rather than one enormous linear course:

- **Core foundations:** concepts every learner needs.
- **Domain pathways:** comprehensive subject-area study.
- **Role pathways:** map knowledge and skills to cybersecurity work.
- **Labs and projects:** evidence of applied ability.
- **Reference library:** glossary, standards, protocols, tools, commands, and cross-links.
- **Current practice updates:** versioned content for evolving threats, tools, and regulations.

Each learning unit should include: title and level; prerequisites; measurable outcomes; terminology; conceptual explanation; how it works; diagrams or sequence flows where useful; examples; defensive and operational context; common mistakes; safe exercise; knowledge check; recap; references and review date.

## Domain map: intended coverage

### 1. Computing, hardware, and operating-system foundations
Binary and hexadecimal; data representation; CPU, memory, storage, firmware, boot process; processes and threads; filesystems; users and permissions; Windows, Linux, macOS concepts; shells and command lines; virtualization; containers; patching; configuration and system hardening.

### 2. Networking and Internet protocols
OSI and TCP/IP models; Ethernet, switching, VLANs; IPv4/IPv6 and subnetting; ARP, ICMP, DNS, DHCP, NAT; routing; TCP, UDP, QUIC; HTTP(S), TLS; SSH, email protocols; VPNs; wireless and cellular basics; packet capture and analysis; network architecture, segmentation, monitoring, troubleshooting, and secure configuration.

### 3. Programming and automation for security
Programming fundamentals; Python for automation and data handling; shell scripting; JavaScript and web runtime basics; SQL; APIs and JSON; Git; debugging and testing; regular expressions; secure coding; dependency management; automation design; code review. Language-specific tracks should be maintained as separate curricula and not treated as prerequisites for every learner.

### 4. Security principles and threat fundamentals
Confidentiality, integrity, availability; authenticity and accountability; identity, authentication, authorization, and accounting; least privilege; defense in depth; trust boundaries; attack surface; threat actors and motivations (with attribution and uncertainty); threat modeling; vulnerability, exploit, risk, impact, likelihood; security controls and assurance.

### 5. Cryptography and applied key management
Encoding versus encryption versus hashing; randomness; symmetric and asymmetric cryptography; key exchange; digital signatures; certificates and PKI; TLS at a conceptual and operational level; password hashing and salts; key lifecycle, rotation, storage, recovery; cryptographic agility; common misuse and failure modes. Explain algorithms responsibly without encouraging custom cryptography.

### 6. Identity and access management
Identity lifecycle; MFA and phishing-resistant authentication; passwords and passkeys; SSO; federation; OAuth 2.0, OpenID Connect, and SAML concepts; RBAC, ABAC, PAM; service accounts and workload identity; secrets management; access reviews; zero-trust principles; account recovery and session security.

### 7. Secure software and application security
Secure SDLC; requirements and abuse cases; architecture and threat modeling; input handling; output encoding; authentication and session management; access-control flaws; injection classes; cryptographic failures; SSRF; file upload and deserialization risks; API security; browser security; secure headers; dependency and supply-chain security; code review; SAST, DAST, SCA; remediation and verification. Use OWASP materials as references, noting edition/version.

### 8. Web, mobile, and API security
Browser and same-origin model; cookies and sessions; CORS and CSP; modern web application architecture; REST and GraphQL security; Android and iOS security models; permissions and app signing; secure local storage; mobile API testing in controlled environments; privacy, telemetry, and secure release practices.

### 9. Defensive operations and security monitoring
Security operations center workflows; log sources and normalization; endpoint, network, identity, cloud telemetry; SIEM concepts and detection engineering; alert triage; false positives; incident severity; threat intelligence; indicators versus behaviors; MITRE ATT&CK as a knowledge base; playbooks; tuning; metrics and reporting.

### 10. Incident response, forensics, and recovery
Preparation; detection and analysis; containment; eradication; recovery; lessons learned; evidence handling and chain of custody; disk, memory, network, and cloud evidence concepts; timelines; forensic integrity; incident communications; backups; business continuity; disaster recovery; tabletop exercises.

### 11. Vulnerability management and authorized security testing
Asset discovery; scope and rules of engagement; vulnerability lifecycle; scanning concepts and limitations; validation and prioritization; remediation SLAs; configuration review; controlled penetration-testing methodology; reporting; retesting; responsible disclosure; bug bounty ethics; lab-only exploitation demonstrations. Never provide instructions to target third-party systems without authorization.

### 12. Cloud, infrastructure, and platform security
Shared responsibility; cloud identity and access; network controls; storage and encryption; workload/container security; Kubernetes concepts; infrastructure as code; CI/CD security; secrets and artifact integrity; cloud logging and posture management; serverless risks; backup and recovery; multi-cloud considerations.

### 13. Enterprise security architecture and engineering
Security architecture patterns; secure design principles; segmentation; endpoint protection; firewalls, proxies, WAF, IDS/IPS; secure remote access; resilience; system lifecycle; configuration baselines; control selection; security testing; architecture reviews; technical debt and risk acceptance.

### 14. Governance, risk, compliance, privacy, and audit
Risk assessment and treatment; policies and standards; control design and evidence; security awareness; third-party and supply-chain risk; privacy principles and data lifecycle; data classification; audit readiness; business impact analysis; security metrics; governance and accountability. Cover applicable India context (including relevant laws and CERT-In directions) as dated, carefully sourced learning material, alongside international frameworks. Legal content must be labeled educational, jurisdiction-specific, and subject to change.

### 15. Threat intelligence, malware analysis, and reverse engineering
Intelligence lifecycle; collection and confidence; malware behavior and safe handling; static and dynamic analysis concepts; file formats; sandboxing; memory artifacts; basic assembly and debugging foundations; YARA and Sigma concepts; detection opportunities; reporting and attribution limits. Samples and exercises must remain safely contained and non-deployable.

### 16. Digital forensics and cybercrime investigation
Evidence sources; acquisition and preservation; forensic workflow; file systems and metadata; mobile and cloud evidence; event correlation; investigative notes; legal process and jurisdiction; privacy and minimization; expert reporting; limitations and uncertainty.

### 17. Wireless, IoT, OT, and embedded security
Wireless security fundamentals; Bluetooth and Wi-Fi; IoT architecture and lifecycle; firmware update security; device identity; embedded constraints; industrial control systems; safety and availability; OT segmentation; passive monitoring; incident response coordination. Labs must use simulations or owned hardware and never disrupt real-world operations.

### 18. Data security, AI security, and emerging technology
Data classification and protection; DLP; privacy-enhancing concepts; secure ML lifecycle; model and data supply chain; prompt injection and unsafe tool use; retrieval and agent security; AI system evaluation; adversarial ML overview; post-quantum cryptography concepts; emerging standards and threat developments. Distinguish established practice from research and speculation.

### 19. Security testing, assurance, and resilience
Security test planning; test environments; control validation; tabletop and purple-team exercises; secure configuration assessment; resilience engineering; recovery testing; metrics, evidence, and continuous improvement.

### 20. Professional practice and career pathways
Technical writing; incident and assessment reports; stakeholder communication; ethics; teamwork; interview and portfolio preparation; role maps for security analyst, SOC analyst, incident responder, security engineer, application security engineer, cloud security engineer, penetration tester, forensic analyst, auditor, architect, and GRC specialist. Roles are pathways, not guarantees of employment.

## Role-based learning routes

Map every route to explicit outcomes and practical evidence. Suggested routes:
- Cybersecurity foundations learner
- SOC / blue-team analyst
- Incident response and digital forensics
- Vulnerability management and authorized penetration testing
- Application security and secure software
- Cloud and infrastructure security
- Security engineering and architecture
- Governance, risk, compliance, and privacy
- Threat intelligence and malware analysis
- IoT / OT security

Use the current NIST NICE Framework components and task/knowledge/skill statements as a mapping reference, not as a rigid substitute for local context. Use NIST CSF 2.0 to organize organizational risk outcomes. Record framework versions and mapping dates.

## Learning and assessment model

Progress through **Understand → Explain → Apply → Analyze → Design → Evaluate**. For each objective, define observable evidence. Mix:
- Retrieval practice and spaced review
- Concept checks and scenario questions
- Worked examples followed by independent tasks
- Safe guided labs with hints and reset
- Practical rubrics and project reviews
- Cumulative assessments and remediation paths

Assessments should test reasoning and transfer, not only recall. Include answer explanations, misconception notes, and accessible alternatives. Do not award mastery solely for clicking through content.

## Safe lab model

Lab tiers:
1. **Concept simulations:** deterministic, no network access.
2. **Local exercises:** preloaded sample data, toy applications, and constrained code runners.
3. **Isolated range:** disposable, network-restricted virtual machines or containers with explicit scope and reset.
4. **Capstone scenarios:** simulated organization, logs, alerts, policies, and incident artifacts.

Every lab must specify authorization, scope, permitted actions, prohibited actions, data handling, resource limits, reset/cleanup, expected outputs, and defensive learning objectives. Do not connect learner labs to public targets by default. Any execution service must be isolated server-side with strict resource and network controls; a browser-only UI is not a security boundary.

## Product and technical workstreams

1. **Baseline and compatibility:** inventory current screens, content schema, storage, routing, service worker, Cloudflare functions, Capacitor configuration, and existing CI. Record baseline tests and known issues.
2. **Curriculum content system:** define a versioned schema, metadata, prerequisites, references, content review dates, and migration strategy. Preserve current course IDs and progress where possible.
3. **Learning experience:** searchable curriculum map, topic pages, glossary, progress and mastery views, bookmarks, notes, and accessible mobile navigation.
4. **Assessment engine:** question types, scoring rules, feedback, attempts, mastery thresholds, and exportable learner evidence.
5. **Lab platform:** start with static/simulated and locally constrained activities; threat-model any remote execution before implementation.
6. **AI mentor:** retrieval over approved curriculum content, source-grounded answers, uncertainty handling, privacy controls, optional model configuration, and evaluation tests. AI must not invent lesson coverage or mark skills mastered without evidence.
7. **Offline and Android:** explicit offline-content policy, cache/version behavior, storage migration, network failure states, and regression tests for web and APK.
8. **Quality and maintenance:** automated schema validation, broken-link checks, content linting, accessibility checks, smoke/regression tests, security review, and scheduled content review.

## Delivery stages and exit criteria

### Stage 0 — Audit and design
- Inspect repository, existing content, application architecture, workflows, and APK path.
- Produce a compatibility map and baseline test report.
- Approve the curriculum taxonomy and content schema.
- No production behavior changes.

**Exit:** documented current state, prioritized gaps, safe migration plan, and acceptance criteria.

### Stage 1 — Curriculum foundation
- Add the domain map, prerequisites, learning outcomes, references, and versioning.
- Audit existing lessons against the unit template.
- Establish content QA and source review.

**Exit:** every published unit has outcomes, prerequisites, meaningful instruction, practice, assessment, and dated references.

### Stage 2 — Learning and mastery
- Implement the curriculum browser and transparent progress model.
- Add assessments, feedback, remediation, and learner data migration.

**Exit:** progress survives upgrades; completion and mastery are distinct; core flows pass regression and accessibility checks.

### Stage 3 — Practical labs and projects
- Deliver safe simulations and isolated exercises, then role-based capstones.
- Threat-model and test lab containment.

**Exit:** every lab has scope, safety controls, reset, validation, and documented learning evidence.

### Stage 4 — AI mentor and personalization
- Ground tutor responses in approved curriculum and references.
- Evaluate accuracy, refusal/redirect behavior for unsafe requests, privacy, and usefulness.

**Exit:** evaluation suite meets defined accuracy and safety thresholds; fallback behavior is clear when sources are unavailable.

### Stage 5 — Release readiness
- Verify desktop/mobile, offline behavior, Android packaging, accessibility, performance, data migration, and security.
- Publish release notes, known limitations, and content update policy.

**Exit:** all critical acceptance tests pass; no unresolved critical/high-severity release blockers; rollback path documented.

## Definition of done for a learning unit

A unit is not complete until:
- It has a clear audience, level, estimated effort, and prerequisites.
- Outcomes are measurable and align to one or more domain competencies.
- Terms are defined and the underlying mechanism is explained.
- Examples are correct, runnable where applicable, and reviewed.
- Practical work is safe, scoped, and has a verifiable expected result.
- Assessment includes feedback and misconception correction.
- References are authoritative, linked, dated, and version-aware.
- It passes content, link, accessibility, and technical validation.
- A reviewer can distinguish stable fundamentals from version-sensitive guidance.

## Initial audit checklist

- [ ] Confirm default branch and release/deployment workflow.
- [ ] Inventory all current curriculum files and lesson counts; do not rely on stale counts.
- [ ] Identify app entry points, routing, storage keys, and migration constraints.
- [ ] Inspect Cloudflare/serverless endpoints and secrets handling without exposing secrets.
- [ ] Inspect Capacitor and Android build workflow.
- [ ] Run existing QA and capture baseline results.
- [ ] Map current content to the domain map and identify missing or shallow areas.
- [ ] Create a compatibility and risk register before implementation.

## Reference framework starting points

- NIST NICE Framework current versions: https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/nice-framework-current-versions
- NIST NICE Framework overview and work-role model: https://niccs.cisa.gov/workforce-development/nice-framework
- NIST Cybersecurity Framework 2.0: https://www.nist.gov/cyberframework
- NIST CSF 2.0 publication: https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- OWASP Application Security Verification Standard: https://owasp.org/www-project-application-security-verification-standard/
- MITRE ATT&CK: https://attack.mitre.org/
- CIS Critical Security Controls: https://www.cisecurity.org/controls
- India CERT-In: https://www.cert-in.org.in/

Frameworks are reference maps, not a substitute for complete instructional content. Re-check official sources before publishing updates and preserve the exact version used for each mapping.
