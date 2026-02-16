import { OptionCard } from "@/components/questionnaire/OptionCard";
import { useAssessment } from "@/context/assessment-context";

const options = [
  { value: "uk-only", label: "UK Only", description: "Deployed and serving users exclusively in the United Kingdom" },
  { value: "eu-only", label: "EU Only", description: "Deployed and serving users exclusively in the European Union" },
  { value: "uk-and-eu", label: "Both UK and EU", description: "Serving users across both UK and EU jurisdictions" },
];

export function GeographyStep() {
  const { currentAnswer, dispatch } = useAssessment();
  const selected = currentAnswer("geography");

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-aegis-text mb-2">
        Where is your AI system deployed?
      </h2>
      <p className="text-aegis-text-muted text-sm mb-6">
        Select the geographic scope of your AI system's deployment and user base.
      </p>
      <div className="grid grid-cols-1 gap-3" role="radiogroup" aria-label="Deployment geography">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.label}
            description={opt.description}
            selected={selected === opt.value}
            onSelect={() => dispatch({ type: "SET_ANSWER", field: "geography", value: opt.value })}
          />
        ))}
      </div>
    </div>
  );
}
