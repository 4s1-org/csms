#!/bin/bash

cd shared
npm install
npm build
cd ..

cd simulator
npm install
npm build
cd ..

cd backend
npm install
npm build
cd ..

