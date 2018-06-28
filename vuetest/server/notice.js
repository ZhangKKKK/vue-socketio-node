class createChannel{
    constructor(id, socket){
        let channel = new Channel(id, socket, this)
        channel.init()
        channel.index = this.channels.length
        this.channels.push(channel)
    }
    init () {
        let self = this
        let roomInfo = this.cxt.room.collections[0]
        this.roomInfo = roomInfo
        this.socket.join('roomId' + roomInfo.id)
        this.socket.emit(this.cxt.eventKeys.emit.sendRooms, roomInfo) /* send出去一个默认的房间 */
        this.socket.on(this.cxt.eventKeys.client.registerUser, function (id, name) {
          console.log(id + '-' + name + '--' + self.id)
          self.cxt.createUserById(id, name, self.id)
        }) /** 新用户注册 */
        this.socket.on(this.cxt.eventKeys.client.newMsg, function (msg) { /** 发送消息 */
          self.notifyMsg(msg)
          console.log(msg)
          self.cxt.addMsg(msg)
        })
        this.socket.on(this.cxt.eventKeys.client.closeConn, function () {
          console.log(self.id + '--关闭连接')
          self.cxt.remove(self)
        })
        this.sendUsers()
    }
}


export default {
    createChannel:new createChannel()
}