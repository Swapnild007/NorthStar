# NorthStar AI Mentor Worker

This Worker is the cloud inference boundary for the NorthStar Mentor.

## Architecture

`GitHub Pages → NorthStar Mentor Worker → OmniRoute → model provider`

If `OMNIROUTE_BASE_URL` is not configured, the Worker uses the Cloudflare Workers AI binding as a cloud fallback. The learner's device never stores or runs an LLM.

The current fallback model is `@cf/qwen/qwen3.8-27b`, a Cloudflare-hosted Qwen 3.8 27B model with reasoning and function-calling support. Cloudflare documents the model and Workers AI binding here:
- https://developers.cloudflare.com/workers-ai/models/qwen3.8-27b/
- https://developers.cloudflare.com/workers-ai/configuration/bindings/

## Required Worker configuration

### Cloudflare Workers AI fallback

The existing `wrangler.jsonc` already contains the `AI` binding. Deploying the Worker with that binding gives the mentor a cloud inference path.

### Optional OmniRoute

For the provider-neutral route, configure Worker secrets/variables:

- `OMNIROUTE_BASE_URL` = private OmniRoute gateway URL
- `OMNIROUTE_TOKEN` = gateway authentication token

Never put either value in the GitHub Pages frontend.

## Deploy

From this directory:

```bash
npm install
npx wrangler login
npx wrangler deploy
```

The deployment will produce a Worker URL similar to:

`https://northstar-ai-mentor.<your-workers-subdomain>.workers.dev`

Check:

`GET /health`

Then set that exact Worker URL as `endpoint` in `data/ai.js` in the main NorthStar repository.

## Frontend contract

The browser calls:

`POST <endpoint>/v1/chat/completions`

with:

```json
{
  "messages": [],
  "mentor": {
    "mode": "teacher",
    "classification": "concept",
    "context": {}
  }
}
```

The Worker adds the NorthStar teaching contract and learner context server-side before sending the request to the cloud model.

## Security

- No API keys in the frontend.
- No model weights on the device.
- CORS is restricted to the NorthStar GitHub Pages origin.
- Request size and message length are bounded.
- CyberRange context is treated as simulated evidence.
- The mentor must not claim access to private device, account, network or file data.
- Offensive-security coaching is constrained to authorized, controlled environments.
