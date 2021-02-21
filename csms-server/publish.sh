#!/bin/zsh

cd ..

cd common-lib
pnpm run build
pnpm pack
mv  yellowgarbagebag-common-lib-1.0.0.tgz  yellowgarbagebag-common-lib.tgz
scp yellowgarbagebag-common-lib.tgz        netcup:/srv/csms
cd ..

cd csms-lib
pnpm run build
pnpm pack
mv  yellowgarbagebag-csms-lib-1.0.0.tgz  yellowgarbagebag-csms-lib.tgz
scp yellowgarbagebag-csms-lib.tgz        netcup:/srv/csms
cd ..

cd ocpp-lib
pnpm run build
pnpm pack
mv  yellowgarbagebag-ocpp-lib-1.0.0.tgz  yellowgarbagebag-ocpp-lib.tgz
scp yellowgarbagebag-ocpp-lib.tgz        netcup:/srv/csms
cd ..

cd csms-server
pnpm run build
scp -r dist       netcup:/srv/csms/csms-server.meinusch.eu
scp package.json  netcup:/srv/csms/csms-server.meinusch.eu
scp netcup-patch.sh  netcup:/srv/csms/csms-server.meinusch.eu
scp csms-server.json  netcup:/srv/csms/csms-server.meinusch.eu

scp -r third-party  netcup:/srv/csms/csms-server.meinusch.eu

ssh netcup "cd /srv/csms/csms-server.meinusch.eu && chmod +x netcup-patch.sh && ./netcup-patch.sh"

