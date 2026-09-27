/* NorthStar 2.0 · first authored lesson */
window.NORTHSTAR_2_0_AUTHORED = {
  "cf-01": {
  "objective": "Explain what a computer does by tracing input, processing, memory, storage and output, then identify the security boundary relevant to a simple device scenario.",
  "learningGoal": "Build one reusable model of a computer: components exchange data and instructions, while software and users interact through defined interfaces and permissions.",
  "time": "35–45 min",
  "prerequisite": "None",
  "read": "A computer is an electronic system that accepts input, processes data according to instructions, stores information and produces output. It is not just the CPU: it is a coordinated set of hardware, firmware, operating-system services, applications, data and people.\n\nA useful mental model is a photo opened on a laptop. The photo persists on storage. The application requests it; the operating system manages access and loads the needed data into RAM. The CPU executes instructions that transform or interpret the data, and the graphics/display path presents the result. Input devices let a person interact; output devices return results. Exact details vary by device and operating system.\n\nSecurity depends on what is happening and where. A stored file, a running application and data sent over a network have different exposure points and need different protections. First identify the asset, state, actor and boundary; then ask what evidence supports a conclusion.",
  "concepts": [
    "Input",
    "Processing",
    "Output",
    "Hardware",
    "Software",
    "CPU",
    "RAM",
    "Persistent storage"
  ],
  "glossary": [
    [
      "Computer",
      "A system that accepts input, processes data using instructions, stores information and produces output."
    ],
    [
      "Hardware",
      "Physical components such as the CPU, memory, storage, keyboard and display."
    ],
    [
      "Software",
      "Programs and operating-system services that provide instructions and coordinate tasks."
    ],
    [
      "CPU",
      "The processor that executes program instructions."
    ],
    [
      "RAM",
      "Fast working memory used by active programs and data; typically volatile."
    ],
    [
      "Persistent storage",
      "A device or medium that retains data when power is off, such as an SSD."
    ],
    [
      "Operating system",
      "System software that manages resources and provides controlled services to applications."
    ]
  ],
  "example": "When you open a photo, the application asks the operating system to read the file. Data is brought from storage into RAM; the CPU executes instructions and the display system renders the image. This is a simplified model: actual systems may cache, decode and process data across several components.",
  "visual": {
    "title": "From input to output",
    "caption": "Follow data and instructions through a typical computer; components and exact paths vary.",
    "steps": [
      "Input: user action or sensor",
      "Software requests a task",
      "OS coordinates access and resources",
      "CPU executes instructions using working data in RAM",
      "Storage retains files; output presents results"
    ]
  },
  "case": "A laptop is reported stolen while powered off. The owner says the drive is encrypted. Identify what encryption may protect, what remains at risk, and what evidence is needed before making a claim about the device.",
  "caseQuestions": [
    "Which asset and device state are in scope?",
    "What does full-disk encryption protect when the laptop is powered off, and what does it not establish?",
    "Which facts need verification, such as encryption status, key protection and last known device state?",
    "What safe next steps and records would support the incident response?"
  ],
  "mistakes": [
    "Calling the CPU the whole computer.",
    "Treating RAM and persistent storage as interchangeable.",
    "Assuming encryption proves the device is safe or that every data copy is protected.",
    "Presenting an assumption as an observed fact."
  ],
  "practice": "Create a one-page system sketch for the photo example. Label the main components, show the simplified data path, and annotate one boundary where access is controlled.",
  "evidence": "Submit a labeled input-processing-storage-output sketch and a short note separating observed facts, assumptions and unknowns in the stolen-laptop case.",
  "check": {
    "q": "A laptop is powered off and its storage is confirmed to use full-disk encryption. Which conclusion is justified?",
    "options": [
      "All information is guaranteed safe in every situation.",
      "Encryption can help protect stored data while the device is off, but device state and other exposure paths still need verification.",
      "The CPU encrypts every network transmission automatically.",
      "The laptop cannot be compromised."
    ],
    "answer": "Encryption can help protect stored data while the device is off, but device state and other exposure paths still need verification.",
    "why": "A control has a defined scope. Verify the encryption configuration and consider other copies, credentials and device states before concluding."
  },
  "highlights": [
    "A computer combines hardware, software, data and users.",
    "Trace one task to understand how components cooperate.",
    "Match security controls to the asset, state and boundary."
  ],
  "notes": [
    "RAM is typically volatile; persistent storage is designed to retain data without power.",
    "The operating system mediates many resource and permission decisions, but firmware and hardware also matter."
  ],
  "takeaways": [
    "Input, processing, storage and output describe a useful basic computer model.",
    "A CPU is one component within a larger system.",
    "Security analysis starts by defining the asset, actor, state and boundary."
  ],
  "practiceSteps": [
    "Sketch the photo task from user input to visible output.",
    "Label CPU, RAM, storage, operating system and application where they participate.",
    "Mark where access to the file is mediated and what changes when the application runs.",
    "For the stolen-laptop case, list verified facts separately from assumptions.",
    "Write one cautious conclusion and the evidence needed to strengthen it."
  ],
  "reflection": "Which part of your computer model was easiest to confuse with another component, and what example helped distinguish them?",
  "qa": [
    {
      "q": "Is a computer just a CPU?",
      "a": "No. The CPU executes instructions as part of a system that also includes memory, storage, input/output, software and users.",
      "why": "A task requires components to cooperate."
    },
    {
      "q": "How are RAM and storage different?",
      "a": "RAM is working memory for active tasks and is typically volatile; persistent storage retains files when power is off.",
      "why": "The distinction helps explain both performance and data exposure."
    },
    {
      "q": "Does encryption alone prove a stolen laptop is safe?",
      "a": "No. Verify the encryption state and consider keys, unlocked states, synced data, backups and other access paths.",
      "why": "Controls protect specific assets under specific conditions."
    }
  ],
  "sections": [],
  "why": "This model supports later lessons on operating systems, files, networks, programming and cybersecurity controls.",
  "competency": "Describe the components and trace a simple task; identify a relevant security boundary and distinguish evidence from assumptions.",
  "deepDive": [
    {
      "title": "Instruction and data",
      "body": "Instructions describe operations; data is what those operations act on. In practice, both are represented as bits, but software, formats and execution context give them meaning."
    },
    {
      "title": "State changes and security",
      "body": "A powered-off device, an unlocked session and an application transmitting data expose different attack surfaces. Identify the current state before selecting controls or interpreting evidence."
    }
  ],
  "assessmentRubric": [
    "Correctly distinguishes CPU, RAM, storage, OS and application roles.",
    "Shows a coherent simplified task flow.",
    "Identifies a relevant security boundary.",
    "Separates verified facts from assumptions and states a limitation."
  ],
  "references": [
    {
      "name": "NIST NICE Framework Resource Center",
      "url": "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/about"
    }
  ]
},
 "agentsec-01": {
  "learningGoal":"Trace an agent request through its runtime components and identify where identity, authorization and audit controls must operate.",
  "read":"An AI agent is a software system that uses a model to interpret a goal and select actions through an orchestrator and connected tools. Review the model separately from the surrounding application: the model may propose an action, but application code must enforce identity, authorization, input validation, action limits and logging. A model response is not an authorization decision.\n\nA typical request enters through an authenticated user or service, is normalized by the application, and is passed to an orchestrator with bounded context. The orchestrator calls a model, validates any structured response, checks whether a proposed tool call is permitted, invokes the tool using a scoped identity, and returns a filtered result. Each transition is a trust boundary. Record what data crosses it, which principal acts, and what evidence is retained.\n\nSome agents also use retrieval, persistent memory, delegation or multi-step loops. These features add state transitions and data paths. Document the actual deployed design rather than assuming all agents share one architecture.",
  "why":"Architecture mapping reveals where data, authority and side effects cross components, making it possible to assign enforceable controls and evidence requirements.",
  "deepDive":[{"title":"Model output is untrusted input","body":"Parse tool proposals against a strict schema, reject unknown tools and validate every argument against application policy before execution."},{"title":"Track identity end to end","body":"Distinguish the human requester, agent runtime and downstream service identities. Avoid broad shared credentials and record the acting principal for each operation."},{"title":"Map state and evidence","body":"Show conversation context, retrieved content, tool outputs and persistent memory separately. Define access, retention, redaction and deletion controls."}],
  "examples":[{"title":"Read-only support assistant","body":"An assistant summarizes tickets and retrieves account status. The application authenticates the operator, scopes ticket access, exposes only approved read tools, validates identifiers and records actor, tool, time and outcome. Any write action uses a separate authorized workflow."}],
  "case":"A fictional support assistant can read tickets and reset passwords. Map the model endpoint, orchestrator, ticket API and identity API. Identify which component authenticates the operator, where reset permission is enforced, and what audit events reconstruct each action.",
  "caseQuestions":["Which component authenticates the human requester?","Where is permission for a consequential action checked?","Which identity is used for each downstream call?","What events are needed to reconstruct a tool action?"],
  "practice":"Draw and annotate a system architecture and trust-boundary diagram for the fictional assistant.",
  "practiceSteps":["List components, data stores, human roles and external services.","Draw request, model, tool and response paths with directional arrows.","Mark each trust boundary and label data and identity crossing it.","Assign a control and audit event to every action boundary.","Identify one failure path and one data-minimization improvement.","Submit the diagram with assumptions and limitations."],
  "assessmentRubric":["Diagram includes the key components and directional data flows.","Trust boundaries, principals and enforcement points are correctly identified.","Audit evidence and at least one failure path are addressed.","Conclusions distinguish known facts from assumptions."],
  "qa":[{"q":"Does a system prompt enforce permission to call a password-reset tool?","a":"No. Application-controlled authorization must verify the trusted identity and policy before execution.","why":"Instructions guide model behavior; they do not replace a deterministic enforcement boundary."}],
  "check":{"q":"Where should authorization for a sensitive tool call be enforced?","options":["Only in the system prompt","In application policy checks before execution","After the tool has completed","By assuming every signed-in user is authorized"],"answer":"In application policy checks before execution","why":"The check must occur before the side effect and use trusted identity and policy data."}
 
 ,"agentsec-02":{
  "learningGoal":"Trace a request across human, agent and service identities, then specify least-privilege authorization at each boundary.",
  "read":"Identity answers which principal is acting; authorization determines which action that principal may perform on which resource under which conditions. Agent workflows often involve a human requester, a web application, an agent runtime, a connector identity and a downstream service. These principals are not interchangeable. A service account with broad rights can become a confused deputy if it performs an action requested by a less-privileged user without preserving that user's scope.\n\nCreate an authorization matrix with principal, resource, action, scope, decision point and evidence. Prefer delegated, user-scoped access when appropriate; otherwise constrain service identities to the minimum operations and resources required. Enforce decisions in trusted application or service code before side effects. Treat retrieved documents, model output and tool descriptions as untrusted data, not permission grants. Include tenant boundaries, deny-by-default behavior, explicit approval for high-impact actions and a defined response to policy-service failure.",
  "why":"An end-to-end identity trace exposes privilege amplification, cross-tenant access and missing enforcement that are obscured when the agent is treated as one actor.",
  "deepDive":[{"title":"Principal chain","body":"For each hop, record the authenticated caller, credential issuer, audience, delegated subject and service identity. Verify that logs retain the human initiator as well as the technical principal."},{"title":"Authorization decision","body":"Evaluate action and resource together, including tenant, record ownership, sensitivity and task context. Do not accept a model-generated claim of permission."},{"title":"Failure behavior","body":"Specify whether missing identity, stale policy, unknown tool or authorization-service outage causes denial, safe read-only fallback or human escalation. Test that no side effect occurs on denial."}],
  "examples":[{"title":"Ticket assistant role matrix","body":"A fictional help-desk agent can read tickets and add internal notes. Support staff may read tickets in their assigned queue; supervisors may reassign within their region. The connector uses a service identity, so the application must independently enforce the requester's role, queue and ticket scope before each call. Password reset is out of scope and must be rejected."}],
  "case":"Review a synthetic role matrix and five mock tool-call requests. One request attempts to read a different tenant's ticket, one asks for a prohibited password reset, and one has an expired delegated token. Decide allow/deny/escalate and state the trusted evidence used.",
  "caseQuestions":["What are the distinct principals in the request chain?","Which attributes constrain access to the requested resource?","Where is the final authorization decision enforced?","What must be recorded to reconstruct a denied or allowed action?"],
  "practice":"Produce an authorization matrix and decision table for the fictional ticket assistant.",
  "practiceSteps":["List human roles, runtime identities, connector identities and downstream services.","For each tool, specify permitted action, resource scope and tenant boundary.","Evaluate the five synthetic requests against the written policy.","Define deny-by-default and outage behavior for missing or stale authorization data.","Specify audit fields and a negative regression test for each prohibited action."],
  "assessmentRubric":["Correctly distinguishes user and service principals.","Defines least-privilege action and resource scopes.","Applies policy consistently to all sample requests, including denials.","Includes pre-execution enforcement, audit evidence and failure behavior."],
  "qa":[{"q":"Why can a broad service account create a confused-deputy risk?","a":"The agent may use the service's authority to perform an action the requesting user is not allowed to perform.","why":"The application must preserve and enforce the user's authorization context rather than blindly inheriting connector privileges."}],
  "check":{"q":"A signed-in user asks an agent to retrieve a record from another tenant. What should the application do?","options":["Allow it because the user is authenticated","Ask the model whether the request seems legitimate","Deny the request using trusted tenant and resource authorization data","Use the connector's broad service permissions"],"answer":"Deny the request using trusted tenant and resource authorization data","why":"Authentication alone does not grant resource access; authorization must be checked before retrieval."}
 },
 "agentsec-03":{
  "learningGoal":"Differentiate direct and indirect prompt injection, identify the affected trust boundary, and design layered mitigations with measurable tests.",
  "read":"Prompt injection is an attempt to influence model behavior through input content that conflicts with the application's intended task or policy. Direct injection is supplied in the user's prompt. Indirect injection is embedded in material the system retrieves or processes, such as a document, webpage, email or tool result. The key security problem is not simply unusual wording: untrusted content may be interpreted as instructions and influence a proposed response or action.\n\nInstruction/data separation is a useful design goal, but labels, delimiters and system prompts are not reliable enforcement boundaries by themselves. Reduce impact through narrow tool capabilities, trusted application authorization, constrained structured outputs, context minimization, content provenance, validation of tool arguments and human approval for consequential actions. Assume detection can fail. Design so that an injected instruction cannot independently grant access, disclose secrets or trigger a sensitive side effect.",
  "why":"A threat model that follows untrusted content to an action boundary helps teams prevent model influence from becoming unauthorized system behavior.",
  "deepDive":[{"title":"Trace the injection path","body":"Identify the untrusted source, retrieval or parsing step, context assembly, model proposal, tool adapter and resulting side effect. Mark where provenance may be lost."},{"title":"Layer controls by consequence","body":"For low-impact summarization, label sources and validate output. For tool use, independently authorize each operation and constrain arguments. For destructive or externally visible actions, require specific approval and provide a reversible or staged workflow where feasible."},{"title":"Test the security property","body":"Use benign synthetic adversarial strings in an isolated mock environment. Test both expected allowed tasks and prohibited actions. Record whether the policy gate blocked the side effect, not merely whether the model produced a refusal sentence."}],
  "examples":[{"title":"Retrieved document asks for a secret","body":"A mock knowledge-base page contains ordinary troubleshooting content plus a line instructing the agent to reveal a stored token and send it to an external address. The safe design treats the page as data, does not place secrets in model context, exposes no arbitrary-send capability, and rejects any unauthorized outbound action at the application policy gate."}],
  "case":"Analyze three synthetic inputs: a user directly asks to ignore policy; a retrieved page asks the agent to disclose a secret; and a tool response contains an instruction to call another tool. For each, trace the data source, possible model influence, allowed task and control that prevents unauthorized effects.",
  "caseQuestions":["How does direct injection differ from indirect injection by source?","Which content is untrusted in each scenario, and where is provenance attached?","What control prevents an injected instruction from authorizing a tool call?","What evidence proves a prohibited side effect did not occur?"],
  "practice":"Write a threat-path diagram and a small test plan for the mock agent, without using live services or real secrets.",
  "practiceSteps":["Mark trusted policy, user input, retrieved content and tool output as separate data classes.","Draw the path from each injection source to any model proposal and tool boundary.","Define allowed and prohibited actions, including the protected asset and impact.","Run only the provided mock cases; inspect policy decisions and synthetic audit events.","Record pass/fail evidence, limitations and one regression test for each mitigation."],
  "assessmentRubric":["Accurately distinguishes injection types and trust sources.","Maps the path to a plausible consequence without treating model text as proof of execution.","Proposes layered, enforceable mitigations matched to impact.","Defines reproducible tests and evidence for the security property."],
  "qa":[{"q":"Does adding delimiters around retrieved text guarantee protection from indirect prompt injection?","a":"No. Delimiters may help communicate structure, but enforcement must not depend on the model reliably obeying them.","why":"Retrieved content remains untrusted; tool permissions and action checks need trusted controls outside the model."}],
  "check":{"q":"A retrieved document tells an agent to email confidential data to an outside address. Which control most directly prevents disclosure?","options":["Add a stronger warning to the prompt only","Allow the model to decide whether the document is trustworthy","Enforce recipient, data and action authorization in trusted code before sending","Hide the document's source from the user"],"answer":"Enforce recipient, data and action authorization in trusted code before sending","why":"The application must authorize the actual side effect and its data scope regardless of model influence."}
 },
 "agentsec-04":{
  "learningGoal":"Specify a secure credential and session lifecycle for agent-to-tool access, including scoped issuance, storage, expiry, revocation and audit.",
  "read":"Agent security depends on the credentials available to its runtime and connectors. A secret placed in a prompt, conversation history, retrieval index, generated code or ordinary log may be exposed to model context, users or downstream systems. Keep credentials outside model-visible content in an approved secret-management system. Prefer short-lived, narrowly scoped tokens; validate issuer, audience, expiry, scope and caller at the service boundary. Separate development, test and production credentials, and avoid shared static secrets where a stronger workload identity or delegated authorization is available.\n\nA session is more than a chat transcript: it can include identity, tenant, authorization state, tool outputs and memory. Bind session state to the authenticated principal and intended purpose. Prevent one user's context or cached tool results from being reused in another user's session. Define expiration, logout, revocation, rotation and incident procedures for suspected exposure. Logs should support accountability without recording raw secrets or unnecessary personal data.",
  "why":"Credential and session controls limit the blast radius of a compromised prompt, runtime, connector or user session and make access revocable and auditable.",
  "deepDive":[{"title":"Credential lifecycle","body":"Document who issues each credential, its owner, permitted audience and scope, storage location, expiry, rotation method and revocation path. Use synthetic values in training; never paste real tokens into a lab or ticket."},{"title":"Session isolation","body":"Key server-side session state to a verified principal and tenant. Test cache keys, retrieval filters and memory access for cross-user leakage. Re-check authorization on consequential operations rather than trusting stale session claims."},{"title":"Exposure response","body":"If a secret may have entered model context or logs, treat it as exposed: revoke or rotate it, identify dependent services, inspect access records, remove unsafe copies where feasible and document residual uncertainty."}],
  "examples":[{"title":"Connector token review","body":"A fictional connector configuration contains a long-lived token with read/write access across all customer accounts. The remediation is to replace it with a short-lived token limited to the required API and tenant, store it outside prompts and logs, validate audience and scope at the API, and add a tested revocation procedure."}],
  "case":"Review a synthetic connector configuration and session trace. Find an overbroad token, a missing audience check, and a cache entry that is not tenant-scoped. Propose fixes and define evidence that demonstrates isolation and revocation.",
  "caseQuestions":["Which components can access the credential, and is it visible to the model?","Are issuer, audience, expiry and scope validated at the point of use?","How is session state isolated across users and tenants?","What steps follow suspected credential exposure?"],
  "practice":"Create a credential inventory and session-security checklist for a fictional agent integration.",
  "practiceSteps":["Inventory mock credentials by owner, purpose, audience, scope, storage, expiry and revocation method.","Identify any secret placed in prompts, memory, generated output or logs and remove it from the proposed design.","Review the synthetic session trace for cross-user or cross-tenant state reuse.","Specify token validation and reauthorization points for tool calls.","Write a tabletop response for suspected token leakage and list the audit evidence required."],
  "assessmentRubric":["Credential inventory captures lifecycle and least-privilege attributes.","Design keeps secrets outside model-visible and ordinary log content.","Session isolation and point-of-use validation are explicit.","Exposure response includes revocation, scope review, evidence and residual-risk notes."],
  "qa":[{"q":"A connector token appears in a model transcript. What is the appropriate assumption?","a":"Treat the token as potentially exposed and follow the credential revocation/rotation procedure.","why":"Once a secret enters model-visible or broadly retained content, its confidentiality cannot be assumed."}],
  "check":{"q":"Which token design best limits risk for an agent that reads one customer's tickets?","options":["A permanent administrator token for all tenants","A short-lived token scoped to the required read operation and customer context","A token copied into the system prompt for convenience","A shared token stored in application logs"],"answer":"A short-lived token scoped to the required read operation and customer context","why":"Short lifetime and narrow scope reduce exposure and constrain potential misuse."}
 }
 ,"agentsec-05":{
  "learningGoal":"Design a secure tool-execution path that validates intent, parameters, authorization and approval before any consequential side effect.",
  "read":"A tool call is a request to cross a software trust boundary. The model may propose a tool and arguments, but the application must treat that proposal as untrusted input. Define a narrow tool contract for each operation: purpose, typed parameters, allowed values, resource scope, maximum batch size, timeout, rate limit, and whether the operation changes state. Reject unknown tools, unexpected fields, invalid types, ambiguous targets and values outside policy. Avoid generic capabilities such as unrestricted shell execution, arbitrary URL fetches or a single connector that can both read and delete when the task needs only read access.\n\nPlace an independent policy gate between model proposal and execution. The gate verifies the initiating user/session, current authorization, resource and tenant scope, action risk, approval status and any execution budget. For high-impact actions, show a human a clear preview of the exact normalized action and target; bind approval to that exact payload, actor and short expiry, and prevent replay. Re-check authorization immediately before execution. If policy lookup, approval validation or audit recording fails, fail closed for sensitive operations.\n\nUse bounded retries, deadlines, tool-call ceilings, idempotency keys where supported, and circuit breakers to limit runaway loops and duplicate side effects. Record safe structured audit events: request/session correlation, tool and operation, policy outcome, approval reference, target identifier, timestamp and result. Do not log secrets or unnecessary personal data. Test the security property at the execution boundary: a refusal in model text is not evidence that an unauthorized action was blocked.",
  "why":"Tool execution is where model influence can become real changes to data, accounts, money or infrastructure. Independent enforcement prevents a prompt or model error from becoming authority.",
  "deepDive":[{"title":"Constrain the contract","body":"Prefer purpose-built operations with typed, allowlisted parameters over open-ended command interfaces. Validate server-side after parsing and before using any value in a downstream request."},{"title":"Gate by action risk","body":"Classify actions by impact and reversibility. Read-only, low-impact operations may run within a defined scope. External communication, sensitive writes, permission changes, payments, production changes and destructive actions need stronger controls and explicit approval appropriate to the risk."},{"title":"Approval integrity","body":"Approval should name the actor, operation, target, normalized parameters, expiration and policy context. If any material parameter changes, require a new approval. Bind approval to a single-use nonce or equivalent replay protection."},{"title":"Operational guardrails","body":"Set maximum tool calls, total runtime, retry count, data volume and spend. Ensure cancellation interrupts pending work and downstream requests where possible. Use idempotency or deduplication for retryable writes."}],
  "examples":[{"title":"Invoice assistant action gate","body":"A fictional agent can look up invoices and prepare a payment request. Looking up an invoice is read-only. Initiating payment is high impact: the backend verifies the user's payment role, payee, amount, currency and invoice status; presents the exact transaction for approval; then executes only if the approval is current and matches the unchanged request. A model-generated 'approved' field is ignored."}],
  "case":"A mock operations agent receives a request to bulk-delete 500 stale records. The model proposes a deletion tool call, but the user role allows only read access, the target set is not enumerated, and no approval token exists. Trace the policy checks and determine the safe outcome. Then analyze a second, authorized dry-run request with a complete preview.",
  "caseQuestions":["Why is model output not an authorization decision?","Which input and policy checks must happen before a tool executes?","What fields should a high-impact approval bind to?","How do limits, idempotency and audit evidence reduce operational risk?"],
  "practice":"Create a tool contract and policy-gate test matrix for the fictional invoice assistant.",
  "practiceSteps":["Define one read-only operation and one high-impact write operation with typed schemas.","Write allow/deny conditions for actor, resource, tenant, amount and target scope.","Design a human approval preview bound to normalized parameters, actor and expiry.","Specify fail-closed behavior for invalid input, unavailable policy service, expired approval and changed parameters.","Create positive and negative tests, including duplicate retry, exceeded budget and attempted bulk action; record expected policy outcome and evidence."],
  "assessmentRubric":["Tool schemas are narrow, typed and deny unknown or out-of-scope parameters.","Authorization is independently checked before execution and scoped to the initiating user.","High-impact approval is explicit, time-limited and bound to exact action parameters.","Runtime limits, retry/idempotency behavior, safe audit events and negative tests are specified."],
  "qa":[{"q":"The model returns a JSON tool call with an 'approved': true field. Is that sufficient authorization?","a":"No. The trusted application must independently validate authorization and any required approval.","why":"The model-generated payload is untrusted and cannot grant itself authority."},{"q":"A user approves a payment preview, but the amount changes before execution. What should happen?","a":"Invalidate the approval and require a new approval for the changed normalized transaction.","why":"Approval must be bound to the exact action and parameters, not a general intent."}],
  "check":{"q":"An agent proposes deleting a production resource. What is the correct execution design?","options":["Execute if the model expresses high confidence","Trust a natural-language user request as blanket approval","Validate identity and policy, preview the exact target/action, require the appropriate approval, then re-check before execution","Run the delete and rely on logs to reverse it"],"answer":"Validate identity and policy, preview the exact target/action, require the appropriate approval, then re-check before execution","why":"Sensitive side effects require independent policy enforcement and approval bound to the exact operation."}
 }
};