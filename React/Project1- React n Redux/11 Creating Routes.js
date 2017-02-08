(in src dir, create routes.js)

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}> //By placing App compo here, it will always be loaded and HomePage|AboutPage will be nested and passed as children
    <IndexRoute component={HomePage} /> //we'll use indexRoute when there is just a root path that we want to expose
    //i.e HomePage will be rendered when path='/'
    <Route path="about" component={AboutPage} /> //AboutPage will be rendered when path=/about
  </Route>
);


/*  Setting Application's Entry Point */
// So as our final step to finish setting up our routes, we need to update our application's entry point, which is index.js. 
// We need to update it so that it will utilize React Router.

(in index.js)
import 'babel-polyfill'; //there are set of features that simple babel cannot transpile
//we can import particular polyfills but here we are importing everything
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; //
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />, //we pass our history prop onto our Router compo
  document.getElementById('app');
);

