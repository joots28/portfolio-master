import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react"

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} />
}

export function Text({
  as = "p",
  className = "",
  children,
}: {
  as?: "p" | "h1" | "h2" | "h3" | "span"
  className?: string
  children: ReactNode
}) {
  const Tag = as
  return <Tag className={className}>{children}</Tag>
}

export function Link({
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  )
}

export function Arrow({
  direction = "diagonal",
}: {
  direction?: "diagonal" | "down" | "right"
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`arrow arrow-${direction}`}
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string
  label: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="section-heading">
      <div>
        <Text className="eyebrow">
          <span className="blue">{number} /</span> {label}
        </Text>
        <Text as="h2">{title}</Text>
      </div>
      {children}
    </div>
  )
}

export function OrbitalArt({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`orbital-art ${small ? "small-art" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 600" fill="none">
        <defs>
          <linearGradient
            id={small ? "metal-small" : "metal"}
            x1="130"
            y1="100"
            x2="470"
            y2="510"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#090f23" />
            <stop offset=".22" stopColor="#2558f5" />
            <stop offset=".36" stopColor="#90baff" />
            <stop offset=".42" stopColor="#1a3fc2" />
            <stop offset=".62" stopColor="#071234" />
            <stop offset=".78" stopColor="#3a6cff" />
            <stop offset="1" stopColor="#02040c" />
          </linearGradient>
          <linearGradient
            id={small ? "edge-small" : "edge"}
            x1="100"
            y1="100"
            x2="450"
            y2="500"
          >
            <stop stopColor="#a7c4ff" />
            <stop offset=".5" stopColor="#2458ff" />
            <stop offset="1" stopColor="#071538" />
          </linearGradient>
        </defs>
        <g transform="translate(300 300) rotate(-32)">
          {Array.from({ length: 13 }, (_, i) => (
            <ellipse
              key={i}
              rx={153 + i * 2.8}
              ry={198 - i * 1.4}
              transform={`rotate(${i * 5})`}
              stroke={`url(#${small ? "metal-small" : "metal"})`}
              strokeWidth={17}
            />
          ))}
          <ellipse
            rx="176"
            ry="200"
            stroke={`url(#${small ? "edge-small" : "edge"})`}
            strokeWidth=".8"
          />
        </g>
      </svg>
    </div>
  )
}