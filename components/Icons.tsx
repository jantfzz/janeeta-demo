// Small inline icons for social links and navigation. Stroke icons use currentColor.
export type IconName =
  | "linkedin"
  | "instagram"
  | "youtube"
  | "strava"
  | "github"
  | "medium"
  | "substack"
  | "camera"
  | "pen"
  | "mail"
  | "pin"
  | "download"
  | "file"
  | "work"
  | "research"
  | "experience"
  | "about"
  | "resume"
  | "skills"
  | "hobbies"
  | "contact"
  | "home"
  | "external";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({ name, size = 16, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={`shrink-0 ${className}`}>
      {paths(name)}
    </svg>
  );
}

function paths(name: IconName) {
  switch (name) {
    case "linkedin":
      return (
        <g fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <rect x="6.3" y="10" width="2.4" height="7.5" rx=".4" />
          <circle cx="7.5" cy="7" r="1.45" />
          <path d="M11 10h2.3v1.1c.5-.8 1.5-1.35 2.7-1.35 2 0 3 1.25 3 3.6v4.15h-2.4v-3.8c0-1.1-.45-1.7-1.35-1.7-1 0-1.75.7-1.75 1.9v3.6H11z" />
        </g>
      );
    case "instagram":
      return (
        <g {...stroke}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
        </g>
      );
    case "youtube":
      return (
        <g>
          <rect x="2" y="5" width="20" height="14" rx="4.5" {...stroke} />
          <path d="M10 9l5 3-5 3z" fill="currentColor" />
        </g>
      );
    case "strava":
      return (
        <g fill="currentColor">
          <path d="M10.2 2L4.5 13.2h3.4l2.3-4.5 2.3 4.5h3.4z" />
          <path d="M15.9 13.2l-1.7 3.3-1.7-3.3H10l4.2 8.3 4.2-8.3z" opacity=".7" />
        </g>
      );
    case "github":
      return (
        <path
          fill="currentColor"
          d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 011-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 011 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0012 2z"
        />
      );
    case "medium":
      return (
        <g fill="currentColor">
          <ellipse cx="7.5" cy="12" rx="5.5" ry="5.6" />
          <ellipse cx="16.3" cy="12" rx="2.6" ry="5.3" />
          <ellipse cx="20.9" cy="12" rx="1" ry="4.7" />
        </g>
      );
    case "substack":
      return (
        <g fill="currentColor">
          <rect x="4" y="3" width="16" height="2.4" rx=".3" />
          <rect x="4" y="7.3" width="16" height="2.4" rx=".3" />
          <path d="M4 11.6h16V21l-8-4.4L4 21z" />
        </g>
      );
    case "camera":
      return (
        <g {...stroke}>
          <path d="M3 8.5A2.5 2.5 0 015.5 6h2l1.5-2h6l1.5 2h2A2.5 2.5 0 0121 8.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5z" />
          <circle cx="12" cy="13" r="3.8" />
        </g>
      );
    case "pen":
      return (
        <g {...stroke}>
          <path d="M4 20l1-4.5L16.5 4a2.1 2.1 0 013 3L8 18.5z" />
          <path d="M14.5 6l3 3" />
        </g>
      );
    case "mail":
      return (
        <g {...stroke}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M3.5 6.5L12 13l8.5-6.5" />
        </g>
      );
    case "pin":
      return (
        <g {...stroke}>
          <path d="M12 21s-7-6.1-7-11.5a7 7 0 0114 0C19 14.9 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </g>
      );
    case "download":
      return (
        <g {...stroke}>
          <path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 19.5h14" />
        </g>
      );
    case "file":
    case "resume":
      return (
        <g {...stroke}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4M9 12h6M9 15.5h6M9 9h2" />
        </g>
      );
    case "work":
      return (
        <g {...stroke}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5v2M3 12.5h18" />
        </g>
      );
    case "research":
      return (
        <g {...stroke}>
          <path d="M9 3h6M10 3v6.5L4.8 18.3A1.8 1.8 0 006.3 21h11.4a1.8 1.8 0 001.5-2.7L14 9.5V3" />
          <path d="M7 15h10" />
        </g>
      );
    case "experience":
      return (
        <g {...stroke}>
          <path d="M3 17l5-5 4 4 8-8" />
          <path d="M15 8h5v5" />
        </g>
      );
    case "about":
      return (
        <g {...stroke}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0116 0" />
        </g>
      );
    case "skills":
      return (
        <g {...stroke}>
          <path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.4l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" />
        </g>
      );
    case "hobbies":
      return (
        <g {...stroke}>
          <path d="M2.5 20l6.5-10 4 6 3-4 5.5 8z" />
          <circle cx="17" cy="6" r="2.5" />
        </g>
      );
    case "contact":
      return (
        <g {...stroke}>
          <path d="M4 5h16v11H9l-5 4z" />
          <path d="M8 9.5h8M8 12.5h5" />
        </g>
      );
    case "home":
      return (
        <g {...stroke}>
          <path d="M3 11l9-7 9 7M5.5 9.5V20h13V9.5" />
        </g>
      );
    case "external":
      return (
        <g {...stroke}>
          <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
        </g>
      );
  }
}
