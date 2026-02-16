import { OptionCard } from "@/components/questionnaire/OptionCard";
import { useAssessment } from "@/context/assessment-context";

const options = [
  {
    value: "legal-significant-effects",
    label: "Legal / Significant Effects",
    description: "Makes decisions with legal or similarly significant effects on individuals",
  },
  {
    value: "supports-human-decisions",
    label: "Supports Human Decisions",
    description: "Provides recommendations or analysis but humans make the final decision",
  },
  {
    value: "no-individual-impact",
    label: "No Individual Impact",
    description: "No direct impact on individuals — internal analytics, research, or automation",
  },
];

export function AutomatedDecisionsStep() {
  const { currentAnswer, dispatch } = useAssessment();
  const selected = currentAnswer("automatedDecisions");

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-aegis-text mb-2">
        What level of automated decision-making does your system perform?
      </h2>
      <p className="text-aegis-text-muted text-sm mb-6">
        This determines the level of human oversight and individual rights protections required.
      </p>
      <div className="grid grid-cols-1 gap-3" role="radiogroup" aria-label="Automated decisions">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.label}
            description={opt.description}
            selected={selected === opt.value}
            onSelect={() => dispatch({ type: "SET_ANSWER", field: "automatedDecisions", value: opt.value })}
          />
        ))}
      </div>
    </div>
  );
}
