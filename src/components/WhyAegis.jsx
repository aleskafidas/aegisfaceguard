import { motion } from "framer-motion"

const stats = [

  {
    number: "24/7",
    title: "Monitoreo Inteligente",
    description:
      "Sistemas activos en tiempo real con alertas automáticas.",
  },

  {
    number: "IA",
    title: "Tecnología Avanzada",
    description:
      "Procesamiento inteligente impulsado por inteligencia artificial.",
  },

  {
    number: "IP",
    title: "Infraestructura Profesional",
    description:
      "Instalaciones modernas con sistemas IP y PoE empresariales.",
  },

  {
    number: "360°",
    title: "Soluciones Integradas",
    description:
      "Seguridad, automatización y monitoreo en una sola plataforma.",
  },

]

export default function WhyAegis() {

  return (

    <section className="bg-black text-white py-32 px-8 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

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

            Seguridad Inteligente

          </div>

          <h2 className="text-5xl md:text-6xl font-black">

            ¿Por qué elegir

            <span className="text-cyan-400">
              {" "}AEGIS?
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Diseñamos soluciones modernas enfocadas en inteligencia artificial,
            automatización y monitoreo avanzado para empresas y edificios.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

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

              className="bg-white/5 border border-cyan-400/10 backdrop-blur-2xl rounded-3xl p-10 hover:border-cyan-400/40 transition-all duration-300 text-center"

            >

              <div className="text-6xl font-black text-cyan-400 mb-6">

                {item.number}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {item.title}

              </h3>

              <p className="text-slate-400 leading-relaxed">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}