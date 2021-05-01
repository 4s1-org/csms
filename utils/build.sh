#!/bin/bash

cd ..

pnpm install
# Libs
pnpm run build --prefix common-lib
pnpm run build --prefix ocpp-lib
# Server
pnpm run build --prefix csms-lib
pnpm run build --prefix csms-server
# CSS
pnpm run build --prefix css-lib
pnpm run build --prefix css-cli
# UIs
pnpm run build --prefix csms-server-ui
pnpm run build --prefix css-ui
