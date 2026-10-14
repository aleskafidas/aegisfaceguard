import { useEffect, useId, useRef, useState } from "react"
import Reveal from "./ui/Reveal"
import Icon from "./ui/Icon"
import { whatsappLink } from "../data/site"

import camaraWifi from "../assets/img/tienda-camara-wifi.webp"
import kitCamaras from "../assets/img/tienda-kit-4-camaras.webp"
import kitSolar from "../assets/img/tienda-kit-solar.webp"

// Productos y precios sin cambios respecto a la versión anterior del sitio.
const products = [
  {
    title: "Cámara WiFi Interiores 3MP Robótica",
    price: "$169.900 COP",
    amount: "169900",
    image: camaraWifi,
    imageSize: [800, 766],
    description:
      "Cámara inteligente para interiores con visión nocturna, detección de movimiento y monitoreo remoto desde celular.",
    whatsapp: whatsappLink("Hola quiero comprar la Camara WiFi"),
  },
  {
    title: "Kit WiFi + 4 Cámaras + Disco 1TB",
    price: "$1.590.000 COP",
    amount: "1590000",
    image: kitCamaras,
    imageSize: [800, 724],
    description: "Sistema profesional de videovigilancia para hogares, negocios y edificios con grabación 24/7.",
    whatsapp: whatsappLink("Hola quiero comprar el Kit de 4 Camaras"),
  },
  {
    title: "Kit Solar Inteligente Desde 1KW",
    price: "$3.500.000 COP",
    amount: "3500000",
    image: kitSolar,
    imageSize: [600, 300],
    description: "Sistema solar on-grid con monitoreo energético inteligente y alta eficiencia.",
    whatsapp: whatsappLink("Hola quiero cotizar el Kit Solar"),
  },
]

const EMPTY = { name: "", email: "", phone: "", city: "", address: "" }

const FIELDS = [
  { name: "name", label: "Nombre completo", type: "text", autoComplete: "name" },
  { name: "email", label: "Correo electrónico", type: "email", autoComplete: "email" },
  { name: "phone", label: "Número de teléfono", type: "tel", autoComplete: "tel" },
  { name: "city", label: "Ciudad", type: "text", autoComplete: "address-level2" },
  { name: "address", label: "Dirección de envío", type: "text", autoComplete: "street-address" },
]

const EPAYCO_SRC = "https://checkout.epayco.co/checkout.js"

function validate(data) {
  const errors = {}
  FIELDS.forEach((f) => {
    if (!data[f.name].trim()) errors[f.name] = `Escribe tu ${f.label.toLowerCase()}.`
  })
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Revisa el correo: debe tener el formato nombre@dominio.com."
  }
  if (!errors.phone && data.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Revisa el teléfono: debe tener al menos 7 dígitos."
  }
  return errors
}

function CheckoutDialog({ product, onClose }) {
  const [customerData, setCustomerData] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [gatewayError, setGatewayError] = useState("")
  const dialogRef = useRef(null)
  const formId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
    const previous = document.activeElement
    return () => {
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerData((d) => ({ ...d, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handlePayment = () => {
    if (!window.ePayco) {
      setGatewayError(
        "La pasarela de pago aún no ha cargado. Espera unos segundos e inténtalo de nuevo, o compra por WhatsApp.",
      )
      return false
    }

    // Configuración original del checkout de ePayco (llave pública de checkout).
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
    return true
  }

  const continueToPayment = (e) => {
    e.preventDefault()
    const found = validate(customerData)
    setErrors(found)
    const firstInvalid = FIELDS.find((f) => found[f.name])
    if (firstInvalid) {
      dialogRef.current?.querySelector(`[name="${firstInvalid.name}"]`)?.focus()
      return
    }
    if (handlePayment()) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby={`${formId}-title`}
      className="on-light m-auto w-[calc(100%-2rem)] max-w-md rounded-[var(--radius-lg)] bg-white p-0 text-ink shadow-2xl backdrop:bg-night/70 backdrop:backdrop-blur-sm"
    >
      <form onSubmit={continueToPayment} noValidate className="relative p-7 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded text-ink-soft hover:text-ink"
          aria-label="Cerrar"
        >
          <Icon name="close" size={20} />
        </button>

        <h3 id={`${formId}-title`} className="font-display text-2xl font-extrabold tracking-[-0.02em]">
          Finalizar compra
        </h3>
        <p className="mt-1 pr-8 text-[0.9375rem] text-ink-soft">
          {product.title} · <span className="font-semibold text-ink">{product.price}</span>
        </p>

        <div className="mt-7 space-y-4">
          {FIELDS.map((f) => {
            const id = `${formId}-${f.name}`
            const err = errors[f.name]
            return (
              <div key={f.name}>
                <label htmlFor={id} className="mb-1.5 block text-[0.875rem] font-semibold text-ink">
                  {f.label}
                </label>
                <input
                  id={id}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required
                  value={customerData[f.name]}
                  onChange={handleInputChange}
                  aria-invalid={err ? "true" : undefined}
                  aria-describedby={err ? `${id}-error` : undefined}
                  className={`w-full rounded-[var(--radius-sm)] border bg-cloud px-4 py-3 text-ink outline-none transition-colors focus:border-signal-strong focus:bg-white ${
                    err ? "border-red-700" : "border-[#c9d5e1]"
                  }`}
                />
                {err ? (
                  <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] text-red-800">
                    <Icon name="alert" size={14} />
                    {err}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>

        {gatewayError ? (
          <p role="alert" className="mt-5 rounded-[var(--radius-sm)] bg-amber/15 p-3 text-[0.875rem] text-ink">
            {gatewayError}
          </p>
        ) : null}

        <button type="submit" className="btn btn-dark mt-7 w-full">
          Continuar al pago
        </button>
        <button type="button" onClick={onClose} className="btn btn-outline-dark mt-3 w-full">
          Cancelar
        </button>
        <p className="mt-4 text-center text-[0.8125rem] text-ink-soft">El pago se procesa en la pasarela de ePayco.</p>
      </form>
    </dialog>
  )
}

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Carga del checkout de ePayco una sola vez (evita scripts duplicados).
  useEffect(() => {
    if (document.querySelector(`script[src="${EPAYCO_SRC}"]`)) return
    const script = document.createElement("script")
    script.src = EPAYCO_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="store" className="on-light section-y bg-cloud text-ink">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="t-h2 max-w-xl">Tienda: equipos listos para tu local o tu hogar.</h2>
          <p className="t-lead max-w-lg text-ink-soft lg:justify-self-end">
            Equipos de videovigilancia y energía solar. Compra por WhatsApp o paga en línea.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Reveal
              as="article"
              key={product.title}
              className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[#d3dde7] bg-white"
            >
              <div className="relative aspect-[4/3] bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  width={product.imageSize[0]}
                  height={product.imageSize[1]}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-6"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-[#e3e9ef] p-7">
                <h3 className="t-h3 text-ink">{product.title}</h3>
                <p className="mt-3 font-display text-2xl font-extrabold tracking-[-0.02em] text-ink">{product.price}</p>
                <p className="mt-3 mb-8 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">{product.description}</p>
                <div className="flex flex-col gap-3">
                  <a href={product.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    Comprar por WhatsApp
                  </a>
                  <button type="button" onClick={() => setSelectedProduct(product)} className="btn btn-outline-dark">
                    Pagar en línea
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProduct ? <CheckoutDialog product={selectedProduct} onClose={() => setSelectedProduct(null)} /> : null}
    </section>
  )
}
