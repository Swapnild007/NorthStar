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
      "time": "90 minutes",
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
      "time": "90 minutes",
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
      "time": "90 minutes",
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
      "time": "90 minutes",
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
      "time": "90 minutes",
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
      "time": "90 minutes",
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
      {id:"sf-04",title:"Threat Modeling Basics",objective:"Map trust boundaries, entry points, assets and abuse cases before selecting mitigations.",time:"2.5–3 hours",prerequisite:"Security Mental Models + Identity & Access Fundamentals",read:"Threat modeling is structured reasoning about how a system could be misused or fail. Start with the system boundary and major components, then identify assets, entry points, trust boundaries, identities and important data flows. Convert plausible misuse into abuse cases and ask which controls prevent, detect or limit the scenario. A threat model is not a prediction of exactly what an attacker will do; it is a way to make assumptions explicit and prioritize analysis.",concepts:["System boundary","Trust boundary","Entry point","Data flow","Abuse case","Mitigation"],example:"For Browser → API → Database, the browser is an untrusted client, the API is a control boundary, and the database contains protected assets. The API should validate requests and enforce authorization rather than trusting client-side claims.",case:"Case — Customer portal: draw Browser → CDN/WAF → API → Database. Mark the trust boundaries, two entry points, two assets and three abuse cases. For each abuse case, name one preventive and one detective control.",mistakes:["Starting with a list of vulnerabilities instead of understanding the system.","Treating the client as a trusted authority for authorization decisions.","Drawing components without showing trust boundaries or data flows."],practice:"Produce a one-page threat model for a browser, API and database. Label every trust boundary and write three abuse cases in the form: actor + action + target + consequence.",evidence:"A diagram plus three structured abuse cases and control mappings.",check:{q:"What should be identified early in a threat model?",options:["Trust boundaries","Office seating","Logo colors","Printer models"],answer:"Trust boundaries",why:"Trust boundaries show where assumptions about identity, data or control change and therefore where security controls deserve explicit attention."}},
      {id:"sf-05",title:"Security Operations Vocabulary",objective:"Separate events, alerts, incidents, findings and evidence so investigations stay precise.",time:"2–2.5 hours",prerequisite:"Threat Modeling Basics",read:"Security operations depends on precise language. An event is an observed occurrence. An alert is a signal generated because an event or pattern may require attention. An incident is a confirmed or suspected security situation that requires response according to organizational criteria. A finding is an analyst conclusion or observation supported by evidence. Evidence is information preserved or referenced to support an investigation, decision or conclusion. These terms describe different stages and purposes; they should not be used interchangeably.",concepts:["Event","Alert","Incident","Finding","Evidence","Triage"],example:"A failed login is an event. A rule detecting 50 failures followed by a success may create an alert. After investigation shows the activity violates policy or indicates compromise, it may be handled as an incident. The analyst's documented conclusion is a finding supported by relevant evidence.",case:"Case — Suspicious authentication sequence: an alert shows repeated failures followed by a successful login from an unusual location. Identify the initial event, the alert, the questions needed for triage, the evidence to collect, and the conditions that would justify incident escalation.",mistakes:["Calling every alert an incident.","Writing conclusions without preserving supporting evidence.","Treating a single log record as proof of intent."],practice:"Take the suspicious-login scenario and write an investigation note with five headings: Signal, Context, Evidence, Finding, Decision. Clearly mark anything still uncertain.",evidence:"A concise investigation note that separates observed facts from analyst interpretation and records uncertainty.",check:{q:"What is evidence used for?",options:["Supporting an investigation or conclusion","Replacing all logs","Increasing CPU speed","Changing a password automatically"],answer:"Supporting an investigation or conclusion",why:"Evidence gives an investigation a defensible basis for observations, conclusions and decisions."}},
  {
    id:"network-security", code:"02", title:"Networking & Network Security", category:"Network",
    description:"TCP/IP, segmentation, protocols, firewalls and traffic analysis.",
    lessons:[
      {id:"ns-01",title:"TCP/IP Mental Model",objective:"Use layers, addresses, ports and protocols to interpret network traffic.",read:"A practical TCP/IP model separates link delivery, IP routing, transport behavior and application protocols. Analysts use source/destination addresses, ports, flags and payload metadata to reason about traffic.",practice:"For a TCP connection, identify the source IP, destination IP, source port, destination port and transport protocol.",check:{q:"Which sequence represents normal TCP connection establishment?",options:["SYN → SYN/ACK → ACK","ACK → SYN → FIN","SYN → ACK → RST","FIN → SYN → ACK"],answer:"SYN → SYN/ACK → ACK"}},
      {id:"ns-02",title:"IPv4 Addressing & Subnets",objective:"Read IPv4 addresses, CIDR notation and basic subnet boundaries.",read:"CIDR notation expresses a network prefix and host portion. Subnetting lets organizations separate broadcast domains and apply different routing and security policies.",practice:"Explain what /24 means in an IPv4 network.",check:{q:"In 192.168.10.0/24, how many bits form the network prefix?",options:["8","16","24","32"],answer:"24"}},
      {id:"ns-03",title:"TCP, UDP & Ports",objective:"Compare transport behavior and interpret common port usage.",read:"TCP provides connection-oriented reliable delivery. UDP is connectionless and has lower protocol overhead. A port identifies a transport endpoint associated with a process or service.",practice:"Explain why a DNS query can commonly use UDP while a web application may use TCP.",check:{q:"Which transport protocol is connection-oriented?",options:["UDP","TCP","ICMP","ARP"],answer:"TCP"}},
      {id:"ns-04",title:"Firewalls & Network Segmentation",objective:"Understand policy enforcement and trust-zone separation.",read:"Firewalls enforce traffic policy based on attributes such as addresses, ports, protocols and application identity. Segmentation limits lateral movement and reduces unnecessary trust.",practice:"Create a policy that allows an application tier to reach a database only on its required service port.",check:{q:"Why segment a database from a user network?",options:["To reduce unnecessary trust and lateral movement","To make passwords longer","To increase monitor brightness","To remove all logging"],answer:"To reduce unnecessary trust and lateral movement"}},
      {id:"ns-05",title:"Packet Analysis Workflow",objective:"Build a repeatable workflow for interpreting controlled packet captures.",read:"Packet analysis should begin with scope, then establish the baseline, identify endpoints and protocols, isolate unusual behavior and document evidence. Never infer intent from a single packet alone.",practice:"Create a five-step packet triage checklist.",check:{q:"What should come before interpreting an anomaly?",options:["Establish scope and baseline","Delete the capture","Disable logging","Assume compromise"],answer:"Establish scope and baseline"}}
    ]
  },
  {
    id:"systems-cloud", code:"03", title:"Linux, Systems & Cloud", category:"Foundation",
    description:"Operating systems, cloud architecture, hardening and secure configuration.",
    lessons:[
      {id:"sc-01",title:"Linux Security Fundamentals",objective:"Understand how Linux users, groups, permissions, processes and services work together to protect a computer.",time:"3–4 hours",prerequisite:"Security Mental Models + Identity & Access Fundamentals",read:"Linux is an operating system family widely used on servers, cloud workloads, security tools and many other systems. Before learning Linux security, think of a Linux machine as a collection of identities, files, running programs and network-facing services. Security means making sure the right person or program can perform the right action, while reducing unnecessary access and keeping useful records of what happened.\n\nStart with four questions. Who is acting? What resource are they trying to use? What action are they trying to perform? What program or service is involved? Linux answers these questions through users, groups, file permissions, process identities and service configuration.\n\nA user represents an identity. A group is a way to organize identities and grant shared permissions. A file or directory has an owner and group, plus permissions that determine whether the owner, group members and other users may read, write or execute it. A process is a running instance of a program and normally runs with an identity. A service is a program intended to provide functionality continuously or in the background, such as a web server or SSH server.\n\nThe security principle connecting these concepts is least privilege: give a person or process only the access required to perform its job. If a web application only needs to read one directory, it should not run with unrestricted administrator privileges. If a support user only needs to inspect logs, that user should not automatically receive permission to modify system configuration.\n\nPermissions are not the whole of Linux security. Secure configuration also includes patching, authentication controls, service exposure, logging, backups, secrets protection and system hardening. The goal is not to memorize commands first; it is to understand what each security control is trying to achieve.",concepts:["Operating system","User","Group","Root / administrator","File permissions","Process","Service","Least privilege","Attack surface","Audit trail"],glossary:[["Operating system","The software that manages the computer’s hardware and provides the environment in which programs run."],["User","An identity representing a person or account that can interact with the system."],["Group","A collection of users used to manage shared permissions."],["Root","Linux’s most powerful administrative identity; it can perform actions that ordinary users cannot."],["Permission","A rule controlling whether an identity may read, write or execute a resource."],["Process","A program that is currently running."],["Service","A program designed to provide a function, often continuously or in the background."],["Least privilege","Give an identity only the access it needs, and no more."],["Attack surface","The set of exposed ways a system could potentially be accessed, misused or attacked."],["Audit trail","Records that help reconstruct what happened, when it happened and which identity was involved."]],example:"Imagine a Linux web server hosting a company website. The web application runs as a dedicated service account. Its files belong to an appropriate owner and group. Configuration files containing sensitive settings are not writable by ordinary users. The database service is not unnecessarily exposed to the public network. Administrative access is restricted and logged. If the web application is compromised, limiting its identity and permissions can reduce what the attacker can access. This is an example of containment through least privilege and segmentation.",case:"Case — Small company web server: the server has three human administrators, one web application, a database and an SSH service. Your job is to reason about the security design before touching the machine. Identify which identities should exist, which services need to be exposed, which resources each identity needs, and what activity should be logged. Then explain what could happen if the web application ran as root.",mistakes:["Memorizing Linux commands without understanding what security decision each command represents.","Assuming root is simply a normal user with a stronger password; root has broad administrative authority and should be tightly controlled.","Giving an application write access to an entire filesystem when it only needs one directory.","Confusing a process with a user: a process is a running program, while the process operates under an identity.","Assuming a system is secure merely because its firewall is enabled; host configuration, identities, services, patching and logging also matter."],practice:"Build a simple security model for a fictional Linux web server. Write five sections: 1) Identities — list the human and service identities; 2) Resources — list important files, directories and data; 3) Permissions — state who should read, write or execute each resource; 4) Services — identify which services must run and which should not; 5) Evidence — identify the logs or records you would review during an investigation. Finally, answer this question in your own words: why is running an application with unnecessary administrator privileges dangerous?",evidence:"A one-page Linux security review that clearly separates identities, resources, permissions, services and evidence. Your reasoning is more important than memorizing command syntax.",check:{q:"A web application only needs to read its own application files. Which security design follows least privilege?",options:["Run the application as root so it can access everything","Give the application a dedicated low-privilege identity with only the required file access","Give every user write access to the application directory","Disable all logging so the application runs faster"],answer:"Give the application a dedicated low-privilege identity with only the required file access",why:"Least privilege limits the application's authority to what it actually needs. If the application is compromised, this reduces the amount of the system and data that the compromised process can directly access."}},
      {id:"sc-02",title:"Processes & Services",objective:"Recognize service exposure and process relationships.",read:"A service is a long-running program that provides functionality. Security review asks which services are enabled, which identities they run under, what interfaces they expose and what dependencies they have.",practice:"Review a fictional server inventory and mark unnecessary services for removal.",check:{q:"Why minimize unnecessary services?",options:["To reduce attack surface","To increase attack surface","To disable backups","To hide logs"],answer:"To reduce attack surface"}},
      {id:"sc-03",title:"Cloud Shared Responsibility",objective:"Separate provider responsibilities from customer responsibilities.",read:"Cloud security is shared. Providers secure the underlying cloud infrastructure while customers remain responsible for configurations and workloads according to the service model.",practice:"For a cloud-hosted application, list three customer-controlled security responsibilities.",check:{q:"Who is responsible for secure application configuration?",options:["The customer/workload owner","Only the cloud provider","The ISP","The browser vendor"],answer:"The customer/workload owner"}},
      {id:"sc-04",title:"Secure Configuration & Hardening",objective:"Turn baseline requirements into measurable configuration checks.",read:"Hardening removes unnecessary functionality, applies secure defaults, restricts administrative access, protects secrets and keeps systems patched.",practice:"Write five measurable hardening checks for a Linux server.",check:{q:"A useful hardening check should be:",options:["Measurable and verifiable","Purely subjective","Impossible to test","Unrelated to risk"],answer:"Measurable and verifiable"}},
      {id:"sc-05",title:"Cloud Identity & Secrets",objective:"Apply least privilege to cloud identities and protect credentials.",read:"Cloud identities should receive only required permissions. Long-lived credentials increase exposure; managed identities, short-lived credentials and centralized secret storage reduce risk.",practice:"Identify three risks of embedding a cloud API key directly in frontend code.",check:{q:"Where should sensitive application secrets generally be kept?",options:["A protected server-side secret store","Public JavaScript","A URL query string","A README"],answer:"A protected server-side secret store"}}
    ]
  },
  {
    id:"defensive-security", code:"04", title:"Defensive Security & SOC", category:"Defensive",
    description:"Detection engineering, logs, SIEM concepts and incident response.",
    lessons:[
      {id:"ds-01",title:"Logging for Detection",objective:"Choose telemetry that supports security questions.",read:"Good security telemetry is purposeful. Define the question first, then collect the minimum useful fields with reliable timestamps, identities, source context and retention.",practice:"For a suspicious login investigation, list the fields an analyst needs.",check:{q:"What should drive telemetry selection?",options:["The security questions you need to answer","Maximum log volume","Random fields","Only storage capacity"],answer:"The security questions you need to answer"}},
      {id:"ds-02",title:"Detection Engineering Basics",objective:"Turn observable behavior into testable detection logic.",read:"A detection should describe an observable signal, reduce noise through context and define what evidence an analyst should inspect next.",practice:"Write a detection hypothesis for repeated failed logins followed by a successful login.",check:{q:"A useful detection should be:",options:["Testable against observable telemetry","Based only on intuition","Impossible to reproduce","Independent of evidence"],answer:"Testable against observable telemetry"}},
      {id:"ds-03",title:"SIEM Investigation Workflow",objective:"Search, pivot, correlate and document findings.",read:"A disciplined SIEM investigation moves from an initial signal to related entities such as users, hosts, IPs, processes and timestamps. Every pivot should answer a question.",practice:"Create a pivot chain from a suspicious login to the affected host.",check:{q:"Why correlate multiple events?",options:["To establish context and reduce isolated-event ambiguity","To remove timestamps","To avoid evidence","To increase false positives"],answer:"To establish context and reduce isolated-event ambiguity"}},
      {id:"ds-04",title:"Incident Triage & Severity",objective:"Classify incidents using impact, scope and confidence.",read:"Triage prioritizes response using factors such as affected assets, business impact, scope, persistence and confidence in the evidence.",practice:"Compare two simulated incidents and explain which factors affect urgency.",check:{q:"Which factor directly affects incident priority?",options:["Business impact","Wallpaper choice","Keyboard layout","Browser theme"],answer:"Business impact"}},
      {id:"ds-05",title:"Evidence & Incident Timeline",objective:"Build a defensible timeline from controlled evidence.",read:"A timeline aligns events from multiple sources into a coherent sequence. Preserve original timestamps, source identifiers and uncertainty instead of inventing missing facts.",practice:"Build a five-event timeline from authentication, process and network records.",check:{q:"What should an analyst do when a timestamp is uncertain?",options:["Record the uncertainty","Invent a precise time","Delete the event","Change the source"],answer:"Record the uncertainty"}}
    ]
  },
  {
    id:"offensive-security", code:"05", title:"Offensive & Application Security", category:"Offensive",
    description:"Web, API, application and adversary simulation fundamentals in controlled environments.",
    lessons:[
      {id:"os-01",title:"Offensive Security Methodology",objective:"Understand scoped reconnaissance, validation, exploitation and reporting.",read:"Authorized security testing is evidence-driven and scope-bound. A professional workflow defines targets, rules of engagement, safe validation methods and reporting requirements before testing.",practice:"Write a scope statement for a deliberately vulnerable training application.",check:{q:"What must exist before authorized testing begins?",options:["A defined scope and rules of engagement","A public exploit","An unknown target","A production credential"],answer:"A defined scope and rules of engagement"}},
      {id:"os-02",title:"Web Application Attack Surface",objective:"Map pages, APIs, inputs, authentication boundaries and trust relationships.",read:"An application's attack surface includes exposed routes, parameters, APIs, authentication flows, file handling and integrations. Mapping is about understanding what exists before attempting validation.",practice:"Create an attack-surface inventory for a fictional web app.",check:{q:"Which is part of a web attack surface?",options:["API endpoints","Office furniture","Monitor size","Keyboard color"],answer:"API endpoints"}},
      {id:"os-03",title:"Input Validation & Injection",objective:"Understand why untrusted input can alter program behavior.",read:"Injection vulnerabilities occur when data is interpreted as instructions in a different language or context. Defenses include parameterization, contextual encoding and strict validation.",practice:"Explain the difference between data and executable instructions.",check:{q:"Which control helps prevent SQL injection?",options:["Parameterized queries","Hard-coded passwords","Disabling logs","Longer URLs"],answer:"Parameterized queries"}},
      {id:"os-04",title:"Authentication & Session Testing",objective:"Evaluate authentication boundaries and session handling safely.",read:"Testing should examine credential handling, session issuance, expiration, privilege boundaries and recovery flows in an authorized environment.",practice:"List five questions for reviewing a session-management design.",check:{q:"Why should sessions expire?",options:["To reduce the lifetime of stolen session material","To make pages prettier","To increase bandwidth","To disable authorization"],answer:"To reduce the lifetime of stolen session material"}},
      {id:"os-05",title:"Reporting Security Findings",objective:"Turn technical observations into reproducible, useful findings.",read:"A security finding should identify the affected asset, observed behavior, evidence, impact, reproduction conditions and a practical remediation path.",practice:"Write a finding title and evidence summary for a simulated access-control issue.",check:{q:"A strong finding should include:",options:["Evidence and reproducible conditions","Only a dramatic title","No affected asset","No remediation context"],answer:"Evidence and reproducible conditions"}}
    ]
  },
  {
    id:"security-engineering", code:"06", title:"Security Engineering & DevSecOps", category:"Foundation",
    description:"Automation, secure development, architecture and measurable security controls.",
    lessons:[
      {id:"se-01",title:"Secure Software Lifecycle",objective:"Integrate security requirements throughout software delivery.",read:"Security engineering shifts important controls earlier into design, development, testing, deployment and operations instead of relying only on final review.",practice:"Place threat modeling, code review, dependency checks and runtime monitoring into a delivery lifecycle.",check:{q:"Why integrate security earlier?",options:["To identify and reduce risk before it becomes expensive to change","To remove testing","To eliminate requirements","To avoid documentation"],answer:"To identify and reduce risk before it becomes expensive to change"}},
      {id:"se-02",title:"Security Automation",objective:"Design repeatable checks that produce auditable evidence.",read:"Automation is valuable when the rule is explicit, the input is reliable and the output can be reviewed. Good automation reduces repetitive work without hiding uncertainty.",practice:"Design an automated check for a public storage bucket configuration.",check:{q:"What makes an automated security check useful?",options:["A clear rule and auditable output","Hidden logic","No evidence","Random results"],answer:"A clear rule and auditable output"}},
      {id:"se-03",title:"Security Architecture",objective:"Apply defense in depth, trust boundaries and failure containment.",read:"Secure architecture assumes individual controls can fail. Layered controls, isolation, least privilege and explicit trust boundaries reduce the impact of a single failure.",practice:"Design three independent controls around a sensitive API.",check:{q:"What is defense in depth?",options:["Multiple complementary security controls","One control everywhere","No controls","Only perimeter security"],answer:"Multiple complementary security controls"}},
      {id:"se-04",title:"Vulnerability Management",objective:"Prioritize remediation using evidence and business context.",read:"Vulnerability management combines discovery, validation, prioritization, remediation and verification. Severity alone does not describe the complete business risk.",practice:"Define a remediation priority using exploitability, exposure, asset criticality and compensating controls.",check:{q:"What should happen after remediation?",options:["Verify the fix","Assume success","Delete the finding","Stop collecting evidence"],answer:"Verify the fix"}},
      {id:"se-05",title:"Security Metrics & Evidence",objective:"Measure capability using outcomes rather than vanity metrics.",read:"Useful security metrics connect activity to outcomes: detection coverage, mean time to triage, remediation verification and control effectiveness are more informative than raw activity counts alone.",practice:"Design three metrics that demonstrate improved defensive capability.",check:{q:"A strong security metric should:",options:["Connect measurement to an outcome or decision","Only count activity","Avoid definitions","Change meaning each week"],answer:"Connect measurement to an outcome or decision"}}
    ]
  },
  {id:"programming-data",code:"07",title:"Programming, Python & SQL",category:"Technical Foundations",description:"Build programming and query fluency for automation, analytics and security engineering.",status:"planned",lessons:[],meta:{level:"Planned pathway",load:"Built progressively",focus:"Build programming and query fluency for automation, analytics and security engineering.",outcomes:[],topics:[],case:"Future module — content will be authored before release.",assessment:"Future module assessment.",lab:"Future applied lab."}},
  {id:"data-science",code:"08",title:"Statistics & Data Science",category:"Data & Analytics",description:"Learn probability, statistics, data cleaning, visualization and analytical reasoning from first principles.",status:"planned",lessons:[],meta:{level:"Planned pathway",load:"Built progressively",focus:"Learn probability, statistics, data cleaning, visualization and analytical reasoning from first principles.",outcomes:[],topics:[],case:"Future module — content will be authored before release.",assessment:"Future module assessment.",lab:"Future applied lab."}},
  {id:"machine-learning",code:"09",title:"Machine Learning",category:"Data & Analytics",description:"Move from statistical thinking to supervised, unsupervised and practical machine-learning systems.",status:"planned",lessons:[],meta:{level:"Planned pathway",load:"Built progressively",focus:"Move from statistical thinking to supervised, unsupervised and practical machine-learning systems.",outcomes:[],topics:[],case:"Future module — content will be authored before release.",assessment:"Future module assessment.",lab:"Future applied lab."}},
  {id:"security-analytics",code:"10",title:"Security Analytics & Detection Engineering",category:"Advanced Security",description:"Combine telemetry, analytics and detection logic to investigate real security questions.",status:"planned",lessons:[],meta:{level:"Planned pathway",load:"Built progressively",focus:"Combine telemetry, analytics and detection logic to investigate real security questions.",outcomes:[],topics:[],case:"Future module — content will be authored before release.",assessment:"Future module assessment.",lab:"Future applied lab."}},
  {id:"cloud-devsecops",code:"11",title:"Cloud Security & DevSecOps",category:"Advanced Security",description:"Design secure cloud workloads, CI/CD controls, secrets management and resilient delivery.",status:"planned",lessons:[],meta:{level:"Planned pathway",load:"Built progressively",focus:"Design secure cloud workloads, CI/CD controls, secrets management and resilient delivery.",outcomes:[],topics:[],case:"Future module — content will be authored before release.",assessment:"Future module assessment.",lab:"Future applied lab."}},
  {id:"cyber-management",code:"12",title:"Cybersecurity Management, GRC & Risk",category:"Management & Governance",description:"Connect technical security to governance, risk, compliance, leadership and business decisions.",status:"planned",lessons:[],meta:{level:"Planned pathway",load:"Built progressively",focus:"Connect technical security to governance, risk, compliance, leadership and business decisions.",outcomes:[],topics:[],case:"Future module — content will be authored before release.",assessment:"Future module assessment.",lab:"Future applied lab."}},
  {id:"enterprise-capstone",code:"13",title:"Enterprise Capstone",category:"Integration",description:"Integrate technical, analytical and management skills into an evidence-based security transformation project.",status:"planned",lessons:[],meta:{level:"Planned pathway",load:"Built progressively",focus:"Integrate technical, analytical and management skills into an evidence-based security transformation project.",outcomes:[],topics:[],case:"Future module — content will be authored before release.",assessment:"Future module assessment.",lab:"Future applied lab."}},
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
