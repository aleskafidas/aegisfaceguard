import { motion } from "framer-motion"

import solar1 from "../assets/solar/solar1.png"
import solar2 from "../assets/solar/solar4.jpg"
import solar3 from "../assets/solar/solar3.jpg"

const cards = [
  {
    image: solar1,
    title: "Dimensionamiento",
    text: "Análisis y diseño de sistemas solares adaptados al consumo energético y necesidades de cada proyecto.",
  },
  {
    image: solar2,
    title: "Instalación Profesional",
    text: "Implementación de sistemas on-grid y off-grid con equipos modernos y configuración especializada.",
  },
  {
    image: solar3,
    title: "Monitoreo Inteligente",
    text: "Supervisión y optimización energética mediante plataformas digitales y monitoreo en tiempo real.",
  },
]

export default function SolarSection() {
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
            Energía solar
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Sistemas solares para hogares y empresas
          </h2>
          <p className="text-ink/60 text-lg mt-6 leading-relaxed">
            Diseño, dimensionamiento e instalación de soluciones solares modernas
            para hogares, empresas, edificios y sistemas tecnológicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title}>
              <div className="overflow-hidden rounded-lg border border-line-light">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-xl mt-5">{card.title}</h3>
              <p className="text-ink/60 mt-2 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
