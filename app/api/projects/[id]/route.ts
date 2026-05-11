import { NextResponse } from "next/server";

export async function GET(_: Request, context: { params: Promise<{ id: string }> | { id: string } }) {
  const { id } = await Promise.resolve(context.params);
  return NextResponse.json({ id });
}