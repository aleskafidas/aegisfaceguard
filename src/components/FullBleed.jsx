import useScrollProgress from "../hooks/useScrollProgress"

// Sección a pantalla completa con fotografía (estilo Tesla). La foto se acerca
// lentamente mientras la sección atraviesa la pantalla.
export default function FullBleed({ id, photo, eyebrow, title, children, align = "left", actions, objectPosition }) {
  const ref = useScrollProgress()
  const right = align === "right"

  return (
    <section ref={ref} id={id} className="bleed shadow-text flex min-h-[100svh] items-end">
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={photo.sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="bleed-img parallax-zoom"
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-[1] ${
          right
            ? "bg-[linear-gradient(to_left,rgba(6,17,31,0.9)_0%,rgba(6,17,31,0.58)_40%,rgba(6,17,31,0)_72%)]"
            : "bg-[linear-gradient(to_right,rgba(6,17,31,0.9)_0%,rgba(6,17,31,0.58)_40%,rgba(6,17,31,0)_72%)]"
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-[1] bg-[linear-gradient(to_bottom,#06111f_0%,rgba(6,17,31,0)_16%,rgba(6,17,31,0.15)_32%,rgba(6,17,31,0.88)_58%,rgba(6,17,31,0.97)_100%)] lg:bg-[linear-gradient(to_bottom,#06111f_0%,rgba(6,17,31,0)_18%,rgba(6,17,31,0)_55%,rgba(6,17,31,0.92)_100%)]"
      />

      <div className={`container-x pb-[12vh] pt-40 ${right ? "flex justify-end" : ""}`}>
        <div className="max-w-xl">
          {eyebrow ? <p className="text-[0.9375rem] font-semibold text-signal">{eyebrow}</p> : null}
          <h2 className="t-section mt-3">{title}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ice/80">{children}</div>
          {actions ? <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
        </div>
      </div>
    </section>
  )
}
