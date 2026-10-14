import Reveal from "./ui/Reveal"
import Icon from "./ui/Icon"
import solarInstalacion from "../assets/img/solar-instalacion.webp"
import solarCubierta from "../assets/img/solar-cubierta.webp"
import { whatsappLink } from "../data/site"

const SOLAR_POINTS = [
  {
    title: "Dimensionamiento",
    text: "Análisis y diseño de sistemas solares adaptados al consumo energético y a las necesidades de cada proyecto.",
  },
  {
    title: "Instalación profesional",
    text: "Implementación de sistemas on-grid y off-grid con equipos modernos y configuración especializada.",
  },
  {
    title: "Monitoreo inteligente",
    text: "Supervisión y optimización energética mediante plataformas digitales y monitoreo en tiempo real.",
  },
]

const OTHER = [
  {
    icon: "camera",
    title: "Instalación de cámaras",
    text: "Diseño e instalación profesional de sistemas de videovigilancia IP y PoE para negocios y edificios.",
  },
  {
    icon: "drone",
    title: "Drones y automatización",
    text: "Soluciones con drones FPV, automatización y sistemas autónomos para inspección y monitoreo.",
  },
]

export default function OtherServices() {
  return (
    <section id="services" className="section-y border-t border-line-soft">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="t-h2">Otros servicios del equipo.</h2>
          <p className="t-lead mt-6 text-mist">
            Además de AEGIS, diseñamos e instalamos videovigilancia, energía solar y soluciones con drones.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line md:grid-cols-2">
          {OTHER.map((s) => (
            <Reveal key={s.title} className="bg-night p-8 sm:p-10">
              <span className="text-signal">
                <Icon name={s.icon} size={26} />
              </span>
              <h3 className="t-h3 mt-6">{s.title}</h3>
              <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-mist">{s.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Energía solar */}
        <Reveal className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="grid aspect-[16/10] grid-cols-5 gap-3">
            <img
              src={solarInstalacion}
              alt="Técnico instalando paneles solares sobre una cubierta"
              width="1000"
              height="667"
              loading="lazy"
              decoding="async"
              className="col-span-3 h-full w-full rounded-[var(--radius-md)] object-cover"
            />
            <img
              src={solarCubierta}
              alt="Vista aérea de una cubierta industrial con paneles solares"
              width="1400"
              height="627"
              loading="lazy"
              decoding="async"
              className="col-span-2 h-full w-full rounded-[var(--radius-md)] object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-signal">
              <Icon name="sun" size={18} />
              Energía solar
            </span>
            <h3 className="mt-4 font-display text-[1.75rem] font-extrabold leading-tight tracking-[-0.025em] sm:text-[2.125rem]">
              Sistemas solares para hogares y empresas
            </h3>
            <dl className="mt-8 space-y-6">
              {SOLAR_POINTS.map((p) => (
                <div key={p.title}>
                  <dt className="font-semibold text-ice">{p.title}</dt>
                  <dd className="m-0 mt-1 text-[0.9375rem] leading-relaxed text-mist">{p.text}</dd>
                </div>
              ))}
            </dl>
            <a
              href={whatsappLink("Hola, quiero información sobre sistemas solares")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-10"
            >
              Cotizar un sistema solar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
