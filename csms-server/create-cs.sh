#!/bin/zsh

for i in $(seq -f "%03g" 1 11)
do
  echo '{"username":"LS'$i'","password":"test","uniqueIdentifier":"LS'$i'"}' > data/LS$i.json
done