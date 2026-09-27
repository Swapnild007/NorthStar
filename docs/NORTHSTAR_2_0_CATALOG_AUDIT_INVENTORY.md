# NorthStar 2.0 — Legacy Curriculum Mechanical Audit

**Source:** `data/curriculum.js` plus the supplemental arrays assembled by `app.js` on `northstar-2.0/content-standard`. **Base inventory:** 140 lessons across 16 courses. **Verified assembled catalog:** 187 lesson records across 16 courses, with 187 unique IDs. See the [assembled catalog reconciliation](NORTHSTAR_2_0_ASSEMBLED_CATALOG_RECONCILIATION.md).

This report records source inventory and exact normalized text repeat candidates. It is not a semantic review: same wording can be intentional, and exact repeats in answer keys/options can be necessary. Paraphrase overlap and instructional quality require editorial review.


## Editorial pass progress

- **Authored revisions:** `cf-01` through `cf-10` (Computer & Digital Foundations) and `sf-01` through `sf-05` (Cybersecurity Foundations) have authored override entries on this branch.
- These are focused lesson rewrites that retain the stable lesson IDs and include learning content, case/practice material and knowledge checks where specified in the override.
- **Not yet certified:** no full browser/mobile rendering pass or complete lesson-by-lesson semantic review of the remaining 172 lessons has been completed. The mechanical repeat counts below remain candidate flags, not editorial findings.

## Per-lesson inventory

