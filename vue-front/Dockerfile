FROM node:10

WORKDIR /usr/src/app/vue-front

COPY package*.json ./

RUN npm i

EXPOSE 8080

CMD ["npm", "run", "serve"]