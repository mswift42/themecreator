#!/bin/bash
docker container kill test
docker rm $(docker ps -aq)
docker rmi themecreator:test
