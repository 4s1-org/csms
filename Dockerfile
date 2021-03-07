FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

# Install dependencies
RUN apk add --no-cache bash supervisor
RUN npm i pnpm http-server -g

COPY . .
RUN pnpm install
RUN pnpm recursive exec pnpm run build

# CONFIG
RUN pnpm --prefix csms-server setup -- -u admin -p admin -o 3000

#CMD ./my_wrapper_script.sh
CMD ["supervisord", "-c", "/app/supervisord.conf"]