| Course | Lesson ID | Title | Approx. words | Exact repeat groups |
|---|---|---|---:|---:|
| 00 | `cf-01` | What Is a Computer? | 1196 | 4 |
| 00 | `cf-02` | Operating Systems: The Computer's Manager | 1227 | 4 |
| 00 | `cf-03` | Files, Folders & Storage | 1187 | 4 |
| 00 | `cf-04` | Programs, Processes & Memory | 1155 | 4 |
| 00 | `cf-05` | How the Internet Works | 1187 | 4 |
| 00 | `cf-06` | DNS, IP Addresses & Ports | 1211 | 4 |
| 00 | `cf-07` | Websites, HTTP & HTTPS | 1173 | 4 |
| 00 | `cf-08` | Accounts, Passwords & Multi-Factor Authentication | 1178 | 5 |
| 00 | `cf-09` | Digital Safety: Downloads, Links & Social Engineering | 1221 | 5 |
| 00 | `cf-10` | Data Basics: Tables, Fields, Records & Datasets | 1240 | 5 |
| 01 | `sf-01` | Security Mental Models | 1113 | 4 |
| 01 | `sf-02` | CIA Triad & Security Objectives | 1093 | 4 |
| 01 | `sf-03` | Identity & Access Fundamentals | 1069 | 4 |
| 01 | `sf-04` | Threat Modeling Basics | 1118 | 4 |
| 01 | `sf-05` | Defense in Depth, Zero Trust & Security Architecture | 1105 | 5 |
| 02 | `ns-01` | TCP/IP Mental Model | 1132 | 5 |
| 02 | `ns-02` | IPv4/IPv6 Addressing & Subnets | 1101 | 5 |
| 02 | `ns-03` | TCP, UDP, Ports & Application Protocols | 1132 | 5 |
| 02 | `ns-04` | Routing, NAT, Firewalls & Segmentation | 1109 | 5 |
| 02 | `ns-05` | DNS, DHCP & Packet Analysis Workflow | 1116 | 5 |
| 03 | `sc-01` | Linux Security Fundamentals | 1273 | 5 |
| 03 | `sc-02` | Processes, Services & Isolation | 1076 | 5 |
| 03 | `sc-03` | Virtualization, Containers & Cloud Shared Responsibility | 1114 | 5 |
| 03 | `sc-04` | Secure Configuration & Hardening | 1044 | 5 |
| 03 | `sc-05` | Cloud IAM, Workload Identity & Secrets | 1116 | 5 |
| 04 | `ds-01` | Logging for Detection | 1047 | 5 |
| 04 | `ds-02` | Detection Engineering Basics | 1076 | 5 |
| 04 | `ds-03` | SIEM Investigation Workflow | 1070 | 5 |
| 04 | `ds-04` | Incident Triage & Severity | 1072 | 5 |
| 04 | `ds-05` | Evidence, Incident Timeline & Recovery | 1086 | 5 |
| 05 | `os-01` | Offensive Security Methodology | 1084 | 5 |
| 05 | `os-02` | Web Application Attack Surface | 1110 | 5 |
| 05 | `os-03` | Input Validation, Injection & Output Encoding | 1110 | 5 |
| 05 | `os-04` | Authentication, Authorization & Session Security | 1067 | 5 |
| 05 | `os-05` | Security Testing, Findings & Remediation Reporting | 1097 | 5 |
| 06 | `se-01` | Secure Software Lifecycle | 1095 | 5 |
| 06 | `se-02` | Security Automation | 1053 | 5 |
| 06 | `se-03` | Security Architecture | 1069 | 5 |
| 06 | `se-04` | Vulnerability, Dependency & Supply-Chain Management | 1106 | 5 |
| 06 | `se-05` | Security Metrics, SBOM & Evidence | 1080 | 4 |
| 07 | `pro-01` | How Programmers Think: Inputs → Rules → Outputs | 806 | 0 |
| 07 | `pro-02` | Variables & Data Types | 778 | 0 |
| 07 | `pro-03` | Conditions & Boolean Logic | 783 | 0 |
| 07 | `pro-04` | Loops: Repeating Work Safely | 765 | 0 |
| 07 | `pro-05` | Functions & Decomposition | 751 | 0 |
| 07 | `pro-06` | Python Collections: Lists, Dictionaries & Sets | 768 | 0 |
| 07 | `pro-07` | CSV & JSON: Working With Real Data | 798 | 0 |
| 07 | `pro-08` | Errors, Validation & Testing | 756 | 0 |
| 07 | `pro-09` | SQL Fundamentals: Ask Questions of Tables | 779 | 0 |
| 07 | `pro-10` | SQL Filtering, Joins, Aggregation & Data Modeling | 794 | 0 |
| 07 | `pro-11` | Security Automation with Python & Reproducible Pipelines | 793 | 0 |
| 07 | `pro-12` | Mini Project: Authentication Log Analyzer | 843 | 1 |
| 08 | `dat-01` | Data Thinking | 1145 | 0 |
| 08 | `dat-02` | Population, Sample & Bias | 1166 | 0 |
| 08 | `dat-03` | Mean, Median & Percentiles | 1209 | 0 |
| 08 | `dat-04` | Variation & Standard Deviation | 1208 | 0 |
| 08 | `dat-05` | Distributions & Histograms | 1145 | 0 |
| 08 | `dat-06` | Probability Fundamentals | 1190 | 0 |
| 08 | `dat-07` | Conditional Probability & Bayes Intuition | 1236 | 0 |
| 08 | `dat-08` | Correlation, Regression & Causation | 1200 | 0 |
| 08 | `dat-09` | Sampling, Confidence Intervals & Hypothesis Tests | 1194 | 0 |
| 08 | `dat-10` | Data Cleaning & Missing Values | 1214 | 0 |
| 08 | `dat-11` | Visualization, Time-Series Patterns & Security Dashboards | 1187 | 0 |
| 08 | `dat-12` | Mini Project: Security Operations Analysis | 1208 | 0 |
| 09 | `mac-01` | What Machine Learning Is | 1210 | 0 |
| 09 | `mac-02` | Features, Labels & Datasets | 1189 | 0 |
| 09 | `mac-03` | Train, Validation & Test Sets | 1210 | 0 |
| 09 | `mac-04` | Linear Regression | 1207 | 0 |
| 09 | `mac-05` | Classification Fundamentals | 1207 | 0 |
| 09 | `mac-06` | Decision Trees, Ensembles & Model Interpretation | 1189 | 0 |
| 09 | `mac-07` | Nearest Neighbors & Similarity | 1189 | 0 |
| 09 | `mac-08` | Clustering, Dimensionality Reduction & Anomaly Detection | 1189 | 0 |
| 09 | `mac-09` | Precision, Recall & Confusion Matrix | 1251 | 0 |
| 09 | `mac-10` | Overfitting, Regularization & Generalization | 1208 | 0 |
| 09 | `mac-11` | Feature Leakage, Bias, Drift & Responsible Evaluation | 1210 | 0 |
| 09 | `mac-12` | Mini Project: Suspicious Login Classifier | 1274 | 0 |
| 10 | `sec-01` | Security Telemetry | 1145 | 0 |
| 10 | `sec-02` | Events, Logs & Fields | 1166 | 0 |
| 10 | `sec-03` | Normalization & Enrichment | 1145 | 0 |
| 10 | `sec-04` | Detection Hypotheses | 1145 | 0 |
| 10 | `sec-05` | Rule Logic & Thresholds | 1166 | 0 |
| 10 | `sec-06` | Authentication Analytics | 1145 | 0 |
| 10 | `sec-07` | Endpoint & Process Telemetry | 1166 | 0 |
| 10 | `sec-08` | Network Detection Concepts | 1166 | 0 |
| 10 | `sec-09` | SIEM Investigation Workflow | 1166 | 0 |
| 10 | `sec-10` | Detection Testing & False Positives | 1187 | 0 |
| 10 | `sec-11` | Threat-Informed Detection | 1166 | 0 |
| 10 | `sec-12` | Mini Project: Build an Investigation Playbook | 1229 | 0 |
| 11 | `clo-01` | Cloud Mental Model | 1170 | 0 |
| 11 | `clo-02` | Shared Responsibility | 1149 | 0 |
| 11 | `clo-03` | Cloud Identity & Least Privilege | 1191 | 0 |
| 11 | `clo-04` | Network Segmentation in Cloud | 1191 | 0 |
| 11 | `clo-05` | Storage & Data Protection | 1170 | 0 |
| 11 | `clo-06` | Secrets & Key Management | 1170 | 0 |
| 11 | `clo-07` | Workload Security: VMs, Containers & Kubernetes | 1149 | 0 |
| 11 | `clo-08` | Secure CI/CD | 1170 | 0 |
| 11 | `clo-09` | Security Testing in Pipelines | 1191 | 0 |
| 11 | `clo-10` | Infrastructure as Code, Policy & Supply-Chain Security | 1191 | 0 |
| 11 | `clo-11` | Cloud Monitoring, Detection & Incident Response | 1191 | 0 |
| 11 | `clo-12` | Mini Project: Secure Cloud Application | 1212 | 0 |
| 12 | `cyb-01` | Security as a Business Function | 1223 | 0 |
| 12 | `cyb-02` | Risk Vocabulary | 1160 | 0 |
| 12 | `cyb-03` | Asset & Business Impact | 1181 | 0 |
| 12 | `cyb-04` | Threat, Vulnerability & Control | 1181 | 0 |
| 12 | `cyb-05` | Risk Assessment | 1160 | 0 |
| 12 | `cyb-06` | Risk Treatment & Acceptance | 1181 | 0 |
| 12 | `cyb-07` | Control Design & Effectiveness | 1181 | 0 |
| 12 | `cyb-08` | Policies, Standards & Security Governance | 1160 | 0 |
| 12 | `cyb-09` | Compliance, Privacy & Audit Evidence | 1160 | 0 |
| 12 | `cyb-10` | Third-Party, Supply-Chain & Resilience Risk | 1181 | 0 |
| 12 | `cyb-11` | Security Metrics, Investment & Executive Decisions | 1202 | 0 |
| 12 | `cyb-12` | Mini Project: Enterprise Cyber Risk Register | 1244 | 0 |
| 14 | `ct-01` | Cryptographic Goals & Threat Models | 666 | 0 |
| 14 | `ct-02` | Hash Functions, Integrity & Password Storage | 682 | 0 |
| 14 | `ct-03` | Symmetric Encryption & Authenticated Encryption | 666 | 0 |
| 14 | `ct-04` | Public-Key Cryptography & Key Exchange | 682 | 0 |
| 14 | `ct-05` | Digital Signatures, Certificates & PKI | 666 | 0 |
| 14 | `ct-06` | TLS and Secure Communication | 666 | 0 |
| 14 | `ct-07` | Key Management & Cryptographic Failure Modes | 682 | 0 |
| 14 | `ct-08` | Privacy Engineering & Data Protection | 666 | 0 |
| 15 | `ae-01` | AI Security Mental Models | 682 | 0 |
| 15 | `ae-02` | Adversarial Machine Learning | 666 | 0 |
| 15 | `ae-03` | Data Poisoning, Evasion & Model Theft | 698 | 0 |
| 15 | `ae-04` | LLM Security & Prompt Injection | 682 | 0 |
| 15 | `ae-05` | AI Agents, Tools & Trust Boundaries | 698 | 0 |
| 15 | `ae-06` | Responsible AI, Privacy & Governance | 682 | 0 |
| 15 | `ae-07` | IoT, OT/ICS & Cyber-Physical Resilience | 714 | 0 |
| 15 | `ae-08` | Supply Chain & Emerging Technology Risk | 698 | 0 |
| 13 | `ent-01` | Capstone Brief & Problem Framing | 1177 | 0 |
| 13 | `ent-02` | Enterprise Asset Model | 1156 | 0 |
| 13 | `ent-03` | Threat & Trust-Boundary Mapping | 1177 | 0 |
| 13 | `ent-04` | Data & Evidence Plan | 1156 | 0 |
| 13 | `ent-05` | Security Architecture | 1135 | 0 |
| 13 | `ent-06` | Identity & Access Strategy | 1156 | 0 |
| 13 | `ent-07` | Detection & Response Strategy | 1156 | 0 |
| 13 | `ent-08` | Security Analytics Plan | 1156 | 0 |
| 13 | `ent-09` | Cloud & DevSecOps Controls | 1156 | 0 |
| 13 | `ent-10` | Risk & Investment Prioritization | 1156 | 0 |
| 13 | `ent-11` | Executive Communication | 1135 | 0 |
| 13 | `ent-12` | Final Defense & Reflection | 1156 | 0 |

## Aggregate

- Lessons scanned: 140
- Lessons with exact-repeat groups: 41
- Within-lesson repeat groups: 189
- Cross-lesson exact matches: 1847

## Action standard

Review high-word-count lessons and repeat flags. Remove only confirmed learner-facing redundancy; consolidate shared boilerplate where it does not serve a lesson-specific outcome. Preserve concepts, examples, safe practice, assessment validity, stable IDs and progression. Keep deliberate spaced retrieval. Mark paraphrase similarity for human review, not automated deletion.

## Revised sample

`cf-01` (“What Is a Computer?”) has a topic-specific authored override in `data/northstar_2_0_authored.js`. It removes repeated explanatory section bodies, clarifies glossary terms, retains the scenario and practice artifact, and shortens recap/Q&A. Render QA remains pending.

## Status

**Mechanical inventory: complete.** **Catalog-wide editorial compression: not complete.** This report does not claim that all 140 lessons were human-reviewed or rewritten.