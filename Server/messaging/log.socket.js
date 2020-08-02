module.exports = (io, socket) => {
    socket.on('add', data => {
        //Do some work
        io.emit('new-log', 'Added');
    });
}

