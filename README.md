# Charging Station Management System

Managementsystem für Ladesäulen -\
Grundlagen und Implementierung

Charging Station Management System -\
Fundamentals and Implementation

## Setup

Dieses Projekt verwendet den alternativen Paketmanager [pnpm](https://pnpm.io/), welcher zuvor einmalig installiert werden muss.

```bash
# Install pnpm
npm install pnpm --global
```

Anschließend können die Abhängigkeiten installiert und alle Pakete gebaut werden.

```bash
# Install dependencies and devDependencies
pnpm install --recursiv
# Build packages
pnpm exec --recursiv pnpm build
```

Zum Abschluss muss eine Konfigurationsdatei für das CSMS mit Hilfe des Setups angelegt werden.

```bash
# Execute server setup
node csms/dist/setup.js
```

## Starten

```bash
# CSMS
cd csms && pnpm run start
# CSMS UI
cd csms-ui && pnpm run start
# CSS UI
cd csms-ui && pnpm run start
```

## Docker

```bash
# Build
docker build -t csms .

# Start
docker stop csms
docker rm csms
docker run -it \
  --publish 3000:3000 \
  --publish 3001:3001 \
  --publish 3002:3002 \
  --name csms \
  csms:latest

# Show into running container
docker exec -it csms sh
```
