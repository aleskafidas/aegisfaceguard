import Reveal from "./ui/Reveal"
import { PHOTOS } from "../data/photos"

// Acciones reales del flujo de AEGIS (ver documentación del proyecto):
// voz automática por casco, sirena y reporte por WhatsApp decididos por un operador.
const ACTIONS = [
  {
    title: "Aviso de voz en el local",
    text: "Si alguien entra o permanece con casco, un parlante instalado en el local reproduce automáticamente un aviso de voz.",
  },
  {
    title: "Sirena",
    text: "Ante un posible arma, el operador revisa la imagen y decide si activa la sirena del local.",
  },
  {
    title: "Reporte por WhatsApp",
    text: "Cuando el operador confirma el evento, se puede enviar un reporte con la imagen y los datos del local.",
  },
]

export default function Alerts() {
  const p = PHOTOS.celular
  return (
    <section aria-labelledby="alertas-titulo" className="cv-auto py-24 lg:py-36">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal as="figure" className="m-0">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={p.src}
              srcSet={p.srcSet}
              sizes={p.sizes}
              width={p.width}
              height={p.height}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[0.8125rem] leading-snug text-steel">
            Reporte real de una prueba del sistema en el local piloto. La dirección y la ubicación se ocultaron para esta
            imagen.
          </figcaption>
        </Reveal>

        <Reveal delay={100}>
          <h2 id="alertas-titulo" className="t-section">
            La alerta llega con la imagen.
          </h2>
          <p className="t-lead mt-6 max-w-md text-mist">
            Ves lo que pasó y decides cómo actuar, desde el panel de operación o desde la app móvil.
          </p>

          <dl className="mt-10 space-y-6">
            {ACTIONS.map((a) => (
              <div key={a.title} className="border-t border-line pt-5">
                <dt className="font-display text-lg font-bold tracking-[-0.015em] text-ice">{a.title}</dt>
                <dd className="m-0 mt-1.5 max-w-md leading-relaxed text-mist">{a.text}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-md border-l-2 border-amber pl-4 text-[0.9375rem] leading-relaxed text-mist">
            Una detección indica un posible evento, no un hecho confirmado. La decisión siempre es de una persona.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
