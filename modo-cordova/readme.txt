windows
    在cmd中运行

         netstat -aon | findstr 8081

    找到占用的进程id ，应该是最后一列的数字

         taskkill /f -pid 上面进程id

    mac/Linux
    在terminal 中

          lsof -i TCP:8081

    找到占用该端口的进程id ，pid的一列

        kill -9  上面的pid

