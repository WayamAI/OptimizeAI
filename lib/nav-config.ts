import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Activity,
  GitBranch,
  ShieldCheck,
  Wrench,
  Umbrella,
  FileSpreadsheet,
  Database,
  Settings as SettingsIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  icon: LucideIcon;
  href?: string;
  children?: NavLink[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Component Reliability",
    icon: Activity,
    children: [
      { label: "Fleet Health Overview", href: "/fleet-health" },
      { label: "Failure Analysis", href: "/failure-analysis" },
      { label: "Supplier Comparison", href: "/supplier-comparison" },
      { label: "Remaining Useful Life", href: "/remaining-useful-life" },
    ],
  },
  {
    label: "Traceability & Risk",
    icon: GitBranch,
    children: [
      { label: "Component Genealogy", href: "/component-genealogy" },
      { label: "Supplier Risk Scorecard", href: "/supplier-risk-scorecard" },
      { label: "Blast Radius Calculator", href: "/blast-radius" },
      { label: "Risk Alerts", href: "/risk-alerts" },
      { label: "Supplier Deep Dive", href: "/supplier-deep-dive" },
    ],
  },
  {
    label: "Warranty Intelligence",
    icon: ShieldCheck,
    children: [
      { label: "Warranty Cost Modeler", href: "/warranty-cost-modeler" },
      { label: "Active Contracts", href: "/warranty-contracts" },
      { label: "Claims Analytics", href: "/claims-analytics" },
      { label: "What-If Simulator", href: "/what-if-simulator" },
    ],
  },
  {
    label: "AMC Management",
    icon: Wrench,
    children: [
      { label: "AMC Portfolio", href: "/amc-portfolio" },
      { label: "AMC Pricing Engine", href: "/amc-pricing" },
      { label: "Service Cost Tracking", href: "/service-cost-tracking" },
    ],
  },
  {
    label: "Insurance",
    icon: Umbrella,
    children: [
      { label: "Coverage Overview", href: "/insurance-coverage" },
      { label: "Actual vs. Assumed Risk", href: "/insurance-risk" },
      { label: "Renegotiation Opps", href: "/insurance-renegotiation" },
      { label: "Self-Insurance Analysis", href: "/self-insurance" },
    ],
  },
  {
    label: "Tender Support",
    icon: FileSpreadsheet,
    children: [
      { label: "New Bid Calculator", href: "/tender-calculator" },
      { label: "Bid History", href: "/bid-history" },
    ],
  },
  {
    label: "Data Sources",
    icon: Database,
    children: [
      { label: "Connected Systems", href: "/connected-systems" },
      { label: "Data Quality Monitor", href: "/data-quality" },
      { label: "Ingestion Logs", href: "/ingestion-logs" },
    ],
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    children: [
      { label: "User Management", href: "/user-management" },
      { label: "Alert Configuration", href: "/alert-config" },
      { label: "Model Parameters", href: "/model-parameters" },
    ],
  },
];
