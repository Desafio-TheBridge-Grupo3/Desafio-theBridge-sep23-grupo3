output "url" {
  value = [ for name, container in azurerm_container_app.container_app : "https://${try(container.ingress[0].fqdn, "")}" if can(container.ingress[0].fqdn) ]
}