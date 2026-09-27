/* NorthStar 2.0 · OS platform curriculum supplement
 * Supplemental platform lessons; does not overwrite existing lesson IDs.
 * Labs use synthetic evidence or owned, isolated systems only.
 */
window.NORTHSTAR_OS_PLATFORM_CURRICULUM = [
  {
    "id": "ns20-os-foundations",
    "course": "00",
    "title": "Operating Systems: Architecture, Roles & Security Boundaries",
    "objective": "Explain OS components and map security boundaries from firmware through applications.",
    "learningGoal": "Distinguish kernel, user space, services, drivers and system-call interfaces, and relate each to security controls.",
    "time": "75–90 min",
    "prerequisite": "Computer hardware and binary fundamentals",
    "concepts": [
      "kernel",
      "user space",
      "system calls",
      "drivers",
      "services",
      "isolation",
      "privilege boundary"
    ],
    "read": "An operating system (OS) coordinates hardware resources and provides abstractions used by applications. The kernel manages CPU scheduling, memory, devices and core security enforcement. User-space programs request privileged services through system calls; services and daemons provide background functions, while drivers mediate device-specific operations. A process is an executing program with its own virtual address space and security context. These boundaries reduce accidental interference, but vulnerabilities in kernel code, drivers, privileged services or configuration can cross them.\\n\\nOS designs include monolithic kernels, where many services run in privileged space, and microkernel approaches that move more services into isolated user-space components. Real systems often combine ideas. Security review should identify the actual platform and version, boot chain, privilege model, update channel, logging sources and recovery method rather than assuming all OSes behave alike.",
    "deepDive": [
      {
        "title": "Protection rings and privilege",
        "body": "User mode restricts direct access to hardware and kernel memory. Kernel mode executes privileged operations. Access-control checks still depend on correct identity, policy and implementation."
      },
      {
        "title": "Isolation mechanisms",
        "body": "Processes, virtual memory, permissions, sandboxing and mandatory access controls limit the impact of faults. Containers share a host kernel, unlike conventional virtual machines."
      },
      {
        "title": "Threat surface",
        "body": "Boot firmware, drivers, system services, package sources, management interfaces and update mechanisms are part of the OS security boundary."
      }
    ],
    "examples": [
      {
        "title": "A file-read request",
        "body": "An application asks the OS to open a file. The kernel resolves the path, checks the process identity and applicable permissions, then returns a handle or an error. The application should handle denial safely and should not assume that a visible filename implies access."
      }
    ],
    "case": "Review a fictional workstation diagram containing UEFI, bootloader, kernel, a privileged update service, user applications and an external device driver. Mark trust boundaries and identify where signed updates, least privilege and audit evidence apply.",
    "caseQuestions": [
      "Which components execute with elevated privilege?",
      "Where does an application cross into kernel services?",
      "What evidence would show the OS version and update state?",
      "Which boundary could a vulnerable driver weaken?"
    ],
    "practice": "Produce an annotated OS architecture and attack-surface diagram for the fictional workstation.",
    "practiceSteps": [
      "Draw firmware, bootloader, kernel, user-space processes, services, drivers and storage.",
      "Mark privilege transitions and security enforcement points.",
      "Identify three assets and a plausible failure mode for each.",
      "Assign an appropriate prevention or detection control and evidence source.",
      "State assumptions and distinguish generic concepts from platform-specific behavior."
    ],
    "mistakes": [
      "Treating the OS as only its graphical interface.",
      "Assuming a sandbox eliminates all kernel or configuration risk.",
      "Confusing authentication with authorization.",
      "Ignoring firmware, drivers and management services."
    ],
    "takeaways": [
      "The OS is a layered resource manager and security boundary.",
      "Privilege separation and isolation limit, but do not eliminate, risk.",
      "Version, configuration and evidence matter in every OS assessment."
    ],
    "assessmentRubric": [
      "Correctly identifies OS components and privilege boundaries.",
      "Explains system calls and process isolation accurately.",
      "Connects risks to enforceable controls and evidence.",
      "Labels assumptions and platform-specific facts."
    ],
    "qa": [
      {
        "q": "Does a process normally access hardware directly in user mode?",
        "a": "No. It requests privileged operations through OS-controlled interfaces such as system calls.",
        "why": "The kernel mediates access to protected resources."
      },
      {
        "q": "Are containers equivalent to full virtual machines?",
        "a": "No. Containers generally share the host kernel; VMs run guest operating systems on virtualized hardware.",
        "why": "The isolation boundary and kernel-sharing model differ."
      },
      {
        "q": "Why include firmware and drivers in an OS security review?",
        "a": "They can influence the boot chain or operate with high privilege, so compromise can undermine higher layers.",
        "why": "Security boundaries extend below the user interface."
      },
      {
        "q": "What is a reliable first step before applying platform-specific hardening?",
        "a": "Identify the exact OS, version, role and support status.",
        "why": "Controls and commands vary by product and release."
      }
    ],
    "check": {
      "q": "Which statement best describes the kernel's role?",
      "options": [
        "It is only the visual desktop",
        "It manages protected core resources and mediates privileged operations",
        "It is the same thing as every installed application",
        "It guarantees software is vulnerability-free"
      ],
      "answer": "It manages protected core resources and mediates privileged operations",
      "why": "The kernel provides core resource management and enforcement interfaces."
    },
    "references": [
      {
        "title": "NIST SP 800-123, Guide to General Server Security",
        "publisher": "NIST",
        "url": "https://csrc.nist.gov/pubs/sp/800/123/final"
      },
      {
        "title": "Operating Systems: Three Easy Pieces",
        "publisher": "Arpaci-Dusseau",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ]
  },
  {
    "id": "ns20-os-linux-core",
    "course": "00",
    "title": "Linux Administration & Host Security Foundations",
    "objective": "Inspect Linux identity, filesystem, services, packages and logs in a disposable local VM.",
    "learningGoal": "Use core Linux abstractions to explain and document a host's security posture.",
    "time": "90–120 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "shell",
      "filesystem hierarchy",
      "UID/GID",
      "permissions",
      "systemd",
      "package manager",
      "journald"
    ],
    "read": "Linux is a family of operating systems built around the Linux kernel and user-space components. A distribution integrates a package manager, libraries, initialization system, security defaults and release lifecycle. The shell is an interface for issuing commands; it is not itself the kernel. Filesystem paths organize configuration, user data, logs and runtime state. Ownership and mode bits provide discretionary access control; ACLs can express additional rules. Root is a privileged account, while sudo can grant narrowly scoped administrative actions with logging.\\n\\nMost modern general-purpose distributions use systemd, though alternatives exist. Package managers verify package metadata and coordinate installation, but trust still depends on repository configuration, signing keys and update practices. Logs may be in journald, traditional files or both. Run exercises only in an owned disposable VM, snapshot before changes, and never paste real secrets into terminal transcripts.",
    "deepDive": [
      {
        "title": "Identity and file access",
        "body": "Inspect effective UID/GID and file ownership before changing permissions. Prefer groups and least-privilege service accounts over broad world-writable access."
      },
      {
        "title": "Services and startup",
        "body": "Review enabled services, listening sockets and unit configuration. Disable only services whose role and dependencies are understood; record rollback steps."
      },
      {
        "title": "Updates and evidence",
        "body": "Record distribution release, kernel version, repository sources, package update status and relevant logs. A successful package command alone does not prove the host is fully remediated."
      }
    ],
    "examples": [
      {
        "title": "Investigate an unexpected listener",
        "body": "In a lab VM, identify a listening port, map it to its owning process and service, inspect the service unit and configuration, then decide whether it is expected. Do not expose the VM to public networks during the exercise."
      }
    ],
    "case": "A synthetic Linux host inventory shows an unknown service enabled at boot, an outdated package and a log gap. Produce a prioritized host review with evidence and a safe verification plan.",
    "caseQuestions": [
      "Which user and service own the process?",
      "What package and repository supplied it?",
      "Which logs establish start time and activity?",
      "What change can be made safely and rolled back?"
    ],
    "practice": "Complete a Linux host baseline worksheet in an isolated VM using read-only inspection first.",
    "practiceSteps": [
      "Record distribution, release, kernel and VM snapshot identifier.",
      "Inspect users, groups, file ownership and sudo policy without exposing secrets.",
      "List services and listening sockets; correlate one service to its package.",
      "Review update configuration and relevant system logs.",
      "Recommend one scoped hardening change, test it, and document rollback and evidence."
    ],
    "mistakes": [
      "Running commands as root by default.",
      "Changing permissions recursively without understanding ownership.",
      "Assuming all distributions use the same package manager or log paths.",
      "Copying sensitive output into shared notes."
    ],
    "takeaways": [
      "Linux security combines identity, permissions, services, packages and logging.",
      "Inspect first, change narrowly, verify and document rollback.",
      "Distribution and release details determine the correct procedure."
    ],
    "assessmentRubric": [
      "Identifies platform/version and inspection evidence.",
      "Interprets identity, permissions and service state correctly.",
      "Proposes a least-privilege change with rollback.",
      "Protects secrets and stays within the isolated lab scope."
    ],
    "qa": [
      {
        "q": "Is the shell the Linux kernel?",
        "a": "No. The shell is a user-space command interpreter.",
        "why": "It sends requests to OS interfaces but is not the kernel."
      },
      {
        "q": "Why avoid broad recursive permission changes?",
        "a": "They can break application behavior and weaken access boundaries across many files.",
        "why": "Permissions must be changed according to ownership and purpose."
      },
      {
        "q": "What does a package manager's successful update prove?",
        "a": "Only that the requested package operation completed; repository scope, held packages and support status still need review.",
        "why": "Update success is not equivalent to complete risk remediation."
      },
      {
        "q": "Where should a learner practice administrative changes?",
        "a": "In an owned, disposable, isolated VM with a snapshot and rollback plan.",
        "why": "This bounds impact and supports reproducibility."
      }
    ],
    "check": {
      "q": "Before disabling an unfamiliar Linux service, what should you do?",
      "options": [
        "Stop it permanently immediately",
        "Inspect its owner, purpose, dependencies and exposure, then plan a reversible test",
        "Delete its files",
        "Assume it is malicious because it is unfamiliar"
      ],
      "answer": "Inspect its owner, purpose, dependencies and exposure, then plan a reversible test",
      "why": "Service changes require context and a safe rollback."
    },
    "references": [
      {
        "title": "Linux man-pages project",
        "publisher": "Linux man-pages",
        "url": "https://man7.org/linux/man-pages/"
      },
      {
        "title": "Ubuntu Server documentation",
        "publisher": "Canonical",
        "url": "https://ubuntu.com/server/docs"
      },
      {
        "title": "Red Hat Enterprise Linux documentation",
        "publisher": "Red Hat",
        "url": "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/"
      }
    ]
  },
  {
    "id": "ns20-os-linux-distro",
    "course": "00",
    "title": "Linux Distribution Families & Security Differences",
    "objective": "Compare major Linux distribution families without conflating shared kernel concepts with vendor-specific tooling.",
    "learningGoal": "Select accurate, version-aware administration and security references for Debian, RHEL, SUSE and specialist distributions.",
    "time": "60–90 min",
    "prerequisite": "Linux Administration & Host Security Foundations",
    "concepts": [
      "Debian",
      "Ubuntu",
      "RHEL",
      "Rocky Linux",
      "AlmaLinux",
      "SUSE",
      "Kali Linux",
      "support lifecycle"
    ],
    "read": "Linux distributions package the kernel with user-space tools, release engineering, repositories and support commitments. Debian-family systems commonly use APT and dpkg; RHEL-family systems commonly use DNF and RPM; SUSE systems commonly use Zypper and RPM. Service management and security tooling can also differ by release and configuration. Ubuntu commonly documents AppArmor usage; RHEL-family systems emphasize SELinux; SUSE also supports AppArmor in relevant products. These are defaults and product details, not universal guarantees. Verify the release's official documentation before applying commands or controls.\\n\\nKali Linux is a specialist security distribution intended for professional security testing and training. It does not replace authorization, scope, lab isolation or foundational Linux knowledge. Server distributions such as Amazon Linux, Oracle Linux, Rocky Linux and AlmaLinux have distinct lifecycle and compatibility details. Reuse shared Linux instruction once, then attach concise platform-specific reference pages rather than duplicating entire lessons.",
    "deepDive": [
      {
        "title": "Package and repository trust",
        "body": "Check configured repositories, signing and support channels. Do not mix packages from unrelated distributions without understanding dependency and support consequences."
      },
      {
        "title": "Mandatory access control",
        "body": "SELinux and AppArmor enforce policy beyond ordinary file mode bits. Diagnose denials through platform-specific tools rather than disabling enforcement as a first response."
      },
      {
        "title": "Lifecycle and compatibility",
        "body": "Record the exact product edition, release, architecture and end-of-support date. Compatibility claims should cite the vendor's current lifecycle matrix."
      }
    ],
    "examples": [
      {
        "title": "Translate a package task",
        "body": "A task asks you to install a web server and verify its service state. First identify the distribution and release, then consult its official package and service documentation. Record the equivalent commands and any security-policy differences in a comparison table."
      }
    ],
    "case": "A fleet contains Ubuntu LTS, RHEL-compatible servers and SUSE hosts. An administrator proposes one copied hardening script for all. Identify assumptions that could fail and design a common baseline plus distro-specific checks.",
    "caseQuestions": [
      "Which facts are shared across Linux systems?",
      "Which package and security controls are distro-specific?",
      "How does support lifecycle affect patch planning?",
      "What evidence is needed before running a common script?"
    ],
    "practice": "Build a distribution comparison matrix using official documentation for one supported release from each family.",
    "practiceSteps": [
      "Choose exact release versions and record official documentation URLs and review dates.",
      "Compare package tooling, service management, default security modules and log locations.",
      "Mark which procedures are common and which require distro-specific variants.",
      "Add a support-lifecycle field and a rule for verifying end-of-support.",
      "Review the fictional fleet script and list safe preflight checks and rollback conditions."
    ],
    "mistakes": [
      "Treating Kali as a separate kernel family or as a substitute for Linux fundamentals.",
      "Assuming command syntax and security defaults are identical across distributions.",
      "Disabling SELinux/AppArmor to silence a denial without diagnosing policy.",
      "Using outdated community snippets as authoritative lifecycle data."
    ],
    "takeaways": [
      "Linux distributions share core concepts but differ in tooling, defaults and support.",
      "Exact release identification is required for safe administration.",
      "Use official vendor references for version-specific steps."
    ],
    "assessmentRubric": [
      "Accurately distinguishes shared and distribution-specific elements.",
      "Uses versioned primary references.",
      "Identifies lifecycle and policy implications.",
      "Proposes preflight and rollback controls for fleet changes."
    ],
    "qa": [
      {
        "q": "Do all Linux distributions use APT?",
        "a": "No. Package tooling varies by distribution family.",
        "why": "Debian/Ubuntu commonly use APT, while other families use different managers."
      },
      {
        "q": "Should a learner disable SELinux after an application denial?",
        "a": "Not as a default response; investigate the denial and adjust the intended policy safely.",
        "why": "Disabling mandatory access control can remove an important security boundary."
      },
      {
        "q": "What is Kali Linux primarily intended for?",
        "a": "Security testing and training use cases, under explicit authorization.",
        "why": "It is a specialist distribution, not permission to test arbitrary systems."
      },
      {
        "q": "What must be recorded when documenting a distro-specific procedure?",
        "a": "The exact product/release and the official reference checked.",
        "why": "Commands, defaults and support commitments change over time."
      }
    ],
    "check": {
      "q": "A fleet script uses apt-get on every Linux server. What is the key issue?",
      "options": [
        "APT works on every Linux distribution",
        "The script assumes one package ecosystem and may fail or be unsafe elsewhere",
        "Package managers do not affect security",
        "Linux systems cannot be patched automatically"
      ],
      "answer": "The script assumes one package ecosystem and may fail or be unsafe elsewhere",
      "why": "Package tools and repository layouts differ by distribution."
    },
    "references": [
      {
        "title": "Debian Administrator's Handbook",
        "publisher": "Debian",
        "url": "https://www.debian.org/doc/"
      },
      {
        "title": "RHEL product documentation",
        "publisher": "Red Hat",
        "url": "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/"
      },
      {
        "title": "SUSE documentation",
        "publisher": "SUSE",
        "url": "https://documentation.suse.com/"
      },
      {
        "title": "Kali Linux documentation",
        "publisher": "OffSec",
        "url": "https://www.kali.org/docs/"
      }
    ]
  },
  {
    "id": "ns20-os-windows",
    "course": "00",
    "title": "Windows Client & Server Security Operations",
    "objective": "Explain Windows security architecture and review a Windows host's identity, services, updates and event evidence.",
    "learningGoal": "Perform a bounded, evidence-led security review of Windows client and server systems.",
    "time": "90–120 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "Windows security",
      "NTFS ACL",
      "UAC",
      "Windows services",
      "PowerShell",
      "Defender",
      "Event Viewer",
      "Windows Server"
    ],
    "read": "Windows uses the NT architecture, security principals, access tokens, object access checks and NTFS permissions. User Account Control (UAC) helps constrain administrative changes, but does not replace least privilege. Windows services run under configured accounts and may expose local or network functionality. PowerShell is a powerful administrative shell; scripts should be signed or otherwise controlled according to organizational policy, reviewed before execution and logged where appropriate. Windows Defender and other endpoint controls provide prevention and telemetry, but require current configuration and operational monitoring.\\n\\nWindows client and Windows Server share foundations but differ in roles, installed services, management exposure and operational requirements. Event logs include Security, System, Application and product-specific channels. Interpret event IDs in context and verify timestamps, audit policy and collection health. Use a disposable Windows VM and synthetic accounts for hands-on work.",
    "deepDive": [
      {
        "title": "Access tokens and ACLs",
        "body": "Windows access checks consider the caller's token and the target object's discretionary access control list. Effective access can be affected by group membership, inheritance and explicit deny entries."
      },
      {
        "title": "Service identity and exposure",
        "body": "Review service account privileges, startup type, executable path, dependencies and listening endpoints. Avoid granting LocalSystem or administrator rights without a documented need."
      },
      {
        "title": "Audit and endpoint telemetry",
        "body": "Confirm which audit subcategories are enabled, whether logs are retained and forwarded, and whether endpoint protection is healthy. Missing events are not evidence that activity did not occur."
      }
    ],
    "examples": [
      {
        "title": "Review a new service",
        "body": "A synthetic host report shows a service running with elevated privileges from a writable directory. Verify its approved purpose, file ACLs, signer, service account and change record; recommend a controlled remediation and test rollback."
      }
    ],
    "case": "Assess a fictional Windows Server that has remote administration enabled, a privileged service account and incomplete event forwarding. Produce a risk note with evidence gaps and prioritized control checks.",
    "caseQuestions": [
      "Which principal runs the service?",
      "Who can modify its executable or configuration?",
      "Which event sources could corroborate activity?",
      "What changes require a maintenance window or service-owner approval?"
    ],
    "practice": "Complete a Windows host review using read-only inspection in an isolated VM.",
    "practiceSteps": [
      "Record Windows edition, build, patch state and host role.",
      "Review local users/groups and administrative membership using approved read-only methods.",
      "Inspect selected services, their accounts, executable paths and network exposure.",
      "Review endpoint protection status and relevant event-log channels.",
      "Write findings with evidence, uncertainty, owner and a reversible remediation plan."
    ],
    "mistakes": [
      "Treating UAC as a substitute for least privilege.",
      "Changing ACLs without tracing inheritance and effective access.",
      "Assuming an event ID proves intent or maliciousness by itself.",
      "Running unknown PowerShell scripts with elevated rights."
    ],
    "takeaways": [
      "Windows security relies on principals, tokens, ACLs and service configuration.",
      "Client and server roles require different exposure and operational reviews.",
      "Event evidence must be interpreted with collection and retention context."
    ],
    "assessmentRubric": [
      "Explains Windows identity and access checks accurately.",
      "Identifies risky service privileges or writable paths from evidence.",
      "Accounts for event collection and endpoint-control limitations.",
      "Produces a safe, role-aware remediation plan."
    ],
    "qa": [
      {
        "q": "What determines access to an NTFS object?",
        "a": "The caller's security token and the object's effective access control rules, among other system policy checks.",
        "why": "Access is evaluated by the OS, not merely by whether a user can see a path."
      },
      {
        "q": "Does UAC eliminate the need for least privilege?",
        "a": "No. It is one control within a broader privilege-management model.",
        "why": "Accounts, service identities and authorization still require review."
      },
      {
        "q": "Does absence of an event prove that an action never happened?",
        "a": "No. Audit settings, log retention, forwarding and parsing may be incomplete.",
        "why": "Telemetry gaps limit conclusions."
      },
      {
        "q": "Where should unknown PowerShell scripts be tested?",
        "a": "In a disposable isolated environment after review, not directly on production.",
        "why": "Elevated scripts can alter or expose systems."
      }
    ],
    "check": {
      "q": "A service runs as an administrator and its executable is writable by ordinary users. What is the principal concern?",
      "options": [
        "The service is automatically safe because it is signed",
        "A low-privilege user may influence code executed with elevated authority",
        "Windows services cannot be exploited",
        "Only the desktop wallpaper is affected"
      ],
      "answer": "A low-privilege user may influence code executed with elevated authority",
      "why": "Writable executable paths combined with privileged execution can enable privilege escalation."
    },
    "references": [
      {
        "title": "Windows security documentation",
        "publisher": "Microsoft",
        "url": "https://learn.microsoft.com/en-us/windows/security/"
      },
      {
        "title": "Windows Server documentation",
        "publisher": "Microsoft",
        "url": "https://learn.microsoft.com/en-us/windows-server/"
      },
      {
        "title": "PowerShell documentation",
        "publisher": "Microsoft",
        "url": "https://learn.microsoft.com/en-us/powershell/"
      }
    ]
  },
  {
    "id": "ns20-os-ad",
    "course": "00",
    "title": "Active Directory: Identity, Policy & Defensive Monitoring",
    "objective": "Map an Active Directory domain's identity relationships, delegated permissions and audit requirements.",
    "learningGoal": "Analyze directory services as a security control plane and identify common configuration risks.",
    "time": "90 min",
    "prerequisite": "Windows Client & Server Security Operations",
    "concepts": [
      "Active Directory Domain Services",
      "domain controller",
      "Kerberos",
      "LDAP",
      "Group Policy",
      "delegation",
      "tiering"
    ],
    "read": "Active Directory Domain Services (AD DS) is a directory and identity infrastructure commonly used in Windows enterprise environments. A domain controller authenticates users and computers and provides directory services. Kerberos is a common authentication protocol; LDAP is used to query and manage directory objects. Group Policy distributes configuration settings, while delegation allows selected principals to perform specified operations on behalf of others. These mechanisms support centralized administration but create high-value trust relationships.\\n\\nReview privileged groups, service accounts, delegated rights, stale objects, Group Policy scope, domain-controller protection, time synchronization, backup and audit coverage. Avoid treating a domain as a flat list of users: organizational units, group nesting, trusts and administrative tiers affect effective authority. Practice only in a purpose-built local lab domain with synthetic identities.",
    "deepDive": [
      {
        "title": "Effective privilege",
        "body": "Nested group membership, delegated ACLs, service identities and trust relationships can create authority that is not obvious from a user's direct group list."
      },
      {
        "title": "Authentication and service accounts",
        "body": "Document Kerberos dependencies, service principal names, credential handling and managed service account use where supported. Protect domain controllers as critical infrastructure."
      },
      {
        "title": "Monitoring",
        "body": "Collect authentication, directory-change and privileged-group events with reliable time and retention. Correlate changes to approved change records and named administrators."
      }
    ],
    "examples": [
      {
        "title": "Unexpected group change",
        "body": "A synthetic audit event shows a user added to a privileged group. Verify the actor, time, originating system, change ticket and subsequent authentication activity before determining disposition."
      }
    ],
    "case": "A mock domain audit identifies stale privileged accounts, broad delegated permissions and incomplete directory-change logging. Build an evidence plan and control-remediation sequence.",
    "caseQuestions": [
      "Which relationships grant effective privilege?",
      "What evidence identifies who changed a directory object?",
      "How should emergency access be controlled and reviewed?",
      "Which systems must be protected as tier-zero assets?"
    ],
    "practice": "Create an AD trust and privilege map for a fictional small enterprise lab.",
    "practiceSteps": [
      "Draw users, groups, OUs, domain controllers, trusts and critical services.",
      "Identify privileged roles and trace nested group/delegated access.",
      "Map one authentication path and one directory-change audit path.",
      "Review synthetic findings for stale identities and broad rights.",
      "Recommend least-privilege changes, approval, validation and recovery steps."
    ],
    "mistakes": [
      "Assuming direct group membership shows all effective permissions.",
      "Using domain-admin rights for routine administration.",
      "Treating authentication logs as complete without validating audit configuration.",
      "Testing directory changes against a real organization without written authorization."
    ],
    "takeaways": [
      "AD is a high-impact identity and policy control plane.",
      "Effective access depends on nested and delegated relationships.",
      "Privileged changes need strong approval, monitoring and recoverable administration."
    ],
    "assessmentRubric": [
      "Maps domain components and trust relationships correctly.",
      "Identifies effective privilege and least-privilege gaps.",
      "Specifies relevant directory-change and authentication evidence.",
      "Keeps the lab synthetic and remediation controlled."
    ],
    "qa": [
      {
        "q": "What is the difference between authentication and authorization in AD?",
        "a": "Authentication verifies a principal; authorization determines what that principal may access or change.",
        "why": "A valid login does not imply permission to every directory object."
      },
      {
        "q": "Why inspect nested groups and delegated ACLs?",
        "a": "They can grant effective privileges beyond direct membership.",
        "why": "Privilege analysis must follow the full access path."
      },
      {
        "q": "Why are domain controllers especially sensitive?",
        "a": "They provide core identity and directory services for the domain.",
        "why": "Compromise can affect many dependent systems and accounts."
      },
      {
        "q": "What should accompany a privileged group change?",
        "a": "A named actor, approved change context, timestamp, reason and verification evidence.",
        "why": "This supports accountability and incident reconstruction."
      }
    ],
    "check": {
      "q": "An employee is not directly in a privileged group but inherits access through nested membership. What should the audit evaluate?",
      "options": [
        "Only direct memberships",
        "Effective access across nested groups and delegated permissions",
        "The user's job title only",
        "Whether the user can access the desktop"
      ],
      "answer": "Effective access across nested groups and delegated permissions",
      "why": "Effective privilege follows the complete authorization relationship."
    },
    "references": [
      {
        "title": "Active Directory Domain Services overview",
        "publisher": "Microsoft",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/"
      },
      {
        "title": "Kerberos authentication overview",
        "publisher": "Microsoft",
        "url": "https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview"
      }
    ]
  },
  {
    "id": "ns20-os-macos",
    "course": "00",
    "title": "macOS Security Architecture & Administration",
    "objective": "Explain macOS security layers and evaluate a Mac's account, disk, application and logging controls.",
    "learningGoal": "Apply a platform-aware checklist to macOS security without assuming it is identical to other Unix-like systems.",
    "time": "60–90 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "Darwin",
      "APFS",
      "FileVault",
      "Gatekeeper",
      "TCC",
      "code signing",
      "Unified Logging"
    ],
    "read": "macOS combines the Darwin foundation, XNU kernel, system frameworks and Apple-managed security services. It shares Unix-derived concepts such as processes, permissions and command-line tools, but includes platform-specific controls and management behavior. APFS is the modern filesystem family; FileVault provides volume encryption. Gatekeeper and code-signing checks help constrain software execution, while Transparency, Consent and Control (TCC) governs access to protected data and capabilities such as camera, microphone and selected user data. System Integrity Protection limits modification of protected system areas.\\n\\nA review should check supported OS version, update state, FileVault status, local administrator accounts, application provenance, configuration profiles, device management and relevant logs. Unified Logging has privacy and retention considerations; collect only the information needed for the authorized task. Use a test Mac or VM where feasible and do not bypass security protections as a routine troubleshooting step.",
    "deepDive": [
      {
        "title": "Boot and integrity",
        "body": "Review the platform's secure boot and system-volume integrity features using current Apple documentation for the hardware generation and OS release."
      },
      {
        "title": "Privacy controls",
        "body": "TCC decisions can be user- or management-mediated and affect sensitive resources. Verify permissions and profile scope rather than assuming app installation implies broad access."
      },
      {
        "title": "Fleet administration",
        "body": "MDM configuration profiles can enforce settings and report compliance. Distinguish local configuration from centrally managed policy and document exceptions."
      }
    ],
    "examples": [
      {
        "title": "Unexpected screen-recording permission",
        "body": "A fictional managed Mac reports a newly approved screen-recording permission for an unfamiliar app. Verify app identity, signing, user or management approval, change history and endpoint telemetry before containment decisions."
      }
    ],
    "case": "Review a synthetic macOS fleet report showing FileVault disabled on one laptop, delayed updates and a broad local-admin group. Produce a risk-based remediation and user-impact plan.",
    "caseQuestions": [
      "Which controls are OS-specific rather than generic Unix features?",
      "What evidence confirms encryption and update state?",
      "How do TCC and management profiles affect app access?",
      "What is the safe way to handle a suspected unauthorized app?"
    ],
    "practice": "Complete a macOS baseline checklist using a test device or supplied synthetic report.",
    "practiceSteps": [
      "Record model/hardware generation, OS version and support status.",
      "Check encryption, update and local account posture.",
      "Review app provenance, code-signing and protected-resource permissions.",
      "Identify management profiles and exceptions, preserving user privacy.",
      "Write findings with source, evidence, owner and safe remediation."
    ],
    "mistakes": [
      "Assuming macOS security equals generic Linux hardening.",
      "Disabling SIP or Gatekeeper as a first troubleshooting step.",
      "Collecting excessive private log content.",
      "Ignoring device-management profiles and hardware-generation differences."
    ],
    "takeaways": [
      "macOS combines Unix foundations with Apple-specific security controls.",
      "Encryption, app trust, privacy permissions and fleet management are distinct review areas.",
      "Use current platform-specific guidance and minimize personal data collection."
    ],
    "assessmentRubric": [
      "Explains the major macOS security layers.",
      "Distinguishes user, OS and management controls.",
      "Uses appropriate evidence and privacy boundaries.",
      "Provides a feasible remediation plan."
    ],
    "qa": [
      {
        "q": "Does FileVault replace application access controls?",
        "a": "No. It protects data at rest but does not determine which running app or user may access each resource.",
        "why": "Encryption and authorization address different threats."
      },
      {
        "q": "What does TCC govern?",
        "a": "Consent and control for apps accessing protected data and capabilities.",
        "why": "It is a platform-specific privacy permission system."
      },
      {
        "q": "Should SIP be disabled to make a routine configuration change?",
        "a": "No; first use supported administrative and management mechanisms.",
        "why": "SIP protects critical system areas."
      },
      {
        "q": "Why record hardware generation in a macOS review?",
        "a": "Available security features and support behavior can depend on hardware and OS release.",
        "why": "Platform capability is not uniform across all Macs."
      }
    ],
    "check": {
      "q": "Which control is most directly associated with macOS app access to protected resources such as camera or microphone?",
      "options": [
        "TCC privacy permissions",
        "APT repository pinning",
        "NTFS inheritance",
        "Kerberos ticket renewal"
      ],
      "answer": "TCC privacy permissions",
      "why": "TCC is Apple's privacy consent and control mechanism."
    },
    "references": [
      {
        "title": "Apple Platform Security",
        "publisher": "Apple",
        "url": "https://support.apple.com/guide/security/welcome/web"
      },
      {
        "title": "Apple Deployment and device management",
        "publisher": "Apple",
        "url": "https://support.apple.com/guide/deployment/welcome/web"
      }
    ]
  },
  {
    "id": "ns20-os-mobile",
    "course": "00",
    "title": "Android & iOS Security Models",
    "objective": "Compare mobile OS isolation, app permissions, boot integrity, updates and enterprise management.",
    "learningGoal": "Assess mobile device security using the platform's actual trust and management model.",
    "time": "75–90 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "Android sandbox",
      "SELinux",
      "verified boot",
      "iOS code signing",
      "data protection",
      "MDM",
      "mobile threat model"
    ],
    "read": "Mobile operating systems use application isolation, permission systems, platform signing and managed update mechanisms to constrain apps and protect user data. Android uses Linux-kernel foundations, application sandboxes, permissions and SELinux enforcement; Android Verified Boot helps establish integrity across the boot chain. AOSP is the open-source project, while device vendors and carriers influence release cadence and device-specific components. iOS/iPadOS use a secure boot chain, code signing, sandboxing, data protection classes and privacy permissions, with capabilities varying by device and release.\\n\\nA mobile review should consider device ownership, OS patch level, bootloader state, app sources, encryption, screen lock, backup, MDM policy, lost-device response and user privacy. Jailbreak/root status changes the threat model and may affect management/compliance. Use test devices or synthetic fleet records; do not extract personal content without explicit authority and a defined purpose.",
    "deepDive": [
      {
        "title": "Application isolation",
        "body": "App sandboxes constrain direct access, while permissions and platform APIs mediate sensitive capabilities. Misconfiguration, vulnerabilities or excessive user grants can still expose data."
      },
      {
        "title": "Boot and updates",
        "body": "Verified boot and secure boot chains help detect integrity changes. Update availability depends on device model, vendor support and enrollment; record exact build and security patch level."
      },
      {
        "title": "Enterprise controls",
        "body": "MDM can enforce passcodes, encryption, app distribution and remote actions within platform capabilities. Distinguish supervised/managed devices from personally owned devices and document consent."
      }
    ],
    "examples": [
      {
        "title": "Lost managed phone",
        "body": "A fictional employee reports a missing company phone. Follow the documented identity verification, device-management and incident workflow; assess last check-in and available remote-lock/wipe capability, and record privacy and evidence constraints."
      }
    ],
    "case": "Compare two synthetic fleet entries: an Android device with an old security patch and unknown app sources, and an iPhone with current updates but missing management enrollment. Recommend verification steps and explain remaining uncertainty.",
    "caseQuestions": [
      "Which device and OS build are in scope?",
      "What does the platform sandbox protect, and what does it not?",
      "How are updates and device management verified?",
      "What privacy safeguards apply to incident response?"
    ],
    "practice": "Create a cross-platform mobile baseline matrix for a fictional BYOD and corporate-owned fleet.",
    "practiceSteps": [
      "Separate corporate-owned, supervised and personally owned device cases.",
      "Record OS/build, patch level, encryption, lock policy and boot integrity evidence.",
      "Compare app installation controls and sensitive permission review.",
      "Define MDM enrollment, lost-device response and escalation paths.",
      "Document data minimization, user notice and exceptions."
    ],
    "mistakes": [
      "Assuming all Android vendors deliver updates on the same schedule.",
      "Treating app permissions as proof that an app is safe.",
      "Wiping a personally owned device without applicable authority and process.",
      "Conflating rooting/jailbreaking with a complete compromise finding."
    ],
    "takeaways": [
      "Android and iOS share security goals but differ in implementation and management.",
      "Device model, OS build and patch date are essential evidence.",
      "Mobile response must account for ownership, privacy and approved management actions."
    ],
    "assessmentRubric": [
      "Compares the two platforms accurately and with appropriate caveats.",
      "Uses build and patch evidence rather than vague labels.",
      "Addresses MDM and ownership distinctions.",
      "Includes proportionate privacy-aware response steps."
    ],
    "qa": [
      {
        "q": "Does the Android label alone identify its patch support status?",
        "a": "No. Device model, vendor, region and build determine update context.",
        "why": "Android device support is not uniform."
      },
      {
        "q": "What does verified boot aim to provide?",
        "a": "A chain of integrity verification during startup.",
        "why": "It helps detect unauthorized changes to boot-critical components."
      },
      {
        "q": "Does an app sandbox eliminate all mobile data risk?",
        "a": "No. Permissions, vulnerabilities, user actions and cloud sync can create additional exposure paths.",
        "why": "Isolation is one layer, not a complete guarantee."
      },
      {
        "q": "What should be checked before remotely wiping a phone?",
        "a": "Ownership, authorization, incident policy, data impact and required approvals.",
        "why": "Remote actions can irreversibly affect personal and business data."
      }
    ],
    "check": {
      "q": "What is essential before comparing mobile patch posture?",
      "options": [
        "Only the device's marketing name",
        "Exact model, OS/build and security patch level",
        "The wallpaper and installed games",
        "Assume all devices update together"
      ],
      "answer": "Exact model, OS/build and security patch level",
      "why": "Support and patch state are model- and release-specific."
    },
    "references": [
      {
        "title": "Android Security",
        "publisher": "Google",
        "url": "https://source.android.com/docs/security"
      },
      {
        "title": "Apple Platform Security",
        "publisher": "Apple",
        "url": "https://support.apple.com/guide/security/welcome/web"
      },
      {
        "title": "NIST SP 800-124 Rev. 2, Guidelines for Managing the Security of Mobile Devices",
        "publisher": "NIST",
        "url": "https://csrc.nist.gov/pubs/sp/800/124/r2/final"
      }
    ]
  },
  {
    "id": "ns20-os-chromeos",
    "course": "00",
    "title": "ChromeOS Security & Managed Device Controls",
    "objective": "Explain ChromeOS integrity, sandboxing, updates and enterprise management in a managed-device scenario.",
    "learningGoal": "Evaluate Chromebook security using verified platform and management evidence.",
    "time": "45–60 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "verified boot",
      "sandboxing",
      "automatic updates",
      "enterprise enrollment",
      "managed browser",
      "device policy"
    ],
    "read": "ChromeOS is designed around verified startup, application isolation and managed update behavior. Verified Boot checks system integrity during startup and can trigger recovery behavior when integrity validation fails. Sandboxing separates processes and applications; browser security controls and account-based services add further boundaries. ChromeOS devices can be centrally enrolled and managed, allowing administrators to apply device and browser policies, configure extensions and review compliance. Exact capabilities and support dates vary by device model and release channel.\\n\\nSecurity review should record device model, ChromeOS version, auto-update expiration (AUE) or support status, enrollment state, user sign-in model, extension policy, recovery process and logging available to the organization. A managed device is not automatically secure if policy is overly permissive or monitoring is absent. Use test enrollment or synthetic console screenshots for exercises.",
    "deepDive": [
      {
        "title": "Integrity and recovery",
        "body": "Verified Boot and recovery mechanisms reduce some persistence risks, but they do not prevent phishing, account compromise or unsafe extensions."
      },
      {
        "title": "Policy and enrollment",
        "body": "Confirm that a device is enrolled in the intended organizational tenant and receives the expected policy. Review exceptions and delegated administrator roles."
      },
      {
        "title": "Lifecycle",
        "body": "Check the model-specific AUE/support timeline and plan replacement or compensating controls before updates cease."
      }
    ],
    "examples": [
      {
        "title": "Unmanaged device access",
        "body": "A fictional organization allows access to internal web apps from a Chromebook that is not enrolled. Define a conditional-access decision using verified identity, device posture and business policy rather than assuming the OS brand guarantees compliance."
      }
    ],
    "case": "A school fleet report includes enrolled and unmanaged Chromebooks, a set of unapproved extensions and several models approaching end of updates. Create a safe triage and lifecycle plan.",
    "caseQuestions": [
      "Which device is managed and by which organization?",
      "What evidence confirms the OS release and support date?",
      "Which extensions or policies broaden access?",
      "What action is appropriate for unsupported devices?"
    ],
    "practice": "Build a ChromeOS fleet-control checklist using official Google documentation and a synthetic inventory.",
    "practiceSteps": [
      "Record model, OS version, channel and support/AUE date.",
      "Classify enrollment state and the policy source.",
      "Review extension allowlists, sign-in restrictions and admin roles.",
      "Define how compliance is checked before accessing sensitive services.",
      "Propose a lifecycle action for devices near or past support."
    ],
    "mistakes": [
      "Assuming verified boot blocks credential phishing.",
      "Confusing personal sign-in with enterprise enrollment.",
      "Ignoring extension and administrator policy.",
      "Treating a generic support date as applicable to every model."
    ],
    "takeaways": [
      "ChromeOS combines boot integrity, isolation, updates and management.",
      "Enrollment and policy evidence are distinct from device identity.",
      "Model-specific lifecycle is part of security posture."
    ],
    "assessmentRubric": [
      "Explains ChromeOS security layers without overstating them.",
      "Correctly evaluates enrollment and policy evidence.",
      "Uses model-specific support context.",
      "Proposes proportionate fleet actions."
    ],
    "qa": [
      {
        "q": "Does verified boot prevent account phishing?",
        "a": "No. It addresses system integrity, not every identity or social-engineering threat.",
        "why": "Different controls address different attack paths."
      },
      {
        "q": "What proves a Chromebook receives organizational policy?",
        "a": "Verified enrollment and policy status in the correct management environment.",
        "why": "A user account alone does not prove device management."
      },
      {
        "q": "Why check model-specific AUE?",
        "a": "Update support can expire at different times for different models.",
        "why": "Unsupported devices may no longer receive security fixes."
      },
      {
        "q": "Are browser extensions part of the attack surface?",
        "a": "Yes. Their permissions and management controls can affect data access.",
        "why": "Extensions can expand browser capabilities."
      }
    ],
    "check": {
      "q": "A Chromebook is signed into a company account but is not enterprise-enrolled. What can you conclude?",
      "options": [
        "It definitely receives company device policy",
        "Account sign-in alone does not establish managed enrollment",
        "It is automatically compromised",
        "It cannot run browser apps"
      ],
      "answer": "Account sign-in alone does not establish managed enrollment",
      "why": "Identity sign-in and device management are separate states."
    },
    "references": [
      {
        "title": "ChromeOS security",
        "publisher": "Google",
        "url": "https://www.chromium.org/chromium-os/chromiumos-design-docs/security-overview/"
      },
      {
        "title": "ChromeOS device support",
        "publisher": "Google",
        "url": "https://support.google.com/chrome/a/answer/6220366"
      }
    ]
  },
  {
    "id": "ns20-os-bsd-unix",
    "course": "00",
    "title": "BSD & Enterprise Unix Security Fundamentals",
    "objective": "Compare BSD and enterprise Unix administration models and identify platform-specific audit requirements.",
    "learningGoal": "Build a cautious, version-aware review for BSD and legacy Unix systems.",
    "time": "60–90 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "FreeBSD",
      "OpenBSD",
      "NetBSD",
      "Solaris",
      "illumos",
      "AIX",
      "HP-UX",
      "PF"
    ],
    "read": "BSD systems and enterprise Unix platforms share many Unix concepts but have distinct kernels, userlands, service managers, package ecosystems, security defaults and support models. FreeBSD, OpenBSD and NetBSD are separate projects with different goals and release practices. Solaris/illumos, AIX and HP-UX are enterprise platforms with vendor-specific administration, auditing and lifecycle requirements. Avoid treating commands, filesystem layouts or security features as interchangeable.\\n\\nA platform review begins with exact OS release, hardware architecture, role, support status and official documentation. Assess account and privilege policy, remote management, services, packet filtering, patch process, filesystem permissions, auditing, backup and recovery. Legacy systems may have constrained update options and dependencies; document compensating controls and business ownership rather than making unsupported assumptions. Labs should use disposable supported images where available, with synthetic records for legacy products.",
    "deepDive": [
      {
        "title": "Diversity of implementations",
        "body": "Even familiar tools may differ in flags, output and semantics. Validate every command against the target system's manual pages and vendor/project documentation."
      },
      {
        "title": "Security controls",
        "body": "OpenBSD includes PF and privilege-separation design features; FreeBSD provides jails and a range of security facilities. Verify the exact release and configuration before relying on a capability."
      },
      {
        "title": "Legacy risk management",
        "body": "Where upgrades are constrained, inventory dependencies, isolate management paths, restrict network exposure, monitor compensating controls and document an exit plan."
      }
    ],
    "examples": [
      {
        "title": "Legacy Unix server",
        "body": "A synthetic inventory lists an older Unix release supporting a critical application. Review support status, required network paths, account controls, audit sources and recovery options; do not assume an immediate upgrade is operationally feasible."
      }
    ],
    "case": "A fictional company has FreeBSD internet-facing services and an AIX business application. Build separate platform-specific checklists while keeping common governance evidence consistent.",
    "caseQuestions": [
      "Which controls can be assessed consistently across both systems?",
      "Which commands and features need platform-specific validation?",
      "What operational dependencies constrain patching?",
      "How should compensating controls and end-of-life risk be documented?"
    ],
    "practice": "Create a platform comparison and lifecycle risk note for a synthetic BSD/Unix estate.",
    "practiceSteps": [
      "Record exact systems, releases, roles and support sources.",
      "Compare account administration, service management, firewalling and audit facilities.",
      "Identify remote management exposure and update constraints.",
      "Map critical dependencies, backup and recovery evidence.",
      "Write remediation options with owners, limitations and exit milestones."
    ],
    "mistakes": [
      "Copying Linux commands onto BSD or proprietary Unix without checking manuals.",
      "Assuming all BSD variants share identical security defaults.",
      "Treating compensating controls as a permanent substitute for lifecycle planning.",
      "Changing a legacy host without a tested recovery path."
    ],
    "takeaways": [
      "BSD and enterprise Unix are related but not operationally identical.",
      "Official release-specific documentation is essential.",
      "Legacy constraints require explicit risk ownership and a lifecycle plan."
    ],
    "assessmentRubric": [
      "Correctly distinguishes platform families and limitations.",
      "Uses exact release and authoritative documentation.",
      "Covers access, services, logging and lifecycle.",
      "Documents safe remediation and recovery considerations."
    ],
    "qa": [
      {
        "q": "Can a Linux hardening command be assumed to work on FreeBSD?",
        "a": "No. Validate the tool and semantics against the target release's documentation.",
        "why": "Related Unix-like systems are not command-identical."
      },
      {
        "q": "Are FreeBSD jails and Linux containers exactly the same?",
        "a": "No. They are different isolation implementations with different host and kernel models.",
        "why": "Similar goals do not imply identical architecture."
      },
      {
        "q": "What is a key first step for a legacy Unix host?",
        "a": "Identify exact version, role, support status and operational dependencies.",
        "why": "This establishes feasible and safe remediation options."
      },
      {
        "q": "If a legacy system cannot be patched immediately, what should be recorded?",
        "a": "Risk owner, exposure, compensating controls, monitoring, recovery and an exit plan.",
        "why": "Constraints need transparent, time-bound risk management."
      }
    ],
    "check": {
      "q": "A team plans to run a Linux hardening script on AIX. What is the correct response?",
      "options": [
        "Run it as root to ensure success",
        "Validate every operation against AIX-specific documentation in a safe test environment",
        "Assume all Unix commands are identical",
        "Skip backup because the script is standard"
      ],
      "answer": "Validate every operation against AIX-specific documentation in a safe test environment",
      "why": "Platform-specific differences can make generic scripts unsafe."
    },
    "references": [
      {
        "title": "FreeBSD Handbook",
        "publisher": "FreeBSD Project",
        "url": "https://docs.freebsd.org/en/books/handbook/"
      },
      {
        "title": "OpenBSD FAQ",
        "publisher": "OpenBSD Project",
        "url": "https://www.openbsd.org/faq/"
      },
      {
        "title": "IBM AIX documentation",
        "publisher": "IBM",
        "url": "https://www.ibm.com/docs/en/aix"
      },
      {
        "title": "Oracle Solaris documentation",
        "publisher": "Oracle",
        "url": "https://docs.oracle.com/en/operating-systems/solaris/"
      }
    ]
  },
  {
    "id": "ns20-os-network-appliance",
    "course": "00",
    "title": "Network Operating Systems & Firewall Appliances",
    "objective": "Review management-plane security, AAA, configuration integrity, firmware and logging for network devices.",
    "learningGoal": "Apply common device-security principles while preserving vendor-specific configuration accuracy.",
    "time": "75–90 min",
    "prerequisite": "Networking fundamentals and Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "network OS",
      "management plane",
      "AAA",
      "configuration backup",
      "firmware",
      "control plane",
      "firewall policy"
    ],
    "read": "Network devices run specialized operating systems that manage forwarding, routing, switching and security policy. Examples include Cisco IOS/IOS XE/NX-OS, Juniper Junos, Arista EOS and MikroTik RouterOS. Firewall platforms such as FortiOS and PAN-OS add policy, inspection and management functions. These products differ in command syntax, privilege models, release trains and feature availability, so configuration examples must name the product and version.\\n\\nSecure the management plane separately from data-plane traffic: restrict administrative access to approved networks, use centralized authentication/authorization/accounting (AAA) where supported, protect management protocols, use named accounts, maintain configuration backups, validate firmware provenance, and forward logs to protected collection. Define change control, commit/rollback behavior, out-of-band recovery and high-availability implications. Never apply device commands to production without authorization and a tested maintenance plan.",
    "deepDive": [
      {
        "title": "Plane separation",
        "body": "Management-plane exposure can allow configuration changes even when forwarding traffic remains healthy. Use dedicated management paths and least-privilege administrator roles."
      },
      {
        "title": "Configuration and firmware",
        "body": "Store encrypted, access-controlled configuration backups and compare changes to approved baselines. Verify firmware from official vendor channels and validate compatibility and rollback."
      },
      {
        "title": "Firewall policy lifecycle",
        "body": "Document rule owner, business purpose, source/destination, service, expiry and review date. Check shadowing, overly broad rules and logging behavior without disrupting live traffic."
      }
    ],
    "examples": [
      {
        "title": "Unrestricted management service",
        "body": "A synthetic router config shows administrative access reachable from a broad user VLAN and a shared administrator account. Recommend scoped management reachability, named identities, AAA and a controlled change with out-of-band recovery."
      }
    ],
    "case": "A fictional branch network has mixed vendor switches and firewalls, inconsistent admin access and unverified configuration backups. Design a common control standard plus a vendor/version reference matrix.",
    "caseQuestions": [
      "Which interfaces expose the management plane?",
      "How are administrator identity and privilege controlled?",
      "Can configuration be restored and verified?",
      "What logging and change evidence is retained?"
    ],
    "practice": "Create a network-device security baseline and safe change plan for a mock lab topology.",
    "practiceSteps": [
      "Inventory vendor, model, OS release, role and support status.",
      "Map management interfaces, allowed sources and authentication method.",
      "Review synthetic configuration for shared accounts, insecure protocols and broad rules.",
      "Define backup integrity, firmware verification and rollback evidence.",
      "Write a change plan with approver, window, validation, recovery and log checks."
    ],
    "mistakes": [
      "Using one vendor's CLI syntax for another platform.",
      "Exposing device administration to user or public networks.",
      "Treating a configuration backup as valid without restore testing.",
      "Changing firewall policy without dependency and rollback review."
    ],
    "takeaways": [
      "Network OS security prioritizes management-plane protection and controlled change.",
      "AAA, backups, firmware and logging must be verifiable.",
      "Vendor/version-specific procedures belong in scoped references."
    ],
    "assessmentRubric": [
      "Separates management and data plane risks.",
      "Identifies identity, access and configuration-control gaps.",
      "Includes backup, firmware and log evidence.",
      "Provides a reversible, authorized change plan."
    ],
    "qa": [
      {
        "q": "Why isolate the management plane?",
        "a": "To reduce the systems and networks that can reach administrative functions.",
        "why": "Restricting reachability lowers exposure to credential and management-interface attacks."
      },
      {
        "q": "What does AAA provide?",
        "a": "Authentication, authorization and accounting for administrative access.",
        "why": "It supports identity, privilege control and auditability."
      },
      {
        "q": "Does a successful backup job prove recoverability?",
        "a": "No. Restoration should be tested and evidence recorded.",
        "why": "A backup that cannot be restored does not meet recovery needs."
      },
      {
        "q": "What must a vendor-specific configuration guide identify?",
        "a": "Product, model or family, OS release and verified documentation source.",
        "why": "Commands and behavior can vary across versions."
      }
    ],
    "check": {
      "q": "A firewall change is planned but no tested rollback or out-of-band access exists. What is missing?",
      "options": [
        "A larger rule set",
        "A safe change and recovery plan",
        "A public management IP",
        "A shared admin password"
      ],
      "answer": "A safe change and recovery plan",
      "why": "Network configuration changes can disrupt access and need a validated recovery path."
    },
    "references": [
      {
        "title": "Cisco Security Configuration Guides",
        "publisher": "Cisco",
        "url": "https://www.cisco.com/c/en/us/support/security/index.html"
      },
      {
        "title": "Juniper technical documentation",
        "publisher": "Juniper Networks",
        "url": "https://www.juniper.net/documentation/"
      },
      {
        "title": "Fortinet documentation",
        "publisher": "Fortinet",
        "url": "https://docs.fortinet.com/"
      },
      {
        "title": "Palo Alto Networks technical documentation",
        "publisher": "Palo Alto Networks",
        "url": "https://docs.paloaltonetworks.com/"
      }
    ]
  },
  {
    "id": "ns20-os-mainframe",
    "course": "00",
    "title": "Mainframe & Legacy Enterprise Operating Environments",
    "objective": "Identify mainframe and legacy OS security boundaries, administrative roles, audit needs and modernization constraints.",
    "learningGoal": "Assess mainframe and legacy platforms without forcing desktop/server assumptions onto them.",
    "time": "60–90 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "IBM z/OS",
      "IBM i",
      "z/VM",
      "OpenVMS",
      "RACF",
      "resource profile",
      "legacy modernization"
    ],
    "read": "Mainframe and legacy enterprise systems support workloads with distinctive architectures, operational controls and business dependencies. IBM z/OS provides a mainframe operating environment with workload and resource management; security administration commonly integrates with products such as RACF, ACF2 or Top Secret depending on deployment. IBM i combines OS and integrated platform services. z/VM supports virtualization on IBM Z. OpenVMS is a separate operating system with its own account, privilege and auditing model. Product names alone do not reveal the deployed security configuration.\\n\\nReview named administrative roles, resource access profiles, privileged operations, authentication integration, batch/job execution, system interfaces, audit retention, backup and disaster recovery. Confirm exact release, vendor support and installed security products. Mainframe changes often require specialist operators, change windows and application-owner coordination. Use vendor training environments or synthetic reports; do not experiment on production workloads.",
    "deepDive": [
      {
        "title": "Resource-based access",
        "body": "Map identities and groups to protected datasets, transactions, commands and system resources using the platform's actual security manager."
      },
      {
        "title": "Operational separation",
        "body": "Distinguish application operations, system programming, security administration and audit roles. Review emergency access and dual-control requirements."
      },
      {
        "title": "Integration and modernization",
        "body": "Inventory APIs, file transfers, middleware, batch interfaces and downstream dependencies. Modernization planning should include security parity and recoverability."
      }
    ],
    "examples": [
      {
        "title": "Privileged access review",
        "body": "A synthetic access report shows a legacy service identity with broad dataset access and no named owner. Verify job purpose, actual resource use, access manager records and business dependency before proposing scoped rights."
      }
    ],
    "case": "A fictional financial institution relies on a z/OS workload and an IBM i application. Create a review plan that includes privileged access, batch interfaces, audit evidence and continuity constraints.",
    "caseQuestions": [
      "Which security manager and OS release are deployed?",
      "Which identities can change security policy or run sensitive jobs?",
      "What evidence supports effective access conclusions?",
      "Which dependencies affect a safe modernization path?"
    ],
    "practice": "Produce a mainframe/legacy security discovery questionnaire and risk register from synthetic inventory data.",
    "practiceSteps": [
      "Identify platform, release, installed security manager and support status.",
      "Map operational roles, service identities and emergency access.",
      "List sensitive resources, batch jobs and external interfaces.",
      "Identify audit sources, retention and recovery test evidence.",
      "Record gaps, owners, compensating controls and modernization dependencies."
    ],
    "mistakes": [
      "Assuming mainframe environments are inherently secure or inherently insecure.",
      "Applying generic Linux/Windows controls without mapping equivalent mechanisms.",
      "Changing access profiles without application and operations validation.",
      "Ignoring batch, file-transfer and middleware interfaces."
    ],
    "takeaways": [
      "Mainframe and legacy OS environments have distinct control models.",
      "Effective review requires platform and security-manager context.",
      "Operational continuity and specialist change control are part of security."
    ],
    "assessmentRubric": [
      "Identifies platform-specific security context and roles.",
      "Maps sensitive access and service identities.",
      "Names relevant audit and recovery evidence.",
      "Accounts for dependencies and safe change governance."
    ],
    "qa": [
      {
        "q": "What must be known before reviewing mainframe access?",
        "a": "The exact platform, release, security manager and relevant resource model.",
        "why": "Access control differs by product and configuration."
      },
      {
        "q": "Why inventory batch jobs and file transfers?",
        "a": "They can carry privileged operations or sensitive data across system boundaries.",
        "why": "Interfaces are part of the attack surface."
      },
      {
        "q": "Should a broad service identity be removed immediately?",
        "a": "No; establish purpose and dependencies, then scope a controlled change with validation.",
        "why": "Unplanned access changes can disrupt critical workloads."
      },
      {
        "q": "What evidence is needed for a recovery claim?",
        "a": "Documented, relevant backup and restore or disaster-recovery test results.",
        "why": "Plans alone do not demonstrate recoverability."
      }
    ],
    "check": {
      "q": "A legacy service account has broad access but unclear ownership. What is the appropriate first action?",
      "options": [
        "Delete it immediately",
        "Inventory its jobs, resources, owner and dependencies before a controlled least-privilege change",
        "Ignore it because it is old",
        "Share its password with operators"
      ],
      "answer": "Inventory its jobs, resources, owner and dependencies before a controlled least-privilege change",
      "why": "Safe remediation requires understanding workload dependencies and accountable ownership."
    },
    "references": [
      {
        "title": "IBM z/OS documentation",
        "publisher": "IBM",
        "url": "https://www.ibm.com/docs/en/zos"
      },
      {
        "title": "IBM i documentation",
        "publisher": "IBM",
        "url": "https://www.ibm.com/docs/en/i"
      },
      {
        "title": "OpenVMS documentation",
        "publisher": "VMS Software",
        "url": "https://docs.vmssoftware.com/"
      }
    ]
  },
  {
    "id": "ns20-os-embedded-rtos",
    "course": "00",
    "title": "Embedded Systems & Real-Time Operating System Security",
    "objective": "Model embedded and RTOS attack surfaces and specify secure firmware, update and debug controls.",
    "learningGoal": "Evaluate device security across hardware, firmware, OS, communications and end-of-life support.",
    "time": "75–90 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "RTOS",
      "FreeRTOS",
      "Zephyr",
      "QNX",
      "VxWorks",
      "firmware",
      "secure boot",
      "debug interface"
    ],
    "read": "Embedded devices combine hardware, firmware, an operating system or real-time operating system (RTOS), device drivers and application logic. RTOS designs prioritize predictable timing and resource constraints; security mechanisms and available tooling vary by product. Examples include FreeRTOS, Zephyr, QNX and VxWorks. Embedded Linux is a separate deployment pattern that uses the Linux kernel with a tailored user space. Security review must include physical access, boot integrity, debug interfaces, update authenticity, key provisioning, network services, memory safety, device identity and long-term support.\\n\\nA device may remain deployed long after its original vendor support ends. Assess the entire lifecycle: manufacturing and provisioning, deployment, patch delivery, credential rotation, secure decommissioning and supply-chain provenance. Use emulators, development boards owned by the learner or synthetic device traces. Do not probe deployed industrial, medical or public infrastructure without explicit written authorization and safety controls.",
    "deepDive": [
      {
        "title": "Secure boot and update chain",
        "body": "Establish trust anchors, signature verification, rollback protection where available, recovery behavior and key custody. An authenticated update still needs a secure delivery and deployment process."
      },
      {
        "title": "Debug and physical interfaces",
        "body": "Inventory JTAG, SWD, UART, bootloader consoles, removable storage and service ports. Define manufacturing lock-down and authorized maintenance access."
      },
      {
        "title": "Resource and timing constraints",
        "body": "Security controls must be evaluated for memory, CPU, timing and availability impact. Validate watchdog, fail-safe and recovery behavior under safe test conditions."
      }
    ],
    "examples": [
      {
        "title": "Unsigned firmware update",
        "body": "A fictional sensor accepts firmware over a maintenance interface without authenticity verification. Define a signed update design, key-provisioning responsibilities, anti-rollback expectations and a safe recovery test."
      }
    ],
    "case": "A mock fleet of remote sensors has shared credentials, exposed debug ports and irregular firmware updates. Create a prioritized device-lifecycle remediation plan.",
    "caseQuestions": [
      "Which hardware and software assets are in scope?",
      "How is firmware authenticity and rollback handled?",
      "Which physical/debug interfaces remain available?",
      "How are devices patched and retired safely?"
    ],
    "practice": "Build an embedded device threat model and secure-update requirements sheet for a fictional sensor.",
    "practiceSteps": [
      "Draw hardware, boot chain, RTOS/firmware, application, radio/network and cloud dependencies.",
      "Identify physical, local and remote trust boundaries.",
      "Specify device identity, key provisioning, signed updates and recovery behavior.",
      "List debug interfaces, production lock-down and maintenance workflow.",
      "Define a test plan for update failure, rollback, logging and decommissioning."
    ],
    "mistakes": [
      "Assuming a small device has a negligible attack surface.",
      "Leaving default credentials or debug ports enabled in production.",
      "Ignoring key lifecycle and recovery after failed updates.",
      "Testing on operational OT or safety-critical equipment without authorization."
    ],
    "takeaways": [
      "Embedded security spans hardware, firmware, RTOS and device lifecycle.",
      "Secure update, identity and debug controls must be designed together.",
      "Safety, timing and long support periods shape feasible controls."
    ],
    "assessmentRubric": [
      "Maps a complete embedded system and trust boundaries.",
      "Addresses update authenticity, key handling and recovery.",
      "Identifies physical/debug and lifecycle risks.",
      "Defines safe, testable requirements."
    ],
    "qa": [
      {
        "q": "What distinguishes an RTOS design goal?",
        "a": "Predictable timing and scheduling behavior under defined constraints.",
        "why": "Real-time properties shape system architecture and security trade-offs."
      },
      {
        "q": "Does signed firmware alone guarantee a secure update system?",
        "a": "No. Key custody, delivery, rollback, recovery and deployment controls also matter.",
        "why": "Authenticity is one part of the update lifecycle."
      },
      {
        "q": "Why control production debug ports?",
        "a": "They may expose privileged inspection or modification paths.",
        "why": "Physical service interfaces can bypass ordinary application boundaries."
      },
      {
        "q": "What is required before testing an operational industrial device?",
        "a": "Explicit authorization, defined scope and safety controls with the responsible operators.",
        "why": "Testing can affect availability and physical processes."
      }
    ],
    "check": {
      "q": "Which requirement most directly prevents an unauthorized firmware image from being installed?",
      "options": [
        "A longer device name",
        "Authenticity verification using a trusted signing key, with a controlled update process",
        "A faster screen refresh",
        "Disabling all audit records"
      ],
      "answer": "Authenticity verification using a trusted signing key, with a controlled update process",
      "why": "The device must verify that the image is authorized before installation."
    },
    "references": [
      {
        "title": "FreeRTOS documentation",
        "publisher": "AWS",
        "url": "https://docs.aws.amazon.com/freertos/"
      },
      {
        "title": "Zephyr Project documentation",
        "publisher": "Zephyr Project",
        "url": "https://docs.zephyrproject.org/latest/"
      },
      {
        "title": "NIST SP 800-193, Platform Firmware Resiliency Guidelines",
        "publisher": "NIST",
        "url": "https://csrc.nist.gov/pubs/sp/800/193/final"
      },
      {
        "title": "NISTIR 8259A, IoT Device Cybersecurity Capability Core Baseline",
        "publisher": "NIST",
        "url": "https://csrc.nist.gov/pubs/ir/8259/a/final"
      }
    ]
  },
  {
    "id": "ns20-os-hypervisors",
    "course": "00",
    "title": "Hypervisors & Virtual Machine Host Security",
    "objective": "Differentiate type-1 and type-2 hypervisors and review VM isolation, host management and recovery controls.",
    "learningGoal": "Assess virtualization as an infrastructure security boundary and identify shared-risk dependencies.",
    "time": "75–90 min",
    "prerequisite": "Operating Systems: Architecture, Roles & Security Boundaries",
    "concepts": [
      "hypervisor",
      "type 1",
      "type 2",
      "VM escape",
      "virtual switch",
      "snapshot",
      "KVM",
      "ESXi",
      "Hyper-V",
      "Xen"
    ],
    "read": "A hypervisor virtualizes compute resources so multiple guest operating systems can share a physical host. Type-1 hypervisors run directly on hardware or a dedicated host layer; type-2 hypervisors run as applications atop a conventional OS. Product and architecture classifications can vary by implementation. Examples include VMware ESXi, Microsoft Hyper-V, KVM and Xen. Virtual machines typically have separate guest kernels, but they still depend on the hypervisor, management plane, virtual networking, storage and hardware. A host compromise or management credential exposure can affect many guests.\\n\\nReview hypervisor and management versions, support status, admin identity, MFA, network segmentation, VM templates, virtual switch policy, storage encryption, snapshot lifecycle, backup/restore and logging. Snapshots are not a substitute for independent backups. Keep management interfaces off untrusted networks and restrict console access. Use a local lab hypervisor and test VMs for practice.",
    "deepDive": [
      {
        "title": "Isolation and shared dependencies",
        "body": "VM boundaries reduce direct guest-to-guest access but rely on hypervisor correctness and configuration. Shared storage, virtual networks, guest tools and management APIs are additional paths."
      },
      {
        "title": "Management plane",
        "body": "Separate administrator roles, use strong authentication, restrict access sources and log configuration changes. Treat management consoles and APIs as high-value assets."
      },
      {
        "title": "Images and snapshots",
        "body": "Harden golden images, patch templates, protect image repositories and track provenance. Remove stale snapshots according to policy and test restore from independent backups."
      }
    ],
    "examples": [
      {
        "title": "Unpatched host cluster",
        "body": "A synthetic cluster report shows one hypervisor outside its supported release and shared admin credentials. Prioritize verified inventory, scoped management access, vendor remediation guidance and tested workload migration/recovery."
      }
    ],
    "case": "A fictional company runs mixed hypervisor hosts and critical VMs. A proposed change increases virtual-switch connectivity and leaves management access on a shared subnet. Assess segmentation, access and rollback evidence.",
    "caseQuestions": [
      "Where are the host, guest and management trust boundaries?",
      "Which shared components create multi-VM impact?",
      "How do snapshots differ from backups?",
      "What evidence proves host patch and restore readiness?"
    ],
    "practice": "Produce a virtualization security architecture and control matrix for a synthetic cluster.",
    "practiceSteps": [
      "Draw physical hosts, hypervisor, management plane, virtual switches, storage and guests.",
      "Map administrator roles and management access paths.",
      "Review synthetic template, snapshot and network policies.",
      "Identify a shared-risk failure and design segmentation or privilege reduction.",
      "Specify patch, migration, backup restore and logging evidence."
    ],
    "mistakes": [
      "Assuming VM isolation removes host-level risk.",
      "Exposing management interfaces to broad networks.",
      "Using snapshots as the only recovery mechanism.",
      "Patching hosts without checking compatibility and migration plans."
    ],
    "takeaways": [
      "Virtualization creates strong but not absolute workload boundaries.",
      "The management plane and shared infrastructure have high blast radius.",
      "Recovery requires independent backups and tested procedures."
    ],
    "assessmentRubric": [
      "Correctly describes hypervisor architecture and boundaries.",
      "Identifies management and shared-component risks.",
      "Distinguishes snapshots from backups.",
      "Includes safe change, patch and recovery evidence."
    ],
    "qa": [
      {
        "q": "Do virtual machines remove all shared risk between workloads?",
        "a": "No. Guests share hardware and depend on the hypervisor, management and often storage/network layers.",
        "why": "Shared infrastructure can create common failure domains."
      },
      {
        "q": "Are snapshots equivalent to backups?",
        "a": "No. Snapshots depend on the underlying platform and may not provide independent recoverability.",
        "why": "Backups should be protected and restore-tested separately."
      },
      {
        "q": "Why restrict hypervisor management access?",
        "a": "Management access can alter hosts, networks, storage and multiple guest systems.",
        "why": "It is a high-impact control plane."
      },
      {
        "q": "What should precede a hypervisor upgrade?",
        "a": "Compatibility review, vendor guidance, backups, maintenance planning and tested recovery.",
        "why": "Host changes can affect all dependent workloads."
      }
    ],
    "check": {
      "q": "Which control most directly reduces the blast radius of a compromised hypervisor admin account?",
      "options": [
        "Share the account across the team",
        "Restrict management access, use named least-privilege roles and strong authentication",
        "Expose the console publicly for convenience",
        "Keep no audit records"
      ],
      "answer": "Restrict management access, use named least-privilege roles and strong authentication",
      "why": "Scoped access and accountability reduce exposure and improve response."
    },
    "references": [
      {
        "title": "VMware vSphere documentation",
        "publisher": "Broadcom",
        "url": "https://docs.vmware.com/"
      },
      {
        "title": "Hyper-V documentation",
        "publisher": "Microsoft",
        "url": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/"
      },
      {
        "title": "KVM documentation",
        "publisher": "Linux Kernel",
        "url": "https://www.linux-kvm.org/page/Documents"
      },
      {
        "title": "Xen Project documentation",
        "publisher": "Xen Project",
        "url": "https://xenproject.org/help/documentation/"
      }
    ]
  },
  {
    "id": "ns20-os-containers",
    "course": "00",
    "title": "Container Host & Runtime Security",
    "objective": "Explain container isolation and review image, runtime, privilege and host controls.",
    "learningGoal": "Identify how container workloads share the host kernel and apply layered controls to reduce risk.",
    "time": "75–90 min",
    "prerequisite": "Linux Administration & Host Security Foundations",
    "concepts": [
      "namespaces",
      "cgroups",
      "container image",
      "runtime",
      "capabilities",
      "seccomp",
      "rootless"
    ],
    "read": "Containers package an application and dependencies while sharing the host OS kernel. Linux namespaces isolate selected views of processes, networking, mounts and other resources; cgroups account for and limit resource use. Container runtimes create and manage containers, while images provide layered filesystem content. This model is not the same as a VM with a separate guest kernel. Security depends on host patching, runtime configuration, image provenance, user identity, capabilities, filesystem mounts, network policy and secret handling.\\n\\nAvoid privileged containers unless a documented requirement and compensating controls exist. Prefer minimal trusted images, non-root execution, read-only filesystems where feasible, dropped capabilities, resource limits, restricted host mounts and timely rebuilds. Scan results are signals requiring triage, not proof of exploitability or complete safety. Practice with local toy images and never mount sensitive host paths into an untrusted container.",
    "deepDive": [
      {
        "title": "Kernel sharing",
        "body": "A kernel vulnerability or unsafe runtime configuration can affect the host and neighboring workloads. Keep the host and runtime supported and patched."
      },
      {
        "title": "Image supply chain",
        "body": "Pin and verify image provenance, minimize packages, track base-image updates and rebuild from trusted sources. Avoid embedding credentials in image layers."
      },
      {
        "title": "Runtime confinement",
        "body": "Use user namespaces/rootless modes, capability reduction, seccomp and mandatory access controls where supported. Validate the effective configuration, not just the intended manifest."
      }
    ],
    "examples": [
      {
        "title": "Unexpected privileged container",
        "body": "A synthetic deployment manifest requests privileged mode and mounts the host root filesystem. Explain the expanded authority, propose a least-privilege alternative and define tests to confirm the application still functions."
      }
    ],
    "case": "Review a mock container deployment with a mutable base image tag, root user, broad host mount and no resource limits. Create a remediation matrix with owner and verification criteria.",
    "caseQuestions": [
      "Which controls are provided by the host kernel?",
      "What authority does privileged mode or a host mount add?",
      "How is image provenance and freshness established?",
      "What evidence confirms the deployed configuration?"
    ],
    "practice": "Perform a static security review of supplied synthetic container manifests.",
    "practiceSteps": [
      "Record image source, immutable digest policy and build provenance.",
      "Inspect user, capabilities, privileged settings, mounts and network exposure.",
      "Review secrets, writable paths and resource limits.",
      "Recommend minimal changes and identify compatibility tests.",
      "Write a deployment verification checklist and safe rollback plan."
    ],
    "mistakes": [
      "Assuming containers are lightweight VMs with separate kernels.",
      "Running all containers as root or privileged by default.",
      "Baking secrets into images or build logs.",
      "Treating an image scan as a complete security verdict."
    ],
    "takeaways": [
      "Containers share the host kernel and require host-aware controls.",
      "Least privilege, trusted images and constrained runtime settings work together.",
      "Verify effective deployment state and protect secrets."
    ],
    "assessmentRubric": [
      "Explains container isolation mechanisms and limitations.",
      "Finds excessive authority in the mock configuration.",
      "Addresses image trust, secrets and resource controls.",
      "Defines reproducible validation evidence."
    ],
    "qa": [
      {
        "q": "Do ordinary Linux containers run a separate guest kernel?",
        "a": "No. They generally share the host kernel.",
        "why": "This is a fundamental difference from conventional VMs."
      },
      {
        "q": "Why avoid mounting the host root filesystem into an app container?",
        "a": "It can grant broad access to host files and undermine isolation.",
        "why": "Mounts expand the container's reachable resources."
      },
      {
        "q": "What is a useful image policy?",
        "a": "Use trusted provenance, pin immutable digests where appropriate and rebuild from updated bases.",
        "why": "This improves traceability and update control."
      },
      {
        "q": "Does a clean vulnerability scan prove a container is secure?",
        "a": "No. It cannot establish the absence of configuration, runtime, identity or unknown risks.",
        "why": "Scanning covers only selected known issues and inputs."
      }
    ],
    "check": {
      "q": "A container needs no host-level administration but is configured as privileged. What should be done?",
      "options": [
        "Keep it privileged because containers are isolated",
        "Review required capabilities and replace privileged mode with the narrowest working permissions",
        "Mount the host root filesystem too",
        "Disable runtime logging"
      ],
      "answer": "Review required capabilities and replace privileged mode with the narrowest working permissions",
      "why": "Reduce authority to only what the workload needs."
    },
    "references": [
      {
        "title": "Docker Engine security",
        "publisher": "Docker",
        "url": "https://docs.docker.com/engine/security/"
      },
      {
        "title": "Kubernetes security",
        "publisher": "Kubernetes",
        "url": "https://kubernetes.io/docs/concepts/security/"
      },
      {
        "title": "NIST SP 800-190, Application Container Security Guide",
        "publisher": "NIST",
        "url": "https://csrc.nist.gov/pubs/sp/800/190/final"
      }
    ]
  },
  {
    "id": "ns20-os-kubernetes",
    "course": "00",
    "title": "Kubernetes Node, Control Plane & Workload Security",
    "objective": "Map Kubernetes security boundaries and review RBAC, network policy, secrets and audit controls.",
    "learningGoal": "Assess cluster security from identity and control plane through nodes and workloads.",
    "time": "90 min",
    "prerequisite": "Container Host & Runtime Security",
    "concepts": [
      "Kubernetes API",
      "RBAC",
      "control plane",
      "node",
      "Pod Security",
      "NetworkPolicy",
      "Secrets",
      "audit log"
    ],
    "read": "Kubernetes orchestrates containerized workloads through a control plane and worker nodes. The API server is a central management interface; authentication identifies callers and role-based access control (RBAC) authorizes actions on resources. Nodes run workloads through a container runtime and kubelet. Namespaces organize resources but are not, by themselves, a complete tenant isolation boundary. NetworkPolicy enforcement depends on the cluster networking implementation. Kubernetes Secrets require appropriate access controls and encryption-at-rest configuration; base64 encoding is not encryption.\\n\\nReview API exposure, identity integration, RBAC bindings, admission controls, workload security context, service accounts, network segmentation, secret handling, image provenance, node patching, audit policy and backup/restore of cluster state. Check the actual distribution and version, including managed-service responsibilities. Use a local disposable cluster or supplied YAML for exercises, never a production cluster without explicit authorization.",
    "deepDive": [
      {
        "title": "Control plane and RBAC",
        "body": "Use least-privilege roles, avoid broad cluster-admin grants, review bindings and service-account tokens, and restrict API server access."
      },
      {
        "title": "Workload and network controls",
        "body": "Set non-root execution, read-only filesystems where feasible, drop capabilities and use admission policy. Validate that network policy is supported and actually enforced by the installed CNI."
      },
      {
        "title": "Secrets and audit",
        "body": "Limit secret read access, enable encryption at rest where supported, rotate credentials and protect audit logs. Verify backups and restoration of critical cluster state."
      }
    ],
    "examples": [
      {
        "title": "Overbroad service account",
        "body": "A synthetic Pod uses a service account bound to cluster-admin despite needing only to read one ConfigMap. Design a namespace-scoped role and test allowed and denied API operations in a local cluster."
      }
    ],
    "case": "A fictional cluster exposes its API endpoint broadly, binds a workload service account to cluster-admin and lacks audit retention. Produce a control map and safe staged remediation.",
    "caseQuestions": [
      "Who can call the API server and with what identity?",
      "Which RBAC rules permit the workload's actions?",
      "How is network policy enforced by the cluster?",
      "What audit and recovery evidence is retained?"
    ],
    "practice": "Review synthetic Kubernetes manifests and RBAC YAML, then draft a least-privilege correction.",
    "practiceSteps": [
      "Identify cluster version, distribution and managed-service responsibility split.",
      "Map API server, nodes, namespaces, service accounts and external dependencies.",
      "Inspect Role/ClusterRole and bindings for excessive access.",
      "Review Pod security context, image source, secrets and network policy assumptions.",
      "Define negative authorization tests, audit checks and rollback."
    ],
    "mistakes": [
      "Assuming namespaces alone guarantee tenant isolation.",
      "Treating base64-encoded Secret values as encrypted.",
      "Using cluster-admin for routine workloads.",
      "Writing NetworkPolicy without verifying CNI enforcement."
    ],
    "takeaways": [
      "Kubernetes security spans control plane, nodes, identities and workloads.",
      "RBAC and workload identity should be narrowly scoped.",
      "Network, secrets, audit and recovery require implementation-specific verification."
    ],
    "assessmentRubric": [
      "Maps cluster components and authority paths accurately.",
      "Finds and narrows excessive RBAC permissions.",
      "Accounts for runtime, network and secret controls.",
      "Includes safe tests and audit/recovery evidence."
    ],
    "qa": [
      {
        "q": "Does a Kubernetes namespace automatically provide complete tenant isolation?",
        "a": "No. Additional identity, network, admission and resource controls may be required.",
        "why": "Namespaces organize resources but do not independently enforce every boundary."
      },
      {
        "q": "Is base64 encoding of a Kubernetes Secret encryption?",
        "a": "No. It is an encoding; protect access and configure encryption at rest as appropriate.",
        "why": "Encoding does not provide confidentiality."
      },
      {
        "q": "What must be verified before relying on NetworkPolicy?",
        "a": "That the cluster's networking implementation supports and enforces it.",
        "why": "Policy objects alone do not guarantee enforcement."
      },
      {
        "q": "Why avoid cluster-admin for an application service account?",
        "a": "It grants broad authority far beyond a narrow workload purpose.",
        "why": "Least privilege limits compromise impact."
      }
    ],
    "check": {
      "q": "A Pod only needs to read one ConfigMap but has cluster-admin. What is the intended fix?",
      "options": [
        "Keep cluster-admin and add a prompt warning",
        "Create a narrowly scoped role and binding, then test allowed and denied actions",
        "Give every Pod cluster-admin for consistency",
        "Disable API audit logs"
      ],
      "answer": "Create a narrowly scoped role and binding, then test allowed and denied actions",
      "why": "Least-privilege RBAC should match the workload's actual need."
    },
    "references": [
      {
        "title": "Kubernetes security concepts",
        "publisher": "Kubernetes",
        "url": "https://kubernetes.io/docs/concepts/security/"
      },
      {
        "title": "Kubernetes RBAC",
        "publisher": "Kubernetes",
        "url": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
      },
      {
        "title": "Kubernetes Secrets",
        "publisher": "Kubernetes",
        "url": "https://kubernetes.io/docs/concepts/configuration/secret/"
      }
    ]
  },
  {
    "id": "ns20-os-cloud-guest",
    "course": "00",
    "title": "Cloud Instance Operating Systems & Image Lifecycle",
    "objective": "Review cloud VM operating-system identity, image provenance, metadata access, patching and logging.",
    "learningGoal": "Connect OS hardening to cloud control-plane and workload responsibilities.",
    "time": "75–90 min",
    "prerequisite": "Linux Administration & Host Security Foundations and cloud fundamentals",
    "concepts": [
      "golden image",
      "cloud metadata",
      "instance identity",
      "patch orchestration",
      "configuration drift",
      "shared responsibility"
    ],
    "read": "Cloud virtual machines still run conventional guest operating systems, but their security posture depends on both guest configuration and the cloud provider's control plane. A secure image process identifies a trusted base image, validates its source and version, applies baseline configuration, scans and tests it, publishes immutable artifacts, and retires outdated images. Instance identity and metadata services can provide credentials or configuration; access should be limited to the intended workload and protected against unintended exposure.\\n\\nPatch orchestration, endpoint monitoring, disk encryption, network security groups, logging, backup and configuration management should be treated as connected controls. Shared-responsibility boundaries vary by service model and provider. Record image IDs, OS release, agent status, patch date, identity role, network exposure and policy exceptions. Avoid assuming that provider-managed infrastructure means the guest OS is automatically patched or securely configured.",
    "deepDive": [
      {
        "title": "Image pipeline",
        "body": "Track source, build recipe, dependency versions, approval, test results and rollout ring. Prefer reproducible builds and controlled promotion rather than manual drift."
      },
      {
        "title": "Metadata and workload identity",
        "body": "Use provider-supported workload identity and restrict metadata access according to current provider guidance. Do not bake long-lived credentials into images or user data."
      },
      {
        "title": "Drift and evidence",
        "body": "Compare deployed instances with approved baselines, track exceptions and verify logs reach protected central storage. Measure patch compliance against the correct support and maintenance window."
      }
    ],
    "examples": [
      {
        "title": "Publicly reachable admin port",
        "body": "A synthetic cloud VM inventory shows SSH or RDP exposed broadly and an outdated image. Verify intended admin paths, identity controls, patch window and emergency access before applying a scoped network and OS remediation."
      }
    ],
    "case": "A fictional cloud estate has manually built images, inconsistent patch dates and excessive instance roles. Design a hardened image and fleet-compliance workflow.",
    "caseQuestions": [
      "What evidence establishes image provenance and OS version?",
      "Which controls belong to provider versus guest operator?",
      "How is workload identity scoped?",
      "How is configuration drift detected and remediated?"
    ],
    "practice": "Create a cloud OS image lifecycle checklist and a synthetic instance compliance report.",
    "practiceSteps": [
      "Define image source, build, review, test, publish and retirement stages.",
      "Map provider responsibilities and guest OS controls.",
      "Review instance role, metadata access, admin ports, encryption and logging.",
      "Create patch rings and exception expiry rules.",
      "Specify drift checks, remediation evidence and rollback."
    ],
    "mistakes": [
      "Assuming cloud provider responsibility covers guest patching by default.",
      "Embedding secrets in images or startup scripts.",
      "Using broad instance roles for convenience.",
      "Treating a successful deployment as proof of secure configuration."
    ],
    "takeaways": [
      "Cloud OS security joins guest controls with provider identity and networking.",
      "Image provenance and repeatable patching reduce drift.",
      "Evidence should link each deployed instance to a supported image and policy."
    ],
    "assessmentRubric": [
      "Separates provider and guest responsibilities accurately.",
      "Defines traceable image lifecycle and patch evidence.",
      "Identifies metadata, identity and network risks.",
      "Provides measurable drift and remediation checks."
    ],
    "qa": [
      {
        "q": "Does cloud hosting automatically patch every guest OS?",
        "a": "Not generally; responsibility depends on service and configured management model.",
        "why": "Guest operating-system maintenance is often the customer's responsibility."
      },
      {
        "q": "Why use a controlled image pipeline?",
        "a": "It creates traceability, repeatability and consistent baseline enforcement.",
        "why": "Manual builds make drift and provenance harder to manage."
      },
      {
        "q": "Should a cloud image contain permanent credentials?",
        "a": "No. Use an approved secret or workload-identity mechanism at runtime.",
        "why": "Embedded credentials can be copied and persist beyond intended use."
      },
      {
        "q": "What does configuration drift mean?",
        "a": "The deployed state diverges from the approved baseline or desired configuration.",
        "why": "Drift can silently weaken controls."
      }
    ],
    "check": {
      "q": "A cloud VM is created from an old image and has a broad instance role. What should the review cover?",
      "options": [
        "Only its hostname",
        "Image provenance and patch state, plus the role's effective permissions and exposure",
        "Assume provider handles all guest security",
        "Disable central logging"
      ],
      "answer": "Image provenance and patch state, plus the role's effective permissions and exposure",
      "why": "Cloud VM posture includes both OS and control-plane identity/configuration."
    },
    "references": [
      {
        "title": "AWS EC2 security best practices",
        "publisher": "AWS",
        "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security.html"
      },
      {
        "title": "Azure virtual machine security",
        "publisher": "Microsoft",
        "url": "https://learn.microsoft.com/en-us/azure/virtual-machines/security-overview"
      },
      {
        "title": "Google Cloud VM security",
        "publisher": "Google Cloud",
        "url": "https://cloud.google.com/compute/docs/security"
      }
    ]
  }
];
window.NORTHSTAR_2_0_ADDITIONS = [...(window.NORTHSTAR_2_0_ADDITIONS || []), ...window.NORTHSTAR_OS_PLATFORM_CURRICULUM];
