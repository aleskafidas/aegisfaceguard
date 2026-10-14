import Reveal from "./ui/Reveal"

const STEPS = [
  {
    title: "Evaluación del establecimiento",
    text: "Visitamos el local para conocer accesos, iluminación, conexión a internet y las cámaras existentes.",
  },
  {
    title: "Diseño de la solución",
    text: "Definimos cuántas cámaras se necesitan, dónde ubicarlas y qué eventos se van a analizar.",
  },
  {
    title: "Instalación y configuración",
    text: "Instalamos los equipos, conectamos las cámaras al sistema y configuramos los avisos.",
  },
  {
    title: "Pruebas del sistema",
    text: "Comprobamos la detección y el envío de alertas en las condiciones reales del local.",
  },
  {
    title: "Entrega y explicación",
    text: "Te explicamos cómo llegan las alertas, cómo revisarlas y qué hacer ante cada una.",
  },
]

export default function Implementation() {
  return (
    <section id="implementacion" className="on-light section-y bg-cloud text-ink">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="t-h2 max-w-xl">Así ponemos AEGIS en marcha en tu local.</h2>
          <p className="t-lead max-w-lg text-ink-soft lg:justify-self-end">
            Un proceso acompañado de principio a fin. Los tiempos dependen del tamaño del local y de la
            infraestructura existente; los acordamos contigo después de la evaluación.
          </p>
        </Reveal>

        <Reveal as="ol" className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[#c9d5e1] bg-[#c9d5e1] sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li key={step.title} className={`bg-cloud p-7 lg:p-8 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <span className="font-display text-[2.5rem] font-extrabold leading-none tracking-[-0.04em] text-[#6b8299]">
                {i + 1}
              </span>
              <h3 className="t-h3 mt-6 text-ink">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </Reveal>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn btn-dark">
            Agendar evaluación
          </a>
          <a href="#faq" className="btn btn-outline-dark">
            Ver preguntas frecuentes
          </a>
        </div>
      </div>
    </section>
  )
}
