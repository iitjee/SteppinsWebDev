$npm install --save react
$mkdir components
$touch components/APP.js // first component that we will render into our index.html

(in app-server.js)
var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(3000);
console.log("vikhyath, polling server is running! :)")


$touch app-client.js (in root dir)
So there we have a server which is our main server side group file (app-server.js)
And now we have our client which is going to be our main client site file but first JavaScript that will run inside of the
 browser. So in this file, we want to render our APP component which means we need to include React and we need to include our
 APP component.
 
(APP.js)
 var React = require('react');

var APP = React.createClass({
	render() { //es6
		return (<h1> Hello World from React </h1>); //jsx
	}
});

modules.exports = APP;

 now we want to render the app component in app-client.js
 (in app-client.js)
 var React = require('react');
var APP = require('./components/APP.js');

React.render(<APP />, document.getElementById('react-container'));


Now we want to import this app-client js in index.html which's not possible for two reasons:
1. require statements? Browser doesn't know how to handle thme
2. ES6 and JSX Syntax in APP.js 
For both we'll use webpack

$npm install -g webpack (for (1) and notice, it's global installation)

So in index.html, instead of 
	<script type="text/javascript" src="app-client.js"></script>
we'll write
  	<script type="text/javascript" src="bundle.js"></script>
bundle.js will have all the client-side files  

$npm install babel-loader (local installation)
//this particularly works along with webpack


and then create webpack.config.js
module.exports ={
  entry: "./app-client.js",
  output: {
  	filename: "public/bundle.js"
  },
module: { 
    loaders: [
      {
        exclude: /(node_modules|app-server.js)/,  //(regular express) don't look in /node_modules folder and app-server.js
        loader: "babel-loader"
     }
    ]
  }
}


