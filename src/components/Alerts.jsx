import Reveal from "./ui/Reveal"
import { PHOTOS } from "../data/photos"

export default function Alerts() {
  const p = PHOTOS.celular
  return (
    <section aria-labelledby="alertas-titulo" className="cv-auto py-24 lg:py-36">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="overflow-hidden rounded-[2rem]">
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
        </Reveal>
        <Reveal delay={100}>
          <h2 id="alertas-titulo" className="t-section">
            La alerta llega con la imagen.
          </h2>
          <p className="t-lead mt-6 max-w-md text-mist">
            Ves lo que pasó y decides cómo actuar, desde el panel de operación o desde la app móvil.
          </p>
          <p className="mt-8 max-w-md border-l-2 border-amber pl-4 text-[0.9375rem] leading-relaxed text-mist">
            Una detección indica un posible evento, no un hecho confirmado. La decisión siempre es tuya.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
