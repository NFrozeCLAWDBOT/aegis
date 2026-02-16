import { OptionCard } from "@/components/questionnaire/OptionCard";
import { useAssessment } from "@/context/assessment-context";

const options = [
  { value: "financial-services", label: "Financial Services", description: "Banking, insurance, credit scoring, trading" },
  { value: "healthcare", label: "Healthcare", description: "Diagnostics, treatment, health monitoring, pharma" },
  { value: "education", label: "Education", description: "Admissions, grading, learning platforms, student assessment" },
  { value: "employment-hr", label: "Employment / HR", description: "Recruitment, performance review, workforce management" },
  { value: "law-enforcement", label: "Law Enforcement", description: "Policing, criminal justice, surveillance, border control" },
  { value: "public-services", label: "Public Services", description: "Government, welfare, social services, immigration" },
  { value: "other", label: "Other", description: "Retail, media, entertainment, technology, or other sectors" },
];

export function SectorStep() {
  const { currentAnswer, dispatch } = useAssessment();
  const selected = currentAnswer("sector");

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-aegis-text mb-2">
        Which sector does your AI system operate in?
      </h2>
      <p className="text-aegis-text-muted text-sm mb-6">
        The sector determines which high-risk classifications and sector-specific regulations apply.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Sector">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.label}
            description={opt.description}
            selected={selected === opt.value}
            onSelect={() => dispatch({ type: "SET_ANSWER", field: "sector", value: opt.value })}
          />
        ))}
      </div>
    </div>
  );
}
