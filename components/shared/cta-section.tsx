import Link from "next/link";

export function CtaSection({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Get a Free Quote",
  secondaryHref = "/solar-calculator",
  secondaryLabel = "Estimate Savings",
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl dark:bg-slate-950 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Ready to go solar?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-white transition hover:border-slate-500">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
