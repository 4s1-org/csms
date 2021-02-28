#!/bin/bash

docker build -t csms .
echo DOCKER SAVE
docker save csms | gzip > docker-csms.tar.gz
echo COPY TO NAS
scp docker-csms.tar.gz nas:/volume1/docker/

exit 0

#--------------------

ssh nas

sudo -i

cd /volume1/docker/
docker load < docker-csms.tar.gz
docker stop csms
docker rm csms
docker run -d \
  -p 3000:3000 \
  -p 3001:3001 \
  -p 3002:3002 \
  --name csms \
  csms:latest
