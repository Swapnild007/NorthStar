const NORTHSTAR_CURRICULUM = [
  {
  "id": "computer-foundations",
  "code": "00",
  "title": "Computer & Digital Foundations",
  "category": "Foundation",
  "description": "Start from zero: computers, operating systems, files, the internet, browsers, data and basic digital safety.",
  "meta": {
    "level": "Absolute Beginner",
    "load": "14–18 hours",
    "focus": "Build the mental model required before cybersecurity, programming and data science become comfortable.",
    "outcomes": [
      "Explain what a computer, operating system, application and network do in simple terms.",
      "Understand files, folders, storage, memory and processes without relying on memorized jargon.",
      "Explain how a browser reaches a website using DNS, IP addresses, ports and HTTPS at a beginner level.",
      "Recognize common digital-risk patterns such as weak authentication, unsafe downloads and oversharing.",
      "Read simple data tables and distinguish a value, field, record and dataset."
    ],
    "topics": [
      "Computer basics",
      "Operating systems",
      "Files & storage",
      "Processes",
      "Internet basics",
      "DNS & IP",
      "Web & HTTPS",
      "Digital safety",
      "Data basics"
    ],
    "case": "Case: a new employee receives a company laptop and must safely connect to the internet, access a web application and handle a customer CSV without exposing it.",
    "assessment": "Foundation concept checks + digital-safety review + simple data interpretation exercise",
    "lab": "Digital Systems Orientation"
  },
  "lessons": [
    {
      "id": "cf-01",
      "title": "What Is a Computer?",
      "objective": "Build a simple mental model of hardware, software, data and instructions.",
      "time": "75–90 minutes",
      "prerequisite": "None",
      "read": "A computer is a machine that follows instructions to work with information. Start with four ideas: hardware, software, data and instructions. Hardware is the physical equipment such as processor, memory and storage. Software is the instructions that tell hardware what to do. Data is the information those instructions work on.\n\nThe CPU executes instructions. RAM holds information programs are actively using. Storage keeps information when power is off. Security begins here because later security work is about protecting hardware, software, data and the instructions that operate on them.",
      "concepts": [
        "Hardware",
        "Software",
        "CPU",
        "RAM",
        "Storage",
        "Data",
        "Instructions"
      ],
      "glossary": [
        [
          "Hardware",
          "Physical components of a computing device."
        ],
        [
          "Software",
          "Instructions and programs."
        ],
        [
          "CPU",
          "Processor that executes instructions."
        ],
        [
          "RAM",
          "Working memory used by active programs."
        ],
        [
          "Storage",
          "Persistent space for data and programs."
        ]
      ],
      "example": "A photo is stored on storage, opened by an application, loaded into RAM and processed by the CPU.",
      "visual": {
        "title": "A computer mental model: Input",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "A computer mental model: Input",
          "CPU + RAM",
          "Storage",
          "Output"
        ]
      },
      "case": "Case — What Is a Computer?: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"What Is a Computer?\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "Which component primarily executes program instructions?",
        "options": [
          "CPU",
          "SSD",
          "Keyboard",
          "Monitor"
        ],
        "answer": "CPU",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-02",
      "title": "Operating Systems: The Computer's Manager",
      "objective": "Understand why an operating system exists and how it manages programs, users, files and hardware.",
      "time": "75–90 minutes",
      "prerequisite": "Computer basics",
      "read": "An operating system is the main software layer that manages a computer and provides services to applications. Windows, macOS, Linux, Android and iOS are examples. Think of the OS as a manager between applications and hardware.\n\nApplications ask the OS to open files, use memory, create network connections and access devices. This separation also gives the OS a place to enforce security boundaries such as permissions and process isolation.",
      "concepts": [
        "Operating system",
        "Application",
        "Kernel",
        "User account",
        "Permission",
        "Process"
      ],
      "glossary": [
        [
          "Operating system",
          "Core software that manages hardware and provides services."
        ],
        [
          "Application",
          "A program designed to perform a task."
        ],
        [
          "Kernel",
          "Privileged core of an operating system."
        ],
        [
          "Permission",
          "A rule describing allowed actions."
        ],
        [
          "Process",
          "A running instance of a program."
        ]
      ],
      "example": "A browser asks the operating system to create a downloaded file. The OS applies the relevant permissions and performs the storage operation.",
      "visual": {
        "title": "User",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "User",
          "Application",
          "Operating system",
          "Hardware"
        ]
      },
      "case": "Case — Operating Systems: The Computer's Manager: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"Operating Systems: The Computer's Manager\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "What is a major security role of an operating system?",
        "options": [
          "Managing access to resources and running programs",
          "Replacing every application",
          "Making all files public",
          "Eliminating the need for users"
        ],
        "answer": "Managing access to resources and running programs",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-03",
      "title": "Files, Folders & Storage",
      "objective": "Understand how digital information is organized, stored and exposed through files and directories.",
      "time": "75–90 minutes",
      "prerequisite": "Operating systems",
      "read": "A file is a named collection of digital information. A folder organizes files and other folders. The security questions are simple: where is the information, who can access it, and how long should it exist?\n\nData can also exist in backups, temporary files, browser caches, synchronization services and old copies. Security therefore considers the data lifecycle, not only the file visible on screen.",
      "concepts": [
        "File",
        "Directory",
        "Path",
        "Extension",
        "Storage",
        "Data classification",
        "Backup"
      ],
      "glossary": [
        [
          "File",
          "Named unit of stored information."
        ],
        [
          "Directory",
          "Container used to organize files."
        ],
        [
          "Path",
          "Location of a file or directory."
        ],
        [
          "Data classification",
          "A rule describing sensitivity or importance."
        ],
        [
          "Backup",
          "Separate copy used for recovery."
        ]
      ],
      "example": "A customer CSV may exist in a primary folder, a backup and a synchronized copy. Access rules should cover the lifecycle.",
      "visual": {
        "title": "Create",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Create",
          "Store",
          "Use",
          "Copy",
          "Retain or delete"
        ]
      },
      "case": "Case — Files, Folders & Storage: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"Files, Folders & Storage\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "Why is data classification useful?",
        "options": [
          "It helps determine appropriate handling and access",
          "It automatically encrypts every file",
          "It makes files smaller",
          "It removes the need for backups"
        ],
        "answer": "It helps determine appropriate handling and access",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-04",
      "title": "Programs, Processes & Memory",
      "objective": "Understand the difference between a program and a running process and why process identity matters to security.",
      "time": "75–90 minutes",
      "prerequisite": "Operating systems",
      "read": "A program is stored instructions. A process is a running instance of a program. One program can create several processes. Security controls often apply to the running process and its identity.\n\nMemory is the active workspace used by running programs. If a process has too much authority, a compromise can have a larger impact. The key mental model is: stored instructions become running processes, processes consume resources, and identity and permissions limit actions.",
      "concepts": [
        "Program",
        "Process",
        "Parent process",
        "Memory",
        "Process identity",
        "Privilege"
      ],
      "glossary": [
        [
          "Program",
          "Stored instructions."
        ],
        [
          "Process",
          "Running instance of a program."
        ],
        [
          "Memory",
          "Working space used by active programs."
        ],
        [
          "Privilege",
          "Authority available to an identity or process."
        ]
      ],
      "example": "A web server process runs under a dedicated identity. Its permissions influence what a compromise could reach.",
      "visual": {
        "title": "Program on disk",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Program on disk",
          "Process starts",
          "Identity + memory",
          "Actions",
          "Permissions"
        ]
      },
      "case": "Case — Programs, Processes & Memory: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"Programs, Processes & Memory\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "Which statement is correct?",
        "options": [
          "A process is a running instance of a program",
          "A process is always a file on disk",
          "A program can never create a process",
          "Memory is the same as storage"
        ],
        "answer": "A process is a running instance of a program",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-05",
      "title": "How the Internet Works",
      "objective": "Build a beginner mental model of devices, networks, IP addresses and data moving between systems.",
      "time": "90–120 minutes",
      "prerequisite": "Computer basics",
      "read": "The internet is a network of networks. Your device connects to a local network, which connects through routers and service providers to other networks. Data is exchanged between endpoints using protocols.\n\nAn IP address identifies a network endpoint. Routers use IP information to decide where packets should go. DNS helps translate human-friendly names into addressing information. Ports help identify transport endpoints associated with services.",
      "concepts": [
        "Network",
        "Router",
        "IP address",
        "Packet",
        "DNS",
        "Port",
        "Endpoint"
      ],
      "glossary": [
        [
          "Network",
          "Connected systems that exchange information."
        ],
        [
          "Router",
          "System that forwards traffic between networks."
        ],
        [
          "IP address",
          "Network-layer address for an endpoint."
        ],
        [
          "Packet",
          "Unit of network data."
        ],
        [
          "DNS",
          "Naming and lookup system."
        ],
        [
          "Port",
          "Transport endpoint number."
        ]
      ],
      "example": "Your device connects to a local network, then routers and service providers carry traffic toward the destination.",
      "visual": {
        "title": "Your device",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Your device",
          "Local network",
          "ISP",
          "Other networks",
          "Destination server"
        ]
      },
      "case": "Case — How the Internet Works: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"How the Internet Works\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "What is the main purpose of DNS at a beginner level?",
        "options": [
          "Help translate human-friendly names into network addressing information",
          "Encrypt every file",
          "Replace the CPU",
          "Store every website"
        ],
        "answer": "Help translate human-friendly names into network addressing information",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-06",
      "title": "DNS, IP Addresses & Ports",
      "objective": "Connect names, IP addresses, ports and services into one usable mental model.",
      "time": "90–120 minutes",
      "prerequisite": "How the Internet Works",
      "read": "A network connection needs a destination and a service. The destination is associated with an IP address. The service endpoint is associated with a port. DNS helps an application find addressing information from a name.\n\nPorts are not literal doors, but the analogy can help: a port identifies a transport endpoint associated with a service. Security teams care about exposed ports because unnecessary services increase attack surface.",
      "concepts": [
        "Domain",
        "DNS lookup",
        "IPv4 address",
        "IPv6 address",
        "TCP/UDP port",
        "Service endpoint"
      ],
      "glossary": [
        [
          "Domain",
          "Human-friendly network name."
        ],
        [
          "IP address",
          "Network-layer endpoint address."
        ],
        [
          "Port",
          "Number identifying a transport endpoint."
        ],
        [
          "Service endpoint",
          "Network-accessible service destination."
        ]
      ],
      "example": "A public web service may need one port exposed while an unrelated administrative service should remain restricted.",
      "visual": {
        "title": "Domain",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Domain",
          "DNS lookup",
          "IP address",
          "Port",
          "Application service"
        ]
      },
      "case": "Case — DNS, IP Addresses & Ports: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"DNS, IP Addresses & Ports\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "What does a port primarily help identify?",
        "options": [
          "A transport endpoint associated with a service",
          "The physical size of a server",
          "A user's password",
          "The brand of a router"
        ],
        "answer": "A transport endpoint associated with a service",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-07",
      "title": "Websites, HTTP & HTTPS",
      "objective": "Understand the basic browser-to-web-server request flow and why HTTPS matters.",
      "time": "90–120 minutes",
      "prerequisite": "DNS, IP Addresses & Ports",
      "read": "A browser is a client. A web server or application receives requests and returns responses. HTTP defines web request and response structure.\n\nHTTPS means HTTP is protected by TLS. TLS provides encryption in transit and helps the client verify the intended server when certificates are validated correctly. HTTPS protects communication; it does not automatically make the application secure or authorize users correctly.",
      "concepts": [
        "Client",
        "Server",
        "HTTP",
        "HTTPS",
        "TLS",
        "Request",
        "Response",
        "Certificate"
      ],
      "glossary": [
        [
          "Client",
          "System that requests a service."
        ],
        [
          "Server",
          "System that provides a service."
        ],
        [
          "HTTP",
          "Web communication protocol."
        ],
        [
          "HTTPS",
          "HTTP protected using TLS."
        ],
        [
          "TLS",
          "Protocol providing cryptographic protection."
        ],
        [
          "Certificate",
          "Digital credential used in TLS server authentication."
        ]
      ],
      "example": "HTTPS can protect a login request while it travels across the network, but the server still needs correct authentication and authorization.",
      "visual": {
        "title": "Browser",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Browser",
          "DNS/network",
          "TLS",
          "HTTPS request",
          "Server response"
        ]
      },
      "case": "Case — Websites, HTTP & HTTPS: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"Websites, HTTP & HTTPS\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "What is HTTPS primarily adding to HTTP?",
        "options": [
          "TLS-based protection for the communication channel",
          "Automatic administrator privileges",
          "A larger screen",
          "A replacement for authorization"
        ],
        "answer": "TLS-based protection for the communication channel",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-08",
      "title": "Accounts, Passwords & Multi-Factor Authentication",
      "objective": "Understand authentication, passwords, password managers and multi-factor authentication.",
      "time": "90–120 minutes",
      "prerequisite": "Operating systems + web basics",
      "read": "Authentication asks how a system gains confidence that an identity is really you. A password is one factor based on something you know. Other factors include something you have or something you are.\n\nMFA combines different factor categories. It reduces the chance that one stolen secret is enough for access, but recovery processes, phishing and stolen sessions still matter. Unique passwords and password managers reduce reuse risk.",
      "concepts": [
        "Authentication",
        "Password",
        "Password manager",
        "MFA",
        "Recovery",
        "Phishing"
      ],
      "glossary": [
        [
          "Authentication",
          "Process for establishing confidence in identity."
        ],
        [
          "MFA",
          "Authentication using different factor categories."
        ],
        [
          "Password manager",
          "Tool for storing and generating credentials."
        ],
        [
          "Recovery",
          "Process for regaining access after loss or compromise."
        ]
      ],
      "example": "A stolen password is less useful when a separate authentication factor is required.",
      "visual": {
        "title": "Know",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Know",
          "Have",
          "Be",
          "MFA combines different categories"
        ]
      },
      "case": "Case — Accounts, Passwords & Multi-Factor Authentication: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"Accounts, Passwords & Multi-Factor Authentication\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "What makes MFA multi-factor?",
        "options": [
          "Using different categories of authentication factors",
          "Using two passwords",
          "Using a longer username",
          "Logging in twice"
        ],
        "answer": "Using different categories of authentication factors",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-09",
      "title": "Digital Safety: Downloads, Links & Social Engineering",
      "objective": "Recognize common social-engineering and unsafe-download patterns without relying on fear or guesswork.",
      "time": "90–120 minutes",
      "prerequisite": "Accounts, Passwords & MFA",
      "read": "Social engineering uses manipulation to influence behavior. Examples include fake login pages, urgent payment requests, malicious attachments and impersonation.\n\nThe goal is not to distrust everything. Pause, inspect, verify through a known channel, then act. A familiar logo or name is not proof of identity. Reporting suspicious messages is part of a healthy security culture.",
      "concepts": [
        "Social engineering",
        "Phishing",
        "Impersonation",
        "Malicious attachment",
        "Trusted channel",
        "Reporting"
      ],
      "glossary": [
        [
          "Phishing",
          "Deceptive attempt to obtain information or cause an unsafe action."
        ],
        [
          "Social engineering",
          "Manipulation of people to influence security-relevant behavior."
        ],
        [
          "Trusted channel",
          "Independently verified communication method."
        ]
      ],
      "example": "A message claims to be from finance and requests an urgent transfer. Verify it through a known phone number or workflow instead of replying to the message.",
      "visual": {
        "title": "Pause",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Pause",
          "Inspect",
          "Verify",
          "Act",
          "Report"
        ]
      },
      "case": "Case — Digital Safety: Downloads, Links & Social Engineering: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"Digital Safety: Downloads, Links & Social Engineering\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "What is a safer response to an urgent payment request from an unexpected message?",
        "options": [
          "Verify it through a known trusted channel",
          "Reply immediately",
          "Click the link and enter credentials",
          "Forward it to everyone"
        ],
        "answer": "Verify it through a known trusted channel",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    },
    {
      "id": "cf-10",
      "title": "Data Basics: Tables, Fields, Records & Datasets",
      "objective": "Build the vocabulary needed for SQL, data science and security analytics.",
      "time": "90–120 minutes",
      "prerequisite": "Files, folders and basic computer concepts",
      "read": "A dataset is a collection of data. A table organizes data into rows and columns. A column or field represents an attribute such as date or username. A row or record represents one observation.\n\nSecurity teams use these ideas constantly. Logs are datasets. Detection rules query fields. Analysts group records, compare values and look for patterns. Statistics and machine learning later build on this foundation.",
      "concepts": [
        "Dataset",
        "Table",
        "Row",
        "Column",
        "Field",
        "Record",
        "Value",
        "Data type"
      ],
      "glossary": [
        [
          "Dataset",
          "Collection of related data."
        ],
        [
          "Field",
          "Named attribute represented by a column."
        ],
        [
          "Record",
          "Observation represented by a row."
        ],
        [
          "Value",
          "Actual data stored for a field."
        ],
        [
          "Data type",
          "Kind of value such as number, text or date."
        ]
      ],
      "example": "A login table can contain timestamp, username, source IP and result. Each row represents one login event.",
      "visual": {
        "title": "Event",
        "caption": "Instructional mental model for this lesson.",
        "steps": [
          "Event",
          "Log record",
          "Fields",
          "Records",
          "Table",
          "Analysis"
        ]
      },
      "case": "Case — Data Basics: Tables, Fields, Records & Datasets: explain the security decision a beginner should make and what evidence would validate it.",
      "mistakes": [
        "Memorizing terminology without understanding the relationship between concepts.",
        "Assuming one control solves every security problem.",
        "Ignoring context, evidence or the identity involved."
      ],
      "practice": "Complete a short written exercise for \"Data Basics: Tables, Fields, Records & Datasets\". Explain the concept in your own words, give one real-world example and identify one security question it helps you answer.",
      "evidence": "A concise written explanation, one example and one evidence-based security question.",
      "check": {
        "q": "In a table, what is a row usually used to represent?",
        "options": [
          "A record or observation",
          "A column name",
          "A database server",
          "A password policy"
        ],
        "answer": "A record or observation",
        "why": "The correct answer follows the beginner mental model introduced in this lesson."
      }
    }
  ]
},
  {
    id:"security-foundations", code:"01", title:"Cybersecurity Foundations", category:"Foundation",
    description:"Networking, Linux, identity, threat modeling and core security concepts.",
    lessons:[
      {id:"sf-01",title:"Security Mental Models",objective:"Build a consistent mental model for assets, threats, vulnerabilities, controls and risk.",time:"2–2.5 hours",prerequisite:"None",read:"Security work starts by separating five ideas that are often mixed together. An asset is something valuable to a person or organization. A threat is a potential cause of harm. A vulnerability is a weakness that can be exploited or abused. A control is a safeguard intended to prevent, detect or reduce harm. Risk is the relationship between what can happen, how likely or exposed it is, and the consequence if it occurs. The same technical weakness can represent very different business risk depending on the asset, exposure and impact.",concepts:["Asset","Threat","Vulnerability","Control","Risk"],example:"A customer portal stores personal data. The data is the asset; unauthorized disclosure is a threat scenario; an overly broad database role is a vulnerability; least-privilege access and monitoring are controls. The analyst should describe the chain rather than simply calling the system “insecure.”",case:"Case — Customer portal exposure: identify the two most valuable assets, two plausible threat scenarios, two vulnerabilities that could enable them, and two controls. State one assumption you would verify before making a risk decision.",mistakes:["Treating a threat and a vulnerability as the same thing.","Calling every vulnerability high risk without considering exposure and impact.","Jumping to a control before understanding the asset and threat scenario."],practice:"Create a five-column table for the fictional customer portal: Asset → Threat → Vulnerability → Control → Expected risk reduction. Then choose one row and explain what evidence would validate it.",evidence:"A completed risk chain with explicit assumptions and one evidence source for each important claim.",check:{q:"Which chain correctly connects the core security concepts?",options:["Asset → Threat → Vulnerability → Control → Risk","Control → Logo → Threat → Asset → Password","Vulnerability → Office → Control → Asset → Theme","Risk → Screen → Threat → Printer → Control"],answer:"Asset → Threat → Vulnerability → Control → Risk",why:"The chain moves from what has value, through a harmful scenario and enabling weakness, to a safeguard and the resulting risk decision."}},
      {id:"sf-02",title:"CIA Triad & Security Objectives",objective:"Use confidentiality, integrity and availability to classify security objectives and trade-offs.",time:"2–2.5 hours",prerequisite:"Security Mental Models",read:"The CIA triad is a compact way to describe three security objectives. Confidentiality limits unauthorized disclosure. Integrity protects information and system behavior from unauthorized or unintended alteration. Availability keeps systems and services usable when needed. Real incidents can affect more than one objective, so classify the primary impact first and then record secondary effects. Security decisions also involve trade-offs: stronger controls can introduce friction, latency or operational complexity.",concepts:["Confidentiality","Integrity","Availability","Primary vs secondary impact","Security trade-offs"],example:"If an attacker changes a beneficiary bank account, integrity is the immediate security objective affected. If the same incident also exposes customer records, confidentiality is affected too. A good analyst records both instead of forcing every event into one category.",case:"Case — Online claims platform: a deployment accidentally makes customer records readable to unauthorized users for 20 minutes, while the application remains available. Identify the primary CIA impact, a secondary business consequence, and one control that would reduce recurrence.",mistakes:["Using availability to mean performance in every situation.","Assuming an incident can affect only one CIA property.","Confusing confidentiality with authentication."],practice:"Classify five fictional incidents as C, I, A, or multiple objectives. For each, write one sentence explaining why the classification matters to the business.",evidence:"A classification table with a primary impact, secondary impact where applicable, and one business consequence per scenario.",check:{q:"A database record is modified without authorization. Which security objective is directly affected?",options:["Confidentiality","Integrity","Availability","Latency"],answer:"Integrity",why:"Unauthorized modification changes the correctness or trustworthiness of information, which is an integrity concern."}},
      {id:"sf-03",title:"Identity & Access Fundamentals",objective:"Distinguish identification, authentication, authorization, accounting and least privilege.",time:"2–2.5 hours",prerequisite:"Security Mental Models + CIA Triad",read:"Identity and access management answers four practical questions: which identity is requesting access, how that identity is authenticated, what it is authorized to do, and what activity is recorded for accountability. Authentication establishes identity; authorization determines permitted actions; accounting or audit records help reconstruct activity. Least privilege means granting only the access required for a defined task, for only as long as it is needed.",concepts:["Identification","Authentication","Authorization","Accounting / audit","Least privilege","Role-based access"],example:"A support analyst may need to view a customer's case but not export the entire customer database. Authentication proves which analyst is signed in; authorization limits the actions available to that analyst; audit records can show what was accessed.",case:"Case — Support operations: design a role for a support analyst who handles customer tickets. Specify what the role can read, what it can change, what it must never access, and what activity should be logged.",mistakes:["Treating successful login as proof that every action is authorized.","Giving broad admin rights because they are convenient.","Ignoring service accounts and machine identities."],practice:"Create a least-privilege role matrix with three columns: task, required permission, and audit requirement. Include one temporary elevated action and explain how it should be controlled.",evidence:"A role matrix that maps business tasks to permissions and identifies an auditable control for elevated access.",check:{q:"What does authorization answer?",options:["Who are you?","What are you allowed to do?","When did the system start?","How fast is the network?"],answer:"What are you allowed to do?",why:"Authorization evaluates the permissions or actions available to an already identified and authenticated identity."}},
      {id:"sf-04",title:"Threat Modeling Basics",objective:"Map trust boundaries, entry points, assets and abuse cases before selecting mitigations.",time:"2–2.5 hours",prerequisite:"Security Mental Models + Identity & Access Fundamentals",read:"Threat modeling is structured reasoning about how a system could be misused or fail. Start with the system boundary and major components, then identify assets, entry points, trust boundaries, identities and important data flows. Convert plausible misuse into abuse cases and ask which controls prevent, detect or limit the scenario. A threat model is not a prediction of exactly what an attacker will do; it is a way to make assumptions explicit and prioritize analysis.",concepts:["System boundary","Trust boundary","Entry point","Data flow","Abuse case","Mitigation"],example:"For Browser → API → Database, the browser is an untrusted client, the API is a control boundary, and the database contains protected assets. The API should validate requests and enforce authorization rather than trusting client-side claims.",case:"Case — Customer portal: draw Browser → CDN/WAF → API → Database. Mark the trust boundaries, two entry points, two assets and three abuse cases. For each abuse case, name one preventive and one detective control.",mistakes:["Starting with a list of vulnerabilities instead of understanding the system.","Treating the client as a trusted authority for authorization decisions.","Drawing components without showing trust boundaries or data flows."],practice:"Produce a one-page threat model for a browser, API and database. Label every trust boundary and write three abuse cases in the form: actor + action + target + consequence.",evidence:"A diagram plus three structured abuse cases and control mappings.",check:{q:"What should be identified early in a threat model?",options:["Trust boundaries","Office seating","Logo colors","Printer models"],answer:"Trust boundaries",why:"Trust boundaries show where assumptions about identity, data or control change and therefore where security controls deserve explicit attention."}},
      {id:"sf-05",title:"Security Operations Vocabulary",objective:"Separate events, alerts, incidents, findings and evidence so investigations stay precise.",time:"2–2.5 hours",prerequisite:"Threat Modeling Basics",read:"Security operations depends on precise language. An event is an observed occurrence. An alert is a signal generated because an event or pattern may require attention. An incident is a confirmed or suspected security situation that requires response according to organizational criteria. A finding is an analyst conclusion or observation supported by evidence. Evidence is information preserved or referenced to support an investigation, decision or conclusion. These terms describe different stages and purposes; they should not be used interchangeably.",concepts:["Event","Alert","Incident","Finding","Evidence","Triage"],example:"A failed login is an event. A rule detecting 50 failures followed by a success may create an alert. After investigation shows the activity violates policy or indicates compromise, it may be handled as an incident. The analyst's documented conclusion is a finding supported by relevant evidence.",case:"Case — Suspicious authentication sequence: an alert shows repeated failures followed by a successful login from an unusual location. Identify the initial event, the alert, the questions needed for triage, the evidence to collect, and the conditions that would justify incident escalation.",mistakes:["Calling every alert an incident.","Writing conclusions without preserving supporting evidence.","Treating a single log record as proof of intent."],practice:"Take the suspicious-login scenario and write an investigation note with five headings: Signal, Context, Evidence, Finding, Decision. Clearly mark anything still uncertain.",evidence:"A concise investigation note that separates observed facts from analyst interpretation and records uncertainty.",check:{q:"What is evidence used for?",options:["Supporting an investigation or conclusion","Replacing all logs","Increasing CPU speed","Changing a password automatically"],answer:"Supporting an investigation or conclusion",why:"Evidence gives an investigation a defensible basis for observations, conclusions and decisions."}},
    ]
  },
  {
    id:"network-security", code:"02", title:"Networking & Network Security", category:"Network",
    description:"TCP/IP, segmentation, protocols, firewalls and traffic analysis.",
    lessons:[
      {id:"ns-01",title:"TCP/IP Mental Model",objective:"Use layers, addresses, ports and protocols to interpret network traffic.",time:"2.5–3 hours",read:"A practical TCP/IP model separates link delivery, IP routing, transport behavior and application protocols. Analysts use source/destination addresses, ports, flags and payload metadata to reason about traffic.",practice:"For a TCP connection, identify the source IP, destination IP, source port, destination port and transport protocol.",check:{q:"Which sequence represents normal TCP connection establishment?",options:["SYN → SYN/ACK → ACK","ACK → SYN → FIN","SYN → ACK → RST","FIN → SYN → ACK"],answer:"SYN → SYN/ACK → ACK"}},
      {id:"ns-02",title:"IPv4 Addressing & Subnets",objective:"Read IPv4 addresses, CIDR notation and basic subnet boundaries.",time:"2.5–3 hours",read:"CIDR notation expresses a network prefix and host portion. Subnetting lets organizations separate broadcast domains and apply different routing and security policies.",practice:"Explain what /24 means in an IPv4 network.",check:{q:"In 192.168.10.0/24, how many bits form the network prefix?",options:["8","16","24","32"],answer:"24"}},
      {id:"ns-03",title:"TCP, UDP & Ports",objective:"Compare transport behavior and interpret common port usage.",time:"2.5–3 hours",read:"TCP provides connection-oriented reliable delivery. UDP is connectionless and has lower protocol overhead. A port identifies a transport endpoint associated with a process or service.",practice:"Explain why a DNS query can commonly use UDP while a web application may use TCP.",check:{q:"Which transport protocol is connection-oriented?",options:["UDP","TCP","ICMP","ARP"],answer:"TCP"}},
      {id:"ns-04",title:"Firewalls & Network Segmentation",objective:"Understand policy enforcement and trust-zone separation.",time:"2.5–3 hours",read:"Firewalls enforce traffic policy based on attributes such as addresses, ports, protocols and application identity. Segmentation limits lateral movement and reduces unnecessary trust.",practice:"Create a policy that allows an application tier to reach a database only on its required service port.",check:{q:"Why segment a database from a user network?",options:["To reduce unnecessary trust and lateral movement","To make passwords longer","To increase monitor brightness","To remove all logging"],answer:"To reduce unnecessary trust and lateral movement"}},
      {id:"ns-05",title:"Packet Analysis Workflow",objective:"Build a repeatable workflow for interpreting controlled packet captures.",time:"2 hours",read:"Packet analysis should begin with scope, then establish the baseline, identify endpoints and protocols, isolate unusual behavior and document evidence. Never infer intent from a single packet alone.",practice:"Create a five-step packet triage checklist.",check:{q:"What should come before interpreting an anomaly?",options:["Establish scope and baseline","Delete the capture","Disable logging","Assume compromise"],answer:"Establish scope and baseline"}}
    ]
  },
  {
    id:"systems-cloud", code:"03", title:"Linux, Systems & Cloud", category:"Foundation",
    description:"Operating systems, cloud architecture, hardening and secure configuration.",
    lessons:[
      {id:"sc-01",title:"Linux Security Fundamentals",objective:"Understand how Linux users, groups, permissions, processes and services work together to protect a computer.",time:"3–4 hours",prerequisite:"Security Mental Models + Identity & Access Fundamentals",read:"Linux is an operating system family widely used on servers, cloud workloads, security tools and many other systems. Before learning Linux security, think of a Linux machine as a collection of identities, files, running programs and network-facing services. Security means making sure the right person or program can perform the right action, while reducing unnecessary access and keeping useful records of what happened.\n\nStart with four questions. Who is acting? What resource are they trying to use? What action are they trying to perform? What program or service is involved? Linux answers these questions through users, groups, file permissions, process identities and service configuration.\n\nA user represents an identity. A group is a way to organize identities and grant shared permissions. A file or directory has an owner and group, plus permissions that determine whether the owner, group members and other users may read, write or execute it. A process is a running instance of a program and normally runs with an identity. A service is a program intended to provide functionality continuously or in the background, such as a web server or SSH server.\n\nThe security principle connecting these concepts is least privilege: give a person or process only the access required to perform its job. If a web application only needs to read one directory, it should not run with unrestricted administrator privileges. If a support user only needs to inspect logs, that user should not automatically receive permission to modify system configuration.\n\nPermissions are not the whole of Linux security. Secure configuration also includes patching, authentication controls, service exposure, logging, backups, secrets protection and system hardening. The goal is not to memorize commands first; it is to understand what each security control is trying to achieve.",concepts:["Operating system","User","Group","Root / administrator","File permissions","Process","Service","Least privilege","Attack surface","Audit trail"],glossary:[["Operating system","The software that manages the computer’s hardware and provides the environment in which programs run."],["User","An identity representing a person or account that can interact with the system."],["Group","A collection of users used to manage shared permissions."],["Root","Linux’s most powerful administrative identity; it can perform actions that ordinary users cannot."],["Permission","A rule controlling whether an identity may read, write or execute a resource."],["Process","A program that is currently running."],["Service","A program designed to provide a function, often continuously or in the background."],["Least privilege","Give an identity only the access it needs, and no more."],["Attack surface","The set of exposed ways a system could potentially be accessed, misused or attacked."],["Audit trail","Records that help reconstruct what happened, when it happened and which identity was involved."]],example:"Imagine a Linux web server hosting a company website. The web application runs as a dedicated service account. Its files belong to an appropriate owner and group. Configuration files containing sensitive settings are not writable by ordinary users. The database service is not unnecessarily exposed to the public network. Administrative access is restricted and logged. If the web application is compromised, limiting its identity and permissions can reduce what the attacker can access. This is an example of containment through least privilege and segmentation.",case:"Case — Small company web server: the server has three human administrators, one web application, a database and an SSH service. Your job is to reason about the security design before touching the machine. Identify which identities should exist, which services need to be exposed, which resources each identity needs, and what activity should be logged. Then explain what could happen if the web application ran as root.",mistakes:["Memorizing Linux commands without understanding what security decision each command represents.","Assuming root is simply a normal user with a stronger password; root has broad administrative authority and should be tightly controlled.","Giving an application write access to an entire filesystem when it only needs one directory.","Confusing a process with a user: a process is a running program, while the process operates under an identity.","Assuming a system is secure merely because its firewall is enabled; host configuration, identities, services, patching and logging also matter."],practice:"Build a simple security model for a fictional Linux web server. Write five sections: 1) Identities — list the human and service identities; 2) Resources — list important files, directories and data; 3) Permissions — state who should read, write or execute each resource; 4) Services — identify which services must run and which should not; 5) Evidence — identify the logs or records you would review during an investigation. Finally, answer this question in your own words: why is running an application with unnecessary administrator privileges dangerous?",evidence:"A one-page Linux security review that clearly separates identities, resources, permissions, services and evidence. Your reasoning is more important than memorizing command syntax.",check:{q:"A web application only needs to read its own application files. Which security design follows least privilege?",options:["Run the application as root so it can access everything","Give the application a dedicated low-privilege identity with only the required file access","Give every user write access to the application directory","Disable all logging so the application runs faster"],answer:"Give the application a dedicated low-privilege identity with only the required file access",why:"Least privilege limits the application's authority to what it actually needs. If the application is compromised, this reduces the amount of the system and data that the compromised process can directly access."}},
      {id:"sc-02",title:"Processes & Services",objective:"Recognize service exposure and process relationships.",time:"2–2.5 hours",read:"A service is a long-running program that provides functionality. Security review asks which services are enabled, which identities they run under, what interfaces they expose and what dependencies they have.",practice:"Review a fictional server inventory and mark unnecessary services for removal.",check:{q:"Why minimize unnecessary services?",options:["To reduce attack surface","To increase attack surface","To disable backups","To hide logs"],answer:"To reduce attack surface"}},
      {id:"sc-03",title:"Cloud Shared Responsibility",objective:"Separate provider responsibilities from customer responsibilities.",time:"2–2.5 hours",read:"Cloud security is shared. Providers secure the underlying cloud infrastructure while customers remain responsible for configurations and workloads according to the service model.",practice:"For a cloud-hosted application, list three customer-controlled security responsibilities.",check:{q:"Who is responsible for secure application configuration?",options:["The customer/workload owner","Only the cloud provider","The ISP","The browser vendor"],answer:"The customer/workload owner"}},
      {id:"sc-04",title:"Secure Configuration & Hardening",objective:"Turn baseline requirements into measurable configuration checks.",time:"2.5–3 hours",read:"Hardening removes unnecessary functionality, applies secure defaults, restricts administrative access, protects secrets and keeps systems patched.",practice:"Write five measurable hardening checks for a Linux server.",check:{q:"A useful hardening check should be:",options:["Measurable and verifiable","Purely subjective","Impossible to test","Unrelated to risk"],answer:"Measurable and verifiable"}},
      {id:"sc-05",title:"Cloud Identity & Secrets",objective:"Apply least privilege to cloud identities and protect credentials.",time:"2.5 hours",read:"Cloud identities should receive only required permissions. Long-lived credentials increase exposure; managed identities, short-lived credentials and centralized secret storage reduce risk.",practice:"Identify three risks of embedding a cloud API key directly in frontend code.",check:{q:"Where should sensitive application secrets generally be kept?",options:["A protected server-side secret store","Public JavaScript","A URL query string","A README"],answer:"A protected server-side secret store"}}
    ]
  },
  {
    id:"defensive-security", code:"04", title:"Defensive Security & SOC", category:"Defensive",
    description:"Detection engineering, logs, SIEM concepts and incident response.",
    lessons:[
      {id:"ds-01",title:"Logging for Detection",objective:"Choose telemetry that supports security questions.",time:"3–3.5 hours",read:"Good security telemetry is purposeful. Define the question first, then collect the minimum useful fields with reliable timestamps, identities, source context and retention.",practice:"For a suspicious login investigation, list the fields an analyst needs.",check:{q:"What should drive telemetry selection?",options:["The security questions you need to answer","Maximum log volume","Random fields","Only storage capacity"],answer:"The security questions you need to answer"}},
      {id:"ds-02",title:"Detection Engineering Basics",objective:"Turn observable behavior into testable detection logic.",time:"3–3.5 hours",read:"A detection should describe an observable signal, reduce noise through context and define what evidence an analyst should inspect next.",practice:"Write a detection hypothesis for repeated failed logins followed by a successful login.",check:{q:"A useful detection should be:",options:["Testable against observable telemetry","Based only on intuition","Impossible to reproduce","Independent of evidence"],answer:"Testable against observable telemetry"}},
      {id:"ds-03",title:"SIEM Investigation Workflow",objective:"Search, pivot, correlate and document findings.",time:"3–3.5 hours",read:"A disciplined SIEM investigation moves from an initial signal to related entities such as users, hosts, IPs, processes and timestamps. Every pivot should answer a question.",practice:"Create a pivot chain from a suspicious login to the affected host.",check:{q:"Why correlate multiple events?",options:["To establish context and reduce isolated-event ambiguity","To remove timestamps","To avoid evidence","To increase false positives"],answer:"To establish context and reduce isolated-event ambiguity"}},
      {id:"ds-04",title:"Incident Triage & Severity",objective:"Classify incidents using impact, scope and confidence.",time:"3–3.5 hours",read:"Triage prioritizes response using factors such as affected assets, business impact, scope, persistence and confidence in the evidence.",practice:"Compare two simulated incidents and explain which factors affect urgency.",check:{q:"Which factor directly affects incident priority?",options:["Business impact","Wallpaper choice","Keyboard layout","Browser theme"],answer:"Business impact"}},
      {id:"ds-05",title:"Evidence & Incident Timeline",objective:"Build a defensible timeline from controlled evidence.",time:"2 hours",read:"A timeline aligns events from multiple sources into a coherent sequence. Preserve original timestamps, source identifiers and uncertainty instead of inventing missing facts.",practice:"Build a five-event timeline from authentication, process and network records.",check:{q:"What should an analyst do when a timestamp is uncertain?",options:["Record the uncertainty","Invent a precise time","Delete the event","Change the source"],answer:"Record the uncertainty"}}
    ]
  },
  {
    id:"offensive-security", code:"05", title:"Offensive & Application Security", category:"Offensive",
    description:"Web, API, application and adversary simulation fundamentals in controlled environments.",
    lessons:[
      {id:"os-01",title:"Offensive Security Methodology",objective:"Understand scoped reconnaissance, validation, exploitation and reporting.",time:"2.5–3 hours",read:"Authorized security testing is evidence-driven and scope-bound. A professional workflow defines targets, rules of engagement, safe validation methods and reporting requirements before testing.",practice:"Write a scope statement for a deliberately vulnerable training application.",check:{q:"What must exist before authorized testing begins?",options:["A defined scope and rules of engagement","A public exploit","An unknown target","A production credential"],answer:"A defined scope and rules of engagement"}},
      {id:"os-02",title:"Web Application Attack Surface",objective:"Map pages, APIs, inputs, authentication boundaries and trust relationships.",time:"2.5–3 hours",read:"An application's attack surface includes exposed routes, parameters, APIs, authentication flows, file handling and integrations. Mapping is about understanding what exists before attempting validation.",practice:"Create an attack-surface inventory for a fictional web app.",check:{q:"Which is part of a web attack surface?",options:["API endpoints","Office furniture","Monitor size","Keyboard color"],answer:"API endpoints"}},
      {id:"os-03",title:"Input Validation & Injection",objective:"Understand why untrusted input can alter program behavior.",time:"2.5–3 hours",read:"Injection vulnerabilities occur when data is interpreted as instructions in a different language or context. Defenses include parameterization, contextual encoding and strict validation.",practice:"Explain the difference between data and executable instructions.",check:{q:"Which control helps prevent SQL injection?",options:["Parameterized queries","Hard-coded passwords","Disabling logs","Longer URLs"],answer:"Parameterized queries"}},
      {id:"os-04",title:"Authentication & Session Testing",objective:"Evaluate authentication boundaries and session handling safely.",time:"2.5–3 hours",read:"Testing should examine credential handling, session issuance, expiration, privilege boundaries and recovery flows in an authorized environment.",practice:"List five questions for reviewing a session-management design.",check:{q:"Why should sessions expire?",options:["To reduce the lifetime of stolen session material","To make pages prettier","To increase bandwidth","To disable authorization"],answer:"To reduce the lifetime of stolen session material"}},
      {id:"os-05",title:"Reporting Security Findings",objective:"Turn technical observations into reproducible, useful findings.",time:"2 hours",read:"A security finding should identify the affected asset, observed behavior, evidence, impact, reproduction conditions and a practical remediation path.",practice:"Write a finding title and evidence summary for a simulated access-control issue.",check:{q:"A strong finding should include:",options:["Evidence and reproducible conditions","Only a dramatic title","No affected asset","No remediation context"],answer:"Evidence and reproducible conditions"}}
    ]
  },
  {
    id:"security-engineering", code:"06", title:"Security Engineering & DevSecOps", category:"Foundation",
    description:"Automation, secure development, architecture and measurable security controls.",
    lessons:[
      {id:"se-01",title:"Secure Software Lifecycle",objective:"Integrate security requirements throughout software delivery.",time:"3–3.5 hours",read:"Security engineering shifts important controls earlier into design, development, testing, deployment and operations instead of relying only on final review.",practice:"Place threat modeling, code review, dependency checks and runtime monitoring into a delivery lifecycle.",check:{q:"Why integrate security earlier?",options:["To identify and reduce risk before it becomes expensive to change","To remove testing","To eliminate requirements","To avoid documentation"],answer:"To identify and reduce risk before it becomes expensive to change"}},
      {id:"se-02",title:"Security Automation",objective:"Design repeatable checks that produce auditable evidence.",time:"3–3.5 hours",read:"Automation is valuable when the rule is explicit, the input is reliable and the output can be reviewed. Good automation reduces repetitive work without hiding uncertainty.",practice:"Design an automated check for a public storage bucket configuration.",check:{q:"What makes an automated security check useful?",options:["A clear rule and auditable output","Hidden logic","No evidence","Random results"],answer:"A clear rule and auditable output"}},
      {id:"se-03",title:"Security Architecture",objective:"Apply defense in depth, trust boundaries and failure containment.",time:"3–3.5 hours",read:"Secure architecture assumes individual controls can fail. Layered controls, isolation, least privilege and explicit trust boundaries reduce the impact of a single failure.",practice:"Design three independent controls around a sensitive API.",check:{q:"What is defense in depth?",options:["Multiple complementary security controls","One control everywhere","No controls","Only perimeter security"],answer:"Multiple complementary security controls"}},
      {id:"se-04",title:"Vulnerability Management",objective:"Prioritize remediation using evidence and business context.",time:"3–3.5 hours",read:"Vulnerability management combines discovery, validation, prioritization, remediation and verification. Severity alone does not describe the complete business risk.",practice:"Define a remediation priority using exploitability, exposure, asset criticality and compensating controls.",check:{q:"What should happen after remediation?",options:["Verify the fix","Assume success","Delete the finding","Stop collecting evidence"],answer:"Verify the fix"}},
      {id:"se-05",title:"Security Metrics & Evidence",objective:"Measure capability using outcomes rather than vanity metrics.",time:"2 hours",read:"Useful security metrics connect activity to outcomes: detection coverage, mean time to triage, remediation verification and control effectiveness are more informative than raw activity counts alone.",practice:"Design three metrics that demonstrate improved defensive capability.",check:{q:"A strong security metric should:",options:["Connect measurement to an outcome or decision","Only count activity","Avoid definitions","Change meaning each week"],answer:"Connect measurement to an outcome or decision"}}
    ]
  },
{
  "id": "programming-data",
  "code": "07",
  "title": "Programming, Python & SQL",
  "category": "Technical Foundations",
  "description": "Build programming and query fluency for automation, analytics and security engineering.",
  "status": "active",
  "meta": {
    "level": "Foundation → Applied",
    "load": "24–30 hours",
    "focus": "Learn programming logic, Python and SQL from first principles, then use them to investigate security data and automate repeatable work.",
    "outcomes": [
      "Break a problem into inputs, decisions, repetition and outputs.",
      "Read and write beginner Python without treating code as magic.",
      "Choose useful Python data structures and functions for a task.",
      "Read CSV and JSON safely and validate data before analysis.",
      "Use SQL to filter, join, group and aggregate evidence.",
      "Build a small security-data workflow that is reproducible and explainable."
    ],
    "topics": [
      "Problem solving",
      "Python syntax",
      "Variables & types",
      "Boolean logic",
      "Loops",
      "Functions",
      "Lists & dictionaries",
      "CSV & JSON",
      "Errors & testing",
      "SQL",
      "Joins & aggregation",
      "Security automation"
    ],
    "case": "Case: a security analyst receives authentication logs and must identify unusual patterns without modifying the original evidence.",
    "assessment": "Concept checks + Python exercises + SQL investigation + authentication-log mini project",
    "lab": "Security Data Automation Lab"
  },
  "lessons": [
    {
      "id": "pro-01",
      "title": "How Programmers Think: Inputs → Rules → Outputs",
      "objective": "Learn to turn a real problem into a small sequence of precise instructions.",
      "time": "2–2.5 hours",
      "prerequisite": "None",
      "read": "Programming is not primarily about typing code. It is about describing a process precisely enough that a computer can repeat it. A useful first model is: input → rules → output.\\n\\nSuppose you have five login records and want to count failed logins. A human may say, “count the failures.” A program needs the exact rule: inspect each record, check whether status equals failed, increase the counter, then report the counter.\\n\\nThis way of thinking matters in security because vague rules create unreliable automation. Before writing code, define the question, inputs, expected output and assumptions.",
      "concepts": [
        "Input",
        "Rule",
        "Output",
        "Algorithm",
        "Assumption",
        "Edge case"
      ],
      "glossary": [
        [
          "Algorithm",
          "A step-by-step method for solving a problem."
        ],
        [
          "Input",
          "Information supplied to a process."
        ],
        [
          "Output",
          "The result produced by a process."
        ],
        [
          "Edge case",
          "An unusual input or boundary condition that can expose a flaw."
        ]
      ],
      "example": "Question: “How many failed logins occurred?” Input: login records. Rule: count records whose status is failed. Output: one integer. Edge case: what should happen if the status field is missing?",
      "visual": {
        "title": "The programmer's mental model",
        "caption": "Turn an ambiguous request into something a computer can execute.",
        "steps": [
          "Define the question",
          "Identify inputs",
          "Write exact rules",
          "Handle edge cases",
          "Produce and verify output"
        ]
      },
      "case": "A manager asks for “suspicious logins.” Identify what is missing from that request before anyone writes code: definition of suspicious, required fields, time window, expected output and validation evidence.",
      "mistakes": [
        "Starting with syntax before defining the problem.",
        "Assuming missing data means no event occurred.",
        "Using words such as suspicious without defining a measurable rule."
      ],
      "practice": "Write an algorithm in plain English to count failed logins and separately count unique users with failures.",
      "evidence": "Submit the algorithm, two assumptions and one edge case.",
      "check": {
        "q": "What should normally come before writing the code?",
        "options": [
          "Define the problem, inputs, rules and expected output",
          "Choose random Python syntax",
          "Delete unusual records",
          "Assume the data is perfect"
        ],
        "answer": "Define the problem, inputs, rules and expected output",
        "why": "Clear problem definition reduces ambiguity and makes the resulting program testable."
      }
    },
    {
      "id": "pro-02",
      "title": "Variables & Data Types",
      "objective": "Understand how Python stores values and why data type affects what an operation means.",
      "time": "2–2.5 hours",
      "prerequisite": "Programming mindset",
      "read": "A variable is a name that refers to a value. In Python, that value has a type. For example, a username is naturally text, a failed-login count is an integer, and a risk score may be a decimal number.\\n\\nTypes matter because operations depend on them. Adding two numbers produces arithmetic; combining two pieces of text produces text. A security script that confuses a timestamp, number and string can silently produce wrong results.\\n\\nStart with the question: “What does this value represent?” Then choose or inspect the type. Do not convert data just to make an error disappear; understand why the conversion is needed.",
      "concepts": [
        "Variable",
        "String",
        "Integer",
        "Float",
        "Boolean",
        "Type conversion",
        "None"
      ],
      "glossary": [
        [
          "String",
          "Text data such as a username or IP address."
        ],
        [
          "Integer",
          "Whole-number data such as a count."
        ],
        [
          "Boolean",
          "A value representing true or false."
        ],
        [
          "Type conversion",
          "Changing a value from one representation to another when that change is valid."
        ]
      ],
      "example": "`failed_count = 7` represents a count. `username = \"alex\"` represents text. `enabled = True` represents a Boolean decision.",
      "visual": {
        "title": "A variable is a labeled value",
        "caption": "Think of a variable as a name attached to a value with a meaning and type.",
        "steps": [
          "Choose a meaningful name",
          "Store a value",
          "Understand its type",
          "Use an appropriate operation",
          "Validate the result"
        ]
      },
      "case": "A CSV stores `failed_attempts` as text. Before comparing it to a numeric threshold, determine whether every value can safely be converted and how invalid values will be handled.",
      "mistakes": [
        "Treating every value as text.",
        "Converting invalid values silently.",
        "Using unclear names such as x or data for important security fields."
      ],
      "practice": "Create variables for username, failed_attempts, source_ip and account_locked. Decide the most appropriate Python type for each and explain why.",
      "evidence": "A five-line example plus a short explanation of each chosen type.",
      "check": {
        "q": "Which type is most natural for a count such as failed login attempts?",
        "options": [
          "Integer",
          "String",
          "Boolean",
          "Dictionary"
        ],
        "answer": "Integer",
        "why": "A count is a whole number, so an integer represents it directly."
      }
    },
    {
      "id": "pro-03",
      "title": "Conditions & Boolean Logic",
      "objective": "Use if/else decisions and Boolean logic to express security rules clearly.",
      "time": "2–2.5 hours",
      "prerequisite": "Variables & Data Types",
      "read": "A condition lets a program choose between paths. Python commonly uses `if`, `elif` and `else`. The condition produces a Boolean result: true or false.\\n\\nSecurity automation depends heavily on conditions: “If an account is locked, do not approve the request”; “If failures exceed a threshold, create a review candidate.” Multiple conditions can be combined with `and`, `or` and `not`.\\n\\nThe dangerous part is not the syntax. It is writing a rule whose meaning is different from what you intended. Write the rule in plain English first, then translate it into code and test both the true and false paths.",
      "concepts": [
        "if",
        "elif",
        "else",
        "Boolean",
        "and",
        "or",
        "not",
        "Comparison"
      ],
      "glossary": [
        [
          "Condition",
          "A test that evaluates to true or false."
        ],
        [
          "Boolean",
          "True or false value used for decisions."
        ],
        [
          "Operator",
          "A symbol or keyword used to compare or combine values."
        ],
        [
          "Branch",
          "One possible path through a program."
        ]
      ],
      "example": "Rule: flag an account when `failed_attempts >= 5` AND the account is not already locked. Test both conditions separately before combining them.",
      "visual": {
        "title": "Decision flow",
        "caption": "Every branch should have a clear rule and an expected outcome.",
        "steps": [
          "Read the input",
          "Evaluate condition",
          "True → action A",
          "False → action B",
          "Test both paths"
        ]
      },
      "case": "Design a rule for a review queue: flag an authentication event when it has at least five failures in the window OR the source is explicitly blocked. Discuss why changing OR to AND changes the meaning.",
      "mistakes": [
        "Using AND when the requirement says either condition.",
        "Testing only the normal case.",
        "Putting business assumptions inside code without documenting them."
      ],
      "practice": "Write three plain-English rules and then express them as Boolean expressions: locked account; high-risk login; repeated failure from a blocked source.",
      "evidence": "Three rules, their Boolean expressions and at least one boundary test for each.",
      "check": {
        "q": "What does `A and B` require?",
        "options": [
          "Both A and B must be true",
          "Either A or B must be true",
          "Both must be false",
          "Only A matters"
        ],
        "answer": "Both A and B must be true",
        "why": "AND is true only when every required condition is true."
      }
    },
    {
      "id": "pro-04",
      "title": "Loops: Repeating Work Safely",
      "objective": "Process many records with loops while avoiding missed data and runaway repetition.",
      "time": "2–2.5 hours",
      "prerequisite": "Conditions & Boolean Logic",
      "read": "A loop repeats an operation. A `for` loop is especially useful when you have a collection of records and want to inspect each one.\\n\\nFor example, a security analyst may need to inspect every login record and count failures. The loop should have a clear collection, a clear operation and a clear stopping point.\\n\\nLoops introduce new failure modes: skipping records, counting the wrong thing, modifying data accidentally or creating a loop that never ends. In analysis work, prefer simple loops that are easy to read and verify before optimizing them.",
      "concepts": [
        "for loop",
        "Iteration",
        "Collection",
        "Counter",
        "Accumulator",
        "Break"
      ],
      "glossary": [
        [
          "Iteration",
          "One pass through a loop."
        ],
        [
          "Accumulator",
          "A variable updated as a loop processes records."
        ],
        [
          "break",
          "A Python statement that exits a loop early."
        ]
      ],
      "example": "Start `failed_count = 0`. For each login record, if its status is failed, increase the counter by one. After the loop, report the counter.",
      "visual": {
        "title": "One record at a time",
        "caption": "A loop applies the same rule to each item in a collection.",
        "steps": [
          "Load collection",
          "Take next record",
          "Apply rule",
          "Update result",
          "Repeat until complete"
        ]
      },
      "case": "You have 10,000 login records. Explain why processing each record with the same deterministic rule is safer than manually reviewing selected rows.",
      "mistakes": [
        "Changing the collection while iterating without understanding the effect.",
        "Forgetting to initialize the accumulator.",
        "Stopping after the first matching record when all matches are required."
      ],
      "practice": "Write pseudocode for counting failed logins and counting how many distinct users experienced failures.",
      "evidence": "Pseudocode plus a hand-worked example using five records.",
      "check": {
        "q": "What is the usual purpose of a `for` loop in this context?",
        "options": [
          "Repeat an operation for items in a collection",
          "Create a password",
          "Encrypt the whole computer",
          "Replace the operating system"
        ],
        "answer": "Repeat an operation for items in a collection",
        "why": "A for loop is designed to iterate through items in a sequence or other iterable."
      }
    },
    {
      "id": "pro-05",
      "title": "Functions & Decomposition",
      "objective": "Break a larger program into small reusable pieces with clear inputs and outputs.",
      "time": "2–2.5 hours",
      "prerequisite": "Loops",
      "read": "As programs grow, putting every instruction in one block becomes difficult to understand and test. A function gives a name to a reusable piece of logic. It can accept inputs and return an output.\\n\\nImagine an authentication analyzer. One function can parse a record, another can determine whether it is a failure, and another can calculate a summary. Each function has a smaller responsibility.\\n\\nGood decomposition makes security automation easier to audit. If a rule changes, you can identify the specific function responsible instead of searching through one giant script.",
      "concepts": [
        "Function",
        "Parameter",
        "Argument",
        "Return value",
        "Scope",
        "Single responsibility"
      ],
      "glossary": [
        [
          "Parameter",
          "A named input accepted by a function."
        ],
        [
          "Return value",
          "The result a function gives back to its caller."
        ],
        [
          "Scope",
          "The region in which a name or variable is available."
        ]
      ],
      "example": "A function `is_failed(record)` can receive one login record and return true when its status is `failed`. The main analysis can then reuse that rule.",
      "visual": {
        "title": "Decompose the job",
        "caption": "Small functions make a workflow easier to read, test and change.",
        "steps": [
          "Large problem",
          "Split responsibilities",
          "Define inputs",
          "Return results",
          "Combine functions"
        ]
      },
      "case": "A script contains 250 lines and repeats the same IP-address validation logic in four places. Explain the maintenance and security risks and propose a function boundary.",
      "mistakes": [
        "Functions that secretly change unrelated global state.",
        "Huge functions that still do everything.",
        "Returning inconsistent types from the same function."
      ],
      "practice": "Design three functions for a login analyzer: parse_record, is_failed and summarize_failures. Write each function's input and output in plain English.",
      "evidence": "A function map showing inputs, outputs and responsibilities.",
      "check": {
        "q": "Why is decomposition useful?",
        "options": [
          "It makes logic easier to understand, test and reuse",
          "It guarantees code has no bugs",
          "It removes the need for requirements",
          "It makes all programs shorter"
        ],
        "answer": "It makes logic easier to understand, test and reuse",
        "why": "Decomposition improves structure and testability, but it does not guarantee correctness."
      }
    },
    {
      "id": "pro-06",
      "title": "Python Collections: Lists, Dictionaries & Sets",
      "objective": "Choose basic Python collections based on the shape of the data and the operation you need.",
      "time": "2–2.5 hours",
      "prerequisite": "Functions & Decomposition",
      "read": "Python collections let you keep related values together. A list preserves an ordered collection, a dictionary maps keys to values, and a set stores unique values.\\n\\nSecurity data often fits these patterns. A list can represent login events in time order. A dictionary can represent one parsed event such as username → value. A set can represent unique source IP addresses.\\n\\nChoosing the right structure is partly about meaning and partly about the operation you need. If you need unique values, a set expresses that requirement directly. If you need fields by name, a dictionary is easier to understand than a long list of positions.",
      "concepts": [
        "List",
        "Dictionary",
        "Set",
        "Key-value",
        "Membership",
        "Uniqueness"
      ],
      "glossary": [
        [
          "List",
          "Ordered collection of values."
        ],
        [
          "Dictionary",
          "Collection of key-value pairs."
        ],
        [
          "Set",
          "Collection designed for unique values."
        ],
        [
          "Key",
          "Name used to access a dictionary value."
        ]
      ],
      "example": "`users = [\"Asha\", \"Ravi\", \"Asha\"]` keeps all entries. `unique_users = {\"Asha\", \"Ravi\"}` represents uniqueness. `event = {\"user\":\"Asha\", \"status\":\"failed\"}` represents named fields.",
      "visual": {
        "title": "Choose by meaning",
        "caption": "The data structure should make the intended operation obvious.",
        "steps": [
          "Ordered records → list",
          "Named fields → dictionary",
          "Unique values → set",
          "Select the structure",
          "Test the operations you need"
        ]
      },
      "case": "A log has 50,000 events but only 2,300 unique source IPs. Explain which structure you would use to collect unique IPs and why.",
      "mistakes": [
        "Using a list when uniqueness is the actual requirement.",
        "Using numeric positions for data that has meaningful field names.",
        "Assuming collection choice never affects performance or clarity."
      ],
      "practice": "Represent one login event as a dictionary, a sequence of five events as a list, and unique source IPs as a set.",
      "evidence": "Three structures with one sentence explaining why each fits.",
      "check": {
        "q": "Which collection naturally represents unique source IP addresses?",
        "options": [
          "Set",
          "List",
          "String",
          "Integer"
        ],
        "answer": "Set",
        "why": "A set is designed to represent unique values."
      }
    },
    {
      "id": "pro-07",
      "title": "CSV & JSON: Working With Real Data",
      "objective": "Read common structured-data formats and validate their contents before analysis.",
      "time": "2–2.5 hours",
      "prerequisite": "Python Collections",
      "read": "CSV and JSON are common ways to exchange structured information. CSV is often tabular: rows and columns. JSON represents objects and nested structures.\\n\\nThe important security habit is to separate “the file loaded successfully” from “the data is trustworthy.” A CSV can have missing columns, duplicate rows, unexpected values or incorrect timestamps. JSON can contain missing keys or unexpected nested data.\\n\\nBefore analysis, inspect the schema, sample records, required fields, types and obvious anomalies. Preserve the original evidence and work on a copy or controlled representation.",
      "concepts": [
        "CSV",
        "JSON",
        "Schema",
        "Parsing",
        "Validation",
        "Missing value",
        "Data provenance"
      ],
      "glossary": [
        [
          "CSV",
          "Comma-separated tabular text format commonly used for data exchange."
        ],
        [
          "JSON",
          "Structured text format representing objects, arrays and values."
        ],
        [
          "Schema",
          "Expected structure and meaning of fields."
        ],
        [
          "Provenance",
          "Information about where data came from and how it was handled."
        ]
      ],
      "example": "Expected fields: timestamp, username, source_ip, status. Before counting failures, verify those fields exist and inspect whether status contains values such as success and failed.",
      "visual": {
        "title": "Raw data → validated data",
        "caption": "Parsing is only the first step; validation protects the analysis.",
        "steps": [
          "Preserve source",
          "Parse format",
          "Inspect schema",
          "Validate fields and types",
          "Analyze a controlled copy"
        ]
      },
      "case": "A CSV suddenly contains a new column and 4% of timestamps are blank. Decide whether analysis should continue, what must be documented and what evidence is needed.",
      "mistakes": [
        "Dropping bad rows without measuring how many were removed.",
        "Assuming a parser error means the source is malicious.",
        "Overwriting the original evidence."
      ],
      "practice": "Design a validation checklist for an authentication CSV before calculating failure rates.",
      "evidence": "A checklist containing schema, required fields, types, missing values and provenance.",
      "check": {
        "q": "What should you do before trusting a parsed security dataset?",
        "options": [
          "Validate its structure, fields, values and provenance",
          "Immediately delete unusual rows",
          "Assume the parser guarantees correctness",
          "Change the source file"
        ],
        "answer": "Validate its structure, fields, values and provenance",
        "why": "Parsing tells you the format can be read; validation asks whether the contents are suitable for the intended analysis."
      }
    },
    {
      "id": "pro-08",
      "title": "Errors, Validation & Testing",
      "objective": "Make programs fail clearly and verify behavior with deliberate tests.",
      "time": "2–2.5 hours",
      "prerequisite": "CSV & JSON",
      "read": "Programs encounter bad inputs, missing files, unexpected values and logic mistakes. An error is not automatically a failure of the whole system; what matters is whether the program detects the problem, responds safely and leaves enough evidence to understand what happened.\\n\\nValidation checks whether an input meets an expected rule. Testing checks whether the program behaves as intended under known scenarios. These are different from simply running the program once.\\n\\nFor a login analyzer, test normal records, missing fields, invalid timestamps, zero records and boundary values such as exactly five failures.",
      "concepts": [
        "Exception",
        "Validation",
        "Unit test",
        "Boundary test",
        "Expected failure",
        "Logging"
      ],
      "glossary": [
        [
          "Exception",
          "A signal that an operation could not proceed normally."
        ],
        [
          "Validation",
          "Checking whether data or input meets defined requirements."
        ],
        [
          "Unit test",
          "A focused test of a small piece of logic."
        ],
        [
          "Boundary test",
          "A test around a limit where behavior may change."
        ]
      ],
      "example": "If the rule is “flag five or more failures,” test 4, 5 and 6. A single test with 10 failures does not prove the boundary is correct.",
      "visual": {
        "title": "Reliable code loop",
        "caption": "Build → test → observe → fix → test again.",
        "steps": [
          "Define expected behavior",
          "Create normal and edge cases",
          "Run the code",
          "Compare actual vs expected",
          "Fix and retest"
        ]
      },
      "case": "A script reports zero failed logins after the input schema changed. Explain why “the script ran without an error” is not enough evidence of correctness.",
      "mistakes": [
        "Testing only happy paths.",
        "Catching every error and hiding it.",
        "Changing code without rerunning the relevant tests."
      ],
      "practice": "Create five test cases for an `is_failed(record)` function, including missing status and unexpected status.",
      "evidence": "Test table with input, expected result and observed result.",
      "check": {
        "q": "Why test boundary values?",
        "options": [
          "Rules often change behavior at boundaries",
          "They always reveal a security breach",
          "They replace all other testing",
          "They make data unnecessary"
        ],
        "answer": "Rules often change behavior at boundaries",
        "why": "Threshold-based logic can be wrong exactly where the decision changes."
      }
    },
    {
      "id": "pro-09",
      "title": "SQL Fundamentals: Ask Questions of Tables",
      "objective": "Understand tables, rows, columns and SELECT queries as a way to retrieve evidence.",
      "time": "2–2.5 hours",
      "prerequisite": "Errors, Validation & Testing",
      "read": "SQL is a language for working with relational data. Think of a table as a structured collection of rows, where each column has a defined meaning.\\n\\nA basic `SELECT` asks the database for columns or expressions. `FROM` identifies the table. `WHERE` filters rows. SQL is powerful because the question can be expressed close to the data instead of manually copying thousands of records.\\n\\nSecurity analysts use SQL to answer questions such as “Which accounts had failures today?” or “Which source IPs generated more than a threshold?” The query is only as good as the definitions and data behind it.",
      "concepts": [
        "Database",
        "Table",
        "Row",
        "Column",
        "SELECT",
        "FROM",
        "WHERE"
      ],
      "glossary": [
        [
          "Table",
          "Structured set of related rows and columns."
        ],
        [
          "Row",
          "One record in a table."
        ],
        [
          "Column",
          "A named field with a defined meaning."
        ],
        [
          "Query",
          "A request for information or an operation on data."
        ]
      ],
      "example": "`SELECT username, status FROM logins WHERE status = 'failed';` asks for username and status from rows whose status is failed.",
      "visual": {
        "title": "SQL question model",
        "caption": "Translate an analytical question into table → fields → filter.",
        "steps": [
          "State the question",
          "Choose the table",
          "Choose fields",
          "Add filters",
          "Inspect the result"
        ]
      },
      "case": "You need all failed logins from 10 September. Identify the table, fields and filter conditions before writing the query.",
      "mistakes": [
        "Selecting data without defining the question.",
        "Filtering on the wrong field.",
        "Assuming column names describe their meaning perfectly without checking the schema."
      ],
      "practice": "Write plain-English questions and corresponding SELECT/WHERE logic for failed events, one user and one source IP.",
      "evidence": "Three questions with SQL queries and a sentence explaining each filter.",
      "check": {
        "q": "What does a WHERE clause normally do?",
        "options": [
          "Filter rows according to a condition",
          "Create a new operating system",
          "Encrypt the database",
          "Rename every column"
        ],
        "answer": "Filter rows according to a condition",
        "why": "WHERE restricts the rows returned by a query based on a condition."
      }
    },
    {
      "id": "pro-10",
      "title": "SQL Filtering, Joins & Aggregation",
      "objective": "Combine related tables and summarize security evidence with COUNT, GROUP BY and joins.",
      "time": "2–2.5 hours",
      "prerequisite": "SQL Fundamentals",
      "read": "Real systems often separate information across tables. A login table may contain events while a user table contains department and account status. A join connects related records using a shared key.\\n\\nAggregation answers questions about groups: `COUNT` can count events, while `GROUP BY` defines the groups. Together they can turn thousands of events into a useful summary such as failed logins per user or per source IP.\\n\\nBe careful: joins can multiply rows when relationships are misunderstood. Always check the expected relationship and validate the resulting counts.",
      "concepts": [
        "JOIN",
        "Primary key",
        "Foreign key",
        "COUNT",
        "GROUP BY",
        "Aggregate",
        "Cardinality"
      ],
      "glossary": [
        [
          "Primary key",
          "Field or combination of fields intended to uniquely identify a row."
        ],
        [
          "Foreign key",
          "Field that references a related record in another table."
        ],
        [
          "GROUP BY",
          "SQL clause that forms groups for aggregate calculations."
        ],
        [
          "Cardinality",
          "The nature and number of relationships between related records."
        ]
      ],
      "example": "Join `logins.user_id` to `users.id`, then group by department to count failed events. Validate that the join did not unexpectedly duplicate events.",
      "visual": {
        "title": "From events to insight",
        "caption": "Join carefully, then aggregate and validate the result.",
        "steps": [
          "Identify related tables",
          "Confirm join key",
          "Join records",
          "Group by the business question",
          "Check counts against expectations"
        ]
      },
      "case": "A join doubles the number of login events. Determine which relationship assumption may be wrong and what validation query or count comparison you would perform.",
      "mistakes": [
        "Joining on a non-unique field without understanding the effect.",
        "Trusting an aggregate without checking the underlying row count.",
        "Using GROUP BY without knowing what each group represents."
      ],
      "practice": "Design a query to count failed logins per user and another to count unique source IPs per user.",
      "evidence": "Two queries plus an explanation of the join key and expected relationship.",
      "check": {
        "q": "Why can a join unexpectedly increase row counts?",
        "options": [
          "One record can match multiple related records",
          "SQL always duplicates rows",
          "COUNT creates copies",
          "WHERE disables uniqueness"
        ],
        "answer": "One record can match multiple related records",
        "why": "A one-to-many or many-to-many relationship can produce multiple joined rows for one original record."
      }
    },
    {
      "id": "pro-11",
      "title": "Security Automation with Python",
      "objective": "Combine Python, validation and data handling into a safe repeatable security workflow.",
      "time": "2–2.5 hours",
      "prerequisite": "SQL Filtering, Joins & Aggregation",
      "read": "Automation means turning a repeatable procedure into a program. In security, automation should make work faster without hiding how the result was produced. A good automation workflow defines scope, reads controlled input, validates it, applies deterministic rules, records useful output and preserves evidence.\\n\\nStart with read-only analysis. For example, a script can read authentication logs and produce a report of failure counts. It should not silently modify accounts or delete evidence. Any action with operational impact should have explicit authorization and safeguards.\\n\\nThe goal is reproducibility: another analyst should be able to understand what input was used, what version of the logic ran and what output was produced.",
      "concepts": [
        "Automation",
        "Scope",
        "Idempotence",
        "Read-only analysis",
        "Reproducibility",
        "Audit trail"
      ],
      "glossary": [
        [
          "Reproducibility",
          "Ability to repeat an analysis and obtain an explainable result from defined inputs and logic."
        ],
        [
          "Scope",
          "Explicit boundary describing what the automation may process or affect."
        ],
        [
          "Audit trail",
          "Record of relevant actions, inputs and outputs."
        ]
      ],
      "example": "A read-only script loads a CSV, validates required fields, counts failures by user, writes a summary CSV and records the input filename and processing time.",
      "visual": {
        "title": "Safe automation pipeline",
        "caption": "Keep the workflow observable and bounded.",
        "steps": [
          "Define authorized scope",
          "Read controlled input",
          "Validate",
          "Process deterministically",
          "Write evidence + report"
        ]
      },
      "case": "A team wants a script that automatically disables accounts after suspicious activity. Before approving it, identify authorization, false-positive, rollback, logging and testing requirements.",
      "mistakes": [
        "Automating high-impact actions before validating detection quality.",
        "Hard-coding credentials or secrets.",
        "Failing to record which input and code version produced a report."
      ],
      "practice": "Design a read-only authentication-log automation pipeline. Identify inputs, validations, outputs, failure behavior and evidence.",
      "evidence": "A one-page workflow diagram or ordered procedure with explicit safety boundaries.",
      "check": {
        "q": "What is a good first security-automation target?",
        "options": [
          "A bounded, read-only, repeatable analysis",
          "An irreversible account action with no testing",
          "Deleting suspicious evidence",
          "Changing production configuration without approval"
        ],
        "answer": "A bounded, read-only, repeatable analysis",
        "why": "Read-only automation allows the learner to prove correctness before introducing operational impact."
      }
    },
    {
      "id": "pro-12",
      "title": "Mini Project: Authentication Log Analyzer",
      "objective": "Integrate Python and data reasoning to produce an evidence-based authentication analysis.",
      "time": "2–2.5 hours",
      "prerequisite": "All previous lessons in this pathway",
      "read": "This mini project brings the pathway together. You receive authentication records containing a timestamp, username, source IP and status. Your job is not to “find hackers.” Your job is to produce a defensible analysis of the data you were given.\\n\\nFirst preserve the source and inspect the schema. Then validate required fields and values. Calculate failed attempts, unique users, unique source IPs and threshold candidates. Finally, explain what the data supports and what it does not support.\\n\\nA strong result separates observation from conclusion. “User A had 8 failures” is an observation. “User A was compromised” is a much stronger claim requiring additional evidence.",
      "concepts": [
        "Project framing",
        "Data validation",
        "Python processing",
        "SQL reasoning",
        "Thresholds",
        "Evidence",
        "Uncertainty"
      ],
      "glossary": [
        [
          "Observation",
          "A directly supported statement about the available data."
        ],
        [
          "Hypothesis",
          "A proposed explanation that requires evidence."
        ],
        [
          "Threshold candidate",
          "A rule-based signal that may deserve review but is not proof of malicious activity."
        ]
      ],
      "example": "If a source IP has 25 failed attempts across 12 users, report the counts and identify it as a review candidate. Do not claim compromise without corroborating evidence.",
      "visual": {
        "title": "Evidence before conclusion",
        "caption": "Move from raw records to a bounded analytical statement.",
        "steps": [
          "Preserve source",
          "Validate data",
          "Calculate signals",
          "Investigate context",
          "State supported conclusions"
        ]
      },
      "case": "A report shows one IP with 40 failures but the IP belongs to a corporate NAT gateway shared by 500 employees. Explain why raw counts alone can mislead and what additional context you need.",
      "mistakes": [
        "Calling a threshold breach an incident without investigation.",
        "Ignoring shared infrastructure such as NAT or proxies.",
        "Removing inconvenient records because they complicate the result."
      ],
      "practice": "Build the project in stages: validate the dataset, calculate summary metrics, identify review candidates, document assumptions and write a short analyst conclusion.",
      "evidence": "Final project evidence: validation summary, analysis output, three observations, one hypothesis, assumptions and a short recommendation for the next investigation step.",
      "check": {
        "q": "Which statement is the most defensible project conclusion?",
        "options": [
          "The data shows 40 failures from this IP; additional context is required to determine why",
          "This IP is definitely an attacker",
          "The user is definitely compromised",
          "The data proves intent"
        ],
        "answer": "The data shows 40 failures from this IP; additional context is required to determine why",
        "why": "A defensible analyst separates observed facts from hypotheses that require additional evidence."
      }
    }
  ]
},
  {id:"data-science",code:"08",title:"Statistics & Data Science",category:"Data & Analytics",description:"Learn probability, statistics, data cleaning, visualization and analytical reasoning from first principles.",status:"active",lessons:[
    {id:"dat-01",title:"Data Thinking",objective:"Understand data thinking and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Data Thinking is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Data Thinking", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Data Thinking","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to data thinking. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Data Thinking",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving data thinking. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain data thinking in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of data thinking?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-02",title:"Population, Sample & Bias",objective:"Understand population, sample & bias and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Population, Sample & Bias is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Population, Sample & Bias", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Population, Sample & Bias","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to population, sample & bias. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Population, Sample & Bias",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving population, sample & bias. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain population, sample & bias in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of population, sample & bias?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-03",title:"Mean, Median & Percentiles",objective:"Understand mean, median & percentiles and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Mean, Median & Percentiles is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Mean, Median & Percentiles", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Mean, Median & Percentiles","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to mean, median & percentiles. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Mean, Median & Percentiles",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving mean, median & percentiles. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain mean, median & percentiles in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of mean, median & percentiles?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-04",title:"Variation & Standard Deviation",objective:"Understand variation & standard deviation and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Variation & Standard Deviation is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Variation & Standard Deviation", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Variation & Standard Deviation","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to variation & standard deviation. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Variation & Standard Deviation",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving variation & standard deviation. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain variation & standard deviation in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of variation & standard deviation?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-05",title:"Distributions & Histograms",objective:"Understand distributions & histograms and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Distributions & Histograms is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Distributions & Histograms", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Distributions & Histograms","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to distributions & histograms. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Distributions & Histograms",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving distributions & histograms. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain distributions & histograms in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of distributions & histograms?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-06",title:"Probability Fundamentals",objective:"Understand probability fundamentals and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Probability Fundamentals is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Probability Fundamentals", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Probability Fundamentals","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to probability fundamentals. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Probability Fundamentals",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving probability fundamentals. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain probability fundamentals in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of probability fundamentals?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-07",title:"Conditional Probability & Bayes Intuition",objective:"Understand conditional probability & bayes intuition and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Conditional Probability & Bayes Intuition is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Conditional Probability & Bayes Intuition", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Conditional Probability & Bayes Intuition","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to conditional probability & bayes intuition. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Conditional Probability & Bayes Intuition",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving conditional probability & bayes intuition. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain conditional probability & bayes intuition in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of conditional probability & bayes intuition?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-08",title:"Correlation vs Causation",objective:"Understand correlation vs causation and apply it to a realistic data & analytics problem.",time:"1.75–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Correlation vs Causation is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Correlation vs Causation", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Correlation vs Causation","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to correlation vs causation. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Correlation vs Causation",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving correlation vs causation. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain correlation vs causation in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of correlation vs causation?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-09",title:"Sampling & Confidence",objective:"Understand sampling & confidence and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Sampling & Confidence is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Sampling & Confidence", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Sampling & Confidence","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to sampling & confidence. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Sampling & Confidence",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving sampling & confidence. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain sampling & confidence in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of sampling & confidence?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-10",title:"Data Cleaning & Missing Values",objective:"Understand data cleaning & missing values and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Data Cleaning & Missing Values is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Data Cleaning & Missing Values", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Data Cleaning & Missing Values","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to data cleaning & missing values. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Data Cleaning & Missing Values",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving data cleaning & missing values. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain data cleaning & missing values in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of data cleaning & missing values?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-11",title:"Visualization for Security Data",objective:"Understand visualization for security data and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Visualization for Security Data is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Visualization for Security Data", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Visualization for Security Data","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to visualization for security data. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Visualization for Security Data",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving visualization for security data. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain visualization for security data in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of visualization for security data?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"dat-12",title:"Mini Project: Security Operations Analysis",objective:"Understand mini project: security operations analysis and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Mini Project: Security Operations Analysis is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Mini Project: Security Operations Analysis", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Mini Project: Security Operations Analysis","The core idea being learned in this lesson, explained in the context of Statistics & Data Science."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to mini project: security operations analysis. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Mini Project: Security Operations Analysis",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving mini project: security operations analysis. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain mini project: security operations analysis in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of mini project: security operations analysis?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},  ],meta:{"level":"Applied Analytics","load":"22–26 hours","focus":"Build statistical intuition before formulas, then turn messy data into defensible analytical conclusions.","outcomes":["Describe distributions, averages and variation correctly.","Reason about probability, samples, uncertainty and correlation.","Clean and validate datasets without hiding data-quality problems.","Choose useful visualizations and communicate findings clearly.","Use statistical evidence to support security and business decisions."],"topics":["Data literacy","Descriptive statistics","Probability","Sampling","Distributions","Correlation","Inference","Data cleaning","Visualization","Analytical communication"],"case":"Case: security operations data contains login failures, response times and alert volumes; determine what changed and what the evidence can actually support.","assessment":"Data-quality review + statistical analysis + executive interpretation","lab":"Security Analytics Notebook"}},
  {id:"machine-learning",code:"09",title:"Machine Learning",category:"Data & Analytics",description:"Move from statistical thinking to supervised, unsupervised and practical machine-learning systems.",status:"active",lessons:[
    {id:"mac-01",title:"What Machine Learning Is",objective:"Understand what machine learning is and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: What Machine Learning Is is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["What Machine Learning Is", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["What Machine Learning Is","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to what machine learning is. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"What Machine Learning Is",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving what machine learning is. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain what machine learning is in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of what machine learning is?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-02",title:"Features, Labels & Datasets",objective:"Understand features, labels & datasets and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Features, Labels & Datasets is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Features, Labels & Datasets", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Features, Labels & Datasets","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to features, labels & datasets. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Features, Labels & Datasets",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving features, labels & datasets. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain features, labels & datasets in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of features, labels & datasets?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-03",title:"Train, Validation & Test Sets",objective:"Understand train, validation & test sets and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Train, Validation & Test Sets is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Train, Validation & Test Sets", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Train, Validation & Test Sets","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to train, validation & test sets. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Train, Validation & Test Sets",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving train, validation & test sets. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain train, validation & test sets in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of train, validation & test sets?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-04",title:"Linear Regression",objective:"Understand linear regression and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Linear Regression is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Linear Regression", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Linear Regression","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to linear regression. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Linear Regression",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving linear regression. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain linear regression in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of linear regression?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-05",title:"Classification Fundamentals",objective:"Understand classification fundamentals and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Classification Fundamentals is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Classification Fundamentals", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Classification Fundamentals","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to classification fundamentals. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Classification Fundamentals",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving classification fundamentals. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain classification fundamentals in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of classification fundamentals?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-06",title:"Decision Trees & Rules",objective:"Understand decision trees & rules and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Decision Trees & Rules is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Decision Trees & Rules", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Decision Trees & Rules","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to decision trees & rules. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Decision Trees & Rules",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving decision trees & rules. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain decision trees & rules in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of decision trees & rules?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-07",title:"Nearest Neighbors & Similarity",objective:"Understand nearest neighbors & similarity and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Nearest Neighbors & Similarity is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Nearest Neighbors & Similarity", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Nearest Neighbors & Similarity","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to nearest neighbors & similarity. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Nearest Neighbors & Similarity",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving nearest neighbors & similarity. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain nearest neighbors & similarity in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of nearest neighbors & similarity?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-08",title:"Clustering & Anomaly Thinking",objective:"Understand clustering & anomaly thinking and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Clustering & Anomaly Thinking is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Clustering & Anomaly Thinking", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Clustering & Anomaly Thinking","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to clustering & anomaly thinking. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Clustering & Anomaly Thinking",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving clustering & anomaly thinking. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain clustering & anomaly thinking in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of clustering & anomaly thinking?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-09",title:"Precision, Recall & Confusion Matrix",objective:"Understand precision, recall & confusion matrix and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Precision, Recall & Confusion Matrix is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Precision, Recall & Confusion Matrix", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Precision, Recall & Confusion Matrix","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to precision, recall & confusion matrix. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Precision, Recall & Confusion Matrix",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving precision, recall & confusion matrix. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain precision, recall & confusion matrix in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of precision, recall & confusion matrix?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-10",title:"Overfitting & Generalization",objective:"Understand overfitting & generalization and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Overfitting & Generalization is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Overfitting & Generalization", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Overfitting & Generalization","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to overfitting & generalization. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Overfitting & Generalization",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving overfitting & generalization. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain overfitting & generalization in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of overfitting & generalization?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-11",title:"Feature Leakage, Bias & Drift",objective:"Understand feature leakage, bias & drift and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Feature Leakage, Bias & Drift is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Feature Leakage, Bias & Drift", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Feature Leakage, Bias & Drift","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to feature leakage, bias & drift. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Feature Leakage, Bias & Drift",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving feature leakage, bias & drift. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain feature leakage, bias & drift in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of feature leakage, bias & drift?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"mac-12",title:"Mini Project: Suspicious Login Classifier",objective:"Understand mini project: suspicious login classifier and apply it to a realistic data & analytics problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Mini Project: Suspicious Login Classifier is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Mini Project: Suspicious Login Classifier", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Mini Project: Suspicious Login Classifier","The core idea being learned in this lesson, explained in the context of Machine Learning."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to mini project: suspicious login classifier. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Mini Project: Suspicious Login Classifier",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving mini project: suspicious login classifier. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain mini project: suspicious login classifier in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of mini project: suspicious login classifier?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},  ],meta:{"level":"Advanced Analytics","load":"24–30 hours","focus":"Understand machine learning from the ground up, including data preparation, model behavior, evaluation, limitations and security use cases.","outcomes":["Explain what a model learns from data.","Prepare features and labels without leakage.","Understand regression, classification and clustering.","Evaluate models with appropriate metrics and baselines.","Recognize overfitting, bias, drift and adversarial limitations.","Build a small security-focused ML workflow."],"topics":["ML mental model","Features & labels","Regression","Classification","Decision trees","Nearest neighbors","Clustering","Train/test split","Metrics","Overfitting","Feature leakage","Model monitoring"],"case":"Case: classify suspicious login events while controlling false positives, leakage and changing attacker behavior.","assessment":"Model comparison + evaluation report + security limitations review","lab":"Security ML Lab"}},
  {id:"security-analytics",code:"10",title:"Security Analytics & Detection Engineering",category:"Advanced Security",description:"Combine telemetry, analytics and detection logic to investigate real security questions.",status:"active",lessons:[
    {id:"sec-01",title:"Security Telemetry",objective:"Understand security telemetry and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Security Telemetry is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Security Telemetry", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Security Telemetry","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to security telemetry. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Security Telemetry",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving security telemetry. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain security telemetry in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of security telemetry?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-02",title:"Events, Logs & Fields",objective:"Understand events, logs & fields and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Events, Logs & Fields is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Events, Logs & Fields", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Events, Logs & Fields","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to events, logs & fields. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Events, Logs & Fields",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving events, logs & fields. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain events, logs & fields in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of events, logs & fields?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-03",title:"Normalization & Enrichment",objective:"Understand normalization & enrichment and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Normalization & Enrichment is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Normalization & Enrichment", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Normalization & Enrichment","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to normalization & enrichment. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Normalization & Enrichment",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving normalization & enrichment. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain normalization & enrichment in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of normalization & enrichment?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-04",title:"Detection Hypotheses",objective:"Understand detection hypotheses and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Detection Hypotheses is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Detection Hypotheses", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Detection Hypotheses","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to detection hypotheses. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Detection Hypotheses",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving detection hypotheses. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain detection hypotheses in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of detection hypotheses?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-05",title:"Rule Logic & Thresholds",objective:"Understand rule logic & thresholds and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Rule Logic & Thresholds is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Rule Logic & Thresholds", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Rule Logic & Thresholds","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to rule logic & thresholds. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Rule Logic & Thresholds",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving rule logic & thresholds. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain rule logic & thresholds in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of rule logic & thresholds?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-06",title:"Authentication Analytics",objective:"Understand authentication analytics and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Authentication Analytics is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Authentication Analytics", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Authentication Analytics","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to authentication analytics. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Authentication Analytics",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving authentication analytics. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain authentication analytics in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of authentication analytics?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-07",title:"Endpoint & Process Telemetry",objective:"Understand endpoint & process telemetry and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Endpoint & Process Telemetry is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Endpoint & Process Telemetry", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Endpoint & Process Telemetry","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to endpoint & process telemetry. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Endpoint & Process Telemetry",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving endpoint & process telemetry. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain endpoint & process telemetry in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of endpoint & process telemetry?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-08",title:"Network Detection Concepts",objective:"Understand network detection concepts and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Network Detection Concepts is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Network Detection Concepts", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Network Detection Concepts","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to network detection concepts. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Network Detection Concepts",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving network detection concepts. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain network detection concepts in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of network detection concepts?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-09",title:"SIEM Investigation Workflow",objective:"Understand siem investigation workflow and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: SIEM Investigation Workflow is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["SIEM Investigation Workflow", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["SIEM Investigation Workflow","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to siem investigation workflow. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"SIEM Investigation Workflow",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving siem investigation workflow. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain siem investigation workflow in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of siem investigation workflow?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-10",title:"Detection Testing & False Positives",objective:"Understand detection testing & false positives and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Detection Testing & False Positives is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Detection Testing & False Positives", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Detection Testing & False Positives","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to detection testing & false positives. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Detection Testing & False Positives",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving detection testing & false positives. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain detection testing & false positives in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of detection testing & false positives?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-11",title:"Threat-Informed Detection",objective:"Understand threat-informed detection and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Threat-Informed Detection is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Threat-Informed Detection", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Threat-Informed Detection","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to threat-informed detection. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Threat-Informed Detection",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving threat-informed detection. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain threat-informed detection in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of threat-informed detection?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"sec-12",title:"Mini Project: Build an Investigation Playbook",objective:"Understand mini project: build an investigation playbook and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Mini Project: Build an Investigation Playbook is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Mini Project: Build an Investigation Playbook", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Mini Project: Build an Investigation Playbook","The core idea being learned in this lesson, explained in the context of Security Analytics & Detection Engineering."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to mini project: build an investigation playbook. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Mini Project: Build an Investigation Playbook",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving mini project: build an investigation playbook. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain mini project: build an investigation playbook in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of mini project: build an investigation playbook?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},  ],meta:{"level":"Advanced Defensive","load":"24–30 hours","focus":"Turn raw telemetry into detection hypotheses, investigations, timelines and measurable defensive capability.","outcomes":["Identify telemetry required to answer an investigation question.","Normalize and correlate events across systems.","Write detection logic as testable hypotheses.","Investigate identity, endpoint and network signals together.","Measure detection quality and reduce noisy alerts.","Communicate findings with defensible evidence."],"topics":["Telemetry","Log normalization","Detection hypotheses","Correlation","SIEM","Authentication analytics","Endpoint telemetry","Network analytics","Detection testing","Threat-informed analysis"],"case":"Case: repeated authentication failures followed by a successful login and unusual endpoint activity; determine what happened using only available evidence.","assessment":"Detection specification + investigation narrative + tuning review","lab":"Detection Engineering Lab"}},
  {id:"cloud-devsecops",code:"11",title:"Cloud Security & DevSecOps",category:"Advanced Security",description:"Design secure cloud workloads, CI/CD controls, secrets management and resilient delivery.",status:"active",lessons:[
    {id:"clo-01",title:"Cloud Mental Model",objective:"Understand cloud mental model and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Cloud Mental Model is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Cloud Mental Model", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Cloud Mental Model","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to cloud mental model. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Cloud Mental Model",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving cloud mental model. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain cloud mental model in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of cloud mental model?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-02",title:"Shared Responsibility",objective:"Understand shared responsibility and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Shared Responsibility is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Shared Responsibility", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Shared Responsibility","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to shared responsibility. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Shared Responsibility",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving shared responsibility. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain shared responsibility in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of shared responsibility?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-03",title:"Cloud Identity & Least Privilege",objective:"Understand cloud identity & least privilege and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Cloud Identity & Least Privilege is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Cloud Identity & Least Privilege", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Cloud Identity & Least Privilege","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to cloud identity & least privilege. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Cloud Identity & Least Privilege",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving cloud identity & least privilege. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain cloud identity & least privilege in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of cloud identity & least privilege?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-04",title:"Network Segmentation in Cloud",objective:"Understand network segmentation in cloud and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Network Segmentation in Cloud is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Network Segmentation in Cloud", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Network Segmentation in Cloud","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to network segmentation in cloud. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Network Segmentation in Cloud",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving network segmentation in cloud. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain network segmentation in cloud in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of network segmentation in cloud?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-05",title:"Storage & Data Protection",objective:"Understand storage & data protection and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Storage & Data Protection is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Storage & Data Protection", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Storage & Data Protection","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to storage & data protection. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Storage & Data Protection",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving storage & data protection. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain storage & data protection in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of storage & data protection?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-06",title:"Secrets & Key Management",objective:"Understand secrets & key management and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Secrets & Key Management is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Secrets & Key Management", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Secrets & Key Management","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to secrets & key management. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Secrets & Key Management",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving secrets & key management. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain secrets & key management in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of secrets & key management?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-07",title:"Workload Security",objective:"Understand workload security and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Workload Security is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Workload Security", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Workload Security","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to workload security. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Workload Security",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving workload security. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain workload security in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of workload security?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-08",title:"Secure CI/CD",objective:"Understand secure ci/cd and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Secure CI/CD is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Secure CI/CD", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Secure CI/CD","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to secure ci/cd. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Secure CI/CD",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving secure ci/cd. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain secure ci/cd in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of secure ci/cd?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-09",title:"Security Testing in Pipelines",objective:"Understand security testing in pipelines and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Security Testing in Pipelines is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Security Testing in Pipelines", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Security Testing in Pipelines","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to security testing in pipelines. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Security Testing in Pipelines",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving security testing in pipelines. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain security testing in pipelines in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of security testing in pipelines?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-10",title:"Infrastructure as Code Security",objective:"Understand infrastructure as code security and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Infrastructure as Code Security is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Infrastructure as Code Security", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Infrastructure as Code Security","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to infrastructure as code security. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Infrastructure as Code Security",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving infrastructure as code security. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain infrastructure as code security in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of infrastructure as code security?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-11",title:"Cloud Monitoring & Incident Response",objective:"Understand cloud monitoring & incident response and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Cloud Monitoring & Incident Response is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Cloud Monitoring & Incident Response", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Cloud Monitoring & Incident Response","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to cloud monitoring & incident response. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Cloud Monitoring & Incident Response",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving cloud monitoring & incident response. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain cloud monitoring & incident response in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of cloud monitoring & incident response?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"clo-12",title:"Mini Project: Secure Cloud Application",objective:"Understand mini project: secure cloud application and apply it to a realistic advanced security problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Mini Project: Secure Cloud Application is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Mini Project: Secure Cloud Application", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Mini Project: Secure Cloud Application","The core idea being learned in this lesson, explained in the context of Cloud Security & DevSecOps."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to mini project: secure cloud application. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Mini Project: Secure Cloud Application",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving mini project: secure cloud application. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain mini project: secure cloud application in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of mini project: secure cloud application?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},  ],meta:{"level":"Advanced Engineering","load":"24–30 hours","focus":"Understand cloud responsibility, identity, network boundaries, secure delivery and operational resilience.","outcomes":["Explain cloud shared responsibility accurately.","Design least-privilege cloud identities.","Apply network segmentation and workload isolation.","Protect secrets and sensitive configuration.","Place security controls into CI/CD without blocking useful delivery.","Plan monitoring, backup and recovery for cloud workloads."],"topics":["Shared responsibility","Cloud IAM","Network controls","Workload identity","Secrets","Storage security","CI/CD","SAST/DAST concepts","Infrastructure as code","Monitoring","Resilience"],"case":"Case: migrate a customer-facing application to cloud while preserving identity controls, data protection, deployment safety and recovery capability.","assessment":"Cloud architecture review + control mapping + secure pipeline design","lab":"Cloud Security Architecture Lab"}},
  {id:"cyber-management",code:"12",title:"Cybersecurity Management, GRC & Risk",category:"Management & Governance",description:"Connect technical security to governance, risk, compliance, leadership and business decisions.",status:"active",lessons:[
    {id:"cyb-01",title:"Security as a Business Function",objective:"Understand security as a business function and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Security as a Business Function is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Security as a Business Function", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Security as a Business Function","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to security as a business function. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Security as a Business Function",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving security as a business function. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain security as a business function in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of security as a business function?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-02",title:"Risk Vocabulary",objective:"Understand risk vocabulary and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Risk Vocabulary is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Risk Vocabulary", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Risk Vocabulary","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to risk vocabulary. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Risk Vocabulary",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving risk vocabulary. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain risk vocabulary in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of risk vocabulary?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-03",title:"Asset & Business Impact",objective:"Understand asset & business impact and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Asset & Business Impact is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Asset & Business Impact", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Asset & Business Impact","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to asset & business impact. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Asset & Business Impact",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving asset & business impact. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain asset & business impact in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of asset & business impact?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-04",title:"Threat, Vulnerability & Control",objective:"Understand threat, vulnerability & control and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Threat, Vulnerability & Control is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Threat, Vulnerability & Control", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Threat, Vulnerability & Control","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to threat, vulnerability & control. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Threat, Vulnerability & Control",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving threat, vulnerability & control. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain threat, vulnerability & control in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of threat, vulnerability & control?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-05",title:"Risk Assessment",objective:"Understand risk assessment and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Risk Assessment is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Risk Assessment", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Risk Assessment","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to risk assessment. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Risk Assessment",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving risk assessment. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain risk assessment in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of risk assessment?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-06",title:"Risk Treatment & Acceptance",objective:"Understand risk treatment & acceptance and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Risk Treatment & Acceptance is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Risk Treatment & Acceptance", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Risk Treatment & Acceptance","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to risk treatment & acceptance. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Risk Treatment & Acceptance",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving risk treatment & acceptance. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain risk treatment & acceptance in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of risk treatment & acceptance?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-07",title:"Control Design & Effectiveness",objective:"Understand control design & effectiveness and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Control Design & Effectiveness is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Control Design & Effectiveness", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Control Design & Effectiveness","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to control design & effectiveness. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Control Design & Effectiveness",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving control design & effectiveness. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain control design & effectiveness in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of control design & effectiveness?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-08",title:"Policies & Standards",objective:"Understand policies & standards and apply it to a realistic management & governance problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Policies & Standards is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Policies & Standards", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Policies & Standards","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to policies & standards. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Policies & Standards",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving policies & standards. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain policies & standards in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of policies & standards?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-09",title:"Compliance & Evidence",objective:"Understand compliance & evidence and apply it to a realistic management & governance problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Compliance & Evidence is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Compliance & Evidence", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Compliance & Evidence","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to compliance & evidence. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Compliance & Evidence",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving compliance & evidence. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain compliance & evidence in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of compliance & evidence?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-10",title:"Third-Party Risk",objective:"Understand third-party risk and apply it to a realistic management & governance problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Third-Party Risk is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Third-Party Risk", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Third-Party Risk","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to third-party risk. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Third-Party Risk",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving third-party risk. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain third-party risk in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of third-party risk?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-11",title:"Security Metrics for Leaders",objective:"Understand security metrics for leaders and apply it to a realistic management & governance problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Security Metrics for Leaders is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Security Metrics for Leaders", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Security Metrics for Leaders","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to security metrics for leaders. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Security Metrics for Leaders",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving security metrics for leaders. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain security metrics for leaders in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of security metrics for leaders?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"cyb-12",title:"Mini Project: Enterprise Cyber Risk Register",objective:"Understand mini project: enterprise cyber risk register and apply it to a realistic management & governance problem.",time:"2–2.5 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Mini Project: Enterprise Cyber Risk Register is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Mini Project: Enterprise Cyber Risk Register", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Mini Project: Enterprise Cyber Risk Register","The core idea being learned in this lesson, explained in the context of Cybersecurity Management, GRC & Risk."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to mini project: enterprise cyber risk register. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Mini Project: Enterprise Cyber Risk Register",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving mini project: enterprise cyber risk register. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain mini project: enterprise cyber risk register in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of mini project: enterprise cyber risk register?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},  ],meta:{"level":"Management & Governance","load":"20–26 hours","focus":"Translate technical security into risk, governance, investment and executive decisions.","outcomes":["Distinguish risk, threat, vulnerability, control and residual risk.","Build practical risk registers and treatment plans.","Map controls to business objectives and obligations.","Evaluate control effectiveness using evidence.","Develop security policies and governance mechanisms.","Communicate security decisions to technical and executive audiences."],"topics":["Risk management","Governance","GRC","Policies","Controls","Risk registers","Compliance","Third-party risk","Metrics","Business communication","Incident governance"],"case":"Case: a growing digital business must prioritize security investments across identity, cloud, applications and workforce risk.","assessment":"Enterprise risk register + control assessment + executive briefing","lab":"Cyber Risk Management Lab"}},
  {id:"enterprise-capstone",code:"13",title:"Enterprise Capstone",category:"Integration",description:"Integrate technical, analytical and management skills into an evidence-based security transformation project.",status:"active",lessons:[
    {id:"ent-01",title:"Capstone Brief & Problem Framing",objective:"Understand capstone brief & problem framing and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Capstone Brief & Problem Framing is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Capstone Brief & Problem Framing", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Capstone Brief & Problem Framing","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to capstone brief & problem framing. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Capstone Brief & Problem Framing",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving capstone brief & problem framing. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain capstone brief & problem framing in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of capstone brief & problem framing?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-02",title:"Enterprise Asset Model",objective:"Understand enterprise asset model and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Enterprise Asset Model is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Enterprise Asset Model", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Enterprise Asset Model","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to enterprise asset model. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Enterprise Asset Model",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving enterprise asset model. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain enterprise asset model in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of enterprise asset model?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-03",title:"Threat & Trust-Boundary Mapping",objective:"Understand threat & trust-boundary mapping and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Threat & Trust-Boundary Mapping is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Threat & Trust-Boundary Mapping", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Threat & Trust-Boundary Mapping","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to threat & trust-boundary mapping. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Threat & Trust-Boundary Mapping",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving threat & trust-boundary mapping. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain threat & trust-boundary mapping in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of threat & trust-boundary mapping?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-04",title:"Data & Evidence Plan",objective:"Understand data & evidence plan and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Data & Evidence Plan is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Data & Evidence Plan", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Data & Evidence Plan","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to data & evidence plan. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Data & Evidence Plan",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving data & evidence plan. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain data & evidence plan in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of data & evidence plan?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-05",title:"Security Architecture",objective:"Understand security architecture and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Security Architecture is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Security Architecture", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Security Architecture","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to security architecture. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Security Architecture",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving security architecture. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain security architecture in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of security architecture?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-06",title:"Identity & Access Strategy",objective:"Understand identity & access strategy and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Identity & Access Strategy is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Identity & Access Strategy", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Identity & Access Strategy","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to identity & access strategy. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Identity & Access Strategy",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving identity & access strategy. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain identity & access strategy in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of identity & access strategy?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-07",title:"Detection & Response Strategy",objective:"Understand detection & response strategy and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Detection & Response Strategy is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Detection & Response Strategy", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Detection & Response Strategy","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to detection & response strategy. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Detection & Response Strategy",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving detection & response strategy. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain detection & response strategy in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of detection & response strategy?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-08",title:"Security Analytics Plan",objective:"Understand security analytics plan and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Security Analytics Plan is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Security Analytics Plan", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Security Analytics Plan","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to security analytics plan. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Security Analytics Plan",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving security analytics plan. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain security analytics plan in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of security analytics plan?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-09",title:"Cloud & DevSecOps Controls",objective:"Understand cloud & devsecops controls and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Cloud & DevSecOps Controls is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Cloud & DevSecOps Controls", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Cloud & DevSecOps Controls","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to cloud & devsecops controls. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Cloud & DevSecOps Controls",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving cloud & devsecops controls. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain cloud & devsecops controls in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of cloud & devsecops controls?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-10",title:"Risk & Investment Prioritization",objective:"Understand risk & investment prioritization and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Risk & Investment Prioritization is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Risk & Investment Prioritization", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Risk & Investment Prioritization","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to risk & investment prioritization. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Risk & Investment Prioritization",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving risk & investment prioritization. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain risk & investment prioritization in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of risk & investment prioritization?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-11",title:"Executive Communication",objective:"Understand executive communication and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Executive Communication is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Executive Communication", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Executive Communication","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to executive communication. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Executive Communication",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving executive communication. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain executive communication in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of executive communication?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},
    {id:"ent-12",title:"Final Defense & Reflection",objective:"Understand final defense & reflection and apply it to a realistic integration problem.",time:"1.5–2 hours",prerequisite:"Complete the previous lesson in this pathway or review the listed prerequisite concepts.",read:"This lesson starts with the idea in plain language: Final Defense & Reflection is not a term to memorize; it is a tool for making better technical decisions. First build the mental model, then connect it to an example, and finally test your understanding.\\n\\nIn professional work, the important question is not only what a concept means, but when it is useful, what assumptions it depends on, what evidence supports a conclusion, and what could go wrong. NorthStar therefore treats each lesson as a small competency rather than a vocabulary item.",concepts:["Final Defense & Reflection", "Inputs and outputs", "Assumptions", "Evidence", "Common failure modes"],glossary:[["Final Defense & Reflection","The core idea being learned in this lesson, explained in the context of Enterprise Capstone."],["Evidence","Information that supports a technical or business conclusion."],["Assumption","A condition accepted for the purpose of analysis and made explicit so it can be challenged."]],example:"Worked example: imagine a security team facing a small business problem related to final defense & reflection. Start by stating the goal, identify the relevant inputs, apply the concept, inspect the result, and record what evidence would make the conclusion trustworthy.",visual:{title:"Final Defense & Reflection",caption:"Mental model: understand → apply → inspect → explain.",steps:["Define the problem","Identify inputs","Apply the concept","Inspect the result","Explain the evidence"]},case:"Case analysis: a security or data team must make a decision involving final defense & reflection. Identify the business objective, technical facts, missing evidence, possible risks and the next defensible action.",mistakes:["Memorizing the definition without understanding when to use it.","Skipping assumptions or data-quality checks.","Treating a result as certain when the evidence is incomplete."],practice:"Practice: explain final defense & reflection in your own words, work through the case, state one assumption, identify the evidence you would collect, and describe what would change your conclusion.",evidence:"Evidence checkpoint: submit a short explanation, the reasoning used in the case, one assumption and one piece of supporting evidence.",check:{q:"Which approach best demonstrates understanding of final defense & reflection?",options:["Apply the concept to a scoped problem and justify the result","Memorize the term only","Skip evidence and rely on intuition","Use the same answer for every situation"],answer:"Apply the concept to a scoped problem and justify the result",why:"Professional competence requires application, reasoning and evidence, not vocabulary recall alone."}},  ],meta:{"level":"Capstone / Integration","load":"18–24 hours","focus":"Combine technical foundations, data science, security analytics and management into one defensible enterprise decision.","outcomes":["Frame a real enterprise security problem.","Collect and validate technical and business evidence.","Analyze security data and identify uncertainty.","Design controls and detection capabilities.","Prioritize investment using risk and business context.","Present an evidence-based security transformation plan."],"topics":["Problem framing","Architecture","Telemetry","Analytics","Risk","Controls","Detection","Cloud","Governance","Executive communication"],"case":"Capstone: design a security transformation for a mid-sized digital enterprise with identity, cloud, application, data and operational constraints.","assessment":"Portfolio-grade enterprise security transformation dossier + presentation","lab":"NorthStar Enterprise Simulation"}},
];


// NorthStar academic module metadata.
// This is an IIM-style benchmarked structure (case analysis, applied exercises,
// simulation, ethics/governance and evidence-based assessment), not an official IIM curriculum.
const NORTHSTAR_MODULE_META = {
 "security-foundations":{
  level:"Foundation / Core",
  load:"10–12 hours",
  focus:"Security vocabulary, risk thinking, identity, access and threat modeling.",
  outcomes:["Frame security problems using assets, threats, vulnerabilities and controls.","Apply CIA, authentication, authorization and least privilege to business scenarios.","Build a basic threat model with trust boundaries and abuse cases.","Distinguish events, alerts, incidents, findings and evidence."],
  topics:["Security mental models","CIA triad","Identity & access management","Least privilege","Threat modeling","Security operations vocabulary"],
  case:"Case: customer portal exposure — identify business assets, trust boundaries, likely threats and control gaps.",
  assessment:"Concept checks + threat-model exercise + short case analysis",
  lab:"Security Scoping Lab"
 },
 "network-security":{
  level:"Core Technical",
  load:"12–14 hours",
  focus:"Network architecture, protocols, segmentation, firewall policy and packet analysis.",
  outcomes:["Interpret IP addresses, ports, protocols and TCP behavior.","Explain subnet boundaries and basic network segmentation.","Translate business requirements into firewall policy.","Perform a disciplined packet-analysis workflow using controlled evidence."],
  topics:["TCP/IP","IPv4 & CIDR","TCP/UDP","Ports & services","Firewalls","Segmentation","Packet analysis"],
  case:"Case: enterprise network redesign — separate user, application and database trust zones and justify controls.",
  assessment:"Subnet reasoning + policy design + packet-analysis worksheet",
  lab:"Packet Recon"
 },
 "systems-cloud":{
  level:"Core Technical",
  load:"12–14 hours",
  focus:"Operating-system security, cloud responsibility, hardening, identity and secrets.",
  outcomes:["Review users, groups, permissions, processes and services.","Separate cloud-provider and customer security responsibilities.","Convert security baselines into measurable configuration checks.","Design safer cloud identity and secret-management patterns."],
  topics:["Linux security","Processes & services","Cloud shared responsibility","Hardening","IAM","Secrets management"],
  case:"Case: cloud application migration — identify configuration, identity and secret-management risks.",
  assessment:"Hardening checklist + cloud responsibility matrix + architecture review",
  lab:"Secure Configuration Lab"
 },
 "defensive-security":{
  level:"Core / SOC",
  load:"14–16 hours",
  focus:"Security telemetry, detection engineering, SIEM investigation and incident response.",
  outcomes:["Design telemetry around questions an analyst must answer.","Write testable detection hypotheses from observable behavior.","Correlate users, hosts, IPs, processes and timestamps in investigations.","Triage incidents using impact, scope and confidence.","Construct defensible incident timelines."],
  topics:["Security logging","Detection engineering","SIEM investigation","Incident triage","Evidence handling","Timeline reconstruction"],
  case:"Case: suspicious authentication sequence — correlate telemetry and decide what evidence is required before escalation.",
  assessment:"Detection rule + investigation narrative + incident timeline",
  lab:"Detection Drill + Incident Room"
 },
 "offensive-security":{
  level:"Applied Security Testing",
  load:"12–14 hours",
  focus:"Authorized testing methodology, application attack surfaces, validation and reporting.",
  outcomes:["Define scope and rules of engagement before testing.","Map web/application attack surfaces and trust boundaries.","Explain injection and authentication weaknesses safely.","Evaluate session-management controls in authorized environments.","Produce reproducible security findings with remediation context."],
  topics:["Testing methodology","Web attack surface","Input validation","Injection concepts","Authentication","Session security","Security reporting"],
  case:"Case: deliberately vulnerable web application — map the surface, identify validation questions and document findings without uncontrolled exploitation.",
  assessment:"Scope document + attack-surface map + finding report",
  lab:"Web Surface"
 },
 "security-engineering":{
  level:"Advanced Integration",
  load:"14–16 hours",
  focus:"Secure SDLC, automation, architecture, vulnerability management and security metrics.",
  outcomes:["Integrate security controls throughout software delivery.","Design auditable security automation.","Apply defense in depth and failure containment.","Prioritize vulnerabilities using exposure, exploitability and asset criticality.","Define metrics that support security decisions and governance."],
  topics:["Secure SDLC","Security automation","Defense in depth","Security architecture","Vulnerability management","Security metrics","Governance & evidence"],
  case:"Case: security transformation roadmap — prioritize controls, investments, metrics and verification across a growing digital business.",
  assessment:"Secure-SDLC design + control roadmap + executive security scorecard",
  lab:"Security Engineering Capstone"
 }
};

Object.keys(NORTHSTAR_MODULE_META).forEach(id=>{
 const module=NORTHSTAR_CURRICULUM.find(c=>c.id===id);
 if(module) module.meta=NORTHSTAR_MODULE_META[id];
});

// Public data contract consumed by the NorthStar application shell.
window.NORTHSTAR_CURRICULUM = NORTHSTAR_CURRICULUM;
