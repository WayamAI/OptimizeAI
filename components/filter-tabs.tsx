"use client";

import { cn } from "@/lib/utils";

export function FilterTabs({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            value === opt
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-muted-foreground hover:bg-secondary"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
