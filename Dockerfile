FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine AS runtime

WORKDIR /app

COPY --from=builder /app .
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
