FROM node:latest as build-stage
WORKDIR /app
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/gurkangul/vue-giphy
COPY . ./
RUN npm install
COPY ./ .
RUN npm run build:prod

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
