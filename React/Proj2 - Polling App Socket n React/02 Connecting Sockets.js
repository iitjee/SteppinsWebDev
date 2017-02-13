/* It is now time to incorporate socket.io. socket.io is going to be the tool that we use to send data back and forth between
 the client and the server. socket.io uses web sockets, which allow for a true two-way connection between a client and a 
server. The first thing that we need to do is install socket.io, and we need the socket.io library that will run on the server
 as well as the socket.io library that will run on the client. So we're going to install two modules at the same time with npm 
install. */

$npm install --save socket.io socket.io-client

//The socket.io-client we will use inside of our APP component on the client.



(in app-server.js)
   var express = require('express');
   var app = express();

   app.use(express.static('./public'));
   app.use(express.static('./node_modules/bootstrap/dist'));

   var server = app.listen(3000); //changed from just `app.listen(3000);` we are storing the return value in server variable now

// Now that we have a server variable we can incorporate socket.io with the server that's running on port 3000.
   var io = require('socket.io').listen(server); //Now we've created a socket server that is also listening on localhost port 3000.

   io.sockets.on('connection', function (socket) {
       console.log("Connected: %s", socket.id);
   }); //Now when new sockets are connected we're going to go ahead and log their id on the console.

   console.log("Polling server is running at 'http://localhost:3000'");


//when the browser starts, this component gets mounted. 
// And when our APP component is mounted is when we want to add the socket.io client.
(in APP.js)
     var React = require('react');
     var io = require('socket.io-client'); //new

     var APP = React.createClass({
//'this' refers to instance of our APP component
         componentWillMount() { //life-cycle function
             this.socket = io('http://localhost:3000');  //argument is socket server that we should connect to. That's http://localhost, port 3000.
             this.socket.on('connect', this.connect); //this.connect is our callback defined below
         },

         connect() {
             alert("Connected: " +  this.socket.id);
         },

         render() {
             return (<h1>Hello World from React</h1>);
         }

     });

     module.exports = APP;
          
          
// Now run the app and you'll notice socketIDs will be logged in terminal and as alert in browser.
// Also open a new tab and see, you'll find a new socket connected
          

/* Adding a header React element */
(in /components/parts make Header.js)
//- Now let's add a header component to our app. The header will be used to display the 
// presentation title, the speaker's name, and the connection status to every app screen.           
          var React = require('react');

          var Header = React.createClass({

           propTypes: {
            title: React.PropTypes.string.isRequired //will make sure the title that's coming into this component as a property is a string
           },

           render() {
            return (
             <header>
              <h1>{this.props.title}</h1>
             </header>
            );
           }

          });

          module.exports = Header;
          
//Let's add this header to our app component. 
 (in APP.js)
 var Header = require('./parts/Header');

(in createClass)
              render() {
        return (
            <div>
                <Header title="New Header" />
            </div>
        );
    }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
