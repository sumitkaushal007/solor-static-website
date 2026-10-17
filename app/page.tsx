import Image from "next/image";
import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero";
import { ServiceCards } from "@/components/home/service-cards";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaSection } from "@/components/shared/cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

export const metadata: Metadata = {
  title: "Solar rooftop solutions in Roorkee & Haridwar",
  description: "Affordable solar rooftop systems for homes and businesses in Roorkee, Haridwar, Bhagwanpur, and nearby Uttarakhand areas.",
};

const faqItems = [
  {
    question: "What is the typical payback period for a rooftop solar system?",
    answer: "Payback depends on your electricity bill, self-consumption, roof area, and tariff. Many small to medium rooftop systems can achieve a payback within 4–7 years depending on the load profile and available sunlight.",
  },
  {
    question: "Do I need a battery for a residential rooftop system?",
    answer: "Not always. Most residential systems are grid-connected and use net metering. Batteries are optional and useful if you want backup during power outages or higher self-sufficiency.",
  },
  {
    question: "Can I use solar for commercial premises?",
    answer: "Yes. Commercial and industrial facilities with daytime consumption can often benefit from rooftop solar because the system produces energy during business hours when load demand is highest.",
  },
  {
    question: "Does the roof orientation affect performance?",
    answer: "Yes. Roof orientation, tilt, shading, and structural conditions influence generation. A site assessment helps determine the best system design and estimated production.",
  },
  {
    question: "How do I get a quotation?",
    answer: "Share your monthly bill, rooftop area, and project details using the contact form or WhatsApp. We will help assess the suitable system size and next steps.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceCards />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Why solar works</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Benefits of rooftop solar</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Lower electricity bills", "Reduce daytime power costs with solar generation aligned to your energy demand."],
              ["Clean energy", "Lower dependence on grid power and reduce your carbon footprint."],
              ["Power backup-ready", "Pair with battery backup or net metering to improve resilience and energy control."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-lg text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">✓</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16 dark:bg-slate-950/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Process</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">How the installation process works</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                ["1", "Site review", "We assess your load profile, roof area, and sunlight conditions."],
                ["2", "Design", "Our team prepares a system layout and energy estimate matching your consumption."],
                ["3", "Approval", "We review installation requirements, subsidy conditions, and utility coordination."],
                ["4", "Installation", "The project is installed, tested, and handed over with clear guidance."],
              ].map(([step, title, text]) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">{step}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Savings snapshot</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Solar savings calculator preview</h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-5 md:grid-cols-4">
              {[
                ["Monthly bill", "₹6,500"],
                ["Tariff", "₹7.5 / kWh"],
                ["Rooftop area", "500 sq ft"],
                ["Estimated savings", "₹32,000 / yr"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 dark:bg-slate-950/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Completed work</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Recent project highlights</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Residential rooftop", "4.5 kW home installation"],
                ["Commercial office", "12.5 kW commercial setup"],
                ["School campus", "18 kW solar array"],
              ].map(([heading, detail]) => (
                <div key={heading} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
                    alt={heading}
                    width={600}
                    height={300}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{heading}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">FAQs</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Questions before you switch</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </section>

        <CtaSection
          title="Talk to a solar expert today"
          description="Whether you need a rooftop system for your home or a commercial site assessment, we can guide you through the right design and next steps."
        />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
