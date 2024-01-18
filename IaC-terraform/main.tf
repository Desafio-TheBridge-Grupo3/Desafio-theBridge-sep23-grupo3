terraform {
  cloud {
    organization = "Several-energy"
    workspaces {
      name = "Calculadora-Several"
    }
  }
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.87.0"
    }
  }
}

provider "azurerm" {
  subscription_id = "8981aa87-5078-479f-802f-cf78ed73bdf0"
  features {    
    resource_group {
      prevent_deletion_if_contains_resources = true
    }
  }
}

# Grupo de recursos
resource azurerm_resource_group Resource-Group {
  name = local.resource-group-name
  location = local.location
}

# Creación de BDD
module "database" {
  source = "./Modules/postgresql-flexible-server"
  resource-group-name = local.resource-group-name
  location = local.location
  pg-flex-name = local.pg-flex-name
  login = var.PG-ADMIN-USER
  password = var.PG-ADMIN-PWD
}

# Creación del entorno para Container Apps
module "container_app_environment" {
  source = "./Modules/Container-apps-environment"
  location = local.location
  resource-group-name = local.resource-group-name
  container_registry_name = local.container_registry_name
  container_app_environment_name = local.container_app_environment_name_dev
  dapr_component_type = local.dapr_component_type
  dapr_component_name = local.dapr_component_name
}

# Creación de la API candela
module "Container_app_candela_dev" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_candela_dev
  depends_on = [ module.container_app_environment ]
}

data "azurerm_container_app" "data_candela" {
  name = "Container_app_candela_dev"
  resource_group_name = local.resource-group-name
  depends_on = [ module.Container_app_candela_dev ]
}

resource "azurerm_role_assignment" "rol_candela" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource-group-name}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_candela.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_candela ]
}


# Creación de la API invoice
module "Container_app_invoice_dev" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_invoice_dev
  depends_on = [ module.container_app_environment ]
}

data "azurerm_container_app" "data_invoice" {
  name = "Container_app_invoice_dev"
  resource_group_name = local.resource-group-name
  depends_on = [ module.Container_app_invoice_dev ]
}

resource "azurerm_role_assignment" "rol_invoice" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource-group-name}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_invoice.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_invoice ]
}

# Creación de server
module "Container_app_server_dev" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_server_dev
  depends_on = [ module.container_app_environment, module.database ]
}

data "azurerm_container_app" "data_server" {
  name = "Container_app_client_dev"
  resource_group_name = local.resource-group-name
  depends_on = [ module.Container_app_server_dev ]
}

resource "azurerm_role_assignment" "rol_server" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource-group-name}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_server.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_server ]
}

# Creación de client
module "Container_app_client_dev" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_client_dev
  depends_on = [ module.container_app_environment, module.Container_app_candela_dev, module.Container_app_invoice_dev, module.Container_app_server_dev ]
}

data "azurerm_container_app" "data_client" {
  name = "Container_app_client_dev"
  resource_group_name = local.resource-group-name
  depends_on = [ module.Container_app_client_dev ]
}

resource "azurerm_role_assignment" "rol_client" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource-group-name}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_client.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_client ]
}

