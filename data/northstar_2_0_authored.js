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
  },
  "ns-01": {
    "objective": "Trace how application data moves through the TCP/IP stack and explain the role of encapsulation, addressing and protocol layers.",
    "learningGoal": "Use a layered network model to locate where a communication problem or security control applies.",
    "time": "45–60 min",
    "prerequisite": "Computer & Digital Foundations; Security Mental Models",
    "read": "A network exchange is easier to reason about when separated into layers. The application creates data for a service; transport provides communication between processes; the internet layer addresses and forwards packets between networks; link and physical technologies move frames or signals across a local medium. TCP/IP is a practical model, not a claim that every implementation maps neatly to one textbook diagram.\\n\\nEncapsulation means each layer adds information needed by the next stage. For example, an application request may be carried in a TCP segment, inside an IP packet, inside a link-layer frame. At the receiver, the layers process and remove their corresponding headers. Routers generally forward based on network-layer information; switches commonly use link-layer addressing within a LAN.\\n\\nSecurity analysis starts by asking what layer is in scope and what evidence is available: packet capture, host socket state, firewall logs, application logs or configuration. A packet capture can show observed traffic, but encryption may hide application contents and a single capture point may not reveal the entire path.",
    "concepts": [
      "TCP/IP",
      "encapsulation",
      "application layer",
      "transport layer",
      "internet layer",
      "link layer",
      "packet",
      "frame",
      "network boundary"
    ],
    "glossary": [
      [
        "Encapsulation",
        "Wrapping data with protocol information as it moves through network layers."
      ],
      [
        "Packet",
        "A network-layer data unit, commonly an IP packet."
      ],
      [
        "Frame",
        "A link-layer unit used to deliver data over a local link."
      ]
    ],
    "example": "A browser request is formed by the application, carried by a transport protocol, addressed at the internet layer and transmitted over a local link.",
    "case": "A user reports that a web application is unreachable. Map the path from browser to server and list one observable artifact at the client, network and server layers before deciding where the fault lies.",
    "check": {
      "q": "What does encapsulation describe?",
      "options": [
        "Adding layer-specific protocol information as data moves through the stack",
        "Encrypting every packet automatically",
        "Replacing IP addresses with domain names",
        "Guaranteeing delivery without loss"
      ],
      "answer": "Adding layer-specific protocol information as data moves through the stack",
      "why": "Encapsulation explains how protocol layers package and interpret data."
    },
    "practice": "Sketch a client-to-server exchange with application data, transport segment, IP packet and link frame. Label the source and destination information visible at each layer and note what a router uses to forward."
  },
  "ns-02": {
    "objective": "Interpret IPv4 and IPv6 addresses, prefixes and subnet boundaries, and calculate basic network membership.",
    "learningGoal": "Read addressing plans and explain how prefix length separates network bits from host/interface bits.",
    "time": "50–65 min",
    "prerequisite": "ns-01 TCP/IP Mental Model",
    "read": "An IP address identifies an interface in an internet-layer addressing scheme; it is not necessarily a permanent identifier for a person or device. IPv4 uses 32 bits, commonly written as four decimal octets. IPv6 uses 128 bits and is written in hexadecimal groups, with compression rules for runs of zeros. Both use a prefix length to indicate how many leading bits identify the network portion.\\n\\nIn IPv4, /24 means 24 network bits and 8 remaining bits. A subnet mask such as 255.255.255.0 expresses the same boundary. To decide whether two addresses are in the same subnet, compare their network portions using the prefix. Do not assume every subnet uses /24; the prefix is part of the configuration. IPv6 uses the same prefix concept, although its address format and operational conventions differ.\\n\\nAddressing plans should document assigned ranges, gateways, reserved addresses, routing boundaries and ownership. Private IPv4 ranges are not globally routed by default, but private addressing is not itself a security control. IPv6 can be present even when teams focus on IPv4, so inventory and firewall policy should account for both.",
    "concepts": [
      "IPv4",
      "IPv6",
      "prefix length",
      "subnet mask",
      "network portion",
      "host portion",
      "private address",
      "default gateway"
    ],
    "glossary": [
      [
        "Prefix length",
        "The number of leading address bits used to identify a network."
      ],
      [
        "Subnet mask",
        "An IPv4 bit mask that marks the network portion of an address."
      ],
      [
        "Default gateway",
        "The next-hop router a host uses for destinations outside its local subnet."
      ]
    ],
    "example": "For 192.0.2.37/24, the first 24 bits are the network prefix; the address belongs to 192.0.2.0/24.",
    "case": "A small office has 192.0.2.0/24 and 192.0.3.0/24 configured on separate VLANs. Determine whether 192.0.2.45 and 192.0.3.45 are in the same subnet, then identify which device or route is needed for communication between them.",
    "check": {
      "q": "What does /24 mean in an IPv4 CIDR address?",
      "options": [
        "The first 24 bits are the network prefix",
        "The address has 24 octets",
        "The host has exactly 24 devices",
        "The address is encrypted"
      ],
      "answer": "The first 24 bits are the network prefix",
      "why": "CIDR prefix length specifies the number of leading network bits."
    },
    "practice": "For 198.51.100.77/26, identify the subnet boundary and network address. Explain your bit or block-size method, then compare it with 198.51.100.120/26."
  },
  "ns-03": {
    "objective": "Differentiate TCP and UDP and connect ports and application protocols to host communication.",
    "learningGoal": "Interpret a socket endpoint and explain what transport protocol and port information can—and cannot—prove.",
    "time": "45–60 min",
    "prerequisite": "ns-01 and ns-02",
    "read": "Transport protocols support communication between application processes. TCP provides a connection-oriented byte stream with sequencing, retransmission and flow/congestion mechanisms. UDP sends datagrams without TCP's built-in delivery and ordering guarantees; applications may add their own reliability or use UDP where low overhead and timing behavior matter. Neither protocol is inherently secure.\\n\\nA port is a transport-layer number used to direct traffic to an application endpoint on a host. A socket is commonly described using protocol, IP address and port; a connection may be distinguished by source and destination endpoints plus protocol. Well-known port conventions help identify likely services, but a port number alone does not prove which application is running or that a service is reachable.\\n\\nApplication protocols define message semantics, such as HTTP requests, DNS queries or SSH sessions. A firewall rule that permits a port is not equivalent to validating the application or user. For troubleshooting, combine socket listings, packet observations, service configuration and application logs. Avoid exposing a service simply because its default port is familiar.",
    "concepts": [
      "TCP",
      "UDP",
      "port",
      "socket",
      "connection",
      "application protocol",
      "listening service",
      "transport security"
    ],
    "glossary": [
      [
        "TCP",
        "A connection-oriented transport protocol providing an ordered byte stream and retransmission."
      ],
      [
        "UDP",
        "A datagram transport protocol without TCP's built-in reliability and ordering."
      ],
      [
        "Socket endpoint",
        "A protocol, address and port combination used to identify a communication endpoint."
      ]
    ],
    "example": "A server may listen on TCP port 443 for HTTPS, but confirming the actual service and its security requires more than observing the port number.",
    "case": "An inventory scan reports TCP/22 open on a host. Explain what this observation suggests, what it does not establish, and which authorized checks could confirm the service, owner and exposure requirement.",
    "check": {
      "q": "Which statement accurately distinguishes TCP from UDP?",
      "options": [
        "TCP provides an ordered byte stream; UDP sends datagrams without TCP's built-in delivery guarantees",
        "UDP always encrypts data and TCP never does",
        "TCP is only for web traffic and UDP only for DNS",
        "A port number guarantees the service identity"
      ],
      "answer": "TCP provides an ordered byte stream; UDP sends datagrams without TCP's built-in delivery guarantees",
      "why": "Transport behavior differs; security and application semantics require additional context."
    },
    "practice": "Inspect a sample host socket inventory or a provided lab capture. Record protocol, local address, local port, remote endpoint if present, process/service owner and one limitation of your interpretation."
  },
  "ns-04": {
    "objective": "Explain routing, NAT, firewall policy and segmentation as distinct mechanisms that shape network reachability.",
    "learningGoal": "Trace a packet path and reason about permitted flows, translation and containment without treating any one control as complete protection.",
    "time": "55–70 min",
    "prerequisite": "ns-01 to ns-03",
    "read": "Routing selects a next hop toward a destination network using routing information. A default route is used when no more specific route matches. Network address translation (NAT) modifies address information as traffic crosses a boundary; common home and small-office configurations translate many private source addresses to a public address. NAT can affect reachability, but it is not a substitute for a stateful firewall or a deliberate access policy.\\n\\nA firewall enforces rules about traffic, often using source/destination addresses, protocol, ports, connection state and sometimes application or identity context. Rules should be scoped to business need, ordered and documented, and tested from relevant network locations. Segmentation separates systems into zones or security domains and restricts flows between them. VLANs alone do not guarantee isolation if routing and enforcement allow unrestricted communication.\\n\\nFor a path analysis, mark client, gateway, routing hops, translation points, firewall enforcement and destination. Check both directions where stateful behavior or asymmetric routing matters. Capture rule IDs and configuration versions as evidence. Design for management-plane access, logging, change review and failure behavior; avoid broad allow rules as a shortcut.",
    "concepts": [
      "routing table",
      "next hop",
      "default route",
      "NAT",
      "firewall",
      "stateful inspection",
      "segmentation",
      "east-west traffic",
      "least privilege"
    ],
    "glossary": [
      [
        "Routing",
        "Selecting a next hop to move packets toward a destination network."
      ],
      [
        "NAT",
        "Translation of address information as traffic crosses a network boundary."
      ],
      [
        "Segmentation",
        "Separating systems into zones and controlling communication between them."
      ]
    ],
    "example": "A guest Wi-Fi network may use a separate subnet and firewall policy that permits internet access while denying access to internal business networks.",
    "case": "A workstation in the user VLAN can reach a database subnet that should be restricted to an application server. Map the likely control points and propose a narrowly scoped flow policy plus a test that demonstrates the intended denial and required allowed path.",
    "check": {
      "q": "Which statement best describes NAT?",
      "options": [
        "It translates address information and does not by itself define a complete security policy",
        "It encrypts all traffic between networks",
        "It guarantees that internal hosts cannot be attacked",
        "It replaces routing and firewalling"
      ],
      "answer": "It translates address information and does not by itself define a complete security policy",
      "why": "NAT and security policy solve different problems; reachability must be explicitly controlled."
    },
    "practice": "Draw a three-zone network (user, application, database). Define only the necessary allowed flows, identify routing/NAT/firewall points, and specify positive and negative connectivity tests."
  },
  "ns-05": {
    "objective": "Describe DNS and DHCP roles and follow a safe, evidence-based workflow for authorized packet analysis.",
    "learningGoal": "Correlate name resolution, address configuration and observed packets while protecting sensitive data and respecting scope.",
    "time": "55–70 min",
    "prerequisite": "ns-01 to ns-04",
    "read": "DNS maps names to records such as addresses and service information through a distributed, hierarchical system. A client may consult a configured recursive resolver, which can use cached data or query other DNS servers. A successful DNS response does not prove the destination service is healthy, trustworthy or authorized. DHCP commonly provides hosts with network configuration such as an IP address, prefix/mask, gateway and DNS resolver; static configuration and IPv6 address-configuration mechanisms may also be in use.\\n\\nPacket analysis begins with a question and a defined capture scope—not with collecting everything. Record the host, interface, time window, expected traffic and authorization. Use a suitable capture point, preserve the original file, document tool/version and filters, and minimize collection of credentials or personal content. Filters can reduce noise but may also hide relevant evidence; retain enough context to explain the selection.\\n\\nCorrelate packet timestamps with endpoint and resolver logs, account for clock skew and network address translation, and distinguish observation from inference. A capture shows traffic visible at that location and time; it may miss encrypted payloads, packets on other paths or activity outside the window. Redact sensitive data before sharing and retain evidence according to the approved process.",
    "concepts": [
      "DNS",
      "recursive resolver",
      "cache",
      "DHCP",
      "lease",
      "network configuration",
      "packet capture",
      "capture filter",
      "display filter",
      "evidence handling"
    ],
    "glossary": [
      [
        "DNS",
        "A distributed naming system that returns records associated with domain names."
      ],
      [
        "DHCP",
        "A protocol commonly used to lease IP configuration to hosts."
      ],
      [
        "Packet capture",
        "A recorded view of network packets observed at a particular capture point."
      ]
    ],
    "example": "If a laptop resolves a service name to an unexpected address, compare its configured resolver, DNS response and cache state with approved records before concluding that DNS was maliciously changed.",
    "case": "An analyst investigates intermittent access to an internal service. Build a collection plan that checks DHCP lease/configuration, DNS answers and a time-bounded packet capture, with scope, privacy safeguards and cross-source correlation.",
    "check": {
      "q": "What is a key limitation of a packet capture?",
      "options": [
        "It only shows traffic visible at its capture point and during its collection window",
        "It always contains the full contents of encrypted sessions",
        "It proves the identity of every endpoint user",
        "It replaces endpoint and resolver logs"
      ],
      "answer": "It only shows traffic visible at its capture point and during its collection window",
      "why": "Capture location, timing and encryption constrain what can be concluded."
    },
    "practice": "In an authorized lab, capture a short DNS lookup and connection attempt. Record the question, interface, timestamps, relevant packets and corroborating endpoint configuration; state at least two limitations and redact any sensitive fields before sharing."
  },
  "sc-01": {
    "objective": "Explain how Linux identities, ownership, permissions and privileged commands constrain access to files and system functions.",
    "learningGoal": "Read a basic access-control situation and propose least-privilege, auditable administration rather than relying on root access by default.",
    "time": "50–65 min",
    "prerequisite": "Computer & Digital Foundations; Security Mental Models",
    "read": "Linux is a multiuser operating system. The kernel mediates access to system resources, while user-space tools and services operate with particular identities and privileges. A user account has a UID; groups provide a way to assign shared access. The root account has broad administrative authority, so routine work should use a named account and elevate only the specific command or task that requires it.\\n\\nTraditional file permissions describe read, write and execute rights for the owner, group and other users. For directories, read permits listing names, write permits changing directory entries, and execute permits traversing/searching the directory. Ownership and mode bits are only part of the access model: ACLs, mount options, capabilities, mandatory access controls and service-specific policy may also matter. A displayed permission string is evidence about one layer, not a complete proof of effective access.\\n\\nUse sudo according to an approved policy, with narrow command authorization and logging. Avoid shared administrator accounts, broad writable paths and unnecessary setuid or elevated services. For an access issue, establish the target path, identity, groups, parent-directory permissions, ACLs and relevant security policy before changing anything. Preserve a record of the original state and validate the least-privilege fix.",
    "concepts": [
      "Linux kernel",
      "user space",
      "UID",
      "GID",
      "owner/group/other",
      "read/write/execute",
      "root",
      "sudo",
      "ACL",
      "least privilege"
    ],
    "glossary": [
      [
        "UID",
        "A numeric identifier associated with a Linux user account."
      ],
      [
        "GID",
        "A numeric identifier associated with a group."
      ],
      [
        "sudo",
        "A mechanism for running permitted commands with elevated privileges."
      ],
      [
        "ACL",
        "An access control list that can express permissions beyond basic owner/group/other mode bits."
      ]
    ],
    "example": "A service account needs read access to one application configuration file but should not be able to modify it or read unrelated users' home directories.",
    "case": "A deployment script fails to read `/etc/example/app.conf`. Before changing permissions, identify the service's effective user and groups, inspect the file and directory access path, and determine whether the service should read this file at all. Propose a narrow correction and an audit record.",
    "check": {
      "q": "A service only needs to read one configuration file. Which approach follows least privilege?",
      "options": [
        "Grant its dedicated identity read access to that file and only the required path traversal",
        "Make the file world-writable to avoid future errors",
        "Run the service permanently as root",
        "Disable all access controls"
      ],
      "answer": "Grant its dedicated identity read access to that file and only the required path traversal",
      "why": "Access should be limited to the identity and resources needed for the service's function."
    },
    "practice": "In a disposable Linux lab, inspect a test user's identity and groups, then examine a test directory and file's ownership and permissions. Explain the effective access, make one minimal approved change, and verify both the intended access and a denied unneeded action."
  },
  "sc-02": {
    "objective": "Distinguish processes from services and use process ancestry, identity, executable and network-listener context to investigate system activity.",
    "learningGoal": "Build a reproducible host-triage snapshot while separating unusual observations from confirmed malicious behavior.",
    "time": "50–65 min",
    "prerequisite": "Linux Security Fundamentals; TCP/IP Mental Model",
    "read": "A process is a running instance of a program with its own process ID (PID), execution state, memory and security context. Processes may create child processes; parent-child relationships form a process tree. A service is a function provided by a program or group of processes, often managed by an init or service manager. A daemon is a common term for a background process, but not every background process is a managed service.\\n\\nTo understand a process, correlate its PID and parent PID with the executable path, command line, start time, effective user, open files, resource use and service manager state. A name alone is weak evidence: legitimate software can have unfamiliar names, and malicious software can imitate trusted names. Likewise, a listener indicates a process is bound to a network endpoint, not that it is reachable from every network or exploitable.\\n\\nInvestigate unexpected ancestry, persistence mechanisms, privilege changes, unusual execution paths and new listeners in context. Compare against an approved baseline and change records. Collect read-only observations first, note timestamps and tool versions, and preserve relevant logs. Avoid killing a process or disabling a service before understanding operational impact and evidence-preservation needs.",
    "concepts": [
      "process",
      "PID",
      "PPID",
      "process tree",
      "service manager",
      "daemon",
      "effective user",
      "executable path",
      "listener",
      "persistence"
    ],
    "glossary": [
      [
        "PID",
        "The operating system's process identifier."
      ],
      [
        "PPID",
        "The process identifier of a process's parent."
      ],
      [
        "Listener",
        "A process endpoint waiting for incoming network or local connections."
      ]
    ],
    "example": "A web service manager launches a worker process under a dedicated account; the worker opens a configured listening socket and writes logs to an application directory.",
    "case": "A monitoring alert reports a new process running as root with a parent that is not typical for the host role. Record the triage questions and evidence needed to distinguish an authorized maintenance task from suspicious execution; include service ownership and business impact.",
    "check": {
      "q": "What does finding an unexpected listening port establish by itself?",
      "options": [
        "A process is bound to an endpoint at the observation time, but reachability and intent need more evidence",
        "The host is compromised",
        "The service is exposed to the public internet",
        "The process is definitely malicious"
      ],
      "answer": "A process is bound to an endpoint at the observation time, but reachability and intent need more evidence",
      "why": "A listener is an observation that must be correlated with network path, process and expected configuration."
    },
    "practice": "Use a lab host or supplied process snapshot to create a table of PID, parent, user, executable, service association and listener (if any). Flag anomalies as hypotheses, cite supporting evidence and list one benign explanation to test."
  },
  "sc-03": {
    "objective": "Compare virtual machines, containers and cloud service models, and map security responsibilities to the actual deployment boundary.",
    "learningGoal": "Identify which party configures, operates and verifies each security control for a specified workload rather than assuming the provider handles all security.",
    "time": "55–70 min",
    "prerequisite": "Linux Security Fundamentals; Networking & Network Security",
    "read": "Virtualization allows multiple guest systems to share physical infrastructure through a hypervisor. A virtual machine typically includes a guest operating system and its own kernel. Containers package an application and dependencies while sharing the host kernel, using isolation features such as namespaces and control groups; they are not simply small virtual machines. Both approaches require secure images, configuration, access controls, patching and monitoring. Isolation strength depends on implementation and configuration.\\n\\nCloud service models shift operational responsibilities. In Infrastructure as a Service (IaaS), customers commonly manage guest operating systems, applications, identities, data and many network controls, while the provider manages underlying facilities and virtualization. Platform as a Service (PaaS) abstracts more of the runtime and infrastructure, but customers still configure applications, data, identities and service settings. Software as a Service (SaaS) places more application operations with the provider, while customers remain responsible for appropriate user access, data handling, endpoint use and configuration choices. Exact boundaries vary by provider, product and contract.\\n\\nBuild a responsibility matrix for the specific service: control, responsible party, evidence, review frequency and escalation path. Shared responsibility does not mean shared ambiguity. Verify provider documentation and contractual commitments, then test customer-owned controls such as access policy, logging, backups and data classification.",
    "concepts": [
      "hypervisor",
      "virtual machine",
      "container",
      "host kernel",
      "IaaS",
      "PaaS",
      "SaaS",
      "shared responsibility",
      "control owner",
      "service configuration"
    ],
    "glossary": [
      [
        "Hypervisor",
        "Software or firmware that creates and manages virtual machines."
      ],
      [
        "Container",
        "An isolated application environment that generally shares the host operating-system kernel."
      ],
      [
        "Shared responsibility",
        "The division of security and operational duties between a cloud provider and its customer."
      ]
    ],
    "example": "A team deploys a database on a customer-managed virtual machine in IaaS: the provider secures the underlying cloud infrastructure, while the customer must maintain the guest OS, database configuration, identities, data safeguards and workload monitoring.",
    "case": "A company moves a customer portal from a self-managed VM to a managed application platform. Create a before/after responsibility matrix for patching, runtime configuration, identity, data protection, logging, backup and incident response. Mark each item as provider, customer or contract-specific, and name the evidence needed to confirm it.",
    "check": {
      "q": "When adopting a managed cloud platform, what should the customer do about security responsibilities?",
      "options": [
        "Map duties to the specific service and verify provider and customer controls with evidence",
        "Assume the provider now owns every security task",
        "Assume the customer must manage the provider's physical datacenter",
        "Use the service model name alone as proof of control coverage"
      ],
      "answer": "Map duties to the specific service and verify provider and customer controls with evidence",
      "why": "Responsibility boundaries depend on the actual service, configuration and agreement."
    },
    "practice": "Choose a fictional IaaS, PaaS or SaaS workload. Fill a responsibility matrix for identity, patching, network, application, data, logging and recovery. For each row, identify the owner, evidence artifact and verification cadence."
  },
  "sc-04": {
    "objective": "Develop a secure configuration baseline, validate it against business requirements and manage configuration drift and exceptions safely.",
    "learningGoal": "Turn broad hardening guidance into controlled, testable configuration changes with rollback and evidence.",
    "time": "55–70 min",
    "prerequisite": "Linux Security Fundamentals; Processes, Services & Isolation",
    "read": "Hardening reduces unnecessary exposure by configuring a system to meet a defined security baseline while retaining required functionality. Begin with an accurate asset inventory and workload role: a database server, developer workstation and internet-facing proxy have different requirements. Select an appropriate benchmark or internal standard, record the version and scope, and map each requirement to a concrete setting or verification method. A benchmark is a starting point, not an automatic fit for every environment.\\n\\nA safe change process includes a documented rationale, owner, risk assessment, test environment where feasible, approval, maintenance window, backup or rollback plan and post-change validation. Validate the actual effective state, not only the desired configuration file. Monitor for configuration drift caused by manual changes, automation failures or software updates. Exceptions should have a named approver, business justification, compensating controls, expiration or review date and tracking record.\\n\\nAvoid blind hardening: disabling a service, protocol or account without tracing dependencies can cause outages or remove necessary recovery access. Prioritize exposed and high-impact settings, use configuration management where suitable, and retain evidence such as scan results, policy reports, change tickets and verification logs. Reassess after material changes to the system role or threat environment.",
    "concepts": [
      "hardening",
      "baseline",
      "benchmark",
      "asset inventory",
      "configuration drift",
      "change control",
      "validation",
      "rollback",
      "exception",
      "compensating control"
    ],
    "glossary": [
      [
        "Baseline",
        "A documented set of approved configuration requirements for a defined system or role."
      ],
      [
        "Configuration drift",
        "A difference between the approved desired configuration and the system's observed state."
      ],
      [
        "Compensating control",
        "An alternative safeguard used when a specified control cannot be implemented as designed."
      ]
    ],
    "example": "A Linux server baseline may require disabling unused network services, restricting remote administration, applying supported updates and ensuring audit logs are forwarded to a protected destination.",
    "case": "A hardening scan flags a legacy service as enabled on a production host, but an application owner says a nightly job depends on it. Plan a decision workflow that verifies the dependency, evaluates exposure, tests a replacement or restriction, and documents any time-limited exception.",
    "check": {
      "q": "What is an essential part of a safe hardening change?",
      "options": [
        "Test the change, validate effective state and maintain a rollback or recovery plan",
        "Apply every benchmark setting without considering workload needs",
        "Disable any flagged service immediately on production",
        "Treat a passed scan as permanent proof of compliance"
      ],
      "answer": "Test the change, validate effective state and maintain a rollback or recovery plan",
      "why": "Hardening must reduce risk without creating uncontrolled operational failures."
    },
    "practice": "Draft five baseline checks for a fictional server role. For each, specify desired state, verification evidence, responsible owner and drift response. Include one exception record with compensating control and review date."
  },
  "sc-05": {
    "objective": "Differentiate human identities, workload identities, roles, tokens and secrets, and apply controlled issuance, use, rotation and revocation.",
    "learningGoal": "Design a least-privilege credential lifecycle for an automated workload and show how access can be monitored and safely removed.",
    "time": "55–70 min",
    "prerequisite": "Identity & Access Fundamentals; Cloud Shared Responsibility",
    "read": "Cloud IAM determines which identities can perform which actions on which resources under defined conditions. Human identities represent people; workload identities represent applications, services or compute workloads. A role is a set of permissions that can be assigned or assumed according to policy. A token is a credential-like artifact presented to a service, often short-lived; a secret is sensitive material such as an API key, password or private key. These terms are related but not interchangeable.\\n\\nPrefer workload identity mechanisms that issue short-lived, scoped credentials over embedding long-lived keys in source code, images, scripts or configuration repositories. Store unavoidable secrets in an approved secrets manager, restrict retrieval to the intended workload, encrypt them in transit and at rest, and audit access. Avoid sharing one credential across unrelated services. Apply least privilege to actions, resources and duration, and separate deployment authority from runtime access where feasible.\\n\\nA credential lifecycle includes owner and purpose, secure provisioning, access review, rotation or renewal, monitoring, incident response and revocation/decommissioning. Rotation is not sufficient if copies remain active or an exposed credential has already been used; investigate access logs and revoke compromised material promptly. Test emergency procedures, service continuity and dependency updates so credential changes do not cause outages. Never paste live credentials into learning materials or tickets.",
    "concepts": [
      "cloud IAM",
      "human identity",
      "workload identity",
      "role",
      "token",
      "secret",
      "secrets manager",
      "short-lived credential",
      "rotation",
      "revocation",
      "audit log"
    ],
    "glossary": [
      [
        "Workload identity",
        "An identity assigned to an application, service or compute workload for authenticated access."
      ],
      [
        "Token",
        "A credential artifact used to present or convey authorization, often with a limited lifetime."
      ],
      [
        "Secret",
        "Sensitive authentication material such as an API key, password or private key."
      ]
    ],
    "example": "A scheduled data-export job uses a dedicated workload identity with permission to read one source bucket and write to one destination, rather than a developer's broad personal access key.",
    "case": "A repository scan discovers a long-lived cloud API key in a test script. Outline containment and remediation: determine scope and owner, revoke or rotate the credential, inspect audit activity, remove copies from active code and history according to policy, replace it with workload identity or managed secret retrieval, and verify least privilege.",
    "check": {
      "q": "Which design reduces the risk of a leaked automation credential?",
      "options": [
        "Use a dedicated workload identity with narrow permissions and short-lived credentials where supported",
        "Embed a shared administrator key in the application image",
        "Give every workload the same permanent access key",
        "Disable audit logging to avoid exposing credential use"
      ],
      "answer": "Use a dedicated workload identity with narrow permissions and short-lived credentials where supported",
      "why": "Scoped, short-lived credentials limit exposure and blast radius; monitoring supports detection."
    },
    "practice": "Design a credential lifecycle for a fictional scheduled cloud job. Document identity type, exact resource permissions, provisioning method, storage or federation approach, audit signals, rotation/renewal, revocation and an operational test."
  },
