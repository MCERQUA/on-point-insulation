import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Commercial Insulation Services",
  description:
    "High-performance commercial insulation solutions for warehouses, offices, and industrial facilities in Durango, CO. Reduce energy costs by 45%. Licensed, bonded, insured.",
  alternates: { canonical: "https://on-point-insulation.com/commercial" },
};

export default function CommercialPage() {
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
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary-container/40 px-4 py-1.5 text-sm font-bold tracking-wide text-on-secondary-container">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              COMMERCIAL EXCELLENCE
            </span>

            <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Superior Thermal{" "}
              <span className="text-secondary">Performance</span> for
              Industry.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Precision-engineered insulation solutions for warehouses, corporate
              offices, and industrial complexes. We combine structural integrity
              with advanced energy efficiency to lower overhead and enhance
              environmental ratings.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/quote" arrow>
                Consult Our Engineers
              </CTAButton>
              <CTAButton href="#services" variant="outline">
                View Project Gallery
              </CTAButton>
            </div>
          </div>

          {/* Hero Image + Floating Stat */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWUbKzFsubVu_ZSiqB3-2I_RwtLTZXoyHTqWsxgWxhDq3XzI1hCTI7t7lgZiJZHHCzf5TpLOOWJef1FuifZm7YSmaN7WwxZDRAmRH9InS4fc3V7hN_hspEXn3N4miUEA6Maq4qK6IlP_E4XTObRwolND_101ZaZGs2dAyKanGyHzHddXilVtcsTJlCH6CzBMmAQ3oU3IYdGC9sPZHlJFvZNPa_4BoJorHet_3TGqM9hOQOJao9rDGIdDE6xd-CuUKeSVQp8F4C-c"
                alt="Modern industrial warehouse interior with clean white insulation panels and steel structures under bright natural skylight"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                preload
              />
            </div>
            {/* Floating 45% stat card */}
            <div className="absolute -bottom-8 -left-8 max-w-xs rounded-2xl border border-outline-variant/10 bg-surface p-8 shadow-xl">
              <div className="font-headline text-4xl font-black tracking-tighter text-secondary">
                45%
              </div>
              <p className="mt-2 font-medium text-on-surface-variant">
                Average reduction in annual energy expenditure for our commercial
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── BENTO GRID SERVICES ────────────── */}
      <section
        id="services"
        className="bg-surface-container-low py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
              High-Performance Commercial Solutions
            </h2>
            <p className="mt-4 text-on-surface-variant">
              Tailored insulation strategies that meet rigorous building codes
              while maximizing your facility&apos;s long-term value.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* ── Large Feature: Industrial Spray Foam (col-span-2) ── */}
            <div className="group flex flex-col justify-between rounded-[2rem] bg-surface p-10 shadow-sm transition-shadow hover:shadow-md md:col-span-2">
              <div>
                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-secondary-container/30 text-secondary">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    warehouse
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold">
                  Industrial Spray Foam
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-on-surface-variant">
                  Our high-density spray foam creates a seamless air barrier that
                  adds structural rigidity and provides unmatched thermal
                  resistance for large-scale facilities.
                </p>
              </div>
              <div className="mt-12 flex items-end justify-between">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-lg text-secondary">
                      check_circle
                    </span>
                    R-Value Optimization
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-lg text-secondary">
                      check_circle
                    </span>
                    Structural Reinforcement
                  </li>
                </ul>
                <div className="hidden size-32 overflow-hidden rounded-full border-4 border-surface-container-low lg:block">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKAyi6jV2gfwhz1fQACvlpo47BMrZdL7aC84A2_B-4vgnALU8feNXfR06H69EYfvfuVbIsXjzdoKQLaBTdiMM5G5jXrun3XGRGQ6P8FrF-OcWeBFLUoAVIu6TO2kQx-g9fZNBJMvgwviqI2Fw53kseRZXi9UwJKKAD0lAVN3qotFMeg6E82VubRBkRBZQjOBiShwREoc9loIFUcm9ou0rI9dvBSXZtD5cBVzNmvT6c-Ld1vGFO4DyHRIVaUMiXfvBuqvD34YwkoI"
                    alt="Worker in protective gear applying high-density spray foam to a commercial wall structure"
                    width={128}
                    height={128}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ── Vertical Feature: Office Retrofitting ── */}
            <div className="flex flex-col justify-between rounded-[2rem] bg-primary p-10 text-on-primary">
              <div>
                <span className="material-symbols-outlined mb-8 text-[32px] text-primary-fixed-dim">
                  domain
                </span>
                <h3 className="font-headline text-2xl font-bold">
                  Office Retrofitting
                </h3>
                <p className="mt-4 leading-relaxed text-on-primary/80">
                  Upgrade your corporate headquarters with minimal disruption to
                  daily operations.
                </p>
              </div>
              <div className="mt-8 rounded-2xl bg-on-primary/10 p-6">
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">
                  Result
                </div>
                <p className="text-sm">
                  90% reduction in acoustic bleed between floors.
                </p>
              </div>
            </div>

            {/* ── Small Feature: Air Sealing ── */}
            <div className="rounded-[2rem] bg-surface p-8 shadow-sm">
              <span className="material-symbols-outlined mb-6 text-[28px] text-secondary">
                air
              </span>
              <h4 className="font-headline font-bold">Air Sealing</h4>
              <p className="mt-2 text-sm text-on-surface-variant">
                Precision sealing of penetrations to stop climate-controlled air
                from escaping.
              </p>
            </div>

            {/* ── Small Feature: Thermal Barriers ── */}
            <div className="rounded-[2rem] bg-surface p-8 shadow-sm">
              <span className="material-symbols-outlined mb-6 text-[28px] text-secondary">
                fire_extinguisher
              </span>
              <h4 className="font-headline font-bold">Thermal Barriers</h4>
              <p className="mt-2 text-sm text-on-surface-variant">
                Compliant fire-rated coatings for exposed insulation in
                commercial spaces.
              </p>
            </div>

            {/* ── Small Feature: Energy Audits ── */}
            <div className="rounded-[2rem] bg-surface p-8 shadow-sm">
              <span className="material-symbols-outlined mb-6 text-[28px] text-secondary">
                monitoring
              </span>
              <h4 className="font-headline font-bold">Energy Audits</h4>
              <p className="mt-2 text-sm text-on-surface-variant">
                FLIR thermal imaging reports to identify ROI potential before we
                begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── TESTIMONIAL ──────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
          {/* Image */}
          <div className="relative lg:w-1/2">
            <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFd37zYLITZqnDfBad6ZnU_ke_8PMnbtWvbmPyrf95vyBVuCoLDeUd_G5ZQcyKemNZVmotNj2LwTpqpZ9AmNZ0uC--LD9szMkEz7EsXY4LTNTT2FGzTeckmxI8pKxkC5MfEmGsaQstNjR-pXX8zoEZUHns6qbkX2pICChAIzwZ_cSz8s13f_k5QU1IDFjsld4rz-XXLWParQIw-udDve56W19OGIX3uPLuYfhc7yqJVZ4jK3sSptqC6O6-MhtdDES4auZpwsGaNe0"
                alt="A striking modern glass office building reflecting the clear blue sky at sunset"
                width={720}
                height={405}
                className="aspect-video w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -right-12 -top-12 -z-0 size-48 rounded-full bg-secondary-container/20 blur-3xl" />
          </div>

          {/* Quote */}
          <div className="space-y-8 lg:w-1/2">
            <span className="material-symbols-outlined text-[48px] text-secondary/30">
              format_quote
            </span>
            <h3 className="font-headline text-2xl font-bold leading-tight text-primary sm:text-3xl">
              &ldquo;The precision On Point brought to our logistics hub was
              incredible. We&apos;ve seen a measurable drop in HVAC cycles
              during peak summer months.&rdquo;
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-surface-container-highest font-bold text-primary">
                MW
              </div>
              <div>
                <div className="font-bold text-on-surface">Marcus Weber</div>
                <div className="text-sm text-on-surface-variant">
                  Operations Director, Horizon Logistics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── FINAL CTA ────────────────────── */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-primary-container p-12 text-center lg:p-20">
          {/* Decorative dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#9cccf4 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <h2 className="relative z-10 font-headline text-3xl font-extrabold text-on-primary sm:text-4xl lg:text-5xl">
            Ready for a Technical Consultation?
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-on-primary/80">
            Our expert team is available for on-site assessments and blueprints
            review. Let&apos;s build a more efficient future for your commercial
            property.
          </p>

          <div className="relative z-10 mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="flex-1 rounded-xl bg-secondary px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-secondary/90"
            >
              Book a Walkthrough
            </Link>
            <Link
              href="/quote"
              className="flex-1 rounded-xl bg-on-primary/10 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-on-primary/20"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
