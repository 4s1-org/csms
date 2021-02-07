#!/bin/bash

pnpm install

pnpm run build --prefix common-lib
pnpm run build --prefix ocpp-lib
pnpm run build --prefix backend
#pnpm run build --prefix backend-admin-ui
pnpm run build --prefix charging-station-lib
pnpm run build --prefix charging-station-cli
pnpm run build --prefix charging-station-ui
