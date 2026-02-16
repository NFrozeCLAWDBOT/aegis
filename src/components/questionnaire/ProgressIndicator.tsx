import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  isStepComplete: (step: number) => boolean;
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  isStepComplete,
}: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              i === currentStep &&
                "w-4 h-4 bg-gradient-to-r from-aegis-primary to-aegis-accent shadow-lg shadow-aegis-accent/40 animate-pulse",
              i < currentStep && isStepComplete(i) &&
                "bg-aegis-primary",
              i > currentStep &&
                "bg-aegis-border"
            )}
          />
          {i < totalSteps - 1 && (
            <div
              className={cn(
                "w-8 h-0.5 mx-1 transition-colors duration-300",
                i < currentStep ? "bg-aegis-primary" : "bg-aegis-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
