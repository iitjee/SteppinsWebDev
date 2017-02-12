- It is now time to incorporate socket.io. socket.io is going to be the tool that we use to send data back and forth between
 the client and the server. socket.io uses web sockets, which allow for a true two-way connection between a client and a 
server. The first thing that we need to do is install socket.io, and we need the socket.io library that will run on the server
 as well as the socket.io library that will run on the client. So we're going to install two modules at the same time with npm 
install.

$npm install --save socket.io socket.io-client

//The socket.io-client we will use inside of our APP component on the client.

