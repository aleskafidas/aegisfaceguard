import Icon from "./ui/Icon"
import { PHOTOS } from "../data/photos"

// Visor del recorrido "De la cámara a tu decisión". Usa una fotografía
// ILUSTRATIVA (PHOTOS.casco) y dibuja encima los recuadros de cada etapa. Los
// recuadros ilustran el flujo: no son datos ni detecciones de una cámara real,
// y no se muestran porcentajes ni cifras.
//
// PARA CAMBIAR LA IMAGEN (p. ej. un fotograma del video nuevo): cambia `frame`
// y ajusta en BOXES la posición de cada recuadro, en porcentajes de la imagen.
//
// `stage` (0-4) lo controla la sección según el paso visible:
// 0 captura · 1 análisis · 2 verificación · 3 aviso · 4 decisión humana

const STAGES = [
  { key: "analisis", label: "Análisis", amber: false },
  { key: "evento", label: "Posible evento", amber: true },
  { key: "verificacion", label: "Verificación IA", amber: true },
  { key: "aviso", label: "Aviso", amber: false },
  { key: "decision", label: "Decisión", amber: false },
]

const frame = PHOTOS.casco

// Posición de cada recuadro en porcentajes de la imagen (16:9)
const BOXES = [{ key: "casco", label: "Casco", style: { left: "11.5%", top: "8%", width: "49%", height: "83%" } }]

const ACTIONS = ["Activar sirena", "Enviar reporte", "Resolver"]

export default function HeroVisual({ stage = 3, caption = true }) {
  const showBoxes = stage >= 1
  const verifying = stage === 2
  const notified = stage >= 3
  const deciding = stage >= 4

  return (
    <figure className="relative m-0">
      <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-line bg-deep shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
        {/* Escena */}
        <div className="relative aspect-video">
          <img
            src={frame.src}
            srcSet={frame.srcSet}
            sizes="(min-width: 1024px) 60vw, 100vw"
            width={frame.width}
            height={frame.height}
            alt={frame.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Barrido mientras solo se captura */}
          {stage === 0 ? (
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="anim-scan h-1/4 w-full bg-gradient-to-b from-transparent via-signal/20 to-transparent" />
            </div>
          ) : null}

          {/* Recuadros de detección */}
          <div aria-hidden="true">
            {BOXES.map((b) => (
              <div
                key={b.key}
                className={`lock ${showBoxes ? "is-on" : ""} ${notified ? "is-clear" : ""}`}
                style={b.style}
              >
                <div className="lock-box" />
                <span className="lock-corner" />
                <span className="lock-corner" />
                <span className="lock-corner" />
                <span className="lock-corner" />
                <div className={`lock-chip hud !text-[0.6875rem] sm:!text-[0.8125rem] ${b.chipBelow ? "is-below" : ""}`}>
                  <span>{verifying ? "Verificando…" : b.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tarjeta de aviso y acciones del operador */}
          <div
            className={`absolute bottom-2 right-2 w-[min(19rem,calc(100%-1rem))] rounded-[var(--radius-sm)] border border-line bg-night/95 p-3 shadow-xl transition-all duration-500 sm:bottom-4 sm:right-4 sm:p-3.5 ${
              notified ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            aria-hidden="true"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-signal/15 text-signal">
                <Icon name="bell" size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.8125rem] font-semibold leading-snug text-ice">Evento para revisar</p>
                <p className="mt-0.5 hidden text-[0.75rem] leading-snug text-mist sm:block">
                  Revisa la imagen y decide cómo actuar.
                </p>
              </div>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-500 ${
                deciding ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="hud flex min-h-0 flex-wrap gap-1.5 text-[0.75rem]">
                {ACTIONS.map((a, i) => (
                  <li
                    key={a}
                    className={`rounded-[4px] px-2 py-1.5 ${
                      i === 0 ? "bg-signal text-night" : "border border-line text-ice"
                    }`}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Etapas */}
        <ol className="hud flex border-t border-line text-[0.75rem] sm:grid sm:grid-cols-5 sm:text-[0.8125rem]" aria-label="Etapas del proceso ilustrado">
          {STAGES.map((s, i) => {
            const current = i === stage
            const done = i < stage
            return (
              <li
                key={s.key}
                aria-current={current ? "step" : undefined}
                className={`flex items-center justify-center gap-2 border-line px-3 py-2.5 transition-colors sm:justify-start ${
                  i < STAGES.length - 1 ? "border-r" : ""
                } ${current ? "flex-1 bg-deep-2 text-ice" : done ? "w-10 text-mist sm:w-auto" : "w-10 text-steel sm:w-auto"}`}
              >
                <span
                  aria-hidden="true"
                  className={`hidden h-1.5 w-1.5 shrink-0 rounded-full sm:block ${
                    current ? (s.amber ? "bg-amber" : "bg-signal") : done ? "bg-mist" : "bg-line"
                  }`}
                />
                {/* En móvil solo la etapa actual muestra su nombre; las demás, su número */}
                <span className={current ? "truncate" : "hidden truncate sm:inline"}>{s.label}</span>
                {current ? null : <span className="sm:hidden">{i + 1}</span>}
              </li>
            )
          })}
        </ol>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[0.8125rem] leading-snug text-steel">
          Imagen ilustrativa. Los recuadros representan el flujo; no son datos de una cámara real.
        </figcaption>
      ) : null}
    </figure>
  )
}
