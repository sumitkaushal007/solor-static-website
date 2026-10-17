import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-4 py-16 sm:px-6 lg:px-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_38%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
            <ShieldCheck size={16} />
            Net-metering ready rooftop solar
          </div>
          <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Switch to Solar in Roorkee & Haridwar
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Reduce electricity expenses with custom rooftop solar systems for homes and businesses built around your load profile and roof space.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/solar-calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-500"
            >
              Calculate Your Savings
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Get a Free Quote
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600" />Low maintenance</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600" />Custom design</span>
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-emerald-600" />Local service</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
              alt="Solar rooftop installation"
              width={800}
              height={520}
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl dark:border-emerald-900 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Typical savings</p>
            <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">₹18k–₹50k</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">monthly electricity offset</p>
          </div>
        </div>
      </div>
    </section>
  );
}
