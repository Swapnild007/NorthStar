# NorthStar AI Mentor Worker

This Worker is the server-side AI gateway for the NorthStar GitHub Pages frontend.

## Architecture

GitHub Pages frontend -> Cloudflare Worker -> OmniRoute -> OmniRoute-selected model

The model is never downloaded to the learner's phone. The Worker owns the OmniRoute binding, and the browser only sends HTTPS requests to the Worker.

## Deploy manually

From this directory:

```bash
npx wrangler deploy
```

The first deployment will use a `workers.dev` URL. If you deploy manually rather than through GitHub Actions, copy that Worker URL into `data/ai.js` as `endpoint`.

## Required Cloudflare setup

1. Create/sign in to a Cloudflare account.
2. Deploy OmniRoute and expose its OpenAI-compatible endpoint to the Worker.
3. Add repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Run the **Deploy NorthStar AI Mentor** GitHub Actions workflow.
5. The workflow deploys the Worker, resolves the account `workers.dev` subdomain, and automatically writes the public Worker URL into `data/ai.js`.

The Worker itself does not require a model API key. The OmniRoute configuration is the server-side connection to OmniRoute.

## Routes

- `GET /health` -> deployment/inference health metadata.
- `POST /v1/chat/completions` -> streamed mentor responses.
- `OPTIONS` -> CORS preflight.

Only the NorthStar GitHub Pages origin is allowed by default.

## Privacy

The Worker does not write conversation data to KV, R2, D1, Durable Objects, or another persistence service. The browser keeps its own chat history in localStorage.

Cloudflare states that OmniRoute customer content is not used to train the OmniRoute models or improve Cloudflare/third-party services unless explicit consent is provided. Review the current Cloudflare data-use terms before production deployment.

## Worker configuration

Set `OMNIROUTE_BASE_URL` and optional `OMNIROUTE_TOKEN` as Cloudflare Worker secrets. Do not put them in the frontend. The frontend uses model `auto`.
