import Reveal from "./ui/Reveal"
import Icon from "./ui/Icon"

const FAQS = [
  {
    q: "¿Cómo funciona el servicio?",
    a: "Las cámaras del local envían el video a un dispositivo instalado en sitio. Modelos de visión artificial analizan las imágenes y, cuando encuentran un posible evento, un segundo análisis por IA lo revisa. Si el evento se mantiene, el responsable recibe una alerta con la imagen y decide cómo actuar.",
  },
  {
    q: "¿Qué detecta el sistema?",
    a: "Objetos compatibles con un arma, personas con casco y personas en la escena. No hace reconocimiento facial ni usa biometría: no identifica quién es cada persona.",
  },
  {
    q: "¿Cómo recibo las alertas?",
    a: "En el panel de operación web y en la app móvil, junto con la imagen del momento del evento.",
  },
  {
    q: "¿Qué se instala en mi local?",
    a: "Cámaras IP (o las que ya tienes, si son compatibles) y un dispositivo que conecta las cámaras con el sistema de análisis. Se necesita una conexión a internet estable. El detalle exacto se define en la visita de evaluación.",
  },
  {
    q: "¿Sirven las cámaras que ya tengo?",
    a: "Depende del modelo, la resolución y la ubicación. Lo revisamos en la evaluación inicial y te decimos si se pueden aprovechar o si conviene cambiarlas.",
  },
  {
    q: "¿Qué limitaciones tiene la tecnología?",
    a: "Una detección indica un posible evento, no una certeza. Pueden ocurrir falsos positivos y eventos no detectados, y la calidad depende de la iluminación, el ángulo y la resolución de las cámaras. AEGIS apoya tus protocolos de seguridad; no los reemplaza ni garantiza que no ocurran delitos.",
  },
  {
    q: "¿Qué pasa con las imágenes y los datos personales?",
    a: "AEGIS no utiliza biometría ni reconocimiento facial. Antes de contratar puedes pedirnos la información sobre cómo se tratan las imágenes y los datos personales de tu establecimiento.",
  },
  {
    q: "¿Cómo solicito una demostración?",
    a: "Completa el formulario de contacto de esta página o escríbenos por WhatsApp. Te contactamos para coordinar la demostración.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="cv-auto py-24 lg:py-36">
      <div className="container-x mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="t-section">Preguntas frecuentes.</h2>
        </Reveal>

        <Reveal className="mt-14 border-t border-line">
          {FAQS.map((item) => (
            <details key={item.q} className="faq-item group border-b border-line">
              <summary className="flex items-center justify-between gap-6 rounded py-6 text-left font-display text-lg font-bold tracking-[-0.015em] text-ice transition-colors hover:text-signal sm:text-xl">
                {item.q}
                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-deep text-signal transition-transform duration-200">
                  <Icon name="plus" size={16} strokeWidth={2} />
                </span>
              </summary>
              <p className="pb-7 pr-12 text-[1.0625rem] leading-relaxed text-mist">{item.a}</p>
            </details>
          ))}
        </Reveal>

        <p className="mt-10 text-center text-mist">
          ¿Tienes otra duda?{" "}
          <a href="#contact" className="text-ice underline decoration-signal underline-offset-4 hover:text-signal">
            Escríbenos
          </a>
          .
        </p>
      </div>
    </section>
  )
}
