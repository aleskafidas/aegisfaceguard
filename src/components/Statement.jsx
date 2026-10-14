import useScrollProgress from "../hooks/useScrollProgress"

const TEXT =
  "Tus cámaras graban todo el día, pero nadie alcanza a mirarlas. AEGIS las analiza por ti y te avisa cuando algo merece tu atención."

// Frase fija en pantalla cuyas palabras se encienden mientras bajas (estilo Apple).
export default function Statement() {
  const ref = useScrollProgress({ mode: "sticky" })
  const words = TEXT.split(" ")

  return (
    <section ref={ref} aria-label="Qué hace AEGIS" className="relative h-[190vh]">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <p className="container-x t-mega max-w-6xl text-ice">
          {words.map((w, i) => (
            <span key={i} className="word" style={{ "--i": (i / words.length).toFixed(3) }}>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
