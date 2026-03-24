interface LogoMarkProps {
  size?: number;
  variant?: "default" | "inverted";
  className?: string;
}

export function LogoMark({ size = 32, variant = "default", className }: LogoMarkProps) {
  const isInverted = variant === "inverted";
  const bg = isInverted ? "#e94560" : "#0f0f1a";
  const stroke = "#ffffff";
  const accent = isInverted ? "#ffffff" : "#e94560";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill={bg} />
      <path
        d="M8 8L15 16L8 24"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 8L17 16L24 24"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2.5" fill={accent} />
    </svg>
  );
}
