/*

 In 1995, JavaScript was originally created by Brendan Ike at Netscape and then was adopted by Microsoft as JScript. 
 With different versions of a language for different browsers, there were soon an urgent need to standardize the language. 
 
 ECMA, or the European Computer Manufacturer Association, is the governing body that provides the ECMAScript specifications
 for JavaScript browser implementations.

Shortly after its foundation, the ECMAScript 1 spec was released in 1997. Following this, the release of ECMA 2 and ECMA 3 
came out very quickly. EMCA 4 was much argued about, but then was eclipsed by ECMA 5 in 2009, which brought us new array 
methods, like for each, map, and filter. As of June 2015, we now have an official spec for ECMAScript 6, so what does this 
mean for us as JavaScript developers? It means that we now have a ton of new options to work with when designing our JavaScript
projects.

We have new keywords available for declaring variables, like let and const. For functions, we can also use default parameters
and arrow functions. ES 6 also contains classes, template strings, and new ways for dealing with arrays and objects. We'll be
talking about all of these features in greater detail throughout the course.

Browser Support:
----------------
Because all of the browsers do not support all ES6 features, all of our ES6 code should be transpiled.
Transpiling is the process of taking ES6 code that we've written and converting it into ES5, so it can be read by browsers.
We also use transpiling for languages like CoffeeScript and TypeScript. There are many different transpiling tools available.
The most popular is Babel, but we also have Traceur, Closure, and many others.
eg: Babel

Chrome Canary is not stable but you can test out new features

- Babel is becoming one of the most popular tools for trasnpiling ES6 code. With Babel we but ES6 code in and get ES5 code out.
Babel was created by Sebastian McKenzie an Australian developer who now works at Facebook. If you've worked with ReactJS, the 
UI library created at Facebook, you'll notice that Babel is the preferred tool for transpiling the ES6 features back into 
JavaScript. 
*/

In-Browser Transpiling:
(in index.html)
        <!DOCTYPE html>
        <html>
        <head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.js"></script>
          <!-- check with and without the above line ^^ -->
          <script type="text/javascript">
            var nameBuilder = function(firstName="John", lastName="Doe") {
              console.log(firstName + " " + lastName);
            };

            nameBuilder();
          </script>
          <title>Working with Babel</title>
        </head>
        <body>

        </body>	
        </html>

/* In a real project, you're probably going to want to use the real Babel.
To do this, we're going to install Babel with NPM. Then we're going to use babel-node. */
(index.html)
    <!DOCTYPE html>
    <html>
    <head>
     <script type="text/babel" src="script-compiled.js">
     </script>
     <title>Working with Babel</title>
    </head>
    <body>

    </body>	
    </html>
//(script.js)
     var nameBuilder = function(firstName="Joe", lastName="Doe") {
        console.log(firstName + " " + lastName);
       };

     nameBuilder();


$npm install babel
$babel script.js --out-file script-compiled.js

//(you will see in script-compiled.js) the ES6 in script.js is converted to ES5
"use strict";

var nameBuilder = function nameBuilder() {
			var firstName = arguments.length <= 0 || arguments[0] === undefined ? "Joe" : arguments[0];
			var lastName = arguments.length <= 1 || arguments[1] === undefined ? "Doe" : arguments[1];

			console.log(firstName + " " + lastName);
};

nameBuilder();

/*	TIP: You can also do $babel script.js --watch --out-file script-compiled.js
This transpiles every time there's a change in script.js
*/

(create nodescript.js)
		var EventEmitter = require('events').EventEmitter;

		var Person = function(name){
		    this.name = name;
		};

		Person.prototype = new EventEmitter();

		let Joanne = new Person("Joanne Wilson"); //noitce 'let'. It's an ES6 feature and babel transpiles that as well

		Joanne.on('speak', function(say) {
		    console.log("Ooooh helloooo " + say);
		});

		Joanne.emit('speak', "how's it goin");
$babel-node nodescript.js
($node nodescript.js doesn't work with the ES6 features)








