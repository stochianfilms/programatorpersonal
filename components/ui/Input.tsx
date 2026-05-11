import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "rounded-pp2 border border-line-2 bg-surface-page px-4 py-3 text-text-primary",
        "placeholder:text-text-subtle focus:border-brand focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
