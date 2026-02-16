import { cn } from "@/lib/utils";
import { frameworks } from "@/data/frameworks";
import type { Gap } from "@/types";

interface GapCardProps {
  gap: Gap;
}

const severityStyles = {
  low: "border-aegis-text-muted/30 bg-aegis-text-muted/5",
  medium: "border-aegis-warning/30 bg-aegis-warning/5",
  high: "border-aegis-danger/30 bg-aegis-danger/5",
};

const severityBadge = {
  low: "bg-aegis-text-muted/20 text-aegis-text-muted",
  medium: "bg-aegis-warning/20 text-aegis-warning",
  high: "bg-aegis-danger/20 text-aegis-danger",
};

export function GapCard({ gap }: GapCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 transition-all duration-200",
        severityStyles[gap.severity]
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-heading font-semibold text-sm text-aegis-text">
          {gap.riskArea}
        </h4>
        <span
          className={cn(
            "text-xs px-2 py-0.5 rounded font-mono uppercase",
            severityBadge[gap.severity]
          )}
        >
          {gap.severity}
        </span>
      </div>
      <p className="text-aegis-text-muted text-xs mb-3">{gap.description}</p>
      {gap.affectedFrameworks.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {gap.affectedFrameworks.map((fId) => {
            const f = frameworks.find((fw) => fw.id === fId);
            return f ? (
              <span
                key={fId}
                className="text-xs px-1.5 py-0.5 rounded bg-white/5 text-aegis-text-muted font-mono"
              >
                {f.shortName}
              </span>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
