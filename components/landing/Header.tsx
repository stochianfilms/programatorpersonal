"use client";

import { useEffect, useState } from "react";
import { Logo } from "./atoms/Logo";
import { Arrow } from "./atoms/Icons";

const navItems: [string, string][] = [
  ["Servicii", "/servicii"],
  ["Automatizări", "/automatizari-business"],
  ["CRM", "/crm-custom"],
  ["Portofoliu", "/portofoliu"],
  ["Contact", "/contact"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pp-header" data-scrolled={scrolled}>
      <div className="pp-header-inner container">
        <Logo size={18} />
        <nav className="pp-nav">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="pp-nav-link">{label}</a>
          ))}
        </nav>
        <div className="pp-header-cta">
          <a href="#contact" className="btn btn-ghost btn-sm pp-only-desktop">
            Cere o estimare <Arrow />
          </a>
          <a href="#contact" className="btn btn-primary btn-sm pp-only-mobile-cta">
            Estimare <Arrow />
          </a>
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
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="pp-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {label} <Arrow />
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            Cere o estimare <Arrow />
          </a>
        </div>
      )}
    </header>
  );
}
