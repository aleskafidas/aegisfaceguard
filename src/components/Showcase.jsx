import { motion } from "framer-motion"

import gallery1 from "../assets/gallery/gallery1.jpg"
import gallery2 from "../assets/gallery/gallery2.jpg"
import gallery3 from "../assets/gallery/gallery3.jpeg"
import gallery4 from "../assets/gallery/gallery4.jpeg"

const projects = [
  {
    image: gallery1,
    title: "Detección Inteligente con IA",
    description: "Sistema de detección de amenazas y monitoreo avanzado.",
  },
  {
    image: gallery2,
    title: "Videovigilancia Profesional",
    description: "Instalaciones IP y PoE para edificios y negocios.",
  },
  {
    image: gallery3,
    title: "Automatización y Drones",
    description: "Soluciones autónomas y monitoreo aéreo avanzado.",
  },
  {
    image: gallery4,
    title: "Infraestructura Tecnológica",
    description: "Centros de monitoreo y sistemas inteligentes integrados.",
  },
]

export default function Showcase() {
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
            Proyectos
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Innovación aplicada a la seguridad
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="overflow-hidden rounded-lg border border-line">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-[320px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <h3 className="font-display font-bold text-xl mt-5">{project.title}</h3>
              <p className="text-paper/60 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
