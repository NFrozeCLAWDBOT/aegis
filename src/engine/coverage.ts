import type { Obligation } from "@/types";

export function calculateCoverage(
  obligationsByFramework: Record<string, Obligation[]>,
  completedIds: Set<string>
): Record<string, number> {
  const coverage: Record<string, number> = {};

  for (const [frameworkId, obligations] of Object.entries(obligationsByFramework)) {
    if (obligations.length === 0) {
      coverage[frameworkId] = 0;
      continue;
    }
    const completed = obligations.filter((o) => completedIds.has(o.id)).length;
    coverage[frameworkId] = Math.round((completed / obligations.length) * 100);
  }

  return coverage;
}
