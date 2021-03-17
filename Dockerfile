FROM node:14-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

RUN npm i pnpm -g

COPY . .
RUN pnpm install -r
RUN pnpm recursive exec pnpm run build

# CONFIG
RUN node csms-server/dist/setup.js -u admin -p admin -o 3000

# -----------------------------
FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk add --no-cache bash supervisor
RUN npm i pnpm http-server -g

COPY --from=builder /app/pnpm-lock.yaml .
COPY --from=builder /app/pnpm-workspace.yaml .
COPY --from=builder /app/dev.crt .
COPY --from=builder /app/dev.key .
COPY --from=builder /app/supervisord.conf .

COPY --from=builder /app/common-lib/package.json   ./common-lib/
COPY --from=builder /app/common-lib/dist/          ./common-lib/dist/
COPY --from=builder /app/csms-lib/package.json     ./csms-lib/
COPY --from=builder /app/csms-lib/dist/            ./csms-lib/dist/
COPY --from=builder /app/csms-server/package.json  ./csms-server/
COPY --from=builder /app/csms-server/dist/         ./csms-server/dist/
COPY --from=builder /app/css-cli/package.json      ./css-cli/
COPY --from=builder /app/css-cli/dist/             ./css-cli/dist/
COPY --from=builder /app/css-lib/package.json      ./css-lib/
COPY --from=builder /app/css-lib/dist/             ./css-lib/dist/
COPY --from=builder /app/ocpp-lib/package.json     ./ocpp-lib/
COPY --from=builder /app/ocpp-lib/dist/            ./ocpp-lib/dist/

COPY --from=builder /app/csms-server-ui/public/    ./csms-server-ui/public/
COPY --from=builder /app/css-web/public/           ./css-web/public/

RUN pnpm install -r

CMD ["supervisord", "-c", "/app/supervisord.conf"]