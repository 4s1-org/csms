#!/bin/bash

cd ..

pnpm install
# Libs
pnpm run build --prefix common-lib
pnpm run build --prefix ocpp-lib
# CSMS
pnpm run build --prefix csms-lib
pnpm run build --prefix csms
# CSS
pnpm run build --prefix css-lib
pnpm run build --prefix css-cli
# UIs
pnpm run build --prefix csms-ui
pnpm run build --prefix css-ui
