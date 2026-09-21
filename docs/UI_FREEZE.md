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
The curriculum is loaded from `data/curriculum.js` and contains 6 paths / 30 lessons.
Progress is stored locally using the existing `ns_completed_lessons` and `ns_lab_state` keys.

### Important
Do not replace this UI with another visual system unless the user explicitly approves a new design.
