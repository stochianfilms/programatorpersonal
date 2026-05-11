import { AdminLayout } from "@/components/layout/AdminLayout";

export default function AdminDashboardPage() {
  return (
    <AdminLayout title="Bun venit înapoi">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Total lead-uri</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Proiecte active</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Oferte trimise</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Venit luna asta</p>
          <p className="text-3xl font-bold">0 €</p>
        </div>
      </div>
    </AdminLayout>
  );
}