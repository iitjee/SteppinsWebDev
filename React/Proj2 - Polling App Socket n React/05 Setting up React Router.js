


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
        <Route  path="speaker" component={Speaker}></Route> //name attribute of Route is deprecated
        <Route  path="board" component={Board}></Route>
      </Route>
    );
 
          
  /*        We removed <Route name> in 1.0 for a few important reasons:
- Dynamically loading route config (i.e. getChildRoutes) means that we may not actually be able to build real URLs for <Link>s 
whose route config has not yet loaded
- We believe that using real URL paths in <Link to> doesn't take any extra time–you have to look up the route path or the name, 
which are usually pretty reflective of each other
- You don't have to know the parameter names to create links now
- We want to encourage users to NOT change their URLs–use a <Redirect> instead
 */
          
 //Router.run is also deprecated (as done in exfiles)
  render((
  <Router> {Routes} </Router>
  ), document.getElementById('react-container'));