"ds-01": {
    "objective": "Explain how security logs are produced, transported, retained and queried, and select telemetry that can support a defined detection or investigation.",
    "learningGoal": "Treat logging as an evidence pipeline: identify the event source, fields, time context, collection path, retention and access controls before relying on an event.",
    "time": "40–50 min",
    "prerequisite": "Computer, networking and cybersecurity foundations",
    "read": "A log is a time-oriented record of an event observed by a system or application. Examples include an authentication result, process start, firewall decision, administrative change or cloud API call. Logs are not a complete record of reality: they reflect what a source was configured and able to observe, and may be missing, delayed, duplicated or altered.\\n\\nDesign logging from a question, not from a wish to collect everything. For a suspected account takeover, useful sources may include identity-provider sign-ins, MFA outcomes, session creation, endpoint activity and relevant network events. Record the source and its limitations. Establish synchronized time, stable identifiers, useful context, retention periods and role-based access. Protect logs against unauthorized change and deletion, and monitor the health of the collection pipeline itself.\\n\\nCollection has costs and risks. Excessive telemetry increases storage and analyst workload; sensitive fields can expose personal or business data. Define purpose, minimization, access, retention and disposal. Separate an absence of evidence from evidence that an event did not occur: an unconfigured source or broken forwarder can create blind spots.",
    "concepts": [
      "Event source and event type",
      "Timestamp and clock synchronization",
      "Structured fields and identifiers",
      "Collection, forwarding and parsing",
      "Retention and integrity",
      "Coverage gaps and privacy"
    ],
    "glossary": [
      [
        "Security log",
        "A record emitted by a system or application about an observed event."
      ],
      [
        "Telemetry",
        "Operational observations collected from systems, applications or networks."
      ],
      [
        "Forwarder",
        "A component that transports events from a source to a central system."
      ],
      [
        "Retention",
        "The period for which collected data is kept and accessible."
      ],
      [
        "Coverage gap",
        "A missing or unreliable observation path that limits detection or investigation."
      ]
    ],
    "example": "For failed-login detection, document which identity systems emit failures, whether events include account and source context, how quickly they arrive, and how long they remain searchable. Test with an approved test account and compare source events with the central record.",
    "visual": {
      "title": "Logging evidence pipeline",
      "caption": "A conceptual path; deployments may combine or reorder components.",
      "steps": [
        "System or application emits an event",
        "Agent or native integration collects it",
        "Transport and buffering move the event",
        "Parser normalizes fields and time",
        "Storage applies access, retention and integrity controls",
        "Analyst queries the event with source limitations in mind"
      ]
    },
    "case": "A SOC sees no endpoint events from a critical server for six hours. The server owner says there was no suspicious activity. Treat the missing telemetry as a visibility incident until collection health and alternate evidence are checked.",
    "caseQuestions": [
      "What source, host and time window are affected?",
      "Which collection and forwarding health signals can confirm where the gap began?",
      "What alternate evidence is available, and how will the gap be recorded and escalated?"
    ],
    "mistakes": [
      "Assuming a log proves the event was harmless or malicious without corroboration.",
      "Treating missing events as proof that nothing happened.",
      "Ignoring time zones, clock drift or delayed ingestion.",
      "Collecting sensitive data without purpose and access controls."
    ],
    "practice": "Write a telemetry plan for detecting suspicious administrative sign-ins. Specify sources, minimum fields, expected delivery delay, retention rationale, access restrictions and one health check.",
    "evidence": "Submit a source-to-storage diagram and a table mapping each detection question to its required event fields and known blind spots.",
    "check": {
      "q": "A central log search returns no events for a server. What is the sound first interpretation?",
      "options": [
        "The server had no relevant activity.",
        "The central system proves the host is clean.",
        "There may be a visibility or collection gap; check source and pipeline health and seek corroborating evidence.",
        "Delete and reinstall the logging platform."
      ],
      "answer": "There may be a visibility or collection gap; check source and pipeline health and seek corroborating evidence.",
      "why": "A query result only describes the data available to that query. Validate source generation, transport, parsing, time range and access before inferring that an event did not occur."
    }
  },
