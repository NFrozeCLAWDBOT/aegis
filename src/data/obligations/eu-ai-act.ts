import type { Obligation } from "@/types";

export const euAiActObligations: Obligation[] = [
  // 1. Prohibited AI practices (social scoring, manipulative techniques, etc.) - Article 5 - unacceptable
  {
    id: "euaia-1",
    frameworkId: "eu-ai-act",
    category: "Prohibited Practices",
    title: "Prohibition of Unacceptable AI Practices",
    description:
      "AI systems that deploy subliminal or manipulative techniques, exploit vulnerabilities, perform social scoring, or use real-time remote biometric identification in public spaces (with limited exceptions) are prohibited.",
    fullText:
      "The placing on the market, putting into service, or use of AI systems that deploy subliminal, manipulative, or deceptive techniques to materially distort behaviour causing significant harm, exploit vulnerabilities of specific groups, evaluate or classify persons based on social behaviour leading to unjustified detrimental treatment (social scoring), or carry out untargeted scraping of facial images, are prohibited.",
    sourceRef: "Article 5",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "unacceptable",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
    ],
    crossReferences: ["eqa-1", "owasp-3", "ukgdpr-7"],
  },

  // 2. Risk classification system - Article 6 - high
  {
    id: "euaia-2",
    frameworkId: "eu-ai-act",
    category: "Risk Assessment",
    title: "Classification of High-Risk AI Systems",
    description:
      "AI systems must be classified according to the risk-based framework. Systems listed in Annex III or used as safety components of products covered by Annex I are classified as high-risk and subject to mandatory requirements.",
    fullText:
      "An AI system shall be considered high-risk where it is a safety component of a product covered by Union harmonisation legislation listed in Annex I, or is itself such a product, and is required to undergo a third-party conformity assessment. AI systems referred to in Annex III, covering areas such as biometrics, critical infrastructure, education, employment, essential services, law enforcement, and migration, shall also be considered high-risk.",
    sourceRef: "Article 6",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["nist-2", "ico-2"],
  },

  // 3. Risk management system for high-risk AI - Article 9 - high
  {
    id: "euaia-3",
    frameworkId: "eu-ai-act",
    category: "Risk Assessment",
    title: "Establishment of a Risk Management System",
    description:
      "Providers of high-risk AI systems must establish, implement, document, and maintain a continuous iterative risk management system throughout the entire lifecycle of the AI system.",
    fullText:
      "A risk management system shall be established, implemented, documented and maintained in relation to high-risk AI systems. It shall be a continuous iterative process planned and run throughout the entire lifecycle of a high-risk AI system, requiring regular systematic review and updating. It shall identify and analyse known and reasonably foreseeable risks, estimate and evaluate risks that may emerge, and adopt appropriate and targeted risk management measures.",
    sourceRef: "Article 9",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["nist-1", "nist-2", "owasp-1", "ico-2"],
  },

  // 4. Data governance for training data - Article 10 - high
  {
    id: "euaia-4",
    frameworkId: "eu-ai-act",
    category: "Data Governance",
    title: "Data and Data Governance for Training, Validation, and Testing",
    description:
      "High-risk AI systems using data-driven training must be developed with training, validation, and testing datasets that meet quality criteria including relevance, representativeness, freedom from errors, and completeness.",
    fullText:
      "High-risk AI systems which make use of techniques involving the training of AI models with data shall be developed on the basis of training, validation and testing data sets that meet the quality criteria referred to in paragraphs 2 to 5. Data governance and management practices shall address data collection processes, data preparation operations, relevance and representativeness assumptions, examination for possible biases, and identification of data gaps or shortcomings.",
    sourceRef: "Article 10",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "dataType",
        operator: "includes",
        value: ["personal-data", "special-category"],
      },
    ],
    crossReferences: ["ukgdpr-1", "ukgdpr-5", "nist-4", "ico-6"],
  },

  // 5. Technical documentation - Article 11 - high
  {
    id: "euaia-5",
    frameworkId: "eu-ai-act",
    category: "Technical Documentation",
    title: "Technical Documentation for High-Risk AI Systems",
    description:
      "Providers must draw up technical documentation before a high-risk AI system is placed on the market or put into service, demonstrating compliance with all requirements of the regulation.",
    fullText:
      "The technical documentation of a high-risk AI system shall be drawn up before that system is placed on the market or put into service and shall be kept up to date. It shall demonstrate that the high-risk AI system complies with the requirements set out in this Section and provide national competent authorities and notified bodies with the necessary information in a clear and comprehensive form.",
    sourceRef: "Article 11",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["nist-3", "owasp-2"],
  },

  // 6. Record-keeping / logging - Article 12 - high
  {
    id: "euaia-6",
    frameworkId: "eu-ai-act",
    category: "Record-Keeping",
    title: "Automatic Recording of Events (Logging)",
    description:
      "High-risk AI systems must include logging capabilities that enable the automatic recording of events relevant to identifying risks, facilitating post-market monitoring, and ensuring traceability.",
    fullText:
      "High-risk AI systems shall technically allow for the automatic recording of events (logs) over the lifetime of the system. The logging capabilities shall ensure a level of traceability of the AI system's functioning throughout its lifecycle that is appropriate to the intended purpose of the system.",
    sourceRef: "Article 12",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["nist-8", "owasp-7", "ukgdpr-9"],
  },

  // 7. Transparency for users - Article 13 - high
  {
    id: "euaia-7",
    frameworkId: "eu-ai-act",
    category: "Transparency",
    title: "Transparency and Provision of Information to Deployers",
    description:
      "High-risk AI systems must be designed to ensure their operation is sufficiently transparent to enable deployers to interpret the system's output and use it appropriately.",
    fullText:
      "High-risk AI systems shall be designed and developed in such a way as to ensure that their operation is sufficiently transparent to enable deployers to interpret a system's output and use it appropriately. Instructions for use shall include concise, complete, correct and clear information that is relevant, accessible and comprehensible to deployers.",
    sourceRef: "Article 13(1)",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["ico-1", "ico-3", "ukgdpr-3"],
  },

  // 8. Human oversight measures - Article 14 - high
  {
    id: "euaia-8",
    frameworkId: "eu-ai-act",
    category: "Human Oversight",
    title: "Human Oversight Measures for High-Risk AI",
    description:
      "High-risk AI systems must be designed to allow effective oversight by natural persons during use, including the ability to fully understand capabilities, correctly interpret outputs, and decide not to use or override the system.",
    fullText:
      "High-risk AI systems shall be designed and developed in such a way that they can be effectively overseen by natural persons during the period in which they are in use. Human oversight shall aim to minimise risks to health, safety or fundamental rights that may emerge when a high-risk AI system is used in accordance with its intended purpose or under conditions of reasonably foreseeable misuse.",
    sourceRef: "Article 14",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["ico-4", "nist-10"],
  },

  // 9. Accuracy, robustness, cybersecurity - Article 15 - high
  {
    id: "euaia-9",
    frameworkId: "eu-ai-act",
    category: "Risk Assessment",
    title: "Accuracy, Robustness, and Cybersecurity",
    description:
      "High-risk AI systems must achieve appropriate levels of accuracy, robustness, and cybersecurity, performing consistently throughout their lifecycle.",
    fullText:
      "High-risk AI systems shall be designed and developed in such a way that they achieve an appropriate level of accuracy, robustness, and cybersecurity, and that they perform consistently in those respects throughout their lifecycle. The levels of accuracy and the relevant accuracy metrics shall be declared in the accompanying instructions of use. High-risk AI systems shall be resilient against attempts by unauthorised third parties to alter their use, outputs, or performance.",
    sourceRef: "Article 15",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["owasp-5", "nist-7"],
  },

  // 10. Conformity assessment - Article 43 - high
  {
    id: "euaia-10",
    frameworkId: "eu-ai-act",
    category: "Conformity Assessment",
    title: "Conformity Assessment Procedures for High-Risk AI",
    description:
      "Providers of high-risk AI systems must ensure their system undergoes the relevant conformity assessment procedure before placing it on the market or putting it into service.",
    fullText:
      "Providers of high-risk AI systems shall ensure that their high-risk AI system undergoes the relevant conformity assessment procedure as set out in Article 43 prior to its placing on the market or putting into service. Where the provider has applied harmonised standards or common specifications, the provider may follow the conformity assessment procedure based on internal control, or the procedure involving a notified body assessment.",
    sourceRef: "Article 43",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["nist-9"],
  },

  // 11. EU declaration of conformity - Article 47 - high
  {
    id: "euaia-11",
    frameworkId: "eu-ai-act",
    category: "Conformity Assessment",
    title: "EU Declaration of Conformity",
    description:
      "Providers must draw up a written or electronically signed EU declaration of conformity for each high-risk AI system and keep it available to national competent authorities for 10 years.",
    fullText:
      "The provider shall draw up a written machine-readable, physical or electronically signed EU declaration of conformity for each high-risk AI system and keep it at the disposal of the national competent authorities for 10 years after the high-risk AI system has been placed on the market or put into service. The EU declaration of conformity shall identify the AI system for which it has been drawn up.",
    sourceRef: "Article 47",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: [],
  },

  // 12. CE marking - Article 48 - high
  {
    id: "euaia-12",
    frameworkId: "eu-ai-act",
    category: "Conformity Assessment",
    title: "CE Marking of Conformity",
    description:
      "High-risk AI systems must bear the CE marking to indicate conformity with the regulation, affixed visibly, legibly, and indelibly before the system is placed on the market.",
    fullText:
      "The CE marking shall be affixed visibly, legibly, and indelibly for high-risk AI systems. Where that is not possible or not warranted on account of the nature of the high-risk AI system, it shall be affixed to the packaging or to the accompanying documentation, as appropriate.",
    sourceRef: "Article 48",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: [],
  },

  // 13. Registration in EU database - Article 49 - high
  {
    id: "euaia-13",
    frameworkId: "eu-ai-act",
    category: "Accountability",
    title: "Registration in the EU Database for High-Risk AI Systems",
    description:
      "Before placing a high-risk AI system on the market, the provider or authorised representative must register themselves and the system in the EU database established under Article 71.",
    fullText:
      "Before placing on the market or putting into service a high-risk AI system listed in Annex III, with the exception of high-risk AI systems referred to in point 2 of Annex III, the provider or, where applicable, the authorised representative shall register themselves and their system in the EU database referred to in Article 71.",
    sourceRef: "Article 49",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: [],
  },

  // 14. Transparency for limited-risk AI - Article 50 - limited
  {
    id: "euaia-14",
    frameworkId: "eu-ai-act",
    category: "Transparency",
    title: "Transparency Obligations for Limited-Risk AI Systems",
    description:
      "Providers of AI systems intended to interact directly with natural persons must ensure users are informed they are interacting with an AI system. AI-generated or manipulated content must be marked as such.",
    fullText:
      "Providers shall ensure that AI systems intended to directly interact with natural persons are designed and developed so that the natural person concerned is informed that they are interacting with an AI system, unless this is obvious from the circumstances and the context of use. Providers of AI systems that generate synthetic audio, image, video, or text content shall ensure that the outputs are marked in a machine-readable format and are detectable as artificially generated or manipulated.",
    sourceRef: "Article 50",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "limited",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
    ],
    crossReferences: ["ico-1", "ukgdpr-3"],
  },

  // 15. GPAI model transparency - Article 53 - limited
  {
    id: "euaia-15",
    frameworkId: "eu-ai-act",
    category: "GPAI Obligations",
    title: "Obligations for Providers of General-Purpose AI Models",
    description:
      "Providers of general-purpose AI models must draw up and maintain technical documentation, provide information to downstream providers, comply with Union copyright law, and publish a sufficiently detailed summary of training content.",
    fullText:
      "Providers of general-purpose AI models shall draw up and keep up to date the technical documentation of the model, including its training and testing process and the results of its evaluation, and make available information and documentation to downstream providers who intend to integrate the model into their AI systems. A sufficiently detailed summary about the content used for training of the general-purpose AI model shall be made publicly available according to a template provided by the AI Office.",
    sourceRef: "Article 53",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "limited",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai"],
      },
    ],
    crossReferences: ["nist-3", "owasp-2"],
  },

  // 16. GPAI systemic risk evaluation - Article 55 - high
  {
    id: "euaia-16",
    frameworkId: "eu-ai-act",
    category: "GPAI Obligations",
    title: "Obligations for GPAI Models with Systemic Risk",
    description:
      "Providers of general-purpose AI models with systemic risk must perform model evaluations, assess and mitigate possible systemic risks, track and report serious incidents, and ensure adequate cybersecurity protection.",
    fullText:
      "Providers of general-purpose AI models with systemic risk shall perform model evaluations in accordance with standardised protocols and tools reflecting the state of the art, assess and mitigate possible systemic risks at Union level including their sources, ensure an adequate level of cybersecurity protection for the model and its physical infrastructure, and document and report to the AI Office and national competent authorities any serious incidents and possible corrective measures without undue delay.",
    sourceRef: "Article 55",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "systemType",
        operator: "includes",
        value: ["generative-ai"],
      },
    ],
    crossReferences: ["nist-5", "owasp-5", "owasp-8"],
  },

  // 17. Fundamental rights impact assessment - Article 27 - high
  {
    id: "euaia-17",
    frameworkId: "eu-ai-act",
    category: "Risk Assessment",
    title: "Fundamental Rights Impact Assessment",
    description:
      "Deployers of high-risk AI systems in specified sectors must perform an assessment of the impact on fundamental rights before putting such systems into use, including assessment of discrimination risks and impacts on vulnerable groups.",
    fullText:
      "Before putting into use a high-risk AI system, deployers that are bodies governed by public law, private entities providing public services, and deployers of systems in specified high-risk areas shall perform an assessment of the impact on fundamental rights that the use of such system may produce. This includes a description of the deployer's processes in which the system will be used, the period of and frequency for use, the categories of natural persons and groups likely to be affected, and the specific risks of harm likely to impact those categories.",
    sourceRef: "Article 27",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects"],
      },
      {
        field: "sector",
        operator: "includes",
        value: [
          "public-services",
          "law-enforcement",
          "healthcare",
          "education",
          "employment-hr",
        ],
      },
    ],
    crossReferences: ["ukgdpr-4", "eqa-5"],
  },

  // 18. Post-market monitoring - Article 72 - high
  {
    id: "euaia-18",
    frameworkId: "eu-ai-act",
    category: "Accountability",
    title: "Post-Market Monitoring System for High-Risk AI",
    description:
      "Providers of high-risk AI systems must establish and document a post-market monitoring system to actively and systematically collect, document, and analyse relevant data throughout the system's lifetime.",
    fullText:
      "Providers shall establish and document a post-market monitoring system in a manner that is proportionate to the nature of the AI technologies and the risks of the high-risk AI system. The post-market monitoring system shall actively and systematically collect, document and analyse relevant data which may be provided by deployers or which may be collected through other sources on the performance of high-risk AI systems throughout their lifetime.",
    sourceRef: "Article 72",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["nist-11", "owasp-9"],
  },

  // 19. Reporting of serious incidents - Article 73 - high
  {
    id: "euaia-19",
    frameworkId: "eu-ai-act",
    category: "Accountability",
    title: "Reporting of Serious Incidents",
    description:
      "Providers of high-risk AI systems placed on the Union market must report any serious incident to the market surveillance authorities of the Member States where the incident occurred, no later than 15 days after becoming aware of it.",
    fullText:
      "Providers of high-risk AI systems placed on the Union market shall report any serious incident to the market surveillance authorities of the Member States where that incident occurred. The report shall be made immediately after the provider has established a causal link between the AI system and the serious incident, or the reasonable likelihood of such a link, and in any event not later than 15 days after the provider or, where applicable, the deployer becomes aware of the serious incident.",
    sourceRef: "Article 73",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "high",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects", "supports-human-decisions"],
      },
    ],
    crossReferences: ["ukgdpr-10", "nist-12"],
  },

  // 20. Codes of practice for GPAI - Article 56 - minimal
  {
    id: "euaia-20",
    frameworkId: "eu-ai-act",
    category: "GPAI Obligations",
    title: "Codes of Practice for General-Purpose AI",
    description:
      "The AI Office shall encourage and facilitate the drawing up of codes of practice at Union level to contribute to the proper application of the regulation for providers of general-purpose AI models, taking into account international approaches.",
    fullText:
      "The AI Office shall encourage and facilitate the drawing up of codes of practice at Union level as an element contributing to the proper application of this Regulation, taking into account international approaches. Providers of general-purpose AI models may rely on adherence to a code of practice to demonstrate compliance with the obligations set out in Articles 53 and 55, until a harmonised standard is published.",
    sourceRef: "Article 56",
    sourceUrl:
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    riskTier: "minimal",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["eu-only", "uk-and-eu"],
      },
    ],
    crossReferences: ["nist-1", "owasp-1"],
  },
];
