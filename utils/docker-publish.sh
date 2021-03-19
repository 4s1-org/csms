#!/bin/bash

./docker-build.sh
./docker-save.sh

echo COPY TO NAS
scp docker-csms.tar.gz nas:/volume1/docker/
scp docker-load.sh     nas:/volume1/docker/
scp docker-run.sh      nas:/volume1/docker/

#scp docker-csms.tar.gz azure:~
