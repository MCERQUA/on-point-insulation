"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  heading: string;
  paragraphs: [string, string];
}

const tabs: Tab[] = [
  {
    id: "shore-power",
    label: "Shore Power",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    heading: "Using Shore Power Instead of Generators",
    paragraphs: [
      "Most spray foam rigs run diesel generators all day long, burning roughly 40 gallons of diesel per day and producing approximately 880 lbs of CO2 per job site. That adds up fast across hundreds of jobs a year.",
      "On Point Insulation connects to shore power (standard electrical outlets on the job site) whenever possible, dramatically cutting diesel consumption and on-site emissions. It's a simple change that makes a measurable difference.",
    ],
  },
  {
    id: "waste-reduction",
    label: "Waste Reduction",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
    heading: "On-Point Precision Application",
    paragraphs: [
      "Spray foam overspray and waste is a real problem in the industry. Inexperienced crews can waste 15-20% of material, which ends up in landfills and drives up costs for homeowners.",
      "Our trained technicians use precision application techniques and calibrated equipment to minimize overspray, reducing material waste by 15-20% compared to industry averages. Less waste means lower costs and a smaller environmental footprint.",
    ],
  },
  {
    id: "low-voc",
    label: "Low-VOC",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
        />
      </svg>
    ),
    heading: "Low-VOC Product Selection",
    paragraphs: [
      "Many spray foam products release high levels of volatile organic compounds (VOCs) during and after installation, affecting indoor air quality for weeks. We actively select products with 40% lower VOC emissions than standard formulations.",
      "Our low-VOC products meet or exceed EPA guidelines and allow homeowners to return to their spaces faster. We believe better chemistry leads to better living environments without sacrificing thermal performance.",
    ],
  },
  {
    id: "reality",
    label: "Reality",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    heading: "Honest Environmental Approach",
    paragraphs: [
      "We're not going to pretend spray foam is a zero-impact product. Manufacturing insulation takes energy and resources. But the long-term energy savings of 40-60% that properly installed spray foam delivers far outweigh the initial environmental cost.",
      "Over a home's lifetime, quality insulation prevents tens of thousands of pounds of CO2 emissions from heating and cooling. We focus on doing the job right the first time so the environmental math works in everyone's favor.",
    ],
  },
];

export default function EcoFriendlyPractices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/closed-cell-new-construction.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003f60]/90 via-[#003f60]/80 to-[#006c49]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#82f6bf] backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px]">eco</span>
            Our Practices
          </span>
          <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Eco-Friendly Practices
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Real steps we take to reduce our environmental impact on every job.
          </p>
        </div>

        {/* Glass-morphism tab container */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/10 p-2 backdrop-blur-xl sm:p-3">
          {/* Tab buttons */}
          <div className="relative flex gap-1 rounded-2xl bg-white/5 p-1">
            {/* Animated indicator bar */}
            <div
              className="absolute bottom-0 left-0 h-0.5 rounded-full bg-[#82f6bf] transition-all duration-300 ease-out"
              style={{
                width: `${100 / tabs.length}%`,
                transform: `translateX(${activeTab * 100}%)`,
              }}
            />
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 sm:px-4 sm:py-3.5 ${
                  activeTab === index
                    ? "bg-white/15 text-white shadow-lg"
                    : "text-white/60 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-6 px-2 pb-4 sm:px-6 sm:pb-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#82f6bf]/20 text-[#82f6bf]">
                {tabs[activeTab].icon}
              </div>
              <h3 className="font-headline text-xl font-bold text-white sm:text-2xl">
                {tabs[activeTab].heading}
              </h3>
            </div>
            <div className="mt-5 space-y-4">
              {tabs[activeTab].paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-white/80">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
