import { frameworks } from "@/data/frameworks";

interface CrossReferenceBadgeProps {
  frameworkId: string;
  obligationId: string;
  onNavigate: (obligationId: string) => void;
}

export function CrossReferenceBadge({
  frameworkId,
  obligationId,
  onNavigate,
}: CrossReferenceBadgeProps) {
  const framework = frameworks.find((f) => f.id === frameworkId);
  if (!framework) return null;

  return (
    <button
      onClick={() => onNavigate(obligationId)}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono bg-aegis-primary/15 text-aegis-primary-hover border border-aegis-primary/20 hover:bg-aegis-primary/25 transition-colors cursor-pointer"
      title={`Also covered by ${framework.shortName}`}
    >
      {framework.shortName}
    </button>
  );
}
