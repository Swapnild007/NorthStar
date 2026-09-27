# NorthStar 2.0 Information Architecture

Status: Proposed architecture baseline (2026-09-27)
Purpose: Organize NorthStar as a comprehensive, connected cybersecurity knowledge platform, not merely a sequence of lessons.

## Product principle

NorthStar combines a reference library, structured learning, technical handbook, practical workspace and real-world investigation collection. Users can enter through search or a domain page, read at their own depth, and move between explanations, procedures, learning activities and cases without duplicating the authoritative content.

This document is an architecture proposal. It does not certify the current 171-chapter inventory or claim the UI already implements these capabilities.

## 1. User-facing information model

### Global entry points
- **Explore**: browse the knowledge taxonomy.
- **Learn**: guided paths, prerequisites, lessons, assessments and progress.
- **Reference**: commands, protocols, standards, configuration, procedures and troubleshooting.
- **Practice**: authorized, isolated exercises and safe lab guides.
- **Investigate**: incident case studies, threat reports, forensic workflows and lessons learned.
- **Glossary**: concise definitions linked to canonical topic pages.
- **Search**: cross-platform search with filters for domain, content type, level, platform, vendor, version and freshness.

These are content views, not separate copies of the same material.

## 2. Proposed top-level knowledge domains

1. Cybersecurity foundations, ethics and safe practice
2. Operating systems and platform security
3. Networking, protocols and network defense
4. Programming, scripting and automation
5. Identity, authentication and access management
6. Application security and secure software development
7. Web, API and cloud-native security
8. Cloud platforms, infrastructure and virtualization
9. Security operations, detection engineering and threat intelligence
10. Vulnerability management and authorized security testing
11. Malware analysis and reverse engineering
12. Digital forensics and incident response
13. Cryptography and key management
14. AI, machine learning and agent security
15. Mobile, IoT, embedded and operational technology security
16. Governance, risk, compliance, privacy and security management
17. Security architecture, resilience and business continuity
18. Tools, technical references and troubleshooting
19. Real-world incident and breach case studies

Domains should be navigable by concept and role, with cross-links where a topic spans multiple areas. Keep vendor-specific details as filtered subtopics, not duplicate top-level domains.

## 3. Operating systems domain map

### Core platforms
- Linux fundamentals and administration
- Windows client and Windows Server
- macOS
- Android and iOS/iPadOS
- ChromeOS

### Linux distributions and security environments
- Debian, Ubuntu, RHEL-family systems (RHEL, Rocky Linux, AlmaLinux), SUSE, Amazon Linux, Oracle Linux
- Kali Linux and other specialist security distributions
Teach shared Linux concepts once, then document distribution-specific package, service, filesystem and security differences in comparison/reference pages.

### Unix and BSD
- FreeBSD, OpenBSD, NetBSD
- Solaris/illumos, AIX, HP-UX
- Legacy and enterprise Unix security concepts, with labs only where a safe and supportable environment exists.

### Network operating systems and appliances
- Cisco IOS/IOS XE/NX-OS, Juniper Junos, Arista EOS, MikroTik RouterOS
- Firewall/appliance platforms such as FortiOS and PAN-OS
Keep product-specific configuration in versioned vendor reference pages; teach common network-device security concepts separately.

### Mainframe, embedded and real-time
- IBM z/OS, IBM i, z/VM; OpenVMS
- FreeRTOS, Zephyr, QNX, VxWorks, embedded Linux
Cover architecture and threat models, and clearly label access-dependent/legacy exercises.

### Virtualization and container host layers
- VMware ESXi, Hyper-V, KVM, Xen, Proxmox VE
- Docker/container runtimes and Kubernetes
Treat hypervisors, container runtimes and orchestration as adjacent infrastructure topics, not conventional desktop OSes.

## 4. Canonical topic page contract

A substantive topic page should use only the sections appropriate to its type:
- What it is, scope and why it matters
- Prerequisites and related concepts
- Conceptual explanation, architecture and terminology
- How it works (sequence/flow where useful)
- Practical examples and common failure modes
- Security implications, controls and limitations
- Reference material: commands, APIs, configuration, standards or version matrix as applicable
- Procedures/troubleshooting, including preconditions and safety boundaries
- Practice/assessment links, with answer rationales
- Related topics and documented case studies
- Sources, version/date checked, reviewer and known gaps

