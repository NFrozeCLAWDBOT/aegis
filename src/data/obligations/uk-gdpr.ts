import type { Obligation } from "@/types";

export const ukGdprObligations: Obligation[] = [
  {
    id: "ukgdpr-1",
    frameworkId: "uk-gdpr",
    category: "Data Protection",
    title: "Lawful Basis for Processing",
    description:
      "Organisations must identify and document a valid lawful basis before processing personal data. At least one of the six lawful bases under Article 6 must apply to every processing activity.",
    fullText:
      "Processing of personal data is lawful only if and to the extent that at least one of the following applies: consent, performance of a contract, legal obligation, vital interests, public task, or legitimate interests. The controller must be able to demonstrate which lawful basis applies and must document this before processing begins.",
    sourceRef: "Article 6",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["ico-2"],
  },
  {
    id: "ukgdpr-2",
    frameworkId: "uk-gdpr",
    category: "Data Protection",
    title: "Special Category Data Safeguards",
    description:
      "Processing of special category data (racial or ethnic origin, political opinions, religious beliefs, health data, biometric data, etc.) is prohibited unless a specific condition under Article 9 is met.",
    fullText:
      "Processing of special categories of personal data is prohibited unless the controller can rely on one of the conditions in Article 9(2), such as explicit consent, employment law obligations, vital interests, or substantial public interest. Additional safeguards under Schedule 1 of the DPA 2018 apply, including the requirement for an appropriate policy document.",
    sourceRef: "Article 9",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["eqa-3"],
  },
  {
    id: "ukgdpr-3",
    frameworkId: "uk-gdpr",
    category: "Transparency",
    title: "Transparency and Privacy Information",
    description:
      "Data subjects must be provided with clear, concise, and accessible information about how their personal data is collected, used, and shared, at the point of collection or as soon as reasonably practicable.",
    fullText:
      "Where personal data is collected from the data subject (Article 13) or obtained from other sources (Article 14), the controller must provide information including: the identity and contact details of the controller, the purposes and lawful basis for processing, recipients or categories of recipients, retention periods, and the data subject's rights. This information must be provided in a concise, transparent, intelligible, and easily accessible form, using clear and plain language.",
    sourceRef: "Articles 13-14",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["euaia-7", "euaia-14", "ico-1", "ico-3"],
  },
  {
    id: "ukgdpr-4",
    frameworkId: "uk-gdpr",
    category: "Risk Assessment",
    title: "Data Protection Impact Assessment for High-Risk Processing",
    description:
      "A Data Protection Impact Assessment (DPIA) must be carried out before any processing that is likely to result in a high risk to the rights and freedoms of individuals, including systematic profiling and large-scale processing of special category data.",
    fullText:
      "Where a type of processing, in particular using new technologies and taking into account the nature, scope, context, and purposes of the processing, is likely to result in a high risk to the rights and freedoms of natural persons, the controller shall, prior to the processing, carry out an assessment of the impact of the envisaged processing operations on the protection of personal data. A DPIA must include a systematic description of processing operations, assessment of necessity and proportionality, assessment of risks to rights and freedoms, and measures to address those risks.",
    sourceRef: "Article 35",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["euaia-17", "ico-6", "nist-4"],
  },
  {
    id: "ukgdpr-5",
    frameworkId: "uk-gdpr",
    category: "Automated Decision-Making",
    title: "Rights Related to Automated Decision-Making",
    description:
      "Data subjects have the right not to be subject to decisions based solely on automated processing, including profiling, which produce legal effects or similarly significant effects on them, unless specific conditions are met.",
    fullText:
      "The data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning them or similarly significantly affects them. This does not apply if the decision is necessary for a contract, authorised by law, or based on explicit consent. In those cases, the controller must implement suitable measures to safeguard the data subject's rights, freedoms, and legitimate interests, including at least the right to obtain human intervention, to express their point of view, and to contest the decision.",
    sourceRef: "Article 22",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects"],
      },
    ],
    crossReferences: ["euaia-8", "ico-4", "eqa-1"],
  },
  {
    id: "ukgdpr-6",
    frameworkId: "uk-gdpr",
    category: "Individual Rights",
    title: "Data Subject Access Rights",
    description:
      "Data subjects have a suite of rights including the right to access their personal data, obtain copies of it, request rectification or erasure, restrict processing, data portability, and the right to object to processing.",
    fullText:
      "Controllers must facilitate the exercise of data subject rights under Articles 15-20. The right of access (Article 15) requires confirmation of whether personal data is being processed and a copy of that data. The right to rectification (Article 16) allows correction of inaccurate data. The right to erasure (Article 17) permits deletion in certain circumstances. The right to restriction (Article 18), data portability (Article 20), and the right to object (Article 21) must also be honoured. Requests must be responded to without undue delay and within one month.",
    sourceRef: "Articles 15-20",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["ico-5"],
  },
  {
    id: "ukgdpr-7",
    frameworkId: "uk-gdpr",
    category: "Accountability",
    title: "Privacy by Design and Default",
    description:
      "Controllers must implement appropriate technical and organisational measures to integrate data protection into processing activities from the design stage, and ensure that, by default, only personal data necessary for each specific purpose is processed.",
    fullText:
      "Taking into account the state of the art, the cost of implementation, and the nature, scope, context, and purposes of processing, the controller shall implement appropriate technical and organisational measures designed to implement data protection principles in an effective manner and integrate safeguards into processing. The controller shall implement appropriate measures for ensuring that, by default, only personal data which are necessary for each specific purpose of the processing are processed, with regard to the amount of data collected, the extent of processing, the period of storage, and accessibility.",
    sourceRef: "Article 25",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["nist-1", "ico-7"],
  },
  {
    id: "ukgdpr-8",
    frameworkId: "uk-gdpr",
    category: "Data Security",
    title: "Data Breach Notification",
    description:
      "Personal data breaches must be reported to the ICO within 72 hours of becoming aware of the breach, unless it is unlikely to result in a risk to individuals. Where the breach is likely to result in a high risk, affected data subjects must also be notified.",
    fullText:
      "In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the Information Commissioner, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons. Where notification is not made within 72 hours, it shall be accompanied by reasons for the delay. Where the breach is likely to result in a high risk to the rights and freedoms of natural persons, the controller shall communicate the breach to the data subject without undue delay.",
    sourceRef: "Article 33",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["euaia-19", "owasp-8"],
  },
  {
    id: "ukgdpr-9",
    frameworkId: "uk-gdpr",
    category: "Record-Keeping",
    title: "Records of Processing Activities",
    description:
      "Controllers and processors must maintain written records of their processing activities, including purposes of processing, categories of data subjects and personal data, recipients, international transfers, retention periods, and security measures.",
    fullText:
      "Each controller shall maintain a record of processing activities under its responsibility. That record shall contain the name and contact details of the controller, purposes of processing, description of categories of data subjects and categories of personal data, categories of recipients, transfers to third countries, envisaged time limits for erasure, and a general description of technical and organisational security measures. The obligation applies to organisations with 250 or more employees, or where processing is likely to result in a risk to rights and freedoms, is not occasional, or includes special categories of data or criminal conviction data.",
    sourceRef: "Article 30",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["euaia-6"],
  },
  {
    id: "ukgdpr-10",
    frameworkId: "uk-gdpr",
    category: "Accountability",
    title: "Data Protection Officer Designation",
    description:
      "Organisations must designate a Data Protection Officer (DPO) where their core activities involve regular and systematic monitoring of data subjects on a large scale, or large-scale processing of special category data.",
    fullText:
      "The controller and the processor shall designate a Data Protection Officer in any case where: (a) the processing is carried out by a public authority or body; (b) the core activities of the controller or processor consist of processing operations which require regular and systematic monitoring of data subjects on a large scale; or (c) the core activities consist of processing on a large scale of special categories of data or personal data relating to criminal convictions and offences. The DPO must be provided with resources necessary to carry out their tasks and to maintain expert knowledge, and must report to the highest management level.",
    sourceRef: "Article 37",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["nist-1"],
  },
  {
    id: "ukgdpr-11",
    frameworkId: "uk-gdpr",
    category: "Data Protection",
    title: "International Data Transfers",
    description:
      "Personal data may only be transferred to a country outside the UK if that country ensures an adequate level of data protection, or if appropriate safeguards are in place such as Standard Contractual Clauses or Binding Corporate Rules.",
    fullText:
      "A transfer of personal data to a third country or an international organisation shall take place only if the Secretary of State has made adequacy regulations in respect of that country or organisation (Article 45), or in the absence of adequacy regulations, the controller or processor has provided appropriate safeguards including legally binding instruments, binding corporate rules, standard data protection clauses, approved codes of conduct, or approved certification mechanisms (Articles 46-47). Derogations for specific situations are set out in Article 49, including explicit consent, contractual necessity, important reasons of public interest, and legal claims.",
    sourceRef: "Articles 44-49",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
    appliesWhen: [
      {
        field: "geography",
        operator: "equals",
        value: "uk-and-eu",
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: [],
  },
  {
    id: "ukgdpr-12",
    frameworkId: "uk-gdpr",
    category: "Data Protection",
    title: "Data Minimisation",
    description:
      "Personal data must be adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed. Organisations must not collect or retain more data than is needed.",
    fullText:
      "Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed (data minimisation). This principle requires controllers to ensure they do not collect more personal data than is needed for the specified purpose, do not hold data longer than necessary, and periodically review the data they hold to check it is still relevant and adequate. When using AI systems, controllers must consider whether the volume and granularity of training data is proportionate to the processing purpose and whether anonymisation or pseudonymisation techniques can reduce the amount of personal data processed.",
    sourceRef: "Article 5(1)(c)",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
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
    crossReferences: ["euaia-4", "ico-7"],
  },
];
