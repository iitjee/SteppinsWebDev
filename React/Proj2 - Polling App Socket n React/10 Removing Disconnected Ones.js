- At present, when an audience member joins we are adding them to that audience array, but when they disconnect we are not 
removing them from that audience array.
 Now what we need to be able to do is we need to search this audience array here for any audience members that have the same 
socket ID as the one that was disconnected. We're going to use the underscore framework to help us with this.

Underscore has a lot of functions for working with arrays. And we're going to use the findWhere function to help us find one of 
these audience members in the array based on the socket ID. 

(in app-server.js)
  var audience = [];
  
  io.sockets.on('connection', (socket) => {
  
    socket.once('disconnect', () => {
      var member = _.findWhere(audience, { id: this.id });
      if (member) {
        audience.splice(audience.indexOf(member), 1);
        io.sockets.emit('audience', audience);
        console.log("Left: %s (%s audience members)", member.name, audience.length)
      }
      connections.splice(connections.indexOf(socket), 1);
      socket.disconnect();
      console.log("Disconnected: %s sockets remaining.", connections.length);
    });
  ...
  }
    