Short glossary entries and index pages should remain concise and link to canonical articles rather than reproduce entire chapters.

## 5. Content types and relationships

Canonical entities:
- **Topic**: authoritative conceptual explanation.
- **Reference entry**: precise, version-scoped fact or procedure (e.g. command option, protocol field, configuration setting).
- **Learning module/lesson**: sequenced instructional path that references topics and reference entries.
- **Exercise/lab**: authorized activity with environment, prerequisites, expected evidence, cleanup and safety notes.
- **Case study**: sourced event timeline, affected systems, response, outcomes, limitations and analysis prompts.
- **Glossary term**: short definition pointing to a canonical topic.
- **Source**: publisher, title, URL, publication/revision date, access/review date and claims supported.

Relationships should be explicit: prerequisites, explains, references, practices, assesses, related-to, applies-to-platform/version, and case-study-of. Avoid copying the same body into multiple pages.

## 6. Content quality and freshness

- Distinguish stable fundamentals from version-specific or rapidly changing guidance.
- Record the platform/product version and date checked for volatile instructions.
- Prefer primary sources: official vendor documentation, standards bodies, government advisories and original incident reports.
- Separate verified facts, attributed claims, interpretation and learner exercises.
- Mark content status: proposed, drafted, technical review, editorial review, validated, published, deprecated.
- A chapter count is not a completeness measure. A topic is complete only when its applicable content contract, sources, safety review and rendering checks are evidenced.

## 7. Navigation and usability rules

- Start with a clean domain landing page: short orientation, search/browse, recommended routes and visible content freshness.
- Use progressive disclosure: overview first; advanced detail, reference tables and edge cases expandable or linked.
- Use consistent breadcrumbs, related-topic links and “continue learning” without forcing users into a course.
- Search results should preview content type, level, platform/version and review date.
- Provide compact and deep-reading modes where practical; avoid giant unbroken pages and repetitive boilerplate.
- Use diagrams only when they clarify a relationship, sequence, architecture or decision. Images should have captions, alt text and a clear instructional purpose.
- Preserve keyboard access, mobile responsiveness, readable contrast and predictable navigation.

## 8. Audit and implementation sequence

### Phase A — inventory (next)
1. Export the actual 171 lesson IDs, titles, domain tags and existing content sources from the repository. Use the checklist in `docs/NORTHSTAR_2_0_OS_COVERAGE_AUDIT.md` for platform coverage.
2. Map each item to one primary domain and any secondary tags.
3. Compare existing content against the taxonomy and identify missing, duplicate, misplaced and overly broad entries.
4. Produce an evidence-based coverage matrix; do not mark unknowns as complete.

### Phase B — content model and pilot
1. Define the repository schema for canonical topics, references, lessons, labs and cases.
2. Choose a small cross-domain pilot (OS foundations/Linux, Windows security, networking, and one incident case).
3. Build one clean topic landing page and verify that search, links and lesson progress remain coherent.
4. Review technical accuracy, references, accessibility and responsive rendering.

### Phase C — scale
1. Migrate and enrich content by domain batches.
2. Add platform/version tags, source metadata and related-content links.
3. Run automated schema/link checks and human technical/editorial review.
4. Publish domain batches only after acceptance gates pass.

### Phase D — release
Freeze only after the complete register records applicable content checks, reference checks, safety review, accessible responsive rendering, regression results, reviewer and date for every published item.

## 9. Initial acceptance checklist
- [ ] Existing 171 entries exported and mapped without guessing.
- [ ] Every topic has a primary domain and appropriate content type.
- [ ] Missing OS families and other domain gaps identified against the actual repository.
- [ ] Canonical topic and reference schema agreed.
- [ ] Duplicate content and broken cross-links identified.
- [ ] Pilot pages render on mobile and desktop.
- [ ] Sources, versioning, review status and ownership are visible.
- [ ] Search and navigation tested with representative user tasks.
- [ ] Full curriculum freeze gate passes with evidence.

## Current limitation

The current audit notes establish that 171 entries exist, but the repository curriculum inventory could not be read in the last inspection attempt. Therefore, this baseline deliberately defines the target structure and audit method; the next implementation step must retrieve and parse the real inventory before making chapter-level coverage claims or moving lessons.