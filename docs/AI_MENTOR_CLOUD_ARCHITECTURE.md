# NorthStar AI Mentor — Cloud Architecture

## Decision

NorthStar no longer uses WebLLM for the production mentor.

### New path

```
Phone / Desktop
      |
      | HTTPS
      v
GitHub Pages
      |
      v
Cloudflare Worker
      |
      | Workers AI binding
      v
Qwen3.8 27B
```

The LLM stays on Cloudflare infrastructure. Nothing in the NorthStar frontend downloads model weights.

## Why Qwen3.8 27B

Cloudflare currently lists `@cf/qwen/qwen3.8-27b` as a hosted model with reasoning, function calling, vision, and a 262,144-token context window. NorthStar only needs text today, but the multimodal/tooling capabilities leave room for later CyberRange mentor features.

## Mentor architecture

- `data/mentor_engine.js`: adaptive learning policy and context model.
- `data/mentor_ui.js`: lightweight UI state bridge.
- `data/learner.js` / local learner state: progress and mastery evidence.
- `data/cyberrange.js`: controlled lab context.
- `workers/mentor/src/index.js`: server-side mentor policy, safety boundary, request validation, and Workers AI inference.

The frontend supplies educational context. The Worker supplies the non-negotiable mentor and cybersecurity safety contract.

## What is not sent

- API keys
- local files
- browser history
- arbitrary device data
- passwords or credentials
- raw NorthStar source code

Only the active conversation and bounded learning/lab context are sent.

## Operational boundary

CyberRange actions remain simulated and local. The mentor cannot execute shell commands, scan targets, access the learner's device, or operate external systems.

## Deployment

See `workers/mentor/README.md`.

The GitHub Pages site remains the frontend repository. Cloudflare is used only as the AI inference gateway.
