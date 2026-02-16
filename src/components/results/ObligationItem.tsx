import { cn } from "@/lib/utils";
import { useAssessment } from "@/context/assessment-context";
import { CrossReferenceBadge } from "./CrossReferenceBadge";
import { allObligations } from "@/data/obligations";
import type { Obligation } from "@/types";

interface ObligationItemProps {
  obligation: Obligation;
  onNavigate: (obligationId: string) => void;
}

export function ObligationItem({ obligation, onNavigate }: ObligationItemProps) {
  const { state, dispatch } = useAssessment();
  const isCompleted = state.completedObligations.has(obligation.id);

  // Find cross-referenced obligations that are applicable
  const applicableIds = new Set(
    state.result?.applicableObligations.map((o) => o.id) ?? []
  );
  const crossRefs = obligation.crossReferences
    .filter((id) => applicableIds.has(id))
    .map((id) => allObligations.find((o) => o.id === id))
    .filter(Boolean) as Obligation[];

  return (
    <div
      id={obligation.id}
      className={cn(
        "flex items-start gap-3 p-3 rounded-lg transition-all duration-200",
        isCompleted
          ? "bg-aegis-success/5 border border-aegis-success/20"
          : "hover:bg-white/5"
      )}
    >
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_OBLIGATION", obligationId: obligation.id })
        }
        className={cn(
          "mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer",
          isCompleted
            ? "bg-aegis-success border-aegis-success"
            : "border-aegis-border hover:border-aegis-primary"
        )}
        aria-label={`Mark ${obligation.title} as ${isCompleted ? "incomplete" : "complete"}`}
      >
        {isCompleted && (
          <svg className="w-3 h-3 text-aegis-void" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap">
          <span
            className={cn(
              "font-heading text-sm font-medium transition-all duration-200",
              isCompleted
                ? "text-aegis-text-muted line-through"
                : "text-aegis-text"
            )}
          >
            {obligation.title}
          </span>
          {obligation.riskTier && (
            <span
              className={cn(
                "text-xs px-1.5 py-0.5 rounded font-mono",
                obligation.riskTier === "unacceptable" &&
                  "bg-aegis-danger/20 text-aegis-danger",
                obligation.riskTier === "high" &&
                  "bg-aegis-warning/20 text-aegis-warning",
                obligation.riskTier === "limited" &&
                  "bg-aegis-primary/20 text-aegis-primary-hover",
                obligation.riskTier === "minimal" &&
                  "bg-aegis-text-muted/20 text-aegis-text-muted"
              )}
            >
              {obligation.riskTier}
            </span>
          )}
        </div>

        <p
          className={cn(
            "text-xs mt-1 transition-opacity duration-200",
            isCompleted ? "text-aegis-text-muted/50" : "text-aegis-text-muted"
          )}
        >
          {obligation.description}
        </p>

        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <a
            href={obligation.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-aegis-primary-hover hover:text-aegis-accent transition-colors"
          >
            {obligation.sourceRef}
          </a>
          {crossRefs.map((ref) => (
            <CrossReferenceBadge
              key={ref.id}
              frameworkId={ref.frameworkId}
              obligationId={ref.id}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
