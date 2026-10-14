import { PHOTOS } from "../data/photos"

// Portada estilo Tesla: foto a pantalla completa, titular arriba, acciones abajo.
export default function Hero() {
  const p = PHOTOS.hero
  return (
    <section id="inicio" className="bleed shadow-text flex h-[100svh] min-h-[600px] flex-col">
      <img
        src={p.src}
        srcSet={p.srcSet}
        sizes={p.sizes}
        width={p.width}
        height={p.height}
        alt={p.alt}
        fetchPriority="high"
        decoding="async"
        className="bleed-img object-[42%_center]"
      />
      {/* Oscurece arriba (texto) y abajo (transición a la siguiente sección) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-[1] bg-[linear-gradient(to_bottom,rgba(6,17,31,0.85)_0%,rgba(6,17,31,0.3)_30%,rgba(6,17,31,0.12)_42%,rgba(6,17,31,0.85)_62%,rgba(6,17,31,0.96)_78%,#06111f_100%)] sm:bg-[linear-gradient(to_bottom,rgba(6,17,31,0.85)_0%,rgba(6,17,31,0.35)_34%,rgba(6,17,31,0.08)_48%,rgba(6,17,31,0.6)_66%,rgba(6,17,31,0.9)_80%,#06111f_100%)]"
      />

      <div className="container-x flex flex-1 flex-col items-center pt-[16vh] text-center sm:pt-[18vh]">
        <p className="anim-rise text-[0.8125rem] font-semibold tracking-[0.22em] text-signal">SEGURIDAD INTELIGENTE CON IA</p>
        <h1 className="t-hero anim-rise mt-5 max-w-5xl text-ice [animation-delay:120ms]">
          Anticípate a los riesgos.
          <br />
          Protege tu negocio.
        </h1>

        <p className="anim-rise mt-auto max-w-xl text-[1.0625rem] leading-relaxed text-ice/90 [animation-delay:240ms] sm:text-xl">
          Inteligencia artificial que analiza eventos de seguridad y te ayuda a actuar a tiempo.
        </p>
        <div className="anim-rise mt-7 mb-[8vh] flex w-full flex-col gap-3 [animation-delay:360ms] sm:w-auto sm:flex-row">
          <a href="#contact" className="btn btn-primary btn-lg sm:min-w-56">
            Solicitar demostración
          </a>
          <a href="#solutions" className="btn btn-glass btn-lg sm:min-w-56">
            Conocer la tecnología
          </a>
        </div>
      </div>
    </section>
  )
}
