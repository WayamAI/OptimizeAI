"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { FilterTabs } from "@/components/filter-tabs";
import { RiskBadge } from "@/components/risk-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { fleetHealthRows, fleetHealthCategories } from "@/lib/fleet-health-data";

function TrendIcon({ trend }: { trend: "up" | "down" | "flat" }) {
  if (trend === "up") return <ArrowUpRight className="h-3.5 w-3.5 text-[oklch(0.6_0.15_150)]" />;
  if (trend === "down") return <ArrowDownRight className="h-3.5 w-3.5 text-destructive" />;
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />;
}

export function FleetHealthView() {
  const [category, setCategory] = useState("All Categories");

  const rows = useMemo(
    () =>
      category === "All Categories"
        ? fleetHealthRows
        : fleetHealthRows.filter((r) => r.category === category),
    [category]
  );

  const totalUnits = fleetHealthRows.reduce((sum, r) => sum + r.installedBase, 0);

  return (
    <div>
      <PageHeader
        title="Fleet Health Overview"
        subtitle={`Reliability status of ${fleetHealthRows.length} component families across ${totalUnits.toLocaleString()} installed units`}
      />

      <div className="mb-4">
        <FilterTabs options={fleetHealthCategories} value={category} onChange={setCategory} />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component Family</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead className="text-right">Installed Base</TableHead>
                  <TableHead className="text-right">MTBF (hrs)</TableHead>
                  <TableHead className="text-right">Failure Rate/1000h</TableHead>
                  <TableHead className="text-right">Avg. Repair Cost</TableHead>
                  <TableHead>Top Failure Mode</TableHead>
                  <TableHead className="text-right">Suppliers</TableHead>
                  <TableHead>Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.code}>
                    <TableCell className="font-medium text-foreground">{r.family}</TableCell>
                    <TableCell className="text-muted-foreground">{r.code}</TableCell>
                    <TableCell className="text-right">{r.installedBase.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center gap-1">
                        {r.mtbf.toLocaleString()}
                        <TrendIcon trend={r.trend} />
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{r.failureRate.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{r.avgRepairCost}</TableCell>
                    <TableCell className="text-muted-foreground">{r.topFailureMode}</TableCell>
                    <TableCell className="text-right">{r.suppliers}</TableCell>
                    <TableCell>
                      <RiskBadge tone={r.risk} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
