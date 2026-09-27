# NorthStar 2.0 — Operating Systems Coverage Audit

Status: Inventory mapping pending
Date: 2026-09-27
Scope: Establish an evidence-based OS coverage matrix for the existing curriculum. This is a coverage checklist, not a claim that any topic is absent or complete.

## How to use this matrix

For each row, map existing lesson/topic IDs and inspect the actual content. Record one status:
- **Complete**: accurate, sufficiently detailed, source-backed, and supported by appropriate reference/practice material.
- **Partial**: present but missing important concepts, depth, references, examples or practical coverage.
- **Missing**: no adequate canonical content exists.
- **Not applicable**: explain why this topic is outside the platform's intended scope.
- **Unverified**: inventory/content could not be inspected; never treat as complete.

Do not create duplicate lessons just to satisfy a checklist. Prefer one canonical topic with linked reference entries, learning modules and practice material.

## A. OS concepts and architecture

| Audit topic | Expected coverage | Existing lesson IDs | Status | Evidence / remediation |
|---|---|---|---|---|
| OS purpose, types and architecture | Kernel, user space, services, system calls, drivers, monolithic/microkernel concepts | TBD | Unverified | |
| Boot and startup | Firmware/UEFI, bootloader, kernel startup, init/system services, secure boot concepts | TBD | Unverified | |
| Processes, threads and scheduling | Lifecycle, signals, services, concurrency, resource controls | TBD | Unverified | |
| Memory and storage | Virtual memory, paging, filesystems, disks, encryption basics | TBD | Unverified | |
| Users, groups and permissions | Identity, ACLs, privilege boundaries, least privilege | TBD | Unverified | |
| OS logging and auditing | Event sources, retention, integrity, time sync, audit review | TBD | Unverified | |
| OS patching and lifecycle | Updates, support status, vulnerability remediation, rollback | TBD | Unverified | |
| OS security architecture | Isolation, sandboxing, MAC, secure boot, code signing, endpoint controls | TBD | Unverified | |

## B. Core desktop and server platforms

| Platform | Expected coverage | Existing lesson IDs | Status | Evidence / remediation |
|---|---|---|---|---|
| Linux common core | CLI, filesystem, users, services, networking, logs, package management, shell scripting, hardening | TBD | Unverified | |
| Debian / Ubuntu | APT, systemd, AppArmor and distro-specific administration | TBD | Unverified | |
| RHEL family | RPM/DNF, SELinux, enterprise lifecycle and administration | TBD | Unverified | |
| SUSE / SLES | Zypper, YaST concepts, AppArmor and enterprise administration | TBD | Unverified | |
| Other server distributions | Amazon Linux, Oracle Linux, Rocky/Alma; compare supported differences without duplicating core Linux | TBD | Unverified | |
| Kali Linux | Purpose, installation/lab safety, tool ecosystem, authorized workflows, reporting; prerequisites in Linux | TBD | Unverified | |
| Windows client | Architecture, NTFS, accounts, services, registry, PowerShell, Defender, event logs, hardening | TBD | Unverified | |
| Windows Server | Roles, services, patching, remote administration, backup and security baselines | TBD | Unverified | |
| Active Directory | Domains, users/groups, authentication, Group Policy, delegation and defensive monitoring | TBD | Unverified | |
| macOS | Darwin/Unix foundations, APFS, permissions, Gatekeeper, FileVault, TCC, logging and hardening | TBD | Unverified | |
| ChromeOS | Verified boot, sandboxing, updates, enterprise management and device controls | TBD | Unverified | |

## C. Mobile, Unix, network, mainframe and embedded

| Platform family | Expected coverage | Existing lesson IDs | Status | Evidence / remediation |
|---|---|---|---|---|
| Android / AOSP | App sandbox, permissions, verified boot, SELinux, updates, debugging and device management | TBD | Unverified | |
| iOS / iPadOS | Secure boot chain, code signing, app sandbox, data protection, privacy controls and MDM | TBD | Unverified | |
| BSD | FreeBSD/OpenBSD/NetBSD fundamentals, services, packet filtering, updates and security distinctions | TBD | Unverified | |
| Enterprise Unix | Solaris/illumos, AIX, HP-UX concepts, identity, auditing, patching and legacy risk | TBD | Unverified | |
| Network OS | Cisco IOS/IOS XE/NX-OS, Junos, EOS and RouterOS: management plane, AAA, config backup, logging and firmware | TBD | Unverified | |
| Firewall OS | FortiOS/PAN-OS concepts: policy, admin access, segmentation, logging, upgrades and recovery | TBD | Unverified | |
| Mainframe / legacy | z/OS, IBM i, z/VM and OpenVMS concepts, access controls, auditing and operational context | TBD | Unverified | |
| Embedded / RTOS | FreeRTOS, Zephyr, QNX, VxWorks: firmware, secure boot/update, memory safety and device lifecycle | TBD | Unverified | |
| Embedded Linux / IoT | Device identity, update security, exposed services, debug interfaces and fleet management | TBD | Unverified | |

