# NorthStar AI Mentor Worker

This Worker is the server-side AI gateway for the NorthStar GitHub Pages frontend.

## Architecture

GitHub Pages frontend -> Cloudflare Worker -> Cloudflare Workers AI -> Qwen3.8 27B

The model is never downloaded to the learner's phone. The Worker owns the Workers AI binding, and the browser only sends HTTPS requests to the Worker.

## Deploy manually

From this directory:

```bash
npx wrangler deploy
```

The first deployment will use a `workers.dev` URL. Copy the resulting URL and set it in `data/ai.js` as `endpoint`.

## Required Cloudflare setup

1. Create/sign in to a Cloudflare account.
2. Enable Workers AI for the account.
3. Deploy this Worker with Wrangler.
4. If deploying from GitHub Actions, add repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
5. The API token needs the permissions required to deploy Workers and use Workers AI.

The Worker itself does not require a model API key. The `AI` binding is the server-side connection to Workers AI.

## Routes

- `GET /health` -> deployment/inference health metadata.
- `POST /v1/chat/completions` -> streamed mentor responses.
- `OPTIONS` -> CORS preflight.

Only the NorthStar GitHub Pages origin is allowed by default.

## Privacy

The Worker does not write conversation data to KV, R2, D1, Durable Objects, or another persistence service. The browser keeps its own chat history in localStorage.

Cloudflare states that Workers AI customer content is not used to train the Workers AI models or improve Cloudflare/third-party services unless explicit consent is provided. Review the current Cloudflare data-use terms before production deployment.
