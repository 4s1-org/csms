#!/bin/zsh

docker run -it \
  -p 3000:3000 \
  -p 3001:3001 \
  -p 3002:3002 \
  csms

# docker build -t csms .
# docker exec -it csms sh
