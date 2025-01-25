FROM node:23-bookworm-slim as builder

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

RUN npm run build

FROM node:23-bookworm-slim as final

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/package*.json ./

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start"]