import { cn } from "@/lib/utils";

interface JurisdictionBadgeProps {
  jurisdiction: "EU" | "UK" | "International";
}

const colors: Record<string, string> = {
  EU: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  UK: "bg-red-500/20 text-red-300 border-red-500/30",
  International: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

export function JurisdictionBadge({ jurisdiction }: JurisdictionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium border",
        colors[jurisdiction]
      )}
    >
      {jurisdiction}
    </span>
  );
}
