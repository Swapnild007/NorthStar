# NorthStar 2.0 — Baseline Audit (Initial)

**Branch reviewed:** `northstar-2.0-foundation`  
**Audit type:** Repository structure and curriculum-contract review  
**Status:** Initial static review; runtime/build verification remains pending.

## 1. Existing product baseline

The repository is a mobile-first, static web application with an Android wrapper using Capacitor 7.4.3. The page loads application logic and curriculum data from local JavaScript files. The README identifies GitHub Pages as the deployment target and describes the approved glass/iOS-inspired UI as frozen.

**Preservation constraint:** NorthStar 2.0 work must not replace the current UI, existing lesson data, learner progress model, CyberRange, coding lab, or Android behavior without a separately reviewed migration plan.

## 2. Existing learning and practice assets

The repository README and its QA contract specify:
- 16 core pathways and 140 core lessons.
- 7 competency-completion lessons.
- 12 base CyberRange labs and 5 advanced labs.
- An 8-stage enterprise capstone.
- Adaptive assessment and remediation support.
- A standalone coding lab; no AI mentor or model backend in the current release.

These counts are declared in project documentation and the static QA contract. They have **not yet been independently executed or runtime-verified in this audit**.

## 3. Content and architecture observations

- Curriculum content is primarily held in large JavaScript data files, including `data/curriculum.js` (about 1.5 MB) and related enrichment/addition files.
- The current data model is designed around pathway/lesson arrays and the app loads those assets directly from `index.html`.
- Existing documentation already contains a curriculum master standard, learner model, UI freeze guidance, and AI mentor architecture notes. The AI mentor notes are historical/design documentation; the README says the AI mentor and provider integrations were removed from the current product.
- Existing quality checks are a useful release contract, but they mostly validate counts, required fields, IDs, asset paths, and selected wiring invariants. They do not by themselves prove lesson depth, factual accuracy, accessibility, safe lab isolation, or learner mastery.

## 4. Initial risks and gaps to investigate

1. **Content quality at scale:** inspect lesson bodies against the master teaching contract; title/objective presence is not enough.
2. **Coverage traceability:** map every lesson and practical exercise to domain competencies, prerequisites, and observable evidence.
3. **Source governance:** verify references, versions, last-reviewed dates, and maintenance ownership for changing topics.
4. **Practice authenticity and safety:** distinguish simulations from executable labs; document authorization, isolation, reset, and data-handling boundaries.
5. **Learner data and progress:** verify persistence, export/recovery, and compatibility before any schema change.
6. **Mobile/offline operation:** verify Android wrapper, local asset loading, and low-connectivity behavior.
7. **Assessment validity:** inspect item quality, explanations, remediation behavior, and whether assessments test application rather than only recall.
8. **Build and release verification:** run the documented QA script and Android/web checks in a controlled checkout before proposing implementation changes.

## 5. Recommended next sequence

1. Run the existing static QA and inspect CI/build workflows.
2. Profile the current curriculum schema and sample lessons across pathways, including enrichment and completion lessons.
3. Produce a competency-to-content coverage matrix with status labels: present, shallow, missing, outdated, or needs validation.
4. Author the 2.0 master curriculum map and lesson specification without modifying the frozen learner UI.
5. Pilot one foundational cybersecurity module end-to-end, including source review, exercises, assessment, and evidence checkpoints.
6. Only after content and compatibility review, design the smallest additive integration into the existing app.

## 6. Audit limitations

This is a repository-document and file-structure review, not a full code audit, penetration test, accessibility audit, legal review, or runtime verification. No application files or learner-facing behavior were changed as part of this audit.
