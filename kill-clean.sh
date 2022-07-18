#!/bin/bash
[ -n "$(docker ps -aq -f status=running)" ] && \
	  docker container kill test
ZOMBIES="$(docker ps -aq -f status=exited)"
[ -n "$ZOMBIES" ] && docker rm "$ZOMBIES"
docker rmi themecreator:test
find . -type d -group docker -exec rm -rf {} \;
