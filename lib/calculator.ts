import { solarAssumptions } from "@/lib/config";

export type SolarCalculatorInputs = {
  monthlyBill: number;
  tariff: number;
  rooftopArea: number;
  costPerKw: number;
  manualCapacity?: number;
  selfConsumption?: number;
};

export type SolarCalculationResult = {
  monthlyConsumptionKwh: number;
  recommendedCapacityKw: number;
  monthlyGenerationKwh: number;
  monthlySavings: number;
  annualSavings: number;
  systemCost: number;
  paybackYears: number | null;
};

function safeNumber(value: number | string | undefined): number {
  const parsed = typeof value === "number" ? value : Number(value ?? "");
  return Number.isFinite(parsed) ? parsed : 0;
}

export function calculateSolarSavings(input: SolarCalculatorInputs): SolarCalculationResult {
  const monthlyBill = Math.max(0, safeNumber(input.monthlyBill));
  const tariff = Math.max(0.01, safeNumber(input.tariff));
  const rooftopArea = Math.max(0, safeNumber(input.rooftopArea));
  const costPerKw = Math.max(0, safeNumber(input.costPerKw || solarAssumptions.defaultCostPerKw));
  const selfConsumption = clamp(
    safeNumber(input.selfConsumption ?? solarAssumptions.selfConsumptionDefault),
    solarAssumptions.selfConsumptionMin,
    solarAssumptions.selfConsumptionMax,
  );

  const monthlyConsumptionKwh = tariff > 0 ? monthlyBill / tariff : 0;
  const demandCapacityKw =
    solarAssumptions.daysPerMonth * solarAssumptions.dailyGenerationPerKw > 0
      ? monthlyConsumptionKwh / (solarAssumptions.daysPerMonth * solarAssumptions.dailyGenerationPerKw)
      : 0;

  const roofLimitKw = rooftopArea > 0 ? rooftopArea / solarAssumptions.rooftopSpacePerKw : Number.POSITIVE_INFINITY;
  const maxRecommendedCapacity = Math.min(
    demandCapacityKw,
    roofLimitKw,
    solarAssumptions.maxCapacityKw,
  );

  const selectedCapacityKw = clamp(
    safeNumber(input.manualCapacity ?? maxRecommendedCapacity),
    0,
    maxRecommendedCapacity || solarAssumptions.maxCapacityKw,
  );

  const monthlyGenerationKwh =
    selectedCapacityKw * solarAssumptions.dailyGenerationPerKw * solarAssumptions.daysPerMonth;

  const effectiveSolarUse = Math.min(monthlyGenerationKwh, monthlyConsumptionKwh) * selfConsumption;
  const monthlySavings = effectiveSolarUse * tariff;
  const annualSavings = monthlySavings * 12;
  const systemCost = selectedCapacityKw * costPerKw;
  const paybackYears = annualSavings > 0 ? systemCost / annualSavings : null;

  return {
    monthlyConsumptionKwh,
    recommendedCapacityKw: Number.isFinite(maxRecommendedCapacity) ? Math.max(0, maxRecommendedCapacity) : 0,
    monthlyGenerationKwh,
    monthlySavings,
    annualSavings,
    systemCost,
    paybackYears,
  };
}

function clamp(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(value, min), max);
}
