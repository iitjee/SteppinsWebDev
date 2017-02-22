
(in parts/Join.js)
    var React = require('react');

    var Join = React.createClass({
      join() { //event handler for the form button
        var memberName = React.findDOMNode(this.refs.name).value; //it will go into the react DOM and it will find the element that we're looking for.
        alert("TODO: Join member " + memberName);
      },

      render() {
        return (//notice the onSubmit Button eventHandler for the form. The button is automatically binded to this form
          <form action="javascript:void(0)" onSubmit={this.join}> //javascriptLvoid(0) when we submit this form, it won't send it anywhere. It won't try and make a server side post back, or anything like that
            <label>Full Name</label>
            <input ref="name" //using ref to gather input of the user. it's like id. findDOMNode(this.refs.name) ==getElementById("name")
                 className="form-control"
                   placeholder="enter your full name..."
                   required /> //required is like a keyword to make the input field mandatory
            <button className="btn btn-primary">Join</button>
          </form>
        );
      }

    });
    module.exports = Join;
    
    - So once we have collected the audience member's name, we're going to need to send it back to the server. We're going to
 do this by emitting a join event on the socket and passing the audience member's name all the way back to the server.
  Now all data that communicates between the client and the server actually goes through our app-component.
  we're also going to add an emit function to this so that we can send data back to the server.
  
  (in Join.js)
  //in join method
  instead of `alert("TODO: Join member " + memberName);` 
  
  we'll have `this.props.joinsemit('join', { name: memberName });`
  //this will emit a custom event back to the server. This will pass some data back to the server viz { name: memberName }

  

(in APP.js)
//add this method
// Now all incoming data is coming in on the this.socket. That means all of the outgoing data to the server will also be //handled on this.socket. This.socket has its own emit function that we can use to send data back to the server. Now let's go //look at that join form again. When we invoke the emit property, we send the custom event name, join, and the payloaded data.

      myemitfunction(eventName, payload) {
            this.socket.emit(eventName, payload);
        },
        // All outgoing data to the server will come through this emit function . All incoming data from the server will be //added to these listeners inside of the componentWillMount.
 ...
 in render()
                  <RouteHandler qqemit={this.myemitfunction} {...this.state} /> //this.emit represents the emit method
// emit is sent as prop by App to RouteHandler(viz Audience in this case)                  
      
(in Audience.js, we'll use Join Component)
      var React = require('react');
      var Display = require('./parts/Display');
      var Join = require('./parts/Join');

      var Audience = React.createClass({
        render() {
          return (
            <div>
              <Display if={this.props.status === 'connected'}>
                <h1>Join the session</h1>
                <Join joinsemit={this.props.qqemit}/> // The audience does not have a property that contains an emit function either. //So I need to add that to our APP component.
              </Display>
            </div>
          );
        }
      });

      module.exports = Audience;



//The emit function is being passed down as a property to the Audience component, but also the Speaker and Board component. So 
//if we need to use the emit function in those components, we have that now as well. So the last thing that we need to do is 
//collect the data on the server. If the client emits a custom event, we need to listen for that custom event on the server. So (in app-server.js)
//in io.sockets.on, add this method
        socket.on('join', function(payload) {
        console.log("Audience Joined: %s", payload.name);
      });

//so the join event is emitted by the this.join() eventHandler in Join Component. This join component is actually used
//inside Audience.js

    
    
