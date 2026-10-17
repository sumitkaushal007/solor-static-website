import Link from "next/link";

import { siteConfig } from "@/lib/config";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-xl shadow-sm dark:bg-emerald-500/15">
            ☀️
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{siteConfig.businessName}</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Clean Energy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-emerald-700 dark:text-slate-200 dark:hover:text-emerald-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
