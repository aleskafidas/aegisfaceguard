import { useEffect, useState } from "react"
import Reveal from "./ui/Reveal"
import Icon from "./ui/Icon"
import { CONTACT, DEMO_WHATSAPP, whatsappLink } from "../data/site"

// Formulario HubSpot existente (portal 51451800). El envío lo gestiona
// HubSpot: este componente solo inserta el embed y muestra un plan B si el
// script no carga (bloqueadores, red), sin simular envíos.
const HS_SRC = "https://js.hsforms.net/forms/embed/51451800.js"

export default function Contact() {
  const [formStatus, setFormStatus] = useState("loading") // loading | ready | failed

  useEffect(() => {
    let script = document.querySelector(`script[src="${HS_SRC}"]`)
    if (!script) {
      script = document.createElement("script")
      script.src = HS_SRC
      script.defer = true
      document.body.appendChild(script)
    }
    const onError = () => setFormStatus("failed")
    script.addEventListener("error", onError)

    // Considera listo el formulario cuando HubSpot inserta contenido en el contenedor.
    const frame = document.querySelector(".hs-form-frame")
    const observer = frame
      ? new MutationObserver(() => {
          if (frame.childElementCount > 0) {
            setFormStatus("ready")
            observer.disconnect()
          }
        })
      : null
    observer?.observe(frame, { childList: true, subtree: true })
    // Si el embed ya existía (p. ej. al volver a montar), márcalo como listo.
    const raf = requestAnimationFrame(() => {
      if (frame && frame.childElementCount > 0) setFormStatus("ready")
    })

    const timeout = setTimeout(() => {
      setFormStatus((s) => (s === "loading" ? "failed" : s))
    }, 15000)

    return () => {
      script.removeEventListener("error", onError)
      observer?.disconnect()
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="contact" className="section-y relative overflow-hidden border-t border-line-soft">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-40 h-[32rem] w-[32rem] bg-[radial-gradient(closest-side,rgba(24,217,208,0.07),transparent)]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <Reveal>
          <h2 className="t-display max-w-xl text-[clamp(2.25rem,1.5rem+3vw,3.75rem)]">
            Mira AEGIS funcionando antes de decidir.
          </h2>
          <p className="t-lead mt-7 max-w-lg text-mist">
            Solicita una demostración y te mostramos cómo se vería el servicio en tu establecimiento.
          </p>

          <a href={DEMO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10">
            <Icon name="chat" size={18} />
            Pedir demostración por WhatsApp
          </a>

          <dl className="mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-[0.8125rem] font-semibold text-steel">Correo electrónico</dt>
              <dd className="m-0 mt-1.5">
                <a href={`mailto:${CONTACT.email}`} className="break-all text-ice hover:text-signal">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] font-semibold text-steel">WhatsApp</dt>
              <dd className="m-0 mt-1.5">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-ice hover:text-signal">
                  {CONTACT.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-[0.8125rem] font-semibold text-steel">Servicios</dt>
              <dd className="m-0 mt-1.5 leading-relaxed text-mist">
                Seguridad inteligente con IA, videovigilancia, sistemas solares, automatización y drones.
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={80}>
          <div className="on-light rounded-[var(--radius-lg)] bg-white p-6 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] sm:p-8">
            <h3 className="font-display text-xl font-extrabold tracking-[-0.02em]">Escríbenos</h3>
            <p className="mt-1 text-[0.9375rem] text-ink-soft">Déjanos tus datos y te contactamos.</p>

            <div className="mt-6 min-h-[22rem]">
              {formStatus === "loading" ? (
                <p className="text-[0.875rem] text-ink-soft" aria-live="polite">
                  Cargando formulario…
                </p>
              ) : null}
              {formStatus === "failed" ? (
                <div role="status" className="rounded-[var(--radius-sm)] bg-cloud p-4 text-[0.9375rem] text-ink">
                  <p className="font-semibold">No se pudo cargar el formulario.</p>
                  <p className="mt-1 text-ink-soft">
                    Puede deberse a un bloqueador de contenido o a la conexión. Escríbenos por{" "}
                    <a href={DEMO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline">
                      WhatsApp
                    </a>{" "}
                    o a{" "}
                    <a href={`mailto:${CONTACT.email}`} className="font-semibold text-ink underline">
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                </div>
              ) : null}
              <div
                className="hs-form-frame"
                data-region="na1"
                data-form-id="c7562fc4-4540-44ea-819c-749031e8998f"
                data-portal-id="51451800"
              ></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
