import securityVideo from "../assets/videos/security.mp4"
import { motion } from "framer-motion"

export default function Hero() {

  return (

    <section className="min-h-screen text-white flex items-center px-10 bg-gradient-to-br from-slate-950 via-blue-950 to-black relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-700/20 blur-[140px] rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10">

        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div

          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

        >

          <div className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full inline-block mb-6 backdrop-blur-xl">

            IA • Reconocimiento Facial • Monitoreo Inteligente

          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none">

            AEGIS

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">

              FACEGUARD

            </span>

          </h1>

          <p className="text-slate-300 text-xl mt-8 leading-relaxed max-w-2xl">

            Seguridad avanzada impulsada por inteligencia artificial,
            reconocimiento facial en tiempo real y monitoreo inteligente
            para negocios, edificios y ciudades inteligentes.

          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-10 flex-wrap">

            <button className="bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 px-8 py-4 rounded-2xl text-black font-bold text-lg shadow-[0_0_40px_rgba(34,211,238,0.4)]">

              Solicitar Demo

            </button>

            <button className="border border-cyan-400/30 hover:border-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 px-8 py-4 rounded-2xl text-lg backdrop-blur-xl">

              Nuestros Servicios

            </button>

          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-14 flex-wrap">

            <div>

              <h3 className="text-4xl font-black text-cyan-300">
                +50
              </h3>

              <p className="text-slate-400">
                Sistemas instalados
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-cyan-300">
                24/7
              </h3>

              <p className="text-slate-400">
                Monitoreo inteligente
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-cyan-300">
                IA
              </h3>

              <p className="text-slate-400">
                Detección avanzada
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div

          className="relative"

          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2 }}

        >

          {/* OUTER GLOW */}
          <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full"></div>

          {/* MAIN CARD */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-cyan-400/20 rounded-[40px] p-8 shadow-[0_0_80px_rgba(34,211,238,0.15)] overflow-hidden">

            {/* TOP LIGHT */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            {/* VIDEO */}
            <div className="w-full h-[350px] rounded-3xl overflow-hidden border border-cyan-400/20 bg-black relative">

              <video
                src={securityVideo}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />

              {/* VIDEO OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

            </div>

            {/* TEXT */}
            <div className="mt-8 text-center">

              <h2 className="text-4xl font-black">

                Reconocimiento Facial IA

              </h2>

              <p className="text-slate-400 mt-4 text-lg">

                Detección inteligente en tiempo real para negocios,
                edificios y sistemas de videovigilancia avanzados.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )

}