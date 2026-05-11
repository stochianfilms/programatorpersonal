export const Glyph = ({ name, size = 22 }: { name: string; size?: number }) => {
  const s = size;
  const stroke = "currentColor";
  const sw = 1.5;
  const common = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  switch (name) {
    case "app":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke={stroke} strokeWidth={sw} />
          <path d="M3.5 9H20.5" stroke={stroke} strokeWidth={sw} />
          <circle cx="6.5" cy="6.25" r="0.6" fill={stroke} />
        </svg>
      );
    case "crm":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke={stroke} strokeWidth={sw} />
          <path d="M7 10H13M7 13H17M7 16H11" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "auto":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.2" stroke={stroke} strokeWidth={sw} />
          <circle cx="18" cy="6" r="2.2" stroke={stroke} strokeWidth={sw} />
          <circle cx="18" cy="18" r="2.2" stroke={stroke} strokeWidth={sw} />
          <path d="M8 11L16 7M8 13L16 17" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "dash":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="8" height="8" rx="1.5" stroke={stroke} strokeWidth={sw} />
          <rect x="12.5" y="3.5" width="8" height="4" rx="1.5" stroke={stroke} strokeWidth={sw} />
          <rect x="12.5" y="8.5" width="8" height="4" rx="1.5" stroke={stroke} strokeWidth={sw} />
          <rect x="3.5" y="12.5" width="17" height="8" rx="1.5" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" stroke={stroke} strokeWidth={sw} />
          <path d="M3.5 12H20.5M12 3.5C14.5 6 15.5 9 15.5 12C15.5 15 14.5 18 12 20.5C9.5 18 8.5 15 8.5 12C8.5 9 9.5 6 12 3.5Z" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "shop":
      return (
        <svg {...common}>
          <path d="M5 7H19L17.5 18.5C17.4 19.4 16.6 20 15.7 20H8.3C7.4 20 6.6 19.4 6.5 18.5L5 7Z" stroke={stroke} strokeWidth={sw} />
          <path d="M9 7V5C9 3.6 10.3 2.5 12 2.5C13.7 2.5 15 3.6 15 5V7" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M8 6L3.5 10.5L8 15M16 9L20.5 13.5L16 18M14 4L10 20" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 2.5L20 5.5V12C20 16.5 16.5 19.5 12 21.5C7.5 19.5 4 16.5 4 12V5.5L12 2.5Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.5 4.5C16.5 4.5 18 6 18 8C18 8.7 17.8 9.4 17.5 10L20 12.5L18.5 14L16 11.5C15.4 11.8 14.7 12 14 12C12 12 10.5 10.5 10.5 8.5L4 15L4 17L6 17L12.5 10.5C12.5 12.5 14 14 16 14" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path d="M3 12H7L9.5 6L13.5 18L16.5 12H21" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "fork":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" stroke={stroke} strokeWidth={sw} />
          <circle cx="18" cy="6" r="2" stroke={stroke} strokeWidth={sw} />
          <circle cx="12" cy="18" r="2" stroke={stroke} strokeWidth={sw} />
          <path d="M6 8V12C6 13.1 6.9 14 8 14H16C17.1 14 18 13.1 18 12V8M12 14V16" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="13" rx="2" stroke={stroke} strokeWidth={sw} />
          <path d="M8 7V5C8 3.3 9.8 2.5 12 2.5C14.2 2.5 16 3.3 16 5V7" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" stroke={stroke} strokeWidth={sw} />
          <circle cx="17" cy="10" r="2.2" stroke={stroke} strokeWidth={sw} />
          <path d="M3 19C3 16 5.5 14 9 14C12.5 14 15 16 15 19M15 19V20M15.5 14.5C18 14.5 21 16 21 19V20" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...common}>
          <path d="M9 17H15M10 20H14M8 13C7 12 6 10.5 6 9C6 5.7 8.7 3 12 3C15.3 3 18 5.7 18 9C18 10.5 17 12 16 13C15 14 14.5 15 14.5 16H9.5C9.5 15 9 14 8 13Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};
