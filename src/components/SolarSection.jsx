import { motion } from "framer-motion"

import solar1 from "../assets/solar/solar1.png"
import solar2 from "../assets/solar/solar4.jpg"
import solar3 from "../assets/solar/solar3.jpg"

export default function SolarSection() {

  return (

    <section className="bg-black text-white py-32 px-8 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}

          className="text-center mb-24"

        >

          <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 mb-6">

            Energía Inteligente

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Sistemas

            <span className="text-cyan-400">
              {" "}Solares
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Diseño, dimensionamiento e instalación de soluciones solares
            modernas para hogares, empresas, edificios y sistemas tecnológicos.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

            viewport={{ once: true }}

            whileHover={{
              y: -10,
            }}

            className="bg-white/5 border border-cyan-400/10 rounded-[35px] overflow-hidden backdrop-blur-2xl"

          >

            <img
              src={solar1}
              alt="Dimensionamiento Solar"
              className="h-[260px] w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-black mb-4">

                Dimensionamiento

              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">

                Análisis y diseño de sistemas solares adaptados al consumo
                energético y necesidades de cada proyecto.

              </p>

            </div>

          </motion.div>

          {/* CARD 2 */}
          <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8,
              delay: 0.1,
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -10,
            }}

            className="bg-white/5 border border-cyan-400/10 rounded-[35px] overflow-hidden backdrop-blur-2xl"

          >

            <img
              src={solar2}
              alt="Instalación Solar"
              className="h-[260px] w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-black mb-4">

                Instalación Profesional

              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">

                Implementación de sistemas on-grid y off-grid con equipos
                modernos y configuración especializada.

              </p>

            </div>

          </motion.div>

          {/* CARD 3 */}
          <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8,
              delay: 0.2,
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -10,
            }}

            className="bg-white/5 border border-cyan-400/10 rounded-[35px] overflow-hidden backdrop-blur-2xl"

          >

            <img
              src={solar3}
              alt="Monitoreo Solar"
              className="h-[260px] w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-black mb-4">

                Monitoreo Inteligente

              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">

                Supervisión y optimización energética mediante plataformas
                digitales y monitoreo en tiempo real.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}