variable "location" {
  type        = string
  description = "(Required) The location this container app is deployed in. This should be the same as the environment in which it is deployed."
  nullable    = false
}

variable "resource-group-name" {
  type        = string
  description = "(Required) The name of the resource group in which the resources will be created."
  nullable    = false
}

variable "log_analytics_workspace_name" {
  type        = string
  default     = null
  description = "(Optional) Specifies the name of the Log Analytics Workspace. Must set this variable if `var.log_analytics_workspace` is `null`. Changing this forces a new resource to be created."
}

variable "container_app_environment_name" {
  type        = string
  description = "(Required) The name of the container apps managed environment. Changing this forces a new resource to be created."
  nullable    = false
}

variable "dapr_component_type" {
  type = string
  default     = "bindings.postgresql"
  description = "(Optional) The Dapr component type to deploy. Defaults to bindings.postgresql"
  nullable    = false
}

variable "dapr_component_name" {
  type = string
  default     = "bindings.postgresql"
  description = "(Optional) The name of the Dapr component to deploy."
  nullable    = false
}