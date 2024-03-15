FROM node:21.6.2

WORKDIR /

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run","dev"]