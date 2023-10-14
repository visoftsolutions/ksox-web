FROM node:20-alpine AS installer
WORKDIR /app
COPY . .
RUN npm ci

FROM installer AS builder
WORKDIR /app
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
RUN npm install fastify undici @fastify/static zod @dnlup/fastify-traps
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/server /app/server
ENV PORT=80
ENTRYPOINT [ "node", "server/entry.fastify" ]