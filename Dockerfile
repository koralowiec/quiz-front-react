FROM node:12-stretch AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html