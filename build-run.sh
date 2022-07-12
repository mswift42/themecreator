#!/bin/bash
docker build -t themecreator:test .
docker run --network=host -it --name test themecreator:test
