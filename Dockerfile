FROM node:21.6.2

WORKDIR /


COPY . .

RUN npm install --production

RUN npm run build
EXPOSE 3000

CMD ["npm", "run","dev"]