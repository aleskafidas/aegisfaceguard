import Reveal from "./ui/Reveal"
import { PHOTOS } from "../data/photos"

// Sectores objetivo (no son clientes). Cuando haya fotografía propia de cada
// sector se puede volver a una galería; por ahora la lista es tipográfica y la
// acompaña la única foto de gama alta disponible.
const SECTORS = [
  "Joyerías y relojerías",
  "Bancos y entidades financieras",
  "Tiendas de lujo y boutiques",
  "Tecnología y celulares",
]

export default function Sectors() {
  const p = PHOTOS.joyeria
  return (
    <section aria-labelledby="sectores-titulo" className="cv-auto overflow-hidden py-24 lg:py-36">
      <Reveal className="container-x">
        <div className="sec-head">
          <h2 id="sectores-titulo" className="t-section">
            Protección para comercios de alto valor.
          </h2>
          <p className="t-lead text-mist">La viabilidad de cada local se confirma en la visita de evaluación.</p>
        </div>
      </Reveal>

      <div className="container-x mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
        <ul aria-label="Tipos de establecimiento" className="self-end border-b border-line">
          {SECTORS.map((name) => (
            <li
              key={name}
              className="border-t border-line py-6 font-display text-[clamp(1.375rem,1rem+1.6vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em] text-ice lg:py-8"
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="overflow-hidden rounded-[var(--radius-md)]">
          <img
            src={p.src}
            width={p.width}
            height={p.height}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  )
}
