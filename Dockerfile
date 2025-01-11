FROM node:20 AS builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm cache clean --force

FROM node:20-slim AS runner

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --only=production

COPY --from=builder /usr/app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "start"]