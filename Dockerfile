FROM node:18.14.0-alpine as dependencies

WORKDIR /bitwise-challenge

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile --ignore-scripts

FROM dependencies as builder
WORKDIR /bitwise-challenge
COPY . .
COPY --from=dependencies /bitwise-challenge/node_modules ./node_modules
RUN pnpm build

FROM dependencies as runner
WORKDIR /bitwise-challenge
ENV NODE_ENV production

COPY --from=builder /bitwise-challenge/next.config.js ./
COPY --from=builder /bitwise-challenge/public ./public
COPY --from=builder /bitwise-challenge/.next ./.next
COPY --from=builder /bitwise-challenge/node_modules ./node_modules
COPY --from=builder /bitwise-challenge/package.json ./package.json

EXPOSE 3000

CMD ["pnpm", "start"]