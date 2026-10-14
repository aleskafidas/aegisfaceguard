import HeroVisual from "./HeroVisual"

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Profundidad discreta: un solo halo y una retícula muy tenue */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 right-[-15%] h-[48rem] w-[48rem] bg-[radial-gradient(closest-side,rgba(24,217,208,0.09),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,53,80,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,53,80,0.16)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-6 inline-flex items-center gap-2.5 text-[0.75rem] font-semibold tracking-[0.18em] text-signal">
            <span className="h-px w-8 bg-signal" aria-hidden="true" />
            SEGURIDAD INTELIGENTE CON IA
          </p>

          <h1 className="t-display text-ice">Anticípate a los riesgos. Protege tu negocio.</h1>

          <p className="t-lead mt-7 max-w-[34rem] text-mist">
            Inteligencia artificial que analiza eventos de seguridad y te ayuda a actuar a tiempo.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              Solicitar demostración
            </a>
            <a href="#solutions" className="btn btn-ghost">
              Conocer la tecnología
            </a>
          </div>

          <p className="mt-10 max-w-[34rem] border-l border-line pl-4 text-[0.875rem] leading-relaxed text-steel">
            Detección de armas y de personas con casco en las cámaras de tu local. Sin biometría ni reconocimiento
            facial.
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
