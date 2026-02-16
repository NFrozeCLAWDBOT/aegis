import { useCallback } from "react";
import { useAssessment } from "@/context/assessment-context";
import { ComplianceHeatmap } from "./ComplianceHeatmap";
import { FrameworkCard } from "./FrameworkCard";
import { GapAnalysisPanel } from "./GapAnalysisPanel";

export function ResultsDashboard() {
  const { state } = useAssessment();
  const result = state.result;

  const handleNavigate = useCallback((obligationId: string) => {
    const el = document.getElementById(obligationId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-aegis-accent");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-aegis-accent");
      }, 2000);
    }
  }, []);

  if (!result) return null;

  const totalObligations = result.applicableObligations.length;
  const completedCount = state.completedObligations.size;

  return (
    <div className="space-y-12">
      {/* Summary */}
      <div className="text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-aegis-text mb-2">
          Your Compliance Map
        </h1>
        <p className="text-aegis-text-muted">
          {result.applicableFrameworks.length} frameworks &middot;{" "}
          {totalObligations} obligations &middot;{" "}
          {completedCount}/{totalObligations} complete
        </p>
      </div>

      {/* Heatmap */}
      <ComplianceHeatmap />

      {/* Framework Cards */}
      <section>
        <h2 className="font-heading text-2xl font-bold text-aegis-text mb-6">
          Framework Obligations
        </h2>
        <div className="space-y-4">
          {result.applicableFrameworks.map((framework) => (
            <FrameworkCard
              key={framework.id}
              framework={framework}
              obligations={result.obligationsByFramework[framework.id] ?? []}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </section>

      {/* Gap Analysis */}
      <GapAnalysisPanel />
    </div>
  );
}
