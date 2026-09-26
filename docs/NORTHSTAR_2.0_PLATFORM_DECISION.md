# NorthStar 2.0 — Platform Delivery Decision

**Decision:** Build and complete the NorthStar 2.0 web version first. Android packaging and adaptation are deferred until the web 2.0 product is complete and validated.

## Why this sequence

The web version is the primary product and validation surface for 2.0. It allows the curriculum, learning experience, assessments, practice activities, and progress model to be designed and tested before investing in mobile packaging. This avoids treating the Android wrapper as a parallel delivery target while the product scope is still changing.

## Scope for the 2.0 web release

The web release will include:
- The complete, structured cybersecurity curriculum and its supporting references.
- A consistent lesson format with clear objectives, prerequisites, explanations, worked examples, exercises, and knowledge checks.
- Learning pathways and competency mapping.
- Assessments, practice evidence, and learner progress.
- Safe, clearly labeled simulations and labs appropriate to the available execution environment.
- Responsive, accessible web experience and deployment/release QA.

## Deferred until after web 2.0

- Android-specific implementation and APK release.
- Capacitor synchronization and Android packaging changes.
- Mobile-only features that are not required for a responsive web experience.

The existing Android wrapper and workflows should be preserved as-is during web development unless a change is necessary to protect the web application or shared source assets. Any such change must be documented and validated.

## Delivery gates

1. **Web baseline:** inspect current web app, data contracts, existing QA and deployment workflow.
2. **Curriculum architecture:** produce a traceable curriculum map and content specification.
3. **Pilot module:** author and review one complete module end-to-end, including learning activities and assessments.
4. **Web implementation:** integrate 2.0 content and capabilities incrementally without breaking the current experience.
5. **Web release validation:** verify content integrity, navigation, responsiveness, accessibility, progress behavior, and deployment.
6. **Android phase:** only after web 2.0 completion, assess the finished web experience for Android packaging and device-specific needs.

## Definition of “web 2.0 complete”

Web 2.0 is complete when the agreed curriculum coverage is authored and reviewed; all required learner journeys work; assessment and progress behaviors pass QA; practice activities are accurately labeled and safe; the web app is responsive and accessible to the agreed standard; and the release is deployed and validated. Android APK delivery is not part of this completion gate.
