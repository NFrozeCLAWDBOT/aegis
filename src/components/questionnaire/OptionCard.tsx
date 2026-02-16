import { cn } from "@/lib/utils";

interface OptionCardProps {
  label: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

export function OptionCard({
  label,
  description,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "glass w-full text-left rounded-xl px-5 py-4 transition-all duration-200 cursor-pointer",
        "hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg hover:shadow-aegis-primary/10",
        selected
          ? "border-aegis-accent bg-aegis-accent/10 shadow-lg shadow-aegis-accent/20"
          : "border-white/10"
      )}
    >
      <div className="font-heading font-semibold text-aegis-text text-sm">
        {label}
      </div>
      <div className="text-aegis-text-muted text-xs mt-1">{description}</div>
    </button>
  );
}
