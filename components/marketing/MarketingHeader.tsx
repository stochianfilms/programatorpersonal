"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

const Logo = () => (
  <Link
    href="/"
    className="pp-logo"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 18,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontWeight: 500,
      color: "var(--fg-1)",
    }}
  >
    <span
      style={{
        width: 24,
        height: 24,
        borderRadius: 6,
        background: "var(--accent)",
        color: "var(--accent-fg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: "-0.04em",
      }}
    >
      {"{·}"}
    </span>
    <span>
      Programator <span style={{ color: "var(--fg-3)" }}>Personal</span>
    </span>
  </Link>
);

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M3 11L11 3M11 3H5M11 3V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = siteConfig.navigation.marketing;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pp-header" data-scrolled={scrolled}>
      <div className="pp-header-inner container">
        <Logo />
        <nav className="pp-nav">
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} className="pp-nav-link">
              {label}
            </Link>
          ))}
        </nav>
        <div className="pp-header-cta">
          <Link href="/#contact" className="btn btn-ghost btn-sm pp-only-desktop">
            Cere o estimare <Arrow />
          </Link>
          <Link href="/#contact" className="btn btn-primary btn-sm pp-only-mobile-cta">
            Estimare <Arrow />
          </Link>
          <button
            className="pp-burger pp-only-mobile"
            aria-label="Meniu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span style={{ transform: mobileOpen ? "translateY(3px) rotate(45deg)" : "none" }} />
            <span style={{ transform: mobileOpen ? "translateY(-3px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="pp-mobile-menu">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="pp-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {label} <Arrow />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn btn-primary"
            style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            Cere o estimare <Arrow />
          </Link>
        </div>
      )}
    </header>
  );
}
