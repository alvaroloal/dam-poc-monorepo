# Stage 1: Build the Angular application
FROM node:18-alpine AS build
WORKDIR /app
# Copia package.json y package-lock.json
COPY angular-app/package*.json ./
# Instala dependencias
RUN npm install
# Copia el resto del código fuente de la app Angular
COPY angular-app/ ./
# Construye la aplicación para producción
# Asegúrate que outputPath en angular.json sea "dist/angular-app" (o ajusta aquí)
RUN npm run build -- --configuration production --output-path=dist

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
# Elimina la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf
# Copia nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copia los archivos construidos de Angular desde la etapa 'build' al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Expone el puerto 80 (puerto por defecto de Nginx)
EXPOSE 80
# Comando para iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]