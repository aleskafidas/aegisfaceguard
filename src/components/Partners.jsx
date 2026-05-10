import { motion } from "framer-motion"

import antojate from "../assets/partners/antojate.png"
import impulsate from "../assets/partners/impulsate.jpg"
import ruta from "../assets/partners/ruta.png"

const partners = [

  {
    logo: antojate,
    name: "Antójate de Antioquia",
    description:
      "Programa de fortalecimiento empresarial e innovación.",
  },

  {
    logo: impulsate,
    name: "Impúlsate Sabaneta",
    description:
      "Acompañamiento y apoyo al emprendimiento tecnológico.",
  },

  {
    logo: ruta,
    name: "Ruta del Emprendimiento Medellín",
    description:
      "Capital semilla edicion 21.",
  },

]

export default function Partners() {

  return (

    <section className="bg-[#020617] text-white py-32 px-8 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

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

            Innovación y Emprendimiento

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Respaldado por programas de

            <span className="text-cyan-400">
              {" "}innovación
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            AEGIS FACEGUARD ha recibido apoyo e impulso de programas
            enfocados en emprendimiento, innovación y desarrollo tecnológico.

          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {partners.map((partner, index) => (

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
                scale: 1.03,
              }}

              className="bg-white/5 border border-cyan-400/10 backdrop-blur-2xl rounded-[35px] p-10 hover:border-cyan-400/40 transition-all duration-300 text-center overflow-hidden relative"

            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 hover:opacity-100 transition duration-500"></div>

              {/* LOGO */}
              <div className="h-[120px] flex items-center justify-center mb-8 relative z-10">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-[90px] object-contain grayscale hover:grayscale-0 transition duration-500"
                />

              </div>

              {/* TEXT */}
              <div className="relative z-10">

                <h3 className="text-2xl font-bold mb-4">

                  {partner.name}

                </h3>

                <p className="text-slate-400 leading-relaxed">

                  {partner.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}