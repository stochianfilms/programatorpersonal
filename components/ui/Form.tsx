import type { PropsWithChildren } from "react";

export default function Form({ children }: PropsWithChildren) {
  return <form className="grid gap-4">{children}</form>;
}