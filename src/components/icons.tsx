import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <path d="M9 4.5V3.8A1.8 1.8 0 0 1 10.8 2h2.4A1.8 1.8 0 0 1 15 3.8v.7" />
      <path d="M9 9.5h6M9 13h6M9 16.5h3.5" />
    </svg>
  );
}

export function UserSearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M4 20c.6-3.2 3-5 6-5 1 0 1.9.2 2.7.6" />
      <circle cx="17" cy="16" r="3" />
      <path d="m19.3 18.3 2.2 2.2" />
    </svg>
  );
}

export function MonitorOffIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M9 21h6M12 17v4" />
      <path d="m8.5 8.5 7 5M15.5 8.5l-7 5" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15.2" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SmartphoneChatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18.5h2" />
      <path d="M10 9.5h4M10 12.5h2.5" />
    </svg>
  );
}

export function BrainSparkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4.5a3.2 3.2 0 0 0-3.2 3.2c-1.8.3-3.1 1.8-3.1 3.7 0 1.1.5 2.1 1.2 2.8-.2.5-.3 1-.3 1.5A3.8 3.8 0 0 0 10.4 19c.6.6 1 .9 1.6.9s1-.3 1.6-.9a3.8 3.8 0 0 0 3.8-3.3c0-.5-.1-1-.3-1.5.7-.7 1.2-1.7 1.2-2.8 0-1.9-1.3-3.4-3.1-3.7A3.2 3.2 0 0 0 12 4.5Z" />
      <path d="M12 8v8M9.5 11h5" />
    </svg>
  );
}

export function HomeServerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m4 10.5 8-6.5 8 6.5" />
      <path d="M6 9v10h12V9" />
      <path d="M9.5 13h5M9.5 16h5" />
      <circle cx="15.7" cy="13" r="0.1" fill="currentColor" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M10.8 8.2 7.2 14.8M13.2 8.2l3.6 6.6M8.5 17h7" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 5 6v5.2c0 4.4 2.9 7.6 7 9.3 4.1-1.7 7-4.9 7-9.3V6l-7-2.5Z" />
      <path d="m9 11.8 2.2 2.2L15.3 9.7" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.4 2.4 4.6-5" />
    </svg>
  );
}

export function DocumentFlowIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3.5h7l3.5 3.5v13.5h-10.5Z" />
      <path d="M14 3.5V7h3.5" />
      <path d="M10 12h4.5M10 15.5h4.5" />
    </svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="12" cy="6" rx="7" ry="2.8" />
      <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </svg>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3.5V8M15 3.5V8" />
      <path d="M6.5 8h11v3.5a5.5 5.5 0 0 1-11 0Z" />
      <path d="M12 17v3.5" />
    </svg>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 4.5 9.5 4.5L12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6V11" />
      <path d="M21.5 9v5" />
    </svg>
  );
}

export function BuildingsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20.5V6.5l6-3v17" />
      <path d="M10 20.5h10v-11l-6-2.5v13.5" />
      <path d="M6.5 9h1M6.5 12.5h1M6.5 16h1M16 12.5h1M16 16h1" />
      <path d="M3 20.5h18" />
    </svg>
  );
}

export function CoinsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.3 9.8h4.2a1.9 1.9 0 0 1 0 3.8h-3a1.9 1.9 0 0 0 0 3.8h4.2" />
    </svg>
  );
}
