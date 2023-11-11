# Specify the Docker container name
CONTAINER_NAME= "bgs-portfolio"
PORT_ID= 80

echo "Stopping and removing existing container..."
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

echo "re-Building Docker image..."
docker build -t bgsfront  .
echo "Build Done ..."
docker run -d -p $PORT_ID:80

echo "project is exposed on "+$PORT_ID
