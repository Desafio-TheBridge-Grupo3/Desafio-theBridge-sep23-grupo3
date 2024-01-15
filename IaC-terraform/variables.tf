  variable "ARM_CLIENT_ID" {
    description = "Variable en terraform cloud"
    type = string
  }
  
  variable "ARM_CLIENT_SECRET" {
    description = "Variable encriptada en terraform cloud"
    type = string
  }

  variable "ARM_TENANT_ID" {
    description = "Variable en terraform cloud"
    type = string
  }

  variable "PG-ADMIN-USER" {
    description = "Usuario con permisos admin de la base de datos"
    type = string
  }

  variable "PG-ADMIN-PWD" {
    description = "Contraseña del usuario admin de la base de datos"
    type = string
  }