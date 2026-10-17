import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist or has moved. Head back to the homepage to explore solar options.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
        >
          Go to homepage
        </Link>
      </div>
    </main>
  );
}
