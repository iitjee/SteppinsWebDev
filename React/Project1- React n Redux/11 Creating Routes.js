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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Yes! Webpack handles all the bundling and stuff

render(
  <Router history={browserHistory} routes={routes} />, //we pass our history prop onto our Router compo
  document.getElementById('app');
);


//since we referenced styles.css, let's make it!
(in src, create styles folder -> styles.css)
//we will be mostly using Bootstrap and just augment our own styles here to improve our layout
    #app { /
      font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #4d4d4d;
      min-width: 550px;
      max-width: 850px;
      margin: 0 auto;
    }

    a.active {
      color: orange;
    }

    nav {
      padding-top: 20px;
    }





