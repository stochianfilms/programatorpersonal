import Link from "next/link";
import { siteConfig } from "@/content/site";

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function PrimaryCTA({ label, href }: { label?: string; href?: string }) {
  const resolvedLabel = label ?? "Programează o discuție de 30 min";
  const resolvedHref = href ?? siteConfig.ctas.primary.href;

  return (
    <Link href={resolvedHref} className="btn btn-primary">
      {resolvedLabel} <Arrow />
    </Link>
  );
}
