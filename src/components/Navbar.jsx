import logo from "../assets/logoaegis.png"
export default function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-b border-sky-500/10">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div>

          <div className="flex items-center gap-4">

            <img
                src={logo}
                alt="Aegis FaceGuard"
                className="h-16 object-contain"
            />

            <h1 className="text-2xl font-black text-slate-900">
                AEGIS <span className="text-sky-400">FACEGUARD</span>
            </h1>

            </div>

        </div>

        <div className="hidden md:flex gap-10 text-slate-700">

          <a href="#" className="hover:text-sky-400 transition">
            Inicio
          </a>

          <a href="#services" className="hover:text-sky-400 transition">
            Servicios
          </a>

          <a href="#" className="hover:text-sky-400 transition">
            Tecnología
          </a>

          <a href="#" className="hover:text-sky-400 transition">
            Contacto
          </a>

        </div>

        <button className="bg-sky-400 hover:bg-sky-300 transition px-6 py-3 rounded-xl text-black font-bold">
          Demo
        </button>

      </div>

    </nav>

  )
}