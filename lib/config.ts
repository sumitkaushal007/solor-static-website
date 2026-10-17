export const solarAssumptions = {
  dailyGenerationPerKw: 4,
  daysPerMonth: 30,
  defaultCostPerKw: 60000,
  rooftopSpacePerKw: 100,
  selfConsumptionDefault: 0.7,
  selfConsumptionMin: 0.3,
  selfConsumptionMax: 0.9,
  maxCapacityKw: 50,
  maxCostPerKw: 120000,
} as const;

export const siteConfig = {
  businessName: "Solor Renewables",
  tagline: "Solar solutions for homes and businesses in Roorkee & Haridwar",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  serviceAreas: ["Roorkee", "Haridwar", "Bhagwanpur", "Nearby Uttarakhand areas"],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Residential Solar", href: "/residential-solar" },
    { label: "Commercial Solar", href: "/commercial-solar" },
    { label: "Solar Calculator", href: "/solar-calculator" },
    { label: "Contact", href: "/contact" },
  ],
};
