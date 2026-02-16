import type { Obligation, QuestionnaireAnswers, Gap } from "@/types";
import { gapTemplates } from "@/data/gaps";

const ESSENTIAL_CATEGORIES = [
  "Transparency",
  "Risk Assessment",
  "Data Protection",
  "Discrimination",
  "Fairness",
  "Human Oversight",
  "Accountability",
  "Security",
  "Record-Keeping",
];

export function identifyGaps(
  applicableObligations: Obligation[],
  answers: QuestionnaireAnswers
): Gap[] {
  const gaps: Gap[] = [];

  // Check pre-defined gap templates
  for (const template of gapTemplates) {
    if (template.checkCondition(answers)) {
      gaps.push({
        riskArea: template.riskArea,
        description: template.description,
        affectedFrameworks: template.affectedFrameworks,
        severity: template.severity,
      });
    }
  }

  // Check essential categories coverage
  const coveredCategories = new Set(
    applicableObligations.map((o) => o.category)
  );

  for (const category of ESSENTIAL_CATEGORIES) {
    if (!coveredCategories.has(category)) {
      // Check if any related category covers it
      const relatedCovered =
        (category === "Discrimination" && coveredCategories.has("Equality Impact")) ||
        (category === "Fairness" && coveredCategories.has("Discrimination")) ||
        (category === "Data Protection" && coveredCategories.has("Data Security")) ||
        (category === "Security" && (coveredCategories.has("Data Security") || coveredCategories.has("Model Security")));

      if (!relatedCovered) {
        gaps.push({
          riskArea: `${category} Coverage Gap`,
          description: `No applicable obligation covers the ${category.toLowerCase()} risk area for your deployment configuration.`,
          affectedFrameworks: [],
          severity: "medium",
        });
      }
    }
  }

  return gaps;
}
