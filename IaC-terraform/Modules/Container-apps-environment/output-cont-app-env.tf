output "container-registry-prin-ID" {
  value = azurerm_container_registry.my_containers.identity[0].principal_id
}

# container_app_environment_id
output "container_app_environment_id" {
  value = azurerm_container_app_environment.container_env.id
}

# dapr_app_id
output "dapr_app_id" {
  value = azurerm_container_app_environment_dapr_component.dapr.name
}
