export type FleetHealthRow = {
  family: string;
  code: string;
  category: string;
  installedBase: number;
  mtbf: number;
  trend: "up" | "down" | "flat";
  failureRate: number;
  avgRepairCost: string;
  topFailureMode: string;
  suppliers: number;
  risk: "red" | "amber" | "green";
};

export const fleetHealthRows: FleetHealthRow[] = [
  { family: "Traction Motor", code: "TM-450", category: "Propulsion", installedBase: 2847, mtbf: 48200, trend: "down", failureRate: 0.42, avgRepairCost: "₹9.5L", topFailureMode: "Bearing seizure", suppliers: 2, risk: "amber" },
  { family: "Brake Disc Assembly", code: "BD-R7", category: "Braking", installedBase: 5120, mtbf: 92400, trend: "up", failureRate: 0.18, avgRepairCost: "₹2.2L", topFailureMode: "Disc cracking", suppliers: 3, risk: "green" },
  { family: "Bogie Frame", code: "BF-2200", category: "Running Gear", installedBase: 1980, mtbf: 156000, trend: "flat", failureRate: 0.09, avgRepairCost: "₹14.0L", topFailureMode: "Weld fatigue", suppliers: 4, risk: "green" },
  { family: "Pantograph Assembly", code: "PA-X3", category: "Current Collection", installedBase: 890, mtbf: 32100, trend: "down", failureRate: 0.78, avgRepairCost: "₹3.4L", topFailureMode: "Carbon strip wear", suppliers: 2, risk: "red" },
  { family: "Coupler System", code: "CS-900", category: "Coupling", installedBase: 2210, mtbf: 68500, trend: "up", failureRate: 0.31, avgRepairCost: "₹4.1L", topFailureMode: "Connector corrosion", suppliers: 3, risk: "amber" },
  { family: "Auxiliary Power Unit", code: "APU-320", category: "Power", installedBase: 1560, mtbf: 41200, trend: "down", failureRate: 0.55, avgRepairCost: "₹5.8L", topFailureMode: "Capacitor degradation", suppliers: 2, risk: "amber" },
  { family: "Door Operating System", code: "DOS-150", category: "Doors", installedBase: 3340, mtbf: 78900, trend: "up", failureRate: 0.24, avgRepairCost: "₹2.6L", topFailureMode: "Sensor misalignment", suppliers: 3, risk: "green" },
  { family: "HVAC Compressor", code: "HC-800", category: "Climate", installedBase: 2140, mtbf: 55600, trend: "down", failureRate: 0.35, avgRepairCost: "₹3.9L", topFailureMode: "Refrigerant leak", suppliers: 4, risk: "amber" },
  { family: "Wheel Set", code: "WS-1100", category: "Running Gear", installedBase: 6420, mtbf: 124000, trend: "up", failureRate: 0.12, avgRepairCost: "₹6.2L", topFailureMode: "Flange wear", suppliers: 3, risk: "green" },
  { family: "Suspension Damper", code: "SD-650", category: "Running Gear", installedBase: 3980, mtbf: 62300, trend: "down", failureRate: 0.29, avgRepairCost: "₹1.9L", topFailureMode: "Seal leakage", suppliers: 3, risk: "amber" },
  { family: "Transformer Assembly", code: "TA-2000", category: "Power", installedBase: 780, mtbf: 210000, trend: "flat", failureRate: 0.06, avgRepairCost: "₹22.0L", topFailureMode: "Insulation breakdown", suppliers: 2, risk: "green" },
  { family: "Speedometer Drive", code: "SPD-90", category: "Instrumentation", installedBase: 2980, mtbf: 38400, trend: "down", failureRate: 0.61, avgRepairCost: "₹0.9L", topFailureMode: "Sensor drift", suppliers: 4, risk: "amber" },
  { family: "Air Brake Valve", code: "ABV-400", category: "Braking", installedBase: 4110, mtbf: 51200, trend: "up", failureRate: 0.38, avgRepairCost: "₹1.6L", topFailureMode: "Diaphragm rupture", suppliers: 3, risk: "amber" },
  { family: "Traction Inverter", code: "TI-550", category: "Propulsion", installedBase: 2210, mtbf: 58900, trend: "flat", failureRate: 0.27, avgRepairCost: "₹11.5L", topFailureMode: "IGBT failure", suppliers: 3, risk: "amber" },
  { family: "Battery Charger Unit", code: "BCU-240", category: "Power", installedBase: 1870, mtbf: 44800, trend: "down", failureRate: 0.44, avgRepairCost: "₹2.8L", topFailureMode: "Rectifier fault", suppliers: 2, risk: "amber" },
  { family: "Cab Signal System", code: "CSS-700", category: "Signalling", installedBase: 1120, mtbf: 189000, trend: "up", failureRate: 0.1, avgRepairCost: "₹8.7L", topFailureMode: "Firmware fault", suppliers: 2, risk: "green" },
  { family: "Gangway Bellows", code: "GB-300", category: "Structure", installedBase: 3560, mtbf: 28900, trend: "down", failureRate: 0.84, avgRepairCost: "₹0.6L", topFailureMode: "Fabric tearing", suppliers: 3, risk: "red" },
  { family: "Fire Detection System", code: "FDS-110", category: "Safety", installedBase: 2680, mtbf: 96200, trend: "flat", failureRate: 0.2, avgRepairCost: "₹1.3L", topFailureMode: "Sensor false trip", suppliers: 3, risk: "green" },
];

export const fleetHealthCategories = [
  "All Categories",
  "Propulsion",
  "Braking",
  "Running Gear",
  "Current Collection",
  "Coupling",
  "Power",
  "Doors",
  "Climate",
  "Instrumentation",
  "Signalling",
  "Structure",
  "Safety",
];
