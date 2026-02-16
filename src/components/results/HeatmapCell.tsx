import { cn } from "@/lib/utils";
import { JurisdictionBadge } from "./JurisdictionBadge";
import type { Framework } from "@/types";

interface HeatmapCellProps {
  framework: Framework;
  coverage: number;
  obligationCount: number;
}

function getCoverageColor(coverage: number): string {
  if (coverage === 0) return "bg-aegis-surface";
  if (coverage < 25) return "bg-aegis-primary/20";
  if (coverage < 50) return "bg-aegis-primary/40";
  if (coverage < 75) return "bg-aegis-primary/60";
  if (coverage < 100) return "bg-aegis-primary-hover/60";
  return "bg-aegis-success/30";
}

export function HeatmapCell({
  framework,
  coverage,
  obligationCount,
}: HeatmapCellProps) {
  const isComplete = coverage === 100;

  return (
    <div
      className={cn(
        "glass rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        isComplete && "shadow-aegis-success/20 shadow-lg animate-pulse",
        getCoverageColor(coverage)
      )}
      title={`${framework.shortName}: ${coverage}% coverage (${obligationCount} obligations)`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-heading font-semibold text-sm text-aegis-text">
          {framework.shortName}
        </h3>
        <JurisdictionBadge jurisdiction={framework.jurisdiction} />
      </div>
      <div className="text-3xl font-heading font-bold text-aegis-text mb-1">
        {coverage}%
      </div>
      <div className="text-aegis-text-muted text-xs">
        {obligationCount} obligation{obligationCount !== 1 ? "s" : ""}
      </div>
      {/* Coverage bar */}
      <div className="mt-3 h-1.5 rounded-full bg-aegis-void/50 overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            isComplete
              ? "bg-aegis-success"
              : "bg-gradient-to-r from-aegis-primary to-aegis-accent"
          )}
          style={{ width: `${coverage}%` }}
        />
      </div>
    </div>
  );
}
