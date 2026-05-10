import { motion } from "framer-motion"

export default function Story() {

  return (

    <section className="bg-[#020617] text-white py-32 px-8 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}

          className="text-center mb-20"

        >

          <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 mb-6">

            Nuestra Historia

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            ¿Por qué nació

            <span className="text-cyan-400">
              {" "}AEGIS FACEGUARD?
            </span>

          </h2>

        </motion.div>

        {/* CARD */}
        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}

          className="bg-white/5 border border-cyan-400/10 backdrop-blur-2xl rounded-[40px] p-12 md:p-16 relative overflow-hidden"

        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-cyan-400/5"></div>

          <div className="relative z-10 space-y-8">

            <p className="text-slate-300 text-xl leading-relaxed">

              AEGIS FACEGUARD nació a partir de una realidad que viven miles
              de comerciantes y personas diariamente:
              
              <span className="text-cyan-400 font-semibold">
                {" "}la inseguridad.
              </span>

            </p>

            <p className="text-slate-400 text-lg leading-relaxed">

              Después de presenciar situaciones relacionadas con robos,
              afectaciones a establecimientos y la preocupación constante
              de quienes trabajan para sacar adelante sus negocios,
              surgió la idea de desarrollar una solución tecnológica capaz
              de prevenir y responder de forma más inteligente ante este tipo
              de situaciones.

            </p>

            <p className="text-slate-400 text-lg leading-relaxed">

              El proyecto comenzó como una iniciativa enfocada en integrar
              inteligencia artificial, monitoreo inteligente y automatización
              en sistemas de seguridad accesibles y modernos.

            </p>

            <p className="text-slate-400 text-lg leading-relaxed">

              Con el tiempo, la visión evolucionó hacia la creación de una
              plataforma tecnológica que no solo protege negocios y espacios,
              sino que también busca generar un impacto social positivo
              mediante innovación y tecnología.

            </p>

            <div className="border-l-4 border-cyan-400 pl-6 mt-10">

              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">

                “La tecnología también puede utilizarse para proteger,
                prevenir y generar tranquilidad.”

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )

}