# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (sitio estático, sin backend), bun, TypeScript. Animaciones: el usuario autorizó una librería de animación y componentes de React Bits (vía `@astrojs/react`) si hace falta.

## Users

- Reclutadores y responsables de pasantías que evalúan en pocos minutos qué sabe hacer Alex y entran a sus repos.
- Docentes que revisan la tarea "Portafolio personal" (la nota depende sobre todo del pipeline, pero el sitio debe verse cuidado).
- Comunidad de desarrolladores interesada en sus proyectos técnicos.

## Product Purpose

Portafolio personal de Alex Joshua Villegas Ibanez (GitHub `lhuachl`): presenta proyectos propios y los lleva a sus repositorios y a un contacto directo. Éxito: que quien llegue entienda quién es, vea sus proyectos y tenga a un clic GitHub, LinkedIn y correo. También es la entrega de una tarea que exige tests, CI/CD, Docker, Terraform y Ansible.

## Positioning

Estudiante de sistemas con interés en reconocimiento/seguridad, redes y bajo nivel (ensamblador); el portafolio muestra proyectos personales reales y pequeños, honestos sobre su estado, no un catálogo inflado.

## Operating Context

Sitio público estático servido con nginx en un contenedor Docker, en una VM de Oracle Cloud, detrás de Cloudflare. Se despliega con GitHub Actions al hacer push a `main`.

## Capabilities and Constraints

- Sin backend ni base de datos; los datos viven en `src/data/projects.ts`.
- Solo proyectos personales y no escolares: `carrier-cli` (Ruby), `port_scan` (TypeScript), `little-bit-of-asm` (NASM x86_64). Quedaron fuera los repos de tareas, vacíos o privados.
- Contacto público confirmado: GitHub `https://github.com/lhuachl`, LinkedIn `https://www.linkedin.com/in/alex-joshua-villegas-ibanez-707830384/` y el correo `lllhuachlll@gmail.com` (pendiente de reconfirmar).
- Los tests existentes (Vitest unitarios e integración, Playwright e2e) deben seguir pasando; si cambia el marcado se actualizan en el mismo cambio. Selectores en uso: `article.card`, `nav[aria-label="Principal"]`, `h1` con "Hola, soy", ids `hero-title`, `proyectos`, `habilidades`, `contacto`, enlace de detalle `/projects/<slug>`, página 404 con `h1` "404".
- Sitio en español.

## Brand Commitments

- Nombre: Alex Joshua Villegas Ibanez.
- Restricción visual pedida por el usuario: debe tener identidad propia y ser maximalista, con animaciones y una paleta de colores bien resuelta; el diseño actual (fondo oscuro, grilla de tarjetas iguales) le parece genérico y de plantilla.

## Evidence on Hand

- README reales de los tres repos (en tono directo y con humor seco; `port_scan` admite que la UX la hizo una IA y no debe atribuirse a Alex).
- Avatar público de GitHub (`github.com/lhuachl.png`).
- No hay capturas de pantalla, fotos ni logos propios, ni testimonios, clientes, métricas ni estrellas: no inventarlos.

## Product Principles

- Honestidad sobre el estado de cada proyecto (aprendizaje, joven, completo); nada de afirmaciones infladas.
- Los proyectos y los enlaces de contacto van primero y se alcanzan rápido.
- Cada proyecto merece un tratamiento propio, no una tarjeta intercambiable.
- El contenido debe leerse y funcionar sin JavaScript ni animación.

## Accessibility & Inclusion

Respetar `prefers-reduced-motion` con una versión estática equivalente, contraste legible, foco visible y navegación por teclado.
