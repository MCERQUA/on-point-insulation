import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Get a free insulation quote from On Point Insulation. Residential and commercial projects in Durango, CO and the Four Corners region. Call (800) 555-0199.",
  alternates: { canonical: "https://on-point-insulation.com/quote" },
};

export default function QuotePage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-black font-headline text-on-surface tracking-tighter leading-tight mb-6">
            Precision comfort <br /> starts with a <span className="text-secondary">plan.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
            Tell us about your project. Whether it&apos;s a cozy home or a sprawling commercial facility, our experts
            provide tailored insulation solutions that lower bills and increase comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-3 bg-surface-container-low px-6 py-4 rounded-xl">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                call
              </span>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Call our experts</p>
                <a href="tel:18005550199" className="text-xl font-black font-headline text-on-surface">
                  (800) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7U-yrBdKHJNwDYXOojk7BYS-WD0Fg826ppmuoexoqlIR1smQoBhxtW-GSbHN99LphFENyAk6cfUBqOlgDgcQiYy-Gj5vdLv9DBDTR0nkzQbSX8YyskpaHPJG5eILdL1KBDhC3oaAb81oItsXGjR8yB0hJ2qST5kXArFPxvTGf3L5FXEfw0gp9GVvaAzvT6Q52RFHRYyB11hYpIpvfJDC1xDyorQsP_5etw038TwXs9pEDdfDs87nXNQ3eRHIlM0dXLLdvizHuBgo"
            alt="Professional insulation technician applying spray foam"
            width={600}
            height={450}
            className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
            priority
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-bold text-sm">Certified Eco</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-tight">
              Using 100% sustainable materials for every project.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Quote Form */}
        <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10">
          {/* Progress bar */}
          <div className="flex gap-4 mb-10">
            <div className="h-1.5 flex-1 bg-secondary rounded-full" />
            <div className="h-1.5 flex-1 bg-surface-container-high rounded-full" />
            <div className="h-1.5 flex-1 bg-surface-container-high rounded-full" />
          </div>

          <form className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-headline mb-2">Step 1: Project Type</h2>
              <p className="text-on-surface-variant mb-6">Select the category that best describes your needs.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="relative flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-surface-container-high cursor-pointer hover:border-secondary/30 transition-all group has-[:checked]:border-secondary has-[:checked]:bg-secondary-container/10">
                  <input type="radio" name="project_type" defaultChecked className="sr-only" />
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant group-has-[:checked]:text-secondary">
                    home
                  </span>
                  <div className="text-center">
                    <p className="font-bold text-lg">Residential</p>
                    <p className="text-xs text-on-surface-variant">Homes &amp; Apartments</p>
                  </div>
                </label>
                <label className="relative flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-surface-container-high cursor-pointer hover:border-secondary/30 transition-all group has-[:checked]:border-secondary has-[:checked]:bg-secondary-container/10">
                  <input type="radio" name="project_type" className="sr-only" />
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant group-has-[:checked]:text-secondary">
                    domain
                  </span>
                  <div className="text-center">
                    <p className="font-bold text-lg">Commercial</p>
                    <p className="text-xs text-on-surface-variant">Offices &amp; Warehouses</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1">Project Zip Code</label>
              <input
                type="text"
                placeholder="81301"
                className="w-full md:w-1/2 bg-surface-container-highest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary transition-all"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full cta-gradient text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Next: Project Details
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-8">
          {/* Service Coverage */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 overflow-hidden">
            <h3 className="text-xl font-bold font-headline mb-4">Service Coverage</h3>
            <p className="text-sm text-on-surface-variant mb-6">
              We provide precision insulation services across Durango and the Four Corners region.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-square w-full shadow-inner bg-surface-dim flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-slate-400">map</span>
              <p className="text-slate-500 font-bold ml-2">Interactive Map Area</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Durango", "Bayfield", "Cortez", "Pagosa Springs"].map((city) => (
                <span
                  key={city}
                  className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Emergency Quote */}
          <div className="bg-primary-container text-on-primary-container p-8 rounded-[2rem] relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl font-bold font-headline mb-2">Need an emergency quote?</h4>
              <p className="text-sm opacity-80 mb-4 leading-relaxed">
                Our rapid-response team is available for urgent commercial and residential insulation failures.
              </p>
              <a href="tel:18005550199" className="inline-flex items-center gap-2 font-bold hover:underline">
                Call (800) 555-0199
                <span className="material-symbols-outlined">call_made</span>
              </a>
            </div>
            <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[120px] opacity-10">bolt</span>
          </div>
        </div>
      </div>
    </div>
  );
}
