---
name: Portafolio de Alex Joshua Villegas Ibanez
description: Fanzine fotocopiado sobre papel prensa, con tintas riso fluorescentes, letras recortadas y cinta.
colors:
  newsprint: "#f1ede2"
  paper-sheet: "#faf7ee"
  paper-shade: "#e4ddca"
  toner: "#111111"
  toner-soft: "#3b3731"
  riso-pink: "#ff3b8d"
  riso-blue: "#2f45ff"
  highlighter-yellow: "#ffe83a"
typography:
  display:
    fontFamily: "Bowlby One, Arial Black, sans-serif"
    fontSize: "6rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  headline:
    fontFamily: "Bowlby One, Arial Black, sans-serif"
    fontSize: "2.8rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  cut-serif:
    fontFamily: "Abril Fatface, Georgia, serif"
    fontSize: "3.4rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
  label-sm:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
  nav:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    lineHeight: 1.6
  ui:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.1
  lead-sm:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.45
  lead:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1.45
  cut-sm:
    fontFamily: "Bowlby One, Arial Black, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  none: "0px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  card-pad: "clamp(1.1rem, 2.4vw, 1.6rem)"
  section: "clamp(3rem, 8vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.highlighter-yellow}"
    textColor: "{colors.toner}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.15rem"
  button-primary-hover:
    backgroundColor: "{colors.riso-pink}"
  button-secondary:
    backgroundColor: "{colors.paper-sheet}"
    textColor: "{colors.toner}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.15rem"
  page-card:
    backgroundColor: "{colors.paper-sheet}"
    textColor: "{colors.toner}"
    rounded: "{rounded.none}"
    padding: "{spacing.card-pad}"
  cut-word:
    backgroundColor: "{colors.riso-pink}"
    textColor: "{colors.toner}"
    typography: "{typography.display}"
    padding: "0.12em 0.28em 0.16em"
  section-title:
    backgroundColor: "{colors.toner}"
    textColor: "{colors.newsprint}"
    typography: "{typography.headline}"
    padding: "0.2em 0.5em 0.24em"
  skill-label:
    backgroundColor: "{colors.toner}"
    textColor: "{colors.newsprint}"
    typography: "{typography.label}"
    padding: "0.75rem 1.1rem"
  tag-pill:
    textColor: "{colors.toner}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.8rem"
---

# Design System: Portafolio de Alex Joshua Villegas Ibanez

## Overview

**Creative North Star: "Fotocopia y tijera"**

Cada pieza es un recorte pegado a mano sobre un pliego de papel prensa: letras cortadas de distinto cuerpo y ángulo, páginas con cinta, puntos de semitono y tintas riso fluorescentes. El sistema es de luz (papel claro, toner negro) porque un fanzine se lee sobre papel; el color no decora, ocupa regiones enteras (discos de semitono, la sección de contacto en azul riso, etiquetas de color sólido).

Tiene una sola grilla rígida bajo el desorden: las páginas llevan direcciones fijas (P101, P102, P103) y cada proyecto declara su estado con un cartelito honesto. Lo que el usuario rechazó explícitamente fue el diseño de plantilla: fondo oscuro con una grilla de tarjetas iguales.

**Key Characteristics:**
- Papel prensa claro como suelo; negro de toner para texto; tres tintas riso (rosa, azul, amarillo) como rellenos de región, nunca como texto sobre papel.
- Letras recortadas con tres voces tipográficas mezcladas por palabra.
- Cada pieza tiene su propio ángulo (`rotate` individual); el movimiento ocurre en `translate`, `scale` y `rotate`, no en el contenido.
- Todo el movimiento está detrás de `prefers-reduced-motion: no-preference` y el contenido se ve igual sin él.

## Colors

Paleta riso sobre papel: un neutro cálido, un negro de toner y tres tintas saturadas de uso por región.

