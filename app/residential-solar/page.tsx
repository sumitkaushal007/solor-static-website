import Image from "next/image";
import type { Metadata } from "next";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaSection } from "@/components/shared/cta-section";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

export const metadata: Metadata = {
  title: "Residential solar solutions in Uttarakhand",
  description: "Explore residential rooftop solar systems for homes in Roorkee, Haridwar, Bhagwanpur, and nearby areas.",
};

const faqItems = [
  {
    question: "What system size is right for my home?",
    answer: "The right capacity depends on your monthly consumption, roof area, and usage patterns. A typical home may range from 3 to 8 kW depending on available roof space and demand.",
  },
  {
    question: "Do I need subsidy approval before installation?",
    answer: "You can discuss subsidy eligibility and required documentation during the initial consultation. The project quotation and exact eligibility are assessed case by case.",
  },
  {
    question: "Will my rooftop system work during monsoon or cloudy days?",
    answer: "Panels continue producing during cloudy weather, though generation may reduce compared with bright sunny days. A properly designed system balances weather fluctuations and consumption needs.",
  },
];

export default function ResidentialSolarPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Residential solar</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Clean power for your home</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Reduce your monthly electricity bills with rooftop solar designed around your family’s usage, roof characteristics, and future energy goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/solar-calculator" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500">Calculate savings</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">Request a quote</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
              alt="Residential solar panels on a roof"
              width={900}
              height={620}
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            ["3–5 kW", "Compact systems for efficient households and apartments with moderate daytime loads."],
            ["5–8 kW", "Balanced systems for larger homes, AC usage, and higher monthly consumption."],
            ["8 kW+", "Large residential installations for luxury homes, EV charging, and expanding needs."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Benefits</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Why homeowners choose rooftop solar</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Lower bills", "Use solar generation during the day to reduce dependence on expensive grid power."],
              ["Long-term value", "A rooftop system for your home can add long-term value and predictable energy costs."],
              ["Clean living", "Create a lower-carbon home while keeping your power supply more stable."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-500/10">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Government subsidy information</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-200">
            Subsidy availability, eligibility, and process details are governed by central and state programs and can change over time. Please check the official government portal for the latest scheme information and do not rely on this page as a final eligibility assessment.
          </p>
          <a
            href="https://solarrooftop.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
          >
            Visit the official rooftop solar portal
          </a>
        </section>

        <section className="mt-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">FAQs</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Common residential questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </section>
      </main>
      <CtaSection
        title="Ready to estimate your home solar savings?"
        description="See what a rooftop system could save, then request a free site discussion and quote."
        secondaryHref="/solar-calculator"
        secondaryLabel="Open calculator"
      />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
