import FullBleed from "./FullBleed"
import Reveal from "./ui/Reveal"
import { PHOTOS } from "../data/photos"
import { whatsappLink } from "../data/site"

const OTHER = [
  {
    photo: PHOTOS.servicioCamaras,
    title: "Instalación de cámaras",
    text: "Diseño e instalación profesional de sistemas de videovigilancia IP y PoE para negocios y edificios.",
  },
  {
    photo: PHOTOS.servicioDrones,
    title: "Drones y automatización",
    text: "Soluciones con drones FPV, automatización y sistemas autónomos para inspección y monitoreo.",
  },
]

export default function OtherServices() {
  return (
    <div id="services">
      <FullBleed
        photo={PHOTOS.solar}
        eyebrow="Energía solar"
        title="Sistemas solares para hogares y empresas."
        objectPosition="center 40%"
        actions={
          <>
            <a
              href={whatsappLink("Hola, quiero información sobre sistemas solares")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Cotizar un sistema solar
            </a>
            <a href="#store" className="btn btn-glass btn-lg">
              Ver kit solar
            </a>
          </>
        }
      >
        <p>
          Dimensionamiento según tu consumo, instalación on-grid y off-grid y monitoreo energético mediante plataformas
          digitales.
        </p>
      </FullBleed>

      <section aria-label="Otros servicios" className="py-20 lg:py-28">
        <Reveal className="container-x grid gap-12 md:grid-cols-2 md:gap-6">
          {OTHER.map((s) => (
            <article key={s.title}>
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={s.photo.src}
                  srcSet={s.photo.srcSet}
                  sizes={s.photo.sizes}
                  width={s.photo.width}
                  height={s.photo.height}
                  alt={s.photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-7 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-mist">{s.text}</p>
            </article>
          ))}
        </Reveal>
      </section>
    </div>
  )
}
