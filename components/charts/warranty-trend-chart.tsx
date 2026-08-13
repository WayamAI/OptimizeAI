"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Apr 24", claims: 18 },
  { month: "Jul 24", claims: 22 },
  { month: "Oct 24", claims: 20 },
  { month: "Jan 25", claims: 28 },
  { month: "Apr 25", claims: 25 },
  { month: "Jul 25", claims: 33 },
  { month: "Oct 25", claims: 38 },
  { month: "Jan 26", claims: 45 },
];

export function WarrantyTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          axisLine={{ stroke: "var(--border)" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          axisLine={false}
          tickLine={false}
          label={{
            value: "₹ Cr",
            angle: -90,
            position: "insideLeft",
            fontSize: 11,
            fill: "var(--muted-foreground)",
          }}
        />
        <Tooltip
          contentStyle={{
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            fontSize: 12,
          }}
        />
        <Line
          type="monotone"
          dataKey="claims"
          name="Actual Claims"
          stroke="var(--primary)"
          strokeWidth={2}
          dot={{ r: 3, fill: "var(--primary)" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
