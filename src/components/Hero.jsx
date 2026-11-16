import { useEffect, useState, useSyncExternalStore } from "react"
import Icon from "./ui/Icon"
import { PHOTOS } from "../data/photos"

// Portada: la pantalla completa es el visor de una cámara. Al cargar, el
// recuadro de detección se fija sobre el casco y recorre las mismas etapas
// del producto (análisis → posible evento → verificación → aviso).
// Es una secuencia ILUSTRATIVA sobre una fotografía ilustrativa: no muestra
// datos ni imágenes de una cámara real, y así se indica en pantalla.

const STAGES = ["Análisis", "Posible evento", "Verificación IA", "Aviso"]
const CHIP = ["", "Casco", "Verificando…", "Evento para revisar"]
// Tiempo que dura cada etapa antes de pasar a la siguiente (ms)
const DURATIONS = [1500, 1700, 1900]

const subscribeNever = () => () => {}
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

export default function Hero() {
  const p = PHOTOS.casco
  // Con movimiento reducido se muestra directamente el estado final.
  // useSyncExternalStore da "false" en el prerenderizado y el valor real en el navegador.
  const reducedMotion = useSyncExternalStore(subscribeNever, prefersReducedMotion, () => false)
  const [step, setStep] = useState(0)
  const stage = reducedMotion ? 3 : step

  useEffect(() => {
    if (stage >= 3) return
    const t = setTimeout(() => setStep((s) => s + 1), DURATIONS[stage])
    return () => clearTimeout(t)
  }, [stage])

  const clear = stage === 3

  return (
    <section id="inicio" className="bleed shadow-text flex min-h-[max(100svh,640px)] flex-col">
      {/* Escena */}
      <div className="scene">
        <div className="scene-inner">
          <img
            src={p.src}
            srcSet={p.srcSet}
            sizes="(min-width: 1024px) 100vw, 180vw"
            width={p.width}
            height={p.height}
            alt={p.alt}
            fetchPriority="high"
            decoding="async"
            className="scene-photo"
          />

          {/* Barrido inicial */}
          {stage === 0 ? (
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="anim-scan h-1/4 w-full bg-gradient-to-b from-transparent via-signal/15 to-transparent [animation-duration:1.6s]" />
            </div>
          ) : null}

        </div>

        {/* Lectura sobre el texto y transición a la sección siguiente */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,17,31,0.7)_0%,rgba(6,17,31,0)_22%,rgba(6,17,31,0)_62%,#06111f_100%)] lg:bg-[linear-gradient(to_right,rgba(6,17,31,0.94)_0%,rgba(6,17,31,0.78)_30%,rgba(6,17,31,0)_62%),linear-gradient(to_bottom,rgba(6,17,31,0.55)_0%,rgba(6,17,31,0)_20%,rgba(6,17,31,0)_70%,#06111f_100%)]"
        />

        {/* Recuadro de detección: misma caja que la foto, por encima del degradado */}
        <div className="scene-inner" aria-hidden="true">
          <div
            className={`lock ${stage >= 1 ? "is-on" : ""} ${clear ? "is-clear" : ""}`}
            style={{ left: "39.5%", top: "9.5%", width: "49%", height: "81.5%" }}
          >
            <div className="lock-box" />
            <span className="lock-corner" />
            <span className="lock-corner" />
            <span className="lock-corner" />
            <span className="lock-corner" />
            <div className="lock-chip hud">
              <span>{CHIP[stage]}</span>
            </div>
            <span className="hud absolute bottom-2 right-3 text-ice/70">Imagen ilustrativa</span>
          </div>
        </div>
      </div>

      {/* Mensaje */}
      <div className="container-x mt-auto flex flex-col pt-[calc(50svh-3rem)] lg:my-auto lg:pt-28">
        <div className="max-w-[40rem]">
          <h1 className="t-hero text-ice">
            Anticípate a los riesgos.
            <br />
            Protege tu negocio.
          </h1>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ice/85 lg:text-xl">
            Inteligencia artificial que analiza eventos de seguridad y te ayuda a actuar a tiempo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary btn-lg">
              Solicitar demostración
            </a>
            <a href="#solutions" className="btn btn-glass btn-lg">
              Conocer la tecnología
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-[0.875rem] text-mist">
            <Icon name="lock" size={16} className="shrink-0 text-signal" />
            Sin biometría ni reconocimiento facial.
          </p>
        </div>
      </div>

      {/* Etapas del proceso: el mismo recorrido que explica la sección siguiente */}
      <div className="container-x mt-10 pb-6 lg:mt-0 lg:pb-8">
        <ol
          className="hud grid grid-cols-4 border-t border-ice/20 text-[0.75rem] sm:text-[0.8125rem]"
          aria-label="Etapas del proceso ilustrado en la imagen"
        >
          {STAGES.map((label, i) => {
            const current = i === stage
            const done = i < stage
            return (
              <li
                key={label}
                aria-current={current ? "step" : undefined}
                className={`relative flex items-center gap-2 pt-3 pr-2 transition-colors duration-300 ${
                  current ? "text-ice" : done ? "text-mist" : "text-steel"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-[-1px] h-px transition-all duration-500 ${
                    current || done ? "w-full" : "w-0"
                  } ${i === 1 || i === 2 ? "bg-amber" : "bg-signal"}`}
                />
                <span
                  aria-hidden="true"
                  className={`hidden h-1.5 w-1.5 shrink-0 rounded-full sm:block ${
                    current ? (i === 1 || i === 2 ? "bg-amber" : "bg-signal") : done ? "bg-mist" : "bg-line"
                  }`}
                />
                {label}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
