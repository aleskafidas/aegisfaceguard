import Reveal from "./ui/Reveal"

const LIMITS = [
  "No garantiza que no ocurran delitos ni reemplaza al personal de seguridad.",
  "Una detección es un posible evento: puede haber falsos positivos y eventos no detectados.",
  "La calidad depende de la ubicación, la iluminación y la resolución de las cámaras.",
  "Requiere conexión a internet estable en el establecimiento.",
]

export default function Limits() {
  return (
    <section aria-labelledby="limites-titulo" className="cv-auto border-y border-line-soft py-20 lg:py-28">
      <Reveal className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <h2 id="limites-titulo" className="font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
          Lo que debes saber.
        </h2>
        <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {LIMITS.map((l) => (
            <li key={l} className="border-t border-line pt-4 leading-relaxed text-mist">
              {l}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
