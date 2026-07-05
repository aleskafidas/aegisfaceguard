import { motion } from "framer-motion"

export default function Story() {
  return (
    <section className="bg-ink text-paper py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Nuestra historia
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-12">
            Por qué nació AEGIS FaceGuard
          </h2>

          <div className="space-y-6 text-paper/70 text-lg leading-relaxed">
            <p>
              AEGIS FaceGuard nació a partir de una realidad que viven miles de
              comerciantes y personas diariamente:{" "}
              <span className="text-paper font-semibold">la inseguridad.</span>
            </p>
            <p>
              Después de presenciar situaciones relacionadas con robos,
              afectaciones a establecimientos y la preocupación constante de
              quienes trabajan para sacar adelante sus negocios, surgió la idea
              de desarrollar una solución tecnológica capaz de prevenir y
              responder de forma más inteligente ante este tipo de situaciones.
            </p>
            <p>
              El proyecto comenzó como una iniciativa enfocada en integrar
              inteligencia artificial, monitoreo inteligente y automatización en
              sistemas de seguridad accesibles y modernos.
            </p>
            <p>
              Con el tiempo, la visión evolucionó hacia la creación de una
              plataforma tecnológica que no solo protege negocios y espacios,
              sino que también busca generar un impacto social positivo mediante
              innovación y tecnología.
            </p>
          </div>

          <blockquote className="border-l-2 border-accent pl-6 mt-12">
            <p className="font-display font-bold text-2xl md:text-3xl leading-snug">
              "La tecnología también puede utilizarse para proteger, prevenir y
              generar tranquilidad."
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
