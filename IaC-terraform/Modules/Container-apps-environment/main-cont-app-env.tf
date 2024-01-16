# Basado en el módulo siguiente: https://github.com/Azure/terraform-azure-container-apps/tree/main

resource "azurerm_log_analytics_workspace" "ws-log-analytics" {
  name                = var.log_analytics_workspace_name
  location            = var.location
  resource_group_name = var.resource-group-name
}

# Crea el Environment para las container-apps - Doc: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_app_environment#workload_profile
resource "azurerm_container_app_environment" "container_env" {
  name                       = var.container_app_environment_name
  location                   = var.location
  resource_group_name        = var.resource-group-name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.ws-log-analytics.id
}

# Conexión dapr para base de datos
resource "azurerm_container_app_environment_dapr_component" "dapr" {
  component_type               = var.dapr_component_type
  container_app_environment_id = azurerm_container_app_environment.container_env.id
  name                         = var.dapr_component_name
  version = "v1"
}
