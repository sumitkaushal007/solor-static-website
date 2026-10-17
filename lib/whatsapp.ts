import { siteConfig } from "@/lib/config";

export function buildWhatsAppLink(message: string, number = siteConfig.whatsappNumber) {
  const baseNumber = String(number || "919999999999").replace(/\D/g, "");
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}

export function buildLeadMessage(params: {
  fullName: string;
  mobile: string;
  customerType: string;
  location: string;
  monthlyBill?: string;
  message?: string;
}) {
  const billText = params.monthlyBill ? `Approx monthly electricity bill: ₹${params.monthlyBill}\n` : "";
  const extraMessage = params.message ? `Additional details: ${params.message}\n` : "";

  return [
    "Hello Solor Renewables,",
    `I am ${params.fullName}.`,
    `Phone: ${params.mobile}`,
    `Customer type: ${params.customerType}`,
    `Location: ${params.location}`,
    billText,
    extraMessage,
    "Please share a quotation and next steps for my solar requirement.",
  ].join("\n");
}
