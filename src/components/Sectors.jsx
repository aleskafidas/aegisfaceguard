import Reveal from "./ui/Reveal"
import { PHOTOS } from "../data/photos"

export default function Sectors() {
  return (
    <section aria-labelledby="sectores-titulo" className="cv-auto overflow-hidden py-24 lg:py-36">
      <Reveal className="container-x">
        <h2 id="sectores-titulo" className="t-section max-w-4xl">
          Pensado para comercios que atienden al público.
        </h2>
      </Reveal>

      {/* Galería: desliza en móvil, cuatro columnas en escritorio */}
      <ul
        className="snap-row container-x mt-12 auto-cols-[78%] sm:auto-cols-[46%] lg:grid-flow-row lg:grid-cols-4 lg:overflow-visible"
        aria-label="Tipos de establecimiento"
      >
        {PHOTOS.sectores.map((s) => (
          <li key={s.name} className="relative overflow-hidden rounded-[1.75rem]">
            <img
              src={s.src}
              width="900"
              height="1200"
              alt={s.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,17,31,0.85),rgba(6,17,31,0)_45%)]"
            />
            <p className="absolute inset-x-0 bottom-0 p-6 font-display text-xl font-bold tracking-[-0.02em] text-ice">
              {s.name}
            </p>
          </li>
        ))}
      </ul>

      <div className="container-x">
        <p className="mt-8 max-w-2xl text-mist">
          También panaderías, estaciones de servicio, ferreterías y otros locales con caja, mostrador o acceso directo.
          La viabilidad de cada local se confirma en la visita de evaluación.
        </p>
      </div>
    </section>
  )
}
