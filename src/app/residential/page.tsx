import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Residential Insulation Services",
  description:
    "Premium eco-friendly spray foam insulation for homes in Durango, CO. Reduce energy bills by 45% with our precision air sealing. Free residential assessment.",
  alternates: { canonical: "https://on-point-insulation.com/residential" },
};

export default function ResidentialPage() {
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
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              Residential Excellence
            </span>

            <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Precision Comfort.
              <br />
              Sustainable&nbsp;Living.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
              Elevate your home&apos;s thermal performance with our premium
              Eco-Friendly Spray Foam. We combine advanced building science with
              sustainable materials to ensure year-round comfort and massive
              energy savings.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/quote" arrow>
                Free Residential Assessment
              </CTAButton>
              <CTAButton href="#project-gallery" variant="outline">
                View Energy Reports
              </CTAButton>
            </div>
          </div>

          {/* Hero Image + Floating Stat Card */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJJUE8CF87W6e-oD7-sW9UK-l4V02yifI4-4xcyy-xdm1oFDjN5XlqNqGarOVl8due8z5j5abJt6eU9Ggs0il-_5wRsK5z6JqAfg0-VdN_QRhkPKXBfsYaMx9CyaWY2U0PAWKcd120JH-FTwXsZefElfz2g_Z4J0DRzxZOfq23hnUqwHKW2i3Q1ACQ8eHHV6qv7M_TTtXpypiBqzpG0auSn2vhazhrCuXtPZX6HtTzgTs8gD5gSrf6NNc9VFY1RkO08bB0isxHJAA"
                alt="Modern architectural home with clean lines and large windows set against a soft evening sky"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                preload
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-2xl bg-surface p-8 shadow-xl md:block">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                </div>
                <div>
                  <p className="font-headline text-2xl font-bold text-primary">
                    45%
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Avg. Energy Savings
                  </p>
                </div>
              </div>
              <p className="text-sm leading-snug text-on-surface-variant">
                Our high-performance spray foam creates an airtight seal that
                conventional materials can&apos;t match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── BENTO GRID BENEFITS ─────────────────── */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              The Sustainable Blueprint
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
              Why homeowners choose On Point Insulation for their long-term
              property investment.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid auto-rows-auto gap-6 md:grid-cols-12 md:auto-rows-[minmax(280px,auto)]">
            {/* Large Feature — Eco-Friendly Spray Foam */}
            <div className="flex flex-col justify-between rounded-3xl border border-outline-variant/10 bg-surface p-10 shadow-sm md:col-span-7">
              <div>
                <span className="material-symbols-outlined mb-6 text-4xl text-secondary">
                  eco
                </span>
                <h3 className="mb-4 font-headline text-3xl font-bold text-primary">
                  Eco-Friendly Spray Foam
                </h3>
                <p className="max-w-md leading-relaxed text-on-surface-variant">
                  Our bio-based spray foam reduces your carbon footprint while
                  providing superior R-value. It&apos;s non-toxic, low-VOC, and
                  specifically engineered for residential air quality.
                </p>
              </div>
              <div className="relative mt-8 h-48 w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDchRaY3X5c5uYufWpMzKpEdreTN9VpIhFumaPRIOSJdJniR7GC8ZmjUFDBna2dkARpUPdwB2tqAi2EBwlmlpmeS-4DDXNZjcEYGgusYSDgr7LUPKYD7SbkZDNOt1Ty_und-xi470-vpJeOmJKaN65bQXNmpSe70zcCH9dFOnx0fubSM82MwQEPz0DhiQIAuB5twvlXk7Me-QYv-8cl-WvcOBjz1WzitrH4xoO991bQWs-8rw4qHRr153wgVMVwdATGGcv00qnl5ew"
                  alt="Professional contractor applying white spray foam insulation to a residential wooden attic frame"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Vertical Feature — Lower Utility Bills */}
            <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-primary-container p-10 text-on-primary md:col-span-5">
              <div className="relative z-10">
                <h3 className="mb-4 font-headline text-2xl font-bold">
                  Lower Utility Bills
                </h3>
                <p className="leading-relaxed opacity-80">
                  Stop paying to heat the neighborhood. Our precision sealing
                  keeps conditioned air exactly where it belongs — inside your
                  home.
                </p>
                <div className="mt-12 space-y-4">
                  <div className="flex items-center justify-between border-b border-on-primary/20 pb-2">
                    <span>Annual Savings</span>
                    <span className="font-bold">$1,200+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-on-primary/20 pb-2">
                    <span>ROI Period</span>
                    <span className="font-bold">3-5 Years</span>
                  </div>
                </div>
              </div>
              {/* Decorative blur */}
              <div className="pointer-events-none absolute -right-16 -top-16 size-32 rounded-full bg-secondary opacity-10 blur-3xl" />
            </div>

            {/* Small Card — Thermal Stability */}
            <div className="flex flex-col gap-4 rounded-3xl border border-outline-variant/10 bg-surface-container-highest p-8 md:col-span-4">
              <span className="material-symbols-outlined text-secondary">
                thermostat
              </span>
              <h4 className="font-headline text-xl font-bold text-primary">
                Thermal Stability
              </h4>
              <p className="text-sm text-on-surface-variant">
                No more hot spots or drafty corners. Enjoy consistent
                temperatures in every room, every season.
              </p>
            </div>

            {/* Wide Card — Acoustic Purity */}
            <div className="flex items-center gap-8 rounded-3xl border border-outline-variant/10 bg-surface p-8 md:col-span-8">
              <div className="relative hidden h-24 w-40 shrink-0 overflow-hidden rounded-xl sm:block">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnBeRgSn-vlhV0zadPSG0zHI_6ORq_sMKZUEnwZ6RnbJzm6b9y_oDSUnovQB1ZX1Ztbg-Tb4ZaFTvdzaMqam2-jAJoM94fb1gE0rmEHuEglfSw_mHTXd2NgQHI1eBJ32b0FSQ15Q8PpXkvBWVTvupYqVymQHCCS0ieVb7vHZ9fMkZPFITxRiAUcu1I0kkqbn7lih8obEDH5r2R5emKvk3Lr6Sar4QoomUEsQEu-860bi-5TZbtOtOF4Hd7ANiGmfKTkjVaZTv4Icw"
                  alt="Softly lit minimal bedroom interior with natural linens and tranquil morning light"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-primary">
                  Acoustic Purity
                </h4>
                <p className="text-sm text-on-surface-variant">
                  High-density foam doesn&apos;t just block air; it significantly
                  reduces exterior noise pollution for a quieter home
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── ASSESSMENT CTA ─────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-surface-container p-12 text-center md:p-20">
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Ready for a Smarter&nbsp;Home?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
              Schedule your comprehensive 20-point residential energy assessment
              today. Our specialists identify thermal leaks and provide a custom
              insulation roadmap.
            </p>
            <div className="pt-6">
              <CTAButton href="/quote" arrow>
                Book Free Assessment
              </CTAButton>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-outline">
              No obligation. Professional insight only.
            </p>
          </div>

          {/* Decorative SVG */}
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <svg className="size-full" viewBox="0 0 100 100">
              <path
                className="text-primary"
                d="M0,50 Q25,0 50,50 T100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                className="text-secondary"
                d="M0,60 Q25,10 50,60 T100,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ──────────────── PROJECT GALLERY ─────────────────────── */}
      <section id="project-gallery" className="bg-surface py-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
                Project Gallery
              </h2>
              <p className="mt-2 text-on-surface-variant">
                Real transformations across the tri-state area.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-secondary transition-all hover:gap-4"
            >
              View All Residential Projects
              <span className="material-symbols-outlined">east</span>
            </Link>
          </div>

          {/* Project cards */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* The Oak Ridge Residence */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4qrlmxrKYzbiKlOWSS1VGEIdWexkkz5ANikDklL8iBbuWCDOm6kVUM9Ax-T7YYAe2xtY9wiFbfw-NhiraXfpee5ZUoqo6slevFssgr4qeqgtf4DzqJSYkNi47skLrwfvgNWLbMsL6Q8qtMnj3P7Smj_3kUkN3GYvR7oL8IH0TiUTdElyr0-GBx_0-Oivvz0Pne9OD0Kbw2nEyInXLKrY42GZI3PDbkJOx20PEMC90wYVP_4SvXhFmFV2JOuH5DjNkLZjSJipHh7Y"
                    alt="Beautifully finished luxury attic space with clean white walls and exposed wooden beams"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="mb-2 text-xs font-bold uppercase text-secondary">
                Attic Sealing
              </p>
              <h4 className="font-headline text-xl font-bold text-primary">
                The Oak Ridge Residence
              </h4>
            </div>

            {/* Pinecrest New Build */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_2B14t1cm3FwJegNKXmPvs_LS_SIRgvZUrt5lmBh8zEkg052CBo563NF8pQIGUi6X95xKTys55oXP-oxT2FDj-_L7F1zV1NGEVOHurqNMFZPiv8U30lcw3wCxmWh0mio47dEyYlkSO6-PA1bg1kL-IN-jGQEpo-LFjxI9BdvMsbe2EDngtkFlnGgrJKhThLZAXRN_MtI8RBaZ0g0njsL0rJSNc3XInpt3J4-4W6yHRnZXMe0KSVyeQ3xHKe042MGU8reNUxU20h0"
                    alt="Modern suburban house under construction with fresh landscaping and clean siding"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="mb-2 text-xs font-bold uppercase text-secondary">
                Full Home Wrap
              </p>
              <h4 className="font-headline text-xl font-bold text-primary">
                Pinecrest New Build
              </h4>
            </div>

            {/* Harbor View Estate */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtVv3OosgjeUnM3XR0hVx5CL0jgyJNV6r6HuDUbjbllrQaktQTRgoOZDeO4jtQ3xS5d7YerzFpZkQYwcpiogbycP7PTEe1QXi64LWRxR7YCD3JLTHlHE2-nA0haXchB0FzJqv2dCsekdPLYWaB_k4U9ME3-ORPcSg3xZuk4nzYUV46BG1kKoi0_IrrSra6wAeEqGMeS0kEbk0clzUEMV_02i6n-2OBMh9I5z9Ws_0wdiOU0aBKKvL4JqqIa1-GB1h8LeMpGvZxxPc"
                    alt="Spacious finished basement with recessed lighting and comfortable contemporary furniture"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="mb-2 text-xs font-bold uppercase text-secondary">
                Basement Insulation
              </p>
              <h4 className="font-headline text-xl font-bold text-primary">
                Harbor View Estate
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
