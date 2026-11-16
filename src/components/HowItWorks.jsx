import { useEffect, useRef, useState } from "react"
import HeroVisual from "./HeroVisual"

// Recorrido con el visor fijo (estilo Apple): cada paso que pasa por el centro
// de la pantalla cambia el estado del visor ilustrativo.
const STEPS = [
  {
    title: "Captura",
    text: "Las cámaras del establecimiento envían el video a un dispositivo instalado en el local.",
    stage: 0,
  },
  {
    title: "Análisis",
    text: "Modelos de visión artificial revisan las imágenes en busca de objetos compatibles con un arma y de personas con casco.",
    stage: 1,
  },
  {
    title: "Verificación",
    text: "Cada posible evento pasa por un segundo análisis con IA para descartar detecciones erróneas.",
    stage: 2,
  },
  {
    title: "Aviso",
    text: "Si el evento se mantiene, recibes la alerta con la imagen en el panel de operación y en la app móvil.",
    stage: 3,
  },
  {
    title: "Decisión humana",
    text: "Una persona revisa la imagen y decide: activar la sirena, enviar el reporte o resolver el evento. El sistema señala eventos; no confirma delitos.",
    stage: 4,
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index))
        })
      },
      // En móvil el visor ocupa la parte superior: la línea de activación va más abajo.
      { rootMargin: window.matchMedia("(min-width: 1024px)").matches ? "-48% 0px -48% 0px" : "-72% 0px -26% 0px" },
    )
    stepRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="solutions" className="relative pt-24 lg:pt-32">
      <div className="container-x">
        <div className="sec-head">
          <h2 className="t-section">De la cámara a tu decisión.</h2>
          <p className="t-lead text-mist">
            Visión artificial, una segunda verificación por IA y una persona que decide.
          </p>
        </div>
      </div>

      <div className="container-x mt-12 grid lg:mt-20 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
        {/* Visor fijo */}
        <div className="sticky top-16 z-10 -mx-5 bg-night/95 px-5 pb-4 pt-3 sm:-mx-8 sm:px-8 lg:top-0 lg:mx-0 lg:flex lg:h-[100svh] lg:items-center lg:bg-transparent lg:p-0">
          <div className="w-full">
            <HeroVisual stage={STEPS[active].stage} caption={false} />
            <p className="mt-3 text-[0.75rem] leading-snug text-steel">
              Imagen ilustrativa. Los recuadros representan el flujo; no son datos de una cámara real.
            </p>
          </div>
        </div>

        {/* Pasos */}
        <ol className="relative pb-[30vh] lg:pb-[35vh] lg:pt-[25vh]">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              ref={(el) => (stepRefs.current[i] = el)}
              data-index={i}
              aria-current={active === i ? "step" : undefined}
              className={`flex min-h-[55vh] flex-col justify-center transition-opacity duration-500 lg:min-h-[70vh] ${
                active === i ? "opacity-100" : "opacity-30"
              }`}
            >
              <p className="hud text-[0.9375rem] text-signal">Paso {i + 1} de {STEPS.length}</p>
              <h3 className="mt-3 font-display text-[2rem] font-bold leading-none tracking-[-0.025em] sm:text-[2.75rem]">
                {s.title}
              </h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
