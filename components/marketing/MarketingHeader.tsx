"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig, type NavItem, type NavItemRich } from "@/content/site";

type MegaKey = "Servicii" | "Soluții" | "Industrii";

const megaData: Record<
  MegaKey,
  { lead: string; items: NavItem[] | NavItemRich[]; cols: 2 | 3 }
> = {
  Servicii: {
    lead: "Software construit pe procesele firmei tale.",
    items: siteConfig.navigation.services,
    cols: 3,
  },
  Soluții: {
    lead: "Alege ce problemă vrei să rezolvi.",
    items: siteConfig.navigation.solutions,
    cols: 2,
  },
  Industrii: {
    lead: "Software specific domeniului tău.",
    items: siteConfig.navigation.industries,
    cols: 2,
  },
};

const MEGA_KEYS = Object.keys(megaData) as MegaKey[];

function hasDescription(item: NavItem | NavItemRich): item is NavItemRich {
  return "description" in item;
}

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

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden
    style={{
      transition: "transform .2s ease",
      transform: open ? "rotate(180deg)" : "none",
      flexShrink: 0,
    }}
  >
    <path
      d="M2 4L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MegaKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key: MegaKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const plainLinks = [
    { label: "Portofoliu", href: "/portofoliu" },
    { label: "Prețuri", href: "/preturi" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="pp-header"
      data-scrolled={scrolled}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      <div className="pp-header-inner container">
        <Logo />

        {/* Desktop nav */}
        <nav className="pp-nav pp-only-desktop-nav">
          {MEGA_KEYS.map((key) => (
            <div
              key={key}
              className="pp-mega-wrap"
              onMouseEnter={() => openMenu(key)}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`pp-nav-link pp-nav-trigger${activeMenu === key ? " pp-nav-trigger--open" : ""}`}
                aria-expanded={activeMenu === key}
              >
                {key} <Chevron open={activeMenu === key} />
              </button>
            </div>
          ))}
          {plainLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="pp-nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="pp-header-cta">
          <Link href="/contact" className="btn btn-ghost btn-sm pp-only-desktop-nav">
            Programează o discuție <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-primary btn-sm pp-only-mobile-cta">
            Discuție <Arrow />
          </Link>
          <button
            className="pp-burger pp-only-mobile"
            aria-label="Meniu"
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileSection(null);
            }}
          >
            <span style={{ transform: mobileOpen ? "translateY(3px) rotate(45deg)" : "none" }} />
            <span style={{ transform: mobileOpen ? "translateY(-3px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mega-menu panel — desktop */}
      {activeMenu && (
        <div
          className="pp-mega"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="container pp-mega-inner">
            <div className="pp-mega-header">
              <span className="eyebrow">{activeMenu}</span>
              <p className="body-sm" style={{ color: "var(--fg-3)", margin: 0 }}>
                {megaData[activeMenu].lead}
              </p>
            </div>
            <div
              className="pp-mega-grid"
              style={{
                gridTemplateColumns: `repeat(${megaData[activeMenu].cols}, 1fr)`,
              }}
            >
              {megaData[activeMenu].items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="pp-mega-link"
                  onClick={() => setActiveMenu(null)}
                >
                  <span className="pp-mega-link-label">{item.label}</span>
                  {hasDescription(item) && (
                    <span className="pp-mega-link-desc">{item.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="pp-mobile-menu">
          {MEGA_KEYS.map((key) => (
            <div key={key}>
              <button
                className="pp-mobile-link pp-mobile-trigger"
                onClick={() =>
                  setMobileSection((prev) => (prev === key ? null : key))
                }
              >
                {key}
                <Chevron open={mobileSection === key} />
              </button>
              {mobileSection === key && (
                <div className="pp-mobile-submenu">
                  {megaData[key].items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="pp-mobile-sublink"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileSection(null);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {plainLinks.map(({ label, href }) => (
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
            href="/contact"
            className="btn btn-primary"
            style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            Programează o discuție <Arrow />
          </Link>
        </div>
      )}
    </header>
  );
}
