export type ComponentFamily = {
  code: string;
  name: string;
  baseFailureRate: number; // failures per 1000 unit-years
  baseRepairCostLakh: number; // ₹ lakh per repair
};

export const componentFamilies: ComponentFamily[] = [
  { code: "TM-450", name: "Traction Motor (TM-450)", baseFailureRate: 4.2, baseRepairCostLakh: 9.5 },
  { code: "BD-R7", name: "Brake Disc Assembly (BD-R7)", baseFailureRate: 2.1, baseRepairCostLakh: 2.2 },
  { code: "BF-2200", name: "Bogie Frame (BF-2200)", baseFailureRate: 1.1, baseRepairCostLakh: 14.0 },
  { code: "PA-X3", name: "Pantograph Assembly (PA-X3)", baseFailureRate: 5.6, baseRepairCostLakh: 3.4 },
  { code: "CS-900", name: "Coupler System (CS-900)", baseFailureRate: 2.8, baseRepairCostLakh: 4.1 },
  { code: "APU-320", name: "Auxiliary Power Unit (APU-320)", baseFailureRate: 3.9, baseRepairCostLakh: 5.8 },
  { code: "DOS-150", name: "Door Operating System (DOS-150)", baseFailureRate: 3.3, baseRepairCostLakh: 2.6 },
  { code: "HC-800", name: "HVAC Compressor (HC-800)", baseFailureRate: 3.0, baseRepairCostLakh: 3.9 },
  { code: "WS-1100", name: "Wheel Set (WS-1100)", baseFailureRate: 1.6, baseRepairCostLakh: 6.2 },
  { code: "SD-650", name: "Suspension Damper (SD-650)", baseFailureRate: 2.5, baseRepairCostLakh: 1.9 },
  { code: "TA-2000", name: "Transformer Assembly (TA-2000)", baseFailureRate: 1.0, baseRepairCostLakh: 22.0 },
  { code: "SPD-90", name: "Speedometer Drive (SPD-90)", baseFailureRate: 4.8, baseRepairCostLakh: 0.9 },
  { code: "ABV-400", name: "Air Brake Valve (ABV-400)", baseFailureRate: 3.6, baseRepairCostLakh: 1.6 },
  { code: "TI-550", name: "Traction Inverter (TI-550)", baseFailureRate: 2.9, baseRepairCostLakh: 11.5 },
  { code: "BCU-240", name: "Battery Charger Unit (BCU-240)", baseFailureRate: 3.4, baseRepairCostLakh: 2.8 },
  { code: "CSS-700", name: "Cab Signal System (CSS-700)", baseFailureRate: 1.4, baseRepairCostLakh: 8.7 },
  { code: "GB-300", name: "Gangway Bellows (GB-300)", baseFailureRate: 5.9, baseRepairCostLakh: 0.6 },
  { code: "FDS-110", name: "Fire Detection System (FDS-110)", baseFailureRate: 2.0, baseRepairCostLakh: 1.3 },
];
