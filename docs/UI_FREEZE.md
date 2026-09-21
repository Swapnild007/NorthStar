# NorthStar UI Freeze — 2026-09-21

## Approved visual reference
The approved NorthStar visual direction is the **NorthStar glass learning dashboard** generated on 21 September 2026.

### Frozen principles
- Mobile-first.
- Premium light glass / iOS-inspired visual language.
- White, ice-blue, indigo and soft cyan/purple accents.
- No black-theme redesign.
- Mobile bottom liquid/glass navigation.
- Desktop sidebar navigation.
- Home dashboard with capability hero, progress metrics, learning path, continue-learning card, quick access, recent activity and skill matrix.
- The visual hierarchy is frozen; future work must change functionality/data underneath it rather than redesigning the interface.

### Functional contract
- Home
- Learn
- Lesson: Read / Practice / Check
- Labs
- Lab
- AI
- Progress

### Data contract
The curriculum is loaded from `data/curriculum.js` and contains 16 pathways / 140 lessons. The current workload is approximately 261–329 study hours, calculated from lesson-level study-time ranges.
Progress is stored locally using the existing `ns_completed_lessons` and `ns_lab_state` keys.

### Academic curriculum benchmark
The learning architecture is benchmarked against publicly documented cybersecurity and data-science curricula and professional frameworks, including NIST NICE v2.2.0, NIST CSF 2.0, CSEC2017, Carnegie Mellon MSIS, Georgia Tech Cybersecurity, UC Berkeley Data Science, Stanford Statistics/Data Science, and IIM Calcutta cybersecurity/analytics material. NorthStar is not an official university or IIM curriculum.

## Important
Do not replace this UI with another visual system unless the user explicitly approves a new design.
