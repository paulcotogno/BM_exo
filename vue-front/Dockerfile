FROM node:10

WORKDIR /usr/src/front

COPY package*.json ./

RUN npm i

EXPOSE 8080

CMD ["npm", "run", "serve"]