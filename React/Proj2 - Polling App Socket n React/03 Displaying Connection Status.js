(in Header.js)
      var React = require('react');
      var Header = React.createClass({

        propTypes: {
          title: React.PropTypes.string.isRequired
        },

        getDefaultProps() { //new
          return {
            status: 'disconnected'
          }
        },

        render() {
          return ( //note we're using className as class is reserved keyword
            <header className="row"> //this header is different from our Header component! :p
              <div className="col-xs-10"> //take 10 of the 12 columns
                <h1>{this.props.title}</h1>
              </div>
              <div className="col-xs-2"> //take the 2 remaining columns
                <span id="connection-status" className={this.props.status}></span> //we've applied styles to id:connection-status in our css file
              </div>
            </header>
          );
        }

      });
     module.exports = Header;
     
/*Great. We need to go ahead and send the connection status down to this component, and we're going to do that from the APP. So, with react, what we're going to do is our APP is going to manage the entire state of the application. So whether we're 
connected or not will be a state variable in our APP. So as the state of our APP changes, we're going to pass that state down 
to our child components as properties. So in this case, we need to pass the connection state down to our child component as a 
property. So in our APP component, what we need to do is set up an initial state. */
(in App.js)
    getInitialState() {
        return {
            status: 'disconnected'
        }
    }
    
//now we will pass it to the header component as a property
    render() {
            return (
                <div>
                    <Header title="New Header" status={this.state.status} />
                </div>
            );
        }
        
// Now the last thing I need to do is instead of alerting the user that this is connected, I need to change the state. So 
//originally we will start as disconnected, but when the Socket.IO actually connects and fires the connection callback, we are 
//going to set that state.
      connect() {
        this.setState({ status: 'connected' });
    },

    disconnect() {
        this.setState({ status: 'disconnected' });
    },
    
//Hnadling Disonnection
(in app-server.js)
    io.sockets.on('connection', function (socket) {

      socket.once('disconnect', function() { //when this happens, 'this.socket.on('disconnect',..) in APP.js will also be //called
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected: %s sockets remaining.", connections.length);
      });

      connections.push(socket);
        console.log("Connected: %s sockets connected.", connections.length);
    });
    
    


