import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onpointinsulation.com"),
  title: {
    default: "On Point Insulation | Eco-Friendly Insulation in Durango, CO",
    template: "%s | On Point Insulation",
  },
  description:
    "On Point Insulation provides eco-friendly spray foam, blown-in, and attic air sealing insulation services in Durango, CO and the Four Corners region. Lower energy bills, improve comfort, and reduce your carbon footprint.",
  keywords: [
    "insulation",
    "spray foam insulation",
    "blown-in insulation",
    "attic air sealing",
    "eco-friendly insulation",
    "Durango CO insulation",
    "Four Corners insulation",
    "residential insulation",
    "commercial insulation",
    "energy efficiency",
    "On Point Insulation",
  ],
  authors: [{ name: "On Point Insulation" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onpointinsulation.com",
    siteName: "On Point Insulation",
    title: "On Point Insulation | Eco-Friendly Insulation in Durango, CO",
    description:
      "Eco-friendly spray foam, blown-in, and attic insulation services in Durango, CO and the Four Corners region. Precision in every layer since 2008.",
  },
  twitter: {
    card: "summary_large_image",
    title: "On Point Insulation | Eco-Friendly Insulation in Durango, CO",
    description:
      "Eco-friendly spray foam, blown-in, and attic insulation services in Durango, CO and the Four Corners region. Precision in every layer since 2008.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://onpointinsulation.com/#business",
  name: "On Point Insulation",
  description:
    "Eco-friendly insulation services including spray foam, blown-in, and attic air sealing for residential and commercial properties in Durango, CO and the Four Corners region.",
  url: "https://onpointinsulation.com",
  telephone: "+1-970-000-0000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durango",
    addressRegion: "CO",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.2753,
    longitude: -107.8801,
  },
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.2753,
        longitude: -107.8801,
      },
      geoRadius: "80000",
    },
    "Durango, CO",
    "Four Corners Region",
  ],
  foundingDate: "2008",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Insulation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Eco-Friendly Spray Foam Insulation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Blown-In Insulation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Attic Air Sealing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Insulation Solutions",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
