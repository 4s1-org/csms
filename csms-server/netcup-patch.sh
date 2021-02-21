#!/bin/sh

sed -i 's/"@yellowgarbagebag\/common-lib": "workspace:\*"/"@yellowgarbagebag\/common-lib": "file:..\/yellowgarbagebag-common-lib.tgz"/g' package.json
sed -i 's/"@yellowgarbagebag\/csms-lib": "workspace:\*"/"@yellowgarbagebag\/csms-lib": "file:..\/yellowgarbagebag-csms-lib.tgz"/g' package.json
sed -i 's/"@yellowgarbagebag\/ocpp-lib": "workspace:\*"/"@yellowgarbagebag\/ocpp-lib": "file:..\/yellowgarbagebag-ocpp-lib.tgz"/g' package.json
