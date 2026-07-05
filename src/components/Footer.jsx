import logo from "../assets/logoaegis.png"

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-line px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="AEGIS FaceGuard" className="h-10 object-contain" />
            <span className="font-display font-extrabold text-lg tracking-tight">
              AEGIS <span className="text-accent">FACEGUARD</span>
            </span>
          </div>
          <p className="text-paper/50 text-sm leading-relaxed max-w-xs">
            Videovigilancia con inteligencia artificial para negocios en
            Colombia. Sin biometría ni reconocimiento facial.
          </p>
        </div>

        <div>
          <p className="text-paper/50 text-xs uppercase tracking-[0.2em] mb-4">
            Navegación
          </p>
          <ul className="space-y-2 text-paper/70 text-sm">
            <li><a href="#inicio" className="hover:text-paper transition-colors">Inicio</a></li>
            <li><a href="#services" className="hover:text-paper transition-colors">Servicios</a></li>
            <li><a href="#solutions" className="hover:text-paper transition-colors">Tecnología</a></li>
            <li><a href="#store" className="hover:text-paper transition-colors">Tienda</a></li>
            <li><a href="#contact" className="hover:text-paper transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <p className="text-paper/50 text-xs uppercase tracking-[0.2em] mb-4">
            Contacto
          </p>
          <ul className="space-y-2 text-paper/70 text-sm">
            <li>admin@aegisfaceguard.com</li>
            <li>WhatsApp: +57 300 396 6155</li>
            <li>Sabaneta, Antioquia — Colombia</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-line mt-12 pt-6">
        <p className="text-paper/40 text-xs">
          © {new Date().getFullYear()} AEGIS FaceGuard. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
