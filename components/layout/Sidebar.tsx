import Link from "next/link";

const items = [
  ["Dashboard", "/dashboard"],
  ["Proiectele mele", "/my-projects"],
  ["Oferte", "/oferte"],
  ["Setări", "/settings/profile"],
  ["Admin", "/admin"],
];

export default function Sidebar() {
  return (
    <aside className="border-r border-black/10 bg-white p-5 md:w-72">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Portal
      </p>
      <nav className="mt-6 grid gap-2 text-sm">
        {items.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}