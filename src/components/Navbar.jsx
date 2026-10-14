import { useEffect, useRef, useState } from "react"
import emblem from "../assets/brand/emblem-tile.png"
import Icon from "./ui/Icon"
import { NAV_LINKS } from "../data/site"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Fondo sólido al desplazarse
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Sección activa
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    // Observa todas las secciones; solo las del menú marcan un enlace activo.
    const navIds = new Set(NAV_LINKS.map((l) => l.id))
    const sections = Array.from(document.querySelectorAll("main > section"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(navIds.has(entry.target.id) ? entry.target.id : "")
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Menú móvil: Escape cierra, bloqueo de scroll del fondo y foco
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    menuRef.current?.querySelector("a")?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  // Cierra el menú si se pasa a escritorio
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-night/92 backdrop-blur-md border-b border-line-soft" : "bg-transparent border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-night focus:font-semibold"
      >
        Saltar al contenido
      </a>

      <nav aria-label="Principal" className="container-x flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <a href="#inicio" className="flex items-center gap-3 shrink-0" aria-label="AEGIS FaceGuard, ir al inicio">
          <img src={emblem} alt="" width="36" height="36" className="h-9 w-9 rounded-[8px]" />
          <span className="font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-ice">
            AEGIS <span className="font-semibold text-mist">FaceGuard</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded px-3 py-2 text-[0.875rem] transition-colors ${
                    isActive ? "text-ice" : "text-mist hover:text-ice"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-[3px] h-px bg-signal transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden !min-h-10 !px-4 !py-2 text-sm sm:inline-flex">
            Solicitar demostración
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded text-ice lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        ref={menuRef}
        hidden={!open}
        className="lg:hidden h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line-soft bg-night"
      >
        <ul className="container-x flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line-soft py-4 font-display text-xl font-bold text-ice"
              >
                {link.label}
                {active === link.id ? <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" /> : null}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Solicitar demostración
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
