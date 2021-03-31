#!/bin/bash

set -x
set -e

cd ..
pnpm install

cd common-lib
pnpm run lint
pnpm run build
pnpm run test
cd ..

cd ocpp-lib
pnpm run lint
pnpm run build
pnpm run test
cd ..

cd csms-lib
pnpm run lint
pnpm run build
pnpm run test
cd ..

cd csms-server
pnpm run lint
pnpm run build
pnpm run test
pnpm run test:e2e
cd ..

cd csms-server-ui
pnpm run lint
pnpm run build
pnpm run test
cd ..

cd css-lib
pnpm run lint
pnpm run build
pnpm run test
cd ..

cd css-ui
pnpm run lint
pnpm run build
pnpm run test
cd ..

cd css-cli
pnpm run lint
pnpm run build
pnpm run test
cd ..
