'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import { Calculator, IndianRupee, Sparkles } from "lucide-react";

import { solarAssumptions } from "@/lib/config";
import { calculateSolarSavings } from "@/lib/calculator";
import { Disclaimer } from "@/components/shared/disclaimer";

const defaultValues = {
  monthlyBill: "6500",
  tariff: "7.5",
  rooftopArea: "500",
  costPerKw: "60000",
  selfConsumption: `${solarAssumptions.selfConsumptionDefault}`,
  manualCapacity: "",
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function SolarCalculator() {
  const [values, setValues] = useState(defaultValues);

  const numericValues = useMemo(
    () => ({
      monthlyBill: Number(values.monthlyBill) || 0,
      tariff: Number(values.tariff) || 0,
      rooftopArea: Number(values.rooftopArea) || 0,
      costPerKw: Number(values.costPerKw) || solarAssumptions.defaultCostPerKw,
      selfConsumption: Number(values.selfConsumption) || solarAssumptions.selfConsumptionDefault,
      manualCapacity: Number(values.manualCapacity) || 0,
    }),
    [values],
  );

  const result = useMemo(
    () =>
      calculateSolarSavings({
        monthlyBill: numericValues.monthlyBill,
        tariff: numericValues.tariff,
        rooftopArea: numericValues.rooftopArea,
        costPerKw: numericValues.costPerKw,
        selfConsumption: numericValues.selfConsumption,
        manualCapacity: numericValues.manualCapacity > 0 ? numericValues.manualCapacity : undefined,
      }),
    [numericValues],
  );

  const hasRequiredInputs =
    numericValues.monthlyBill > 0 &&
    numericValues.tariff > 0 &&
    numericValues.rooftopArea > 0 &&
    numericValues.costPerKw > 0;

  const quoteHref = `/contact?bill=${encodeURIComponent(values.monthlyBill || "")}&tariff=${encodeURIComponent(values.tariff || "")}&area=${encodeURIComponent(values.rooftopArea || "")}&capacity=${encodeURIComponent(String(result.recommendedCapacityKw || 0))}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
          <Calculator size={22} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Savings estimator</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Estimate your solar output</h3>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="monthlyBill" className="text-sm font-medium text-slate-700 dark:text-slate-200">Monthly electricity bill (INR)</label>
            <input
              id="monthlyBill"
              name="monthlyBill"
              type="number"
              min="0"
              step="100"
              value={values.monthlyBill}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="tariff" className="text-sm font-medium text-slate-700 dark:text-slate-200">Electricity tariff (INR/kWh)</label>
            <input
              id="tariff"
              name="tariff"
              type="number"
              min="0"
              step="0.1"
              value={values.tariff}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="rooftopArea" className="text-sm font-medium text-slate-700 dark:text-slate-200">Usable rooftop area (sq ft)</label>
            <input
              id="rooftopArea"
              name="rooftopArea"
              type="number"
              min="0"
              step="10"
              value={values.rooftopArea}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="costPerKw" className="text-sm font-medium text-slate-700 dark:text-slate-200">Installation cost per kW (INR)</label>
            <input
              id="costPerKw"
              name="costPerKw"
              type="number"
              min="0"
              step="1000"
              value={values.costPerKw}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="selfConsumption" className="text-sm font-medium text-slate-700 dark:text-slate-200">Self-consumption ratio</label>
            <input
              id="selfConsumption"
              name="selfConsumption"
              type="number"
              min="0.3"
              max="0.9"
              step="0.05"
              value={values.selfConsumption}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="manualCapacity" className="text-sm font-medium text-slate-700 dark:text-slate-200">Optional system capacity (kW)</label>
            <input
              id="manualCapacity"
              name="manualCapacity"
              type="number"
              min="0"
              step="0.5"
              value={values.manualCapacity}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
        </div>

        <div className="space-y-5 rounded-[1.75rem] bg-slate-50 p-5 dark:bg-slate-950">
          {!hasRequiredInputs ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Add your monthly bill, tariff, rooftop area, and system cost to estimate savings. This calculator handles zero and negative values safely.
            </div>
          ) : (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                <StatBox label="Monthly consumption" value={`${formatNumber(result.monthlyConsumptionKwh)} kWh`} icon={<Sparkles size={18} />} />
                <StatBox label="Recommended capacity" value={`${formatNumber(result.recommendedCapacityKw)} kW`} icon={<Calculator size={18} />} />
                <StatBox label="Monthly generation" value={`${formatNumber(result.monthlyGenerationKwh)} kWh`} icon={<Sparkles size={18} />} />
                <StatBox label="Monthly savings" value={currencyFormatter.format(result.monthlySavings)} icon={<IndianRupee size={18} />} />
                <StatBox label="Annual savings" value={currencyFormatter.format(result.annualSavings)} icon={<IndianRupee size={18} />} />
                <StatBox label="System cost" value={currencyFormatter.format(result.systemCost)} icon={<IndianRupee size={18} />} />
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-100">
                {result.paybackYears === null ? (
                  <p>Estimated payback is not available yet because annual savings are zero or negative.</p>
                ) : (
                  <p>Estimated payback period: {formatNumber(result.paybackYears)} years.</p>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={quoteHref}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  Get a Free Solar Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  Talk to an Expert
                </Link>
              </div>
            </>
          )}

          <Disclaimer />
        </div>
      </div>
    </div>
  );
}

function StatBox({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "0";
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(value);
}
