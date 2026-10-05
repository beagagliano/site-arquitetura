// Logo "Digital Project" desenhado em SVG (usa a cor do texto atual).
export default function Logo({ className = '' }) {
  return (
    <svg
      className={`logo ${className}`}
      viewBox="0 0 120 58"
      role="img"
      aria-label="Digital Project"
    >
      <rect x="27" y="3" width="6" height="26" fill="currentColor" />
      <rect x="36" y="3" width="2.4" height="26" fill="currentColor" />
      <circle cx="53" cy="6" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M53 9 45 29M53 9l8 20M47.6 22h10.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <text
        x="60"
        y="48"
        textAnchor="middle"
        fontSize="7.2"
        letterSpacing="2.4"
        fontFamily="Roboto, Arial, sans-serif"
        fontWeight="500"
        fill="currentColor"
      >
        DIGITAL PROJECT
      </text>
    </svg>
  )
}
