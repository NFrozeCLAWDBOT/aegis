import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl shadow-lg shadow-aegis-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
