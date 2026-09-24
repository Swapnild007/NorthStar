# NorthStar

**Cyber Security Management & Data Science**

> From absolute beginner to advanced capability.

NorthStar is a mobile-first, evidence-driven learning platform designed to take a learner from zero computing knowledge through cybersecurity, data science, security engineering and cybersecurity management.

## Curriculum architecture

The curriculum is built progressively rather than padded with shallow lessons. The current release closes the major identified competency gaps through targeted completion lessons instead of indiscriminate lesson-count inflation. The sequence starts with **Computer & Digital Foundations**, then moves through cybersecurity foundations, networking, Linux/systems, programming, statistics/data science, machine learning, defensive/offensive security, cloud/DevSecOps, cybersecurity management and an enterprise capstone.

Current release: **v1.0.0** — 16 core pathways / 140 core lessons plus 7 competency-completion lessons, with adaptive assessment, advanced CyberRange labs and an enterprise capstone.

## Teaching model

Each lesson is designed around: Explain → Visualize → Understand → See it → Do it → Check it → Connect it.

The academic design is informed by public curriculum and workforce references including the NIST NICE Framework, ACM/IEEE/AIS/IFIP cybersecurity curricular guidance, UC Berkeley data-science foundations, and Carnegie Mellon multidisciplinary information-security/data/technology-strategy coursework. These references inform the structure; NorthStar is not an official university curriculum.

## UI

The approved NorthStar glass/iOS-inspired UI is frozen. Future work should deepen content, functionality and evidence without replacing the visual system unless explicitly approved.

## AI and cloud services

The AI Mentor and all model-provider integrations have been removed. NorthStar does not require an LLM, AI gateway, API key or AI backend. The independent Coding Lab remains available for hands-on HTML, CSS, JavaScript and Python practice; its browser-based Python runtime may require an internet connection to load Pyodide on first use.

## Release architecture

- 16 core pathways / 140 core lessons.
- 7 targeted competency-completion lessons.
- 17+ controlled CyberRange labs, including advanced evidence exercises.
- Adaptive learner assessment and remediation queue.
- Eight-stage enterprise capstone.
- Mobile-first glass/iOS UI remains frozen.
- No AI Mentor, model integration, API key or AI backend.
- Static QA validates JavaScript syntax, data contracts, asset references and release invariants.

## Deployment

GitHub Pages is the deployment target. The project remains dependency-free at build time and uses relative asset paths for project hosting. No AI service is required.
