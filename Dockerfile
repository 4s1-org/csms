FROM registry.gitlab.com/yellowgarbagegroup/docker-images/node:14-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY . .
RUN pnpm -r install
# Libs
RUN pnpm run build --prefix common-lib
RUN pnpm run build --prefix ocpp-lib
# CSMS
RUN pnpm run build --prefix csms-lib
RUN pnpm run build --prefix csms
# CSS
RUN pnpm run build --prefix css-lib
RUN pnpm run build --prefix css-cli
# UIs
RUN pnpm run build --prefix csms-ui
RUN pnpm run build --prefix css-ui

# -----------------------------
FROM registry.gitlab.com/yellowgarbagegroup/docker-images/node:14-alpine

RUN mkdir -p /app
WORKDIR /app

RUN mkdir -p /app/data

RUN apk add --no-cache bash supervisor
RUN npm i http-server -g

COPY --from=builder /app/.pnpm-store/        ./.pnpm-store/
COPY --from=builder /app/pnpm-lock.yaml      .
COPY --from=builder /app/pnpm-workspace.yaml .
COPY --from=builder /app/supervisord.conf    .

COPY --from=builder /app/common-lib/package.json   ./common-lib/
COPY --from=builder /app/common-lib/dist/          ./common-lib/dist/

COPY --from=builder /app/csms-lib/package.json     ./csms-lib/
COPY --from=builder /app/csms-lib/dist/            ./csms-lib/dist/

COPY --from=builder /app/csms/package.json         ./csms/
COPY --from=builder /app/csms/dist/                ./csms/dist/

COPY --from=builder /app/css-cli/package.json      ./css-cli/
COPY --from=builder /app/css-cli/dist/             ./css-cli/dist/

COPY --from=builder /app/css-lib/package.json      ./css-lib/
COPY --from=builder /app/css-lib/dist/             ./css-lib/dist/

COPY --from=builder /app/ocpp-lib/package.json     ./ocpp-lib/
COPY --from=builder /app/ocpp-lib/dist/            ./ocpp-lib/dist/

COPY --from=builder /app/csms-ui/build/            ./csms-ui/build/

COPY --from=builder /app/css-ui/build/             ./css-ui/build/

RUN pnpm install

EXPOSE 3000 3001 3002
VOLUME ["/app/data"]
CMD ["supervisord", "-c", "/app/supervisord.conf"]
