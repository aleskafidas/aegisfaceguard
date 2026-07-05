import { motion } from "framer-motion"

const services = [
  {
    title: "Detección Inteligente de Amenazas",
    description:
      "Identificación de personas y situaciones de riesgo en tiempo real, con verificación por IA de cada evento. Sin biometría ni reconocimiento facial.",
    icon: "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z",
  },
  {
    title: "Detección de Armas",
    description:
      "Sistema de detección automática de armas mediante inteligencia artificial, con alerta inmediata al responsable del negocio.",
    icon: "M12 9v4m0 4h.01M4.9 19h14.2c1.5 0 2.5-1.7 1.7-3L13.7 4.9c-.8-1.3-2.6-1.3-3.4 0L3.2 16c-.8 1.3.2 3 1.7 3z",
  },
  {
    title: "Instalación de Cámaras",
    description:
      "Diseño e instalación profesional de sistemas de videovigilancia IP y PoE para negocios y edificios.",
    icon: "M15 10l5-3v10l-5-3v2a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v1z",
  },
  {
    title: "Monitoreo Inteligente",
    description:
      "Alertas automáticas y monitoreo avanzado conectado a sistemas de seguridad, con notificaciones a tu celular.",
    icon: "M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Drones y Automatización",
    description:
      "Soluciones con drones FPV, automatización y sistemas autónomos para inspección y monitoreo.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Sistemas Solares",
    description:
      "Diseño e instalación de soluciones solares on-grid y off-grid para hogares y empresas.",
    icon: "M12 3v2m0 14v2M5.6 5.6l1.4 1.4m9.9 9.9l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m9.9-9.9l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-paper text-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-accent-dark text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Servicios
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Soluciones tecnológicas para proteger tu negocio
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-line-light border border-line-light">
          {services.map((service) => (
            <div key={service.title} className="bg-paper p-8">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent-dark mb-6"
              >
                <path d={service.icon} />
              </svg>
              <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-ink/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
