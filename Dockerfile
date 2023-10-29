FROM node:18-alpine as base

FROM base as builder

ENV HUSKY 0

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base as runner

WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
