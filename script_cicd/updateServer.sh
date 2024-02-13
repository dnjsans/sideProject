mkdir -p /var/myserver/upload

docker container rm -f mycontainer

docker login --username $1 --password $2

docker pull dockerRepo/myimage:v1.0

export localIp=`hostname -I | cut -d ' ' -f1`-

docker run -d -p 9090:9090 -e IP=$localIp --name mycontainer --network my-net --volume="/var/myserver/upload:/home/node/app/upload" --restart always dockerRepo/myimage:v1.0
