# Build a Static Solar Lead Generation Website Using Next.js

## Project Objective
Build a professional, modern, mobile-responsive solar business website for a solar installation business operating in Roorkee, Haridwar, Bhagwanpur, and nearby areas in Uttarakhand, India.

The website must generate residential and commercial solar installation enquiries and help visitors estimate potential electricity savings.

This is an MVP. Do not implement a database, backend API, authentication, admin dashboard, payment gateway, or CRM.

## 1. Technology Stack
- Next.js with App Router
- TypeScript
- Tailwind CSS
- React functional components and hooks
- Lucide React icons
- Static-friendly architecture
- npm for package management

Use stable package versions compatible with the project environment. If a Next.js project already exists, inspect it and preserve its working configuration before making changes.

## 2. Pages and Routes

### Home: `/`
Include:
- Responsive header and navigation
- Hero section with headline: "Switch to Solar in Roorkee & Haridwar"
- Primary CTA: "Calculate Your Savings"
- Secondary CTA: "Get a Free Quote"
- Residential and commercial solar service cards
- Benefits of rooftop solar
- How the installation process works
- Solar savings calculator preview
- Completed projects/testimonial section using placeholders when real content is unavailable
- FAQ section
- Footer with contact details and service areas

### Residential Solar: `/residential-solar`
Include:
- Residential rooftop solar overview
- Benefits and system capacity options
- Indicative savings information
- Subsidy information with an official government portal link
- FAQs
- CTA to the calculator and contact form

Do not promise subsidy eligibility or guaranteed savings.

### Commercial Solar: `/commercial-solar`
Include:
- Solutions for shops, offices, schools, hotels, warehouses, and factories
- Benefits for businesses with significant daytime electricity consumption
- Commercial site assessment and quotation CTA
- Enquiry form or reusable lead form component

### Solar Calculator: `/solar-calculator`
Build a functional client-side solar savings calculator.

Inputs:
- Monthly electricity bill in INR
- Electricity tariff in INR/kWh
- Usable rooftop area in square feet
- Estimated system installation cost per kW
- Optional manually selected system capacity

Outputs:
- Estimated monthly consumption in kWh
- Recommended solar capacity in kW
- Estimated monthly solar generation
- Estimated monthly electricity savings
- Estimated annual savings
- Estimated system cost
- Estimated simple payback period

Use configurable assumptions for daily generation per kW, system sizing, system cost, and self-consumption.

Default illustrative assumption:
- Daily generation per kW: 4 kWh
- Days per month: 30
- Example installation cost: ₹60,000 per kW

These are illustrative defaults, not verified local guarantees. Keep them in a central configuration file so they can be changed easily.

Calculation guidance:
- Monthly consumption = monthly electricity bill / electricity tariff
- Capacity estimate = monthly consumption / (days per month × daily generation per kW)
- Apply rooftop-area constraints and configurable sizing limits
- Monthly generation = capacity × daily generation per kW × days per month
- Monthly savings should consider configurable self-consumption and tariff assumptions
- Annual savings = monthly savings × 12
- Payback period = net installation cost / annual savings

Avoid division by zero and invalid numeric inputs. Display a helpful empty state when required inputs are missing.

Make the calculator interactive and update results when inputs change. Format Indian currency using the en-IN locale.

Display this disclaimer:
"These results are indicative estimates, not a final quotation or a guarantee of savings. Actual performance depends on roof orientation, shading, system design, electricity tariff, self-consumption, and applicable regulations."

Include a "Get a Free Solar Quote" button that navigates to the contact page and pre-fills available calculator details where practical.

### Contact: `/contact`
Create a lead enquiry form with:
- Full name (required)
- Mobile number (required; validate a 10-digit Indian mobile number)
- Customer type: Residential, Commercial, or Industrial
- Location: Roorkee, Haridwar, Bhagwanpur, or Other
- Monthly electricity bill (optional)
- Message (optional)
- Explicit consent checkbox

On submission:
1. Validate all required fields.
2. Display clear validation messages.
3. Construct a formatted enquiry message.
4. Open WhatsApp click-to-chat with a pre-filled message.
5. Do not claim that the lead has been saved to a database.
6. Explain that the customer must press Send in WhatsApp to submit the enquiry.

Do not send messages automatically.

## 3. WhatsApp and Contact Configuration
- Use a configurable business WhatsApp number.
- Store the number in `.env.local` as `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Use international digits only, including the country code, without a plus sign or spaces.
- Provide `.env.example` with a clearly documented placeholder.
- Do not invent a real business number.
- Implement click-to-chat with a properly URL-encoded message.
- Reuse the WhatsApp CTA throughout the website.

## 4. Components
Create reusable components for:
- Header
- Footer
- Mobile navigation
- Hero section
- Service cards
- Lead form
- Solar calculator
- FAQ accordion
- WhatsApp floating button
- Call-to-action section
- Disclaimer
- Form validation messages

Organize components and utilities logically. Keep calculation logic separate from UI components and add TypeScript types.

## 5. Design Requirements
- Professional renewable-energy brand identity
- White/light backgrounds, deep green primary color, subtle yellow accents
- Consistent typography, spacing, and border radii
- High-quality solar imagery with appropriate fallbacks
- Mobile-first responsive design
- Accessible labels, keyboard navigation, and visible focus states
- Clear loading and error states where applicable
- Prominent contact and quote CTAs
- Avoid unnecessary animations and excessive visual effects
- There should be a theme change button also on header (dark & light)

Do not fabricate customer reviews, installation counts, certifications, partnerships, company history, or guaranteed savings.

## 6. SEO
- Add page-specific metadata titles and descriptions.
- Include canonical metadata when the production domain is configured.
- Generate a sitemap and robots.txt.
- Use semantic HTML and descriptive image alt text.
- Add appropriate LocalBusiness/Organization structured data only for verified business information.
- Do not fabricate a business address or public storefront.

## 7. Static Architecture
- The website must not require a database or backend service.
- Keep pages and components compatible with static generation.
- Configure static export if supported by the selected Next.js features.
- Avoid server-dependent features that prevent static export.
- Do not create API routes.
- Lead submission should use WhatsApp click-to-chat.
- Store calculator assumptions in a central configuration file.

## 8. Suggested Project Structure
- `app/page.tsx`
- `app/residential-solar/page.tsx`
- `app/commercial-solar/page.tsx`
- `app/solar-calculator/page.tsx`
- `app/contact/page.tsx`
- `components/layout/`
- `components/home/`
- `components/forms/`
- `components/calculator/`
- `components/shared/`
- `lib/calculator.ts`
- `lib/validation.ts`
- `lib/whatsapp.ts`
- `lib/config.ts`
- `public/images/`
- `.env.example`
- `README.md`

Adjust the structure if the existing project has a different established convention.

## 9. Quality Requirements
- No TypeScript errors
- No broken navigation links
- No broken images
- No console errors
- Validate all form inputs
- Handle zero, negative, and missing calculator inputs
- Test mobile and desktop layouts
- Test all CTA buttons and WhatsApp message formatting
- Test all calculator formulas and edge cases
- Run lint, type checking, and production build
- Fix errors before completion

## 10. Deliverables
Implement the working website in the current repository, not just a design proposal.

After implementation:
1. Provide a summary of completed features.
2. List files created or modified.
3. Explain environment setup.
4. Include commands to install dependencies and run locally.
5. Explain how to configure the WhatsApp number.
6. Explain how to build and deploy the static website.
7. List any assumptions or remaining placeholders.

Prioritize a functional, polished, production-ready MVP over unnecessary features.