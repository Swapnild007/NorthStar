const ALLOWED_ORIGIN = "https://swapnild007.github.io";
const DEFAULT_MODEL = "@cf/meta/llama-3.1-8b-instruct";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Origin"
  };
}
function json(data, status = 200, origin = "") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {"Content-Type": "application/json; charset=utf-8", ...corsHeaders(origin)}
  });
}
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return new Response(null, {status:204, headers:corsHeaders(origin)});
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({service:"NorthStar AI Gateway", provider:"Cloudflare Workers AI + AI Gateway", model:DEFAULT_MODEL, status:"ok"}, 200, origin);
    }
    if (request.method !== "POST" || url.pathname !== "/v1/chat/completions") {
      return json({error:{message:"Not found",type:"not_found"}},404,origin);
    }
    if (origin && origin !== ALLOWED_ORIGIN) {
      return json({error:{message:"Origin not allowed",type:"cors_error"}},403,origin);
    }

    let body;
    try { body = await request.json(); }
    catch { return json({error:{message:"Request body must be valid JSON",type:"invalid_request_error"}},400,origin); }

    const messages = Array.isArray(body?.messages) ? body.messages : [];
    if (!messages.length) return json({error:{message:"messages is required",type:"invalid_request_error"}},400,origin);

    const requestedModel = String(body?.model || DEFAULT_MODEL);
    const model = requestedModel.startsWith("@cf/") ? requestedModel : DEFAULT_MODEL;

    try {
      const result = await env.AI.run(model, {
        messages,
        temperature: typeof body.temperature === "number" ? body.temperature : 0.2,
        max_tokens: Number(body.max_tokens || 1200)
      }, {
        gateway: {
          id: "default",
          collectLog: true,
          metadata: {application:"NorthStar", surface:"AI Mentor"}
        }
      });

      const content = typeof result === "string"
        ? result
        : result?.response ?? result?.result?.response ?? result?.output_text ?? "";

      return json({
        id:"northstar-" + crypto.randomUUID(),
        object:"chat.completion",
        created:Math.floor(Date.now()/1000),
        model,
        choices:[{index:0,message:{role:"assistant",content:String(content)},finish_reason:"stop"}]
      },200,origin);
    } catch (error) {
      return json({error:{message:String(error?.message || "Workers AI request failed"),type:"upstream_error"}},502,origin);
    }
  }
};
