import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import EcoFriendlyPractices from "@/components/EcoFriendlyPractices";

export const metadata: Metadata = {
  title: "Eco-Friendly Insulation Solutions | On Point Insulation",
  description:
    "On Point Insulation provides precision-engineered eco-friendly spray foam insulation in Durango, CO. Reduce energy costs up to 60%. Free quotes available.",
  alternates: { canonical: "https://on-point-insulation.com" },
};

export default function Home() {
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
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary-container/40 px-4 py-1.5 text-sm font-semibold text-on-secondary-container">
              <span className="material-symbols-outlined text-[18px]">eco</span>
              Sustainability First
            </span>

            <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Eco-Friendly Insulation Solutions for Every&nbsp;Space.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
              Precision-engineered thermal protection that slashes energy costs
              while preserving our planet.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/quote" arrow>
                Get a Free Quote
              </CTAButton>
              <CTAButton href="#services" variant="outline">
                View Projects
              </CTAButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/residential-rafters.webp"
              alt="On Point Insulation spray foam applied to residential rafters in Durango, CO"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              preload
            />
          </div>
        </div>
      </section>

      {/* ───────────────────── STATS BENTO GRID ──────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Large eco-legacy card — spans 2 cols */}
            <div className="flex flex-col justify-between gap-6 rounded-3xl bg-surface-container-low p-8 sm:col-span-2">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined text-[28px]">
                  eco
                </span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-primary">
                  Eco-Friendly Legacy
                </h3>
                <p className="mt-2 text-on-surface-variant">
                  We&apos;ve helped over 2,500 homeowners reduce their carbon
                  footprint by an average of 35%.
                </p>
              </div>
            </div>

            {/* 98% card */}
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-on-primary">
              <span className="font-headline text-5xl font-extrabold">98%</span>
              <p className="text-sm font-medium text-on-primary/80">
                Customer Satisfaction
              </p>
            </div>

            {/* 15+ card */}
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-8 text-on-secondary">
              <span className="font-headline text-5xl font-extrabold">15+</span>
              <p className="text-sm font-medium text-on-secondary/80">
                Industry Awards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── SERVICES ──────────────────────── */}
      <section id="services" className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left sticky sidebar */}
            <div className="lg:sticky lg:top-28 lg:col-span-2 lg:self-start">
              <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                Precision in Every&nbsp;Layer.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                From single-family homes to industrial complexes, our
                certified technicians deliver insulation that performs for
                decades.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Residential Retrofitting",
                  "Commercial Energy Audits",
                  "Sustainable Material Sourcing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                      <span className="material-symbols-outlined text-[18px]">
                        check
                      </span>
                    </span>
                    <span className="font-medium text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: offset service cards */}
            <div className="flex flex-col gap-8 lg:col-span-3 lg:pt-12">
              {/* Residential card */}
              <Link
                href="/residential"
                className="group overflow-hidden rounded-3xl bg-surface-container-low shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/images/closed-cell-new-construction.webp"
                    alt="On Point Insulation closed-cell spray foam in new residential construction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-headline text-xl font-bold text-primary">
                    Residential
                  </h3>
                  <p className="mt-2 text-on-surface-variant">
                    Attic air sealing and wall insulation designed for long-term
                    comfort and quiet.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Learn more
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>

              {/* Commercial card — offset on larger screens */}
              <Link
                href="/commercial"
                className="group overflow-hidden rounded-3xl bg-surface-container-low shadow-md transition-shadow hover:shadow-xl lg:ml-16"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/images/metal-building.webp"
                    alt="On Point Insulation spray foam in commercial metal building in Durango"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-headline text-xl font-bold text-primary">
                    Commercial
                  </h3>
                  <p className="mt-2 text-on-surface-variant">
                    Scalable solutions for warehouses, offices, and large-scale
                    industrial projects.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Learn more
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── CORE VALUES ─────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        {/* Decorative blur circle */}
        <div className="pointer-events-none absolute -right-32 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-secondary/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold text-on-primary sm:text-4xl lg:text-5xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-on-primary/80">
              Built on a foundation of integrity, we don&apos;t just fill gaps;
              we create protective envelopes that last a lifetime.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Precision */}
            <div className="rounded-3xl border border-on-primary/10 bg-on-primary/5 p-8 backdrop-blur-sm">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined text-[28px]">
                  precision_manufacturing
                </span>
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold text-on-primary">
                Precision
              </h3>
              <p className="mt-2 text-on-primary/70">
                Every project is measured, planned, and executed with exacting
                standards. We use calibrated equipment and trained crews to
                deliver consistent coverage with zero guesswork.
              </p>
            </div>

            {/* Sustainability */}
            <div className="rounded-3xl border border-on-primary/10 bg-on-primary/5 p-8 backdrop-blur-sm">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined text-[28px]">
                  park
                </span>
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold text-on-primary">
                Sustainability
              </h3>
              <p className="mt-2 text-on-primary/70">
                From low-VOC products to shore-power rigs, we make deliberate
                choices that reduce environmental impact without compromising
                performance or longevity.
              </p>
            </div>

            {/* Longevity */}
            <div className="rounded-3xl border border-on-primary/10 bg-on-primary/5 p-8 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined text-[28px]">
                  shield
                </span>
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold text-on-primary">
                Longevity
              </h3>
              <p className="mt-2 text-on-primary/70">
                We install insulation that performs for the life of your building.
                Our materials and methods are chosen for decades of reliable
                thermal protection, not just short-term savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── ECO-FRIENDLY PRACTICES (CLIENT) ──────────── */}
      <EcoFriendlyPractices />

      {/* ─────────────────────── FINAL CTA ────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Ready to Optimize Your&nbsp;Space?
          </h2>
          <p className="mt-4 text-lg text-on-surface-variant">
            Get an instant estimate for your project.
          </p>
          <div className="mt-8">
            <CTAButton href="/quote" arrow>
              Request Your Quote Now
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
