import Link from "next/link";
import { siteConfig } from "@/content/site";

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

const footerCols = [
  {
    heading: "Servicii",
    items: siteConfig.navigation.services,
  },
  {
    heading: "Soluții",
    items: siteConfig.navigation.solutions,
  },
  {
    heading: "Industrii",
    items: siteConfig.navigation.industries,
  },
  {
    heading: "Resurse",
    items: siteConfig.navigation.resources,
  },
  {
    heading: "Legal",
    items: siteConfig.navigation.legal,
  },
];

export function MarketingFooter() {
  const primaryCta = siteConfig.ctas.primary;

  return (
    <footer className="pp-footer">
      <div className="container">
        {/* Main grid */}
        <div className="pp-footer-main">
          {/* Brand column */}
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
                {siteConfig.brand.name.split(" ")[0]} <span style={{ color: "var(--fg-3)" }}>{siteConfig.brand.name.split(" ").slice(1).join(" ")}</span>
              </span>
            </Link>

            <p
              className="body-sm"
              style={{ marginTop: 16, color: "var(--fg-2)", maxWidth: 300, lineHeight: 1.6 }}
            >
              {siteConfig.brand.description}
            </p>

            {/* Mini CTA */}
            <div className="pp-footer-cta-block">
              <h2 className="h-3" style={{ marginBottom: 8 }}>
                {siteConfig.footer.miniCta.title}
              </h2>
              <p
                className="body-sm"
                style={{ color: "var(--fg-3)", marginBottom: 12 }}
              >
                {siteConfig.footer.miniCta.text}
              </p>
              <Link href={siteConfig.footer.miniCta.cta.href} className="btn btn-primary btn-sm">
                {siteConfig.footer.miniCta.cta.label} <Arrow />
              </Link>
            </div>

            <div
              className="mono"
              style={{ marginTop: 32, fontSize: 12, color: "var(--fg-4)" }}
            >
              {siteConfig.brand.location}
            </div>
            <div style={{ marginTop: 6 }}>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mono"
                style={{ fontSize: 12, color: "var(--fg-3)" }}
              >
                {siteConfig.contact.email}
              </a>
            </div>
            {siteConfig.contact.phone && siteConfig.contact.phoneHref && (
              <div style={{ marginTop: 6 }}>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mono"
                  style={{ fontSize: 12, color: "var(--fg-3)" }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            )}
          </div>

          {/* Nav columns */}
          <div className="pp-footer-nav">
            {footerCols.map(({ heading, items }) => (
              <div key={heading}>
                <div className="eyebrow" style={{ marginBottom: 16 }}>
                  {heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {items.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        style={{
                          fontSize: 14,
                          color: "var(--fg-2)",
                          transition: "color .15s ease",
                        }}
                        className="pp-footer-link"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Contact
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="pp-footer-link">
                    {siteConfig.contact.email}
                  </a>
                </li>
                {siteConfig.contact.phone && siteConfig.contact.phoneHref && (
                  <li>
                    <a href={siteConfig.contact.phoneHref} className="pp-footer-link">
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                )}
                <li>
                  <Link href={primaryCta.href} className="pp-footer-link">
                    {primaryCta.label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pp-footer-bottom">
          <div className="mono" style={{ fontSize: 12, color: "var(--fg-4)" }}>
            © 2026 {siteConfig.brand.name}
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
