# vue-socketio-node
简单上手的小栗子


cd vuetest

npm install 

node server/index

npm run dev


*function中的socket为每个客户端单独连接的socket实例，只通知当前连接用户
*io.sockets 通知所有连接用户
*socket.broadcast 给除了自己以外的客户端广播消息


on   监听
emit 触发