FROM node:23

WORKDIR /app

COPY ./www/package+.json ./

RUN npm install