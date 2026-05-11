import { HeroPreviewShell, PreviewBadge } from "./HeroPreviewPrimitives";

const slots = [
  ["09:30", "Maria Dima", "Confirmat"],
  ["12:00", "Andrei Popescu", "Nou"],
  ["15:30", "Elena Ionescu", "Confirmat"],
];

export function BookingHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="calendar" title="Programări azi">
      <div className="hero-preview-calendar">
        {["L", "M", "M", "J", "V"].map((day, index) => (
          <div key={`${day}-${index}`} className={index === 2 ? "active" : ""}>
            <span>{day}</span>
            <strong>{18 + index}</strong>
          </div>
        ))}
      </div>
      <div className="hero-preview-list">
        {slots.map(([time, name, status]) => (
          <div key={time}>
            <strong>{time}</strong>
            <span>{name}</span>
            <PreviewBadge tone={status === "Nou" ? "warn" : "ok"}>{status}</PreviewBadge>
          </div>
        ))}
      </div>
    </HeroPreviewShell>
  );
}
