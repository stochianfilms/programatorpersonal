import type { PropsWithChildren } from "react";

export default function Table({ children }: PropsWithChildren) {
  return <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">{children}</div>;
}