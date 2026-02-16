import type { QuestionnaireAnswers, ComplianceResult } from "@/types";
import { allObligations } from "@/data/obligations";
import { frameworks } from "@/data/frameworks";
import { filterObligations } from "./filter-obligations";
import { findCrossReferenceGroups } from "./cross-references";
import { identifyGaps } from "./gap-analysis";

export function runComplianceEngine(
  answers: QuestionnaireAnswers
): ComplianceResult {
  // 1. Filter obligations by applicability
  const applicableObligations = filterObligations(allObligations, answers);

  // 2. Group by framework
  const obligationsByFramework: Record<string, typeof applicableObligations> = {};
  for (const obligation of applicableObligations) {
    if (!obligationsByFramework[obligation.frameworkId]) {
      obligationsByFramework[obligation.frameworkId] = [];
    }
    obligationsByFramework[obligation.frameworkId].push(obligation);
  }

  // 3. Identify applicable frameworks
  const applicableFrameworkIds = new Set(
    applicableObligations.map((o) => o.frameworkId)
  );
  const applicableFrameworks = frameworks.filter((f) =>
    applicableFrameworkIds.has(f.id)
  );

  // 4. Find cross-reference groups
  const crossReferenceGroups = findCrossReferenceGroups(applicableObligations);

  // 5. Identify gaps
  const gaps = identifyGaps(applicableObligations, answers);

  // 6. Initial coverage (0% — nothing completed yet)
  const coverageByFramework: Record<string, number> = {};
  for (const fId of applicableFrameworkIds) {
    coverageByFramework[fId] = 0;
  }

  return {
    applicableObligations,
    obligationsByFramework,
    crossReferenceGroups,
    gaps,
    applicableFrameworks,
    coverageByFramework,
  };
}
