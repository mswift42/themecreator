#!/bin/bash

cd $(dirname $0)

docker build -t themecreator:test .
docker run --network=host -it \
       -u $UID:$GID -v $(pwd)/app.core:/usr/src/app \
       --name test themecreator:test
