# NorthStar AI Mentor Worker

This Worker is the NorthStar AI Gateway inside the **NorthStar repository**. It owns the NorthStar mentor contract and securely forwards inference to OmniRoute.

## Architecture

`GitHub Pages → NorthStar AI Gateway (this Worker) → OmniRoute → model provider`

NorthStar does not run or store an LLM on the learner's device. The browser never receives an OmniRoute credential or provider API key.

## Required Worker configuration

Configure these as Worker secrets/variables:

- `OMNIROUTE_BASE_URL` = the private OmniRoute gateway URL
- `OMNIROUTE_TOKEN` = the OmniRoute authentication token, if required

OmniRoute remains the only model/provider routing layer. There is **no direct Cloudflare Workers AI fallback**.

## Deploy

```bash
npm install
npx wrangler login
npx wrangler deploy
```

After deployment, check `GET /health`.

Then set the deployed Worker URL as `endpoint` in `data/ai.js`.

## Frontend contract

The browser calls `POST <endpoint>/v1/chat/completions` with `messages` and a `mentor` object containing mode, classification and NorthStar learning context.

The gateway adds the NorthStar teaching contract and learner context server-side before sending the request to OmniRoute.

## Security

- No API keys in the frontend.
- No model weights on the device.
- No direct model invocation from the browser.
- OmniRoute credentials remain server-side.
- CORS is restricted to the NorthStar GitHub Pages origin.
- Request size and message length are bounded.
- CyberRange context is treated as simulated evidence.
- The mentor must not claim access to private device, account, network or file data.
- Offensive-security coaching is constrained to authorized, controlled environments.
