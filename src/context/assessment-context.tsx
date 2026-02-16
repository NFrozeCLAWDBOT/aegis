import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { QuestionnaireAnswers, Obligation, ComplianceResult } from "@/types";

interface AssessmentState {
  currentStep: number;
  answers: Partial<QuestionnaireAnswers>;
  result: ComplianceResult | null;
  completedObligations: Set<string>;
  isAssessmentComplete: boolean;
}

type AssessmentAction =
  | { type: "SET_ANSWER"; field: keyof QuestionnaireAnswers; value: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_RESULT"; result: ComplianceResult }
  | { type: "TOGGLE_OBLIGATION"; obligationId: string }
  | { type: "RESET" };

const initialState: AssessmentState = {
  currentStep: 0,
  answers: {},
  result: null,
  completedObligations: new Set(),
  isAssessmentComplete: false,
};

function assessmentReducer(
  state: AssessmentState,
  action: AssessmentAction
): AssessmentState {
  switch (action.type) {
    case "SET_ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.field]: action.value },
      };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREV_STEP":
      return { ...state, currentStep: Math.max(0, state.currentStep - 1) };
    case "SET_RESULT":
      return {
        ...state,
        result: action.result,
        isAssessmentComplete: true,
      };
    case "TOGGLE_OBLIGATION": {
      const next = new Set(state.completedObligations);
      if (next.has(action.obligationId)) {
        next.delete(action.obligationId);
      } else {
        next.add(action.obligationId);
      }
      return { ...state, completedObligations: next };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface AssessmentContextType {
  state: AssessmentState;
  dispatch: React.Dispatch<AssessmentAction>;
  // Derived helpers
  currentAnswer: (field: keyof QuestionnaireAnswers) => string | undefined;
  isStepComplete: (step: number) => boolean;
  coverageForFramework: (frameworkId: string) => number;
}

const AssessmentContext = createContext<AssessmentContextType | null>(null);

const STEP_FIELDS: (keyof QuestionnaireAnswers)[] = [
  "systemType",
  "dataType",
  "geography",
  "sector",
  "automatedDecisions",
];

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  const currentAnswer = (field: keyof QuestionnaireAnswers) =>
    state.answers[field];

  const isStepComplete = (step: number) => {
    const field = STEP_FIELDS[step];
    return field ? state.answers[field] !== undefined : false;
  };

  const coverageForFramework = (frameworkId: string): number => {
    if (!state.result) return 0;
    const obligations = state.result.obligationsByFramework[frameworkId] ?? [];
    if (obligations.length === 0) return 0;
    const completed = obligations.filter((o: Obligation) =>
      state.completedObligations.has(o.id)
    ).length;
    return Math.round((completed / obligations.length) * 100);
  };

  return (
    <AssessmentContext.Provider
      value={{ state, dispatch, currentAnswer, isStepComplete, coverageForFramework }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) {
    throw new Error("useAssessment must be used within AssessmentProvider");
  }
  return ctx;
}
