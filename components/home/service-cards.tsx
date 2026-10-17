import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

const services = [
  {
    title: "Residential Solar",
    description: "Smart rooftop systems for homes, villas, and apartment buildings with dependable year-round savings.",
    href: "/residential-solar",
    icon: Home,
    accent: "from-emerald-500 to-green-400",
  },
  {
    title: "Commercial Solar",
    description: "Business-focused installations for shops, offices, schools, warehouses, and industrial facilities.",
    href: "/commercial-solar",
    icon: Building2,
    accent: "from-amber-500 to-yellow-400",
  },
];

export function ServiceCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">What we do</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Solar solutions built for your usage pattern</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map(({ title, description, href, icon: Icon, accent }) => (
          <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white`}>
              <Icon size={26} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
            <Link href={href} className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-emerald-700 dark:text-emerald-300">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
