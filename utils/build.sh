#!/bin/bash

cd ..

pnpm install
pnpm run build --prefix common-lib
pnpm run build --prefix ocpp-lib

pnpm run build --prefix csms-lib
pnpm run build --prefix csms-server
pnpm run build --prefix csms-server-ui

pnpm run build --prefix css-lib
pnpm run build --prefix css-ui
pnpm run build --prefix css-cli
