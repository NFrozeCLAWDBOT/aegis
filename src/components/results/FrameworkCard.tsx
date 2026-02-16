import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/layout/GlassPanel";
import { JurisdictionBadge } from "./JurisdictionBadge";
import { ObligationChecklist } from "./ObligationChecklist";
import { useAssessment } from "@/context/assessment-context";
import type { Framework, Obligation } from "@/types";

interface FrameworkCardProps {
  framework: Framework;
  obligations: Obligation[];
  onNavigate: (obligationId: string) => void;
  defaultExpanded?: boolean;
}

export function FrameworkCard({
  framework,
  obligations,
  onNavigate,
  defaultExpanded = false,
}: FrameworkCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const { coverageForFramework } = useAssessment();
  const coverage = coverageForFramework(framework.id);

  return (
    <GlassPanel className="p-0 overflow-hidden" >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-heading font-semibold text-lg text-aegis-text">
            {framework.shortName}
          </h3>
          <JurisdictionBadge jurisdiction={framework.jurisdiction} />
          <span className="text-aegis-text-muted text-sm">
            {obligations.length} obligation{obligations.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-aegis-text-muted">
            {coverage}%
          </span>
          <svg
            className={cn(
              "w-5 h-5 text-aegis-text-muted transition-transform duration-200",
              expanded && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Progress bar */}
      <div className="px-5 pb-2">
        <div className="h-1.5 rounded-full bg-aegis-void/50 overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              coverage === 100
                ? "bg-aegis-success"
                : "bg-gradient-to-r from-aegis-primary to-aegis-accent"
            )}
            style={{ width: `${coverage}%` }}
          />
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-white/5">
              <ObligationChecklist
                obligations={obligations}
                onNavigate={onNavigate}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassPanel>
  );
}