"ds-02": {
    "objective": "Turn a testable threat hypothesis into a detection specification with observable signals, logic, context, validation and maintenance criteria.",
    "learningGoal": "Build detections as engineered controls that are measurable, tested against representative activity and continuously tuned—not as isolated alert rules.",
    "time": "45–60 min",
    "prerequisite": "Logging for Detection",
    "read": "Detection engineering connects a threat hypothesis to telemetry and an operational response. Begin with a concrete behavior and scope: for example, an account authenticates from an unusual source and then performs a sensitive administrative action. State what behavior is in scope, what is out of scope, and what evidence could support or weaken the hypothesis.\\n\\nMap the hypothesis to available sources and fields. Specify event selection, joins or correlation keys, time windows, thresholds, exclusions and required context. Avoid brittle indicators when behavior-based evidence is available, but do not treat an anomaly as proof of compromise. Include expected benign explanations and the action an analyst should take.\\n\\nValidate with known benign and approved simulated events, historical samples where authorized, and adversarial test cases. Measure detection coverage, precision/false-positive burden, latency and analyst usefulness. Version the rule, record its owner and dependencies, review it when schemas or systems change, and disable or roll back safely if it creates harmful noise. A detection without reliable telemetry or a response path is not operationally complete.",
    "concepts": [
      "Hypothesis and scope",
      "Telemetry mapping",
      "Selection and correlation logic",
      "Thresholds and time windows",
      "Tuning and exclusions",
      "Testing and lifecycle"
    ],
    "glossary": [
      [
        "Detection hypothesis",
        "A falsifiable statement about activity that telemetry may reveal."
      ],
      [
        "Correlation",
        "Relating events using shared identity, host, session or time context."
      ],
      [
        "False positive",
        "An alert that meets rule logic but does not represent the targeted harmful behavior."
      ],
      [
        "Detection latency",
        "Elapsed time between relevant activity and a usable alert."
      ],
      [
        "Rule tuning",
        "Adjusting logic and context to improve usefulness while preserving intended coverage."
      ]
    ],
    "example": "A rule for repeated failed sign-ins should define the identity source, count threshold, time window, account/source grouping, service-account handling, alert context and triage steps. Test ordinary mistyped-password patterns and approved attack simulations before production.",
    "visual": {
      "title": "Detection engineering loop",
      "caption": "Each stage should leave a reviewable artifact.",
      "steps": [
        "Define threat behavior and scope",
        "Map behavior to reliable telemetry",
        "Specify logic, context and response",
        "Test against benign and simulated cases",
        "Deploy with owner and monitoring",
        "Measure, tune and retest after change"
      ]
    },
    "case": "A new rule flags every employee who authenticates while traveling. Analysts report high alert volume and missed coverage for token abuse. Review the hypothesis, available context and exclusions without simply suppressing all travel-related activity.",
    "caseQuestions": [
      "What behavior is the rule actually detecting versus what was intended?",
      "Which additional context could distinguish legitimate travel from suspicious session behavior?",
      "What tests and metrics are required before changing the rule?"
    ],
    "mistakes": [
      "Using an indicator without defining the threat behavior it represents.",
      "Tuning away a noisy alert without checking lost coverage.",
      "Deploying without a response owner or test plan.",
      "Treating an alert as a confirmed incident."
    ],
    "practice": "Draft a detection specification for an approved lab scenario: repeated failed logins followed by a successful login. Include fields, grouping, time window, false-positive cases, validation steps and analyst actions.",
    "evidence": "Submit a one-page rule specification plus a test matrix with at least three benign and three simulated cases and expected outcomes.",
    "check": {
      "q": "What makes a detection rule ready for operational use?",
      "options": [
        "It produces the largest possible number of alerts.",
        "It is based on a testable hypothesis, uses validated telemetry, has documented response steps and is measured and maintained.",
        "It uses a single indicator that never changes.",
        "It has no exclusions or context."
      ],
      "answer": "It is based on a testable hypothesis, uses validated telemetry, has documented response steps and is measured and maintained.",
      "why": "Operational readiness requires both technical validity and an owned workflow: reliable data, tested logic, understandable context, response actions and ongoing measurement."
    }
  },
