import { motion } from "framer-motion"

import antojate from "../assets/partners/antojate.png"
import impulsate from "../assets/partners/impulsate.jpg"
import ruta from "../assets/partners/ruta.png"

const partners = [
  {
    logo: antojate,
    name: "Antójate de Antioquia",
    description: "Programa de fortalecimiento empresarial e innovación.",
  },
  {
    logo: impulsate,
    name: "Impúlsate Sabaneta",
    description: "Acompañamiento y apoyo al emprendimiento tecnológico.",
  },
  {
    logo: ruta,
    name: "Ruta del Emprendimiento Medellín",
    description: "Capital semilla, edición 21.",
  },
]

export default function Partners() {
  return (
    <section className="bg-ink text-paper py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Respaldo
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Impulsado por programas de innovación
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="border border-line rounded-lg p-8">
              <div className="h-24 flex items-center mb-6 bg-paper rounded-lg px-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-16 object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{partner.name}</h3>
              <p className="text-paper/60 text-sm leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
