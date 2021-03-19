#!/bin/bash

docker stop csms
docker rm csms
docker run -d \
  -p 3000:3000 \
  -p 3001:3001 \
  -p 3002:3002 \
  -v /srv/csms/data:/app/data \
  --name csms \
  csms:latest
