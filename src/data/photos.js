// Fotografías del sitio. Las marcadas como ilustrativas fueron generadas con IA
// para este sitio: no muestran clientes, instalaciones ni cámaras reales.
import hero2048 from "../assets/foto/hero-tienda-2048.webp"
import hero1280 from "../assets/foto/hero-tienda-1280.webp"
import calle1920 from "../assets/foto/calle-noche-1920.webp"
import calle960 from "../assets/foto/calle-noche-960.webp"
import mostrador1920 from "../assets/foto/mostrador-drogueria-1920.webp"
import mostrador960 from "../assets/foto/mostrador-drogueria-960.webp"
import casco1920 from "../assets/foto/casco-1920.webp"
import casco960 from "../assets/foto/casco-960.webp"
import instalacion1920 from "../assets/foto/instalacion-1920.webp"
import instalacion960 from "../assets/foto/instalacion-960.webp"
import camara1200 from "../assets/foto/camara-domo-1200.webp"
import celular1200 from "../assets/foto/celular-alerta-1200.webp"
import celular720 from "../assets/foto/celular-alerta-720.webp"
import sectorTienda from "../assets/foto/sector-tienda-900.webp"
import sectorDrogueria from "../assets/foto/sector-drogueria-900.webp"
import sectorJoyeria from "../assets/foto/sector-joyeria-900.webp"
import sectorCelulares from "../assets/foto/sector-celulares-900.webp"
import solar1920 from "../assets/foto/solar-1920.webp"
import solar960 from "../assets/foto/solar-960.webp"
import camaras1200 from "../assets/foto/servicio-camaras-1200.webp"
import camaras720 from "../assets/foto/servicio-camaras-720.webp"
import drones1200 from "../assets/foto/servicio-drones-1200.webp"
import drones720 from "../assets/foto/servicio-drones-720.webp"

const wide = (big, small, bigW, smallW, w, h) => ({
  src: big,
  srcSet: `${small} ${smallW}w, ${big} ${bigW}w`,
  sizes: "100vw",
  width: w,
  height: h,
})

export const PHOTOS = {
  hero: {
    ...wide(hero2048, hero1280, 2048, 1280, 2048, 1152),
    alt: "Tienda de barrio iluminada al anochecer, con una cámara de seguridad sobre la entrada.",
  },
  calle: {
    ...wide(calle1920, calle960, 1920, 960, 1920, 1080),
    alt: "Calle comercial de noche con locales cerrados y uno iluminado.",
  },
  mostrador: {
    ...wide(mostrador1920, mostrador960, 1920, 960, 1920, 1080),
    alt: "Mostrador de una droguería de noche, visto desde una esquina alta del techo.",
  },
  casco: {
    ...wide(casco1920, casco960, 1920, 960, 1920, 1080),
    alt: "Casco de moto sobre el mostrador de vidrio de un local.",
  },
  instalacion: {
    ...wide(instalacion1920, instalacion960, 1920, 960, 1920, 1080),
    alt: "Técnico instalando una cámara domo en el techo de un local.",
  },
  solar: {
    ...wide(solar1920, solar960, 1920, 960, 1920, 1080),
    alt: "Paneles solares sobre la cubierta de un edificio al atardecer.",
  },
  camara: { src: camara1200, width: 1200, height: 1200, alt: "Cámara de seguridad tipo domo, de color blanco." },
  celular: {
    src: celular1200,
    srcSet: `${celular720} 720w, ${celular1200} 1100w`,
    sizes: "(min-width: 1024px) 45vw, 90vw",
    width: 1100,
    height: 1375,
    alt: "Celular mostrando un reporte de AEGIS por WhatsApp: imagen de la cámara con una persona con casco marcada y un objeto compatible con un arma, verificado por un operador. La dirección y la ubicación están ocultas.",
  },
  servicioCamaras: {
    src: camaras1200,
    srcSet: `${camaras720} 720w, ${camaras1200} 1200w`,
    sizes: "(min-width: 768px) 46vw, 92vw",
    width: 1200,
    height: 900,
    alt: "Dos cámaras de seguridad IP instaladas en la esquina exterior de un edificio.",
  },
  servicioDrones: {
    src: drones1200,
    srcSet: `${drones720} 720w, ${drones1200} 1200w`,
    sizes: "(min-width: 768px) 46vw, 92vw",
    width: 1200,
    height: 900,
    alt: "Dron sobrevolando los techos de una ciudad al atardecer.",
  },
  sectores: [
    { src: sectorTienda, name: "Tiendas y minimercados", alt: "Pasillo de una tienda de barrio con productos." },
    { src: sectorDrogueria, name: "Droguerías", alt: "Estantes de una droguería con cajas de medicamentos." },
    { src: sectorJoyeria, name: "Joyerías y relojerías", alt: "Vitrina de joyería con collares y relojes." },
    { src: sectorCelulares, name: "Tecnología y celulares", alt: "Vitrina de una tienda de celulares." },
  ],
}
