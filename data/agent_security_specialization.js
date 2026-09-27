/* NorthStar 2.0 · AI Agent Security specialization
 * 16 original lessons, culminating in a controlled defensive capstone.
 * All labs are mock/synthetic and limited to authorized isolated environments.
 */
window.NORTHSTAR_AGENT_SECURITY = [
  {
    "id": "agentsec-01",
    "course": "04",
    "title": "Agentic Systems: Architecture & Lifecycle",
    "objective": "Map an agent's model, orchestration loop, memory, tools and external dependencies.",
    "learningGoal": "Explain, apply and verify the security controls for agentic systems: architecture & lifecycle.",
    "time": "60–90 min",
    "prerequisite": "Basic cybersecurity concepts and application architecture",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "An agent repeatedly interprets context, selects an action, invokes a tool and evaluates the result. Model the lifecycle before assessing risk: inputs and retrieved content enter context; a planner or policy layer selects an action; a tool adapter performs it; outputs may update memory and trigger another cycle. Distinguish the model from the surrounding application, because authorization, validation, logging and execution controls usually live outside the model.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "An agent repeatedly interprets context, selects an action, invokes a tool and evaluates the result. Model the lifecycle before assessing risk: inputs and retrieved content enter context; a planner or policy layer selects an action; a tool adapter performs it; outputs may update memory and trigger another cycle. Distinguish the model from the surrounding application, because authorization, validation, logging and execution controls usually live outside the model."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Draw a data-flow diagram for a fictional support agent. Mark model, planner, tools, memory, user input, retrieved documents and external services. Annotate each trust boundary and failure consequence."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Draw a data-flow diagram for a fictional support agent. Mark model, planner, tools, memory, user input, retrieved documents and external services. Annotate each trust boundary and failure consequence.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-02",
    "course": "04",
    "title": "Trust Boundaries, Identity & Permission Models",
    "objective": "Identify principals, trust boundaries and effective permissions across an agent workflow.",
    "learningGoal": "Explain, apply and verify the security controls for trust boundaries, identity & permission models.",
    "time": "60–90 min",
    "prerequisite": "Agentic Systems: Architecture & Lifecycle",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "An agent is not a single identity. A user, application service, model runtime, tool connector and downstream API may each have distinct authority. Trace which principal authenticates each request, where delegated authority is stored, and whether tool calls inherit user permissions or use a service identity. Treat retrieved text and tool output as untrusted data, not policy. Map data classification, tenant boundaries and authorization decisions.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "An agent is not a single identity. A user, application service, model runtime, tool connector and downstream API may each have distinct authority. Trace which principal authenticates each request, where delegated authority is stored, and whether tool calls inherit user permissions or use a service identity. Treat retrieved text and tool output as untrusted data, not policy. Map data classification, tenant boundaries and authorization decisions."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Given a fictional agent diagram and role matrix, trace an action from user request to tool. Identify confused-deputy risks, overbroad service permissions and missing authorization checks; propose a least-privilege role map."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Given a fictional agent diagram and role matrix, trace an action from user request to tool. Identify confused-deputy risks, overbroad service permissions and missing authorization checks; propose a least-privilege role map.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-03",
    "course": "04",
    "title": "Prompt Injection & Instruction/Data Separation",
    "objective": "Recognize direct and indirect prompt-injection attempts and specify controls that reduce their impact.",
    "learningGoal": "Explain, apply and verify the security controls for prompt injection & instruction/data separation.",
    "time": "60–90 min",
    "prerequisite": "Trust Boundaries, Identity & Permission Models",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Prompt injection occurs when untrusted content influences an agent to disregard intended task constraints or perform unintended actions. Direct attacks arrive in user input; indirect attacks arrive through documents, webpages, email, code comments or tool results. A delimiter or system prompt alone is not a security boundary. Defense combines data labeling, constrained tools, policy checks outside the model, minimal context, output validation and approval for consequential actions.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Prompt injection occurs when untrusted content influences an agent to disregard intended task constraints or perform unintended actions. Direct attacks arrive in user input; indirect attacks arrive through documents, webpages, email, code comments or tool results. A delimiter or system prompt alone is not a security boundary. Defense combines data labeling, constrained tools, policy checks outside the model, minimal context, output validation and approval for consequential actions."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Use a provided benign mock document containing adversarial instructions. Label trusted policy versus untrusted content, record what the agent should treat as data, and test whether policy enforcement blocks a simulated unauthorized tool request."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Use a provided benign mock document containing adversarial instructions. Label trusted policy versus untrusted content, record what the agent should treat as data, and test whether policy enforcement blocks a simulated unauthorized tool request.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-04",
    "course": "04",
    "title": "Agent Identity, Credentials & Session Security",
    "objective": "Design safe authentication, secret handling and session boundaries for agent-to-tool access.",
    "learningGoal": "Explain, apply and verify the security controls for agent identity, credentials & session security.",
    "time": "60–90 min",
    "prerequisite": "Prompt Injection & Instruction/Data Separation",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Use short-lived, scoped credentials where possible; keep secrets in a dedicated secret store; avoid placing tokens in prompts, logs, memory or generated code. Bind authorization to the requesting user and intended task when feasible. Separate sessions and tenants, rotate exposed credentials, and ensure tool adapters validate audience, expiry, scope and caller identity. Never rely on the model to protect credentials it can see.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Use short-lived, scoped credentials where possible; keep secrets in a dedicated secret store; avoid placing tokens in prompts, logs, memory or generated code. Bind authorization to the requesting user and intended task when feasible. Separate sessions and tenants, rotate exposed credentials, and ensure tool adapters validate audience, expiry, scope and caller identity. Never rely on the model to protect credentials it can see."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Review a fictional connector configuration. Identify static tokens, excessive scopes, missing audience checks and cross-session leakage paths. Produce a remediation checklist and a credential lifecycle diagram."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Review a fictional connector configuration. Identify static tokens, excessive scopes, missing audience checks and cross-session leakage paths. Produce a remediation checklist and a credential lifecycle diagram.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-05",
    "course": "04",
    "title": "Threat Modeling & Safe Agent Red Teaming",
    "objective": "Build a bounded threat model and test plan for a fictional agent without targeting real systems.",
    "learningGoal": "Explain, apply and verify the security controls for threat modeling & safe agent red teaming.",
    "time": "60–90 min",
    "prerequisite": "Agent Identity, Credentials & Session Security",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Start with assets, actors, trust boundaries, entry points, tools, data flows and unacceptable outcomes. Include prompt injection, data disclosure, unauthorized actions, tool abuse, memory contamination, denial of service and supply-chain risks. Red-team tests should use synthetic data, mock tools and explicit success criteria. Record test setup, expected behavior, observed result, severity rationale and retest evidence.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Start with assets, actors, trust boundaries, entry points, tools, data flows and unacceptable outcomes. Include prompt injection, data disclosure, unauthorized actions, tool abuse, memory contamination, denial of service and supply-chain risks. Red-team tests should use synthetic data, mock tools and explicit success criteria. Record test setup, expected behavior, observed result, severity rationale and retest evidence."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Create a threat model for a mock research assistant with read-only search and a simulated file tool. Write five test cases including attack precondition, safe expected outcome and evidence to capture."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Create a threat model for a mock research assistant with read-only search and a simulated file tool. Write five test cases including attack precondition, safe expected outcome and evidence to capture.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-06",
    "course": "04",
    "title": "Tool Invocation Security & Parameter Validation",
    "objective": "Apply authorization, schema validation and action constraints to tool calls.",
    "learningGoal": "Explain, apply and verify the security controls for tool invocation security & parameter validation.",
    "time": "60–90 min",
    "prerequisite": "Threat Modeling & Safe Agent Red Teaming",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "A tool call is a privileged application action, not merely generated text. Enforce an allowlist of tools, strict parameter schemas, bounds checks, canonicalization and server-side authorization. Validate target identifiers against the user's permitted resources. Make operations idempotent where appropriate, limit call count and reject unknown fields. For high-impact actions, require an independent approval step and re-check authorization at execution time.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "A tool call is a privileged application action, not merely generated text. Enforce an allowlist of tools, strict parameter schemas, bounds checks, canonicalization and server-side authorization. Validate target identifiers against the user's permitted resources. Make operations idempotent where appropriate, limit call count and reject unknown fields. For high-impact actions, require an independent approval step and re-check authorization at execution time."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Audit a mock tool manifest and sample calls. Identify unbounded parameters, free-form destinations, missing ownership checks and dangerous defaults. Rewrite the contract as a narrow schema and test invalid inputs against a local mock."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Audit a mock tool manifest and sample calls. Identify unbounded parameters, free-form destinations, missing ownership checks and dangerous defaults. Rewrite the contract as a narrow schema and test invalid inputs against a local mock.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-07",
    "course": "04",
    "title": "Sandboxed Execution & Isolation Principles",
    "objective": "Evaluate isolation controls for agent-generated code and tool execution in disposable labs.",
    "learningGoal": "Explain, apply and verify the security controls for sandboxed execution & isolation principles.",
    "time": "60–90 min",
    "prerequisite": "Tool Invocation Security & Parameter Validation",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Generated code should be assumed potentially unsafe. Use disposable, strongly isolated environments with non-root execution, read-only base images, resource and time limits, restricted filesystem mounts, egress deny-by-default and no production credentials. Containers can share a host kernel, so their isolation properties differ from virtual machines and hardened execution services. Define reset, monitoring and escape-response procedures; never test escape techniques against a host or third-party system.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Generated code should be assumed potentially unsafe. Use disposable, strongly isolated environments with non-root execution, read-only base images, resource and time limits, restricted filesystem mounts, egress deny-by-default and no production credentials. Containers can share a host kernel, so their isolation properties differ from virtual machines and hardened execution services. Define reset, monitoring and escape-response procedures; never test escape techniques against a host or third-party system."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Compare two supplied sandbox designs against a threat checklist. Run only the provided harmless sample in a disposable training sandbox, then document its permissions, network policy, resource caps and teardown verification."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Compare two supplied sandbox designs against a threat checklist. Run only the provided harmless sample in a disposable training sandbox, then document its permissions, network policy, resource caps and teardown verification.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-08",
    "course": "04",
    "title": "Data Exfiltration, Memory Poisoning & Retrieval Risks",
    "objective": "Identify data leakage paths through context, memory, retrieval and tool outputs.",
    "learningGoal": "Explain, apply and verify the security controls for data exfiltration, memory poisoning & retrieval risks.",
    "time": "60–90 min",
    "prerequisite": "Sandboxed Execution & Isolation Principles",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Sensitive data can leave through model responses, tool parameters, logs, traces, caches, vector stores or downstream integrations. Memory can preserve stale or malicious instructions across tasks; retrieval can surface content from the wrong tenant or classification. Apply data minimization, tenant-aware access filters, provenance labels, retention limits, secret redaction and output controls. Treat model-generated summaries as derived data that still needs access control.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Sensitive data can leave through model responses, tool parameters, logs, traces, caches, vector stores or downstream integrations. Memory can preserve stale or malicious instructions across tasks; retrieval can surface content from the wrong tenant or classification. Apply data minimization, tenant-aware access filters, provenance labels, retention limits, secret redaction and output controls. Treat model-generated summaries as derived data that still needs access control."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Inspect a synthetic retrieval index with mixed fictional tenants and classifications. Find policy gaps that could expose records, then define filtering, retention and audit checks without using real personal data."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Inspect a synthetic retrieval index with mixed fictional tenants and classifications. Find policy gaps that could expose records, then define filtering, retention and audit checks without using real personal data.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-09",
    "course": "04",
    "title": "Least Privilege & Capability-Based Tool Design",
    "objective": "Reduce agent authority through narrow capabilities, scoped resources and explicit policy enforcement.",
    "learningGoal": "Explain, apply and verify the security controls for least privilege & capability-based tool design.",
    "time": "60–90 min",
    "prerequisite": "Data Exfiltration, Memory Poisoning & Retrieval Risks",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Grant each tool only the actions and resources required for a task. Prefer narrow capabilities such as reading one approved record over broad filesystem or account access. Separate read from write capabilities, use short-lived grants, and enforce policy in trusted code at the point of action. Monitor privilege changes and ensure an agent cannot grant itself additional authority through a prompt or tool result.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Grant each tool only the actions and resources required for a task. Prefer narrow capabilities such as reading one approved record over broad filesystem or account access. Separate read from write capabilities, use short-lived grants, and enforce policy in trusted code at the point of action. Monitor privilege changes and ensure an agent cannot grant itself additional authority through a prompt or tool result."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Transform a broad fictional admin tool into task-specific read and submit capabilities. Define permitted resources, denied actions, expiry, approval conditions and negative tests."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Transform a broad fictional admin tool into task-specific read and submit capabilities. Define permitted resources, denied actions, expiry, approval conditions and negative tests.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-10",
    "course": "04",
    "title": "Memory, Context Isolation & Retrieval Controls",
    "objective": "Secure short-term context, persistent memory and retrieval pipelines against contamination and cross-user access.",
    "learningGoal": "Explain, apply and verify the security controls for memory, context isolation & retrieval controls.",
    "time": "60–90 min",
    "prerequisite": "Least Privilege & Capability-Based Tool Design",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Separate conversation context from durable memory and distinguish user preferences from factual records and executable instructions. Store provenance, owner, sensitivity and expiry metadata. Apply authorization before retrieval and again before disclosure; do not assume a vector similarity match implies permission. Provide deletion and correction workflows, and test whether one session can influence another.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Separate conversation context from durable memory and distinguish user preferences from factual records and executable instructions. Store provenance, owner, sensitivity and expiry metadata. Apply authorization before retrieval and again before disclosure; do not assume a vector similarity match implies permission. Provide deletion and correction workflows, and test whether one session can influence another."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Design a memory schema for a fictional assistant. Include tenant/user scope, source, timestamp, sensitivity, retention and trust label. Test a set of mock retrieval queries for unauthorized cross-user results."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Design a memory schema for a fictional assistant. Include tenant/user scope, source, timestamp, sensitivity, retention and trust label. Test a set of mock retrieval queries for unauthorized cross-user results.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-11",
    "course": "04",
    "title": "MCP & Agent-to-Agent Communication Security",
    "objective": "Define trust, identity, authorization and validation requirements for tool protocols and agent handoffs.",
    "learningGoal": "Explain, apply and verify the security controls for mcp & agent-to-agent communication security.",
    "time": "60–90 min",
    "prerequisite": "Memory, Context Isolation & Retrieval Controls",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Protocol connectivity does not establish trust. For MCP-style tool servers and agent-to-agent messages, authenticate endpoints, validate schemas, constrain capabilities, protect transport, and make authorization decisions at each boundary. Document which party owns policy enforcement, how tool descriptions are reviewed, and how delegated requests retain user and purpose context. Treat remote tool metadata and peer messages as untrusted until validated.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Protocol connectivity does not establish trust. For MCP-style tool servers and agent-to-agent messages, authenticate endpoints, validate schemas, constrain capabilities, protect transport, and make authorization decisions at each boundary. Document which party owns policy enforcement, how tool descriptions are reviewed, and how delegated requests retain user and purpose context. Treat remote tool metadata and peer messages as untrusted until validated."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Review a fictional multi-agent sequence and server registry. Identify missing peer authentication, broad tool exposure, unverified metadata and lost caller context. Produce a control matrix for each handoff."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Review a fictional multi-agent sequence and server registry. Identify missing peer authentication, broad tool exposure, unverified metadata and lost caller context. Produce a control matrix for each handoff.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-12",
    "course": "04",
    "title": "Human Approval, Action Gating & Safe Autonomy",
    "objective": "Set risk-based approval gates and bounded autonomy for consequential agent actions.",
    "learningGoal": "Explain, apply and verify the security controls for human approval, action gating & safe autonomy.",
    "time": "60–90 min",
    "prerequisite": "MCP & Agent-to-Agent Communication Security",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Autonomy should be proportional to impact, reversibility and uncertainty. Define actions that are read-only, reversible, sensitive or high impact. Require human confirmation for irreversible or external side effects, show the exact action and target, and revalidate permissions after approval. Approval should not be a vague blanket consent; record approver, scope, timestamp and outcome. Include stop controls, budgets and escalation paths.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Autonomy should be proportional to impact, reversibility and uncertainty. Define actions that are read-only, reversible, sensitive or high impact. Require human confirmation for irreversible or external side effects, show the exact action and target, and revalidate permissions after approval. Approval should not be a vague blanket consent; record approver, scope, timestamp and outcome. Include stop controls, budgets and escalation paths."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Classify a fictional set of agent actions by impact and reversibility. Design approval prompts and policy gates for each class, then test that approval for one target cannot authorize a different target."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Classify a fictional set of agent actions by impact and reversibility. Design approval prompts and policy gates for each class, then test that approval for one target cannot authorize a different target.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-13",
    "course": "04",
    "title": "Telemetry, Audit Trails & Abuse Detection",
    "objective": "Specify logs and detection signals that make agent actions attributable and reviewable.",
    "learningGoal": "Explain, apply and verify the security controls for telemetry, audit trails & abuse detection.",
    "time": "60–90 min",
    "prerequisite": "Human Approval, Action Gating & Safe Autonomy",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Record user/session identity, agent and model version, policy decision, tool name, validated parameters, resource target, approval state, timestamps, result status and correlation identifiers. Avoid logging secrets or unnecessary prompt content; use redaction and access controls. Correlate model activity with tool-side audit records because model traces alone are not authoritative evidence. Define detections for unusual tool sequences, denied-action bursts, abnormal volume and repeated approval failures.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Record user/session identity, agent and model version, policy decision, tool name, validated parameters, resource target, approval state, timestamps, result status and correlation identifiers. Avoid logging secrets or unnecessary prompt content; use redaction and access controls. Correlate model activity with tool-side audit records because model traces alone are not authoritative evidence. Define detections for unusual tool sequences, denied-action bursts, abnormal volume and repeated approval failures."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Create a logging schema and investigate a synthetic event bundle. Reconstruct the action chain, identify missing attribution, and draft one detection rule with expected false positives and a verification query."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Create a logging schema and investigate a synthetic event bundle. Reconstruct the action chain, identify missing attribution, and draft one detection rule with expected false positives and a verification query.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-14",
    "course": "04",
    "title": "Incident Response for Agent Abuse",
    "objective": "Prepare containment, evidence preservation, credential response and recovery for an agent security incident.",
    "learningGoal": "Explain, apply and verify the security controls for incident response for agent abuse.",
    "time": "60–90 min",
    "prerequisite": "Telemetry, Audit Trails & Abuse Detection",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "An agent incident may involve unauthorized tool actions, data exposure, poisoned memory, compromised connectors or runaway resource use. Preserve relevant logs and configuration snapshots; suspend or narrow the affected capability; revoke exposed credentials; isolate the affected workflow; and assess downstream effects. Coordinate privacy, legal and service owners as required. Recovery includes fixing the root cause, validating permissions, clearing or rebuilding affected memory, rotating secrets and monitoring for recurrence.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "An agent incident may involve unauthorized tool actions, data exposure, poisoned memory, compromised connectors or runaway resource use. Preserve relevant logs and configuration snapshots; suspend or narrow the affected capability; revoke exposed credentials; isolate the affected workflow; and assess downstream effects. Coordinate privacy, legal and service owners as required. Recovery includes fixing the root cause, validating permissions, clearing or rebuilding affected memory, rotating secrets and monitoring for recurrence."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Run a tabletop using a fictional agent that attempted an unauthorized file share. Create a timeline, containment decision, evidence list, notification owners, recovery checks and lessons-learned actions."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Run a tabletop using a fictional agent that attempted an unauthorized file share. Create a timeline, containment decision, evidence list, notification owners, recovery checks and lessons-learned actions.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-15",
    "course": "04",
    "title": "Multi-Agent Cascades & Orchestration Failure",
    "objective": "Analyze how delegated tasks, shared state and retries can amplify errors or unauthorized behavior.",
    "learningGoal": "Explain, apply and verify the security controls for multi-agent cascades & orchestration failure.",
    "time": "60–90 min",
    "prerequisite": "Incident Response for Agent Abuse",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Multiple agents create additional trust boundaries and can propagate incorrect assumptions, malicious content or excessive requests. Define delegation contracts, per-agent identities, task scopes, message provenance, cycle limits and shared-state access. Enforce global budgets and deadlines, prevent uncontrolled retries, and ensure each agent's tool permissions are independently constrained. A supervisor agent is not a substitute for execution-layer controls.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Multiple agents create additional trust boundaries and can propagate incorrect assumptions, malicious content or excessive requests. Define delegation contracts, per-agent identities, task scopes, message provenance, cycle limits and shared-state access. Enforce global budgets and deadlines, prevent uncontrolled retries, and ensure each agent's tool permissions are independently constrained. A supervisor agent is not a substitute for execution-layer controls."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Map a mock planner-worker-reviewer workflow. Simulate a harmless malformed task message and trace how it could cascade. Add validation, bounded retries, stop conditions and per-agent permissions."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Map a mock planner-worker-reviewer workflow. Simulate a harmless malformed task message and trace how it could cascade. Add validation, bounded retries, stop conditions and per-agent permissions.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  },
  {
    "id": "agentsec-16",
    "course": "04",
    "title": "Continuous Evaluation, Release Gates & Secure Capstone",
    "objective": "Build repeatable security evaluations and demonstrate a secure agent design from threat model through regression tests.",
    "learningGoal": "Explain, apply and verify the security controls for continuous evaluation, release gates & secure capstone.",
    "time": "60–90 min",
    "prerequisite": "Multi-Agent Cascades & Orchestration Failure",
    "concepts": [
      "AI agent security",
      "trust boundaries",
      "authorization",
      "verification",
      "risk-based controls"
    ],
    "read": "Evaluation must test the whole application: model behavior, tool adapters, policy enforcement, retrieval, memory, identity, logging and deployment configuration. Maintain versioned test cases for expected and adversarial inputs, include regression checks after model or tool changes, and define release gates for critical failures. Track coverage and residual risk; a passing benchmark is not proof of security. Capstone deliverables should be reproducible and use only mock services and synthetic data.",
    "deepDive": [
      {
        "title": "Core model",
        "body": "Evaluation must test the whole application: model behavior, tool adapters, policy enforcement, retrieval, memory, identity, logging and deployment configuration. Maintain versioned test cases for expected and adversarial inputs, include regression checks after model or tool changes, and define release gates for critical failures. Track coverage and residual risk; a passing benchmark is not proof of security. Capstone deliverables should be reproducible and use only mock services and synthetic data."
      },
      {
        "title": "Operational control",
        "body": "Specify the control owner, enforcement point, expected evidence, failure behavior and recovery path. Validate the control outside the model wherever possible."
      },
      {
        "title": "Limitations",
        "body": "Document assumptions, coverage gaps, residual risk and the conditions under which the design must fail closed or require human review."
      }
    ],
    "examples": [
      {
        "title": "Fictional training scenario",
        "body": "Capstone: design a mock autonomous research agent with constrained search and a simulated note-writing tool. Submit architecture and threat model, permission matrix, injection and misuse tests, isolation plan, audit schema, incident playbook, remediation evidence and regression release gate."
      }
    ],
    "case": "Use the fictional scenario in this lesson. Work only with mock services, synthetic records and an isolated training environment.",
    "caseQuestions": [
      "What assets and trust boundaries are in scope?",
      "What is the plausible failure or misuse path?",
      "Which control enforces the intended boundary?",
      "What evidence demonstrates that the control worked?",
      "What limitation or residual risk remains?"
    ],
    "practice": "Complete the bounded review or tabletop and produce a concise evidence-backed security note.",
    "practiceSteps": [
      "Capstone: design a mock autonomous research agent with constrained search and a simulated note-writing tool. Submit architecture and threat model, permission matrix, injection and misuse tests, isolation plan, audit schema, incident playbook, remediation evidence and regression release gate.",
      "Record scope, assumptions, control owner and expected safe behavior.",
      "Run the provided mock test or analyze the synthetic evidence; do not connect to real systems.",
      "Capture expected versus observed behavior, evidence and any gaps.",
      "Recommend a proportionate fix and define a regression test."
    ],
    "mistakes": [
      "Treating model instructions as the sole security control.",
      "Granting broad permissions for convenience.",
      "Using real credentials, personal data or production systems in a lab.",
      "Reporting a test as passed without reproducible evidence."
    ],
    "takeaways": [
      "Map the complete agent workflow and enforce controls at trusted boundaries.",
      "Keep permissions narrow, actions bounded and sensitive effects reviewable.",
      "Use synthetic, authorized exercises and preserve reproducible evidence."
    ],
    "assessmentRubric": [
      "Accurately explains the lesson's security model.",
      "Identifies relevant trust boundaries and failure modes.",
      "Proposes enforceable controls and safe verification.",
      "Documents evidence, limitations and a regression or recovery step."
    ],
    "qa": [
      {
        "q": "Where should critical authorization be enforced?",
        "a": "In trusted application/tool execution code at the point of action, not only in model instructions.",
        "why": "The model can be influenced by untrusted context and is not an authorization boundary."
      }
    ],
    "check": {
      "q": "Which practice provides a defensible security boundary for an agent tool?",
      "options": [
        "Rely on a prompt that says not to misuse the tool.",
        "Give the agent administrator access and monitor it.",
        "Validate identity, scope and parameters in trusted code before execution.",
        "Trust any tool description returned by a remote server."
      ],
      "answer": "Validate identity, scope and parameters in trusted code before execution.",
      "why": "Execution-layer authorization and validation constrain actions regardless of model output."
    },
    "reflection": "Which trust boundary in this design is least well evidenced, and what safe test would increase confidence?"
  }
];