"ds-03": {
    "objective": "Conduct a repeatable SIEM investigation by validating the alert, scoping related activity, preserving evidence and documenting a defensible conclusion.",
    "learningGoal": "Use the SIEM as an investigative workspace while retaining awareness of data provenance, query limitations and the distinction between leads and verified facts.",
    "time": "45–60 min",
    "prerequisite": "Logging for Detection; Detection Engineering Basics",
    "read": "A SIEM centralizes and correlates security events to support detection and investigation. An alert is a lead, not a verdict. Start by recording the alert identifier, rule version, affected entities, event time and ingestion time. Confirm the query's time zone, data sources, parsing and access scope.\\n\\nBuild a timeline around the triggering event. Pivot using stable identifiers such as account, host, session, process or source address, and widen the time window deliberately. Correlate identity, endpoint, network and cloud evidence where available. Check whether events are duplicates, delayed, normalized incorrectly or generated by expected automation. Record each query's purpose and key results so another analyst can reproduce the work.\\n\\nScope the incident carefully: identify potentially affected accounts, systems, data and time period; distinguish confirmed observations from hypotheses and gaps. Preserve relevant evidence according to organizational procedure, limit access to sensitive records, and coordinate containment with authorized owners. Close with a concise finding, confidence and rationale, unresolved questions, actions taken and follow-up detection or control work.",
    "concepts": [
      "Alert validation",
      "Entity pivots and correlation",
      "Timeline construction",
      "Query scope and data quality",
      "Evidence preservation",
      "Finding and handoff"
    ],
    "glossary": [
      [
        "SIEM",
        "A platform that collects, searches and correlates security event data."
      ],
      [
        "Pivot",
        "A query step that follows an entity or attribute from one event to related evidence."
      ],
      [
        "Ingestion time",
        "When an event entered the central platform, distinct from its source event time."
      ],
      [
        "Timeline",
        "An ordered account of relevant events with source and time context."
      ],
      [
        "Provenance",
        "Information about where evidence came from and how it was handled."
      ]
    ],
    "example": "For an unusual sign-in alert, validate the identity event and its timestamp, then pivot to MFA result, session issuance, device posture and subsequent sensitive actions. Verify whether the account is a test or service identity and document any source not available to the investigation.",
    "visual": {
      "title": "SIEM investigation workflow",
      "caption": "Maintain an auditable chain from alert to conclusion.",
      "steps": [
        "Record alert and scope",
        "Validate source event and timestamps",
        "Pivot across identity, endpoint, network and cloud",
        "Build timeline and check benign explanations",
        "Preserve relevant evidence and coordinate response",
        "Document conclusion, confidence, gaps and follow-up"
      ]
    },
    "case": "An alert reports a successful login from a new country followed by a privileged action. The IP geolocation is based on a third-party database and the endpoint log is delayed. Avoid treating either signal as conclusive; correlate independent evidence and note uncertainty.",
    "caseQuestions": [
      "Which details are directly observed and which are derived or delayed?",
      "What corroborating events could validate the session and privileged action?",
      "How should confidence, evidence gaps and next steps be recorded?"
    ],
    "mistakes": [
      "Assuming IP geolocation identifies a person's physical location.",
      "Mixing source event time with ingestion time.",
      "Treating an alert's severity as proof of impact.",
      "Failing to record queries, evidence provenance or unknowns."
    ],
    "practice": "Using a synthetic or authorized lab dataset, investigate a suspicious sign-in alert. Create a timeline with event time, ingestion time, source, entity and interpretation; include at least one benign explanation and one unresolved gap.",
    "evidence": "Submit reproducible query notes, a scoped event timeline and a short investigation summary separating facts, inferences and unknowns.",
    "check": {
      "q": "An alert is based on a single unusual IP geolocation field. What should the analyst do?",
      "options": [
        "Declare the account compromised immediately.",
        "Dismiss the alert because geolocation is imperfect.",
        "Treat it as a lead and corroborate with independent identity, device and activity evidence while documenting data limitations.",
        "Change the user's password without following response procedure."
      ],
      "answer": "Treat it as a lead and corroborate with independent identity, device and activity evidence while documenting data limitations.",
      "why": "Derived location data can be inaccurate. Investigation should test the hypothesis against other evidence and follow the organization's authorized response process."
    }
  },
