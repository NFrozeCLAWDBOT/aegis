import { GlassPanel } from "@/components/layout/GlassPanel";
import { QuestionnaireWizard } from "@/components/questionnaire/QuestionnaireWizard";

export function QuestionnairePage() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
      <GlassPanel className="max-w-2xl w-full px-6 py-8 md:px-12 md:py-12">
        <QuestionnaireWizard />
      </GlassPanel>
    </div>
  );
}
