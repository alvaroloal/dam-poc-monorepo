# dam-poc-monorepo - prueba de concepto
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






