import { useState } from "react"
import logo from "../assets/logoaegis.png"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#solutions", label: "Tecnología" },
  { href: "#store", label: "Tienda" },
  { href: "#contact", label: "Contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-ink/90 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="AEGIS FaceGuard" className="h-10 object-contain" />
          <span className="font-display font-extrabold text-paper text-lg tracking-tight">
            AEGIS <span className="text-accent">FACEGUARD</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-paper/80">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-paper transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-dark transition-colors px-5 py-2.5 rounded-lg text-ink font-semibold"
          >
            Solicitar demo
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-paper p-2"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-ink px-6 py-4 flex flex-col gap-4 text-paper/80">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-paper">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-accent text-ink font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Solicitar demo
          </a>
        </div>
      )}
    </nav>
  )
}
