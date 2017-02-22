


Our application is going to have three main screens(=> 3 Components) 
- One for the speaker,the leader of the presentation; (#speaker) 
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
    import { Router, Route, hashHistory } from 'react-router'


    var APP = require('./components/APP');
    var Audience = require('./components/Audience'); 
    var Speaker = require('./components/Speaker');
    var Board = require('./components/Board');

    var myroutes = (  //new
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
  <Router history={hashHistory} routes={myroutes}/>
  ), document.getElementById('react-container'));

/* or you can try this syntax
render((
  <Router>
    <Route path="/" component={App}/>
    <Route path=....>
  </Router>
), el);
*/


//NOTE: SOME CHANGES ARE NEEDED TO THIS CODE. ROUTEHANDLER IS ALSO DEPRECATED
//   https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v1.0.0.md


- Any properties that we need to pass to the audience, speaker and board components need to be passed through the route 
handler. Since all of our data is going to be saved to the state of our app component, we will need to pass this information 
as properties to the route handler. So let's go ahead and open up our app component in the Components directory. So, we have 
already passed the current state of the status and the title down to the header, but we haven't passed that state down to the 
board or the audience, or the speaker components. So, we are going to be passing the state down to the child components as 
properties, so let's just go ahead and pass the title to the route handler.



