# Basado en el módulo siguiente: https://github.com/Azure/terraform-azure-container-apps/tree/main

# Crea los container-app - Doc: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/container_app
resource "azurerm_container_app" "container_app" {
  for_each = var.container_app

  container_app_environment_id = var.container_app_environment_id
  name                         = each.value.name
  resource_group_name          = var.resource-group-name
  revision_mode                = "Single"

  template {
    max_replicas    = each.value.template.max_replicas
    min_replicas    = each.value.template.min_replicas

    container {
      image   = each.value.template.image
      name    = each.value.template.name
      cpu     = each.value.template.cpu
      memory  = "${each.value.template.memory_gigaBytes}Gi"

      dynamic "env" {
        for_each = each.value.template.env

        content {
          name        = env.value["name"]
          secret_name = env.value["secret_name"]
        }
      }
    }

    http_scale_rule {
      name = each.value.http_scale_rule.name
      concurrent_requests = each.value.http_scale_rule.concurrent_requests
    }
  }

  dapr {
    app_id = var.dapr_app_id
  }

  ingress {
    target_port                = each.value.ingress.target_port
    allow_insecure_connections = each.value.ingress.allow_insecure_connections
    external_enabled           = each.value.ingress.external_enabled
    transport                  = "http"

    traffic_weight {
      percentage = 100
      latest_revision = true
      }
  }

  dynamic "secret" {
    for_each = each.value.secret

    content {
      name  = secret.value["name"]
      value = secret.value["sec-value"]
    }
  }

  timeouts {
    create = "20m" # Set the create timeout to 20 minutes
  }
}
