#!/bin/zsh

docker run -it \
  -p 5000:5000 \
  -p 3000:3000 \
  -p 3001:3001 \
  -p 3002:3002 \
  csms \
  sh
