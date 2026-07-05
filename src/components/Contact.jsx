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
    <section id="contact" className="bg-ink text-paper py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Contacto
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Hablemos sobre tu proyecto
          </h2>
          <p className="text-paper/60 text-lg mt-6 leading-relaxed">
            Soluciones inteligentes en seguridad, automatización, videovigilancia
            y tecnología.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Correo electrónico
              </p>
              <p className="text-paper/80 text-lg">admin@aegisfaceguard.com</p>
            </div>
            <div>
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                WhatsApp
              </p>
              <p className="text-paper/80 text-lg">+57 300 396 6155</p>
            </div>
            <div>
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Servicios
              </p>
              <p className="text-paper/80 leading-relaxed">
                Seguridad Inteligente · IA · Videovigilancia · Sistemas Solares ·
                Automatización · Drones
              </p>
            </div>
          </div>

          <div className="bg-paper rounded-lg p-8">
            <div
              className="hs-form-frame"
              data-region="na1"
              data-form-id="c7562fc4-4540-44ea-819c-749031e8998f"
              data-portal-id="51451800"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
