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
    <section id="nosotros" className="cv-auto py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="t-section">Por qué nació AEGIS FaceGuard.</h2>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-[40rem] space-y-5 text-lg leading-relaxed text-mist">
          <p>
            AEGIS FaceGuard nació a partir de una realidad que viven miles de comerciantes y personas diariamente:{" "}
            <strong className="font-semibold text-ice">la inseguridad.</strong>
          </p>
          <p>
            Después de presenciar situaciones relacionadas con robos, afectaciones a establecimientos y la preocupación
            constante de quienes trabajan para sacar adelante sus negocios, surgió la idea de desarrollar una solución
            tecnológica capaz de prevenir y responder de forma más inteligente ante este tipo de situaciones.
          </p>
          <p>
            El proyecto comenzó como una iniciativa enfocada en integrar inteligencia artificial, monitoreo inteligente
            y automatización en sistemas de seguridad accesibles y modernos.
          </p>
          <p>
            Con el tiempo, la visión evolucionó hacia la creación de una plataforma tecnológica que no solo protege
            negocios y espacios, sino que también busca generar un impacto social positivo mediante innovación y
            tecnología.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-20 max-w-5xl text-center">
          <blockquote>
            <p className="font-display text-[clamp(1.75rem,1rem+2.6vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ice">«La tecnología también puede utilizarse para proteger, prevenir y generar tranquilidad.»</p>
          </blockquote>
        </Reveal>

        <Reveal className="mt-24 grid gap-12 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ice">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{v.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-24 text-center">
          <h3 className="text-[0.9375rem] font-semibold text-mist">Impulsado por programas de innovación</h3>
          <ul className="mt-8 flex flex-wrap items-stretch justify-center gap-4">
            {partners.map((p) => (
              <li key={p.name} className="flex w-[15rem] flex-col items-center gap-4">
                <div className="flex h-24 w-full items-center justify-center rounded-[1.25rem] bg-white p-4">
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
                  <p className="font-semibold text-ice">{p.name}</p>
                  <p className="mt-1 text-[0.875rem] text-mist">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
