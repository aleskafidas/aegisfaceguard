import Reveal from "./ui/Reveal"
import antojate from "../assets/partners/antojate-recorte.png"
import impulsate from "../assets/partners/impulsate.jpg"
import ruta from "../assets/partners/ruta.png"

const partners = [
  {
    logo: antojate,
    size: [150, 75],
    name: "Antójate de Antioquia",
    description: "Programa de fortalecimiento empresarial e innovación.",
  },
  {
    logo: impulsate,
    size: [197, 256],
    name: "Impúlsate Sabaneta",
    description: "Acompañamiento y apoyo al emprendimiento tecnológico.",
  },
  {
    logo: ruta,
    size: [225, 225],
    name: "Ruta del Emprendimiento Medellín",
    description: "Capital semilla, edición 21.",
  },
]

const values = [
  {
    title: "Misión",
    text: "Desarrollar soluciones tecnológicas avanzadas en seguridad inteligente, integrando inteligencia artificial, automatización y monitoreo en tiempo real para proteger personas, negocios y espacios mediante sistemas modernos, eficientes y accesibles.",
  },
  {
    title: "Visión",
    text: "Convertirnos en una empresa líder en innovación tecnológica y seguridad inteligente en Latinoamérica, impulsando el desarrollo de soluciones autónomas, inteligencia artificial y sistemas integrados de nueva generación.",
  },
  {
    title: "Innovación",
    text: "Creemos en la evolución constante de la tecnología como herramienta para construir sistemas de seguridad más inteligentes, automatizados y eficientes.",
  },
]

export default function About() {
  return (
    <section id="nosotros" className="section-y border-t border-line-soft">
      <div className="container-x">
        {/* Historia */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <h2 className="t-h2">Por qué nació AEGIS FaceGuard.</h2>
            <blockquote className="mt-10 border-l-2 border-signal pl-6">
              <p className="font-display text-[1.375rem] font-bold leading-snug tracking-[-0.015em] text-ice sm:text-2xl">
                «La tecnología también puede utilizarse para proteger, prevenir y generar tranquilidad.»
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={80} className="max-w-[38rem] space-y-5 text-[1.0625rem] leading-relaxed text-mist">
            <p>
              AEGIS FaceGuard nació a partir de una realidad que viven miles de comerciantes y personas diariamente:{" "}
              <strong className="font-semibold text-ice">la inseguridad.</strong>
            </p>
            <p>
              Después de presenciar situaciones relacionadas con robos, afectaciones a establecimientos y la
              preocupación constante de quienes trabajan para sacar adelante sus negocios, surgió la idea de desarrollar
              una solución tecnológica capaz de prevenir y responder de forma más inteligente ante este tipo de
              situaciones.
            </p>
            <p>
              El proyecto comenzó como una iniciativa enfocada en integrar inteligencia artificial, monitoreo
              inteligente y automatización en sistemas de seguridad accesibles y modernos.
            </p>
            <p>
              Con el tiempo, la visión evolucionó hacia la creación de una plataforma tecnológica que no solo protege
              negocios y espacios, sino que también busca generar un impacto social positivo mediante innovación y
              tecnología.
            </p>
          </Reveal>
        </div>

        {/* Misión, visión, innovación */}
        <Reveal className="mt-20 grid gap-10 border-t border-line pt-12 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="t-h3 text-signal">{v.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-mist">{v.text}</p>
            </div>
          ))}
        </Reveal>

        {/* Respaldo */}
        <Reveal className="mt-24">
          <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">Impulsado por programas de innovación</h3>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {partners.map((p) => (
              <li key={p.name} className="flex items-center gap-5 rounded-[var(--radius-md)] border border-line p-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-white p-2">
                  <img
                    src={p.logo}
                    alt={`Logotipo de ${p.name}`}
                    width={p.size[0]}
                    height={p.size[1]}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold leading-snug text-ice">{p.name}</p>
                  <p className="mt-1 text-[0.875rem] leading-snug text-mist">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
