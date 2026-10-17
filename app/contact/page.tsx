import type { Metadata } from "next";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LeadForm } from "@/components/forms/lead-form";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

export const metadata: Metadata = {
  title: "Contact solar experts",
  description: "Request a free rooftop solar consultation in Roorkee, Haridwar, Bhagwanpur, and nearby Uttarakhand areas.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Contact</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Request a free solar consultation</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Share your requirement, and we will guide you with the next steps and a custom quotation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Need a quick answer?</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li><strong className="text-slate-900 dark:text-white">Service areas:</strong> Roorkee, Haridwar, Bhagwanpur, and nearby Uttarakhand regions.</li>
              <li><strong className="text-slate-900 dark:text-white">Consultation:</strong> Residential, commercial, and industrial solar project discussions.</li>
              <li><strong className="text-slate-900 dark:text-white">WhatsApp:</strong> Use the form below to prepare a pre-filled enquiry and send it on WhatsApp.</li>
            </ul>
          </div>

          <LeadForm />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
