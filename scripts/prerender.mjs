// Prerenderizado en el build: inserta el HTML de <App /> dentro de
// dist/index.html para que el contenido exista sin ejecutar JavaScript.
// Se ejecuta desde "npm run build", después de los dos builds de Vite.
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = resolve(root, 'dist/index.html')
const serverEntry = resolve(root, 'dist-ssr/entry-server.js')
const PLACEHOLDER = '<div id="root"></div>'

// El navegador siempre tiene IntersectionObserver. Se declara aquí para que el
// primer render en Node tome las mismas ramas que el primer render del cliente.
globalThis.IntersectionObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const { render } = await import(pathToFileURL(serverEntry).href)
const appHtml = render()

const template = readFileSync(htmlPath, 'utf8')
if (!template.includes(PLACEHOLDER)) {
  throw new Error(`prerender: no se encontró ${PLACEHOLDER} en dist/index.html`)
}

// Cada recurso referenciado por el HTML generado debe existir en dist.
const missing = [...new Set(appHtml.match(/\/assets\/[^"' ,)]+/g) ?? [])].filter(
  (url) => !existsSync(resolve(root, 'dist', url.slice(1))),
)
if (missing.length > 0) {
  throw new Error(`prerender: recursos que no existen en dist:\n${missing.join('\n')}`)
}

writeFileSync(htmlPath, template.replace(PLACEHOLDER, () => `<div id="root">${appHtml}</div>`))
console.log(`prerender: dist/index.html generado con ${appHtml.length} caracteres de contenido`)
