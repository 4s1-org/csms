FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

RUN npm i pnpm serve -g

COPY . .
RUN pnpm install
RUN pnpm recursive exec pnpm run build

RUN cd csms-server
EXPOSE 3001
CMD ["pnpm", "run", "start:prod"]
