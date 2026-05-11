export type ID = string;

export type Lead = {
  id?: ID;
  nume: string;
  firma: string;
  email: string;
  telefon: string;
  domeniu: string;
  dimensiune: string;
  buget: string;
  nevoie: string;
  mesaj: string;
  created_at?: string;
};

export type Project = {
  id: ID;
  name: string;
  client_id?: ID;
  status: "draft" | "active" | "paused" | "completed" | "cancelled";
  description?: string;
  budget?: number;
  started_at?: string;
  due_at?: string;
  created_at?: string;
};

export type Quote = {
  id: ID;
  lead_id?: ID;
  project_id?: ID;
  status: "draft" | "sent" | "accepted" | "rejected" | "expired";
  total: number;
  currency: string;
  valid_until?: string;
  created_at?: string;
};

export type Invoice = {
  id: ID;
  project_id?: ID;
  quote_id?: ID;
  status: "draft" | "open" | "paid" | "void" | "overdue";
  amount: number;
  currency: string;
  due_at?: string;
  paid_at?: string;
  created_at?: string;
};

export type User = {
  id: ID;
  name: string;
  email: string;
  role: "admin" | "client";
  company?: string;
  created_at?: string;
};
