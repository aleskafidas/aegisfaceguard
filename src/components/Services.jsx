import { motion } from "framer-motion"

const services = [

  {
    title: "Reconocimiento Facial IA",
    description:
      "Detección y reconocimiento facial inteligente en tiempo real para negocios y edificios.",
    icon: "🧬",
  },

  {
    title: "Detección de Armas",
    description:
      "Sistema avanzado de detección automática de armas mediante inteligencia artificial.",
    icon: "🛡️",
  },

  {
    title: "Instalación de Cámaras",
    description:
      "Diseño e instalación profesional de sistemas de videovigilancia IP y PoE.",
    icon: "📡",
  },

  {
    title: "Monitoreo Inteligente",
    description:
      "Alertas automáticas y monitoreo avanzado conectado a sistemas de seguridad.",
    icon: "🧠",
  },

  {
    title: "Drones y Automatización",
    description:
      "Soluciones con drones FPV, automatización y sistemas autónomos.",
    icon: "⚡",
  },

  {
    title: "Sistemas Solares",
    description:
      "Diseño e instalación de soluciones solares on-grid y off-grid.",
    icon: "☀️",
  },

]

export default function Services() {

  return (

    <section
      id="services"
      className="py-32 px-10 bg-black text-white relative overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black">

            Nuestros

            <span className="text-cyan-400">
              {" "}Servicios
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto">

            Soluciones tecnológicas avanzadas impulsadas por
            inteligencia artificial, automatización y seguridad inteligente.

          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

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

              className="group bg-white/5 border border-cyan-400/10 backdrop-blur-2xl rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.08)] hover:shadow-[0_0_60px_rgba(34,211,238,0.25)] hover:bg-cyan-400/5"

            >

              <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-110">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {service.title}

              </h3>

              <p className="text-slate-400 leading-relaxed">

                {service.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}