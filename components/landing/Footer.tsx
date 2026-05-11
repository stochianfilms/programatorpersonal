import Link from "next/link";
import { Logo } from "./atoms/Logo";
import { siteConfig } from "@/content/site";

const footerColumns = [
  { heading: "Servicii", items: siteConfig.navigation.services },
  { heading: "Companie", items: siteConfig.navigation.company },
  { heading: "Legal", items: siteConfig.navigation.legal },
];

export function Footer() {
  return (
    <footer className="pp-footer">
      <div className="container">
        <div className="pp-footer-grid">
          <div className="pp-footer-brand">
            <Logo size={18} />
            <p className="body-sm" style={{ marginTop: 16, maxWidth: 320 }}>
              {siteConfig.brand.description}
            </p>
            <div className="pp-footer-loc mono">
              <span style={{ color: "var(--fg-3)" }}>Cu sediul în</span> {siteConfig.brand.location}
            </div>
          </div>
          <div className="pp-footer-cols">
            {footerColumns.map(({ heading, items }) => (
              <div key={heading}>
                <div className="eyebrow" style={{ marginBottom: 16 }}>{heading}</div>
                <ul>
                  {items.map(({ label, href }) => (
                    <li key={href}><Link href={href}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Contact</div>
              <ul>
                <li><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
                {siteConfig.contact.phone && siteConfig.contact.phoneHref && (
                  <li><a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a></li>
                )}
                <li><Link href={siteConfig.ctas.primary.href}>{siteConfig.ctas.primary.label}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pp-footer-bottom">
          <div className="mono" style={{ fontSize: 12, color: "var(--fg-4)" }}>
            © 2026 {siteConfig.brand.name}
          </div>
          <div className="pp-footer-legal">
            {siteConfig.navigation.legal.map(({ label, href }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
