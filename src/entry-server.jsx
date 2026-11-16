import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Punto de entrada solo para el build: genera el HTML estático de la página.
// Debe envolver <App /> igual que src/main.jsx para que la hidratación coincida.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
