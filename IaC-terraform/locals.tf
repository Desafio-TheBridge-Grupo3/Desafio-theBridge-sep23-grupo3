  locals {
  # General
  resource-group-name = "RECURSOS-desafiotripulacionesG3"
  location = "westeurope"

# Database
  pg-flex-name = "database-desafio-grupo3"

# Containers
  log_analytics_workspace_name_dev = "Log-analytics-DEV"
  container_app_environment_name_dev = "env-container-apps-dev"
  dapr_component_type = "bindings.postgresql"
  dapr_component_name = "databaseconnect"

  container_app_candela_dev = {API-candela = {
      name = "ws-candela-dev"

      template = {
        min_replicas     = 1
        max_replicas     = 10
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "wscandeladev"
        cpu              = 0.5
        memory_gigaBytes = 1

        env = [
              {name  = "URL_CANDELA"
              secret_name = "url-candela"},
              {name  = "USER_CANDELA"
              secret_name = "user-candela"},
              {name  = "PWD_CANELA"
              secret_name = "password-candela"}
        ]
      },

      http_scale_rule = {
        name                = "http-candela"
        concurrent_requests = 5
      }

      ingress = {
        target_port                = 5000
        allow_insecure_connections = false
        external_enabled           = true
      }

      secret = [
        {name = "url-candela"
        sec-value = "https://agentes.candelaenergia.es/#/login"},
        {name = "user-candela"                                      # Almacenado como terraform variable
        sec-value = var.USER_CANDELA},
        {name = "password-candela"                                  # Almacenado como terraform secret
        sec-value = var.PWD_CANDELA}
      ]
    },
  }
  # API de facturas
  container_app_invoice_dev = {API-invoice = {
      name = "ws-invoice-dev"

      template = {
        min_replicas     = 1
        max_replicas     = 10
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "wsinvoicedev"
        cpu              = 0.5
        memory_gigaBytes = 1

        env = []
      },

      http_scale_rule = {
        name                = "http-invoice"
        concurrent_requests = 5
      }

      ingress = {
        target_port                = 5001
        allow_insecure_connections = false
        external_enabled           = true
      }

      secret = []
    },
  }

  # Servidor backend
  container_app_server_dev = {SERVER = {
      name = "server-develop"

      template = {
        min_replicas     = 1
        max_replicas     = 10
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "serverdevelop"
        cpu              = 0.5
        memory_gigaBytes = 1

        env = [
              {name  = "SQL_USER"
              secret_name = "sqluser"},
              {name  = "SQL_PWD"
              secret_name = "sqlpwd"},
              {name  = "SQL_HOST"
              secret_name = "sqlhost"},
              {name  = "SQL_DATABASE"
              secret_name = "sqldatabase"},
              {name  = "JWT_SECRET"
              secret_name = "jwtsecret"},
              {name  = "SESSION_SECRET"
              secret_name = "sessionsecret"},
              {name  = "DOMAIN_URL"
              value = ""},
              {name  = "PORT"
              value = "3000"}
        ]
      },

      http_scale_rule = {
        name                = "http-server"
        concurrent_requests = 20
      }

      ingress = {
        target_port                = 3000
        allow_insecure_connections = false
        external_enabled           = true
      }

      secret = [
        {name = "sqluser"                  # Almacenado como terraform secret
        sec-value = var.PG-ADMIN-USER},
        {name = "sqlpwd"                   # Almacenado como terraform secret
        sec-value = var.PG-ADMIN-PWD},
        {name = "sqlhost"                  # Proporcionado por output
        sec-value = module.database.host},
        {name = "sqldatabase"
        sec-value = "proyectoTribu"},
        {name = "jwtsecret"                # Almacenado como terraform secret
        sec-value = var.JWT_SECRET},
        {name = "sessionsecret"            # Almacenado como terraform secret
        sec-value = var.SESSION_SECRET},
      ]
    },
  }
  # Servidor frontend
  container_app_client_dev = {CLIENT = {
      name = "client-develop"

      template = {
        min_replicas     = 1
        max_replicas     = 10
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "clientdevelop"
        cpu              = 0.5
        memory_gigaBytes = 1

        env = [
              {name  = "VITE_SERVER_URL"
              secret_name = "viteserver"},
              {name  = "VITE_CANDELA"
              secret_name = "vitecandela"},
              {name  = "VITE_INVOICE"
              secret_name = "viteinvoice"}
        ]
      },

      http_scale_rule = {
        name                = "http-client"
        concurrent_requests = 20
      }

      ingress = {
        target_port                = 5173
        allow_insecure_connections = false
        external_enabled           = true
      }

      secret = [
        {name = "viteserver"
        sec-value = module.Container_app_server_dev.url[0]},
        {name = "vitecandela"
        sec-value = module.Container_app_candela_dev.url[0]},
        {name = "viteinvoice"
        sec-value = module.Container_app_invoice_dev.url[0]}
      ]
    }
  }
}