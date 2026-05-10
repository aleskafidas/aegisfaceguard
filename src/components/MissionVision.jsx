import { motion } from "framer-motion"

const items = [

  {
    title: "Misión",
    text:
      "Desarrollar soluciones tecnológicas avanzadas en seguridad inteligente, integrando inteligencia artificial, automatización y monitoreo en tiempo real para proteger personas, negocios y espacios mediante sistemas modernos, eficientes y accesibles.",
  },

  {
    title: "Visión",
    text:
      "Convertirnos en una empresa líder en innovación tecnológica y seguridad inteligente en Latinoamérica, impulsando el desarrollo de soluciones autónomas, inteligencia artificial y sistemas integrados de nueva generación.",
  },

  {
    title: "Innovación",
    text:
      "Creemos en la evolución constante de la tecnología como herramienta para construir sistemas de seguridad más inteligentes, automatizados y eficientes.",
  },

]

export default function MissionVision() {

  return (

    <section className="bg-black text-white py-32 px-8 relative overflow-hidden">

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

            Filosofía Empresarial

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Nuestra visión de la

            <span className="text-cyan-400">
              {" "}seguridad
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Tecnología, innovación e inteligencia artificial aplicadas
            al desarrollo de soluciones modernas para la protección y automatización.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (

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

              className="bg-white/5 border border-cyan-400/10 backdrop-blur-2xl rounded-[35px] p-10 hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden"

            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 hover:opacity-100 transition duration-500"></div>

              {/* ICON */}
              <div className="w-20 h-20 rounded-full border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center mb-8 relative z-10">

                <div className="w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]"></div>

              </div>

              <div className="relative z-10">

                <h3 className="text-3xl font-black mb-6 text-cyan-400">

                  {item.title}

                </h3>

                <p className="text-slate-300 leading-relaxed text-lg">

                  {item.text}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}