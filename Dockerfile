FROM node:12

WORKDIR /api-server2

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=9994

ENV NODE_ENV=development

EXPOSE 9994

CMD ["node", "index.js"]







