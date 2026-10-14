import Reveal from "./ui/Reveal"
import Icon from "./ui/Icon"

const SECONDARY = [
  {
    icon: "helmet",
    title: "Personas con casco",
    text: "Identifica a quien entra o permanece con casco puesto, una situación que muchos comercios prefieren atender a tiempo.",
  },
  {
    icon: "person",
    title: "Detección de personas",
    text: "Ubica personas en la escena para dar contexto a cada evento. No usa biometría ni reconocimiento facial.",
  },
  {
    icon: "verify",
    title: "Verificación del evento",
    text: "Un segundo análisis por IA revisa la imagen antes de avisar, para reducir alertas por objetos que no representan riesgo.",
  },
  {
    icon: "bell",
    title: "Alertas con imagen",
    text: "Cada aviso llega con la captura del momento al panel de operación y a la app, para revisar antes de actuar.",
  },
  {
    icon: "network",
    title: "Cámaras del servicio",
    text: "Instalamos cámaras IP o evaluamos las que ya tienes para confirmar si son compatibles con el análisis.",
  },
]

const BENEFITS = [
  "Ves a tiempo eventos que de otra forma pasarían desapercibidos entre horas de grabación.",
  "Recibes la imagen del evento para revisar la situación antes de decidir.",
  "Refuerzas los protocolos de seguridad que ya tiene tu negocio con una herramienta tecnológica.",
  "Cámaras y análisis inteligente en un mismo servicio, con una sola persona de contacto.",
]

const LIMITS = [
  "No garantiza que no ocurran delitos ni reemplaza al personal de seguridad.",
  "Una detección es un posible evento: puede haber falsos positivos y eventos no detectados.",
  "La calidad depende de la ubicación, la iluminación y la resolución de las cámaras.",
  "Requiere conexión a internet estable en el establecimiento.",
]

export default function Capabilities() {
  return (
    <section id="capacidades" className="section-y relative bg-deep/40 border-y border-line-soft">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="t-h2">Lo que AEGIS observa por ti.</h2>
          <p className="t-lead mt-6 text-mist">
            Capacidades concretas, pensadas para el día a día de un local comercial.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line lg:grid-cols-3">
          {/* Capacidad principal */}
          <Reveal className="relative bg-night p-8 sm:p-10 lg:row-span-2 lg:p-12">
            <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-amber/10 text-amber">
              <Icon name="alert" size={26} />
            </span>
            <h3 className="mt-8 font-display text-[1.75rem] font-extrabold leading-tight tracking-[-0.025em] sm:text-[2rem]">
              Detección de armas
            </h3>
            <p className="mt-4 max-w-md text-mist leading-relaxed">
              Algoritmos de visión artificial buscan objetos compatibles con un arma en las imágenes de tus cámaras.
              Cuando aparecen, el evento pasa a verificación y, si se mantiene, recibes el aviso con la imagen.
            </p>
            <div className="mt-10 rounded-[var(--radius-md)] border border-line bg-deep p-5">
              <p className="text-[0.8125rem] font-semibold text-ice">Cómo se comunica una detección</p>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-mist">
                El aviso describe un «objeto compatible con un arma», no un hecho confirmado. La revisión final siempre
                la hace una persona.
              </p>
            </div>
          </Reveal>

          {SECONDARY.map((item, i) => {
            const wide = i === SECONDARY.length - 1
            return (
              <Reveal
                key={item.title}
                delay={i * 60}
                className={`bg-night p-8 sm:p-9 ${wide ? "lg:col-span-3 lg:flex lg:items-center lg:gap-8" : ""}`}
              >
                <span className="text-signal">
                  <Icon name={item.icon} size={26} />
                </span>
                <div className={wide ? "lg:flex lg:flex-1 lg:items-baseline lg:gap-8" : ""}>
                  <h3 className={`t-h3 mt-6 ${wide ? "lg:mt-0 lg:w-56 lg:shrink-0" : ""}`}>{item.title}</h3>
                  <p className={`mt-3 text-[0.9375rem] leading-relaxed text-mist ${wide ? "lg:mt-0 lg:max-w-2xl" : ""}`}>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Beneficios y límites, lado a lado */}
        <div className="mt-24 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">Qué gana tu negocio</h3>
            <ul className="mt-8 space-y-5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-4 text-mist leading-relaxed">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/12 text-signal">
                    <Icon name="check" size={15} strokeWidth={2} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">Lo que debes saber</h3>
            <ul className="mt-8 space-y-5">
              {LIMITS.map((l) => (
                <li key={l} className="flex gap-4 text-mist leading-relaxed">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-steel">
                    <Icon name="minus" size={15} strokeWidth={2} />
                  </span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
