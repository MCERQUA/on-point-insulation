import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const serviceLinks = [
  { label: "Eco-Friendly Spray Foam", href: "/residential" },
  { label: "Blown-In Insulation", href: "/residential" },
  { label: "Attic Air Sealing", href: "/residential" },
  { label: "Commercial Solutions", href: "/commercial" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Durango Service", href: "/durango" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/quote" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-100 rounded-t-3xl">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company info */}
          <div>
            <Link
              href="/"
              className="text-xl font-black tracking-tighter text-teal-900 font-headline"
            >
              On&nbsp;Point Insulation
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              Precision in Every Layer. Since 2008.
            </p>
            <p className="mt-4 text-sm text-on-surface-variant">
              Serving Durango, CO and the entire Four Corners region with
              eco-friendly insulation solutions that lower energy bills and
              reduce your carbon footprint.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-surface-variant transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Newsletter */}
          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-surface-variant transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                Newsletter
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                Energy tips and insulation insights, delivered monthly.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-outline-variant/40 pt-6 text-center text-xs text-on-surface-variant">
          &copy; 2024 On Point Insulation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
