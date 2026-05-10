import { motion } from "framer-motion"

import cam1 from "../assets/store/cam1.jpg"
import cam2 from "../assets/store/cam2.jpg"
import cam3 from "../assets/store/cam3.png"

const products = [

  {
    title: "Cámara WiFi Robotica 3MP + Memoria 64GB",
    price: "$169.900 COP",
    image: cam1,
    description:
      "Cámara inteligente para interiores con visión nocturna y monitoreo remoto.",
    whatsapp:
      "https://wa.me/573003966155?text=Hola%20quiero%20comprar%20la%20Camara%20WiFi",
  },

  {
    title: "Kit NVR + Cámaras wifi + disco duro 1TB",
    price: "$1.390.000 COP",
    image: cam2,
    description:
      "Sistema profesional para negocios y hogares facil instalacion.",
    whatsapp:
      "https://wa.me/573003966155?text=Hola%20quiero%20comprar%20el%20Kit%20NVR",
  },

  {
    title: "Sistema Solar On-Grid desde 1kw",
    price: "$3.500.000 COP",
    image: cam3,
    description:
      "Sistema solar on-grid con monitoreo energético.",
    whatsapp:
      "https://wa.me/573003966155?text=Hola%20quiero%20cotizar%20el%20Kit%20Solar",
  },

]

export default function Store() {

  return (

    <section
      id="store"
      className="bg-black text-white py-32 px-8 relative overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

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

            Tienda Tecnológica

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Productos

            <span className="text-cyan-400">
              {" "}Destacados
            </span>

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Soluciones tecnológicas y equipos profesionales de seguridad,
            videovigilancia y energía inteligente.

          </p>

        </motion.div>

        {/* PRODUCTS */}
        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (

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
                scale: 1.02,
              }}

              className="bg-white/5 border border-cyan-400/10 rounded-[35px] overflow-hidden backdrop-blur-2xl"

            >

              <img
                src={product.image}
                alt={product.title}
                className="h-[260px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black mb-4">

                  {product.title}

                </h3>

                <p className="text-cyan-400 text-2xl font-bold mb-4">

                  {product.price}

                </p>

                <p className="text-slate-400 leading-relaxed text-lg mb-8">

                  {product.description}

                </p>

                <div className="flex flex-col gap-4">

                  <a
                    href={product.whatsapp}
                    target="_blank"
                    className="bg-cyan-400 hover:bg-cyan-300 text-black font-black py-4 rounded-2xl text-center transition"
                  >

                    Comprar por WhatsApp

                  </a>

                  <button
                    className="border border-cyan-400/20 hover:border-cyan-400 text-white py-4 rounded-2xl transition"
                  >

                    Pagar Online

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}