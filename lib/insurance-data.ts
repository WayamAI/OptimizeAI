export const policies = [
  { policy: "Propulsion System Warranty Coverage", insurer: "New India Assurance", components: "TM-450, TI-550", limit: "₹25 Cr", deductible: "₹50L", premium: "₹3.2 Cr", period: "2024-04-01 — 2025-03-31", claimsFiled: 42, claimsPaid: 38, lossRatio: "68%" },
  { policy: "Braking System Coverage", insurer: "United India Insurance", components: "BD-R7, ABV-400", limit: "₹18 Cr", deductible: "₹35L", premium: "₹2.1 Cr", period: "2024-04-01 — 2025-03-31", claimsFiled: 28, claimsPaid: 25, lossRatio: "61%" },
  { policy: "Electrical Systems Coverage", insurer: "ICICI Lombard", components: "APU-320, BCU-240", limit: "₹14 Cr", deductible: "₹30L", premium: "₹1.8 Cr", period: "2024-07-01 — 2025-06-30", claimsFiled: 19, claimsPaid: 16, lossRatio: "74%" },
  { policy: "Safety & Signalling", insurer: "HDFC ERGO", components: "FDS-110, CSS-700", limit: "₹9 Cr", deductible: "₹20L", premium: "₹1.1 Cr", period: "2024-04-01 — 2025-03-31", claimsFiled: 8, claimsPaid: 7, lossRatio: "42%" },
  { policy: "Running Gear Coverage", insurer: "New India Assurance", components: "BF-2200, WS-1100, SD-650", limit: "₹22 Cr", deductible: "₹45L", premium: "₹2.6 Cr", period: "2024-04-01 — 2025-03-31", claimsFiled: 21, claimsPaid: 19, lossRatio: "58%" },
];

export const insuranceRiskRows = [
  { component: "Traction Motor TM-450", assumed: 0.55, actual: 0.42, delta: -24, impact: "₹1.2 Cr/yr", potential: "High" },
  { component: "Brake Disc Assembly BD-R7", assumed: 0.25, actual: 0.18, delta: -28, impact: "₹0.8 Cr/yr", potential: "High" },
  { component: "Bogie Frame BF-2200", assumed: 0.12, actual: 0.09, delta: -25, impact: "₹0.6 Cr/yr", potential: "Medium" },
  { component: "Auxiliary Power Unit APU-320", assumed: 0.6, actual: 0.55, delta: -8, impact: "₹0.3 Cr/yr", potential: "Medium" },
  { component: "Cab Signal System CSS-700", assumed: 0.14, actual: 0.1, delta: -29, impact: "₹0.2 Cr/yr", potential: "Medium" },
  { component: "Fire Detection System FDS-110", assumed: 0.22, actual: 0.2, delta: -9, impact: "₹0.1 Cr/yr", potential: "Low" },
  { component: "Battery Charger Unit BCU-240", assumed: 0.5, actual: 0.44, delta: -12, impact: "₹0.15 Cr/yr", potential: "Low" },
  { component: "Pantograph Assembly PA-X3", assumed: 0.6, actual: 0.78, delta: 30, impact: "-₹0.6 Cr/yr", potential: "Exposure Risk" },
];
