FROM node:12

WORKDIR /usr/src/app/notes

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]