import { motion } from "framer-motion"

const stats = [
  {
    number: "24/7",
    title: "Monitoreo Inteligente",
    description: "Sistemas activos en tiempo real con alertas automáticas.",
  },
  {
    number: "IA",
    title: "Verificación de Eventos",
    description: "Cada alerta es confirmada por inteligencia artificial antes de llegar a ti.",
  },
  {
    number: "IP",
    title: "Infraestructura Profesional",
    description: "Instalaciones modernas con sistemas IP y PoE empresariales.",
  },
  {
    number: "360°",
    title: "Soluciones Integradas",
    description: "Seguridad, automatización y monitoreo en una sola plataforma.",
  },
]

export default function WhyAegis() {
  return (
    <section className="bg-paper text-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-accent-dark text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Por qué AEGIS
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Seguridad inteligente, sin falsas alarmas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px bg-line-light border border-line-light">
          {stats.map((item) => (
            <div key={item.title} className="bg-paper p-8">
              <p className="font-display font-extrabold text-4xl text-accent-dark mb-4">
                {item.number}
              </p>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-ink/60 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
