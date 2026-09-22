# NorthStar OmniRoute Gateway

This directory is the deployment layer for the model-routing service used by the NorthStar AI Mentor.

## Architecture

```text
NorthStar GitHub Pages
        |
        v
NorthStar AI Gateway (Cloudflare Worker)
        |
        | HTTPS + Bearer token
        v
OmniRoute
        |
        +--> Model provider A
        +--> Model provider B
        +--> Model provider C
```

NorthStar owns the mentor product, curriculum, learner state, safety rules and context. OmniRoute handles model/provider routing.

## Why Railway

GitHub Pages cannot run a persistent Node.js service. OmniRoute needs a persistent server/container. Railway provides a public HTTPS service and persistent storage suitable for this deployment. Current OmniRoute documentation supports Docker on port `20128` and an OpenAI-compatible `/v1` API. citeturn0search8turn0search10

## Deploy on Railway

Create a Railway service from this directory:

- Root directory: `infra/omniroute`
- Dockerfile: `Dockerfile`
- Public port: `20128`
- Persistent volume: `/app/data`

Set these Railway variables:

- `JWT_SECRET` = long random value
- `INITIAL_PASSWORD` = strong dashboard password
- `API_KEY_SECRET` = long random value
- `REQUIRE_API_KEY=true`
- `DATA_DIR=/app/data`
- `NODE_ENV=production`
- `HOSTNAME=0.0.0.0`
- `PORT=20128`

Railway terminates HTTPS at the edge. The resulting public service URL becomes the OmniRoute base URL.

### Configure providers

Open the deployed OmniRoute dashboard, connect at least one model provider, then create an endpoint API key. OmniRoute exposes the OpenAI-compatible API under `/v1`. citeturn0search3

Do not commit provider credentials or endpoint tokens to GitHub.

## Connect NorthStar

The NorthStar Worker needs:

```text
OMNIROUTE_BASE_URL=https://<your-railway-service>
OMNIROUTE_TOKEN=<your-omniroute-endpoint-key>
```

These are Worker-side secrets/variables, never frontend values.

The NorthStar deployment workflow is prepared to consume GitHub Actions secrets with these names and push them into the Worker during deployment.

## Local Docker

From this directory:

```bash
JWT_SECRET='change-me' \
INITIAL_PASSWORD='change-me' \
API_KEY_SECRET='change-me' \
docker compose up -d
```

Then open `http://localhost:20128`.

## Security

- Never expose OmniRoute without authentication.
- Never commit provider API keys.
- Never put `OMNIROUTE_TOKEN` in `data/ai.js` or browser JavaScript.
- Keep `/app/data` on persistent storage.
- Use HTTPS for production.
