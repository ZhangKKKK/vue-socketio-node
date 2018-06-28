var app = require('http').createServer(handler),
    io = require('socket.io').listen(app);
    app.listen(8888)

    function handler(req,res){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>ooo</h1>')
    }
io.on('connection',function(socket){
    socket.on('new1',data=>{
        console.log(data)
    })
    socket.on('new3',data=>{
        console.log('in')
        socket.emit('new3',data)
    })
    for(let i=0; i<100; i++){
        setTimeout(()=>{
            io.sockets.emit('pro',i);
            console.log("当前进度为",i+1);
        },10*i)
    }
})
