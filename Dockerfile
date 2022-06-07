FROM node:17-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN yarn install 

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["yarn","prod"]