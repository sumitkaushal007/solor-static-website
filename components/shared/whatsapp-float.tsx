import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/config";

export function WhatsAppFloat() {
  const href = `https://wa.me/${String(siteConfig.whatsappNumber).replace(/\D/g, "")}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition hover:scale-105"
    >
      <MessageCircle size={26} />
    </Link>
  );
}
