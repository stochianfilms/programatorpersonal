import Sidebar from "@/components/layout/Sidebar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}