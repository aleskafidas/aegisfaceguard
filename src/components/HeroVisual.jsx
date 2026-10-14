import { useEffect, useRef, useState } from "react"
import Icon from "./ui/Icon"

// Visor ILUSTRATIVO del flujo de AEGIS. No muestra imágenes ni datos de una
// cámara real: es un dibujo vectorial de un local comercial con estados que
// representan las etapas del proceso. Sin porcentajes ni cifras inventadas.

const STAGES = [
  { key: "analisis", label: "Análisis", tone: "signal" },
  { key: "evento", label: "Posible evento", tone: "amber" },
  { key: "verificacion", label: "Verificación IA", tone: "amber" },
  { key: "aviso", label: "Aviso", tone: "signal" },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return reduced
}

export default function HeroVisual() {
  const reduced = usePrefersReducedMotion()
  const [stage, setStage] = useState(reduced ? 3 : 0)
  const [inView, setInView] = useState(true)
  const [started, setStarted] = useState(false)
  const rootRef = useRef(null)

  // Pausa la animación fuera de pantalla (ahorra CPU/batería en móvil)
  useEffect(() => {
    const node = rootRef.current
    if (!node || typeof IntersectionObserver === "undefined") return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting))
    io.observe(node)
    return () => io.disconnect()
  }, [])

  // Arranca la secuencia después de la carga para no competir con el render inicial
  useEffect(() => {
    if (reduced) return
    let timer
    const start = () => {
      timer = setTimeout(() => setStarted(true), 1200)
    }
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    return () => {
      window.removeEventListener("load", start)
      clearTimeout(timer)
    }
  }, [reduced])

  useEffect(() => {
    if (reduced || !inView || !started) return
    const durations = [2600, 2200, 2400, 3600]
    const t = setTimeout(() => setStage((s) => (s + 1) % STAGES.length), durations[stage])
    return () => clearTimeout(t)
  }, [stage, reduced, inView, started])

  const shownStage = reduced ? 3 : stage
  const showBox = shownStage >= 1
  const verifying = shownStage === 2
  const notified = shownStage === 3

  return (
    <figure ref={rootRef} className="relative m-0">
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-deep shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
        {/* Barra superior del visor */}
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 text-[0.75rem] text-mist">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal anim-pulse" aria-hidden="true" />
            <span className="font-medium text-ice">Cámara de mostrador</span>
          </div>
          <span className="rounded border border-amber/50 px-2 py-0.5 font-semibold text-amber">Ilustración</span>
        </div>

        {/* Escena */}
        <div className="relative aspect-[16/11]">
          <svg
            viewBox="0 0 640 440"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Ilustración de un local comercial visto desde una cámara de seguridad, con un recuadro de detección sobre una persona que lleva casco."
          >
            <defs>
              <linearGradient id="hv-floor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0f2740" />
                <stop offset="1" stopColor="#081626" />
              </linearGradient>
              <linearGradient id="hv-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#10263c" />
                <stop offset="1" stopColor="#0c1f33" />
              </linearGradient>
              <linearGradient id="hv-door" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2c5d7a" stopOpacity="0.55" />
                <stop offset="1" stopColor="#123049" stopOpacity="0.2" />
              </linearGradient>
              <radialGradient id="hv-vignette" cx="0.5" cy="0.45" r="0.75">
                <stop offset="0.6" stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity="0.45" />
              </radialGradient>
              <pattern id="hv-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="#18d9d0" strokeOpacity="0.05" />
              </pattern>
            </defs>

            {/* Pared y piso en perspectiva */}
            <rect width="640" height="440" fill="url(#hv-wall)" />
            <polygon points="0,300 640,300 640,440 0,440" fill="url(#hv-floor)" />
            <g stroke="#1f4260" strokeWidth="1" opacity="0.7">
              <line x1="0" y1="300" x2="640" y2="300" />
              <line x1="320" y1="300" x2="40" y2="440" />
              <line x1="320" y1="300" x2="180" y2="440" />
              <line x1="320" y1="300" x2="320" y2="440" />
              <line x1="320" y1="300" x2="460" y2="440" />
              <line x1="320" y1="300" x2="600" y2="440" />
              <line x1="0" y1="340" x2="640" y2="340" />
              <line x1="0" y1="392" x2="640" y2="392" />
            </g>

            {/* Estanterías del fondo */}
            <g>
              {[0, 1, 2].map((col) => {
                const x = 36 + col * 118
                return (
                  <g key={col}>
                    <rect x={x} y="78" width="104" height="222" fill="#0e2338" stroke="#24496a" />
                    {[0, 1, 2, 3].map((row) => (
                      <g key={row}>
                        <line x1={x} y1={128 + row * 46} x2={x + 104} y2={128 + row * 46} stroke="#24496a" />
                        {[0, 1, 2, 3].map((p) => (
                          <rect
                            key={p}
                            x={x + 8 + p * 24}
                            y={128 + row * 46 - 14 - ((p + row + col) % 3) * 5}
                            width="17"
                            height={14 + ((p + row + col) % 3) * 5}
                            rx="2"
                            fill={(p + row) % 3 === 0 ? "#1b4566" : "#16374f"}
                          />
                        ))}
                      </g>
                    ))}
                  </g>
                )
              })}
            </g>

            {/* Puerta de vidrio con luz exterior */}
            <rect x="452" y="70" width="128" height="230" fill="url(#hv-door)" stroke="#2c5a78" />
            <line x1="516" y1="70" x2="516" y2="300" stroke="#2c5a78" />
            <line x1="506" y1="180" x2="506" y2="204" stroke="#6fa3c0" strokeWidth="3" strokeLinecap="round" />
            <line x1="526" y1="180" x2="526" y2="204" stroke="#6fa3c0" strokeWidth="3" strokeLinecap="round" />

            {/* Lámparas */}
            {[110, 290, 470].map((x) => (
              <g key={x}>
                <rect x={x - 34} y="22" width="68" height="6" rx="3" fill="#cfe6f5" opacity="0.55" />
                <polygon points={`${x - 34},28 ${x + 34},28 ${x + 70},120 ${x - 70},120`} fill="#cfe6f5" opacity="0.03" />
              </g>
            ))}

            {/* Persona 1: cliente en estantería (sin recuadro) */}
            <g opacity="0.9">
              <circle cx="190" cy="196" r="15" fill="#2a4e6c" />
              <path d="M166 300 C166 245 172 220 190 216 C208 220 214 245 214 300 Z" fill="#244661" />
            </g>

            {/* Persona 2: con casco, junto al mostrador */}
            <g>
              <path d="M361 172 a24 24 0 0 1 48 0 v6 h-48 z" fill="#3b6f90" />
              <rect x="361" y="176" width="48" height="5" rx="2" fill="#5b8eae" />
              <circle cx="385" cy="190" r="16" fill="#2d5675" />
              <path d="M355 318 C352 252 362 214 385 208 C408 214 418 252 415 318 Z" fill="#2a5271" />
            </g>

            {/* Mostrador en primer plano */}
            <polygon points="250,318 640,318 640,440 200,440" fill="#0b1c2e" stroke="#244866" />
            <line x1="250" y1="318" x2="640" y2="318" stroke="#3a6a8c" strokeWidth="2" />
            <rect x="520" y="292" width="62" height="26" rx="3" fill="#13304a" stroke="#2c5a78" />

            {/* Retícula técnica y viñeta */}
            <rect width="640" height="440" fill="url(#hv-grid)" />
            <rect width="640" height="440" fill="url(#hv-vignette)" />

            {/* Recuadro de detección */}
            <g
              style={{
                opacity: showBox ? 1 : 0,
                transition: "opacity 400ms ease",
              }}
            >
              <g stroke={notified ? "#18d9d0" : "#f2b544"} strokeWidth="3" fill="none" strokeLinecap="square">
                <path d="M342 160 v-16 h16" />
                <path d="M412 144 h16 v16" />
                <path d="M428 302 v16 h-16" />
                <path d="M358 318 h-16 v-16" />
              </g>
              <rect
                x="342"
                y="144"
                width="86"
                height="174"
                fill={notified ? "#18d9d0" : "#f2b544"}
                fillOpacity="0.06"
                stroke={notified ? "#18d9d0" : "#f2b544"}
                strokeOpacity="0.35"
              />
              <g transform="translate(342 120)">
                <rect width="126" height="20" rx="3" fill={notified ? "#18d9d0" : "#f2b544"} />
                <text x="8" y="14" fontSize="11" fontWeight="700" fill="#06111f" fontFamily="Inter Variable, Inter, sans-serif">
                  {verifying ? "Verificando…" : "Persona con casco"}
                </text>
              </g>
            </g>
          </svg>

          {/* Línea de barrido */}
          {shownStage === 0 && !reduced && started ? (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-full" aria-hidden="true">
              <div className="anim-scan h-24 w-full bg-gradient-to-b from-transparent via-signal/15 to-transparent" />
            </div>
          ) : null}

          {/* Tarjeta de aviso */}
          <div
            className={`absolute bottom-3 right-3 w-[min(17rem,calc(100%-1.5rem))] rounded-[var(--radius-md)] border border-line bg-night/95 p-3.5 shadow-xl transition-all duration-500 sm:bottom-4 sm:right-4 ${
              notified ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            aria-hidden={!notified}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                <Icon name="bell" size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.8125rem] font-semibold leading-snug text-ice">Evento para revisar</p>
                <p className="mt-0.5 text-[0.75rem] leading-snug text-mist">
                  Persona con casco junto al mostrador. Revisa la imagen y decide cómo actuar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline de estados */}
        <ol className="grid grid-cols-2 border-t border-line text-[0.75rem] sm:grid-cols-4" aria-label="Etapas del proceso ilustrado">
          {STAGES.map((s, i) => {
            const current = i === shownStage
            const done = i < shownStage
            return (
              <li
                key={s.key}
                aria-current={current ? "step" : undefined}
                className={`flex items-center gap-2 border-line px-3 py-2.5 transition-colors ${
                  i % 2 === 0 ? "border-r" : "sm:border-r"
                } ${i < 2 ? "border-b sm:border-b-0" : ""} ${i === 3 ? "sm:border-r-0" : ""} ${
                  current ? "bg-deep-2 text-ice" : done ? "text-mist" : "text-steel"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    current ? (s.tone === "amber" ? "bg-amber" : "bg-signal") : done ? "bg-mist" : "bg-line"
                  }`}
                />
                <span className="truncate">{s.label}</span>
              </li>
            )
          })}
        </ol>
      </div>
      <figcaption className="mt-3 text-[0.8125rem] leading-snug text-steel">
        Representación ilustrativa del flujo. No corresponde a imágenes ni datos de una cámara real.
      </figcaption>
    </figure>
  )
}
