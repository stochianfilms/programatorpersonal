import type { ReactNode } from "react";

type Props = {
  num?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
};

export const SectionHead = ({ num, eyebrow, title, lead, children, align = "left" }: Props) => (
  <div
    className="section-head"
    style={align === "center" ? { margin: "0 auto 64px", textAlign: "center", alignItems: "center" } : {}}
  >
    <div className="eyebrow-row">
      {num && <span className="num">{num}</span>}
      <span className="eyebrow">{eyebrow}</span>
      <span className="line" />
    </div>
    <h2 className="h-1" style={{ textWrap: "balance" }}>
      {title}
    </h2>
    {lead && (
      <p className="lead" style={{ margin: 0, maxWidth: 720 }}>
        {lead}
      </p>
    )}
    {children}
  </div>
);
