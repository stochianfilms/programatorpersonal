import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Header() {
  return (
    <header className="border-b border-line-1 bg-surface-page/75 backdrop-blur">
      <div className="page-shell flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.24em]"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-6 text-sm text-text-muted md:flex">
          {siteConfig.navigation.marketing.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
