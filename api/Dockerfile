FROM node:16

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "start"]