## D. Adjacent infrastructure (track separately from OS coverage)

| Area | Expected coverage | Existing lesson IDs | Status | Evidence / remediation |
|---|---|---|---|---|
| Hypervisors | ESXi, Hyper-V, KVM, Xen: isolation, management plane, patching and VM security | TBD | Unverified | |
| Virtualization management | Proxmox VE and related management/security concepts | TBD | Unverified | |
| Containers | Namespaces, cgroups, images, registries, runtime controls and isolation limitations | TBD | Unverified | |
| Kubernetes | Nodes, control plane, RBAC, network policy, secrets, workload hardening and audit | TBD | Unverified | |
| Cloud OS operations | Secure instance images, identity, metadata services, logging, patching and configuration | TBD | Unverified | |

## E. Required cross-cutting practice

- OS installation and safe lab setup (VM snapshots, network isolation, reset/cleanup)
- User and privilege administration with least privilege
- Host firewall and secure remote administration
- Patch and vulnerability management
- Log collection, event interpretation and time normalization
- Backup, restore and recovery validation
- Host-based detection and incident triage
- Secure configuration baselines and drift checks
- Platform-specific troubleshooting
- Version-aware source references and end-of-support handling

## Supplemental OS curriculum added

A dedicated supplemental pack has now been added and loaded by the web app. These are new lessons, not replacements for or a verified mapping of the original curriculum entries.

| New lesson ID | Coverage |
|---|---|
| `ns20-os-foundations` | OS architecture, privilege boundaries, kernel/user space, isolation |
| `ns20-os-linux-core` | Linux administration and host security |
| `ns20-os-linux-distro` | Debian/Ubuntu, RHEL-family, SUSE, specialist distro differences |
| `ns20-os-windows` | Windows client/server security operations |
| `ns20-os-ad` | Active Directory identity, policy and monitoring |
| `ns20-os-macos` | macOS security architecture and administration |
| `ns20-os-mobile` | Android and iOS/iPadOS security models |
| `ns20-os-chromeos` | ChromeOS integrity and managed-device controls |
| `ns20-os-bsd-unix` | BSD and enterprise Unix fundamentals |
| `ns20-os-network-appliance` | Network OS and firewall appliance security |
| `ns20-os-mainframe` | Mainframe and legacy enterprise environments |
| `ns20-os-embedded-rtos` | Embedded systems, RTOS and firmware lifecycle |
| `ns20-os-hypervisors` | Hypervisors and VM host security |
| `ns20-os-containers` | Container host and runtime security |
| `ns20-os-kubernetes` | Kubernetes control plane, nodes and workloads |
| `ns20-os-cloud-guest` | Cloud instance OS and image lifecycle |

Each lesson includes topic-specific instruction, practical application, a case/scenario, guided practice, assessment criteria, knowledge checks with rationales and authoritative reference links. All exercises are limited to synthetic evidence or owned, isolated environments.

The pack is linked into `index.html` after the existing curriculum additions and before `app.js`, so the app's existing additive lesson pipeline can include it. The original curriculum inventory still needs inspection to identify overlap and avoid duplicate learning paths; therefore the existing baseline rows remain **Unverified** until that mapping and a render/progress regression check are completed.

## Next audit action

The repository's primary `data/curriculum.js` is approximately 1.5 MB and connected GitHub retrieval still returns metadata but no file content. A 16-lesson OS supplement has been added independently (see table above), but existing curriculum IDs cannot yet be mapped reliably for overlap and gap analysis. Keep the original coverage rows **Unverified** until the actual inventory is inspected and the integrated app is tested.

## Completion record

| Gate | Result |
|---|---|
| Actual curriculum inventory obtained | Pending |
| Existing lesson IDs mapped | Pending |
| Topic-level content inspected | Pending |
| Missing/partial coverage identified | Pending |
| New content planned without duplication | Pending |
| Technical/source review completed | Pending |
| Rendering and navigation QA | Pending |
