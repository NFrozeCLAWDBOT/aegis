import type { Obligation } from "@/types";

export const ukEqualityActObligations: Obligation[] = [
  {
    id: "eqa-1",
    frameworkId: "uk-equality-act",
    category: "Discrimination",
    title: "Direct Discrimination Prevention in AI Systems",
    description:
      "AI systems must not treat individuals less favourably because of a protected characteristic. Where an AI system is used in decision-making, organisations must ensure that the model does not directly discriminate on the basis of age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, or sexual orientation.",
    fullText:
      "A person (A) discriminates against another (B) if, because of a protected characteristic, A treats B less favourably than A treats or would treat others. When AI systems are used to make or inform decisions affecting individuals, the organisation deploying the system must ensure that the algorithm does not use protected characteristics — or proxies for them — as a basis for less favourable treatment. This includes auditing training data for bias, testing model outputs for disparate treatment across protected groups, and implementing safeguards to prevent discriminatory outcomes in automated or semi-automated decisions.",
    sourceRef: "Section 13",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
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
    crossReferences: ["ukgdpr-5", "ico-4"],
  },
  {
    id: "eqa-2",
    frameworkId: "uk-equality-act",
    category: "Discrimination",
    title: "Indirect Discrimination Assessment for AI Outputs",
    description:
      "Organisations must assess whether their AI systems apply provisions, criteria, or practices that are apparently neutral but put persons sharing a protected characteristic at a particular disadvantage compared with others. Where indirect discrimination is identified, it must be objectively justified or the system redesigned.",
    fullText:
      "A person (A) discriminates against another (B) if A applies to B a provision, criterion or practice which is discriminatory in relation to a relevant protected characteristic of B's. A provision, criterion or practice is discriminatory if A applies it, or would apply it, to persons with whom B does not share the characteristic; it puts, or would put, persons with whom B shares the characteristic at a particular disadvantage when compared with persons with whom B does not share it; it puts, or would put, B at that disadvantage; and A cannot show it to be a proportionate means of achieving a legitimate aim. AI systems must be tested for disparate impact across protected groups and any indirectly discriminatory patterns must be justified as proportionate or eliminated through model retraining or system redesign.",
    sourceRef: "Section 19",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
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
    crossReferences: ["ico-8"],
  },
  {
    id: "eqa-3",
    frameworkId: "uk-equality-act",
    category: "Protected Characteristics",
    title: "Protected Characteristics Monitoring in AI Training Data",
    description:
      "Organisations deploying AI systems must monitor how protected characteristics — age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation — are represented in training data and model outputs to identify and mitigate discrimination risks.",
    fullText:
      "The protected characteristics defined in Section 4 of the Equality Act 2010 are: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation. Organisations using AI systems must establish monitoring processes to understand how these characteristics, or proxies for them, feature in training datasets and influence model behaviour. This includes conducting demographic audits of training data, tracking outcome distributions across protected groups, and maintaining records of any identified biases and remediation actions taken. Where special category data under UK GDPR is involved, appropriate legal bases and safeguards must also be in place.",
    sourceRef: "Section 4",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
    ],
    crossReferences: ["ukgdpr-2"],
  },
  {
    id: "eqa-4",
    frameworkId: "uk-equality-act",
    category: "Reasonable Adjustments",
    title: "Reasonable Adjustments for AI-Driven Services",
    description:
      "Where an AI system places a disabled person at a substantial disadvantage compared with persons who are not disabled, the organisation must take reasonable steps to avoid that disadvantage. This includes making adjustments to how AI-driven services, processes, or outputs are delivered to ensure accessibility and fairness.",
    fullText:
      "Where a provision, criterion or practice of a service provider puts a disabled person at a substantial disadvantage in relation to a relevant matter in comparison with persons who are not disabled, the service provider must take such steps as it is reasonable to have to take to avoid the disadvantage. For AI systems, this duty requires organisations to ensure that automated processes do not create barriers for disabled users, to provide alternative means of access where AI interfaces are inaccessible, to adjust decision-making criteria that disadvantage disabled individuals, and to ensure that AI-generated outputs (such as risk scores or eligibility decisions) do not systematically disadvantage people with disabilities without objective justification.",
    sourceRef: "Section 20",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "automatedDecisions",
        operator: "includes",
        value: ["legal-significant-effects"],
      },
    ],
    crossReferences: [],
  },
  {
    id: "eqa-5",
    frameworkId: "uk-equality-act",
    category: "Equality Impact",
    title: "Equality Impact Assessment for AI Deployment",
    description:
      "Public sector bodies and those exercising public functions must, when deploying AI systems, have due regard to the need to eliminate discrimination, advance equality of opportunity, and foster good relations between persons who share a protected characteristic and those who do not. An Equality Impact Assessment (EIA) should be conducted before deploying AI in public-facing services.",
    fullText:
      "A public authority must, in the exercise of its functions, have due regard to the need to: (a) eliminate discrimination, harassment, victimisation and any other conduct prohibited by or under the Equality Act; (b) advance equality of opportunity between persons who share a relevant protected characteristic and persons who do not share it; (c) foster good relations between persons who share a relevant protected characteristic and persons who do not share it. When deploying AI systems in public services, authorities must conduct an Equality Impact Assessment that evaluates how the system may affect different protected groups, documents any identified risks of discriminatory outcomes, sets out mitigations, and establishes ongoing monitoring to ensure the duty is met throughout the system's operational life.",
    sourceRef: "Section 149",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "sector",
        operator: "includes",
        value: ["public-services", "law-enforcement", "healthcare", "education"],
      },
    ],
    crossReferences: ["euaia-17", "ico-8", "nist-4"],
  },
  {
    id: "eqa-6",
    frameworkId: "uk-equality-act",
    category: "Equality Impact",
    title: "Positive Action Provisions in AI-Assisted Processes",
    description:
      "Where persons who share a protected characteristic suffer a disadvantage, have particular needs, or are disproportionately underrepresented, organisations may take proportionate positive action measures. AI systems used in recruitment, education, or public services should be designed to support — and not undermine — lawful positive action initiatives.",
    fullText:
      "The Equality Act permits a person to take any action which is a proportionate means of achieving the aim of: (a) enabling or encouraging persons who share a protected characteristic to overcome or minimise a disadvantage connected to the characteristic; (b) meeting needs of persons sharing a protected characteristic that are different from the needs of persons who do not share it; or (c) enabling or encouraging persons who share a protected characteristic to participate in an activity in which participation by such persons is disproportionately low. When AI systems are used in contexts where positive action is being taken, organisations must ensure the system's design and configuration does not negate these measures. AI tools used in recruitment, admissions, or service allocation must be configured to accommodate lawful positive action policies rather than overriding them with ostensibly neutral criteria.",
    sourceRef: "Section 158",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
    appliesWhen: [
      {
        field: "geography",
        operator: "includes",
        value: ["uk-only", "uk-and-eu"],
      },
      {
        field: "sector",
        operator: "includes",
        value: ["employment-hr", "education", "public-services"],
      },
    ],
    crossReferences: [],
  },
];
