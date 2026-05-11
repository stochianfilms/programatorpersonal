import Sidebar from "@/components/layout/Sidebar";
import { ReactQueryProvider } from "@/components/providers/ReactQueryProvider";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <div className="min-h-screen bg-slate-50 md:flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </ReactQueryProvider>
  );
}
