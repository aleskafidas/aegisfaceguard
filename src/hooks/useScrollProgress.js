import { useEffect, useRef } from "react"

// Escribe en el elemento la variable CSS --p (0 → 1) según cuánto se ha
// recorrido el elemento mientras atraviesa la ventana. No provoca renders de
// React: el estilo se actualiza directamente en un requestAnimationFrame.
//
// mode "through": 0 cuando el borde superior entra por abajo, 1 cuando el
//                 borde inferior sale por arriba (secciones normales).
// mode "sticky":  0 cuando el borde superior llega arriba, 1 cuando el borde
//                 inferior llega abajo (contenedores altos con hijo sticky).
//
// Con prefers-reduced-motion se fija --p en 1 y no se escucha el scroll.
export default function useScrollProgress({ mode = "through", onProgress } = {}) {
  const ref = useRef(null)
  const cbRef = useRef(onProgress)

  useEffect(() => {
    cbRef.current = onProgress
  }, [onProgress])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      el.style.setProperty("--p", "1")
      cbRef.current?.(1)
      return
    }

    let frame = 0
    let visible = true
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let p
      if (mode === "sticky") {
        const total = r.height - vh
        p = total > 0 ? -r.top / total : 0
      } else {
        p = (vh - r.top) / (vh + r.height)
      }
      p = Math.min(1, Math.max(0, p))
      el.style.setProperty("--p", p.toFixed(4))
      cbRef.current?.(p)
    }
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update)
    }

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([e]) => {
            visible = e.isIntersecting
            if (visible) onScroll()
          })
        : null
    io?.observe(el)

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      io?.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [mode])

  return ref
}
