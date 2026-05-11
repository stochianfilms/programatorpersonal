export const Logo = ({ size = 20 }: { size?: number }) => (
  <a
    href="#top"
    className="pp-logo"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontWeight: 500,
      color: "var(--fg-1)",
    }}
  >
    <span
      style={{
        width: size + 6,
        height: size + 6,
        borderRadius: 6,
        background: "var(--accent)",
        color: "var(--accent-fg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        fontSize: size - 6,
        letterSpacing: "-0.04em",
      }}
    >
      {"{·}"}
    </span>
    <span>
      Programator <span style={{ color: "var(--fg-3)" }}>Personal</span>
    </span>
  </a>
);
