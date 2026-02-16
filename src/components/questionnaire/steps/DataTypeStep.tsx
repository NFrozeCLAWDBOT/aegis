import { OptionCard } from "@/components/questionnaire/OptionCard";
import { useAssessment } from "@/context/assessment-context";

const options = [
  { value: "personal-data", label: "Personal Data", description: "Identifiable information about individuals" },
  { value: "special-category", label: "Special Category Data", description: "Health, biometric, racial, political, religious data" },
  { value: "public-data", label: "Public Data Only", description: "Publicly available, non-personal datasets" },
  { value: "aggregated-anonymised", label: "Aggregated / Anonymised", description: "Statistical or fully anonymised data" },
];

export function DataTypeStep() {
  const { currentAnswer, dispatch } = useAssessment();
  const selected = currentAnswer("dataType");

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-aegis-text mb-2">
        What type of data does your system process?
      </h2>
      <p className="text-aegis-text-muted text-sm mb-6">
        Select the most sensitive category of data your AI system handles.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Data type">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.label}
            description={opt.description}
            selected={selected === opt.value}
            onSelect={() => dispatch({ type: "SET_ANSWER", field: "dataType", value: opt.value })}
          />
        ))}
      </div>
    </div>
  );
}
