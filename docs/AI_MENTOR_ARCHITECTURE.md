# NorthStar AI Mentor Architecture

## Status
Version 1.0 local-first foundation. The current implementation uses WebLLM in the browser and does not expose an API key.

## Model strategy
NorthStar does not train a foundation model from scratch. The application uses a replaceable LLM runtime behind an AI configuration object. The current default is Qwen3-0.6B-q4f16_1-MLC through WebLLM.

## AI roles
- Teacher: first-principles explanations.
- Socratic Tutor: guided questions instead of immediate answers.
- Lab Mentor: investigation hints and evidence-oriented reasoning.
- Code Mentor: secure coding feedback.
- Examiner: adaptive checks and explanations.
- Security Analyst: structured interpretation of controlled evidence.

## Next architecture layers
1. Learner Model: track concept-level mastery, mistakes and evidence.
2. Knowledge Graph: prerequisites, skills, lessons, labs and assessments.
3. Curriculum-aware RAG: retrieve authoritative NorthStar material before answering.
4. Adaptive Assessment: select remediation based on demonstrated weaknesses.
5. Lab Interface: connect the mentor to isolated lab state without unrestricted host access.
6. Optional AI Gateway: allow a server-side model later without changing the UI contract.

## Security boundary
The AI must never receive unrestricted operating-system access. Future tools must execute through an isolated runner with explicit scope, logging and authorization controls. Offensive exercises remain limited to controlled environments.

## Current learner context
The mentor now receives the active lesson objective, concepts and overall lesson-completion count when available. This is the first step toward a full learner model.

## Acceptance criteria
- No API secret in frontend code.
- AI runtime is replaceable through `data/ai.js`.
- Current lesson context is injected into the mentor prompt.
- Offensive guidance is constrained to authorized/controlled environments.
- Future backend/RAG integration can be added without replacing the learning UI.
