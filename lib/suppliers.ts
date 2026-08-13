export type Supplier = {
  rank: number;
  name: string;
  location: string;
  tier: "Tier 1" | "Tier 2" | "Tier 3";
  components: number;
  installedBase: number;
  score: number;
  quality: number;
  delivery: number;
  financial: number;
  concentration: number;
  compliance: number;
  trend: number;
  status: "Low" | "Moderate" | "High";
};

export const suppliers: Supplier[] = [
  { rank: 1, name: "Bharat Heavy Electricals Ltd.", location: "Haridwar", tier: "Tier 1", components: 4, installedBase: 5680, score: 88, quality: 90, delivery: 92, financial: 85, concentration: 80, compliance: 91, trend: 3, status: "Low" },
  { rank: 2, name: "Knorr-Bremse India", location: "Palwal", tier: "Tier 1", components: 3, installedBase: 6120, score: 86, quality: 89, delivery: 90, financial: 82, concentration: 78, compliance: 88, trend: 1, status: "Low" },
  { rank: 3, name: "Texmaco Rail & Engineering", location: "Kolkata", tier: "Tier 1", components: 5, installedBase: 4210, score: 84, quality: 86, delivery: 88, financial: 80, concentration: 76, compliance: 85, trend: 0, status: "Low" },
  { rank: 4, name: "BEML Limited", location: "Bangalore", tier: "Tier 1", components: 3, installedBase: 3890, score: 83, quality: 85, delivery: 84, financial: 81, concentration: 77, compliance: 86, trend: -1, status: "Low" },
  { rank: 5, name: "Rail Wheel Factory", location: "Bangalore", tier: "Tier 1", components: 2, installedBase: 6420, score: 81, quality: 84, delivery: 82, financial: 78, concentration: 72, compliance: 84, trend: 2, status: "Low" },
  { rank: 6, name: "Hitachi Energy India", location: "Chennai", tier: "Tier 1", components: 3, installedBase: 2980, score: 80, quality: 82, delivery: 81, financial: 79, concentration: 75, compliance: 82, trend: 1, status: "Low" },
  { rank: 7, name: "Wabtec India", location: "Bangalore", tier: "Tier 1", components: 3, installedBase: 2450, score: 79, quality: 80, delivery: 83, financial: 76, concentration: 74, compliance: 80, trend: -2, status: "Low" },
  { rank: 8, name: "Siemens India Ltd.", location: "Mumbai", tier: "Tier 1", components: 4, installedBase: 3120, score: 78, quality: 81, delivery: 78, financial: 77, concentration: 70, compliance: 79, trend: 0, status: "Low" },
  { rank: 9, name: "Titagarh Wagons", location: "Kolkata", tier: "Tier 2", components: 2, installedBase: 1890, score: 76, quality: 78, delivery: 76, financial: 74, concentration: 68, compliance: 77, trend: 1, status: "Low" },
  { rank: 10, name: "Trinity House India", location: "Pune", tier: "Tier 2", components: 2, installedBase: 1420, score: 75, quality: 76, delivery: 77, financial: 72, concentration: 69, compliance: 76, trend: -1, status: "Low" },
  { rank: 11, name: "Havells India", location: "Noida", tier: "Tier 2", components: 2, installedBase: 1680, score: 74, quality: 75, delivery: 74, financial: 73, concentration: 66, compliance: 75, trend: 0, status: "Moderate" },
  { rank: 12, name: "Stone India Ltd.", location: "Kolkata", tier: "Tier 2", components: 3, installedBase: 2210, score: 73, quality: 74, delivery: 73, financial: 71, concentration: 65, compliance: 74, trend: -1, status: "Moderate" },
  { rank: 13, name: "Elgi Equipments", location: "Coimbatore", tier: "Tier 2", components: 2, installedBase: 1340, score: 72, quality: 73, delivery: 72, financial: 70, concentration: 64, compliance: 73, trend: 1, status: "Moderate" },
  { rank: 14, name: "Kirloskar Pneumatic", location: "Pune", tier: "Tier 2", components: 2, installedBase: 980, score: 71, quality: 72, delivery: 70, financial: 69, concentration: 63, compliance: 72, trend: 0, status: "Moderate" },
  { rank: 15, name: "Escorts Kubota", location: "Faridabad", tier: "Tier 2", components: 2, installedBase: 1120, score: 70, quality: 71, delivery: 69, financial: 68, concentration: 62, compliance: 71, trend: -2, status: "Moderate" },
  { rank: 16, name: "Schunk Carbon India", location: "Vadodara", tier: "Tier 2", components: 1, installedBase: 890, score: 68, quality: 65, delivery: 70, financial: 67, concentration: 60, compliance: 70, trend: -3, status: "Moderate" },
  { rank: 17, name: "Mersen India", location: "Chennai", tier: "Tier 2", components: 1, installedBase: 760, score: 67, quality: 64, delivery: 68, financial: 66, concentration: 59, compliance: 69, trend: -1, status: "Moderate" },
  { rank: 18, name: "Kernex Microsystems", location: "Hyderabad", tier: "Tier 3", components: 1, installedBase: 1120, score: 65, quality: 66, delivery: 63, financial: 64, concentration: 55, compliance: 67, trend: 0, status: "Moderate" },
  { rank: 19, name: "Sidwal Refrigeration", location: "Delhi", tier: "Tier 3", components: 1, installedBase: 2140, score: 64, quality: 62, delivery: 65, financial: 63, concentration: 54, compliance: 66, trend: -1, status: "Moderate" },
  { rank: 20, name: "Delta Electronics India", location: "Gurugram", tier: "Tier 2", components: 2, installedBase: 1560, score: 63, quality: 61, delivery: 64, financial: 62, concentration: 53, compliance: 65, trend: 1, status: "Moderate" },
  { rank: 21, name: "Precision Components Ltd.", location: "Pune", tier: "Tier 3", components: 1, installedBase: 680, score: 60, quality: 58, delivery: 62, financial: 59, concentration: 50, compliance: 61, trend: -2, status: "High" },
  { rank: 22, name: "Bharat Forge", location: "Pune", tier: "Tier 1", components: 3, installedBase: 4980, score: 59, quality: 55, delivery: 60, financial: 58, concentration: 48, compliance: 60, trend: -4, status: "High" },
  { rank: 23, name: "Medha Servo Drives", location: "Hyderabad", tier: "Tier 2", components: 2, installedBase: 1420, score: 58, quality: 52, delivery: 68, financial: 61, concentration: 44, compliance: 72, trend: -3, status: "High" },
  { rank: 24, name: "Raj Engineering Works", location: "Jaipur", tier: "Tier 3", components: 1, installedBase: 340, score: 51, quality: 48, delivery: 52, financial: 40, concentration: 45, compliance: 55, trend: -6, status: "High" },
];
