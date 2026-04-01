import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energy Savings Blog & Resources",
  description:
    "Expert insulation tips, energy-saving guides, and home performance insights from On Point Insulation in Durango, CO.",
  alternates: { canonical: "https://on-point-insulation.com/blog" },
};

const articles = [
  {
    title: "5 Signs You Need New Insulation Before Winter",
    category: "Maintenance",
    date: "Oct 12, 2024",
    description:
      "Unusually high energy bills or drafty rooms? These red flags might mean your home is losing heat faster than you think.",
    image:
      "/images/roof-insulation.webp",
  },
  {
    title: "The ROI of Spray Foam: A 10-Year Analysis",
    category: "Investing",
    date: "Oct 05, 2024",
    description:
      "Discover how professional spray foam insulation pays for itself through drastic reductions in heating and cooling costs.",
    image:
      "/images/quality-closeup.webp",
  },
  {
    title: "Attic Air Sealing: The Step Most Homeowners Skip",
    category: "Technical",
    date: "Sep 28, 2024",
    description:
      "Insulation is only half the battle. Learn why air sealing is critical for maximizing your home&apos;s thermal envelope.",
    image:
      "/images/ceiling-progress.webp",
  },
];

const topics = ["All Topics", "Energy Efficiency", "Spray Foam", "ROI & Savings"];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Featured Article Hero */}
      <section className="mb-16">
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
          <Image
            src="/images/residential-rafters.webp"
            alt="Eco-friendly spray foam insulation being applied in an attic"
            fill
            className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
            <span className="inline-flex bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
              Featured Article
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-6 tracking-tight font-headline">
              Eco-Friendly Insulation: Why It Matters for Your Home&apos;s Future
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> Oct 24, 2024
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">schedule</span> 8 min read
              </span>
              <button className="ml-auto bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-primary-fixed transition-colors">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input
            type="text"
            placeholder="Search resources, guides, or FAQs..."
            className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-2xl focus:ring-2 focus:ring-secondary text-on-surface placeholder:text-outline/60"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {topics.map((topic, i) => (
            <button
              key={topic}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-semibold text-sm ${
                i === 0
                  ? "bg-primary text-white"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">Latest Articles</h2>
            <p className="text-on-surface-variant mt-1">Expert insights for a more efficient home.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">
                  {article.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-secondary transition-colors font-headline">
                  {article.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-outline">{article.date}</span>
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    trending_flat
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-primary-container text-white p-12 rounded-3xl flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight font-headline">Stay Informed &amp; Insulated</h2>
            <p className="text-primary-fixed-dim text-lg mb-8 max-w-md">
              Join over 2,000 homeowners receiving monthly tips on energy efficiency and sustainable home building.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary-fixed outline-none"
              />
              <button
                type="submit"
                className="bg-secondary-fixed text-on-secondary-fixed font-bold px-8 py-4 rounded-2xl hover:bg-secondary-fixed-dim transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 bg-surface-container-high rounded-3xl p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">energy_savings_leaf</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-2 font-headline">Free Efficiency Guide</h3>
            <p className="text-on-surface-variant mb-6 text-sm">
              Download our comprehensive checklist for a zero-waste attic renovation.
            </p>
            <button className="w-full bg-white text-primary border border-primary/10 font-bold py-4 rounded-2xl hover:shadow-md transition-shadow">
              Download PDF (2.4MB)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
