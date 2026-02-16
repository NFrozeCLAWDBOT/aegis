import type { Obligation } from "@/types";

export const owaspGenaiObligations: Obligation[] = [
  {
    id: "owasp-1",
    frameworkId: "owasp-genai",
    category: "Security",
    title: "Prompt Injection Prevention",
    description:
      "Implement controls to detect and prevent prompt injection attacks where adversarial inputs manipulate the LLM into executing unintended actions or disclosing sensitive information.",
    fullText:
      "Organisations must implement input validation, prompt hardening, and privilege separation to prevent direct and indirect prompt injection attacks. This includes sanitising user inputs before they reach the model, enforcing system prompt integrity, and ensuring the LLM cannot be manipulated into bypassing access controls or executing unintended instructions through crafted inputs.",
    sourceRef: "LLM01",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
    ],
    crossReferences: ["euaia-9"],
  },
  {
    id: "owasp-2",
    frameworkId: "owasp-genai",
    category: "Output Validation",
    title: "Insecure Output Handling",
    description:
      "Validate and sanitise all LLM outputs before passing them to downstream components, APIs, or rendering them to users to prevent injection and code execution vulnerabilities.",
    fullText:
      "LLM outputs must be treated as untrusted content. Organisations must implement output encoding, validation, and sanitisation before LLM-generated content is rendered in web interfaces, passed to backend systems, or used in code execution contexts. Failure to do so can result in cross-site scripting, server-side request forgery, privilege escalation, or remote code execution in downstream systems.",
    sourceRef: "LLM02",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
    ],
    crossReferences: [],
  },
  {
    id: "owasp-3",
    frameworkId: "owasp-genai",
    category: "Data Protection",
    title: "Training Data Poisoning Prevention",
    description:
      "Establish safeguards to ensure the integrity of training data and fine-tuning datasets, preventing adversarial manipulation that could compromise model behaviour.",
    fullText:
      "Organisations must verify the provenance and integrity of all training and fine-tuning data. This includes implementing data validation pipelines, anomaly detection on training datasets, maintaining auditable data lineage records, and using sandboxed environments for fine-tuning. Poisoned training data can introduce biases, backdoors, or cause the model to produce harmful or inaccurate outputs.",
    sourceRef: "LLM03",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
    ],
    crossReferences: ["euaia-4"],
  },
  {
    id: "owasp-4",
    frameworkId: "owasp-genai",
    category: "Security",
    title: "Model Denial of Service Protection",
    description:
      "Implement rate limiting, resource management, and input size controls to prevent denial of service attacks that exploit LLM resource consumption.",
    fullText:
      "Organisations must deploy controls to prevent attackers from consuming excessive computational resources through crafted inputs that trigger abnormally high processing costs. This includes setting input token limits, implementing request rate limiting, applying resource caps per user or session, monitoring for unusual consumption patterns, and queuing or throttling requests to maintain service availability.",
    sourceRef: "LLM04",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
    ],
    crossReferences: [],
  },
  {
    id: "owasp-5",
    frameworkId: "owasp-genai",
    category: "Supply Chain",
    title: "Supply Chain Vulnerability Management",
    description:
      "Assess and manage risks in the AI supply chain, including third-party models, training data sources, plugins, and deployment platforms.",
    fullText:
      "Organisations must maintain an inventory of all third-party components in their AI supply chain, including pre-trained models, fine-tuning datasets, plugins, and hosting infrastructure. Conduct due diligence on model providers, verify model integrity using checksums or signatures, monitor for known vulnerabilities in dependencies, and establish contractual security requirements with suppliers. Supply chain compromises can introduce backdoors or vulnerabilities into production systems.",
    sourceRef: "LLM05",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [],
    crossReferences: ["nist-8"],
  },
  {
    id: "owasp-6",
    frameworkId: "owasp-genai",
    category: "Data Protection",
    title: "Sensitive Information Disclosure Prevention",
    description:
      "Prevent the LLM from revealing sensitive data, personal information, or proprietary content through its outputs, whether from training data memorisation or context window leakage.",
    fullText:
      "Organisations must implement controls to prevent LLMs from disclosing sensitive information including personal data, credentials, proprietary business logic, or confidential training data. This requires data sanitisation in training pipelines, output filtering for sensitive patterns, access controls on retrieval-augmented generation data sources, and monitoring for data leakage. Particular attention must be paid to memorisation of personal data from training corpora and leakage of context from other user sessions.",
    sourceRef: "LLM06",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["ukgdpr-8"],
  },
  {
    id: "owasp-7",
    frameworkId: "owasp-genai",
    category: "Security",
    title: "Insecure Plugin and Extension Design",
    description:
      "Ensure that LLM plugins, tools, and extensions follow secure design principles with proper authentication, authorisation, and input validation.",
    fullText:
      "Organisations deploying LLMs with plugin or tool-use capabilities must enforce least-privilege access for each plugin, validate all inputs passed from the LLM to plugins, implement proper authentication between the LLM and external services, and prevent plugins from performing actions beyond their intended scope. Insecure plugin design can allow attackers to leverage the LLM as a proxy to access internal systems, exfiltrate data, or execute unauthorised actions.",
    sourceRef: "LLM07",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
    ],
    crossReferences: [],
  },
  {
    id: "owasp-8",
    frameworkId: "owasp-genai",
    category: "Governance",
    title: "Excessive Agency Prevention",
    description:
      "Limit the autonomy and permissions granted to LLM-based agents to prevent unintended or harmful actions, ensuring human oversight of consequential decisions.",
    fullText:
      "Organisations must constrain the scope of actions an LLM can autonomously perform by implementing least-privilege access controls, requiring human approval for high-impact actions, logging all agent-initiated operations, and setting clear boundaries on what the system can do without human intervention. This is particularly critical for agentic AI systems that can chain actions, call APIs, or modify data. Excessive agency creates risks of unintended consequences, financial loss, or safety incidents.",
    sourceRef: "LLM08",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
    ],
    crossReferences: ["euaia-8", "nist-11", "ukgdpr-8"],
  },
  {
    id: "owasp-9",
    frameworkId: "owasp-genai",
    category: "Governance",
    title: "Overreliance Mitigation",
    description:
      "Implement measures to prevent users from placing excessive trust in LLM outputs, including disclaimers, confidence indicators, and human verification workflows.",
    fullText:
      "Organisations must communicate the limitations of LLM outputs to end users and implement processes to mitigate overreliance on AI-generated content. This includes displaying clear disclaimers that outputs may be inaccurate, providing confidence scores where feasible, establishing mandatory human review for high-stakes outputs, training users on appropriate reliance levels, and implementing fact-checking mechanisms. Overreliance can lead to the propagation of hallucinated information, flawed decision-making, and legal liability.",
    sourceRef: "LLM09",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai", "nlp"],
      },
    ],
    crossReferences: ["ico-10", "nist-9"],
  },
  {
    id: "owasp-10",
    frameworkId: "owasp-genai",
    category: "Access Control",
    title: "Model Access Control and Inventory",
    description:
      "Maintain a comprehensive inventory of all AI models in use and enforce strict access controls governing who can interact with, modify, or deploy models.",
    fullText:
      "Organisations must maintain an up-to-date registry of all AI and LLM models deployed across the organisation, including model versions, training data provenance, deployment environments, and access permissions. Access to models must be governed by role-based access controls, with authentication required for all model endpoints. Logging and monitoring must capture all model interactions, and decommissioned models must be properly retired. This governance layer is essential for security auditability, incident response, and regulatory compliance.",
    sourceRef: "LLM10 / GOV-01",
    sourceUrl:
      "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    appliesWhen: [],
    crossReferences: ["nist-1"],
  },
];
