import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

/**
 * AdminLayout: Dedicated layout for admin pages.
 * Separate from marketing and client layouts.
 * TODO: Add role guard middleware to redirect non-admins.
 */
export function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin header / nav can go here */}
      <header className="border-b bg-white p-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          {title && <p className="text-sm text-gray-600">{title}</p>}
        </div>
      </header>

      {/* Admin content */}
      <main className="mx-auto max-w-7xl p-6">{children}</main>
    </div>
  );
}
