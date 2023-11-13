#!/bin/bash

# Specify the Docker container name
CONTAINER_NAME="bgs-portfolio"

echo "Stopping and removing existing container..."
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

echo "re-Building Docker image..."
docker build -t $CONTAINER_NAME  .

echo "Build Done ..."
docker run -d -p 80:80 $CONTAINER_NAME

echo "project is exposed on 80"
