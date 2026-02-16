import type { Obligation } from "@/types";

export const nistAiRmfObligations: Obligation[] = [
  {
    id: "nist-1",
    frameworkId: "nist-ai-rmf",
    category: "Govern",
    title: "AI Governance Policies and Procedures",
    description:
      "Establish and maintain organisational policies and procedures for AI risk management, including defining acceptable risk thresholds, resource allocation, and accountability structures.",
    fullText:
      "Policies, processes, procedures, and practices across the organisation related to the mapping, measuring, and managing of AI risks are in place, transparent, and implemented effectively. Organisational policies and procedures should articulate and formalise AI risk management commitments, set expectations for behaviour, and establish governance structures.",
    sourceRef: "GOVERN 1",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["ico-9", "ukgdpr-7", "ukgdpr-10"],
  },
  {
    id: "nist-2",
    frameworkId: "nist-ai-rmf",
    category: "Govern",
    title: "AI Risk Management Roles and Responsibilities",
    description:
      "Define clear roles, responsibilities, and lines of authority for AI risk management across the organisation, ensuring accountability at all levels.",
    fullText:
      "Roles and responsibilities and lines of authority related to mapping, measuring, and managing AI risks are documented and are clear to individuals and teams within the organisation. Accountability structures should ensure that appropriate personnel have the authority and resources to manage AI risks effectively.",
    sourceRef: "GOVERN 2",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["ico-9"],
  },
  {
    id: "nist-3",
    frameworkId: "nist-ai-rmf",
    category: "Map",
    title: "AI System Context and Use-Case Mapping",
    description:
      "Establish the context for AI system deployment by identifying intended purposes, expected benefits, potential costs, and the operational environment in which the system will function.",
    fullText:
      "Context is established and understood. The intended purposes, potentially beneficial uses, context-specific laws and norms, and prospective settings in which the AI system will be deployed are understood. Use-case mapping identifies the operational boundaries and constraints of the AI system within its deployment context.",
    sourceRef: "MAP 1",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-3"],
  },
  {
    id: "nist-4",
    frameworkId: "nist-ai-rmf",
    category: "Map",
    title: "AI Impact Assessment",
    description:
      "Categorise and assess potential impacts of the AI system on individuals, groups, communities, organisations, and society, considering both intended and unintended consequences.",
    fullText:
      "Categorisation of the AI system is performed. Potential impacts on individuals, groups, communities, organisations, and society are assessed. The assessment should address benefits, risks, and potential harms across multiple dimensions including fairness, privacy, safety, security, and societal wellbeing. Impact assessments should be revisited periodically or when the system changes significantly.",
    sourceRef: "MAP 2",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-17", "ukgdpr-4", "ico-6"],
  },
  {
    id: "nist-5",
    frameworkId: "nist-ai-rmf",
    category: "Map",
    title: "Stakeholder Identification and Engagement",
    description:
      "Identify and engage relevant stakeholders throughout the AI system lifecycle, including affected individuals, domain experts, and oversight bodies.",
    fullText:
      "AI system stakeholders are identified and engaged. Stakeholders who are affected by or can influence the AI system are identified, and their feedback is incorporated into risk management processes. Engagement strategies should be inclusive, ongoing, and proportional to the potential impact of the AI system on different stakeholder groups.",
    sourceRef: "MAP 3",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: [],
  },
  {
    id: "nist-6",
    frameworkId: "nist-ai-rmf",
    category: "Map",
    title: "AI Risk Identification and Documentation",
    description:
      "Identify, enumerate, and document the risks associated with the AI system, including risks related to bias, security, reliability, and misuse across the system lifecycle.",
    fullText:
      "Risks associated with the AI system, including risks from third-party components, are identified and documented. Risk identification should be comprehensive, covering technical risks such as bias, accuracy degradation, and security vulnerabilities, as well as socio-technical risks such as misuse, over-reliance, and erosion of trust. Identified risks should be recorded and tracked throughout the system lifecycle.",
    sourceRef: "MAP 5",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-3"],
  },
  {
    id: "nist-7",
    frameworkId: "nist-ai-rmf",
    category: "Measure",
    title: "AI Performance Measurement and Monitoring",
    description:
      "Establish and apply quantitative and qualitative metrics to measure AI system performance, including accuracy, fairness, robustness, and reliability over time.",
    fullText:
      "Appropriate methods and metrics are identified and applied to measure AI risks and system performance. Measurement approaches should be valid, reliable, and relevant to the identified risks and the context of deployment. Ongoing monitoring tracks system behaviour and performance against established benchmarks and thresholds.",
    sourceRef: "MEASURE 1",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-9", "ico-8"],
  },
  {
    id: "nist-8",
    frameworkId: "nist-ai-rmf",
    category: "Measure",
    title: "AI System Evaluation and Validation",
    description:
      "Evaluate and validate AI systems using rigorous testing methodologies, including pre-deployment testing, red-teaming, and independent assessment to ensure systems perform as intended.",
    fullText:
      "AI systems are evaluated and validated for trustworthy characteristics. Evaluation includes testing for accuracy, fairness, robustness, safety, security, interpretability, privacy, and resilience. Validation processes should include independent review, red-teaming exercises, and stress testing under adversarial conditions to identify failure modes before deployment.",
    sourceRef: "MEASURE 2",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-9", "owasp-5"],
  },
  {
    id: "nist-9",
    frameworkId: "nist-ai-rmf",
    category: "Measure",
    title: "Third-Party AI Risk Assessment",
    description:
      "Assess and manage risks introduced by third-party AI components, datasets, and services integrated into the AI system, including supply chain risks.",
    fullText:
      "Mechanisms for tracking identified AI risks over time are in place, including risks associated with third-party entities. Organisations should evaluate third-party AI components, models, data, and services for trustworthiness. Risk assessments should cover supply chain integrity, data provenance, model transparency, and the third party's own risk management practices.",
    sourceRef: "MEASURE 3",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["ico-10", "owasp-9"],
  },
  {
    id: "nist-10",
    frameworkId: "nist-ai-rmf",
    category: "Manage",
    title: "Risk Response and Mitigation",
    description:
      "Develop and implement risk treatment plans that prioritise and address identified AI risks through avoidance, mitigation, transfer, or acceptance strategies.",
    fullText:
      "AI risks based on assessments and other analytical output from the Map and Measure functions are prioritised, responded to, and managed. Risk treatment strategies should be proportional to the severity and likelihood of identified risks. Mitigation actions should be documented, tracked, and verified for effectiveness, with residual risks communicated to relevant stakeholders.",
    sourceRef: "MANAGE 1",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-8"],
  },
  {
    id: "nist-11",
    frameworkId: "nist-ai-rmf",
    category: "Manage",
    title: "AI Incident Response Planning",
    description:
      "Establish and maintain incident response plans for AI system failures, unexpected behaviours, security breaches, and other adverse events, including escalation procedures and communication protocols.",
    fullText:
      "Strategies to maximise AI benefits and minimise negative impacts are planned, prepared, implemented, documented, and informed by input from relevant AI actors. Incident response plans should define procedures for detecting, reporting, escalating, and remediating AI-related incidents. Plans should include predefined response actions, roles, communication protocols, and post-incident review processes.",
    sourceRef: "MANAGE 2",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-19", "owasp-8", "ukgdpr-8"],
  },
  {
    id: "nist-12",
    frameworkId: "nist-ai-rmf",
    category: "Manage",
    title: "Post-Deployment Monitoring",
    description:
      "Continuously monitor AI systems after deployment to detect performance degradation, emerging risks, data drift, and changing operational conditions that may affect system trustworthiness.",
    fullText:
      "AI risks and benefits from third-party resources are regularly monitored, and risk treatment is applied and documented. Post-deployment monitoring should track system performance, detect anomalies and drift, and trigger re-evaluation when predefined thresholds are exceeded. Monitoring outputs should feed back into the Map and Measure functions to enable continuous risk management.",
    sourceRef: "MANAGE 3",
    sourceUrl:
      "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    appliesWhen: [],
    crossReferences: ["euaia-18"],
  },
];
