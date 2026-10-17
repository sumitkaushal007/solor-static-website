import Image from "next/image";
import type { Metadata } from "next";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LeadForm } from "@/components/forms/lead-form";
import { CtaSection } from "@/components/shared/cta-section";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

export const metadata: Metadata = {
  title: "Commercial solar systems for businesses",
  description: "Commercial rooftop solar solutions for shops, offices, schools, hotels, warehouses, and factories in Uttarakhand.",
};

export default function CommercialSolarPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Commercial solar</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Power your business with cleaner daytime energy</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Solar offers a practical way to lower your operating cost if your business has meaningful daytime consumption, such as retail shops, offices, schools, hotels, warehouses, and industrial operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500">Book a site assessment</a>
              <a href="/solar-calculator" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">Estimate savings</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Commercial solar rooftop installation"
              width={900}
              height={620}
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>

        <section className="mt-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Ideal for</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Commercial sectors we support</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Shops & retail", "Support storefront operations and day-time energy needs with a cleaner power mix."],
              ["Offices & schools", "Reduce energy bills while creating a more sustainable facility profile."],
              ["Hotels & warehouses", "Improve operational efficiency and offset higher daytime loads."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            ["Lower operating costs", "Cut grid dependency for critical daytime loads and improve energy predictability."],
            ["Business continuity", "Reduce power volatility and strengthen your facility’s resilience."],
            ["Sustainability goals", "Build a stronger sustainability story for customers, staff, and stakeholders."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Commercial site assessment</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Share your energy usage profile, roof area, operating hours, and business type. We can review your facility and suggest a practical system design and quotation path.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>• Roof or ground-mounted options depending on available space.</li>
              <li>• Suitable sizing for shops, offices, hotels, schools, warehouses, and industrial spaces.</li>
              <li>• Guidance on connection, structure, and utility coordination.</li>
            </ul>
          </div>

          <LeadForm />
        </section>
      </main>
      <CtaSection
        title="Need a commercial solar quote?"
        description="Tell us about your site and electricity profile. We’ll help you evaluate the right solution for your business."
      />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
