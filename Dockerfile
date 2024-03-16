FROM node:21.6.2

WORKDIR /


COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm", "run","dev"]