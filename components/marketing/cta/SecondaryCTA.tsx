import Link from "next/link";

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SecondaryCTA({ label, href }: { label?: string; href?: string }) {
  const resolvedLabel = label ?? "Vezi exemple de sisteme";
  const resolvedHref = href ?? "/portofoliu";

  return (
    <Link href={resolvedHref} className="btn btn-secondary">
      {resolvedLabel} <ArrowRight />
    </Link>
  );
}