"ds-04": {
    "objective": "Triage a reported security event by establishing scope, validating evidence, assessing impact and urgency, and selecting an authorized escalation path.",
    "learningGoal": "Apply a consistent triage method that separates severity from confidence and supports proportionate, documented response.",
    "time": "40–50 min",
    "prerequisite": "Logging for Detection; SIEM Investigation Workflow",
    "read": "Incident triage is the initial structured assessment of a suspected security event. It determines what is known, what may be affected, how quickly action is needed and who should respond. Capture the report source, time, systems and accounts involved, observed indicators, business context and immediate safety or service concerns.\\n\\nAssess impact using organizational criteria: confidentiality, integrity and availability; data sensitivity; privilege; exposure; affected population; operational criticality; and potential spread. Assess confidence separately: source reliability, corroboration, telemetry completeness and plausible benign explanations. A high-impact possibility with incomplete evidence may require urgent escalation while remaining explicitly unconfirmed.\\n\\nUse the approved severity matrix and escalation contacts. Preserve evidence and coordinate containment with authorized incident commanders, system owners and legal/privacy functions as appropriate. Avoid destructive or broad actions that could disrupt critical services or destroy evidence. Record decisions, timestamps, rationale, owner and next review point. Reassess as facts change; initial severity is provisional, not a permanent label.",
    "concepts": [
      "Event versus incident",
      "Impact dimensions",
      "Confidence and uncertainty",
      "Severity matrix",
      "Escalation and ownership",
      "Proportionate containment"
    ],
    "glossary": [
      [
        "Triage",
        "A time-bounded initial assessment that prioritizes investigation and response."
      ],
      [
        "Impact",
        "The actual or plausible harm to people, data, systems or operations."
      ],
      [
        "Confidence",
        "How strongly available evidence supports an assessment."
      ],
      [
        "Severity",
        "A priority classification based on defined organizational impact and urgency criteria."
      ],
      [
        "Escalation",
        "Routing an event to the designated authority or specialist response team."
      ]
    ],
    "example": "A privileged account has an unexpected sign-in, but logs are incomplete. Record confirmed account and event details, identify the systems and privileges involved, check for corroborating activity, and escalate promptly under the organization's matrix if the potential impact is high.",
    "visual": {
      "title": "Triage decision path",
      "caption": "Impact and confidence are separate inputs; apply local severity criteria.",
      "steps": [
        "Capture report, time and affected entities",
        "Validate initial evidence and telemetry health",
        "Assess potential impact and operational criticality",
        "Assess confidence and unresolved uncertainty",
        "Apply severity matrix and escalate to owner",
        "Document safe next actions and reassess"
      ]
    },
    "case": "A monitoring alert suggests ransomware behavior on a production file server, but the endpoint agent stopped reporting shortly before the alert. The service supports critical operations. Triage must account for possible high impact and the visibility gap without claiming encryption has been confirmed.",
    "caseQuestions": [
      "What facts support the alert and what evidence is missing?",
      "Which business owner and response authority must be engaged immediately?",
      "What containment options are authorized and least likely to destroy evidence or disrupt critical operations?"
    ],
    "mistakes": [
      "Equating high severity with high confidence.",
      "Waiting for perfect evidence before escalating a credible high-impact concern.",
      "Taking unilateral disruptive action outside authority.",
      "Failing to record why severity was assigned or changed."
    ],
    "practice": "Create a triage worksheet for three synthetic cases: suspicious admin sign-in, malware alert on a standard workstation, and possible ransomware on a critical server. Score impact and confidence separately, then map each to an example escalation decision using a clearly stated hypothetical matrix.",
    "evidence": "Submit completed triage records showing facts, uncertainty, impact rationale, provisional priority, escalation owner and next review time.",
    "check": {
      "q": "A possible incident has potentially severe impact but incomplete telemetry. Which response best reflects sound triage?",
      "options": [
        "Lower severity because confidence is not certain.",
        "Treat impact and confidence separately, escalate according to the approved matrix, and document evidence gaps.",
        "Wait until every log source is restored before notifying anyone.",
        "Declare confirmed compromise based only on the possibility."
      ],
      "answer": "Treat impact and confidence separately, escalate according to the approved matrix, and document evidence gaps.",
      "why": "Urgency can be driven by plausible impact even when confidence is limited. Triage should preserve that distinction and use established escalation criteria."
    }
  },
