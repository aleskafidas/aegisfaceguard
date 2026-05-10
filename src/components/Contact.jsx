import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Contact() {

  useEffect(() => {

    const script = document.createElement("script")

    script.src = "https://js.hsforms.net/forms/embed/51451800.js"
    script.defer = true

    document.body.appendChild(script)

  }, [])

  return (

    <section
      id="contact"
      className="bg-[#020617] text-white py-32 px-8 relative overflow-hidden"
    >

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

            Contacto

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Hablemos sobre tu

            <span className="text-cyan-400">
              {" "}proyecto
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Soluciones inteligentes en seguridad, automatización,
            videovigilancia y tecnología.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* INFO */}
          <motion.div

            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

            className="space-y-8"

          >

            <div className="bg-white/5 border border-cyan-400/10 rounded-[35px] p-10 backdrop-blur-2xl">

              <h3 className="text-3xl font-black mb-8">

                Información de contacto

              </h3>

              <div className="space-y-6">

                <div>

                  <p className="text-cyan-400 font-semibold mb-2">

                    Correo electrónico

                  </p>

                  <p className="text-slate-300 text-lg">

                    admin@aegisfaceguard.com

                  </p>

                </div>

                <div>

                  <p className="text-cyan-400 font-semibold mb-2">

                    WhatsApp

                  </p>

                  <p className="text-slate-300 text-lg">

                    +57 300 396 6155

                  </p>

                </div>

                <div>

                  <p className="text-cyan-400 font-semibold mb-2">

                    Servicios

                  </p>

                  <p className="text-slate-300 text-lg leading-relaxed">

                    Seguridad Inteligente • IA • Videovigilancia •
                    Sistemas Solares • Automatización • Drones

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* HUBSPOT FORM */}
          <motion.div

            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

            className="bg-white/5 border border-cyan-400/10 rounded-[35px] p-10 backdrop-blur-2xl"

          >

            <div
              className="hs-form-frame"
              data-region="na1"
              data-form-id="c7562fc4-4540-44ea-819c-749031e8998f"
              data-portal-id="51451800"
            ></div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}