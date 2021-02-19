#!/bin/zsh

for i in $(seq -f "%03g" 1 20)
do
  echo '{"username":"LS'$i'","password":"test","state":"Offline","uniqueIdentifier":"LS'$i'"}' > data/LS$i.json
done