"ds-05": {
    "objective": "Build a defensible incident timeline, preserve evidence through approved procedures, and plan recovery with validation and post-incident learning.",
    "learningGoal": "Connect investigation, evidence handling, restoration and improvement while maintaining traceability and minimizing additional harm.",
    "time": "45–60 min",
    "prerequisite": "SIEM Investigation Workflow; Incident Triage & Severity",
    "read": "An incident timeline is a sourced sequence of relevant observations and response actions. Keep source event time distinct from analyst discovery, ingestion and response-action times; record time zone and known clock uncertainty. Label facts, interpretations and unknowns separately. A timeline should be updated as new evidence arrives, with corrections traceable rather than silently overwriting earlier conclusions.\\n\\nEvidence handling follows organizational policy and applicable legal or regulatory requirements. Identify the evidence, source, collector, acquisition time, method, integrity checks where appropriate, storage location, access and transfers. Preserve originals when feasible, work from controlled copies, restrict access and document every handling step. Do not collect more personal or sensitive data than the investigation requires.\\n\\nRecovery is more than turning a service back on. Confirm containment and eradication criteria, restore from trusted sources, validate system integrity and security controls, rotate or revoke exposed credentials and tokens as applicable, and monitor for recurrence. Coordinate restoration with service owners and business continuity plans. Record residual risk and formal acceptance by the authorized owner. Conduct a post-incident review focused on contributing conditions, response effectiveness, control gaps and measurable follow-up actions; avoid unsupported attribution or blame.",
    "concepts": [
      "Timeline and time sources",
      "Evidence identification and integrity",
      "Chain of custody",
      "Controlled access and minimization",
      "Recovery validation",
      "Lessons learned and corrective actions"
    ],
    "glossary": [
      [
        "Chain of custody",
        "A documented record of who handled evidence, when, why and how."
      ],
      [
        "Integrity check",
        "A method, such as a cryptographic hash, used to detect changes to a digital evidence item."
      ],
      [
        "Eradication",
        "Removing the cause and persistence mechanisms of an incident."
      ],
      [
        "Recovery validation",
        "Checks that restored services and controls operate as intended and are not still compromised."
      ],
      [
        "Post-incident review",
        "A structured assessment that converts incident findings into owned improvements."
      ]
    ],
    "example": "For a compromised server, preserve relevant logs and disk or memory evidence only under approved procedures, record collection metadata and integrity checks, then rebuild or restore from a trusted baseline. Validate patching, identity controls, monitoring and business function before returning it to service.",
    "visual": {
      "title": "Evidence-to-recovery lifecycle",
      "caption": "Follow local policy and authorized incident command at every stage.",
      "steps": [
        "Construct sourced timeline; note clock and ingestion differences",
        "Identify and preserve relevant evidence",
        "Record acquisition, integrity and each transfer",
        "Contain and eradicate under approved authority",
        "Restore from trusted state and validate controls",
        "Monitor, document residual risk and assign improvements"
      ]
    },
    "case": "A business unit wants a server restored immediately after suspected compromise. Some logs are volatile and the restoration could overwrite evidence. The incident lead must coordinate evidence preservation and operational recovery priorities with authorized stakeholders.",
    "caseQuestions": [
      "Which evidence is time-sensitive or at risk of being overwritten?",
      "Who has authority to approve acquisition, containment and restoration decisions?",
      "What security and business checks must pass before service is declared recovered?"
    ],
    "mistakes": [
      "Changing or wiping systems before considering evidence preservation.",
      "Treating a hash alone as proof that evidence collection was complete or lawful.",
      "Restoring without validating identity, configuration and monitoring controls.",
      "Closing the incident without documenting residual risk and accountable follow-up."
    ],
    "practice": "Draft an incident timeline and evidence register for a synthetic case. Include event/action timestamps, time zone, source, collector, integrity status, access history, recovery criteria and three owned post-incident actions.",
    "evidence": "Submit a sourced timeline, evidence-handling record, recovery validation checklist and after-action table with owner, due date and success measure.",
    "check": {
      "q": "What is essential before declaring a compromised service recovered?",
      "options": [
        "The service responds to a ping.",
        "The original alert has been closed.",
        "The authorized team has validated restoration from a trusted state, relevant controls and monitoring, and documented residual risk.",
        "All logs can be deleted to reduce storage."
      ],
      "answer": "The authorized team has validated restoration from a trusted state, relevant controls and monitoring, and documented residual risk.",
      "why": "Availability alone does not establish security. Recovery requires trusted restoration, control validation, monitoring and an accountable record of remaining risk."
    }
  },
