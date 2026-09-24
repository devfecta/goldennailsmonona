FROM node:26.5.0 AS build
LABEL maintainer="devfecta@gmail.com"
LABEL version="1.0"
LABEL description="Golden Nails with Next.js"
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dev
