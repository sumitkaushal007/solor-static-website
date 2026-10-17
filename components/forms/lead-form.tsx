'use client';

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { buildLeadMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { validateLeadForm, type LeadFormErrors, type LeadFormValues } from "@/lib/validation";

const defaultValues: LeadFormValues = {
  fullName: "",
  mobile: "",
  customerType: "",
  location: "",
  monthlyBill: "",
  message: "",
  consent: false,
};

export function LeadForm({ initialValues = {} }: { initialValues?: Partial<LeadFormValues> }) {
  const [values, setValues] = useState<LeadFormValues>(() => {
    const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const locationValue = params?.get("location");
    const validLocation = locationValue === "Roorkee" || locationValue === "Haridwar" || locationValue === "Bhagwanpur" || locationValue === "Other" ? locationValue : "";

    return {
      ...defaultValues,
      ...initialValues,
      monthlyBill: params?.get("bill") ?? initialValues.monthlyBill ?? defaultValues.monthlyBill,
      location: validLocation || initialValues.location || defaultValues.location,
    } as LeadFormValues;
  });
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const formSummary = useMemo(
    () =>
      buildLeadMessage({
        fullName: values.fullName,
        mobile: values.mobile,
        customerType: values.customerType,
        location: values.location,
        monthlyBill: values.monthlyBill,
        message: values.message,
      }),
    [values],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    const checked = type === "checkbox" ? (event.target as HTMLInputElement).checked : undefined;

    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof LeadFormValues]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateLeadForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const whatsappHref = buildWhatsAppLink(formSummary);
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Free consultation</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Request your solar quote</h3>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-slate-700 dark:text-slate-200">Full name *</label>
            <input
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="Your full name"
            />
            {errors.fullName ? <p className="text-sm text-red-600">{errors.fullName}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile" className="text-sm font-medium text-slate-700 dark:text-slate-200">Mobile number *</label>
            <input
              id="mobile"
              name="mobile"
              inputMode="numeric"
              value={values.mobile}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="9876543210"
            />
            {errors.mobile ? <p className="text-sm text-red-600">{errors.mobile}</p> : null}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="customerType" className="text-sm font-medium text-slate-700 dark:text-slate-200">Customer type *</label>
            <select
              id="customerType"
              name="customerType"
              value={values.customerType}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="">Select type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>
            {errors.customerType ? <p className="text-sm text-red-600">{errors.customerType}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium text-slate-700 dark:text-slate-200">Location *</label>
            <select
              id="location"
              name="location"
              value={values.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="">Select location</option>
              <option value="Roorkee">Roorkee</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Bhagwanpur">Bhagwanpur</option>
              <option value="Other">Other</option>
            </select>
            {errors.location ? <p className="text-sm text-red-600">{errors.location}</p> : null}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="monthlyBill" className="text-sm font-medium text-slate-700 dark:text-slate-200">Monthly electricity bill (optional)</label>
          <input
            id="monthlyBill"
            name="monthlyBill"
            inputMode="numeric"
            value={values.monthlyBill}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            placeholder="₹ 4,500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">Message (optional)</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            placeholder="Tell us about your roof area, usage needs, or specific requirements."
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
            />
            <span>I consent to being contacted about my solar enquiry.</span>
          </label>
          {errors.consent ? <p className="text-sm text-red-600">{errors.consent}</p> : null}
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-500"
        >
          Send enquiry on WhatsApp <ArrowUpRight size={18} />
        </button>

        {submitted ? (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
            <CheckCircle2 size={18} className="mt-0.5" />
            <p>Your WhatsApp message is ready. Please press Send in WhatsApp to submit the enquiry.</p>
          </div>
        ) : null}
      </form>
    </div>
  );
}
