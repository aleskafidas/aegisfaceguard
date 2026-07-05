import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Detecta",
    text: "El sistema analiza el video de tus cámaras en tiempo real e identifica personas y situaciones de riesgo.",
  },
  {
    number: "2",
    title: "Verifica",
    text: "Cada evento es confirmado por inteligencia artificial antes de generar una alerta, reduciendo falsas alarmas.",
  },
  {
    number: "3",
    title: "Alerta",
    text: "Recibes la notificación verificada en tu celular con la imagen del evento, para actuar de inmediato.",
  },
]

const features = [
  "Detección de personas y amenazas en tiempo real",
  "Verificación de cada evento con inteligencia artificial",
  "Alertas inmediatas a tu celular",
  "Integración con cámaras IP y NVR existentes",
  "Sin biometría ni reconocimiento facial — cumplimiento Ley 1581",
]

export default function Solutions() {
  return (
    <section id="solutions" className="bg-ink text-paper py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Cómo funciona
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Detección inteligente de amenazas, en tres pasos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-line pt-6">
              <p className="font-display font-extrabold text-accent text-lg mb-3">
                {step.number} — {step.title}
              </p>
              <p className="text-paper/70 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display font-bold text-2xl mb-8">
              Qué incluye la plataforma
            </h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-paper/80">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent mt-0.5 shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-10 flex-wrap">
              <a
                href="https://wa.me/573003966155?text=Hola%2C%20quiero%20una%20demo%20de%20AEGIS%20FaceGuard"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-dark transition-colors px-7 py-3.5 rounded-lg text-ink font-semibold"
              >
                Solicitar demo
              </a>
              <a
                href="#contact"
                className="border border-line hover:border-paper/40 transition-colors px-7 py-3.5 rounded-lg text-paper/90"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="border border-line rounded-lg p-8 bg-ink-2">
            <p className="text-paper/50 text-xs uppercase tracking-[0.2em] mb-6">
              Ejemplo de alerta
            </p>
            <div className="border border-line rounded-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-display font-bold">Persona detectada</p>
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  Verificada por IA
                </span>
              </div>
              <p className="text-paper/60 text-sm leading-relaxed">
                Cámara: Entrada principal · Se identificó una persona en zona
                restringida. Evento confirmado y notificado.
              </p>
            </div>
            <p className="text-paper/40 text-sm mt-6 leading-relaxed">
              Cada alerta llega con la imagen del evento y la confirmación de la
              IA, directamente a la app móvil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
