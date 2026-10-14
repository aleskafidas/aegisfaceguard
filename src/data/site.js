// Datos de contacto y enlaces compartidos. Un solo lugar para cambiarlos.

export const CONTACT = {
  email: "admin@aegisfaceguard.com",
  whatsappNumber: "573003966155",
  whatsappDisplay: "+57 300 396 6155",
  location: "Sabaneta, Antioquia — Colombia",
}

export function whatsappLink(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const DEMO_WHATSAPP = whatsappLink("Hola, quiero una demo de AEGIS FaceGuard")

// Navegación principal. Los id existentes (#inicio, #services, #solutions,
// #store, #contact) se conservan para no romper enlaces compartidos.
export const NAV_LINKS = [
  { id: "solutions", label: "Cómo funciona" },
  { id: "capacidades", label: "Capacidades" },
  { id: "implementacion", label: "Implementación" },
  { id: "services", label: "Servicios" },
  { id: "store", label: "Tienda" },
  { id: "faq", label: "Preguntas" },
]
