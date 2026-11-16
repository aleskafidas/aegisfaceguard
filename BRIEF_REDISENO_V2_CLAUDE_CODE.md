# BRIEF — Rediseño v2 AEGIS FaceGuard (para Claude Code)

Copia este documento en la raíz del proyecto y dile a Claude Code:
"Lee BRIEF_REDISENO_V2_CLAUDE_CODE.md y ejecútalo fase por fase. Detente al final de cada fase para que yo verifique en el navegador antes de continuar."

---

## CONTEXTO

- Proyecto: React 19 + Vite + Tailwind CSS 4 + framer-motion. SPA de una sola página (`src/App.jsx` compone secciones).
- Ya existe un sistema de diseño editorial en `src/index.css` con tokens `@theme`: `--color-ink` (fondo oscuro), `--color-paper` (fondo claro), `--color-accent` / `--color-accent-dark`, `--font-display` (Archivo), `--font-body` (Inter). ÚSALO. No introduzcas colores hardcodeados nuevos.
- El sitio alterna secciones oscuras (`bg-ink text-paper`) y claras (`bg-paper text-ink`).
- Despliegue: Cloudflare Pages, repo GitHub `aleskafidas/aegisfaceguard`, rama `main`.

## REGLAS ESTRICTAS (no negociables)

1. NO inventes datos: nada de testimonios falsos, logos de clientes inexistentes, métricas no confirmadas ni certificaciones. Donde falte un dato real, usa el marcador `[PENDIENTE: descripción]` y repórtalo al final de la fase.
2. NO toques la lógica de pago ePayco en `Store.jsx` (handler, key, campos de facturación) ni el embed de HubSpot en `Contact.jsx` (portal 51451800, form c7562fc4-4540-44ea-819c-749031e8998f). Solo puedes cambiar sus estilos.
3. NO uses lenguaje de "reconocimiento facial" ni biometría como capacidad del producto. La única mención permitida es la negación: "Sin biometría ni reconocimiento facial — cumplimiento Ley 1581".
4. NO agregues dependencias nuevas sin justificarlo primero y pedir aprobación. Con framer-motion + Tailwind alcanza para todo lo descrito aquí.
5. Al final de CADA fase: `npm run build` debe pasar sin errores, y haces un commit con mensaje descriptivo. No mezcles fases en un commit.
6. Mobile-first: cada componente se verifica en 375px y en 1440px. El menú móvil del Navbar debe seguir funcionando.
7. Accesibilidad mínima: contraste AA en textos sobre fondos, `aria-label` en botones de ícono, `prefers-reduced-motion` respetado (envuelve animaciones decorativas).
8. No afirmes que algo "se ve bien" sin haberlo verificado; el usuario valida visualmente cada fase en `npm run dev`.

---

## FASE 0 — VERIFICAR PIPELINE DE DEPLOY (bloqueante)

Problema conocido: se hizo push del commit `22aadfc` a `main` en GitHub, pero producción (`aegisfaceguard.com` y `aegisfaceguard.pages.dev`) sigue sirviendo la versión anterior.

1. Pregunta al usuario qué muestra el dashboard de Cloudflare: Workers & Pages → aegisfaceguard → Deployments (¿el último deployment corresponde a `22aadfc`? ¿estado verde o rojo?) y Settings → Builds & deployments (¿está conectado a GitHub? ¿production branch = `main`?).
2. Si el proyecto NO está conectado a GitHub (fue Direct Upload): despliega manualmente con
   ```
   npm run build
   npx wrangler pages deploy dist --project-name aegisfaceguard
   ```
   y recomienda conectar el repo desde el dashboard para futuros pushes.
3. Si está conectado pero el build falló: lee el log de build del dashboard (lo pega el usuario) y corrige la causa raíz. Causa probable en Pages: build command debe ser `npm run build` y output directory `dist`.
4. No avances a Fase 1 hasta que el usuario confirme que producción muestra el título "AEGIS FaceGuard | Seguridad Inteligente con IA" en la pestaña.

## FASE 1 — HERO CON PRODUCTO + TIPOGRAFÍA ESCALADA

Archivo: `src/components/Hero.jsx`.

1. Escala el H1 con `clamp()`: en Tailwind 4 usa clase arbitraria `text-[clamp(2.75rem,7vw,5.5rem)]`, `leading-[0.98]`, `tracking-tight`. Mantén el copy actual.
2. Reemplaza el bloque de video full-width por una composición de dos columnas en desktop (columna texto + columna producto):
   - Columna producto: un mockup de teléfono construido en HTML/CSS (marco redondeado `rounded-[2.5rem]`, borde `border-line`, notch simple) mostrando una tarjeta de alerta push: ícono de escudo, título "AEGIS — Alerta verificada", texto "Persona detectada en Entrada principal · Confirmada por IA", hora. Nada de imágenes externas ni librerías de mockups.
   - Detrás del teléfono, el video actual (`security.mp4`) reducido, con `opacity` baja y máscara de degradado hacia `ink`, como capa ambiental. Si en móvil satura, ocúltalo (`hidden md:block`).
3. Textura de grano: agrega en `index.css` una clase `.grain` con un `background-image` SVG inline de ruido (feTurbulence) a opacidad ≤ 0.04, aplicada solo a secciones `bg-ink`. Verifica que no cause banding ni pese en render.
4. Barra de confianza bajo el hero: fila horizontal con los 3 respaldos existentes (Antójate de Antioquia, Impúlsate Sabaneta, Ruta del Emprendimiento — los logos están en `src/assets/partners/`) en escala de grises, tamaño pequeño, label "Respaldados por". NO agregues logos de empresas que no estén en esa carpeta.

