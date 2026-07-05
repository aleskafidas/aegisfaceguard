import securityVideo from "../assets/videos/security.mp4"
import { motion } from "framer-motion"

const stats = [
  { value: "+50", label: "Sistemas instalados" },
  { value: "24/7", label: "Monitoreo inteligente" },
  { value: "IA", label: "Verificación de cada evento" },
]

export default function Hero() {
  return (
    <section id="inicio" className="bg-ink text-paper pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            Videovigilancia con inteligencia artificial
          </p>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Detección de amenazas en tiempo real. Verificada por IA.
          </h1>

          <p className="text-paper/70 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">
            AEGIS FaceGuard convierte tus cámaras en un sistema de seguridad
            inteligente: detecta personas y situaciones de riesgo, verifica cada
            evento con IA y envía la alerta a tu celular. Sin biometría ni
            reconocimiento facial, en cumplimiento de la Ley 1581 de protección
            de datos.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark transition-colors px-7 py-3.5 rounded-lg text-ink font-semibold"
            >
              Solicitar demo
            </a>
            <a
              href="#services"
              className="border border-line hover:border-paper/40 transition-colors px-7 py-3.5 rounded-lg text-paper/90"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 rounded-lg overflow-hidden border border-line"
        >
          <video
            src={securityVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-h-[520px] object-cover"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-3 gap-8 max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-extrabold text-3xl md:text-4xl">{stat.value}</p>
              <p className="text-paper/60 mt-1 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
