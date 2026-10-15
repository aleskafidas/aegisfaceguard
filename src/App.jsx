import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Statement from "./components/Statement"
import HowItWorks from "./components/HowItWorks"
import DemoVideo from "./components/DemoVideo"
import FullBleed from "./components/FullBleed"
import Product from "./components/Product"
import Alerts from "./components/Alerts"
import Sectors from "./components/Sectors"
import Implementation from "./components/Implementation"
import Limits from "./components/Limits"
import OtherServices from "./components/OtherServices"
import Store from "./components/Store"
import About from "./components/About"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsappButton from "./components/WhatsappButton"
import { PHOTOS } from "./data/photos"

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Statement />
        <HowItWorks />
        <DemoVideo />
        <FullBleed id="capacidades" photo={PHOTOS.mostrador} eyebrow="Capacidades" title="Detección de armas.">
          <p>
            Visión artificial que busca objetos compatibles con un arma en las imágenes de tus cámaras. Si el evento se
            mantiene tras la verificación, recibes el aviso con la imagen.
          </p>
          <p className="text-base text-ice/65">
            El aviso describe un posible evento, no un hecho confirmado. La revisión final siempre la hace una persona.
          </p>
        </FullBleed>
        <FullBleed photo={PHOTOS.casco} title="Personas con casco." align="right" objectPosition="40% center">
          <p>Identifica a quien entra o permanece con casco puesto en tu local, para que lo atiendas a tiempo.</p>
        </FullBleed>
        <Product />
        <Alerts />
        <Sectors />
        <Implementation />
        <Limits />
        <OtherServices />
        <Store />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
