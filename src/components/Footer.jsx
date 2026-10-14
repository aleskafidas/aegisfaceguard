import emblem from "../assets/brand/emblem-tile.png"
import { CONTACT, NAV_LINKS, whatsappLink } from "../data/site"

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-night">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3" aria-label="AEGIS FaceGuard, ir al inicio">
            <img src={emblem} alt="" width="40" height="40" loading="lazy" className="h-10 w-10 rounded-[8px]" />
            <span className="font-display text-lg font-extrabold tracking-[-0.02em] text-ice">
              AEGIS <span className="font-semibold text-mist">FaceGuard</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-mist">
            Seguridad inteligente con IA para negocios en Colombia. Sin biometría ni reconocimiento facial.
          </p>
        </div>

        <nav aria-label="Secundaria">
          <h2 className="text-[0.8125rem] font-semibold text-steel font-body">Navegación</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a href="#inicio" className="text-mist hover:text-ice">
                Inicio
              </a>
            </li>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-mist hover:text-ice">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-mist hover:text-ice">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.8125rem] font-semibold text-steel font-body">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="break-all text-mist hover:text-ice">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-ice">
                WhatsApp: {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li className="text-mist">{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-x border-t border-line-soft pt-6 pb-24 sm:pb-6">
        <p className="text-[0.8125rem] text-steel">
          © {new Date().getFullYear()} AEGIS FaceGuard. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
