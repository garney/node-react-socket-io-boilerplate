import io from 'socket.io-client';
class Socket {
    constructor(url) {
        this.socket = io(url);
        this.defineListeners();
    }

    defineListeners() {
        this.socket.on('connected', (e) => {
            this.connected(e)
        })
    }

    connected(e) {
        console.log('connected');
        console.log(e);
    }
}

export default Socket;