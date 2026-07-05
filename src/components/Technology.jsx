import { motion } from "framer-motion"

const tech = [
  "Inteligencia Artificial",
  "Visión por Computador",
  "Python",
  "OpenCV",
  "Cloud Computing",
  "Edge AI",
  "RTSP Streaming",
  "Automatización",
  "Sistemas IP",
  "Drones Autónomos",
  "Monitoreo Inteligente",
  "Análisis en Tiempo Real",
]

export default function Technology() {
  return (
    <section className="bg-paper text-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-accent-dark text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Tecnología
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            La infraestructura detrás de AEGIS
          </h2>
          <p className="text-ink/60 text-lg mt-6 leading-relaxed">
            Procesamiento de video en la nube y en el borde, con verificación por
            inteligencia artificial en tiempo real.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="border border-line-light rounded-full px-5 py-2.5 text-sm text-ink/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
