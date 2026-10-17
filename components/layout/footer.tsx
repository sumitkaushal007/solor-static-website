import Link from "next/link";

import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200 dark:border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-lg">☀️</div>
            <div>
              <p className="text-lg font-bold text-white">{siteConfig.businessName}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Roorkee Solar</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Solar rooftop solutions for homes, businesses, and institutions across Roorkee, Haridwar, Bhagwanpur, and surrounding Uttarakhand regions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Service Areas</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {siteConfig.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <p>Residential, commercial, and industrial solar consultations.</p>
        </div>
      </div>
    </footer>
  );
}
