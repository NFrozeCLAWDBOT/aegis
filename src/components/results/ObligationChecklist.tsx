import type { Obligation } from "@/types";
import { ObligationItem } from "./ObligationItem";

interface ObligationChecklistProps {
  obligations: Obligation[];
  onNavigate: (obligationId: string) => void;
}

export function ObligationChecklist({
  obligations,
  onNavigate,
}: ObligationChecklistProps) {
  return (
    <div className="space-y-1">
      {obligations.map((obligation) => (
        <ObligationItem
          key={obligation.id}
          obligation={obligation}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}
