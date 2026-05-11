import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
type HeadingProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;
type ParagraphProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>;

export function Card({ children, className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "rounded-pp3 border border-line-1 bg-surface-card p-6 text-text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: DivProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn("text-lg font-semibold text-text-primary", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p className={cn("text-sm text-text-muted", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }: DivProps) {
  return (
    <div className={cn("py-2", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: DivProps) {
  return (
    <div className={cn("mt-4", className)} {...props}>
      {children}
    </div>
  );
}
