import useScrollProgress from "../hooks/useScrollProgress"
import { PHOTOS } from "../data/photos"

const POINTS = [
  { title: "Sin reconocimiento facial", text: "Detecta personas sin identificar quiénes son. No usa biometría." },
  { title: "Verificación por IA", text: "Un segundo análisis revisa cada posible evento antes de avisarte." },
  { title: "Alertas con imagen", text: "Llegan al panel de operación y a la app móvil." },
]

// Momento de producto (estilo Apple): la cámara crece y se aclara con el scroll.
export default function Product() {
  const ref = useScrollProgress()
  const cam = PHOTOS.camara

  return (
    <section ref={ref} aria-labelledby="producto-titulo" className="cv-auto relative overflow-hidden bg-[linear-gradient(to_bottom,#06111f_0%,#17161c_14%,#1c1c23_55%,#2a2b34_100%)] py-28 lg:py-40">
      <div className="container-x text-center">
        <h2 id="producto-titulo" className="t-section mx-auto max-w-4xl">
          Tus cámaras, con análisis inteligente.
        </h2>
        <p className="t-lead mx-auto mt-6 max-w-2xl text-mist">
          Instalamos cámaras IP o evaluamos las que ya tienes. Un dispositivo en el local las conecta con el análisis.
        </p>
      </div>

      <div className="relative mx-auto mt-6 w-[min(88vw,40rem)]">
        <img
          src={cam.src}
          width={cam.width}
          height={cam.height}
          alt={cam.alt}
          loading="lazy"
          decoding="async"
          className="relative w-full [mask-image:radial-gradient(closest-side,black_62%,transparent_100%)]"
          style={{
            transform: "scale(calc(0.78 + min(var(--p, 0) * 2, 1) * 0.22))",
            opacity: "calc(0.35 + min(var(--p, 0) * 2.4, 1) * 0.65)",
          }}
        />
      </div>

      <dl className="container-x mt-6 grid gap-10 text-center sm:grid-cols-3 lg:mt-10">
        {POINTS.map((p) => (
          <div key={p.title}>
            <dt className="font-display text-xl font-bold tracking-[-0.02em] text-ice">{p.title}</dt>
            <dd className="mx-auto mt-2 max-w-[18rem] text-mist">{p.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
