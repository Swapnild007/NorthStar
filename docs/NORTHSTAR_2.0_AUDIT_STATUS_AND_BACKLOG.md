# NorthStar 2.0 — Baseline Audit Status & Execution Backlog

**Branch:** `northstar-2.0-foundation`  
**Audit date:** 2026-09-27  
**Scope:** Web-first 2.0 planning; no learner-facing app edits authorized or made.

## Verified from repository artifacts

- The current README describes a static, mobile-first learning platform and identifies the approved UI as frozen.
- The README declares 16 core pathways / 140 core lessons, seven competency-completion lessons, 17+ controlled CyberRange labs, adaptive assessment/remediation, and an eight-stage capstone.
- The current structural QA script is designed to enforce exact counts, unique lesson IDs, required lesson identity/objective fields, lab counts, capstone structure, script asset existence and key app wiring.
- The GitHub Actions workflow runs `node --check app.js`, syntax checks for `data/*.js`, and `node qa/validate.mjs`; its push trigger is configured for `main`, with pull-request and manual triggers also present.
- The main curriculum source is approximately 1.5 MB. The repository connector rejected the full raw-file fetch as oversized, so a reliable full lesson inventory could not be extracted in this audit pass.

## Audit status

| Work item | Status | Notes |
|---|---|---|
| Web-first scope / preservation boundary | Complete | Documented in platform decision |
| High-level 20-domain coverage matrix | Draft complete | Existing documentation and named completion lessons used as evidence; not a lesson-level certification |
| Core lesson ID/title/objective inventory | Blocked / not complete | Full main curriculum asset could not be retrieved in this environment |
| Lesson-to-competency mapping | Not complete | Requires structured inventory of actual lesson records |
| Structural QA execution | Not run | No complete runnable checkout available in this workflow; do not infer a pass from the workflow definition |
| Browser/runtime and accessibility QA | Not run | Requires a runnable local/deployed web build and defined test matrix |
| Safe-lab review | Partial | Need inspect every lab specification and learner flow |
| Content gap prioritization | Provisional | Use worklist below; revise after lesson-level evidence review |

## Prioritized worklist

### P0 — Establish a reproducible audit environment
1. Obtain a complete checkout of the working branch in a runnable environment.
2. Confirm branch and commit SHA before testing.
3. Run the repository's existing syntax and structural QA exactly as configured; save command output and commit SHA.
4. If source parsing needs a helper, write a read-only inventory script that parses the existing data safely. Do not use `eval` or `new Function` on curriculum content. If the source format is not JSON-compatible, use a parser appropriate to the established format or an isolated reviewed parser.

### P1 — Build traceable curriculum evidence
1. Export one row per actual lesson with pathway ID/title, lesson ID/title, objective, prerequisite, concept tags, practice, assessment and source/reference metadata where present.
2. Map each row to one or more specific competencies in the coverage matrix.
3. Require evidence for a coverage claim: teaching explanation + learner application + an assessment or observable artifact.
4. Mark ambiguous mappings for human review; do not infer coverage from titles alone.
5. Inspect all seven named completion lessons and compare them against the master teaching contract.

### P1 — Audit practice and assessment integrity
1. Inventory base and advanced labs and identify whether each is a simulation, local toy target, isolated range or written evidence exercise.
2. For each lab, verify authorization/scope, safe environment, prohibited actions, data handling, resource limits, reset procedure, expected evidence and defensive learning objective.
3. Check assessment variety (knowledge, reasoning, application, reflection), feedback quality and remediation behavior.
4. Verify learner progress reflects demonstrated mastery rather than completion alone, consistent with the 2.0 curriculum standard.

### P2 — Runtime and release quality
1. Test core routes, navigation, lesson rendering, progress persistence, assessment/remediation, labs, capstone and coding lab in supported browsers and mobile widths.
2. Check keyboard access, focus order, labels, contrast, reduced motion, readable typography and error/empty states.
3. Verify static hosting paths, offline behavior, first-load constraints and any external runtime dependencies.
4. Document known limitations and release-blocking defects before authoring large content expansions.

## Content authoring order after evidence review

1. Repair prerequisite and foundational knowledge gaps first.
2. Strengthen core networking, operating systems, programming, security principles, identity, cryptography and secure software concepts where the audit shows weak evidence.
3. Enrich defensive operations, incident response, vulnerability management, cloud and architecture with realistic but bounded scenarios.
4. Validate legal/privacy and India-context material against current primary sources and attach review dates.
5. Add/expand emerging areas (AI security, IoT/OT, evolving cloud threats) only with dated references and explicit scope.
6. Build integrative projects that require evidence, reasoning, communication and reflection across domains.

## Completion rule

The baseline audit is complete only when the lesson-level inventory and mappings are generated from actual records, QA results are recorded against a commit, all labs have a safety/evidence review, and runtime/accessibility checks have a documented outcome. This document does not certify those gates as passed.
