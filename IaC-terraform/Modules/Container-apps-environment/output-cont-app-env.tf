# container_app_environment_id
output "container_app_environment_id" {
  value = azurerm_container_app_environment.container_env.id
}

# dapr_app_id
output "dapr_app_id" {
  value = azurerm_container_app_environment_dapr_component.dapr.name
}