"os-01": {
    "objective": "Describe an authorized security test from scope and rules of engagement through safe validation, reporting and retesting.",
    "learningGoal": "Apply permission, bounded methods, evidence discipline and clear communication throughout an offensive assessment.",
    "time": "45–60 min",
    "prerequisite": "Cybersecurity and networking foundations",
    "read": "Offensive security evaluates safeguards through controlled, explicitly authorized testing. Before technical work, document the target assets, purpose, dates, allowed methods, exclusions, test accounts, data-handling rules, contacts and stop conditions. Written authorization and rules of engagement define the boundary; public exposure or a general request is not permission to test connected systems. Translate objectives into testable questions and plan low-impact validation using staging environments and synthetic data where possible. If activity crosses scope, exposes sensitive information or causes unexpected impact, stop and notify the agreed contact. Record observed facts, evidence provenance and limitations. Report reproducible findings with affected asset, conditions, demonstrated impact, remediation and retest criteria. Do not overstate severity or claim access beyond what was observed.",
    "concepts": [
      "Written authorization",
      "Scope and exclusions",
      "Rules of engagement",
      "Safe validation",
      "Evidence minimization",
      "Reporting and retesting"
    ],
    "glossary": [
      [
        "Rules of engagement",
        "Agreed constraints and procedures governing an authorized test."
      ],
      [
        "Scope",
        "Explicitly authorized systems, methods and time window."
      ],
      [
        "Stop condition",
        "A circumstance requiring testing to pause or stop."
      ],
      [
        "Finding",
        "An evidence-supported issue with context and remediation."
      ]
    ],
    "example": "A staging portal is in scope but its production identity provider is excluded. Use supplied staging accounts and stop if a redirect reaches production; notify the engagement contact rather than probing it.",
    "visual": {
      "title": "Authorized assessment lifecycle",
      "steps": [
        "Confirm authorization, scope and exclusions",
        "Agree methods, schedule, contacts and stop conditions",
        "Plan tests against objectives",
        "Validate only within the approved boundary",
        "Record minimal reproducible evidence",
        "Report and retest agreed fixes"
      ]
    },
    "case": "An in-scope staging app links to an excluded production host. Document the staging observation without interacting with production; seek explicit authorization before any further testing.",
    "caseQuestions": [
      "What must be checked before requesting the production host?",
      "Who should be notified and what facts recorded?",
      "How can the observation be reported without probing out of scope?"
    ],
    "mistakes": [
      "Assuming general permission covers connected assets.",
      "Continuing after a stop condition.",
      "Collecting unnecessary sensitive data.",
      "Presenting suspected impact as confirmed."
    ],
    "practice": "Create rules of engagement for a fictional staging app: assets, exclusions, methods, window, test accounts, data safeguards, contacts and stop conditions.",
    "evidence": "Submit the scope checklist and a sample finding template distinguishing facts, inference, limitations and remediation.",
    "check": {
      "q": "A staging test unexpectedly redirects to an excluded production host. What should happen?",
      "options": [
        "Continue because the redirect originated in scope.",
        "Send harmless probes to production.",
        "Stop interacting with the excluded host, preserve staging evidence and notify the designated contact.",
        "Assume production is compromised."
      ],
      "answer": "Stop interacting with the excluded host, preserve staging evidence and notify the designated contact.",
      "why": "Scope remains binding when a technical path crosses a boundary."
    }
  },
"os-02": {
    "objective": "Map an application's reachable components, identities, data flows and trust boundaries to define its authorized attack surface.",
    "learningGoal": "Use architecture and approved observation to identify entry points and security decisions for scoped testing.",
    "time": "45–60 min",
    "prerequisite": "HTTP basics; authorized assessment methodology",
    "read": "An application's attack surface includes reachable pages, APIs, authentication and recovery flows, uploads, administrative functions, integrations, background jobs and deployment interfaces. Start with an architecture model: clients, roles, services, data stores, identity providers and third parties. Trace data flows and mark trust boundaries where data or authority changes hands. For each entry point, record purpose, required identity, accepted input, sensitive actions, dependencies and expected authorization checks. Distinguish observed facts from documentation-based assumptions. Compare role capabilities and identify sensitive state-changing operations, but keep inventory and requests within approved scope. Endpoint discovery is not permission to test an asset. Date the inventory because applications change.",
    "concepts": [
      "Components and interfaces",
      "Roles and privileges",
      "API inventory",
      "Data-flow mapping",
      "Trust boundaries",
      "Scope-aware testing"
    ],
    "glossary": [
      [
        "Attack surface",
        "Reachable interfaces and behaviors through which an application may be influenced."
      ],
      [
        "Trust boundary",
        "A point where data, identity or authority crosses security domains."
      ],
      [
        "Entry point",
        "An interface through which an actor supplies input or requests an action."
      ],
      [
        "State-changing operation",
        "An action that modifies application or system state."
      ]
    ],
    "example": "For a customer portal, list role-specific routes and APIs, mark billing and profile changes, and trace the portal's connection to its identity provider and billing service.",
    "visual": {
      "title": "Attack-surface mapping",
      "steps": [
        "List approved hosts and environments",
        "Identify users, roles and service identities",
        "Inventory routes, APIs and sensitive actions",
        "Trace data flows and integrations",
        "Mark trust boundaries and authorization checks",
        "Prioritize safe tests and coverage gaps"
      ]
    },
    "case": "A customer menu hides an admin link, but an API exists. In the designated test tenant, assess whether server-side authorization protects the operation.",
    "caseQuestions": [
      "Which interfaces and roles are in scope?",
      "What evidence shows server-side enforcement?",
      "How will testing avoid other tenants and production?"
    ],
    "mistakes": [
      "Assuming hidden UI controls enforce permissions.",
      "Treating endpoint discovery as authorization.",
      "Ignoring integrations and APIs.",
      "Labeling inferred architecture as verified."
    ],
    "practice": "Draw a portal map with three roles, two APIs, a data store and a third-party integration; label sensitive operations and boundaries.",
    "evidence": "Submit diagram and inventory table with role, data sensitivity, scope and planned safe test.",
    "check": {
      "q": "A sensitive action is absent from a user's menu. What is justified?",
      "options": [
        "It is securely restricted.",
        "No user can access it.",
        "The UI hides it; server-side authorization still needs scoped verification.",
        "Any related production API may now be tested."
      ],
      "answer": "The UI hides it; server-side authorization still needs scoped verification.",
      "why": "Client-side presentation does not prove server-side access control."
    }
  },
"os-03": {
    "objective": "Explain untrusted input, injection and output-context risks, and select safe validation, query and encoding controls.",
    "learningGoal": "Recognize input-handling failure modes and apply layered defenses in an authorized lab.",
    "time": "45–60 min",
    "prerequisite": "Application attack surface; HTTP",
    "read": "Applications accept data from forms, APIs, files, headers and integrations. Treat boundary-crossing data as untrusted. Injection occurs when data is interpreted as instructions or syntax by a downstream component such as a database, command processor, template engine or browser. Avoid universal blacklists. Validate type, format and business constraints at the appropriate boundary, and use APIs that keep data separate from instructions. Database queries should bind values through parameterized interfaces rather than concatenate user input. Avoid building shell commands from untrusted strings; prefer safe library interfaces and least privilege. Output protection is context-specific: HTML text, attributes, URLs, JavaScript and CSS have different rules. Prefer framework context-aware escaping and safe DOM APIs; HTML escaping alone is not universal protection. Test with benign synthetic inputs in a designated lab, and review server-side controls rather than relying only on client-side checks.",
    "concepts": [
      "Untrusted input",
      "Interpreter boundaries",
      "Validation",
      "Parameterized queries",
      "Contextual output encoding",
      "Least privilege"
    ],
    "glossary": [
      [
        "Injection",
        "A flaw where data is interpreted as syntax or instructions."
      ],
      [
        "Input validation",
        "Checking data against defined type, format and business rules."
      ],
      [
        "Parameterized query",
        "A query that binds values separately from query structure."
      ],
      [
        "Output encoding",
        "Transforming data for safe handling in a specific output context."
      ]
    ],
    "example": "A search term should be passed to a parameterized database query. If echoed into a page, the rendering layer separately needs context-aware output handling.",
    "visual": {
      "title": "Safe input-to-output path",
      "steps": [
        "Receive data at a defined boundary",
        "Validate type and business rules",
        "Use safe APIs to pass data",
        "Limit downstream privileges",
        "Handle output for its exact context",
        "Test safely with synthetic inputs"
      ]
    },
    "case": "A support form uses client-side filtering, stores display names and later renders them in an internal dashboard. Review server-side validation and the dashboard's rendering context.",
    "caseQuestions": [
      "Why is client-only filtering insufficient?",
      "Which server-side and storage decisions matter?",
      "What output context is used and what protection fits it?"
    ],
    "mistakes": [
      "Relying on a blacklist.",
      "Confusing validation with parameterization.",
      "Using HTML escaping for every context.",
      "Testing with real data without authorization."
    ],
    "practice": "Map four fictional input fields to constraints, downstream interpreters, safe APIs and output contexts.",
    "evidence": "Submit the boundary table and explain how parameterization and contextual output handling address different risks.",
    "check": {
      "q": "A validated string is concatenated into SQL text. What remains true?",
      "options": [
        "Validation guarantees safety.",
        "Validation and safe query construction differ; use parameterized queries.",
        "Client-side validation is enough.",
        "HTML escaping fixes SQL construction."
      ],
      "answer": "Validation and safe query construction differ; use parameterized queries.",
      "why": "Validation checks business rules; parameterization separates values from query syntax."
    }
  },
