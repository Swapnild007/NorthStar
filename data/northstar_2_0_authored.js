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
    "What does full-disk encryption protect, and which facts still need verification?",
    "What evidence and safe next steps would support the incident response?"
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
  "highlights": [],
  "notes": [],
  "takeaways": [
    "Input, processing, storage and output form a useful basic model.",
    "The CPU is one component within a larger system.",
    "Security analysis starts with the asset, actor, state and boundary."
  ],
  "practiceSteps": [
    "Sketch the photo task from input to output; label the CPU, RAM, storage, OS and application.",
    "Mark where file access is controlled and what changes when the application runs.",
    "List verified facts separately from assumptions in the stolen-laptop case.",
    "Write a cautious conclusion, one limitation and the evidence needed to strengthen it."
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
    }
  ],
  "sections": [],
  "why": "",
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
  ],
  "studyPlan": [
    [
      "Core model",
      10
    ],
    [
      "Photo data flow",
      10
    ],
    [
      "Security boundary case",
      10
    ],
    [
      "Sketch + check",
      10
    ]
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
 },
  "cf-02": {
    "objective": "Trace how an application requests an OS-managed resource and explain how privilege, identity and permissions constrain that request.",
    "learningGoal": "Distinguish user space from kernel space, process identity from user identity, and authentication from authorization in a concrete OS access flow.",
    "read": "An operating system (OS) coordinates hardware and offers services that applications use. The kernel manages privileged operations such as memory, scheduling and device access; applications normally run in user space and request services through defined interfaces. An application does not simply take control of a file or device: the OS mediates access according to the process's security context and the resource's policy.\\n\\nFor example, when a text editor opens a protected file, it asks the OS to resolve the path and open the file. The OS checks the caller's identity and applicable permissions, then either returns a usable handle or denies the request. A successful login alone does not grant every permission. Administrator/root privileges expand the impact of mistakes or compromise, so use least privilege and elevation only when required.\\n\\nWhen investigating an access problem, record the account, process, resource, time, operation and result. Check policy and logs before assuming malware or a broken OS. Updates address known defects, but patching does not replace access control, isolation or monitoring.",
    "concepts": [
      "kernel",
      "user space",
      "system call",
      "process security context",
      "access control",
      "least privilege",
      "privilege elevation",
      "patch management"
    ],
    "qa": [
      {
        "q": "What mediates an application's request to open a protected file?",
        "a": "The operating system checks the process's security context against the resource's access policy.",
        "why": "The OS provides the enforcement boundary between application requests and protected resources."
      },
      {
        "q": "Does successful authentication mean a user can read every file?",
        "a": "No. Authentication establishes identity; authorization determines which operations that identity may perform.",
        "why": "Identity and permission are separate control decisions."
      }
    ],
    "check": {
      "q": "A standard user launches an editor and requests a restricted file. What should you inspect first?",
      "options": [
        "The account/process context, file policy and access result",
        "Immediately grant administrator rights",
        "Assume the file is encrypted",
        "Disable the OS access controls"
      ],
      "answer": "The account/process context, file policy and access result",
      "why": "Start with observable identity, policy and outcome; avoid unnecessary privilege changes."
    },
    "practice": "On a device you own or are authorized to administer, compare the access result for a normal user and an administrator against a harmless test file. Record the account, file permissions, operation attempted and observed result. Do not change protections on production data."
  },
  "cf-03": {
    "objective": "Explain how filesystems name, organize, protect and persist data, and distinguish deletion from verified secure erasure.",
    "learningGoal": "Use paths, metadata, access permissions and backup knowledge to assess a file's exposure and recovery risk.",
    "read": "A file is a named data object managed by a filesystem. A path locates it in a directory hierarchy; metadata can describe ownership, timestamps, size and permissions. The filesystem maps logical file content to storage, while the operating system enforces access decisions. A storage device provides persistence, not a complete security policy.\\n\\nA shared-folder review should identify the data owner, intended readers and writers, inherited permissions, sharing links and backup locations. Apply least privilege, and check effective access rather than relying only on a folder's visible settings. Encryption at rest can reduce exposure if a device or media is lost, but it does not prevent an authorized, compromised account from reading data while it is available.\\n\\nDeleting a file usually removes or changes references to it; copies may remain in recycle bins, snapshots, synced devices, backups or recoverable storage blocks. Secure disposal therefore depends on the medium, encryption design, retention rules and verified sanitization process. Preserve evidence and follow approved retention and disposal procedures.",
    "concepts": [
      "filesystem",
      "path",
      "metadata",
      "ownership",
      "effective permissions",
      "persistence",
      "snapshot",
      "backup",
      "secure erasure"
    ],
    "qa": [
      {
        "q": "Why is a storage device not enough to determine who can access a file?",
        "a": "Access depends on the filesystem, OS enforcement, identity, permissions and any additional sharing or encryption controls.",
        "why": "Storage and authorization are different layers."
      },
      {
        "q": "Does deleting a file prove that every copy is gone?",
        "a": "No. Backups, snapshots, synced copies and recoverable storage may retain data.",
        "why": "Deletion and secure sanitization are distinct operations."
      }
    ],
    "check": {
      "q": "A confidential file was deleted from a shared folder. What is the sound conclusion?",
      "options": [
        "Deletion alone does not establish that all copies were erased",
        "The data is certainly unrecoverable",
        "The folder permissions no longer matter",
        "Backups are automatically deleted too"
      ],
      "answer": "Deletion alone does not establish that all copies were erased",
      "why": "A defensible conclusion accounts for secondary copies and the actual sanitization method."
    },
    "practice": "Create a small test folder with two harmless text files. Inspect the path, owner and permissions; document which test account can read or write each file. Then list plausible secondary copies that would need checking before claiming a file was fully removed."
  },
  "cf-04": {
    "objective": "Differentiate a stored program from a running process and identify the process attributes relevant to a security investigation.",
    "learningGoal": "Relate process identity, memory, resources and lifecycle to isolation and potential impact.",
    "read": "A program is a set of instructions stored on a device. A process is an executing instance with a lifecycle, memory mappings, open resources and a security context. One program can have several processes, and a process can create child processes. A process is not the same thing as a user account: it runs under an identity and may also have specific privileges or restrictions.\\n\\nThe OS allocates virtual memory and schedules execution. Virtual memory gives processes separated address spaces; it does not make every process harmless or guarantee that vulnerabilities cannot cross boundaries. Applications also hold resources such as file handles and network sockets. When a process exits, some resources are released, while logs and other evidence may persist.\\n\\nFor triage, correlate process name and path with process ID, parent process, start time, user, command line, signature or hash where available, network activity and endpoint alerts. A familiar name is not proof of legitimacy, and an unfamiliar name alone is not proof of compromise. Capture evidence before terminating a process when policy and safety allow.",
    "concepts": [
      "program",
      "process",
      "PID",
      "parent process",
      "virtual memory",
      "scheduler",
      "handle",
      "security context",
      "process isolation"
    ],
    "qa": [
      {
        "q": "What makes a process different from a program?",
        "a": "A program is stored instructions; a process is an executing instance with state, resources and a security context.",
        "why": "The distinction helps explain runtime behavior and evidence."
      },
      {
        "q": "Why is a process name alone weak evidence?",
        "a": "Names can be copied or misleading; path, parent, identity, timing, behavior and corroborating telemetry add context.",
        "why": "Investigation requires multiple observable attributes."
      }
    ],
    "check": {
      "q": "An unknown process has a common system-like name. Which next step is most evidence-based?",
      "options": [
        "Correlate its path, parent, user, start time and behavior",
        "Declare it malicious from the name alone",
        "Delete the executable before recording details",
        "Assume the operating system generated it"
      ],
      "answer": "Correlate its path, parent, user, start time and behavior",
      "why": "A contextual process record supports a reproducible assessment."
    },
    "practice": "Using a trusted process viewer on your own computer, choose one ordinary application process. Record its PID, parent, executable path, user and a visible resource or network attribute. Explain which observations establish normal context and what would still require corroboration."
  },
  "cf-05": {
    "objective": "Trace a basic internet request across interconnected networks and identify where routing and trust boundaries appear.",
    "learningGoal": "Describe the roles of the local device, gateway, ISP, destination network and protocols without confusing routing with identity.",
    "read": "The internet is a network of networks that exchange traffic using common protocols. A device sends traffic through a local network and gateway; routers forward packets toward destination networks, often across an ISP and intermediate networks. The route can change, and the path is not necessarily a single fixed chain.\\n\\nA typical web request also depends on several distinct functions: naming resolves a domain to an address, transport provides communication between endpoints, and the application protocol defines the request and response. IP routing moves packets; it does not by itself prove who controls the destination or whether the application is trustworthy. Local addresses, public addresses and translated addresses can describe different points in the flow.\\n\\nFor a connectivity or security question, define the source device and time, destination name/address, protocol and expected behavior. Use approved network configuration and logs to compare expected with observed traffic. A traceroute or packet capture is a partial observation, not a complete map of every network or a guarantee about ownership. Capture only traffic you are authorized to inspect.",
    "concepts": [
      "internet",
      "packet",
      "router",
      "gateway",
      "ISP",
      "routing",
      "local address",
      "public address",
      "protocol",
      "network boundary"
    ],
    "qa": [
      {
        "q": "What does a router primarily do in this model?",
        "a": "It forwards packets between networks according to routing information.",
        "why": "Routing describes packet forwarding, not application trust or user identity."
      },
      {
        "q": "Does an IP route prove the identity of the destination operator?",
        "a": "No. Address and routing observations need separate ownership and application-context evidence.",
        "why": "Network reachability is not identity verification."
      }
    ],
    "check": {
      "q": "A packet capture shows traffic to a public IP address. What can you conclude from that fact alone?",
      "options": [
        "Traffic was observed to that address at the capture point",
        "The address owner is necessarily the sender's intended service",
        "The application is safe",
        "The full end-to-end route is known"
      ],
      "answer": "Traffic was observed to that address at the capture point",
      "why": "State the observation precisely and avoid claims beyond the capture's vantage point."
    },
    "practice": "Draw a labeled request path from a home laptop to a web service, including local gateway, ISP and destination network. Mark where DNS, routing, transport and application behavior occur, and note two facts the diagram cannot establish without additional evidence."
  },
  "cf-06": {
    "objective": "Distinguish DNS names, IP addresses and transport ports, and use them carefully when describing a network service.",
    "learningGoal": "Interpret a basic connection tuple and recognize the limits of address- and port-based attribution.",
    "read": "A domain name is a human-readable label. DNS can return records that help a client locate a service, while IP addresses identify network interfaces or endpoints within an addressing context. A port number identifies a transport-layer endpoint on a host; it is not a globally unique service identity. TCP and UDP use separate port spaces.\\n\\nA useful connection record includes source IP and port, destination IP and port, transport protocol and time. DNS answers may be cached, load-balanced or changed; one name can map to multiple addresses, and one address can host multiple services. Network address translation can also cause logs at different points to show different address/port pairs.\\n\\nPorts can suggest what service might be present, but services can use nonstandard ports and port numbers can be reused. Confirm with authorized service inventory, endpoint telemetry, protocol evidence and configuration. Do not treat an IP address as proof of a person or organization. When reviewing suspicious DNS, compare query name, response, client, timing, frequency and baseline; retain uncertainty where resolver or sensor visibility is incomplete.",
    "concepts": [
      "DNS",
      "A/AAAA record",
      "resolver",
      "IP address",
      "TCP port",
      "UDP port",
      "socket",
      "connection tuple",
      "NAT",
      "service attribution"
    ],
    "qa": [
      {
        "q": "What information does a five-part connection tuple commonly capture?",
        "a": "Source address and port, destination address and port, and transport protocol.",
        "why": "These fields distinguish a flow at a particular observation point."
      },
      {
        "q": "Does destination port 443 prove the traffic is safe HTTPS?",
        "a": "No. Port conventions are hints; verify the actual protocol and certificate/application context.",
        "why": "Port numbers alone do not establish service behavior."
      }
    ],
    "check": {
      "q": "A host makes repeated DNS queries for a newly observed domain. Which assessment is justified first?",
      "options": [
        "Record the client, queried name, response, timing and baseline for investigation",
        "Attribute the domain to a specific person immediately",
        "Assume every new domain is malicious",
        "Block all DNS traffic without checking impact"
      ],
      "answer": "Record the client, queried name, response, timing and baseline for investigation",
      "why": "Contextual evidence supports triage while limiting false attribution."
    },
    "practice": "Interpret a synthetic flow record with source 10.0.0.8:51520, destination 203.0.113.20:443, TCP. State what each field means, what the port suggests but cannot prove, and what additional evidence would confirm the application protocol."
  },
  "cf-07": {
    "objective": "Explain the browser-to-server request sequence and distinguish transport protection from endpoint and application security.",
    "learningGoal": "Identify what DNS, connection setup, TLS and HTTP each contribute, and interpret the limits of a certificate warning.",
    "read": "When a user opens a website, the browser may first resolve its hostname through DNS, then establish a network connection to a server. With HTTPS, TLS negotiates cryptographic parameters and authenticates the server using certificate validation before HTTP data is exchanged inside the protected channel. The browser then interprets the HTTP response and renders content. Actual connection details vary with protocol versions, proxies, caches and browser behavior.\\n\\nHTTP requests include a method, target and headers, and may include a body. Responses include a status code, headers and optional body. HTTPS protects data in transit against many forms of interception and tampering and helps authenticate the server name, provided validation succeeds. It does not certify that a website is honest, that its code is free of vulnerabilities, or that the user's device is uncompromised.\\n\\nA certificate warning means the browser could not validate an expected security property, such as trust chain, name or validity period. Do not bypass it for sensitive activity. Verify the URL through a trusted channel, check device time and approved network conditions, and report persistent warnings to the service owner or support team.",
    "concepts": [
      "HTTP",
      "request",
      "response",
      "method",
      "status code",
      "header",
      "HTTPS",
      "TLS",
      "certificate",
      "server-name validation"
    ],
    "qa": [
      {
        "q": "What does HTTPS protect, and what does it not guarantee?",
        "a": "It protects the connection's data in transit and supports server authentication; it does not guarantee the site or endpoint is trustworthy.",
        "why": "Transport security and application security are separate."
      },
      {
        "q": "What is a safe response to an unexpected certificate warning?",
        "a": "Do not proceed with sensitive activity; verify the address and investigate the validation issue through a trusted channel.",
        "why": "A warning indicates a failed or uncertain security check."
      }
    ],
    "check": {
      "q": "A page uses a valid HTTPS certificate but asks for a password unexpectedly. What does the certificate establish?",
      "options": [
        "A validated encrypted connection to the named server, not that the request is legitimate",
        "That the page is free of phishing",
        "That the site's code has no vulnerabilities",
        "That the user's device is uncompromised"
      ],
      "answer": "A validated encrypted connection to the named server, not that the request is legitimate",
      "why": "TLS validation does not assess the business legitimacy of page content."
    },
    "practice": "Sketch a browser request sequence from hostname lookup through HTTPS response. Label the role of DNS, connection setup, TLS validation and HTTP. Add one threat TLS helps mitigate and two threats it does not eliminate."
  },
  "cf-08": {
    "objective": "Differentiate authentication, authorization and MFA, and identify common weaknesses in account and recovery workflows.",
    "learningGoal": "Explain factors, sessions, least privilege and account recovery as connected but distinct controls.",
    "read": "Authentication establishes confidence in a claimed identity; authorization determines which actions that identity may perform. A password is a knowledge factor. A possession factor (such as a registered security key) and an inherence factor (such as a biometric) are different categories, but two passwords are not two independent factors. MFA combines factors from distinct categories.\\n\\nAfter authentication, a service often issues a session token so the user does not need to re-enter credentials for every request. Protecting the session matters: theft or misuse of a valid token can bypass the need to replay a password. Recovery flows are also part of the identity boundary; weak recovery can undermine strong login controls.\\n\\nUse unique passwords stored in a reputable password manager, phishing-resistant MFA where supported, and least-privilege access. Keep recovery methods current and protected. Organizations should monitor unusual sign-ins and changes to factors or recovery details, and provide a clear way to report suspected account compromise. MFA lowers risk but cannot eliminate phishing, session theft, social engineering or excessive authorization.",
    "concepts": [
      "authentication",
      "authorization",
      "knowledge factor",
      "possession factor",
      "inherence factor",
      "MFA",
      "session token",
      "recovery",
      "least privilege",
      "phishing-resistant MFA"
    ],
    "qa": [
      {
        "q": "Why are two passwords not normally considered two-factor authentication?",
        "a": "Both are knowledge factors, so they do not provide independent evidence from different factor categories.",
        "why": "MFA requires distinct factor types, not merely multiple prompts."
      },
      {
        "q": "Why must session protection be included in account security?",
        "a": "A stolen valid session token may let an attacker act without repeating the password or MFA challenge.",
        "why": "Authentication is not the only point where account access can be abused."
      }
    ],
    "check": {
      "q": "An employee has a strong password and MFA, but a recovery email account is compromised. Which area needs review?",
      "options": [
        "The recovery path and linked account protections",
        "Only the password length",
        "The employee's monitor resolution",
        "No review; MFA makes recovery irrelevant"
      ],
      "answer": "The recovery path and linked account protections",
      "why": "Recovery mechanisms can become alternate routes into an account."
    },
    "practice": "Map a fictional work account's sign-in, session and recovery paths. Mark the factor types, the permissions granted after login, and at least three points where monitoring or user verification could reduce risk."
  },
  "cf-09": {
    "objective": "Evaluate suspicious messages and downloads using observable indicators and a safe verification workflow.",
    "learningGoal": "Separate evidence-based suspicion from appearance-based assumptions and identify layered controls for social engineering.",
    "read": "Social engineering manipulates context, trust or urgency to influence a person into disclosing information or taking an action. Messages can arrive through email, chat, phone or collaboration tools. A polished logo, familiar display name or grammatical error is not conclusive evidence either way.\\n\\nAssess the sender and reply path, actual link destination, attachment type, requested action, timing, context and whether the request matches an approved process. Avoid opening unexpected attachments or entering credentials through a message link. Verify sensitive requests—especially payments, account changes and credential resets—using a separately obtained, trusted contact method. Report suspicious messages through the organization's approved channel and preserve relevant details.\\n\\nTechnical safeguards reduce exposure: filtering, safe browsing, attachment scanning, sandboxing, restricted macros, MFA and clear reporting procedures. No single control catches every attempt. If a file may have been opened, do not conceal it or perform improvised cleanup; follow the incident-reporting process so responders can preserve evidence and assess scope.",
    "concepts": [
      "social engineering",
      "pretext",
      "urgency cue",
      "sender verification",
      "link destination",
      "attachment",
      "out-of-band verification",
      "sandboxing",
      "reporting"
    ],
    "qa": [
      {
        "q": "Why should a sensitive bank-account change be verified outside the message thread?",
        "a": "A separately sourced contact path reduces reliance on potentially compromised sender details or conversation context.",
        "why": "Independent verification helps defeat impersonation and thread hijacking."
      },
      {
        "q": "Is a misspelling sufficient proof that a message is malicious?",
        "a": "No. It may be a clue, but decisions should use multiple indicators and trusted verification.",
        "why": "Single superficial signals can produce false positives and false negatives."
      }
    ],
    "check": {
      "q": "A familiar vendor emails a new payment account and says the change is urgent. What should happen next?",
      "options": [
        "Verify the change through a known, separate contact channel and follow approval controls",
        "Reply to the same email asking if it is real",
        "Change the payment details immediately",
        "Forward the message to colleagues and ask them to click the link"
      ],
      "answer": "Verify the change through a known, separate contact channel and follow approval controls",
      "why": "High-impact requests need independent verification and established authorization."
    },
    "practice": "Review a fictional message requesting a password reset and an urgent payment change. List observable facts, potential warning signs and unknowns. Write a safe verification and reporting sequence without clicking links or opening files."
  },
  "cf-10": {
    "objective": "Identify fields, records, data types and quality problems that can distort security analysis.",
    "learningGoal": "Assess a small dataset's schema and provenance before drawing conclusions from counts, trends or charts.",
    "read": "A dataset is an organized collection of information. A table contains records (rows) and fields (columns); a field has a meaning and expected data type, such as categorical, numeric, timestamp or identifier. A schema documents those expectations. Identifiers should be treated carefully: an account ID, IP address or device ID is not necessarily a real-world identity.\\n\\nBefore analyzing security events, inspect the source, collection method, time zone, timestamp precision, field definitions, missing values, duplicates and known retention gaps. Check whether records are normalized consistently and whether clocks or pipelines may delay or reorder events. A count can change because of collection coverage or parsing changes rather than an actual change in attacker behavior.\\n\\nKeep data lineage and transformations documented so another analyst can reproduce the result. Charts are useful summaries, but validate the underlying rows and denominators before escalating a finding. Protect sensitive data, restrict access to the dataset and minimize what is copied into reports or practice materials.",
    "concepts": [
      "dataset",
      "table",
      "record",
      "field",
      "schema",
      "data type",
      "identifier",
      "missingness",
      "duplicate",
      "timestamp",
      "lineage",
      "denominator"
    ],
    "qa": [
      {
        "q": "Why should an analyst check timestamp meaning and time zone?",
        "a": "Incorrect or mixed time interpretation can misorder events and distort timelines or correlations.",
        "why": "Temporal integrity is essential to reconstructing activity."
      },
      {
        "q": "Can a rise in logged events automatically prove an increase in attacks?",
        "a": "No. Collection coverage, parsing, duplication and other data-quality changes can also affect counts.",
        "why": "Validate data provenance and measurement before interpreting a trend."
      }
    ],
    "check": {
      "q": "A dashboard shows twice as many failed logins after a logging pipeline update. What should you validate?",
      "options": [
        "Collection coverage, parsing, duplicates, time handling and the underlying event records",
        "Assume the attack rate doubled",
        "Delete the earlier data to make the chart consistent",
        "Ignore the pipeline change"
      ],
      "answer": "Collection coverage, parsing, duplicates, time handling and the underlying event records",
      "why": "A measurement change is a competing explanation that must be tested."
    },
    "practice": "Build a tiny synthetic login-event table with timestamp, user ID, source IP, result and collection source. Add one missing timestamp and one duplicate row. Describe validation checks and explain why a trend claim should wait until these issues are resolved."
  },
  "sf-01": {
    "objective": "Apply a repeatable model to identify assets, actors, actions, trust boundaries and evidence in a small system.",
    "learningGoal": "Build a system map that supports both threat analysis and incident investigation, while labeling assumptions and unknowns.",
    "read": "Begin with the system's purpose and the asset that matters: data, service, identity, device or business process. Identify the actors that interact with it, the actions they can take, and the boundaries where authority or data crosses from one trust domain to another. A boundary is meaningful when it changes who can act, what can be accessed, or which controls apply.\\n\\nFor an employee portal, map the employee browser, identity provider, application service and data store. Mark sign-in, session creation, data requests and administrative operations. At each boundary, ask what is authenticated, what is authorized, what is logged, and what could fail. The diagram is a model, not a complete representation of production; note excluded systems and assumptions.\\n\\nKeep observations separate from hypotheses. A log entry may establish that a request occurred, but not necessarily who physically initiated it or why. Use corroborating records and state uncertainty. This same model helps design prevention controls and structure an investigation.",
    "concepts": [
      "asset",
      "actor",
      "action",
      "trust boundary",
      "attack surface",
      "control",
      "evidence",
      "assumption"
    ],
    "case": "Map a fictional employee portal with browser, identity provider, application and database. Identify three trust boundaries and name one useful evidence source at each.",
    "qa": [
      {
        "q": "What makes a boundary important in a system map?",
        "a": "It marks a change in trust, authority, data exposure or applicable control.",
        "why": "Security controls often enforce rules at transitions between components or trust domains."
      },
      {
        "q": "Does a log entry prove who physically initiated an action?",
        "a": "Not by itself; it is an observation that may need corroboration and context.",
        "why": "Evidence must support the specific claim being made."
      },
      {
        "q": "How should a threat model handle unknowns?",
        "a": "Record assumptions and gaps explicitly, then identify evidence that could resolve high-impact uncertainty.",
        "why": "Visible uncertainty is safer and more useful than hidden assumptions."
      }
    ],
    "check": {
      "q": "A portal logs a successful data request under an employee account. What does that establish most directly?",
      "options": [
        "A request was recorded as successful for that account",
        "The employee personally initiated it",
        "The account was not compromised",
        "The data was used for an approved business purpose"
      ],
      "answer": "A request was recorded as successful for that account",
      "why": "The event supports a limited account-level observation, not physical attribution or intent."
    },
    "practice": "Draw a data-flow map for a fictional employee portal. Mark assets, actors, actions and at least three trust boundaries. For each boundary, specify a control and an evidence source; label one assumption that needs validation."
  },
  "sf-02": {
    "objective": "Classify security impacts using confidentiality, integrity and availability, and explain when additional objectives matter.",
    "learningGoal": "Use a scenario to identify affected security objectives and articulate the trade-offs among them.",
    "read": "Confidentiality concerns preventing unauthorized disclosure; integrity concerns preserving correctness and preventing unauthorized or improper modification; availability concerns timely and reliable access. An event can affect more than one objective, and the impact depends on the asset and business context.\\n\\nA public leak primarily affects confidentiality. An unauthorized change to a payment record affects integrity and may also affect confidentiality or availability. Ransomware that prevents access to scheduling records affects availability; if data is also exfiltrated or altered, confidentiality and integrity are implicated too. Describe the observed impact rather than assigning a label based only on the attack name.\\n\\nCIA is a useful starting model, not a complete security program. Authenticity, accountability, privacy, safety and resilience may be essential in a particular system. Controls can involve trade-offs: strict access checks may reduce disclosure risk but introduce friction or availability dependencies. Record the system's required service levels and recovery objectives when weighing those trade-offs.",
    "concepts": [
      "confidentiality",
      "integrity",
      "availability",
      "authenticity",
      "accountability",
      "privacy",
      "resilience",
      "trade-off"
    ],
    "case": "For a hospital scheduling system, compare a data leak, an altered appointment and a service outage. State the primary objective affected in each and what additional impact evidence you would seek.",
    "qa": [
      {
        "q": "Can one incident affect all three CIA objectives?",
        "a": "Yes. For example, ransomware may deny access, while associated theft or tampering may also affect confidentiality or integrity.",
        "why": "Classify the actual impacts, not just the incident label."
      },
      {
        "q": "Why might CIA not fully describe a system's security needs?",
        "a": "Some systems also require authenticity, accountability, privacy, safety or resilience.",
        "why": "The model is foundational but does not cover every security property."
      }
    ],
    "check": {
      "q": "An attacker changes a supplier's bank details in an approved payment record. Which CIA objective is directly implicated?",
      "options": [
        "Integrity",
        "Availability only",
        "Confidentiality only",
        "None, because the record remains accessible"
      ],
      "answer": "Integrity",
      "why": "The correctness and trustworthiness of the record have been altered."
    },
    "practice": "Create a three-row impact table for a fictional clinic: data disclosure, unauthorized record modification and appointment-system outage. For each, identify CIA impact, business consequence, one relevant control and one piece of evidence needed to verify the impact."
  },
  "sf-03": {
    "objective": "Distinguish identification, authentication, authorization and accounting, and apply least privilege across an account lifecycle.",
    "learningGoal": "Trace how a person or service receives, uses, reviews and loses access to a resource.",
    "read": "Identity and access management (IAM) connects people, services and devices to permitted actions on resources. Identification states which identity is being claimed; authentication verifies evidence for that claim; authorization determines the allowed operations; accounting records relevant activity. These are related steps, not synonyms. A role or group can simplify permission assignment, but effective access still depends on the policies and memberships that apply.\\n\\nLeast privilege grants only the access needed for an assigned task, for only as long as it is needed. Joiner-mover-leaver processes should provision approved access, adjust it when responsibilities change, and revoke it promptly when access is no longer justified. Service identities need owners, limited scopes, protected credentials and periodic review. Stale accounts and broad group membership can create avoidable exposure.\\n\\nA sound access review checks the resource, account owner, business justification, effective permissions, last use and approval evidence. Authentication success does not mean the action was authorized, and a recorded action does not by itself prove it was appropriate. Preserve that distinction when investigating access.",
    "concepts": [
      "IAM",
      "identification",
      "authentication",
      "authorization",
      "accounting",
      "role",
      "group",
      "least privilege",
      "access review",
      "service identity"
    ],
    "case": "Audit a fictional employee lifecycle from hiring through role change and departure. Identify which access decisions require approval and which evidence should show timely revocation.",
    "qa": [
      {
        "q": "What is the difference between authentication and authorization?",
        "a": "Authentication verifies a claimed identity; authorization decides what that identity may do.",
        "why": "A verified identity can still lack permission for a requested action."
      },
      {
        "q": "Why review service identities as well as employee accounts?",
        "a": "They can retain broad or ownerless access and often operate without ordinary interactive sign-in.",
        "why": "Non-human identities are part of the access boundary and need lifecycle governance."
      }
    ],
    "check": {
      "q": "A former employee's account still belongs to a privileged group. Which control failure is most directly indicated?",
      "options": [
        "Access revocation and lifecycle review did not remove stale privilege",
        "The employee's password was too long",
        "The system has too much availability",
        "Accounting logs were encrypted"
      ],
      "answer": "Access revocation and lifecycle review did not remove stale privilege",
      "why": "Leaver controls should remove access that no longer has a valid owner or business need."
    },
    "practice": "Build a joiner-mover-leaver access matrix for a fictional analyst. Include account identity, role/group, resource, approver, review interval and revocation evidence. Identify one stale-access scenario and a measurable check that would detect it."
  },
  "sf-04": {
    "objective": "Create a scoped threat model that maps assets, entry points, data flows, trust boundaries, abuse cases and mitigations.",
    "learningGoal": "Prioritize plausible threats using stated assumptions and connect each mitigation to a specific risk path.",
    "read": "Threat modeling is a structured design and review activity for anticipating unwanted outcomes. First define scope: system purpose, components, data, actors, external dependencies and exclusions. Draw a simple data-flow diagram showing entry points, stores, processes and trust boundaries. Identify valuable assets and the security properties they require.\\n\\nFor each flow or boundary, ask how an actor could misuse it, what could go wrong, and what conditions would make the outcome possible. An abuse case describes an unwanted action in context; a vulnerability is a weakness that could enable it; a threat is a potential cause of harm; and risk combines likelihood and impact under stated assumptions. Do not confuse a threat hypothesis with a confirmed defect.\\n\\nChoose mitigations that interrupt a specific path, such as server-side authorization, upload validation, rate limiting or audit logging. Record residual risk, owner and verification method. Revisit the model when architecture or dependencies change. Threat models are not predictions or proof of security; they are scoped reasoning artifacts that help teams ask better questions and test controls.",
    "concepts": [
      "scope",
      "data-flow diagram",
      "entry point",
      "trust boundary",
      "abuse case",
      "threat",
      "vulnerability",
      "risk",
      "mitigation",
      "residual risk"
    ],
    "case": "Threat-model a fictional document-upload feature. Map the browser, upload service, file storage and reviewer workflow; identify abuse cases and mitigations without performing exploitation.",
    "qa": [
      {
        "q": "Why define scope and assumptions before listing threats?",
        "a": "They establish which components, actors and conditions the model actually covers.",
        "why": "Unstated boundaries make conclusions misleading and difficult to review."
      },
      {
        "q": "Does a threat model prove that a vulnerability exists?",
        "a": "No. It records plausible scenarios and assumptions; suspected weaknesses need validation through authorized review and evidence.",
        "why": "Modeling, testing and confirmed findings are distinct activities."
      }
    ],
    "check": {
      "q": "A model lists 'malicious upload' as a threat but gives no system path or conditions. What is the key gap?",
      "options": [
        "It needs a scoped data flow or abuse case that explains the path and assumptions",
        "It needs a more dramatic threat name",
        "It proves the upload service is vulnerable",
        "It should be converted directly into an incident"
      ],
      "answer": "It needs a scoped data flow or abuse case that explains the path and assumptions",
      "why": "A useful threat statement connects an actor, action, asset and system condition."
    },
    "practice": "Produce a one-page threat model for a fictional document-upload service: scope, data-flow diagram, assets, trust boundaries, three abuse cases, matching mitigations, residual risk and a verification test for each mitigation."
  },
  "sf-05": {
    "objective": "Explain defense in depth, zero trust and security architecture, and distinguish these design approaches from operational event terminology.",
    "learningGoal": "Design layered controls around explicit access decisions and identify where continuous verification and telemetry belong.",
    "read": "Security architecture describes how components, identities, data and controls fit together to meet security objectives. Defense in depth uses multiple, complementary safeguards so that one failed control does not automatically expose the asset. Layers might include identity verification, least-privilege authorization, endpoint protection, network segmentation, encryption, monitoring and tested recovery. Layers should be selected for the threat paths they address, not added as a checklist without ownership or validation.\\n\\nZero trust is an approach that avoids granting implicit trust solely because a user or device is inside a network perimeter. Access decisions should consider the identity, device or workload context, requested resource, policy and relevant risk signals; permissions should be narrow and re-evaluated as appropriate. It is not a single product and does not mean that every request can be perfectly verified. Architecture should also plan for policy-service outages, emergency access and recovery.\\n\\nMake the design testable: document trust boundaries, policy decision and enforcement points, privileged paths, telemetry, failure behavior and control owners. Events, alerts, incidents, vulnerabilities and findings are operational terms used by security teams; they are not substitutes for an architecture model. Define them consistently in procedures and reporting.",
    "concepts": [
      "security architecture",
      "defense in depth",
      "zero trust",
      "policy decision point",
      "policy enforcement point",
      "segmentation",
      "least privilege",
      "telemetry",
      "resilience"
    ],
    "case": "Design layered protections for a fictional remote-access business application. Show identity, device posture, authorization, segmentation, logging and recovery controls, and explain the failure each layer is intended to limit.",
    "qa": [
      {
        "q": "What is the purpose of defense in depth?",
        "a": "To use complementary safeguards so that failure of one control does not automatically defeat protection.",
        "why": "Layering reduces single points of control failure when layers address distinct paths."
      },
      {
        "q": "Does zero trust mean buying one product or trusting nothing under any circumstances?",
        "a": "No. It is an architecture approach based on explicit, contextual access decisions rather than implicit network location.",
        "why": "It requires coordinated policy, enforcement, identity and monitoring design."
      }
    ],
    "check": {
      "q": "A remote employee is on the corporate VPN. Under a zero-trust approach, what should that location alone imply?",
      "options": [
        "No automatic entitlement; the requested resource still needs an explicit access decision",
        "Unrestricted access to every internal system",
        "That the device is fully healthy",
        "That the user's actions need not be logged"
      ],
      "answer": "No automatic entitlement; the requested resource still needs an explicit access decision",
      "why": "Network location is not sufficient proof of identity, device state or resource authorization."
    },
    "practice": "Draw a layered architecture for a fictional remote-access application. Mark the policy decision and enforcement points, at least four complementary controls, telemetry for each critical boundary, and the safe behavior if an identity or policy service is unavailable."
  }
};
