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

locals {
  # General
  resource-group-name = "RECURSOS-desafiotripulacionesG3"
  location = "westeurope"

# Database
  pg-flex-name = "database-desafio-grupo3"
}

resource azurerm_resource_group Resource-Group {
  name = local.resource-group-name
  location = local.location
}

module "database" {
  source = "./Modules/postgresql-flexible-server"
  resource-group-name = local.resource-group-name
  location = local.location
  pg-flex-name = local.pg-flex-name
  login = var.PG-ADMIN-USER
  password = var.PG-ADMIN-PWD
}