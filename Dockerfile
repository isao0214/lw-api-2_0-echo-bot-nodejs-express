FROM node:16

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY lineworks.js .
COPY index.js .

RUN npm install

EXPOSE 8000
CMD ["node", "index.js"]

