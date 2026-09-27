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

## What this count does and does not mean

- This is a verified source-level assembled inventory for the listed arrays on the named branch.
- `lesson_enrichment.js`, `chapter_expansion.js`, visuals, and authored overrides enrich or replace fields on existing lesson IDs; they are not counted as new lesson records.
- A unique ID and successful source assembly do **not** establish that lesson content is complete, accurate, non-redundant, or rendered correctly.
- The separate syllabus coverage crosswalk remains a module-level mapping, not proof that every syllabus topic has a complete lesson.
- Editorial review and browser/mobile rendering validation remain release gates.

## Next editorial scope

Proceed through the catalog by course. For each lesson, preserve its stable ID and app-consumed schema; distinguish necessary assessment repetition from learner-facing duplication; verify objectives, explanation, examples, visuals, case material, practice, knowledge checks, and references; then record the decision and evidence. Do not mark a lesson editorially complete based only on automated text matching.
