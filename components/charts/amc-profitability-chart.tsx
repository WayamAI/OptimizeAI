"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { metro: "Bangalore Metro", revenue: 32, cost: 24 },
  { metro: "Hyderabad Metro", revenue: 28, cost: 22 },
  { metro: "Lucknow Metro", revenue: 21, cost: 19 },
  { metro: "Kochi Metro", revenue: 18, cost: 12 },
  { metro: "Mumbai Metro", revenue: 30, cost: 26 },
  { metro: "Jaipur Metro", revenue: 15, cost: 10 },
];

export function AmcProfitabilityChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 16, left: 8, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
        <XAxis
          type="number"
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          axisLine={false}
          tickLine={false}
          label={{
            value: "₹ Cr",
            position: "insideBottomRight",
            fontSize: 11,
            fill: "var(--muted-foreground)",
          }}
        />
        <YAxis
          dataKey="metro"
          type="category"
          width={100}
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            fontSize: 12,
          }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="revenue" name="Revenue" fill="var(--chart-2)" radius={[0, 4, 4, 0]} />
        <Bar dataKey="cost" name="Cost" fill="var(--destructive)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