### Primary
- **Rosa riso** (#ff3b8d): relleno del recorte principal, etiquetas de estado, discos de semitono. Texto sobre él siempre en toner (≈5.8:1).

### Secondary
- **Azul riso** (#2f45ff): sección de contacto completa, recorte serif del apellido, semitono de la segunda tinta del glifo. Texto sobre él siempre en papel (≈6.6:1).
- **Amarillo marcador** (#ffe83a): acción principal, cinta adhesiva, resaltado al pasar sobre un enlace. Texto en toner.

### Neutral
- **Papel prensa** (#f1ede2): suelo de toda la página y texto sobre fondos oscuros.
- **Hoja de papel** (#faf7ee): superficie de las páginas pegadas, el glifo y los botones secundarios.
- **Sombra de papel** (#e4ddca): fondo de las ilustraciones y de la sección de habilidades.
- **Toner** (#111111): texto, bordes de 2px, etiquetas oscuras, pie de página.
- **Toner suave** (#3b3731): texto secundario (≈10:1 sobre papel).

### Named Rules
**The Ink-On-Region Rule.** Las tintas riso rellenan regiones y se acompañan de texto en toner o en papel; nunca se usan como color de texto sobre papel.
**The Tonal Honesty Rule.** Los puntos de semitono no cruzan texto corrido: los discos viven en bordes y detrás de piezas con fondo sólido.

## Typography

**Display Font:** Bowlby One (con Arial Black)
**Serif de recorte:** Abril Fatface (con Georgia)
**Body Font:** Libre Franklin (con system-ui), autoalojada como fuente variable

**Character:** Una letra gorda de cartel y un didone de contraste alto se mezclan palabra a palabra como en un recorte de revista; Franklin, gótica de prensa, da lectura sobria al texto.

### Hierarchy
- **Display** (400, `clamp(3.4rem, 12vw, 6rem)`, 1): la palabra grande del recorte principal y el título de cada detalle de proyecto (este último entre 1.9rem y 3.4rem).
- **Lead** (400, `clamp(1.15rem, 2.4vw, 1.4rem)`, 1.45): bajada bajo el nombre; las etiquetas de habilidad escalan entre 0.95rem y 1.4rem usando pasos de esta rampa.
- **UI** (800, 1rem; nav 0.95rem; label-sm 0.8rem): botones, navegación y cartelitos de estado.
- **Headline** (400, `clamp(1.8rem, 5vw, 2.8rem)`, 1): títulos de sección sobre franja de toner o amarilla.
- **Cut** (400, `clamp(1.9rem, 6vw, 3.4rem)`, 1): palabras del nombre en el hero, alternando Bowlby One y Abril Fatface.
- **Body** (400, 1.0625rem, 1.6): texto corrido, medida `36ch` en el lead y `52ch` en tarjetas.
- **Label** (800, 0.8–0.9rem, tracking 0.08–0.1em, mayúsculas): números de página, estados, habilidades.

### Named Rules
**The Mixed Cut Rule.** Dentro de una misma línea de recortes se alternan al menos dos voces tipográficas y dos colores de fondo.
**The Code Is Code Rule.** El monoespaciado solo aparece donde hay código real (el volcado de ensamblador); no se usa como disfraz técnico.

## Layout

Contenedor `.wrap` de 72rem máximo con relleno lateral `clamp(1rem, 4vw, 2.5rem)`. El hero es una grilla de dos columnas (1.6fr / 1fr) desde 56rem y una columna debajo. Los proyectos usan una grilla de 12 columnas con cada página en una posición distinta (P101 columnas 1–7, P102 columnas 8–12 más baja, P103 columnas 3–10) y capas de color detrás que llenan los huecos; en móvil se apilan en una columna con desplazamientos laterales leves. Secciones con relleno vertical `clamp(3rem, 8vw, 6rem)` y más aire sobre los títulos que debajo. El eje X se recorta en `main` para que las piezas rotadas y las cintas no generen scroll horizontal.

## Elevation & Depth

Profundidad por capas de papel, no por tarjetas flotantes. Las páginas con contenido usan solo un borde de 2px en toner, sin sombra. Las piezas recortadas (palabras, etiquetas, glifo) usan una sombra suave con desplazamiento y desenfoque, nunca un bloque duro.

### Shadow Vocabulary
- **Recorte** (`box-shadow: 0 2px 0 rgb(17 17 17 / 0.14), 2px 9px 12px -6px rgb(17 17 17 / 0.5)`): palabras recortadas, títulos de sección, marca.
- **Hoja pegada** (`box-shadow: 0 2px 0 rgb(17 17 17 / 0.12), 4px 16px 22px -10px rgb(17 17 17 / 0.55)`): la hoja del glifo.

### Named Rules
**The One Edge Rule.** Una superficie declara su elevación una sola vez: borde o sombra, nunca ambos.

## Shapes

Esquinas rectas (0px) en todo lo que parece papel; cintas con puntas cortadas (polígono de 6 vértices); círculos solo para discos de semitono; la única forma redondeada es la píldora de lenguaje (999px). Cada pieza se inclina con `rotate` individual entre ±1° y ±5°.

## Components

### Buttons
- **Shape:** rectángulo recto con borde de 2px en toner, inclinado ±1.3°.
- **Primary:** amarillo marcador con texto toner, relleno `0.75rem 1.15rem`.
- **Secondary:** hoja de papel con texto toner.
- **Hover / Focus:** sube 3px y crece 3%, el fondo pasa a rosa; el foco es un contorno de 3px azul con separación de 3px (amarillo sobre fondo azul).

### Cards / Containers (página pegada)
- **Corner Style:** recto, borde de 2px en toner.
- **Background:** hoja de papel (#faf7ee).
- **Internal Padding:** `clamp(1.1rem, 2.4vw, 1.6rem)`.
- **Detalle:** cinta amarilla, rosa o azul sobre el borde superior; número de página (etiqueta toner) y cartelito de estado (rosa, amarillo o azul).
- **Hover:** se endereza, sube 6px y crece 1.2%.

### Chips / Etiquetas
- **Skill label:** fondo toner, rosa o azul, texto en mayúsculas con tracking 0.1em, cada una con tamaño (0.9–1.4rem) y ángulo propios, ocupando todo el ancho disponible.
- **Tag de lenguaje:** píldora con borde de 2px.

### Navigation
Marca como recorte rosa inclinado; enlaces en Libre Franklin 800 con subrayado amarillo que crece al pasar el cursor.

### Cinta (signature)
Franja amarilla inclinada con los nombres de los proyectos separados por rombos rosas. Da tres vueltas y se detiene; es decorativa y está oculta a lectores de pantalla.

## Do's and Don'ts

### Do:
- **Do** rellenar regiones con rosa, azul o amarillo y poner el texto en toner (rosa, amarillo) o en papel (azul, toner).
- **Do** darle a cada pieza su ángulo y a cada proyecto un tratamiento visual propio (radar, rejilla de puertos, volcado de código).
- **Do** mantener las direcciones P101–P103 como la única grilla rígida y declarar el estado real de cada proyecto.
- **Do** animar con `translate`, `scale` y `rotate` con `cubic-bezier(0.16, 1, 0.3, 1)` y partiendo de un estado ya legible.
- **Do** envolver todo movimiento en `@media (prefers-reduced-motion: no-preference)`.

### Don't:
- **Don't** volver a una grilla de tarjetas iguales sobre fondo oscuro (el diseño que el usuario rechazó).
- **Don't** poner puntos de semitono ni tintas fuertes detrás de texto corrido.
- **Don't** presentar el identicon de GitHub como una foto; si hay foto real, sustituye al glifo.
- **Don't** usar sombras de bloque duro ni apilar borde y sombra en la misma superficie.
- **Don't** usar mayúsculas pequeñas encima de los títulos (etiqueta sobre encabezado) ni numeración 01/02/03 de secciones.
