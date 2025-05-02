FROM node:18-alpine AS build
WORKDIR /app

COPY angular-app/package*.json ./
RUN npm install

COPY angular-app/ .

RUN npx ng build --configuration production

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/angular-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