## FASE 2 — BENTO GRID DE CAPACIDADES

Reemplaza el grid uniforme de `Solutions.jsx` (bloque "Qué incluye la plataforma") por un bento grid, manteniendo los 3 pasos Detecta/Verifica/Alerta arriba.

1. Grid `md:grid-cols-6` con celdas de tamaños mixtos (`md:col-span-4`, `md:col-span-2`, `md:row-span-2`), `gap-4`, tarjetas `rounded-xl border border-line bg-ink-2`.
2. Contenido de las celdas (todo con datos ya confirmados, nada inventado):
   - Celda grande: la tarjeta "Ejemplo de alerta" que ya existe, ampliada.
   - Celda: "Verificación por IA de cada evento" con animación sutil de un check apareciendo (framer-motion, respeta reduced-motion).
   - Celda: "Compatible con cámaras IP y NVR existentes".
   - Celda: "Alertas a tu celular" (ícono push).
   - Celda: "Sin biometría — Ley 1581" (ícono candado).
   - Celda: "Monitoreo 24/7".
3. Hover: elevación sutil (`hover:border-paper/25 transition`), sin glows ni sombras de color.

## FASE 3 — SECCIÓN DE PRECIOS (nueva)

Nuevo componente `src/components/Pricing.jsx`, insertado en `App.jsx` después de `WhyAegis` y antes de `Partners`. Sección clara (`bg-paper`).

1. Tres tarjetas: BÁSICO / PROFESIONAL / PREMIUM. La del medio destacada (`border-accent-dark`, badge "Recomendado").
2. TODOS los precios y límites (nº de cámaras, características por plan) van como `[PENDIENTE: precio plan X en COP]` y `[PENDIENTE: características plan X]`. Pide al usuario los valores reales de su modelo de costos antes de commitear esta fase; si no los tiene a mano, commitea con los marcadores visibles y déjalo anotado.
3. Precios en COP con nota "/mes por cámara" o la unidad que el usuario confirme. CTA de cada tarjeta → ancla `#contact`.
4. Nota bajo las tarjetas: "Hardware financiable con Addi" solo si el usuario lo confirma como vigente; si no, omitir.

## FASE 4 — COMPARATIVA "AEGIS VS. ALARMA TRADICIONAL" (nueva)

Nuevo componente `src/components/Comparison.jsx`, sección oscura, después de `Pricing`.

1. Tabla de dos columnas comparando dimensiones donde la diferencia es objetiva y defendible: tiempo de detección (durante el evento vs. después), verificación del evento (IA por evento vs. sin verificación / verificación humana costosa), falsas alarmas, evidencia (imagen del evento vs. ninguna), instalación sobre cámaras existentes.
2. En móvil colapsa a tarjetas apiladas, no tabla con scroll horizontal.
3. Redacción sobria: afirmaciones verificables, sin superlativos ("el mejor", "único"). Si una afirmación depende de configuración del cliente, matízala.

## FASE 5 — FAQ + CONTADORES + MARQUEE

1. Nuevo `src/components/Faq.jsx` (sección clara, antes de `Contact`): acordeón con `<details>/<summary>` nativos estilizados (sin librería). Preguntas: cómo funciona con mis cámaras actuales; qué pasa con mis datos e imágenes (respuesta debe mencionar Ley 1581 y no-biometría); qué necesito para instalarlo; funciona sin internet estable; cómo recibo las alertas. Respuestas: redáctalas y márcalas para revisión del usuario — él valida el contenido técnico/legal antes del commit.
2. Contadores animados en `WhyAegis.jsx`: anima los números al entrar en viewport con framer-motion (`useInView` + animación de valor). Respeta reduced-motion (mostrar valor final sin animar).
3. Marquee de respaldos en `Partners.jsx`: fila con desplazamiento horizontal continuo en CSS (`@keyframes`, `animation-play-state: paused` en hover, oculta bajo reduced-motion). Solo los 3 logos reales duplicados para el loop.

## FASE 6 — PULIDO FINAL Y PERFORMANCE

1. Comprime imágenes pesadas: `gallery1.jpg` (5.3 MB), `gallery2.jpg` (6.9 MB), `solar1.png` (1.9 MB) → convierte a WebP ≤ 400 KB manteniendo dimensiones razonables (máx. 1600px de ancho). Usa `sharp` vía script Node one-off o pide al usuario hacerlo con Squoosh si prefieres no agregar tooling. Actualiza imports.
2. `loading="lazy"` en toda imagen fuera del viewport inicial (verifica que ya esté; añade donde falte).
3. Revisa el peso del bundle: si `security.mp4` (5.6 MB) sigue en el hero como capa ambiental, evalúa `preload="none"` + poster, o recórtalo/comprímelo.
4. Corre Lighthouse en el build de producción local (`npm run build && npx vite preview`) y reporta los 4 scores reales al usuario. No optimices a ciegas: reporta primero, propone después.
5. Commit final y push. Verificar despliegue en producción (Fase 0 ya garantizó el pipeline).

## CRITERIO DE ÉXITO GLOBAL

- Build pasa en todas las fases; producción actualizada al final.
- Cero datos inventados publicados: todos los `[PENDIENTE]` resueltos o visibles para el usuario.
- Lighthouse Performance ≥ 85 en móvil tras Fase 6 (reportar el valor real, sea cual sea).
- El usuario validó visualmente cada fase en `npm run dev` antes de su commit.
