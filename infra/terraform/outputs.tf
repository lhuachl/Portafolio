output "public_ip" {
  description = "IP pública de la VM"
  value       = oci_core_instance.web.public_ip
}

output "url" {
  description = "URL pública del portafolio"
  value       = var.enable_cloudflare && var.domain != "" ? "https://${var.domain}" : "http://${oci_core_instance.web.public_ip}"
}
