#!/bin/bash

pnpm install

cd shared
npm run build
cd ..

cd simulator
npm run build
cd ..

cd backend
npm run build
cd ..

