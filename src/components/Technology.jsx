import { motion } from "framer-motion"

const tech = [

  "Inteligencia Artificial",
  "Reconocimiento Facial",
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

          className="text-center mb-20"

        >

          <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 mb-6">

            Tecnología Avanzada

          </div>

          <h2 className="text-5xl md:text-6xl font-black">

            Tecnología que impulsa

            <span className="text-cyan-400">
              {" "}AEGIS
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Infraestructura moderna impulsada por inteligencia artificial,
            automatización y procesamiento inteligente en tiempo real.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-6">

          {tech.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}

              viewport={{ once: true }}

              whileHover={{
                scale: 1.05,
              }}

              className="group bg-white/5 border border-cyan-400/10 backdrop-blur-2xl rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:bg-cyan-400/5"

            >

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-bold text-white">

                  {item}

                </h3>

                <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:shadow-[0_0_20px_rgba(34,211,238,1)]"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}