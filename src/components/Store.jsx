import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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

  const [selectedProduct, setSelectedProduct] = useState(null)

  const [customerData, setCustomerData] = useState({

    name: "",

    email: "",

    phone: "",

    city: "",

    address: "",

  })

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

      name_billing: customerData.name,

      email_billing: customerData.email,

      mobilephone_billing: customerData.phone,

      address_billing: customerData.address,

      city_billing: customerData.city,

    })

  }

  const handleInputChange = (e) => {

    setCustomerData({

      ...customerData,

      [e.target.name]: e.target.value,

    })

  }

  const continueToPayment = () => {

    if (

      !customerData.name ||

      !customerData.email ||

      !customerData.phone ||

      !customerData.city ||

      !customerData.address

    ) {

      alert("Por favor completa todos los campos")

      return
    }

    handlePayment(selectedProduct)

    setSelectedProduct(null)

    setCustomerData({

      name: "",

      email: "",

      phone: "",

      city: "",

      address: "",

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

                    onClick={() => setSelectedProduct(product)}

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

      {/* MODAL DE PAGO */}
      {selectedProduct && (

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto p-6">

          <div className="bg-[#0f172a] border border-cyan-400/20 rounded-3xl p-8 w-full max-w-md mx-4 relative">

            {/* BOTON CERRAR */}
            <button

              onClick={() => setSelectedProduct(null)}

              className="absolute top-4 right-5 text-slate-400 hover:text-white text-3xl"

            >

              ×

            </button>

            <h3 className="text-2xl font-bold mb-2 text-center">

              Finalizar Compra

            </h3>

            <p className="text-cyan-400 text-center mb-8">

              {selectedProduct.title}

            </p>

            <input
              required
              type="text"
              name="name"
              placeholder="Nombre Completo"
              value={customerData.name}
              onChange={handleInputChange}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-cyan-400/10 text-white focus:outline-none"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={customerData.email}
              onChange={handleInputChange}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-cyan-400/10 text-white focus:outline-none"
            />

            <input
              required
              type="tel"
              name="phone"
              placeholder="Número de Teléfono"
              value={customerData.phone}
              onChange={handleInputChange}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-cyan-400/10 text-white focus:outline-none"
            />

            <input
              required
              type="text"
              name="city"
              placeholder="Ciudad"
              value={customerData.city}
              onChange={handleInputChange}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-cyan-400/10 text-white focus:outline-none"
            />

            <input
              required
              type="text"
              name="address"
              placeholder="Dirección de Envío"
              value={customerData.address}
              onChange={handleInputChange}
              className="w-full mb-6 px-4 py-3 rounded-xl bg-white/5 border border-cyan-400/10 text-white focus:outline-none"
            />

            <button

              onClick={continueToPayment}

              className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-black py-4 rounded-xl transition"

            >

              Continuar al Pago

            </button>

            <button

              onClick={() => setSelectedProduct(null)}

              className="w-full mt-4 border border-cyan-400/20 hover:border-cyan-400 hover:bg-cyan-400/10 text-white py-4 rounded-xl transition"

            >

              Cancelar

            </button>

          </div>

        </div>

      )}

    </section>

  )

}