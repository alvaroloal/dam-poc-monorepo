FROM node:18-alpine AS build
WORKDIR /app

COPY angular-app/package*.json ./
RUN npm install

COPY angular-app/ ./

RUN npx ng build --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/angular-app /usr/share/nginx/html
