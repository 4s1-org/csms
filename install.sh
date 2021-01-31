#!/bin/bash

cd shared
npm install
npm run build
cd ..

cd simulator
npm install
npm run build
cd ..

cd backend
npm install
npm run build
cd ..

