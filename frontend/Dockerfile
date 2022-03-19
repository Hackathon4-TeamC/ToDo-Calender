FROM node:17-alpine3.14

ENV NODE_VERSION 16.13.1
WORKDIR /frontend
COPY . /frontend
EXPOSE 3000
ENV CI=true
CMD npm start