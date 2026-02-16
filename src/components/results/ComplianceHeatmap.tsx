import { useAssessment } from "@/context/assessment-context";
import { HeatmapCell } from "./HeatmapCell";

export function ComplianceHeatmap() {
  const { state, coverageForFramework } = useAssessment();
  const result = state.result;
  if (!result) return null;

  return (
    <section>
      <h2 className="font-heading text-2xl font-bold text-aegis-text mb-6">
        Compliance Coverage
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {result.applicableFrameworks.map((framework) => (
          <HeatmapCell
            key={framework.id}
            framework={framework}
            coverage={coverageForFramework(framework.id)}
            obligationCount={
              (result.obligationsByFramework[framework.id] ?? []).length
            }
          />
        ))}
      </div>
    </section>
  );
}
