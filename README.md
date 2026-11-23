# Portafolio · Alex Joshua Villegas Ibanez

Portafolio personal estático hecho con [Astro](https://astro.build), con pruebas automatizadas, imagen Docker, infraestructura como código (Terraform en Oracle Cloud) y configuración con Ansible. Dominio gestionado en Cloudflare.

## Estructura

```text
src/            sitio Astro (páginas, componentes, datos en src/data/projects.ts)
tests/          unit/ · integration/ · e2e/
Dockerfile      build con Bun -> nginx:alpine sirviendo dist/
docker-compose.yml
infra/terraform VCN, subnet pública, security list, VM Ubuntu 24.04 (OCI) y DNS (Cloudflare)
infra/ansible   docker, git, iptables (22/80/443) y despliegue del contenedor
.github/workflows/ci.yml       push a dev  -> tests
.github/workflows/deploy.yml   push a main -> DockerHub + Terraform + Ansible
```

## Desarrollo local

```sh
bun install
bun run dev        # http://localhost:4321
bun run build && bun run preview
```

## Pruebas

| Tipo | Herramienta | Comando |
|---|---|---|
| Unitarias (8) | Vitest | `bun run test:unit` |
| Integración (6) | Vitest + Astro Container API | `bun run test:integration` |
| E2E (5) | Playwright (Chromium) | `bunx playwright install chromium && bun run test:e2e` |

`bun run test` ejecuta las tres.

## Docker

```sh
docker compose up --build        # http://localhost
```

## Pipelines

- **`dev`**: cada push ejecuta unitarias, integración, e2e y el build (`ci.yml`).
- **`main`**: cada push ejecuta (`deploy.yml`):
  1. los mismos tests,
  2. build multi-arquitectura (`amd64`/`arm64`) y push a DockerHub (`<usuario>/portafolio:latest` y `:<sha>`),
  3. `terraform apply`: VCN, subnet, internet gateway, security list (22/80/443), VM Ubuntu 24.04 con IP pública y registro A en Cloudflare,
  4. `ansible-playbook`: instala docker y git, aplica iptables (política DROP salvo 22/80/443) y levanta el contenedor.

## Configuración única antes del primer despliegue

1. **DockerHub**: crea un access token. El repositorio `portafolio` debe ser público para que la VM haga `pull` sin login.
2. **OCI**: crea una API key (tenancy, user, fingerprint, clave privada, región, compartment) y un bucket de Object Storage para el estado de Terraform, con sus *Customer Secret Keys* (credenciales S3).
3. **SSH**: genera un par de llaves solo para el despliegue (`ssh-keygen -t ed25519 -f deploy_key`).
4. **Cloudflare** (opcional, puntos extra): API token con permiso *Zone · DNS · Edit* y *Zone · Zone Settings · Edit*, el `zone_id` y el nombre completo del registro.
5. Crea estos *secrets* en GitHub (`Settings → Secrets and variables → Actions`), por ejemplo con `gh secret set NOMBRE`:

| Secret | Contenido |
|---|---|
| `DOCKER_USERNAME`, `DOCKER_PASSWORD` | usuario y token de DockerHub |
| `OCI_TENANCY_OCID`, `OCI_USER_OCID`, `OCI_FINGERPRINT`, `OCI_PRIVATE_KEY`, `OCI_REGION`, `OCI_COMPARTMENT_OCID` | credenciales de la API de OCI |
| `OCI_NAMESPACE`, `OCI_STATE_BUCKET`, `OCI_S3_ACCESS_KEY`, `OCI_S3_SECRET_KEY` | backend S3 del estado de Terraform |
| `SSH_PUBLIC_KEY`, `SSH_PRIVATE_KEY` | llaves de despliegue |
| `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID`, `CLOUDFLARE_DOMAIN` | opcionales; sin token se omite Cloudflare |

Nunca subas `terraform.tfvars`, llaves ni estados: están en `.gitignore`.

## Notas

- La VM usa por defecto `VM.Standard.E2.1.Micro` (Always Free, AMD). Para ARM (`VM.Standard.A1.Flex`) cambia la variable `shape`; la imagen ya es multi-arquitectura.
- Cloudflare está en modo SSL *Flexible* (HTTPS hasta Cloudflare, HTTP hasta la VM). El puerto 443 queda abierto en la VM y en la security list; para cifrado extremo a extremo hay que añadir un *Origin Certificate* a nginx.
- `http://<ip-publica>` funciona aunque no uses Cloudflare.
# Portafolio
# Portafolio
