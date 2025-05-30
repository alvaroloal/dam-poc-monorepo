# Proyecto POC: API REST con Spring Boot, Frontend Angular y PostgreSQL

Este repositorio contiene un proyecto de prueba de concepto (POC) que implementa una arquitectura de servicios Dockerizada compuesta por:

- **Backend**: API REST desarrollada con Spring Boot.
- **Frontend**: Aplicación Angular servida por Nginx.
- **Base de datos**: PostgreSQL.
- **Administrador de base de datos**: pgAdmin, accesible vía Nginx en ruta `/pgadmin`.

---

## Arquitectura y puertos

| Servicio          | Tecnología       | Puerto Host | Ruta/Descripción                             |
|------------------|------------------|-------------|----------------------------------------------|
| Frontend         | Angular + Nginx  | `80`        | `http://localhost/` (sirve la app Angular)   |
| API Backend      | Spring Boot      | `80`        | `http://localhost/api/...` (proxy Nginx)     |
| pgAdmin          | pgAdmin4         | `80`        | `http://localhost/pgadmin/` (proxy Nginx)    |
| Base de datos    | PostgreSQL       | `5432`      | Acceso interno desde los servicios Docker    |

---

## Variables de entorno

### Backend (`spring-boot-api`)

| Variable      | Valor     |
|---------------|-----------|
| DB_HOST       | `db`      |
| DB_PORT       | `5432`    |
| DB_NAME       | `pocdb`   |
| DB_USER       | `user`    |
| DB_PASSWORD   | `password`|

### pgAdmin

| Variable                  | Valor                     |
|---------------------------|---------------------------|
| PGADMIN_DEFAULT_EMAIL     | `admin@example.com`       |
| PGADMIN_DEFAULT_PASSWORD  | `admin`                   |
| PGADMIN_LISTEN_PORT       | `80`                      |

---

## Estructura del proyecto

```text
dam-poc-monorepo/
├── angular-app/            # Proyecto Angular + nginx.conf
├── spring-boot-api/        # Proyecto Spring Boot
├── docker-compose.yml      # Orquestación de servicios
└── README.md               # Este archivo
```

---

## Detalles técnicos

- **Frontend**:
  - Angular se construye en la imagen Docker y se sirve con Nginx.
  - Usa `try_files` en Nginx para manejar rutas del cliente (SPA).

- **Backend**:
  - Expone endpoints REST bajo `/api/`.
  - Comunica con PostgreSQL usando credenciales por variables de entorno.

- **Nginx**:
  - Redirige `/api/` → backend.
  - Redirige `/pgadmin/` → pgAdmin.
  - Sirve Angular en `/`.

- **pgAdmin**:
  - Accesible desde `http://localhost/pgadmin/`.
  - Login con email y password definidos en `.env` o directamente en `docker-compose`.

---

## Cómo levantar el proyecto

Desde la raíz del proyecto:

```bash
docker-compose up --build -d
```

---

## Rutas disponibles

- **Frontend (Angular)**  
  `http://localhost/`  
  `http://localhost/login`  
  `http://localhost/home`

- **Backend (Spring Boot API)**  
  `http://localhost/api/status`  
  `http://localhost/api/hello`  
  `http://localhost/api/info`

- **pgAdmin (gestor de la base de datos)**  
  `http://localhost/pgadmin/`  
  Login: `admin@example.com` / `admin`
  