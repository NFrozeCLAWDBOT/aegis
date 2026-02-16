import type { Obligation, QuestionnaireAnswers, ApplicabilityCondition } from "@/types";

function matchesCondition(
  answers: QuestionnaireAnswers,
  condition: ApplicabilityCondition
): boolean {
  const answerValue = answers[condition.field];

  switch (condition.operator) {
    case "equals":
      return answerValue === condition.value;
    case "includes": {
      const values = Array.isArray(condition.value)
        ? condition.value
        : [condition.value];
      return values.includes(answerValue);
    }
    case "excludes": {
      const values = Array.isArray(condition.value)
        ? condition.value
        : [condition.value];
      return !values.includes(answerValue);
    }
    default:
      return false;
  }
}

export function filterObligations(
  allObligations: Obligation[],
  answers: QuestionnaireAnswers
): Obligation[] {
  return allObligations.filter((obligation) => {
    // Empty appliesWhen = always applies
    if (obligation.appliesWhen.length === 0) return true;
    // ALL conditions must match (AND logic)
    return obligation.appliesWhen.every((condition) =>
      matchesCondition(answers, condition)
    );
  });
}
