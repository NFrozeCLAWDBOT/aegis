import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "@/context/assessment-context";
import { ResultsDashboard } from "@/components/results/ResultsDashboard";

export function ResultsPage() {
  const { state } = useAssessment();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAssessmentComplete) {
      navigate("/assess");
    }
  }, [state.isAssessmentComplete, navigate]);

  if (!state.isAssessmentComplete) return null;

  return (
    <div className="relative z-10 min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <ResultsDashboard />
      </div>
    </div>
  );
}
