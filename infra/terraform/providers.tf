terraform {
  required_version = ">= 1.6"

  required_providers {
    oci = {
      source  = "oracle/oci"
      version = "~> 6.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0"
    }
  }

  # Estado remoto en OCI Object Storage (API compatible con S3).
  # El runner de Actions es efímero: sin esto cada push recrearía todo.
  # bucket, endpoint y credenciales llegan por `-backend-config=backend.hcl`
  # y las variables AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY (ver deploy.yml).
  backend "s3" {
    key                         = "portafolio/terraform.tfstate"
    region                      = "us-east-1" # valor ficticio: OCI lo ignora
    skip_region_validation      = true
    skip_credentials_validation = true
    skip_requesting_account_id  = true
    skip_metadata_api_check     = true
    skip_s3_checksum            = true
    use_path_style              = true
  }
}

provider "oci" {
  tenancy_ocid = var.tenancy_ocid
  user_ocid    = var.user_ocid
  fingerprint  = var.fingerprint
  private_key  = var.private_key
  region       = var.region
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
