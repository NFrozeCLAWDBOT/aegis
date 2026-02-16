import type { Obligation } from "@/types";

export const icoAiObligations: Obligation[] = [
  {
    id: "ico-1",
    frameworkId: "ico-ai-guidance",
    category: "Transparency",
    title: "AI Transparency",
    description:
      "Organisations must be transparent with individuals about how their personal data is used in AI systems, providing clear and accessible explanations of AI-driven processing.",
    fullText:
      "The ICO requires organisations to proactively inform individuals when AI is used to process their personal data. This includes explaining what data is collected, how the AI system uses it, and what outcomes or decisions may result. Transparency information must be provided in a concise, intelligible, and easily accessible form, using clear and plain language. Privacy notices should be updated to specifically address AI processing activities.",
    sourceRef: "AI and Data Protection Guidance — Transparency",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["euaia-7", "euaia-14", "ukgdpr-3"],
  },
  {
    id: "ico-2",
    frameworkId: "ico-ai-guidance",
    category: "Data Protection",
    title: "Lawful Basis for AI Processing",
    description:
      "Organisations must identify and document an appropriate lawful basis under UK GDPR before processing personal data through AI systems.",
    fullText:
      "Before deploying AI that processes personal data, organisations must identify a valid lawful basis under Article 6 of the UK GDPR. The ICO emphasises that legitimate interests assessments must account for the specific risks of AI processing, including opacity and potential for unexpected outcomes. Where special category data is involved, an additional condition under Article 9 must be identified. The chosen lawful basis must be documented and communicated to data subjects.",
    sourceRef: "AI and Data Protection Guidance — Lawful Basis",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["ukgdpr-1"],
  },
  {
    id: "ico-3",
    frameworkId: "ico-ai-guidance",
    category: "Explainability",
    title: "Meaningful Information About AI Logic",
    description:
      "Individuals must be provided with meaningful information about the logic involved in AI-driven decisions, including the factors and reasoning the system uses.",
    fullText:
      "The ICO guidance requires organisations to provide meaningful information about the logic of AI systems that process personal data. This goes beyond stating that AI is used — organisations must explain the key factors the system considers, how inputs relate to outputs, and the general reasoning process. Explanations should be tailored to the audience, using layered approaches where appropriate: a simple summary for most individuals, with more detailed technical information available on request.",
    sourceRef: "AI and Data Protection Guidance — Explainability",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["euaia-7", "ukgdpr-3"],
  },
  {
    id: "ico-4",
    frameworkId: "ico-ai-guidance",
    category: "Individual Rights",
    title: "Human Review of AI Decisions",
    description:
      "Organisations must ensure meaningful human review is available for AI-assisted decisions, particularly where those decisions have significant effects on individuals.",
    fullText:
      "Where AI systems make or support decisions that significantly affect individuals, the ICO requires organisations to implement meaningful human oversight. This means a qualified human reviewer must have the authority and ability to review the AI output, understand the reasoning, and override or alter the decision. Rubber-stamping AI outputs does not constitute meaningful human review. Organisations should document the human review process, including who conducts reviews, what information they have access to, and how overrides are recorded.",
    sourceRef: "AI and Data Protection Guidance — Human Review and Oversight",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["euaia-8", "ukgdpr-5"],
  },
  {
    id: "ico-5",
    frameworkId: "ico-ai-guidance",
    category: "Individual Rights",
    title: "Individual Rights in AI Context",
    description:
      "Organisations must ensure that data subject rights under UK GDPR can be effectively exercised in the context of AI processing, including rights of access, rectification, and erasure.",
    fullText:
      "The ICO requires that the use of AI does not diminish individuals' ability to exercise their data protection rights. This includes the right of access to personal data used in AI processing, the right to rectification of inaccurate data used by AI systems, the right to erasure where applicable, and the right to object to AI processing. Organisations must have processes in place to handle these requests within the context of AI systems, which may require the ability to identify, retrieve, and modify data within training sets and model inputs.",
    sourceRef: "AI and Data Protection Guidance — Individual Rights",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["ukgdpr-6"],
  },
  {
    id: "ico-6",
    frameworkId: "ico-ai-guidance",
    category: "Risk Assessment",
    title: "AI-Specific Data Protection Impact Assessment",
    description:
      "Organisations must conduct a DPIA before deploying AI systems that are likely to result in a high risk to individuals' rights and freedoms.",
    fullText:
      "The ICO mandates that a Data Protection Impact Assessment (DPIA) be carried out for AI processing that is likely to result in a high risk to individuals. AI-specific DPIAs should assess the necessity and proportionality of the processing, identify and evaluate risks arising from the use of AI (including bias, inaccuracy, and opacity), and define measures to mitigate those risks. The DPIA must be conducted before the AI system is deployed and should be reviewed and updated as the system evolves. Consultation with the ICO may be required where residual risks remain high.",
    sourceRef: "AI and Data Protection Guidance — DPIAs for AI",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["ukgdpr-4", "euaia-17", "nist-4"],
  },
  {
    id: "ico-7",
    frameworkId: "ico-ai-guidance",
    category: "Data Protection",
    title: "Privacy by Design in AI Systems",
    description:
      "AI systems must be designed and built with data protection principles embedded from the outset, implementing appropriate technical and organisational measures.",
    fullText:
      "The ICO requires organisations to apply data protection by design and by default when developing or deploying AI systems. This means integrating data minimisation, purpose limitation, and storage limitation into the AI system architecture. Technical measures such as anonymisation, pseudonymisation, and access controls should be built into the AI pipeline. Organisations should consider privacy implications at every stage of the AI lifecycle — from data collection and model training through to deployment and decommissioning. Default settings should ensure the minimum amount of personal data is processed.",
    sourceRef: "AI and Data Protection Guidance — Data Protection by Design",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["ukgdpr-7", "ukgdpr-12", "nist-1"],
  },
  {
    id: "ico-8",
    frameworkId: "ico-ai-guidance",
    category: "Fairness",
    title: "Statistical Accuracy and Bias Testing",
    description:
      "Organisations must test AI systems for statistical accuracy and bias, ensuring outputs do not produce discriminatory or unfair results.",
    fullText:
      "The ICO requires organisations to assess and monitor AI systems for statistical accuracy and the presence of bias. This includes testing for disparate impact across protected characteristics, validating that training data is representative and free from historical bias, and monitoring model performance over time for drift or emerging bias. Organisations should use appropriate fairness metrics, document testing methodologies and results, and take corrective action where bias is identified. Regular re-evaluation is required as AI systems learn and adapt.",
    sourceRef: "AI and Data Protection Guidance — Fairness in AI",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
    ],
    crossReferences: ["nist-7", "eqa-5"],
  },
  {
    id: "ico-9",
    frameworkId: "ico-ai-guidance",
    category: "Accountability",
    title: "Accountability Framework for AI",
    description:
      "Organisations must establish and maintain a comprehensive accountability framework demonstrating compliance with data protection requirements in AI systems.",
    fullText:
      "The ICO expects organisations to implement a robust accountability framework for AI processing. This includes maintaining records of AI processing activities, documenting the decision-making process for deploying AI, assigning clear roles and responsibilities for AI governance, conducting regular reviews and audits of AI systems, and training staff involved in AI processing on their data protection obligations. Senior leadership must take ownership of AI compliance, and organisations should be able to demonstrate compliance to the ICO upon request.",
    sourceRef: "AI and Data Protection Guidance — Accountability and Governance",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
    ],
    crossReferences: ["nist-1", "nist-2"],
  },
  {
    id: "ico-10",
    frameworkId: "ico-ai-guidance",
    category: "Accountability",
    title: "Third-Party AI Audit and Oversight",
    description:
      "Organisations should consider independent third-party auditing of AI systems to verify compliance and build public trust.",
    fullText:
      "The ICO recommends that organisations engage independent third-party auditors to assess AI systems for compliance with data protection law and broader ethical standards. Third-party audits can evaluate the fairness, accuracy, and transparency of AI systems from an independent perspective. Organisations using third-party AI tools or services must conduct due diligence on the supplier, establish clear contractual obligations regarding data protection, and maintain oversight of the third-party AI processing. Audit findings should be documented and acted upon, with remediation plans for any identified issues.",
    sourceRef: "AI and Data Protection Guidance — AI Auditing Framework",
    sourceUrl:
      "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
    ],
    crossReferences: ["nist-8", "owasp-9"],
  },
];
