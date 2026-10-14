import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Capabilities from "./components/Capabilities"
import Sectors from "./components/Sectors"
import Implementation from "./components/Implementation"
import OtherServices from "./components/OtherServices"
import Store from "./components/Store"
import About from "./components/About"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsappButton from "./components/WhatsappButton"

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Capabilities />
        <Sectors />
        <Implementation />
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
