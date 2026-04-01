"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Residential", href: "/residential" },
      { label: "Commercial", href: "/commercial" },
    ],
  },
  { label: "Durango CO", href: "/durango" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-teal-900 font-headline"
        >
          On&nbsp;Point Insulation
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex" role="menubar">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative" ref={dropdownRef} role="none">
                <button
                  type="button"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                >
                  {link.label}
                  <span
                    className={`material-symbols-outlined text-[18px] transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                {servicesOpen && (
                  <ul
                    role="menu"
                    className="absolute left-0 top-full mt-1 w-48 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5"
                  >
                    {link.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-2 text-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
                          onClick={() => setServicesOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
          <li role="none" className="ml-3">
            <CTAButton href="/quote" arrow>
              Request Quote
            </CTAButton>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-on-surface-variant lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 bg-surface/95 backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="mx-auto max-w-md px-6 py-8">
            <ul className="flex flex-col gap-2" role="menu">
              {navLinks.map((link) =>
                link.children ? (
                  <li key={link.label} role="none">
                    <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant/60">
                      {link.label}
                    </p>
                    <ul role="menu">
                      {link.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            className="block rounded-lg px-3 py-3 text-base font-medium text-on-surface transition-colors hover:bg-surface-container"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className="block rounded-lg px-3 py-3 text-base font-medium text-on-surface transition-colors hover:bg-surface-container"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
              <li role="none" className="mt-4">
                <CTAButton
                  href="/quote"
                  arrow
                  className="w-full justify-center text-base"
                >
                  Request Quote
                </CTAButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
