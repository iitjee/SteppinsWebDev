


Our application is going to have three main screens(=> 3 Components) 
- One for the speaker,the leader of the presentation; (#leader) 
- and one for each audience member; (#) (DefaultRoute)
- and then one for the Board. (#board)

$npm install --save react-router



(Audience.js)
    var React = require('react');

    var Audience = React.createClass({
      render() {
        return (<h1>Audience</h1>);
      }
    });

    module.exports = Audience;

(Board.js)
    var React = require('react');

    var Board = React.createClass({
      render() {
        return (<h1>Board</h1>);
      }
    });

    module.exports = Board;
    
(Speaker.js)
    var React = require('react');

    var Speaker = React.createClass({
      render() {
        return (<h1>Speaker</h1>);
      }
    });

    module.exports = Speaker;

// Now we need to add the routes that will decide which component to display. The file where we're rendering the component is 
//actually our APP client.
(app-client.js)
    var React = require('react');
    var Router = require('react-router'); //new
    var Route = Router.Route;  //new 
    var DefaultRoute = Router.DefaultRoute; // //new

    var APP = require('./components/APP');
    var Audience = require('./components/Audience'); 
    var Speaker = require('./components/Speaker');
    var Board = require('./components/Board');

    var routes = (  //new
      <Route handler={APP}>
        <DefaultRoute component={Audience} />
        <Route name="speaker" path="speaker" component={Speaker}></Route>
        <Route name="board" path="board" component={Board}></Route>
      </Route>
    );
 
 //Router.run is deprecated (as done in exfiles)
  render((
  <Router> {Routes} </Router>
  ), document.getElementById('react-container'));









