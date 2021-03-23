FROM node:14-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

RUN npm i pnpm -g
RUN pnpm config set store-dir /app/.pnpm-store

COPY . .
RUN pnpm install
RUN pnpm -r exec -- pnpm run build

# -----------------------------
FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

RUN mkdir -p /app/data

RUN apk add --no-cache bash supervisor
RUN npm i pnpm http-server -g
RUN pnpm config set store-dir /app/.pnpm-store

COPY --from=builder /app/.pnpm-store/        ./.pnpm-store/
COPY --from=builder /app/pnpm-lock.yaml      .
COPY --from=builder /app/pnpm-workspace.yaml .
COPY --from=builder /app/supervisord.conf    .

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

COPY --from=builder /app/csms-server-ui/build/    ./csms-server-ui/build/

COPY --from=builder /app/css-web/build/           ./css-web/build/

RUN pnpm install

CMD ["supervisord", "-c", "/app/supervisord.conf"]
