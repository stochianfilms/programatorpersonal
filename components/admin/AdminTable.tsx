import { ReactNode } from "react";

interface Column {
  key: string;
  label: string;
  render?: (value: unknown, row: Record<string, unknown>) => ReactNode;
}

interface AdminTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  loading?: boolean;
  onRowClick?: (row: Record<string, unknown>) => void;
}

/**
 * AdminTable: Reusable table component for listing admin data.
 * Accepts dynamic columns and rendering functions.
 */
export function AdminTable({
  columns,
  data,
  loading = false,
  onRowClick,
}: AdminTableProps) {
  if (loading) {
    return <div className="p-8 text-center text-gray-500">Încarcă...</div>;
  }

  if (data.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 p-8 text-center text-gray-500">
        Nu sunt date disponibile.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full">
        <thead className="border-b bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-t hover:bg-gray-50"
              onClick={() => onRowClick?.(row)}
              style={{ cursor: onRowClick ? "pointer" : "default" }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-6 py-4 text-sm text-gray-700"
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
