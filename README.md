# Proyecto POC: API REST con Spring Boot, Frontend Angular y PostgreSQL

Este repositorio contiene un proyecto de prueba de concepto (POC) que implementa una arquitectura de servicios utilizando Docker. El sistema se compone de los siguientes servicios:

- **Backend**: API REST desarrollada con Spring Boot.
- **Frontend**: Aplicación web construida con Angular.
- **Base de datos**: PostgreSQL.
- **Gestor de base de datos**: pgAdmin para administración visual.

---

## Servicios y puertos

| Servicio          | Tecnología       | Puerto Host | Descripción                         |
|------------------|------------------|-------------|-------------------------------------|
| Backend API      | Spring Boot      | `8080`      | API REST principal                  |
| Frontend         | Angular (nginx)  | `80`        | Interfaz de usuario web             |
| Base de datos    | PostgreSQL       | `5432`      | Almacén de datos relacional         |
| Administración DB| pgAdmin          | `5050`      | Panel de administración de la BBDD |

---

## Variables de entorno por defecto

### Servicio `spring-boot-api`

| Variable        | Valor           |
|----------------|-----------------|
| DB_HOST         | `db`            |
| DB_PORT         | `5432`          |
| DB_NAME         | `pocdb`         |
| DB_USER         | `user`          |
| DB_PASSWORD     | `password`      |

### Servicio `pgadmin`

| Variable                | Valor                  |
|-------------------------|------------------------|
| PGADMIN_DEFAULT_EMAIL   | `admin@example.com`    |
| PGADMIN_DEFAULT_PASSWORD| `admin`                |

---

# dam-poc-monorepo - Prueba de concepto
- Creo estructura de carpetas para los tres proyectos: angular-app, flutter-app, spring-boot-api.

- Spring-boot-api:
    - Creo proyecto poc-api desde Spring initializr con dependencias: Spring Web, Spring Data JPA, PostgreSQL Driver, Lombok.
    - Creo controlador: ApiController.java
    - Configuración bbdd: application.properties
    
- Angular-app:
    - Creo proyecto standalone.
    - Creo componentes: login y home.
    - Configuración de rutas: app.routes.ts
    - Creo servicio para llamar a la api
    - Creo login.
    - Creo página home.

- Flutter-app:
    - Creo proyecto flutter.
  
- Dockerizar apis Spring Boot y Angular:
    - Creo Dockerfile para el proyecto Spring Boot.
    - Creo servidor web Nginx para servir los archivos estáticos de Angular construidos: nginx.conf
    - Creo Dockerfile para Angular.

- Creo Docker Compose en la raiz del repositorio: docker-compose.yml
    - services: Define cada contenedor (backend, frontend, db, pgadmin).
    - build: Especifica la ruta al directorio que contiene el Dockerfile para construir la imagen.
    - container_name: Nombre para el contenedor.
    - ports: Mapea puertos HOST:CONTENEDOR.
    - environment: Establece variables de entorno dentro del contenedor. Importante para pasar credenciales de BD a la API y a pgAdmin.
    - depends_on: Define dependencias de inicio entre servicios.
    - volumes: Define volúmenes para persistir datos (base de datos, configuración pgAdmin).
    - networks: Define una red personalizada (poc-network) para que los contenedores puedan comunicarse entre sí usando sus nombres de servicio (e.g., spring-boot-api, db).
    - restart: unless-stopped: Reinicia los contenedores si fallan, a menos que se detengan manualmente.
 
- Ejecutar:
    - En la raiz del repositorio: docker-compose up --build -d






