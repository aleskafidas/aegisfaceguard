// Set de iconos propio: trazo 1.5, retícula 24×24, extremos redondeados.
// Un solo estilo para todo el sitio (no se mezclan bibliotecas).
const PATHS = {
  camera: "M15 10l5-3v10l-5-3M3 8.5A1.5 1.5 0 014.5 7h9A1.5 1.5 0 0115 8.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 013 15.5z",
  scan: "M4 8V5.5A1.5 1.5 0 015.5 4H8M16 4h2.5A1.5 1.5 0 0120 5.5V8M20 16v2.5a1.5 1.5 0 01-1.5 1.5H16M8 20H5.5A1.5 1.5 0 014 18.5V16M8 12h8",
  verify: "M12 3l7 3v5.5c0 4.3-2.9 7.6-7 9.5-4.1-1.9-7-5.2-7-9.5V6l7-3zM9 12l2 2 4-4",
  bell: "M6 16V11a6 6 0 1112 0v5l1.5 2h-15L6 16zM10 20.5a2 2 0 004 0",
  person: "M12 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5 20.5c.8-3.6 3.6-6 7-6s6.2 2.4 7 6",
  alert: "M12 9v4M12 16.5v.01M10.3 4.4L3.2 17a2 2 0 001.7 3h14.2a2 2 0 001.7-3L13.7 4.4a2 2 0 00-3.4 0z",
  helmet: "M4 15a8 8 0 0116 0v1.5H4V15zM12 7v4M3 16.5h18M15.5 11.5h4",
  network: "M12 5a2 2 0 100-.01M5 19a2 2 0 100-.01M19 19a2 2 0 100-.01M12 7v5m0 0l-6 5m6-5l6 5",
  check: "M5 12.5l4.5 4.5L19 7.5",
  minus: "M6 12h12",
  plus: "M12 5v14M5 12h14",
  close: "M6 6l12 12M18 6L6 18",
  menu: "M4 7h16M4 12h16M4 17h16",
  sun: "M12 3v2m0 14v2M5.6 5.6l1.4 1.4m9.9 9.9l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m9.9-9.9l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z",
  drone: "M9 12h6M12 10v4M5 6.5a2 2 0 100-.01M19 6.5a2 2 0 100-.01M5 19.5a2 2 0 100-.01M19 19.5a2 2 0 100-.01M7 8l3 3m4 0l3-3M7 18l3-3m4 0l3 3",
  install: "M14.5 6.5l3 3M4 20l6.5-6.5M13 4l7 7-3 3-7-7 3-3z",
  mail: "M4 6.5h16v11H4zM4 7l8 6 8-6",
  chat: "M5 18.5l1.2-3.4A7.5 7.5 0 1112 19.5a7.4 7.4 0 01-3.4-.8L5 18.5z",
  pin: "M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0113 0c0 5.3-6.5 11-6.5 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  monitor: "M3.5 5h17v11h-17zM9 20h6M12 16v4",
  phone: "M8 3.5h8a1 1 0 011 1v15a1 1 0 01-1 1H8a1 1 0 01-1-1v-15a1 1 0 011-1zM11 17.5h2",
  lock: "M7 11V8a5 5 0 0110 0v3M5.5 11h13v9.5h-13zM12 15v2",
}

export default function Icon({ name, size = 24, className = "", strokeWidth = 1.5, title }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={d} />
    </svg>
  )
}
