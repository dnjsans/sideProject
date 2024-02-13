scp ./script/updateServer.sh userid@mydomain.com:/var/myserver/updateServer.sh
ssh userid@mydomain.com 'chmod 755 /home/myserver/updateServer.sh'
ssh userid@mydomain.com '/var/myserver/updateServer.sh $1 $2'