# ---- OCI ----
variable "tenancy_ocid" {
  type = string
}

variable "user_ocid" {
  type = string
}

variable "fingerprint" {
  type = string
}

variable "private_key" {
  description = "Contenido PEM de la API key de OCI"
  type        = string
  sensitive   = true
}

variable "region" {
  description = "Región de OCI, p. ej. us-ashburn-1"
  type        = string
}

variable "compartment_ocid" {
  type = string
}

variable "ssh_public_key" {
  description = "Llave pública SSH autorizada en la VM (usuario ubuntu)"
  type        = string
}

variable "shape" {
  description = "Shape de la VM. E2.1.Micro es Always Free (AMD); A1.Flex es ARM."
  type        = string
  default     = "VM.Standard.E2.1.Micro"
}

variable "flex_ocpus" {
  description = "Solo para shapes *.Flex"
  type        = number
  default     = 1
}

variable "flex_memory_gbs" {
  description = "Solo para shapes *.Flex"
  type        = number
  default     = 6
}

# ---- Cloudflare ----
variable "enable_cloudflare" {
  description = "Crear el registro DNS en Cloudflare"
  type        = bool
  default     = true
}

variable "cloudflare_api_token" {
  type      = string
  sensitive = true
  default   = ""
}

variable "cloudflare_zone_id" {
  type    = string
  default = ""
}

variable "domain" {
  description = "Nombre completo del registro, p. ej. portafolio.midominio.com"
  type        = string
  default     = ""
}
