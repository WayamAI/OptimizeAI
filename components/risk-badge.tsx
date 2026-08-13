import { cn } from "@/lib/utils";

const toneMap: Record<string, string> = {
  red: "bg-destructive/10 text-destructive",
  amber: "bg-[oklch(0.75_0.18_70_/_15%)] text-[oklch(0.55_0.16_60)]",
  green: "bg-[oklch(0.6_0.15_150_/_15%)] text-[oklch(0.45_0.13_150)]",
};

export function RiskBadge({ tone, label }: { tone: "red" | "amber" | "green"; label?: string }) {
  return (
    <span className={cn("inline-block rounded-full px-2 py-0.5 text-xs font-medium capitalize", toneMap[tone])}>
      {label ?? tone}
    </span>
  );
}
