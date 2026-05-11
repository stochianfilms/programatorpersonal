import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import type { Lead } from "@/types";

const coreFields = [
  "nume",
  "firma",
  "email",
  "telefon",
  "domeniu",
  "dimensiune",
  "buget",
  "nevoie",
  "mesaj",
] as const;

type CorePayload = Pick<Lead, (typeof coreFields)[number]>;

type LeadPayload = CorePayload & {
  source_page: string;
  metadata: Record<string, unknown>;
};

function normalizeLead(input: unknown): LeadPayload | null {
  if (!input || typeof input !== "object") return null;
  const record = input as Record<string, unknown>;

  const core = Object.fromEntries(
    coreFields.map((field) => [
      field,
      typeof record[field] === "string" ? (record[field] as string).trim() : "",
    ]),
  ) as CorePayload;

  if (!core.email) return null;
  if (!core.nevoie && !record["source_page"]) return null;

  const source_page =
    typeof record["source_page"] === "string" ? record["source_page"].trim() : "";

  const metadata: Record<string, unknown> =
    record["metadata"] &&
    typeof record["metadata"] === "object" &&
    !Array.isArray(record["metadata"])
      ? (record["metadata"] as Record<string, unknown>)
      : {};

  return { ...core, source_page, metadata };
}

export async function POST(request: Request) {
  const payload = normalizeLead(await request.json().catch(() => null));

  if (!payload) {
    return NextResponse.json(
      { error: "Datele trimise nu sunt valide." },
      { status: 400 },
    );
  }

  const supabaseAdmin = getSupabaseAdmin();

  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Supabase nu este configurat." },
      { status: 500 },
    );
  }

  const { error } = await supabaseAdmin.from("leads").insert(payload);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
