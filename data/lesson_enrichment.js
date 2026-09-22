const NORTHSTAR_LESSON_ENRICHMENT = {
  "sf-01": {
    "learningGoal": "Build a consistent mental model for assets, threats, vulnerabilities, controls and risk.",
    "notes": [
      "Security analysis starts by identifying assets, subjects, actions, boundaries and objectives rather than starting with a product or attack name.",
      "Use an asset→actor→action→boundary→evidence model to analyze a small system.",
      "A useful mental model must support both prevention and investigation; it should expose assumptions and show where a control actually operates.",
      "Separate observation, inference and conclusion."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. How it works",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. What to observe",
        "15 min"
      ],
      [
        "5. Professional reasoning",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sf-02": {
    "learningGoal": "Use confidentiality, integrity and availability to classify security objectives and trade-offs.",
    "notes": [
      "Confidentiality limits unauthorized disclosure, integrity protects correctness and trustworthiness, and availability protects timely access.",
      "Analyze a ransomware event, altered transaction and public data leak to see which objectives are affected and why trade-offs can exist.",
      "CIA is a foundation, not a complete security model; authenticity, accountability, privacy and resilience may also matter.",
      "Separate observation, inference and conclusion."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. How it works",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. What to observe",
        "15 min"
      ],
      [
        "5. Professional reasoning",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sf-03": {
    "learningGoal": "Distinguish identification, authentication, authorization, accounting and least privilege.",
    "notes": [
      "Identity and access management connects people, services and devices to permitted actions on resources.",
      "Separate identification, authentication, authorization, accounting and access review; explain roles, groups, service identities and least privilege.",
      "Excess privilege increases blast radius; weak lifecycle processes create orphaned accounts and stale access.",
      "Separate observation, inference and conclusion."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. How it works",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. What to observe",
        "15 min"
      ],
      [
        "5. Professional reasoning",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sf-04": {
    "learningGoal": "Map trust boundaries, entry points, assets and abuse cases before selecting mitigations.",
    "notes": [
      "Threat modeling is a structured way to anticipate unwanted outcomes before or during system design.",
      "Define assets, entry points, trust boundaries, threats, mitigations and residual risk; use a simple data-flow diagram.",
      "Threat models are hypotheses, not predictions. Their value depends on scope, assumptions, evidence and whether the model is updated as the system changes.",
      "Separate observation, inference and conclusion."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. How it works",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. What to observe",
        "15 min"
      ],
      [
        "5. Professional reasoning",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sf-05": {
    "learningGoal": "Separate events, alerts, incidents, findings and evidence so investigations stay precise.",
    "notes": [
      "Security vocabulary is useful only when terms are connected to observable actions, evidence and decisions.",
      "Distinguish event, alert, incident, vulnerability, threat, risk, control, asset and finding.",
      "Operational teams need shared definitions so escalation, measurement and reporting are consistent.",
      "Separate observation, inference and conclusion."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. How it works",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. What to observe",
        "15 min"
      ],
      [
        "5. Professional reasoning",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ns-01": {
    "prerequisite": "Foundational concepts from Networking & Network Security",
    "learningGoal": "Use layers, addresses, ports and protocols to interpret network traffic.",
    "example": "Consider a controlled enterprise scenario involving tcp/ip mental model. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Network communication uses layers so application meaning can be separated from transport, routing and local delivery.",
      "Encapsulate an HTTPS request through HTTP data, TCP, IP and Ethernet; decapsulate at the receiver.",
      "Layer-specific controls have different visibility and failure modes; encrypted payloads do not eliminate metadata and flow evidence.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ns-02": {
    "prerequisite": "Previous lesson: TCP/IP Mental Model",
    "learningGoal": "Read IPv4 addresses, CIDR notation and basic subnet boundaries.",
    "example": "Consider a controlled enterprise scenario involving ipv4/ipv6 addressing & subnets. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "IPv4 subnetting divides an address space into network and host portions using a prefix length.",
      "Convert common CIDR prefixes to ranges and determine network, broadcast and usable hosts.",
      "Subnet boundaries shape routing and segmentation; poor addressing can create unnecessary reachability.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ns-03": {
    "prerequisite": "Previous lesson: IPv4/IPv6 Addressing & Subnets",
    "learningGoal": "Compare transport behavior and interpret common port usage.",
    "example": "Consider a controlled enterprise scenario involving tcp, udp, ports & application protocols. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "TCP provides reliable ordered byte-stream delivery while UDP provides connectionless datagrams.",
      "Trace SYN/SYN-ACK/ACK, sequence numbers and retransmission; contrast with UDP request/response behavior.",
      "Unexpected listening ports and connection states can reveal exposure, but port numbers alone are not proof of malicious activity.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ns-04": {
    "prerequisite": "Previous lesson: TCP, UDP, Ports & Application Protocols",
    "learningGoal": "Understand policy enforcement and trust-zone separation.",
    "example": "Consider a controlled enterprise scenario involving routing, nat, firewalls & segmentation. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "A firewall evaluates traffic against policy, while segmentation limits which zones can communicate.",
      "Translate a business requirement into source, destination, protocol, port, action and logging; explain default-deny.",
      "Rules must be tested, logged, reviewed and aligned with application dependencies; broad rules increase blast radius.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ns-05": {
    "prerequisite": "Previous lesson: Routing, NAT, Firewalls & Segmentation",
    "learningGoal": "Build a repeatable workflow for interpreting controlled packet captures.",
    "example": "Consider a controlled enterprise scenario involving dns, dhcp & packet analysis workflow. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Packet analysis is evidence-driven inspection of frames, protocols, timing and flows.",
      "Filter a controlled capture, identify endpoints, decode the protocol, follow a flow and correlate timestamps.",
      "Captures can be incomplete and encrypted; distinguish observed packet facts from host/application conclusions.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sc-01": {
    "learningGoal": "Understand how Linux users, groups, permissions, processes and services work together to protect a computer.",
    "notes": [
      "Linux security combines users, groups, permissions, processes, services, filesystems and privileged operations.",
      "Use ownership and permission bits to reason about who can read, write or execute resources; explain sudo and root.",
      "Least privilege, patching, service minimization and auditability reduce host attack surface.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sc-02": {
    "prerequisite": "Previous lesson: Linux Security Fundamentals",
    "learningGoal": "Recognize service exposure and process relationships.",
    "example": "Consider a controlled enterprise scenario involving processes, services & isolation. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Processes execute code; services provide persistent functions and often create listeners or scheduled work.",
      "Read a process tree conceptually, connect PIDs to executable paths, users, resources and services.",
      "Unexpected process ancestry, persistence or listeners are investigation signals that require context.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sc-03": {
    "prerequisite": "Previous lesson: Processes, Services & Isolation",
    "learningGoal": "Separate provider responsibilities from customer responsibilities.",
    "example": "Consider a controlled enterprise scenario involving virtualization, containers & cloud shared responsibility. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Cloud responsibility is divided according to service model and architecture.",
      "Compare IaaS, PaaS and SaaS and map provider/customer control for compute, network, platform, data and identity.",
      "Misconfiguration remains a major customer-side risk even when infrastructure is provider-managed.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sc-04": {
    "prerequisite": "Previous lesson: Virtualization, Containers & Cloud Shared Responsibility",
    "learningGoal": "Turn baseline requirements into measurable configuration checks.",
    "example": "Consider a controlled enterprise scenario involving secure configuration & hardening. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Hardening reduces unnecessary attack surface while preserving required business functionality.",
      "Inventory, baseline, change, validate, monitor drift and document exceptions.",
      "Hardening must be tested and reversible; disabling a dependency without understanding it can create outages.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sc-05": {
    "prerequisite": "Previous lesson: Secure Configuration & Hardening",
    "learningGoal": "Apply least privilege to cloud identities and protect credentials.",
    "example": "Consider a controlled enterprise scenario involving cloud iam, workload identity & secrets. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Cloud identities and secrets authorize access to high-value resources and must have controlled lifecycles.",
      "Compare human identity, workload identity, role, token and secret store; explain rotation and revocation.",
      "Least privilege, short-lived credentials and monitored secret access reduce blast radius.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ds-01": {
    "prerequisite": "Foundational concepts from Defensive Security & SOC",
    "learningGoal": "Choose telemetry that supports security questions.",
    "example": "Consider a controlled enterprise scenario involving logging for detection. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Logs turn activity into evidence for detection, investigation and accountability.",
      "Design event fields for actor, action, resource, outcome, timestamp, source and correlation.",
      "Useful telemetry balances coverage, cost, privacy, retention and integrity.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ds-02": {
    "prerequisite": "Previous lesson: Logging for Detection",
    "learningGoal": "Turn observable behavior into testable detection logic.",
    "example": "Consider a controlled enterprise scenario involving detection engineering basics. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Detection engineering converts a threat hypothesis into testable logic over telemetry.",
      "Define data dependencies, analytic condition, baseline, threshold, expected behavior and tuning loop.",
      "A detection is a maintained control; false positives, false negatives and data drift must be measured.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ds-03": {
    "prerequisite": "Previous lesson: Detection Engineering Basics",
    "learningGoal": "Search, pivot, correlate and document findings.",
    "example": "Consider a controlled enterprise scenario involving siem investigation workflow. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "SIEM investigation correlates telemetry so analysts can reconstruct activity across entities and time.",
      "Start with alert validation, scope, pivots, timeline, corroboration, impact and documentation.",
      "Correlation can amplify bad data; analysts must validate source quality and distinguish evidence from inference.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ds-04": {
    "prerequisite": "Previous lesson: SIEM Investigation Workflow",
    "learningGoal": "Classify incidents using impact, scope and confidence.",
    "example": "Consider a controlled enterprise scenario involving incident triage & severity. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Incident triage is decision-making under uncertainty about scope, impact, confidence and urgency.",
      "Separate severity, priority, confidence and business impact; choose containment based on evidence and potential harm.",
      "Premature containment can disrupt operations; delayed action can increase exposure.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ds-05": {
    "prerequisite": "Previous lesson: Incident Triage & Severity",
    "learningGoal": "Build a defensible timeline from controlled evidence.",
    "example": "Consider a controlled enterprise scenario involving evidence, incident timeline & recovery. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "An incident timeline is a chronological evidence model that connects artifacts into a defensible narrative.",
      "Normalize time zones, preserve source references, mark inferred events and record gaps.",
      "Evidence provenance and integrity determine whether the timeline can support later review.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "os-01": {
    "prerequisite": "Foundational concepts from Offensive & Application Security",
    "learningGoal": "Understand scoped reconnaissance, validation, exploitation and reporting.",
    "example": "Consider a controlled enterprise scenario involving offensive security methodology. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Authorized offensive security is a controlled assessment with scope, rules, discovery, validation, impact analysis and reporting.",
      "Move from reconnaissance to enumeration to safe validation without crossing authorization boundaries.",
      "A finding must connect a verified condition to affected scope, impact and remediation.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "os-02": {
    "prerequisite": "Previous lesson: Offensive Security Methodology",
    "learningGoal": "Map pages, APIs, inputs, authentication boundaries and trust relationships.",
    "example": "Consider a controlled enterprise scenario involving web application attack surface. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "A web attack surface includes routes, APIs, parameters, identities, sessions, uploads, dependencies and integrations.",
      "Map browser→web server→API→data store and identify attacker-controlled inputs and trust boundaries.",
      "Authorization and architecture weaknesses can be more important than input filtering alone.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "os-03": {
    "prerequisite": "Previous lesson: Web Application Attack Surface",
    "learningGoal": "Understand why untrusted input can alter program behavior.",
    "example": "Consider a controlled enterprise scenario involving input validation, injection & output encoding. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Injection occurs when untrusted input is interpreted as code, query language or markup rather than data.",
      "Contrast concatenated queries/commands with parameterized or safely encoded designs; explain context.",
      "The durable defense is to preserve code/data separation and use safe interfaces, not fragile blacklists.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "os-04": {
    "prerequisite": "Previous lesson: Input Validation, Injection & Output Encoding",
    "learningGoal": "Evaluate authentication boundaries and session handling safely.",
    "example": "Consider a controlled enterprise scenario involving authentication, authorization & session security. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Authentication establishes identity; authorization determines permitted actions; sessions preserve authenticated state.",
      "Trace login, session issuance, authorization checks, logout, timeout and recovery.",
      "Strong authentication cannot compensate for broken authorization or insecure session lifecycle.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "os-05": {
    "prerequisite": "Previous lesson: Authentication, Authorization & Session Security",
    "learningGoal": "Turn technical observations into reproducible, useful findings.",
    "example": "Consider a controlled enterprise scenario involving security testing, findings & remediation reporting. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "A security report turns technical evidence into a reproducible finding and an actionable remediation.",
      "Write scope, preconditions, observation, evidence, impact, severity context, remediation and limitations.",
      "Reports should distinguish observed facts from inferred impact and avoid overstating certainty.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "se-01": {
    "prerequisite": "Foundational concepts from Security Engineering & DevSecOps",
    "learningGoal": "Integrate security requirements throughout software delivery.",
    "example": "Consider a controlled enterprise scenario involving secure software lifecycle. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Secure development integrates security requirements, threat modeling, secure design, implementation, testing, release and operations.",
      "Map security activities across the software lifecycle and identify evidence produced at each stage.",
      "Finding defects earlier reduces rework, but lifecycle controls must fit developer workflows and business risk.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "se-02": {
    "prerequisite": "Previous lesson: Secure Software Lifecycle",
    "learningGoal": "Design repeatable checks that produce auditable evidence.",
    "example": "Consider a controlled enterprise scenario involving security automation. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Security automation makes repeatable checks fast and consistent while preserving safe failure behavior.",
      "Design a security job with bounded permissions, deterministic inputs, validation, logging and explicit failure handling.",
      "Automation can amplify bad assumptions, so every automated decision needs scope and observability.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "se-03": {
    "prerequisite": "Previous lesson: Security Automation",
    "learningGoal": "Apply defense in depth, trust boundaries and failure containment.",
    "example": "Consider a controlled enterprise scenario involving security architecture. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Security architecture places controls at trust boundaries and balances security, usability, cost and operational constraints.",
      "Model users, services, data stores, zones and control points; explain defense in depth and zero-trust principles.",
      "A good architecture makes unwanted flows difficult and legitimate flows observable.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "se-04": {
    "prerequisite": "Previous lesson: Security Architecture",
    "learningGoal": "Prioritize remediation using evidence and business context.",
    "example": "Consider a controlled enterprise scenario involving vulnerability, dependency & supply-chain management. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Vulnerability management is a lifecycle of discovery, validation, prioritization, remediation, verification and exception handling.",
      "Combine technical severity with asset criticality, exposure, exploitability and business context.",
      "A vulnerability queue is a risk-management process, not simply a list sorted by scanner score.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "se-05": {
    "prerequisite": "Previous lesson: Vulnerability, Dependency & Supply-Chain Management",
    "learningGoal": "Measure capability using outcomes rather than vanity metrics.",
    "example": "Consider a controlled enterprise scenario involving security metrics, sbom & evidence. Start with the normal expected behavior, then introduce one abnormal condition. Trace what changes and identify the evidence that would distinguish a genuine security issue from a configuration, operational or data-quality problem.",
    "notes": [
      "Security metrics should measure outcomes and control performance rather than activity volume alone.",
      "Define numerator, denominator, population, time window, target and evidence source for each metric.",
      "Poorly designed metrics can create misleading trends and incentives.",
      "Separate facts, hypotheses and conclusions."
    ],
    "studyPlan": [
      [
        "1. First principles",
        "15 min"
      ],
      [
        "2. Mechanism and workflow",
        "20 min"
      ],
      [
        "3. Security implications",
        "20 min"
      ],
      [
        "4. Evidence and uncertainty",
        "15 min"
      ],
      [
        "5. Professional decision-making",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-01": {
    "learningGoal": "Learn to turn a real problem into a small sequence of precise instructions.",
    "notes": [
      "Break How Programmers Think: Inputs → Rules → Outputs into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-02": {
    "learningGoal": "Understand how Python stores values and why data type affects what an operation means.",
    "notes": [
      "Break Variables & Data Types into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-03": {
    "learningGoal": "Use if/else decisions and Boolean logic to express security rules clearly.",
    "notes": [
      "Break Conditions & Boolean Logic into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-04": {
    "learningGoal": "Process many records with loops while avoiding missed data and runaway repetition.",
    "notes": [
      "Break Loops: Repeating Work Safely into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-05": {
    "learningGoal": "Break a larger program into small reusable pieces with clear inputs and outputs.",
    "notes": [
      "Break Functions & Decomposition into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-06": {
    "learningGoal": "Choose basic Python collections based on the shape of the data and the operation you need.",
    "notes": [
      "Break Python Collections: Lists, Dictionaries & Sets into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-07": {
    "learningGoal": "Read common structured-data formats and validate their contents before analysis.",
    "notes": [
      "Break CSV & JSON: Working With Real Data into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-08": {
    "learningGoal": "Make programs fail clearly and verify behavior with deliberate tests.",
    "notes": [
      "Break Errors, Validation & Testing into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-09": {
    "learningGoal": "Understand tables, rows, columns and SELECT queries as a way to retrieve evidence.",
    "notes": [
      "Break SQL Fundamentals: Ask Questions of Tables into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-10": {
    "learningGoal": "Combine related tables and summarize security evidence with COUNT, GROUP BY and joins.",
    "notes": [
      "Break SQL Filtering, Joins, Aggregation & Data Modeling into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-11": {
    "learningGoal": "Combine Python, validation and data handling into a safe repeatable security workflow.",
    "notes": [
      "Break Security Automation with Python & Reproducible Pipelines into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "pro-12": {
    "learningGoal": "Integrate Python and data reasoning to produce an evidence-based authentication analysis.",
    "notes": [
      "Break Mini Project: Authentication Log Analyzer into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-01": {
    "learningGoal": "Understand data thinking and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Data Thinking without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-02": {
    "learningGoal": "Understand population, sample & bias and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Population, Sample & Bias without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-03": {
    "learningGoal": "Understand mean, median & percentiles and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Mean, Median & Percentiles without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-04": {
    "learningGoal": "Understand variation & standard deviation and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Variation & Standard Deviation without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-05": {
    "learningGoal": "Understand distributions & histograms and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Distributions & Histograms without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-06": {
    "learningGoal": "Understand probability fundamentals and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Probability Fundamentals without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-07": {
    "learningGoal": "Understand conditional probability & bayes intuition and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Conditional Probability & Bayes Intuition without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-08": {
    "learningGoal": "Understand correlation vs causation and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Correlation vs Causation without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-09": {
    "learningGoal": "Understand sampling & confidence and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Sampling & Confidence without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-10": {
    "learningGoal": "Understand data cleaning & missing values and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Data Cleaning & Missing Values without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-11": {
    "learningGoal": "Understand visualization for security data and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Visualization for Security Data without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "dat-12": {
    "learningGoal": "Understand mini project: security operations analysis and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Mini Project: Security Operations Analysis without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-01": {
    "learningGoal": "Understand what machine learning is and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain What Machine Learning Is without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-02": {
    "learningGoal": "Understand features, labels & datasets and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Features, Labels & Datasets without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-03": {
    "learningGoal": "Understand train, validation & test sets and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Train, Validation & Test Sets without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-04": {
    "learningGoal": "Understand linear regression and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Linear Regression without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-05": {
    "learningGoal": "Understand classification fundamentals and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Classification Fundamentals without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-06": {
    "learningGoal": "Understand decision trees & rules and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Decision Trees & Rules without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-07": {
    "learningGoal": "Understand nearest neighbors & similarity and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Nearest Neighbors & Similarity without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-08": {
    "learningGoal": "Understand clustering & anomaly thinking and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Clustering & Anomaly Thinking without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-09": {
    "learningGoal": "Understand precision, recall & confusion matrix and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Precision, Recall & Confusion Matrix without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-10": {
    "learningGoal": "Understand overfitting & generalization and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Overfitting & Generalization without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-11": {
    "learningGoal": "Understand feature leakage, bias & drift and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Feature Leakage, Bias & Drift without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "mac-12": {
    "learningGoal": "Understand mini project: suspicious login classifier and apply it to a realistic data & analytics problem.",
    "notes": [
      "You should be able to explain Mini Project: Suspicious Login Classifier without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-01": {
    "learningGoal": "Understand security telemetry and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Security Telemetry without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-02": {
    "learningGoal": "Understand events, logs & fields and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Events, Logs & Fields without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-03": {
    "learningGoal": "Understand normalization & enrichment and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Normalization & Enrichment without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-04": {
    "learningGoal": "Understand detection hypotheses and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Detection Hypotheses without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-05": {
    "learningGoal": "Understand rule logic & thresholds and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Rule Logic & Thresholds without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-06": {
    "learningGoal": "Understand authentication analytics and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Authentication Analytics without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-07": {
    "learningGoal": "Understand endpoint & process telemetry and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Endpoint & Process Telemetry without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-08": {
    "learningGoal": "Understand network detection concepts and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Network Detection Concepts without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-09": {
    "learningGoal": "Understand siem investigation workflow and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain SIEM Investigation Workflow without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-10": {
    "learningGoal": "Understand detection testing & false positives and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Detection Testing & False Positives without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-11": {
    "learningGoal": "Understand threat-informed detection and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Threat-Informed Detection without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "sec-12": {
    "learningGoal": "Understand mini project: build an investigation playbook and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Mini Project: Build an Investigation Playbook without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-01": {
    "learningGoal": "Understand cloud mental model and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Cloud Mental Model without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-02": {
    "learningGoal": "Understand shared responsibility and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Shared Responsibility without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-03": {
    "learningGoal": "Understand cloud identity & least privilege and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Cloud Identity & Least Privilege without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-04": {
    "learningGoal": "Understand network segmentation in cloud and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Network Segmentation in Cloud without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-05": {
    "learningGoal": "Understand storage & data protection and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Storage & Data Protection without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-06": {
    "learningGoal": "Understand secrets & key management and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Secrets & Key Management without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-07": {
    "learningGoal": "Understand workload security and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Workload Security without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-08": {
    "learningGoal": "Understand secure ci/cd and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Secure CI/CD without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-09": {
    "learningGoal": "Understand security testing in pipelines and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Security Testing in Pipelines without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-10": {
    "learningGoal": "Understand infrastructure as code security and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Infrastructure as Code Security without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-11": {
    "learningGoal": "Understand cloud monitoring & incident response and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Cloud Monitoring & Incident Response without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "clo-12": {
    "learningGoal": "Understand mini project: secure cloud application and apply it to a realistic advanced security problem.",
    "notes": [
      "You should be able to explain Mini Project: Secure Cloud Application without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-01": {
    "learningGoal": "Understand security as a business function and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Security as a Business Function without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-02": {
    "learningGoal": "Understand risk vocabulary and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Risk Vocabulary without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-03": {
    "learningGoal": "Understand asset & business impact and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Asset & Business Impact without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-04": {
    "learningGoal": "Understand threat, vulnerability & control and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Threat, Vulnerability & Control without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-05": {
    "learningGoal": "Understand risk assessment and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Risk Assessment without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-06": {
    "learningGoal": "Understand risk treatment & acceptance and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Risk Treatment & Acceptance without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-07": {
    "learningGoal": "Understand control design & effectiveness and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Control Design & Effectiveness without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-08": {
    "learningGoal": "Understand policies & standards and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Policies & Standards without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-09": {
    "learningGoal": "Understand compliance & evidence and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Compliance & Evidence without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-10": {
    "learningGoal": "Understand third-party risk and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Third-Party Risk without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-11": {
    "learningGoal": "Understand security metrics for leaders and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Security Metrics for Leaders without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "cyb-12": {
    "learningGoal": "Understand mini project: enterprise cyber risk register and apply it to a realistic management & governance problem.",
    "notes": [
      "You should be able to explain Mini Project: Enterprise Cyber Risk Register without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-01": {
    "learningGoal": "Build first-principles understanding of cryptographic goals & threat models and apply it to a controlled security decision.",
    "notes": [
      "Break Cryptographic Goals & Threat Models into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-02": {
    "learningGoal": "Build first-principles understanding of hash functions, integrity & password storage and apply it to a controlled security decision.",
    "notes": [
      "Break Hash Functions, Integrity & Password Storage into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-03": {
    "learningGoal": "Build first-principles understanding of symmetric encryption & authenticated encryption and apply it to a controlled security decision.",
    "notes": [
      "Break Symmetric Encryption & Authenticated Encryption into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-04": {
    "learningGoal": "Build first-principles understanding of public-key cryptography & key exchange and apply it to a controlled security decision.",
    "notes": [
      "Break Public-Key Cryptography & Key Exchange into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-05": {
    "learningGoal": "Build first-principles understanding of digital signatures, certificates & pki and apply it to a controlled security decision.",
    "notes": [
      "Break Digital Signatures, Certificates & PKI into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-06": {
    "learningGoal": "Build first-principles understanding of tls and secure communication and apply it to a controlled security decision.",
    "notes": [
      "Break TLS and Secure Communication into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-07": {
    "learningGoal": "Build first-principles understanding of key management & cryptographic failure modes and apply it to a controlled security decision.",
    "notes": [
      "Break Key Management & Cryptographic Failure Modes into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ct-08": {
    "learningGoal": "Build first-principles understanding of privacy engineering & data protection and apply it to a controlled security decision.",
    "notes": [
      "Break Privacy Engineering & Data Protection into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-01": {
    "learningGoal": "Build first-principles understanding of ai security mental models and apply it to a controlled security decision.",
    "notes": [
      "Break AI Security Mental Models into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-02": {
    "learningGoal": "Build first-principles understanding of adversarial machine learning and apply it to a controlled security decision.",
    "notes": [
      "Break Adversarial Machine Learning into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-03": {
    "learningGoal": "Build first-principles understanding of data poisoning, evasion & model theft and apply it to a controlled security decision.",
    "notes": [
      "Break Data Poisoning, Evasion & Model Theft into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-04": {
    "learningGoal": "Build first-principles understanding of llm security & prompt injection and apply it to a controlled security decision.",
    "notes": [
      "Break LLM Security & Prompt Injection into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-05": {
    "learningGoal": "Build first-principles understanding of ai agents, tools & trust boundaries and apply it to a controlled security decision.",
    "notes": [
      "Break AI Agents, Tools & Trust Boundaries into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-06": {
    "learningGoal": "Build first-principles understanding of responsible ai, privacy & governance and apply it to a controlled security decision.",
    "notes": [
      "Break Responsible AI, Privacy & Governance into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-07": {
    "learningGoal": "Build first-principles understanding of iot, ot/ics & cyber-physical resilience and apply it to a controlled security decision.",
    "notes": [
      "Break IoT, OT/ICS & Cyber-Physical Resilience into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ae-08": {
    "learningGoal": "Build first-principles understanding of supply chain & emerging technology risk and apply it to a controlled security decision.",
    "notes": [
      "Break Supply Chain & Emerging Technology Risk into the smallest useful steps. Identify the trust boundary, privilege boundary, data boundary or statistical assumption that changes the conclusion.",
      "A professional answer should name the decision, the evidence supporting it, the uncertainty that remains and the observation that would change the decision."
    ],
    "studyPlan": [
      [
        "Mechanism and boundary",
        "15 min"
      ],
      [
        "Decision and evidence",
        "20 min"
      ],
      [
        "Mental model",
        "20 min"
      ],
      [
        "Mechanism",
        "15 min"
      ],
      [
        "Security implications",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-01": {
    "learningGoal": "Understand capstone brief & problem framing and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Capstone Brief & Problem Framing without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-02": {
    "learningGoal": "Understand enterprise asset model and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Enterprise Asset Model without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-03": {
    "learningGoal": "Understand threat & trust-boundary mapping and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Threat & Trust-Boundary Mapping without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-04": {
    "learningGoal": "Understand data & evidence plan and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Data & Evidence Plan without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-05": {
    "learningGoal": "Understand security architecture and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Security Architecture without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-06": {
    "learningGoal": "Understand identity & access strategy and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Identity & Access Strategy without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-07": {
    "learningGoal": "Understand detection & response strategy and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Detection & Response Strategy without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-08": {
    "learningGoal": "Understand security analytics plan and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Security Analytics Plan without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-09": {
    "learningGoal": "Understand cloud & devsecops controls and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Cloud & DevSecOps Controls without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-10": {
    "learningGoal": "Understand risk & investment prioritization and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Risk & Investment Prioritization without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-11": {
    "learningGoal": "Understand executive communication and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Executive Communication without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  },
  "ent-12": {
    "learningGoal": "Understand final defense & reflection and apply it to a realistic integration problem.",
    "notes": [
      "You should be able to explain Final Defense & Reflection without reading the lesson.",
      "You should be able to apply it to a new case.",
      "You should be able to identify evidence and limitations.",
      "You should be able to communicate the result to another professional."
    ],
    "studyPlan": [
      [
        "Conceptual foundation",
        "15 min"
      ],
      [
        "Mechanism and assumptions",
        "20 min"
      ],
      [
        "Security implications",
        "20 min"
      ],
      [
        "Applied case reasoning",
        "15 min"
      ],
      [
        "Professional evidence",
        "15 min"
      ],
      [
        "Practice + Q&A",
        "15 min"
      ]
    ]
  }
};\n