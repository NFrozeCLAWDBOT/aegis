import { OptionCard } from "@/components/questionnaire/OptionCard";
import { useAssessment } from "@/context/assessment-context";

const options = [
  { value: "generative-ai", label: "Generative AI", description: "LLMs, image/video generation, text synthesis" },
  { value: "predictive-ml", label: "Predictive / ML", description: "Forecasting, regression, time-series models" },
  { value: "classification", label: "Classification", description: "Categorisation, sentiment analysis, spam detection" },
  { value: "recommendation", label: "Recommendation", description: "Content, product, or service recommendations" },
  { value: "computer-vision", label: "Computer Vision", description: "Image recognition, object detection, video analysis" },
  { value: "nlp", label: "NLP", description: "Text processing, entity extraction, translation" },
  { value: "other", label: "Other", description: "Robotics, autonomous systems, or other AI types" },
];

export function SystemTypeStep() {
  const { currentAnswer, dispatch } = useAssessment();
  const selected = currentAnswer("systemType");

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-aegis-text mb-2">
        What type of AI system are you deploying?
      </h2>
      <p className="text-aegis-text-muted text-sm mb-6">
        Select the category that best describes your AI system's core functionality.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="System type">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.label}
            description={opt.description}
            selected={selected === opt.value}
            onSelect={() => dispatch({ type: "SET_ANSWER", field: "systemType", value: opt.value })}
          />
        ))}
      </div>
    </div>
  );
}
