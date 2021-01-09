# Build app
FROM node:15.5-alpine AS builder

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

# Production dependencies
FROM node:15.5-alpine AS dependencies

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --prod

COPY --from=builder /app/static static
COPY --from=builder /app/__sapper__ __sapper__

# Production image
FROM node:15.5-slim

WORKDIR /app

COPY --from=dependencies /app .

EXPOSE 80
ENV PORT 80
CMD ["node", "__sapper__/build"]
