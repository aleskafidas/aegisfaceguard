import { motion } from "framer-motion"

export default function Solutions() {

  return (

    <section className="bg-[#020617] text-white py-32 px-8 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-40">

        {/* ========================= */}
        {/* RECONOCIMIENTO FACIAL */}
        {/* ========================= */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div

            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}

          >

            <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 mb-6">

              Inteligencia Artificial

            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">

              Reconocimiento

              <span className="text-cyan-400">
                {" "}Facial IA
              </span>

            </h2>

            <p className="text-slate-300 text-xl leading-relaxed mt-8">

              Sistema avanzado de reconocimiento facial en tiempo real
              diseñado para negocios, edificios, urbanizaciones y
              sistemas de seguridad inteligentes.

            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>

                <p className="text-slate-300">
                  Detección facial en tiempo real
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>

                <p className="text-slate-300">
                  Alertas automáticas vía WhatsApp
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>

                <p className="text-slate-300">
                  Integración con cámaras IP y NVR
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>

                <p className="text-slate-300">
                  Base de datos inteligente
                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-12 flex-wrap">

              <a
                href="https://wa.me/573000000000"
                target="_blank"
                className="bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 px-8 py-4 rounded-2xl text-black font-bold text-lg shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              >

                Solicitar Demo

              </a>

              <button className="border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 px-8 py-4 rounded-2xl">

                Ver Tecnología

              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div

            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}

            className="relative"

          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full"></div>

            {/* CARD */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-cyan-400/20 rounded-[40px] overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.15)]">

              {/* VIDEO / IMAGE */}
              <div className="h-[500px] bg-gradient-to-br from-cyan-500/20 via-slate-900 to-black flex items-center justify-center relative overflow-hidden">

                {/* GRID */}
                <div className="absolute inset-0 opacity-10">

                  <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                </div>

                {/* FACE SCAN */}
                <div className="relative z-10">

                  <div className="w-72 h-72 rounded-full border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.4)] animate-pulse">

                    <div className="w-56 h-56 rounded-full border border-cyan-400/40 flex items-center justify-center">

                      <div className="text-center">

                        <div className="text-7xl mb-4">
                          🧬
                        </div>

                        <p className="text-cyan-300 text-xl font-bold">
                          FACE AI
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}