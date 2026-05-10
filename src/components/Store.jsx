import { motion } from "framer-motion"
import { useEffect } from "react"

import cam1 from "../assets/store/cam1.jpg"
import cam2 from "../assets/store/cam2.jpg"
import cam3 from "../assets/store/cam3.png"

const products = [

  {
    title: "Cámara WiFi Interiores 3MP Robótica",

    price: "$169.900 COP",

    amount: "169900",

    image: cam1,

    description:
      "Cámara inteligente para interiores con visión nocturna, detección de movimiento y monitoreo remoto desde celular.",

    whatsapp:
      "https://wa.me/573003966155?text=Hola%20quiero%20comprar%20la%20Camara%20WiFi",
  },

  {
    title: "Kit WiFi + 4 Cámaras + Disco 1TB",

    price: "$1.590.000 COP",

    amount: "1590000",

    image: cam2,

    description:
      "Sistema profesional de videovigilancia para hogares, negocios y edificios con grabación 24/7.",

    whatsapp:
      "https://wa.me/573003966155?text=Hola%20quiero%20comprar%20el%20Kit%20de%204%20Camaras",
  },

  {
    title: "Kit Solar Inteligente Desde 1KW",

    price: "$3.500.000 COP",

    amount: "3500000",

    image: cam3,

    description:
      "Sistema solar on-grid con monitoreo energético inteligente y alta eficiencia.",

    whatsapp:
      "https://wa.me/573003966155?text=Hola%20quiero%20cotizar%20el%20Kit%20Solar",
  },

]

export default function Store() {

  useEffect(() => {

    const script = document.createElement("script")

    script.src = "https://checkout.epayco.co/checkout.js"

    script.async = true

    document.body.appendChild(script)

  }, [])

  const handlePayment = (product) => {

    if (!window.ePayco) {

      alert("La pasarela de pago aún está cargando...")

      return
    }

    const handler = window.ePayco.checkout.configure({

      key: "b40f1bdd61dfc60995ba0bc2c895b4c1",

      test: false,

    })

    handler.open({

      external: false,

      amount: product.amount,

      name: product.title,

      description: product.description,

      currency: "cop",

      country: "co",

      lang: "es",

      tax: "0",

      tax_base: "0",

      invoice: `AEGIS-${Date.now()}`,

      response: "https://www.aegisfaceguard.com",

    })

  }

  return (

    <section
      id="store"
      className="bg-black text-white py-32 px-8 relative overflow-hidden"
    >

      {/* EFECTOS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITULO */}
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

            Equipos profesionales de seguridad, videovigilancia,
            inteligencia artificial y energía solar.

          </p>

        </motion.div>

        {/* PRODUCTOS */}
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

              className="bg-white/5 border border-cyan-400/10 rounded-[35px] overflow-hidden backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.08)]"

            >

              {/* IMAGEN */}
              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[260px] w-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

              {/* CONTENIDO */}
              <div className="p-8">

                <h3 className="text-3xl font-black mb-4 leading-tight">

                  {product.title}

                </h3>

                <p className="text-cyan-400 text-2xl font-bold mb-4">

                  {product.price}

                </p>

                <p className="text-slate-400 leading-relaxed text-lg mb-8">

                  {product.description}

                </p>

                {/* BOTONES */}
                <div className="flex flex-col gap-4">

                  <a
                    href={product.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-400 hover:bg-cyan-300 text-black font-black py-4 rounded-2xl text-center transition"
                  >

                    Comprar por WhatsApp

                  </a>

                  <button

                    onClick={() => handlePayment(product)}

                    className="border border-cyan-400/20 hover:border-cyan-400 hover:bg-cyan-400/10 text-white py-4 rounded-2xl transition"

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