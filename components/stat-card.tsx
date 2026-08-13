import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  note,
  trend,
  tone = "default",
}: {
  label: string;
  value: string;
  note?: string;
  trend?: "up" | "down";
  tone?: "default" | "warning" | "danger" | "success";
}) {
  const toneClasses: Record<string, string> = {
    default: "text-muted-foreground",
    warning: "text-[oklch(0.75_0.18_70)]",
    danger: "text-destructive",
    success: "text-[oklch(0.6_0.15_150)]",
  };

  return (
    <Card>
      <CardContent className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
        {note && (
          <p className={cn("mt-1.5 flex items-center gap-1 text-xs font-medium", toneClasses[tone])}>
            {trend === "up" && <TrendingUp className="h-3.5 w-3.5" />}
            {trend === "down" && <TrendingDown className="h-3.5 w-3.5" />}
            {note}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
