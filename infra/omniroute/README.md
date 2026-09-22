# NorthStar OmniRoute Gateway

This directory defines the model-routing service used by the NorthStar AI Mentor.

## Architecture

NorthStar GitHub Pages -> NorthStar AI Gateway -> OmniRoute -> model providers

OmniRoute is an OpenAI-compatible AI gateway with provider routing, fallback and model selection.

## Run the router

On a server with Docker:

```bash
docker compose up -d --build
```

OmniRoute listens on port 20128 and exposes its OpenAI-compatible API under /v1.

Then configure at least one provider and an OmniRoute endpoint/API key in the OmniRoute dashboard. Use auto for NorthStar so OmniRoute can select a connected route.

## NorthStar Worker variables

Set these as Cloudflare Worker secrets/variables:

- OMNIROUTE_BASE_URL = http://<server>:20128 or your HTTPS reverse-proxy URL
- OMNIROUTE_TOKEN = the OmniRoute endpoint token

Do not put either value in the frontend.

## Production requirement

Expose OmniRoute through HTTPS and restrict the /v1 API to authenticated requests. Keep the persistent /app/data volume because provider credentials, routing configuration and usage state belong to the gateway, not the learner device.
