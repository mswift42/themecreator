#!/bin/bash

function cleanup() {
    [ -n "$(docker ps -aq -f status=running)" ] && \
	      docker container kill test
    ZOMBIES="$(docker ps -aq -f status=exited)"
    [ -n "$ZOMBIES" ] && docker rm "$ZOMBIES"
    docker rmi themecreator:test
    find . -type d -group docker -exec rm -rf {} \;
}

trap cleanup EXIT

docker build -t themecreator:test .
docker run --network=host -it \
       -u $UID:$GID -v $(pwd)/app.core:/usr/src/app \
       --name test themecreator:test
