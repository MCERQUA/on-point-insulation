import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Insulation Services in Durango, CO | Four Corners Region",
  description:
    "On Point Insulation serves Durango, Bayfield, Cortez, and the Four Corners region. LPEA rebate registered contractor. Get up to $500 back on insulation upgrades.",
  alternates: { canonical: "https://on-point-insulation.com/durango" },
};

const SERVICE_CITIES = [
  "Durango",
  "Bayfield",
  "Cortez",
  "Mancos",
  "Ignacio",
  "Pagosa Springs",
] as const;

export default function DurangoPage() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-container-low to-surface-container py-20 md:py-28 lg:py-32">
        {/* Decorative blurs */}
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-secondary-container/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-[400px] rounded-full bg-primary-fixed-dim/20 blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary-container/40 px-4 py-1.5 text-xs font-bold text-on-secondary-container">
              <span className="material-symbols-outlined text-sm">location_on</span>
              DURANGO, CO &amp; THE FOUR CORNERS
            </span>

            <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl lg:text-7xl lg:leading-[1.1]">
              High-Performance Insulation for the{" "}
              <span className="text-secondary">High Desert.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Precision-engineered thermal protection tailored for
              Durango&apos;s unique alpine climate. From Bayfield to Cortez, we
              keep Four Corners homes comfortable and energy-efficient
              year-round.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/quote" arrow>
                Schedule Local Inspection
              </CTAButton>
              <CTAButton href="#services" variant="outline">
                Explore Services
              </CTAButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero-home.webp"
                alt="Modern architectural mountain home in Durango Colorado surrounded by ponderosa pines with sunset glowing on the wood siding and large windows"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl bg-white p-6 shadow-xl md:block">
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  energy_savings_leaf
                </span>
                <span className="font-bold text-on-surface">
                  Local Efficiency Expert
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">
                Proudly serving La Plata, Montezuma, and Archuleta counties
                since 2012.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── BENTO GRID SERVICES ──────────────────── */}
      <section id="services" className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
              Precision Services
            </h2>
            <p className="mt-4 max-w-2xl text-on-surface-variant">
              Specialized insulation solutions designed for the extreme
              temperature swings of the San Juan Mountains.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Spray Foam — large card */}
            <div className="relative overflow-hidden rounded-3xl bg-surface-container-low p-8 md:col-span-2">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-on-secondary">
                    MOST POPULAR
                  </span>
                  <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">
                    Eco-Friendly Spray Foam
                  </h3>
                  <p className="mb-6 max-w-md text-on-surface-variant">
                    The ultimate air barrier for high-altitude builds. Stop heat
                    loss in its tracks and eliminate drafts from our fierce
                    mountain winds.
                  </p>
                </div>
                <Link
                  href="/services/spray-foam"
                  className="inline-flex items-center gap-2 font-bold text-secondary transition-all hover:gap-4"
                >
                  Learn about Spray Foam
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </Link>
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 scale-150 opacity-10">
                <span className="material-symbols-outlined text-[200px]">
                  format_paint
                </span>
              </div>
            </div>

            {/* Attic Air Sealing */}
            <div className="flex flex-col justify-between rounded-3xl bg-surface-container-highest p-8">
              <div>
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <span className="material-symbols-outlined text-primary">
                    roofing
                  </span>
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-on-surface">
                  Attic Air Sealing
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Essential for preventing ice dams — a common Durango winter
                  headache. We seal the leaks you can&apos;t see.
                </p>
              </div>
              <Link
                href="/services/attic"
                className="mt-8 text-sm font-bold text-primary"
              >
                View Attic Solutions
              </Link>
            </div>

            {/* Blown-In Cellulose */}
            <div className="flex flex-col justify-between rounded-3xl bg-surface-container-high p-8">
              <div>
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <span className="material-symbols-outlined text-primary">
                    cloud
                  </span>
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-on-surface">
                  Blown-In Cellulose
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Sustainable, fire-resistant, and perfect for topping up older
                  Durango bungalows or North Hill historic homes.
                </p>
              </div>
              <Link
                href="/services/cellulose"
                className="mt-8 text-sm font-bold text-primary"
              >
                Explore Cellulose
              </Link>
            </div>

            {/* Commercial Solutions — large dark card */}
            <div className="flex flex-col items-center gap-8 rounded-3xl bg-inverse-surface p-8 md:col-span-2 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 font-headline text-3xl font-bold text-on-primary">
                  Commercial Solutions
                </h3>
                <p className="mb-6 text-on-surface-variant/80">
                  Serving Durango businesses, hotels, and industrial centers
                  with large-scale insulation and thermal imaging diagnostics.
                </p>
                <div className="flex gap-4">
                  {["Licensed", "Bonded", "Insured"].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1 text-xs text-on-primary"
                    >
                      <span className="material-symbols-outlined text-sm">
                        check_circle
                      </span>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-48 w-full overflow-hidden rounded-2xl md:w-64">
                <Image
                  src="/images/metal-building-finished.webp"
                  alt="Professional installation of rigid board insulation on a commercial building frame under clear blue sky"
                  fill
                  sizes="(max-width: 768px) 100vw, 256px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── LOCAL INCENTIVES & SERVICE AREA ──────────── */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Incentives */}
            <div>
              <h2 className="mb-8 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                Save with LPEA &amp; Durango&nbsp;Incentives
              </h2>

              <div className="space-y-8">
                {/* La Plata Electric Rebates */}
                <div className="flex gap-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <span
                      className="material-symbols-outlined text-on-secondary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      payments
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-on-surface">
                      La Plata Electric Rebates
                    </h4>
                    <p className="text-on-surface-variant">
                      We are a registered contractor for LPEA energy efficiency
                      programs. Get up to <strong>$500 back</strong> on
                      qualified insulation upgrades.
                    </p>
                  </div>
                </div>

                {/* Federal Tax Credits */}
                <div className="flex gap-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <span
                      className="material-symbols-outlined text-on-secondary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      account_balance
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-on-surface">
                      Federal Tax Credits (25C)
                    </h4>
                    <p className="text-on-surface-variant">
                      Under the Inflation Reduction Act, Durango homeowners can
                      claim up to <strong>30% of insulation costs</strong> back
                      on federal taxes.
                    </p>
                  </div>
                </div>

                {/* Community First */}
                <div className="flex gap-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <span
                      className="material-symbols-outlined text-on-secondary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      volunteer_activism
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-on-surface">
                      Community First
                    </h4>
                    <p className="text-on-surface-variant">
                      Proud supporters of Habitat for Humanity of the La Plata
                      Valley and Durango Green Business Program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-12">
              <h3 className="mb-6 font-headline text-2xl font-bold text-on-surface">
                Service Area Coverage
              </h3>
              <div className="mb-8 grid grid-cols-2 gap-4">
                {SERVICE_CITIES.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 rounded-xl bg-surface p-3"
                  >
                    <span className="material-symbols-outlined text-secondary">
                      pin_drop
                    </span>
                    <span className="font-medium text-on-surface">{city}</span>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-surface-container-highest grayscale">
                <span className="material-symbols-outlined text-4xl text-outline">
                  map
                </span>
                <p className="ml-2 font-bold text-outline">
                  Interactive Map Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── CONTACT SECTION ───────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 md:flex-row lg:px-8">
          {/* Contact info */}
          <div className="flex-1">
            <h2 className="mb-6 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
              Talk to a Durango Expert
            </h2>
            <p className="mb-10 text-on-surface-variant">
              We don&apos;t use high-pressure sales. We provide data-driven
              energy audits and honest recommendations for Four Corners homes.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary-fixed-dim">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    phone
                  </span>
                </div>
                <a
                  href="tel:+19705550123"
                  className="text-xl font-bold text-on-surface hover:text-secondary"
                >
                  (970) 555-0123
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary-fixed-dim">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    mail
                  </span>
                </div>
                <a
                  href="mailto:hello@onpointdurango.com"
                  className="text-xl font-bold text-on-surface hover:text-secondary"
                >
                  hello@onpointdurango.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary-fixed-dim">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
                <span className="text-lg text-on-surface">
                  835 Main Ave, Ste 225, Durango, CO 81301
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="w-full max-w-md rounded-3xl bg-surface-container-high p-8">
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border-none bg-surface-container-highest p-4 focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Service City
                </label>
                <select className="w-full rounded-xl border-none bg-surface-container-highest p-4 focus:ring-2 focus:ring-secondary">
                  <option>Durango</option>
                  <option>Bayfield</option>
                  <option>Cortez</option>
                  <option>Other Four Corners</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Message
                </label>
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full rounded-xl border-none bg-surface-container-highest p-4 focus:ring-2 focus:ring-secondary"
                />
              </div>

              <button
                type="submit"
                className="cta-gradient mt-4 w-full rounded-xl py-4 font-bold text-white shadow-lg"
              >
                Send Local Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
