import Link from "next/link";
import { siteConfig } from "@/content/site";

export function MarketingFooter() {
  return (
    <footer className="pp-footer">
      <div className="container">
        <div className="pp-footer-grid">
          <div className="pp-footer-brand">
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 18,
                fontWeight: 500,
                color: "var(--fg-1)",
                letterSpacing: "-0.02em",
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
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {"{·}"}
              </span>
              <span>
                {siteConfig.name.split(" ")[0]}{" "}
                <span style={{ color: "var(--fg-3)" }}>Personal</span>
              </span>
            </Link>
            <p className="body-sm" style={{ marginTop: 16, maxWidth: 320 }}>
              {siteConfig.description}
            </p>
            <div className="pp-footer-loc mono">
              <span style={{ color: "var(--fg-3)" }}>Cu sediul în</span>{" "}
              {siteConfig.contact.location}
            </div>
          </div>

          <div className="pp-footer-cols">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Servicii
              </div>
              <ul>
                {siteConfig.navigation.services.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Companie
              </div>
              <ul>
                {siteConfig.navigation.company.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Contact
              </div>
              <ul>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.contact.phoneHref}`}>
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <Link href="/#contact">Cere o estimare</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pp-footer-bottom">
          <div className="mono" style={{ fontSize: 12, color: "var(--fg-4)" }}>
            © 2026 {siteConfig.name} · CUI RO XXXXXXXX
          </div>
          <div className="pp-footer-legal">
            {siteConfig.navigation.legal.map(({ label, href }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
