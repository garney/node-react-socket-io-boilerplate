const shortId = require('shortid');
|
export default class Socket {
  constructor(col) {

  }

  static init(server) {

    const io = require('socket.io')(server);
    io.on('connection', function(socket){
      console.log('connection established');
      socket.emit(`connected`, shortId.generate());
      socket.on('disconnect', function(){
        // logger.info(`session disconnected: test`);
      });
    });
    Socket.checkRoomChanges();
    return io;
  }

}
