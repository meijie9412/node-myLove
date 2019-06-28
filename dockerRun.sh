#!/bin/bash
#docker 启动命令 sh dockerRun.sh

docker run --rm -it -p 7001:7001 \
--name mylove \
--mount type=bind,\
source=/home/meijie/mj/project/node-myLove,\
target=/node-mylove \
node-mylove