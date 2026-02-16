import { useAssessment } from "@/context/assessment-context";
import { GlassPanel } from "@/components/layout/GlassPanel";
import { GapCard } from "./GapCard";

export function GapAnalysisPanel() {
  const { state } = useAssessment();
  const gaps = state.result?.gaps ?? [];

  if (gaps.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-2xl font-bold text-aegis-text mb-2">
        Gap Analysis
      </h2>
      <p className="text-aegis-text-muted text-sm mb-6">
        Risk areas where no applicable framework provides coverage.
      </p>
      <GlassPanel className="p-5 border-aegis-warning/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gaps.map((gap, idx) => (
            <GapCard key={idx} gap={gap} />
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}
