import type { Metadata } from "next";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SolarCalculator } from "@/components/calculator/solar-calculator";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

export const metadata: Metadata = {
  title: "Solar savings calculator",
  description: "Estimate the potential savings from a rooftop solar system in Roorkee, Haridwar, and nearby Uttarakhand locations.",
};

export default function SolarCalculatorPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Solar calculator</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Estimate your solar savings</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Use this indicative estimate to understand your likely solar generation, savings potential, and payback timeline.
          </p>
        </div>
        <SolarCalculator />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
