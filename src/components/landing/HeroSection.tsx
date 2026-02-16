import { useNavigate } from "react-router-dom";
import { GlassPanel } from "@/components/layout/GlassPanel";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <GlassPanel className="max-w-2xl w-full px-8 py-12 md:px-16 md:py-20 text-center">
        <h1
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4"
          style={{
            textShadow: "0 0 40px rgba(123, 47, 190, 0.5), 0 0 80px rgba(224, 64, 251, 0.2)",
          }}
        >
          AEGIS
        </h1>
        <p className="text-aegis-text-muted text-lg md:text-xl mb-2 font-body">
          AI Regulatory Compliance Mapper
        </p>
        <p className="text-aegis-text-muted/70 text-sm md:text-base mb-10 font-body max-w-md mx-auto">
          Turn the fragmented, multi-jurisdictional regulatory maze into a single, actionable compliance tracker.
        </p>
        <button
          onClick={() => navigate("/assess")}
          className="btn-gradient px-8 py-3 rounded-xl text-white font-heading font-semibold text-lg tracking-wide cursor-pointer"
        >
          Begin Assessment
        </button>
      </GlassPanel>
    </div>
  );
}
