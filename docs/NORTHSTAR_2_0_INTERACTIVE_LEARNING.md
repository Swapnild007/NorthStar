# NorthStar 2.0: Interactive Learning and Visual Standard

## Product principle

NorthStar is a content-led learning platform. Interactivity must make a concept easier to understand, practice, or assess. It must not turn lessons into a generic simulator, arcade flow, or sequence of arbitrary clicks. Reading, diagrams, worked examples, and reference material remain first-class.

## Visual learning requirements

Add visuals when they communicate something text alone does not communicate as efficiently:

- **Architecture and data-flow diagrams:** trust boundaries, components, identities, data movement, and control points.
- **Sequence diagrams:** protocol handshakes, authentication, request/response lifecycles, and incident timelines.
- **Decision trees:** triage, escalation, control selection, and safe response workflows.
- **Annotated screenshots or illustrations:** interfaces, configuration concepts, log fields, and security-relevant indicators.
- **Tables and comparison graphics:** protocols, control trade-offs, attack surface, and detection coverage.

Every visual needs a chapter-specific title, a concise explanation of what to notice, accessible text alternative, and a source/attribution where applicable. Prefer original vector diagrams and synthetic illustrative data over decorative stock imagery. Do not use images merely to make a page look busy. Do not embed real secrets, personal data, live infrastructure identifiers, or unlicensed third-party imagery.

## Interaction patterns

Use only where they improve learning:

1. **Progressive disclosure:** expandable definitions, “why this matters” notes, and optional deeper technical detail. Core explanation must remain discoverable without clicking.
2. **Diagram exploration:** select a component or flow step to reveal its role, inputs/outputs, trust boundary, and likely failure modes. Provide a keyboard-accessible equivalent and a text description.
3. **Guided walkthrough:** let learners reveal the next step of a worked example, with the reasoning and expected observation shown at each step. Do not hide essential safety warnings.
4. **Knowledge checks:** inline single/multiple choice, ordering, matching, or short response. Give immediate explanatory feedback, including why distractors are incorrect. Avoid grading by clicks alone.
5. **Practice artifacts:** allow learners to inspect a synthetic log, configuration, code sample, or incident timeline and then produce a finding, explanation, or recommendation. Provide a rubric and reference solution.
6. **Self-check and reflection:** short prompts that help learners identify uncertainty and decide what evidence they need next.

Avoid compulsory timers, points, streaks, random click targets, simulated terminal theatrics, and fake “live attack” dashboards. A command-line lab is appropriate only when command-line competence is itself a learning outcome.

## Chapter interaction blueprint

For a typical chapter:

- Start with outcomes, estimated effort, prerequisites, and a short “why this matters” context.
- Teach the core model in readable sections.
- Place one high-value visual near the explanation it supports.
- Walk through one complete, chapter-relevant example.
- Offer one optional interactive exploration or guided practice activity.
- Check understanding with a few chapter-specific questions and answer rationales.
- End with an applied deliverable, rubric, key takeaways, and references.

Not every chapter needs every interaction type. Select the smallest set that meaningfully supports the outcomes. Content must remain usable if interactive enhancement is unavailable.

## Accessibility, mobile, and performance

- All interactions must be operable by keyboard and touch, with visible focus and clear labels.
- Do not rely on color alone to communicate meaning; use labels, shapes, and patterns.
- Provide meaningful alt text and a text equivalent for diagrams.
- Keep touch targets comfortable on mobile and prevent horizontal overflow.
- Respect reduced-motion preferences; avoid unnecessary animation and auto-playing media.
- Lazy-load nonessential imagery and keep diagrams crisp at small screen sizes.
- Ensure interactions preserve lesson IDs, completion state, and progress behavior.

## Quality and review

A visual or interactive element is accepted only when reviewers can answer:
- Which learning outcome does it support?
- What new understanding or evidence does it provide?
- Is it technically accurate and scoped to the chapter?
- Can the learner complete the lesson without it?
- Is it accessible, responsive, and safe?
- Does feedback explain the concept rather than merely report correct/incorrect?

Use current official documentation for product screenshots and version-sensitive details. Cite and date external references. Use synthetic data for logs, packets, identity records, and incidents. Any lab involving systems must state authorization and scope explicitly.
