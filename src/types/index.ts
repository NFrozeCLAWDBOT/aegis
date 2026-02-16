// Questionnaire answer types
export type SystemType =
  | "generative-ai"
  | "predictive-ml"
  | "classification"
  | "recommendation"
  | "computer-vision"
  | "nlp"
  | "other";

export type DataType =
  | "personal-data"
  | "special-category"
  | "public-data"
  | "aggregated-anonymised";

export type Geography = "uk-only" | "eu-only" | "uk-and-eu";

export type Sector =
  | "financial-services"
  | "healthcare"
  | "education"
  | "employment-hr"
  | "law-enforcement"
  | "public-services"
  | "other";

export type AutomatedDecisions =
  | "legal-significant-effects"
  | "supports-human-decisions"
  | "no-individual-impact";

export interface QuestionnaireAnswers {
  systemType: SystemType;
  dataType: DataType;
  geography: Geography;
  sector: Sector;
  automatedDecisions: AutomatedDecisions;
}

// Regulatory data model
export interface Framework {
  id: string;
  name: string;
  shortName: string;
  jurisdiction: "EU" | "UK" | "International";
  source: string;
  description: string;
  lastUpdated: string;
}

export interface ApplicabilityCondition {
  field: "systemType" | "dataType" | "geography" | "sector" | "automatedDecisions";
  operator: "includes" | "excludes" | "equals";
  value: string | string[];
}

export interface Obligation {
  id: string;
  frameworkId: string;
  category: string;
  title: string;
  description: string;
  fullText: string;
  sourceRef: string;
  sourceUrl: string;
  riskTier?: "minimal" | "limited" | "high" | "unacceptable";
  appliesWhen: ApplicabilityCondition[];
  crossReferences: string[];
}

export interface Gap {
  riskArea: string;
  description: string;
  affectedFrameworks: string[];
  severity: "low" | "medium" | "high";
}

export interface GapTemplate {
  riskArea: string;
  description: string;
  severity: "low" | "medium" | "high";
  checkCondition: (answers: QuestionnaireAnswers) => boolean;
  affectedFrameworks: string[];
}

export interface Assessment {
  id: string;
  createdAt: string;
  answers: QuestionnaireAnswers;
  applicableObligations: string[];
  completedObligations: string[];
  gaps: Gap[];
}

// Engine output
export interface ComplianceResult {
  applicableObligations: Obligation[];
  obligationsByFramework: Record<string, Obligation[]>;
  crossReferenceGroups: Obligation[][];
  gaps: Gap[];
  applicableFrameworks: Framework[];
  coverageByFramework: Record<string, number>;
}
