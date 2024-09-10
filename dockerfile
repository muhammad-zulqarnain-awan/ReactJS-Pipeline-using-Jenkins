FROM node:alpine as build

LABEL maintainer="Muhammad Zulqarnain Awan"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# COPY BUILD FROM NODE CONTAINER TO NGINX CONTAINER
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/dist ./

EXPOSE 80