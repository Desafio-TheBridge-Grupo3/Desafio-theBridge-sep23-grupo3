variable "resource-group-name" {
  description = "nombre del grupo de recursos"
  type        = string
}

variable "location" {
  description = "Region de la función"
  type        = string
}

variable "pg-flex-name" {
  description = "PostgreSQL flexible server name"
  type        = string
}

variable "login" {
  description = "admin username for postgreSQL"
  type        = string
}

variable "password" {
  description = "admin password for postgreSQL"
  type        = string
}

variable "storage-mb" {
  description = "Storage capacity in mB"
  type        = number
  default     = 32768
}

variable "sku-name" {
  description = "value"
  type        = string
  default     = "B_Standard_B2s"
}




