# NorthStar 2.0 — Assembled Catalog Reconciliation

**Branch:** `northstar-2.0/content-standard`  
**Assembly source:** `app.js` on this branch, which appends supplemental lesson arrays to matching base courses and applies authored/enrichment layers to base lessons.

## Verified source counts

| Source | Lesson records |
|---|---:|
| `data/curriculum.js` — base catalog | 140 |
| `data/competency_completion.js` | 7 |
| `data/curriculum2_additions.js` | 8 |
| `data/agent_security_specialization.js` | 16 |
| `data/os_platform_curriculum.js` | 16 |
| **Assembled total** | **187** |

The base catalog contains 140 lessons in 16 courses. The four supplemental arrays contribute 47 records. The IDs parsed from the source arrays are unique across the assembled set (187 records, 187 unique IDs; no duplicate IDs detected). The app's assembly logic appends these arrays by matching each lesson's `course` value to a base course's `code`.

## Runtime and deployment reconciliation

The user has reported that the currently viewed app displays **171 lessons**. That is a user-observed runtime count; it has not been independently reproduced in a browser during this audit. The branch source inventory above is **187 records**, including the 16 OS/platform supplemental lessons. The 171 figure equals the 140 base lessons plus the 7 competency-completion, 8 curriculum-addition, and 16 agent-security records; it excludes the 16 OS/platform records.

The branch's `index.html` includes the OS/platform script, and its `app.js` assembly includes the OS/platform array. However, the GitHub Pages workflow on this branch is configured to deploy only on pushes to `main` (or manual dispatch). Therefore, changes committed to `northstar-2.0/content-standard` or its draft PR do not by themselves establish that the public/current app has received them. This explains a plausible source of the discrepancy, but does not prove which build the user is viewing.

**Release verification still required:** merge/deploy the intended branch through the project's release process, then check the deployed app's network/script loading and in-app lesson count. Until that runtime check is performed, report 171 as the user's observed app count and 187 as the verified branch source-level inventory—do not present either as the other's substitute.

## What this count does and does not mean

- This is a verified source-level assembled inventory for the listed arrays on the named branch.
- `lesson_enrichment.js`, `chapter_expansion.js`, visuals, and authored overrides enrich or replace fields on existing lesson IDs; they are not counted as new lesson records.
- A unique ID and successful source assembly do **not** establish that lesson content is complete, accurate, non-redundant, or rendered correctly.
- The separate syllabus coverage crosswalk remains a module-level mapping, not proof that every syllabus topic has a complete lesson.
- Editorial review and browser/mobile rendering validation remain release gates.

## Next editorial scope

Proceed through the catalog by course. For each lesson, preserve its stable ID and app-consumed schema; distinguish necessary assessment repetition from learner-facing duplication; verify objectives, explanation, examples, visuals, case material, practice, knowledge checks, and references; then record the decision and evidence. Do not mark a lesson editorially complete based only on automated text matching.
