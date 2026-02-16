import type { Framework } from "@/types";

export const frameworks: Framework[] = [
  {
    id: "eu-ai-act",
    name: "EU Artificial Intelligence Act",
    shortName: "EU AI Act",
    jurisdiction: "EU",
    source: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    description:
      "The EU AI Act establishes a comprehensive regulatory framework for AI systems based on a risk-tiered approach. It imposes obligations ranging from transparency requirements to strict prohibitions depending on the AI system's risk classification.",
    lastUpdated: "2024-08-01",
  },
  {
    id: "uk-gdpr",
    name: "UK General Data Protection Regulation / Data Protection Act 2018",
    shortName: "UK GDPR",
    jurisdiction: "UK",
    source: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
    description:
      "The UK GDPR and Data Protection Act 2018 govern the processing of personal data in the UK, including provisions for automated decision-making, data protection impact assessments, and data subject rights.",
    lastUpdated: "2024-01-01",
  },
  {
    id: "ico-ai-guidance",
    name: "ICO Guidance on AI and Data Protection",
    shortName: "ICO AI Guidance",
    jurisdiction: "UK",
    source: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    description:
      "The Information Commissioner's Office provides detailed guidance on how data protection law applies to AI systems, covering transparency, fairness, accountability, and individual rights in AI-driven processing.",
    lastUpdated: "2024-06-01",
  },
  {
    id: "nist-ai-rmf",
    name: "NIST Artificial Intelligence Risk Management Framework (AI 100-1)",
    shortName: "NIST AI RMF",
    jurisdiction: "International",
    source: "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    description:
      "The NIST AI Risk Management Framework provides a structured approach for managing risks associated with AI systems through four core functions: Govern, Map, Measure, and Manage.",
    lastUpdated: "2024-04-29",
  },
  {
    id: "owasp-genai",
    name: "OWASP Top 10 for LLM Applications & GenAI Governance Checklist",
    shortName: "OWASP GenAI",
    jurisdiction: "International",
    source: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    description:
      "The OWASP project provides security governance guidance for generative AI and large language model applications, covering prompt injection, data poisoning, supply chain risks, and more.",
    lastUpdated: "2025-11-01",
  },
  {
    id: "uk-equality-act",
    name: "UK Equality Act 2010",
    shortName: "Equality Act",
    jurisdiction: "UK",
    source: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
    description:
      "The Equality Act 2010 protects individuals from discrimination based on protected characteristics. AI systems making decisions about individuals must comply with its provisions on direct and indirect discrimination, and reasonable adjustments.",
    lastUpdated: "2024-01-01",
  },
];
