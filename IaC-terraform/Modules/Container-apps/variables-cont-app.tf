variable "container_app_environment_id" {
  type        = string
  description = "(Required) ID del entorno donde se desplegará."
  nullable    = false
}

variable "location" {
  type = string
}

variable "resource-group-name" {
  type        = string
  description = "(Required) The name of the resource group in which the resources will be created."
  nullable    = false
}

variable "dapr_app_id" {
  type        = string
  description = "(Required) ID del dapr binding con el que se conecta."
  nullable    = false
}

variable "container_app" {
  default     = {}
  description = "(Optional) The Dapr component to deploy."
  nullable    = false

  type = map(object({
    name = string,

    template = object({
      max_replicas    = optional(number),
      min_replicas    = optional(number),

      image             = string,
      name              = string,
      cpu               = optional(number),
      memory_gigaBytes  = optional(number),

      env = optional(list(object({
        name        = string,
        secret_name = string,
      })))
    }),

    http_scale_rule = optional(object({
      name = string
      concurrent_requests = number
    }))

    ingress = optional(object({
      target_port                = number,
      allow_insecure_connections = optional(bool, false),
      external_enabled           = optional(bool, false),
    })),

    secret = optional(list(object({
      name  = string,
      sec-value = string,
    }))),
  }))
}