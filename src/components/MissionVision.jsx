import { motion } from "framer-motion"

const items = [
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

export default function MissionVision() {
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
            Quiénes somos
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Nuestra visión de la seguridad
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.title} className="border-t border-line-light pt-6">
              <h3 className="font-display font-bold text-xl text-accent-dark mb-4">
                {item.title}
              </h3>
              <p className="text-ink/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
