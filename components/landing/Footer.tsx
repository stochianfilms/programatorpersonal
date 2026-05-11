import Link from "next/link";
import { Logo } from "./atoms/Logo";

export function Footer() {
  return (
    <footer className="pp-footer">
      <div className="container">
        <div className="pp-footer-grid">
          <div className="pp-footer-brand">
            <Logo size={18} />
            <p className="body-sm" style={{ marginTop: 16, maxWidth: 320 }}>
              Programatorul firmei tale, fără să-l angajezi full-time. Construim software custom pentru firme din România care vor să lucreze mai clar.
            </p>
            <div className="pp-footer-loc mono">
              <span style={{ color: "var(--fg-3)" }}>Cu sediul în</span> București · România
            </div>
          </div>
          <div className="pp-footer-cols">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Servicii</div>
              <ul>
                <li><Link href="/crm-custom">CRM custom</Link></li>
                <li><Link href="/automatizari-business">Automatizări business</Link></li>
                <li><Link href="/aplicatii-web-custom">Aplicații web custom</Link></li>
                <li><Link href="/generator-contracte">Generator contracte</Link></li>
                <li><Link href="/dashboard-rapoarte">Dashboard-uri și rapoarte</Link></li>
                <li><Link href="/platforma-rezervari">Platformă rezervări</Link></li>
                <li><Link href="/portal-clienti">Portal clienți</Link></li>
                <li><Link href="/magazin-online-custom">Magazin online custom</Link></li>
                <li><Link href="/mentenanta-software">Mentenanță software</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Companie</div>
              <ul>
                <li><Link href="/preturi">Prețuri</Link></li>
                <li><Link href="/portofoliu">Portofoliu</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Contact</div>
              <ul>
                <li><a href="mailto:hai@programatorpersonal.ro">hai@programatorpersonal.ro</a></li>
                <li><a href="tel:+40700000000">+40 7XX XXX XXX</a></li>
                <li><Link href="/privacy">Politică confidențialitate</Link></li>
                <li><Link href="/terms">Termeni și condiții</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pp-footer-bottom">
          <div className="mono" style={{ fontSize: 12, color: "var(--fg-4)" }}>
            © 2026 Programator Personal · CUI RO XXXXXXXX
          </div>
          <div className="pp-footer-legal">
            <a href="#">Politică de confidențialitate</a>
            <a href="#">Termeni și condiții</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
