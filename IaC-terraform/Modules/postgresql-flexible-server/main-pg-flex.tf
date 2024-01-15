resource "azurerm_postgresql_flexible_server" "pg-flex-server" {
  name                   = var.pg-flex-name
  resource_group_name    = var.resource-group-name
  location               = var.location
  administrator_login    = var.login
  administrator_password = var.password
  storage_mb             = var.storage-mb
  sku_name               = var.sku-name
  zone                   = 1
}

