import Reveal from "./ui/Reveal"
import useScrollProgress from "../hooks/useScrollProgress"
import { PHOTOS } from "../data/photos"

const STEPS = [
  { title: "Evaluación", text: "Visitamos el local: accesos, iluminación, internet y cámaras existentes." },
  { title: "Diseño", text: "Definimos cuántas cámaras, dónde van y qué eventos se analizan." },
  { title: "Instalación", text: "Instalamos los equipos, conectamos las cámaras y configuramos los avisos." },
  { title: "Pruebas", text: "Comprobamos detección y alertas en las condiciones reales del local." },
  { title: "Entrega", text: "Te explicamos cómo llegan las alertas y qué hacer ante cada una." },
]

export default function Implementation() {
  const ref = useScrollProgress()
  const p = PHOTOS.instalacion

  return (
    <section id="implementacion" ref={ref} className="py-24 lg:py-36">
      <Reveal className="container-x text-center">
        <h2 className="t-section mx-auto max-w-4xl">Así lo ponemos en marcha.</h2>
        <p className="t-lead mx-auto mt-6 max-w-2xl text-mist">
          Un proceso acompañado de principio a fin. Los tiempos dependen del local y los acordamos contigo tras la
          evaluación.
        </p>
      </Reveal>

      <div className="container-x mt-14">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={p.src}
            srcSet={p.srcSet}
            sizes="(min-width: 1216px) 1152px, 92vw"
            width={p.width}
            height={p.height}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            className="parallax-zoom aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
          />
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <p className="font-display text-sm font-bold text-signal">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.03em]">{s.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-mist">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <a href="#contact" className="btn btn-primary btn-lg">
            Agendar evaluación
          </a>
        </div>
      </div>
    </section>
  )
}
