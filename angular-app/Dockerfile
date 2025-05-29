FROM node:18-alpine AS build
WORKDIR /app

COPY angular-app/package*.json ./
RUN npm install

COPY . .

RUN npx ng build --configuration production

FROM nginx:alpine

COPY --from=build angular-app/dist/angular-app /usr/share/nginx/html