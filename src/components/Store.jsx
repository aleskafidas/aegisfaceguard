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

  const inputClass =
    "w-full mb-4 px-4 py-3 rounded-lg bg-paper border border-line-light text-ink focus:outline-none focus:border-accent-dark"

  return (
    <section id="store" className="bg-paper text-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-accent-dark text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Tienda
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Productos destacados
          </h2>
          <p className="text-ink/60 text-lg mt-6 leading-relaxed">
            Equipos profesionales de seguridad, videovigilancia, inteligencia
            artificial y energía solar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="border border-line-light rounded-lg overflow-hidden bg-white flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl leading-tight">
                  {product.title}
                </h3>
                <p className="font-display font-extrabold text-accent-dark text-2xl mt-3">
                  {product.price}
                </p>
                <p className="text-ink/60 leading-relaxed mt-3 mb-8 flex-1">
                  {product.description}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={product.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-dark hover:bg-accent transition-colors text-white font-semibold py-3 rounded-lg text-center"
                  >
                    Comprar por WhatsApp
                  </a>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="border border-line-light hover:border-accent-dark transition-colors text-ink py-3 rounded-lg"
                  >
                    Pagar online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-ink/60 flex items-center justify-center z-50 overflow-y-auto p-6">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4 relative text-ink">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-5 text-ink/40 hover:text-ink text-3xl"
              aria-label="Cerrar"
            >
              ×
            </button>

            <h3 className="font-display font-bold text-2xl mb-2 text-center">
              Finalizar compra
            </h3>
            <p className="text-accent-dark text-center mb-8">
              {selectedProduct.title}
            </p>

            <input
              required
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={customerData.name}
              onChange={handleInputChange}
              className={inputClass}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={customerData.email}
              onChange={handleInputChange}
              className={inputClass}
            />
            <input
              required
              type="tel"
              name="phone"
              placeholder="Número de teléfono"
              value={customerData.phone}
              onChange={handleInputChange}
              className={inputClass}
            />
            <input
              required
              type="text"
              name="city"
              placeholder="Ciudad"
              value={customerData.city}
              onChange={handleInputChange}
              className={inputClass}
            />
            <input
              required
              type="text"
              name="address"
              placeholder="Dirección de envío"
              value={customerData.address}
              onChange={handleInputChange}
              className="w-full mb-6 px-4 py-3 rounded-lg bg-paper border border-line-light text-ink focus:outline-none focus:border-accent-dark"
            />

            <button
              onClick={continueToPayment}
              className="w-full bg-accent-dark hover:bg-accent transition-colors text-white font-semibold py-3.5 rounded-lg"
            >
              Continuar al pago
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="w-full mt-3 border border-line-light hover:border-ink/30 transition-colors text-ink py-3.5 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
