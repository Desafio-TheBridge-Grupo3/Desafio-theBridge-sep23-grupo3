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

# Creación de Almacenamiento


# Creación de MONITORIZACION


# Creación de la azure-function que guarda el CSV semanal


# Creación de la azure-function para API actualizar tabla


# Creación del entorno para Container Apps
module "container_app_environment" {
  source = "./Modules/Container-apps-environment"
  location = local.location
  resource-group-name = local.resource-group-name
  log_analytics_workspace_name = local.log_analytics_workspace_name_dev
  container_app_environment_name = local.container_app_environment_name_dev
  dapr_component_type = local.dapr_component_type
  dapr_component_name = local.dapr_component_name
}

# Creación de la API candela
module "Container_app_candela_dev" {
  source = "./Modules/Container-apps"
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_candela_dev
  depends_on = [ module.container_app_environment ]
}

# Creación de la API invoice
module "Container_app_invoice_dev" {
  source = "./Modules/Container-apps"
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_invoice_dev
  depends_on = [ module.container_app_environment ]
}

# Creación de server
module "Container_app_server_dev" {
  source = "./Modules/Container-apps"
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_server_dev
  depends_on = [ module.container_app_environment, module.database ]
}

# Creación de client
module "Container_app_client_dev" {
  source = "./Modules/Container-apps"
  resource-group-name = local.resource-group-name
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.container_app_client_dev
  depends_on = [ module.container_app_environment, module.Container_app_candela_dev, module.Container_app_invoice_dev, module.Container_app_server_dev ]
}