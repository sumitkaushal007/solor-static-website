type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900" open={index === 0}>
          <summary className="cursor-pointer list-none text-left text-base font-semibold text-slate-900 dark:text-white">
            <span className="flex items-center justify-between gap-4">
              <span>{item.question}</span>
              <span className="text-xl text-emerald-600 transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
