#!/bin/bash
UID=$(id -u)
GID=$(id -g)
docker build -t themecreator:test .
docker run --network=host -it \
       -u $UD:$GID -v $(pwd)/app.core:/usr/src/app \
       --name test themecreator:test
