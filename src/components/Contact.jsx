import { useEffect, useState } from "react"
import Reveal from "./ui/Reveal"
import Icon from "./ui/Icon"
import { CONTACT, DEMO_WHATSAPP, whatsappLink } from "../data/site"
import { PHOTOS } from "../data/photos"

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

  const photo = PHOTOS.calle

  return (
    <section id="contact">
      {/* Cierre a pantalla completa */}
      <div className="bleed shadow-text flex min-h-[90svh] items-center">
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={photo.sizes}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="bleed-img"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-[1] bg-[linear-gradient(to_bottom,#06111f_0%,rgba(6,17,31,0.62)_28%,rgba(6,17,31,0.62)_72%,#06111f_100%)]"
        />
        <Reveal className="container-x text-center">
          <h2 className="t-hero mx-auto max-w-4xl">Mira AEGIS funcionando antes de decidir.</h2>
          <p className="t-lead mx-auto mt-6 max-w-xl text-ice/85">
            Solicita una demostración y te mostramos cómo se vería el servicio en tu establecimiento.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={DEMO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <Icon name="chat" size={18} />
              Pedir demostración por WhatsApp
            </a>
            <a href="#formulario" className="btn btn-glass btn-lg">
              Dejar mis datos
            </a>
          </div>
        </Reveal>
      </div>

      {/* Formulario y datos de contacto */}
      <div id="formulario" className="container-x grid scroll-mt-24 gap-14 py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:py-28">
        <div>
          <h3 className="font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Hablemos.</h3>
          <dl className="mt-10 space-y-7">
            <div>
              <dt className="text-[0.875rem] font-semibold text-steel">Correo electrónico</dt>
              <dd className="m-0 mt-1.5 text-lg">
                <a href={`mailto:${CONTACT.email}`} className="break-all text-ice hover:text-signal">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.875rem] font-semibold text-steel">WhatsApp</dt>
              <dd className="m-0 mt-1.5 text-lg">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-ice hover:text-signal">
                  {CONTACT.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.875rem] font-semibold text-steel">Servicios</dt>
              <dd className="m-0 mt-1.5 leading-relaxed text-mist">
                Seguridad inteligente con IA, videovigilancia, sistemas solares, automatización y drones.
              </dd>
            </div>
          </dl>
        </div>

        <div className="on-light rounded-[1.75rem] bg-white p-6 text-ink sm:p-9">
          <h3 className="font-display text-xl font-extrabold tracking-[-0.02em]">Escríbenos</h3>
          <p className="mt-1 text-[0.9375rem] text-ink-soft">Déjanos tus datos y te contactamos.</p>

          <div className="mt-6 min-h-[22rem]">
            {formStatus === "loading" ? (
              <p className="text-[0.875rem] text-ink-soft" aria-live="polite">
                Cargando formulario…
              </p>
            ) : null}
            {formStatus === "failed" ? (
              <div role="status" className="rounded-[var(--radius-md)] bg-cloud p-4 text-[0.9375rem] text-ink">
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
      </div>
    </section>
  )
}
