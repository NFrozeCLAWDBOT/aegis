import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useAssessment } from "@/context/assessment-context";
import { ComplianceHeatmap } from "./ComplianceHeatmap";
import { FrameworkCard } from "./FrameworkCard";
import { GapAnalysisPanel } from "./GapAnalysisPanel";

export function ResultsDashboard() {
  const { state, dispatch } = useAssessment();
  const navigate = useNavigate();
  const result = state.result;

  const handleNavigate = useCallback((obligationId: string) => {
    const el = document.getElementById(obligationId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-aegis-accent");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-aegis-accent");
      }, 2000);
    }
  }, []);

  const handleReset = () => {
    dispatch({ type: "RESET" });
    navigate("/");
  };

  if (!result) return null;

  const totalObligations = result.applicableObligations.length;
  const completedCount = state.completedObligations.size;

  return (
    <div className="space-y-12">
      {/* Summary */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-aegis-text mb-2">
          Your Compliance Map
        </h1>
        <p className="text-aegis-text-muted">
          {result.applicableFrameworks.length} frameworks &middot;{" "}
          {totalObligations} obligations &middot;{" "}
          {completedCount}/{totalObligations} complete
        </p>
      </motion.div>

      {/* Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <ComplianceHeatmap />
      </motion.div>

      {/* Framework Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="font-heading text-2xl font-bold text-aegis-text mb-6">
          Framework Obligations
        </h2>
        <div className="space-y-4">
          {result.applicableFrameworks.map((framework, i) => (
            <motion.div
              key={framework.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
            >
              <FrameworkCard
                framework={framework}
                obligations={result.obligationsByFramework[framework.id] ?? []}
                onNavigate={handleNavigate}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gap Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <GapAnalysisPanel />
      </motion.div>

      {/* Actions */}
      <motion.div
        className="flex justify-center pt-4 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          onClick={handleReset}
          className="px-8 py-3 rounded-xl font-heading text-sm font-medium text-aegis-text-muted border border-aegis-border hover:border-aegis-primary/50 hover:text-aegis-text transition-all duration-200 cursor-pointer"
        >
          Start New Assessment
        </button>
      </motion.div>
    </div>
  );
}
