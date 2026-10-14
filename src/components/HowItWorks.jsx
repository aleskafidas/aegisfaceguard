import { useEffect, useRef, useState } from "react"
import Reveal from "./ui/Reveal"
import Icon from "./ui/Icon"
import demoVideo from "../assets/videos/deteccion-demo.mp4"
import demoPoster from "../assets/img/deteccion-demo-poster.webp"

const STEPS = [
  {
    icon: "camera",
    title: "Captura",
    text: "Las cámaras del establecimiento envían el video a un dispositivo instalado en el local.",
  },
  {
    icon: "scan",
    title: "Análisis",
    text: "Modelos de visión artificial revisan las imágenes en busca de objetos compatibles con un arma y de personas con casco.",
  },
  {
    icon: "verify",
    title: "Verificación",
    text: "Cuando aparece un posible evento, un segundo análisis por IA revisa la imagen para descartar detecciones erróneas.",
  },
  {
    icon: "bell",
    title: "Aviso",
    text: "Si el evento se mantiene, llega una alerta con la imagen al panel de operación y a la app móvil.",
  },
  {
    icon: "person",
    title: "Decisión humana",
    text: "El responsable revisa la imagen y decide cómo actuar. El sistema señala eventos; no confirma delitos.",
  },
]

function DemoVideo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [userPaused, setUserPaused] = useState(false)

  // Carga y reproduce solo cuando el video está en pantalla
  useEffect(() => {
    const video = videoRef.current
    if (!video || typeof IntersectionObserver === "undefined") return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused) {
          video.play().catch(() => setPlaying(false))
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [userPaused])

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      setUserPaused(false)
      video.play().catch(() => setPlaying(false))
    } else {
      setUserPaused(true)
      video.pause()
    }
  }

  return (
    <figure className="m-0">
      <div className="brackets relative overflow-hidden rounded-[var(--radius-md)] border border-line bg-deep">
        <video
          ref={videoRef}
          src={demoVideo}
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
          aria-label="Video de demostración: recuadros de detección de personas y cascos sobre la grabación de un local."
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute bottom-3 left-3 inline-flex h-10 items-center gap-2 rounded-[var(--radius-sm)] bg-night/85 px-3 text-[0.8125rem] font-semibold text-ice hover:bg-night"
          aria-label={playing ? "Pausar video" : "Reproducir video"}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
            {playing ? <path d="M3 2h3v10H3zM8 2h3v10H8z" /> : <path d="M3 1.5l9 5.5-9 5.5z" />}
          </svg>
          {playing ? "Pausar" : "Reproducir"}
        </button>
      </div>
      <figcaption className="mt-3 max-w-xl text-[0.8125rem] leading-snug text-steel">
        Demostración de detección sobre un video de referencia. Los recuadros marcan personas y cascos; una detección
        indica un posible evento, no una certeza.
      </figcaption>
    </figure>
  )
}

export default function HowItWorks() {
  return (
    <section id="solutions" className="section-y relative border-t border-line-soft">
      <div className="container-x">
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <h2 className="t-h2 max-w-xl">De la cámara a tu decisión, en cinco pasos.</h2>
          <p className="t-lead max-w-xl text-mist lg:justify-self-end">
            AEGIS combina visión artificial con una segunda verificación por IA. La alerta llega con la imagen para
            que una persona revise y actúe.
          </p>
        </Reveal>

        {/* Pipeline: fila en escritorio, columna con línea vertical en móvil */}
        <Reveal as="ol" className="relative mt-16 grid gap-0 lg:grid-cols-5 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-signal/70 via-line to-line lg:left-0 lg:right-0 lg:top-[19px] lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative grid grid-cols-[40px_1fr] gap-5 pb-10 lg:block lg:pb-0">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-night text-signal">
                <Icon name={step.icon} size={20} />
              </span>
              <div className="lg:mt-6">
                <p className="text-[0.8125rem] font-semibold text-steel">Paso {i + 1}</p>
                <h3 className="t-h3 mt-1">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-mist">{step.text}</p>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <DemoVideo />
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] lg:text-[1.75rem]">
              Dónde se procesa cada imagen
            </h3>
            <dl className="mt-8 divide-y divide-line-soft border-y border-line-soft">
              {[
                ["En el local", "Un dispositivo conectado a tus cámaras toma el video y lo envía para su análisis."],
                ["En la nube", "Servidores con aceleración gráfica ejecutan los modelos de detección."],
                ["Verificación", "Un modelo de IA adicional revisa cada posible evento antes de avisar."],
                ["Para el responsable", "Panel de operación web y app móvil con la imagen del evento."],
              ].map(([term, desc]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-ice">{term}</dt>
                  <dd className="m-0 text-[0.9375rem] leading-relaxed text-mist">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
