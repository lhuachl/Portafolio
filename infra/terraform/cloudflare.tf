# Dominio/URL del proyecto en Cloudflare (puntos extra).
# Desactivable con enable_cloudflare = false.

resource "cloudflare_dns_record" "web" {
  count = var.enable_cloudflare ? 1 : 0

  zone_id = var.cloudflare_zone_id
  name    = var.domain
  type    = "A"
  content = oci_core_instance.web.public_ip
  ttl     = 1 # automático (requerido con proxied = true)
  proxied = true
  comment = "portafolio - gestionado por Terraform"
}

# Flexible: Cloudflare sirve HTTPS al visitante y habla HTTP (80) con el origen.
resource "cloudflare_zone_setting" "ssl" {
  count = var.enable_cloudflare ? 1 : 0

  zone_id    = var.cloudflare_zone_id
  setting_id = "ssl"
  value      = "flexible"
}
