# NorthStar 2.0: Curriculum Content Standard

## Purpose

NorthStar is a structured cybersecurity and computing learning platform. It is a course and reference guide first, not a game, cyber-range simulator, or collection of generic prompts. The existing 171 chapter entries are the curriculum inventory; each chapter must be independently useful as instructional material.

## Non-negotiable chapter contract

Every chapter must include the following, in this order where the existing renderer permits:

1. **Learning outcomes** — 3–6 observable outcomes using action verbs (explain, distinguish, configure, analyze, document, recommend). Avoid vague outcomes such as “understand security.”
2. **Prerequisites** — explicit prior concepts, or “None.” Link to prerequisite chapter IDs when supported.
3. **Core instruction** — accurate, chapter-specific explanations with definitions, mechanism, context, and limitations. Define acronyms on first use. Do not pad with repeated generic prose.
4. **Worked example** — a realistic, bounded example with assumptions, steps, interpretation, and expected result. Use safe synthetic data and clearly mark platform-specific commands.
5. **Professional application** — how the concept appears in operational work, including roles, decisions, evidence, documentation, and common failure modes.
6. **Knowledge check** — 4–8 chapter-specific questions. Include answer rationale, not just a score.
7. **Applied assignment** — a concrete deliverable (e.g. annotated diagram, risk note, configuration review, log analysis, incident timeline, short script, or control mapping) with a rubric and model answer or evaluation criteria.
8. **References** — primary and authoritative references, with title, publisher, version/date, and stable URL. Note when material is vendor-specific or changes frequently.

A chapter may add a glossary, diagram, comparison table, checklist, or further reading where these materially aid learning. Do not force a simulator, timer, points, or tool interaction into every chapter.

## Instructional quality

- Teach the underlying model before asking learners to apply it.
- Use examples that actually match the chapter topic. Avoid unrelated scenarios and generic “trace the mechanism” filler.
- Distinguish facts, recommended practices, trade-offs, and local policy choices.
- Explain why an answer is correct and why plausible alternatives are incomplete or unsafe.
- Include failure modes, edge cases, uncertainty, and what evidence would resolve ambiguity.
- Use accessible language without diluting technical accuracy. Give precise definitions and expand into practitioner terminology progressively.
- Keep lessons self-contained enough to serve as a dependable study guide, while linking to prerequisite chapters and authoritative sources for deeper study.
- Do not claim “complete,” “certified,” “industry approved,” or “job-ready” without a defined, reviewed evidence basis.

## Framework and reference alignment

Use frameworks as traceable mapping references, not as decorative badges. Map relevant outcomes to exact identifiers and versions where feasible:

- **NIST NICE Framework Components** — current component release is v2.2.0 (released April 28, 2026). Map to applicable Task, Knowledge, and Skill statements only after checking the official current source.
- **NIST Cybersecurity Framework (CSF) 2.0** — use for organizational cybersecurity risk outcomes and functions/categories where relevant.
- **NIST SP 800-series** — cite the specific publication and revision relevant to the topic; avoid implying all controls are universally mandatory.
- **MITRE ATT&CK** — use technique identifiers and version-aware references for adversary behavior analysis; do not present ATT&CK as a complete risk or control framework.
- **OWASP** — use the applicable project and release (for example, Top 10 or ASVS) and identify the edition. Avoid mixing editions without saying so.
- **CIS Critical Security Controls/Benchmarks** — name the exact version and distinguish consensus guidance from a binding requirement.
- **Vendor documentation and standards** — identify product/version scope and prefer official documentation for product-specific behavior.

The current NICE components and its version history are maintained by NIST: https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/nice-framework-current-versions

## Safety and authorization

Hands-on work must be explicitly authorized, scoped, and safe. Use toy data, local isolated environments, or intentionally vulnerable training targets designed for practice. Do not direct learners to scan, exploit, access, or disrupt third-party systems. Include cleanup and data-handling instructions for labs. Defensive analysis should emphasize evidence preservation, privacy, proportionality, and escalation.

## Assessment and mastery

- Assess the stated learning outcomes, not rote recall alone.
- Use a mix of recall, explanation, scenario reasoning, and applied artifacts.
- Publish clear scoring criteria and explain remediation for missed concepts.
- Track progress against outcomes where the platform supports it; do not equate opening a chapter or finishing a simulation with mastery.
- Capstones should integrate previously taught skills and require a defensible written or technical deliverable.

## Editorial review checklist

Before a chapter is marked complete, a reviewer should verify:

- [ ] All required chapter-contract sections are present.
- [ ] Explanations and examples are specific to the chapter title and outcomes.
- [ ] Technical claims, commands, and references have been checked against current primary sources.
- [ ] Version-sensitive claims include version/date and review date.
- [ ] Assessment questions have unambiguous intended answers and rationale.
- [ ] The assignment has a rubric and an example or evaluation criteria.
- [ ] Safety, authorization, privacy, and cleanup guidance are appropriate.
- [ ] No placeholder text, repeated filler, broken links, or unsupported certification/job-readiness claims remain.
- [ ] Content renders correctly on mobile and desktop and preserves existing progress IDs.

## Delivery approach

Author and review chapters in coherent subject-area batches. Keep existing lesson IDs and renderer contracts stable. Each batch should include content validation, link/reference checks, and a render/progress regression check before it is merged. The 171-chapter inventory should only be called fully authored after every chapter passes the editorial checklist; this standard document alone does not mark any chapter complete.
