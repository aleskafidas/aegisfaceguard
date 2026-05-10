import { motion } from "framer-motion"

import gallery1 from "../assets/gallery/gallery1.jpg"
import gallery2 from "../assets/gallery/gallery2.jpg"
import gallery3 from "../assets/gallery/gallery3.jpeg"
import gallery4 from "../assets/gallery/gallery4.jpeg"

const projects = [

  {
    image: gallery1,
    title: "Reconocimiento Facial IA",
    description:
      "Sistema inteligente de detección facial y monitoreo avanzado.",
  },

  {
    image: gallery2,
    title: "Videovigilancia Profesional",
    description:
      "Instalaciones IP y PoE para edificios y negocios.",
  },

  {
    image: gallery3,
    title: "Automatización y Drones",
    description:
      "Soluciones autónomas y monitoreo aéreo avanzado.",
  },

  {
    image: gallery4,
    title: "Infraestructura Tecnológica",
    description:
      "Centros de monitoreo y sistemas inteligentes integrados.",
  },

]

export default function Showcase() {

  return (

    <section className="bg-[#020617] text-white py-32 px-8 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

          className="text-center mb-20"

        >

          <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 mb-6">

            Proyectos y Tecnología

          </div>

          <h2 className="text-5xl md:text-6xl font-black">

            Innovación en

            <span className="text-cyan-400">
              {" "}Seguridad
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto">

            Infraestructura moderna diseñada para sistemas de seguridad,
            automatización y monitoreo inteligente.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
              }}

              className="group relative overflow-hidden rounded-[35px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl"

            >

              {/* IMAGE */}
              <div className="overflow-hidden h-[350px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8">

                <h3 className="text-3xl font-black mb-4">

                  {project.title}

                </h3>

                <p className="text-slate-300 text-lg max-w-lg">

                  {project.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}