"os-04": {
    "objective": "Differentiate authentication, authorization and sessions; review recovery, issuance, renewal and revocation controls.",
    "learningGoal": "Assess identity flows as a lifecycle and verify server-side permissions for each protected resource.",
    "time": "45–60 min",
    "prerequisite": "Identity fundamentals; web application attack surface",
    "read": "Authentication verifies an identity claim; authorization decides what that identity may do to a resource. Session management maintains continuity after sign-in, commonly through cookies or tokens. A successful login does not grant blanket access. Review enrollment, MFA, recovery, session creation, renewal, privilege changes, logout, timeout and revocation. Recovery must not bypass the assurance of normal sign-in. Browser cookies may use Secure, HttpOnly and SameSite attributes as appropriate, alongside expiry and rotation. Token designs require validation of issuer, audience, expiry and integrity, plus suitable revocation or short lifetimes. Enforce authorization on the server for every protected operation and object, including APIs. Apply least privilege and deny by default. Test with approved roles and synthetic records; do not access another real user's data without explicit authorization.",
    "concepts": [
      "Authentication vs authorization",
      "Session lifecycle",
      "Recovery assurance",
      "Cookie and token controls",
      "Object-level authorization",
      "Role test matrix"
    ],
    "glossary": [
      [
        "Authentication",
        "Verification of an identity claim."
      ],
      [
        "Authorization",
        "Decision whether an identity may act on a resource."
      ],
      [
        "Session",
        "Maintained context for an authenticated interaction."
      ],
      [
        "Session revocation",
        "Invalidating a session or token."
      ],
      [
        "Object-level authorization",
        "Checking access to a specific resource, not merely an endpoint."
      ]
    ],
    "example": "A customer may view their own invoice but not another customer's. Use synthetic accounts and verify the server checks ownership for each invoice request.",
    "visual": {
      "title": "Identity and session lifecycle",
      "steps": [
        "Enroll identity and recovery methods",
        "Authenticate with suitable assurance",
        "Issue protected session or token",
        "Authorize each action and resource",
        "Renew or elevate sessions safely",
        "Expire or revoke and monitor credentials"
      ]
    },
    "case": "After logout, an old tab still shows sensitive content. Determine whether this is cached display or an accepted server session using an approved test account.",
    "caseQuestions": [
      "What evidence distinguishes cache from a valid session?",
      "Which revocation and cache controls need review?",
      "How can this be tested safely with synthetic data?"
    ],
    "mistakes": [
      "Treating login as blanket authorization.",
      "Checking only UI permissions.",
      "Ignoring recovery and renewal.",
      "Assuming visual logout proves revocation."
    ],
    "practice": "Build a lifecycle checklist and role matrix covering sign-in, MFA, recovery, sensitive actions, privilege changes, logout and expiry.",
    "evidence": "Submit flow diagram and permission matrix with expected outcomes and evidence fields.",
    "check": {
      "q": "A customer is authenticated and calls an invoice API. What must be checked?",
      "options": [
        "Authentication proves ownership of every invoice.",
        "The UI hides invoice identifiers.",
        "The server authorizes that specific invoice and action on each request.",
        "Only cookie age matters."
      ],
      "answer": "The server authorizes that specific invoice and action on each request.",
      "why": "Identity verification and resource authorization are distinct."
    }
  },
"os-05": {
    "objective": "Write an evidence-based security test report with reproducible findings, impact, limitations, remediation and retest outcomes.",
    "learningGoal": "Turn authorized observations into actionable work without overstating certainty.",
    "time": "40–55 min",
    "prerequisite": "Authorized testing methodology; application security testing",
    "read": "A useful finding identifies the affected asset, tested environment, preconditions, observed behavior, expected behavior and supporting evidence. Include a concise reproduction path within scope and use synthetic or redacted data. Explain impact in system context, separating demonstrated consequences from plausible risk; state assumptions and limitations. Apply the organization's severity method and consider exposure, privileges, affected data or operations and mitigations rather than copying a scanner's default score. Recommend root-cause remediation and define acceptance criteria. A report may include summary, scope and methods, findings, evidence, risk rationale, recommendations, limitations and appendices. Assign owners and dates through normal risk processes. Retest the original condition and relevant adjacent cases, record build/version and outcome, and distinguish fixed, partially fixed, not fixed and unable to verify. A clean retest supports only a bounded conclusion about tested cases, not a guarantee of application-wide security.",
    "concepts": [
      "Reproducibility",
      "Redacted evidence",
      "Impact and assumptions",
      "Severity method",
      "Root-cause remediation",
      "Retest status"
    ],
    "glossary": [
      [
        "Demonstrated impact",
        "A consequence directly supported by collected evidence."
      ],
      [
        "Remediation",
        "A change intended to remove or reduce a weakness."
      ],
      [
        "Retest",
        "A bounded follow-up test after remediation."
      ],
      [
        "Limitation",
        "A constraint on what can be concluded from an assessment."
      ]
    ],
    "example": "For an object-level access issue, state the test tenant, roles, expected denial, observed response and redacted evidence; recommend server-side ownership checks and define a two-account retest.",
    "visual": {
      "title": "Finding-to-fix workflow",
      "steps": [
        "Record scope and test conditions",
        "Capture minimal redacted evidence",
        "Compare observed and expected behavior",
        "State impact, assumptions and limitations",
        "Recommend fix and acceptance criteria",
        "Retest and record version and outcome"
      ]
    },
    "case": "A scanner reports a critical issue, but the route appears disabled in the tested release. Validate component and version applicability; report the scanner lead separately from confirmed observations.",
    "caseQuestions": [
      "What confirms component and release applicability?",
      "How should uncertainty be stated?",
      "What should a retest verify after a relevant change?"
    ],
    "mistakes": [
      "Publishing unvalidated scanner output as confirmed.",
      "Confusing possible and demonstrated impact.",
      "Offering symptom-only fixes.",
      "Marking fixed without retest conditions."
    ],
    "practice": "Draft a synthetic-data finding report for an authorized access-control issue, including summary, scope, steps, evidence, impact, limitations, remediation and retest criteria.",
    "evidence": "Submit a redacted finding report and retest record with build, roles, test cases, result and uncertainty.",
    "check": {
      "q": "A scanner flags a vulnerability but the route is absent in the tested release. What should the report do?",
      "options": [
        "Call it confirmed critical without qualification.",
        "Ignore the signal and discard evidence.",
        "Record the signal, validate applicability, and distinguish confirmed facts from unverified items.",
        "Claim the entire application is secure."
      ],
      "answer": "Record the signal, validate applicability, and distinguish confirmed facts from unverified items.",
      "why": "Reports should separate tool leads from verified conditions and bound conclusions to actual evidence."
    }
  }
};