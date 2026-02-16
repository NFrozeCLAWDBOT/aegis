import type { GapTemplate } from "@/types";

export const gapTemplates: GapTemplate[] = [
  {
    riskArea: "Environmental Impact Assessment",
    description:
      "No covered framework requires an assessment of the environmental impact of training or operating the AI system, including energy consumption and carbon footprint.",
    severity: "medium",
    checkCondition: () => true, // Always a gap — no framework covers this
    affectedFrameworks: [
      "eu-ai-act",
      "uk-gdpr",
      "ico-ai-guidance",
      "nist-ai-rmf",
      "owasp-genai",
      "uk-equality-act",
    ],
  },
  {
    riskArea: "AI Liability and Redress",
    description:
      "None of the covered frameworks establish a clear liability regime or redress mechanism for individuals harmed by AI system outputs or decisions.",
    severity: "high",
    checkCondition: (answers) =>
      answers.automatedDecisions === "legal-significant-effects" ||
      answers.automatedDecisions === "supports-human-decisions",
    affectedFrameworks: [
      "eu-ai-act",
      "uk-gdpr",
      "uk-equality-act",
    ],
  },
  {
    riskArea: "AI System Decommissioning",
    description:
      "No framework provides guidance on safely decommissioning an AI system, including data disposal, model deletion, and stakeholder notification.",
    severity: "low",
    checkCondition: () => true,
    affectedFrameworks: [
      "eu-ai-act",
      "nist-ai-rmf",
      "owasp-genai",
    ],
  },
  {
    riskArea: "Cross-Border Regulatory Conflict Resolution",
    description:
      "When UK and EU requirements conflict (e.g., differing risk classifications or transparency standards), no framework provides a mechanism for resolving the conflict.",
    severity: "high",
    checkCondition: (answers) => answers.geography === "uk-and-eu",
    affectedFrameworks: [
      "eu-ai-act",
      "uk-gdpr",
      "ico-ai-guidance",
    ],
  },
  {
    riskArea: "Generative AI Content Provenance",
    description:
      "While the EU AI Act requires labelling of AI-generated content, no comprehensive content provenance or watermarking standard is mandated across frameworks.",
    severity: "medium",
    checkCondition: (answers) => answers.systemType === "generative-ai",
    affectedFrameworks: [
      "eu-ai-act",
      "owasp-genai",
    ],
  },
  {
    riskArea: "Continuous Model Drift Monitoring",
    description:
      "No framework specifies detailed requirements for detecting and responding to model drift over time, where AI system accuracy degrades as real-world data distributions change.",
    severity: "medium",
    checkCondition: (answers) =>
      answers.systemType === "predictive-ml" ||
      answers.systemType === "classification" ||
      answers.systemType === "recommendation",
    affectedFrameworks: [
      "nist-ai-rmf",
      "eu-ai-act",
      "ico-ai-guidance",
    ],
  },
  {
    riskArea: "Worker Consultation on AI Deployment",
    description:
      "No framework requires formal consultation with workers or their representatives before deploying AI systems that affect working conditions or employment decisions.",
    severity: "medium",
    checkCondition: (answers) => answers.sector === "employment-hr",
    affectedFrameworks: [
      "eu-ai-act",
      "uk-equality-act",
    ],
  },
  {
    riskArea: "Children and Vulnerable Users Protection",
    description:
      "While some frameworks mention vulnerable groups, none provide specific requirements for AI systems that may interact with or affect children and vulnerable individuals.",
    severity: "high",
    checkCondition: (answers) =>
      answers.sector === "education" || answers.sector === "public-services",
    affectedFrameworks: [
      "eu-ai-act",
      "uk-gdpr",
      "uk-equality-act",
    ],
  },
];
