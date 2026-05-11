import { Bell, CheckCircle } from "lucide-react";
import { Field, MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const days = [
  {
    d: "Lun",
    n: "19",
    slots: [
      { time: "09:00", name: "Andrei Popescu", service: "Consultație", kind: "ok" as const },
      { time: "11:00", name: "Elena Ionescu", service: "Follow-up", kind: "accent" as const },
    ],
  },
  {
    d: "Mar",
    n: "20",
    slots: [
      { time: "10:00", name: "Maria Dima", service: "Evaluare", kind: "ok" as const },
    ],
  },
  {
    d: "Mie",
    n: "21",
    slots: [
      { time: "14:00", name: "Nova Service", service: "Demo sistem", kind: "warn" as const },
      { time: "16:00", name: "Andrei Popescu", service: "Revizuire", kind: "ok" as const },
    ],
  },
  {
    d: "Joi",
    n: "22",
    slots: [],
  },
  {
    d: "Vin",
    n: "23",
    slots: [
      { time: "09:30", name: "Elena Ionescu", service: "Check-in", kind: "accent" as const },
    ],
  },
];

const toneColor: Record<string, string> = {
  ok: "rgba(132,204,22,0.15)",
  accent: "rgba(59,130,246,0.15)",
  warn: "rgba(245,158,11,0.15)",
};

const toneBorder: Record<string, string> = {
  ok: "var(--accent)",
  accent: "#60a5fa",
  warn: "#fbbf24",
};

export function BookingCalendarMockup() {
  return (
    <MockupShell title="Calendar programări online" eyebrow="rezervări / calendar săptămânal" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--s-4)" }}>
        {/* Calendar grid */}
        <Panel title="Săptămâna 19–23 mai 2026" meta="5 programări">
          <div style={{ display: "flex", gap: 6 }}>
            {days.map((day) => (
              <div key={day.d + day.n} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ textAlign: "center", paddingBottom: 4, borderBottom: "1px solid var(--line-1)" }}>
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{day.d}</div>
                  <div className="mono" style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-2)" }}>{day.n}</div>
                </div>
                <div style={{ minHeight: 80, display: "flex", flexDirection: "column", gap: 4 }}>
                  {day.slots.map((slot, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "4px 5px",
                        borderRadius: 4,
                        background: toneColor[slot.kind],
                        borderLeft: `2px solid ${toneBorder[slot.kind]}`,
                      }}
                    >
                      <div className="mono" style={{ fontSize: 8, color: "var(--fg-3)" }}>{slot.time}</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "var(--fg-1)", lineHeight: 1.2, marginTop: 2 }}>{slot.name}</div>
                      <div style={{ fontSize: 8, color: "var(--fg-4)" }}>{slot.service}</div>
                    </div>
                  ))}
                  {day.slots.length === 0 && (
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="mono" style={{ fontSize: 8, color: "var(--fg-4)" }}>liber</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Sidebar stats */}
        <div style={{ width: 140, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Status" meta="azi">
            <StatusBadge tone="ok">sistem activ</StatusBadge>
            <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
              <Field label="Programări azi" value="3" />
              <Field label="Disponibil" value="2 sloturi" />
              <Field label="No-show rate" value="4%" />
            </div>
          </Panel>

          <Panel title="Automatizări" meta="active">
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[
                { icon: Bell, label: "Reminder -24h", ok: true },
                { icon: Bell, label: "Reminder -2h", ok: true },
                { icon: CheckCircle, label: "Confirmare SMS", ok: true },
              ].map(({ icon: Icon, label, ok }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Icon size={10} style={{ color: ok ? "var(--accent)" : "var(--fg-4)", flexShrink: 0 }} />
                  <span style={{ fontSize: 9, color: "var(--fg-3)" }}>{label}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}
