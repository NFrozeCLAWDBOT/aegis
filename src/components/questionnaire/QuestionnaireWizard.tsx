import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useAssessment } from "@/context/assessment-context";
import { ProgressIndicator } from "./ProgressIndicator";
import { SystemTypeStep } from "./steps/SystemTypeStep";
import { DataTypeStep } from "./steps/DataTypeStep";
import { GeographyStep } from "./steps/GeographyStep";
import { SectorStep } from "./steps/SectorStep";
import { AutomatedDecisionsStep } from "./steps/AutomatedDecisionsStep";
import { runComplianceEngine } from "@/engine/compliance-engine";
import type { QuestionnaireAnswers } from "@/types";

const STEPS = [
  SystemTypeStep,
  DataTypeStep,
  GeographyStep,
  SectorStep,
  AutomatedDecisionsStep,
];

const TOTAL_STEPS = STEPS.length;

export function QuestionnaireWizard() {
  const { state, dispatch, isStepComplete } = useAssessment();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(1);

  const { currentStep } = state;
  const StepComponent = STEPS[currentStep];
  const canProceed = isStepComplete(currentStep);
  const isLastStep = currentStep === TOTAL_STEPS - 1;

  const handleNext = () => {
    if (isLastStep) {
      const result = runComplianceEngine(state.answers as QuestionnaireAnswers);
      dispatch({ type: "SET_RESULT", result });
      navigate("/results");
    } else {
      setDirection(1);
      dispatch({ type: "NEXT_STEP" });
    }
  };

  const handleBack = () => {
    setDirection(-1);
    dispatch({ type: "PREV_STEP" });
  };

  return (
    <div>
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        isStepComplete={isStepComplete}
      />

      <div className="relative overflow-hidden min-h-[320px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <StepComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-6 py-2.5 rounded-xl font-heading text-sm font-medium text-aegis-text-muted border border-aegis-border hover:border-aegis-primary/50 hover:text-aegis-text transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="btn-gradient px-6 py-2.5 rounded-xl font-heading text-sm font-medium text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLastStep ? "Generate Compliance Map" : "Next"}
        </button>
      </div>
    </div>
  );
}
