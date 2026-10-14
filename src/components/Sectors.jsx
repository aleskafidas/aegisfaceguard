import Reveal from "./ui/Reveal"

const SECTORS = [
  { name: "Tiendas y minimercados", note: "Caja y entrada a la vista de una misma cámara." },
  { name: "Droguerías", note: "Atención en mostrador y horarios extendidos." },
  { name: "Joyerías y relojerías", note: "Mercancía de alto valor en vitrinas." },
  { name: "Tiendas de tecnología y celulares", note: "Productos pequeños y costosos cerca del cliente." },
  { name: "Ferreterías y depósitos", note: "Accesos amplios y zonas de despacho." },
  { name: "Otros locales con atención al público", note: "Cualquier punto con caja, mostrador o acceso directo." },
]

export default function Sectors() {
  return (
    <section aria-labelledby="sectores-titulo" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="sectores-titulo" className="t-h2">
            Pensado para comercios que atienden al público.
          </h2>
          <p className="t-lead mt-6 max-w-md text-mist">
            Estos son tipos de establecimiento donde el servicio encaja bien. La viabilidad de cada local se confirma
            en la visita de evaluación.
          </p>
        </Reveal>

        <Reveal as="ul" className="border-t border-line">
          {SECTORS.map((s) => (
            <li
              key={s.name}
              className="group grid gap-1 border-b border-line py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-xl font-bold tracking-[-0.02em] text-ice transition-colors group-hover:text-signal sm:text-2xl">
                {s.name}
              </span>
              <span className="text-[0.9375rem] text-mist">{s.note}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
