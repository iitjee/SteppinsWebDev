if(condition) 
  return "condition is true"
else 
  return "condition is false"

//shorthand jsx syntax
return (condition) ? "Condition is true" : "Condition is false"

(in parts/Display.js)
    var React = require('react');

    var Display = React.createClass({
      render() { //checking 'if' property of this.props (this is a custom one only)
        return (this.props.if) ? <div>{this.props.children}</div> : null;
      }
    });

    module.exports = Display;
    
    
    
//    We'll use this Display component in Audience component
  var React = require('react');
  var Display = require('./parts/Display'); 

  var Audience = React.createClass({
    render() {
      return (
        <div>
          <Display if={this.props.status === 'connected'}> //status prop is passed on to 'Display' by APP component
            <h1>Join the session</h1>
          </Display>
        </div>
      );
    }
  });
  module.exports = Audience;  
  
  
  //so what happens is that, Display will render <div>{this.props.children}</div> when status is connected
  //<h1>Join the session</h1> will pass as children to Display component
  
  
  //and render null when it's disconnected. Check this by connecting and disconnecting from the terminal
  
