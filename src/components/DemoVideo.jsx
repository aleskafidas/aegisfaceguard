import { useEffect, useRef, useState } from "react"
import Reveal from "./ui/Reveal"
import demoSrc from "../assets/video/aegis-demo.mp4"
import demoPoster from "../assets/video/aegis-demo-poster.webp"

// Video demostrativo (dramatización). No se descarga hasta que la sección se
// acerca a la pantalla; se reproduce en silencio mientras está visible y el
// visitante puede pausarlo. Con "reducir movimiento" no arranca solo.
export default function DemoVideo() {
  const videoRef = useRef(null)
  const [src, setSrc] = useState(() => (typeof IntersectionObserver === "undefined" ? demoSrc : null))
  const [playing, setPlaying] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const inViewRef = useRef(false)
  const reducedRef = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  // Cuando el archivo se asigna con la sección ya visible, arranca la reproducción
  useEffect(() => {
    const video = videoRef.current
    if (!video || !src || reducedRef.current || userPaused || !inViewRef.current) return
    video.play().catch(() => setPlaying(false))
  }, [src, userPaused])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (typeof IntersectionObserver === "undefined") return

    // Carga diferida: asigna el archivo cuando falta poco para verlo
    const loader = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSrc(demoSrc)
          loader.disconnect()
        }
      },
      { rootMargin: "600px 0px" },
    )
    loader.observe(video)

    // Reproduce/pausa según visibilidad
    const player = new IntersectionObserver(
      ([e]) => {
        inViewRef.current = e.isIntersecting
        if (reducedRef.current || userPaused) return
        if (e.isIntersecting) {
          if (video.currentSrc) video.play().catch(() => setPlaying(false))
        } else video.pause()
      },
      { threshold: 0.5 },
    )
    player.observe(video)
    return () => {
      loader.disconnect()
      player.disconnect()
    }
  }, [userPaused])

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (!src) setSrc(demoSrc)
    if (video.paused) {
      setUserPaused(false)
      video.play().catch(() => setPlaying(false))
    } else {
      setUserPaused(true)
      video.pause()
    }
  }

  return (
    <section id="demo" aria-labelledby="demo-titulo" className="cv-auto py-24 lg:py-32">
      <Reveal className="container-x text-center">
        <h2 id="demo-titulo" className="t-section mx-auto max-w-4xl">
          Míralo en acción.
        </h2>
        <p className="t-lead mx-auto mt-6 max-w-2xl text-mist">
          De la detección a la sirena, la llamada al cuadrante y el reporte por WhatsApp, en 40 segundos.
        </p>
      </Reveal>

      <Reveal className="container-x mt-12">
        <figure className="m-0">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-deep">
            <video
              ref={videoRef}
              src={src || undefined}
              poster={demoPoster}
              muted
              loop
              playsInline
              preload="none"
              width="1280"
              height="720"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="block aspect-video h-auto w-full object-cover"
              aria-label="Video de demostración: una persona con casco entra a una tienda con un arma, AEGIS la detecta, un operador activa la sirena, se llama al cuadrante y se envía el reporte por WhatsApp."
            />
            <button
              type="button"
              onClick={toggle}
              className="btn btn-glass absolute bottom-3 right-3 !min-h-9 !px-3 text-xs sm:bottom-4 sm:right-4 sm:!min-h-11 sm:!px-4 sm:text-sm"
              aria-label={playing ? "Pausar video" : "Reproducir video"}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
                {playing ? <path d="M3 2h3v10H3zM8 2h3v10H8z" /> : <path d="M3 1.5l9 5.5-9 5.5z" />}
              </svg>
              {playing ? "Pausar" : "Reproducir"}
            </button>
          </div>
          <figcaption className="mx-auto mt-4 max-w-3xl text-center text-[0.8125rem] leading-snug text-steel">
            Dramatización: las escenas y las personas fueron generadas con IA y el panel es una recreación. La captura de
            WhatsApp proviene de una prueba real del sistema.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  )
}
