# NorthStar AI Gateway

Cloudflare Worker gateway for the NorthStar AI Mentor.

Architecture:

NorthStar GitHub Pages -> NorthStar AI Gateway -> Cloudflare Workers AI -> AI Gateway

The Worker keeps provider credentials and model access off the public NorthStar frontend. It exposes an OpenAI-compatible POST /v1/chat/completions endpoint and a GET /health endpoint.

## Deploy without Termux

1. In Cloudflare Dashboard, open Workers & Pages and create a Worker.
2. Connect the GitHub repository Swapnild007/NorthStar using Workers Builds, or upload the Worker source.
3. Set the Worker root/source to cloudflare/northstar-ai-gateway.
4. Ensure the Worker has a Workers AI binding named AI.
5. Deploy.
6. The Worker URL will look like https://northstar-ai-gateway.<your-subdomain>.workers.dev.
7. In NorthStar -> AI Mentor -> Configure Gateway, enter that URL.
8. Use Test Gateway.

## Cloudflare configuration

The Worker uses the Cloudflare AI binding and sends inference through the default AI Gateway. Cloudflare documents env.AI.run() with a gateway ID and supports Workers AI models using the @cf/ prefix.

No Cloudflare API token, provider key, or model is stored in the NorthStar frontend.

For production, configure AI Gateway rate limits, caching, logging, and guardrails as appropriate in Cloudflare.

## Default model

@cf/meta/llama-3.1-8b-instruct
