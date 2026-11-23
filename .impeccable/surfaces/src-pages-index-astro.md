---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Home (portafolio de Alex)

Scope: `src/pages/index.astro` y sus componentes. Modo: Experience (la obra va primero).
Audiencia: reclutadores/pasantías, docentes, comunidad dev. Acción: entrar a un proyecto o contactar a Alex (GitHub, LinkedIn, correo).
Proof/content: 3 repos reales (carrier-cli, port_scan, little-bit-of-asm), avatar de GitHub, READMEs honestos. No inventar métricas ni clientes.
Constraints: sitio estático Astro; tests existentes deben seguir pasando; `prefers-reduced-motion` con versión estática; contenido legible sin JS.
Unresolved: confirmar el correo público; tipografías definitivas se fijan al construir.

## Direction contract

THESIS: Cada proyecto es una página de fanzine fotocopiado pegada a mano sobre un pliego; el portafolio rechaza la grilla de tarjetas iguales y el hero con botón.

OWN-WORLD: Papel prensa (#f1ede2), toner negro (#111), tintas riso fluorescentes (rosa #ff3b8d, azul #2f45ff, amarillo marcador #ffe83a), cinta, semitono, letras recortadas de distinto cuerpo y rotación, etiquetas de estado como cartelitos. Reconocible con todo el texto quitado: recortes con cinta y puntos de semitono sobre papel.

STORY: Quien llega entiende en un vistazo quién es Alex y que tiene tres proyectos reales; cree en ellos porque cada uno declara su estado con honestidad; entra al repo o escribe por GitHub, LinkedIn o correo.

FIRST VIEWPORT: Pliego a pantalla completa. Izquierda y centro: "Hola, soy Alex Joshua Villegas Ibanez" en letras recortadas (display grande, cada palabra con su cuerpo y ángulo); derecha: avatar de GitHub en semitono rosa/azul pegado con cinta. Debajo del nombre, el rol y la bio; la acción primaria "Ver proyectos" como pegatina amarilla, GitHub y LinkedIn como pegatinas secundarias. Al borde inferior asoma la primera página (P101) pegada con cinta.

FORM: Fanzine de fotocopia y tijera (candidata 3 de mi lista; seed:c8191121aac0c254). Raises: de Teletexto, direccionamiento estricto (P101, P102, P103 como única grilla rígida); de Videoclub, etiquetas de estado honestas sobre cada pieza. Movimiento: los recortes del título se pegan una vez al cargar (desplazamiento y giro que se asientan con ease-out exponencial); cada página se asienta con distinto ángulo al entrar en vista; hover levanta la pieza. Firma: un escaneo de fotocopiadora (barra de luz) sobre el avatar una sola vez.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
