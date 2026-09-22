const MODEL = "@cf/qwen/qwen3.8-27b";
const ALLOWED_ORIGIN = "https://swapnild007.github.io";
const MAX_BODY_BYTES = 120000;
const MAX_MESSAGES = 18;
const MAX_MESSAGE_CHARS = 7000;

const BASE_SYSTEM = `You are NorthStar Mentor, the AI tutor inside the NorthStar cybersecurity learning platform.

Your job is to teach, not merely answer. Assume the learner may be a complete beginner and explain unfamiliar terminology before relying on it. Use first principles, concrete examples, short checks for understanding, and deliberate progression.

NorthStar uses five mentor modes:
- Teacher: first principles -> example -> check.
- Socratic: ask one focused question at a time and build from the learner's answer.
- Practice: give one realistic but controlled task, wait for the attempt, then give precise feedback.
- Lab Coach: reason from simulated evidence, correlate observations, and choose the next safe observation.
- Reviewer: evaluate accuracy, evidence, assumptions, uncertainty, and next action.

Adaptive rule: completion is not mastery. Use the learner state supplied with the request to decide whether to repair foundations, guide application, or push transfer/creation.

Cybersecurity safety:
- Keep offensive-security guidance to systems the learner owns or is explicitly authorized to test.
- Do not provide operational instructions for credential theft, malware, persistence, evasion, destructive activity, or compromising real third-party systems.
- For controlled CyberRange exercises, teach the reasoning and investigation process using the supplied simulated evidence.
- Never claim to have access to the learner's device, private files, accounts, network, or external systems.

Privacy:
- Do not ask for passwords, API keys, tokens, private credentials, or unnecessary personal information.
- Treat the supplied learner context as educational state, not as permission to access anything.
- Do not invent evidence or claim a lab action was executed.

Response style:
- Human, calm, direct, tutor-like.
- Prefer short sections and examples over giant walls of text.
- When the learner is confused, slow down rather than increasing jargon.
- For a simple question, answer directly and then add the minimum useful explanation.
`;

function corsHeaders(origin) {
  const allowed = origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN;
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders(origin),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function clean(value, max = 1200) {
  return String(value ?? "").replace(/\\u0000/g, "").trim().slice(0, max);
}

function contextBlock(mentor = {}) {
  const c = mentor.context && typeof mentor.context === "object" ? mentor.context : {};
  const lab = c.lab && typeof c.lab === "object" ? c.lab : null;
  const lines = [
    "ACTIVE NORTHSTAR CONTEXT",
    `Mode: ${clean(mentor.mode || "teacher", 30)}`,
    `Request class: ${clean(mentor.classification || "general", 40)}`,
    `Lesson: ${clean(c.lesson || "None", 220)}`,
    `Module: ${clean(c.module || "None", 220)}`,
    `Objective: ${clean(c.objective || "Not supplied", 500)}`,
    `Prerequisite: ${clean(c.prerequisite || "Not supplied", 500)}`,
    `Concepts: ${Array.isArray(c.concepts) ? c.concepts.slice(0, 8).map(x => clean(x, 120)).join(", ") : "Not supplied"}`,
    `Mastery: ${Number.isFinite(Number(c.mastery)) ? Number(c.mastery) : 0}%`,
    `Attempts: ${Number.isFinite(Number(c.attempts)) ? Number(c.attempts) : 0}`,
    `Checks: ${Number.isFinite(Number(c.checks)) ? Number(c.checks) : 0}`,
    `Lab score: ${Number.isFinite(Number(c.labScore)) ? Number(c.labScore) : 0}%`,
  ];
  if (lab) {
    lines.push(
      `Lab: ${clean(lab.title || "None", 220)}`,
      `Lab track: ${clean(lab.track || "None", 120)}`,
      `Lab checkpoints answered: ${Number(lab.answeredCheckpoints || 0)} / ${Number(lab.checkpointCount || 0)}`,
      `Lab evidence locked: ${Number(lab.lockedEvidence || 0)}`,
      `Lab finding: ${clean(lab.finding?.title || "Not written", 300)}`,
      `Lab impact/scope: ${clean(lab.finding?.impact || "Not written", 500)}`,
      `Lab next action: ${clean(lab.finding?.nextAction || "Not written", 500)}`
    );
  }
  return lines.join("\n");
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages.slice(-MAX_MESSAGES).map(m => ({
    role: m?.role === "assistant" ? "assistant" : "user",
    content: clean(m?.content, MAX_MESSAGE_CHARS),
  })).filter(m => m.content);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return json({ ok: true, service: "northstar-ai-mentor", model: MODEL, inference: "cloud" }, 200, origin);
    }

    if (url.pathname !== "/v1/chat/completions" || request.method !== "POST") {
      return json({ error: "Not found" }, 404, origin);
    }

    if (origin !== ALLOWED_ORIGIN) {
      return json({ error: "Origin not allowed" }, 403, origin || ALLOWED_ORIGIN);
    }

    const length = Number(request.headers.get("content-length") || 0);
    if (length && length > MAX_BODY_BYTES) {
      return json({ error: "Request too large" }, 413, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400, origin);
    }

    const messages = normalizeMessages(body.messages);
    if (!messages.length) return json({ error: "At least one user message is required" }, 400, origin);

    const mentor = body.mentor && typeof body.mentor === "object" ? body.mentor : {};
    const system = BASE_SYSTEM + "\n\n" + contextBlock(mentor);

    const modelMessages = [
      { role: "system", content: system },
      ...messages,
    ];

    try {
      const result = await env.AI.run(MODEL, {
        messages: modelMessages,
        stream: true,
        temperature: 0.4,
        max_tokens: 900,
      });

      return new Response(result, {
        status: 200,
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "X-Content-Type-Options": "nosniff",
        },
      });
    } catch (error) {
      console.error("NorthStar mentor inference failed", error);
      return json({ error: "Mentor inference is temporarily unavailable." }, 503, origin);
    }
  },
};
