
/* don't get intimidated. there are just 5 steps.
step-1: setting up node environment (so that development specific features like hot reloading are disable when we're runnign tess)
step-2: register babel to transpile all of our tests(so that we can write our tests in ES6 too)
step-3: Disable webpack-specific features for tests since Mocha doesn't know what to do with them.
step-4: set up jsdom which will provide virtual in-memory dom for us. this will allow us to test react components without having to open the browser
and then we set up few global variabls that mimic a browser. This step is imp when we 're doing dom base testing in react
*/

// Tests are placed alongside files under test.
// This file does the following:
// 1. Registers babel for transpiling our code for testing
// 2. Disables Webpack-specific features that Mocha doesn't understand.
// 3. Requires jsdom so we can test via an in-memory DOM in Node
// 4. Sets up global vars that mimic a browser.

/*eslint-disable no-var*/

// This assures the .babelrc dev config (which includes
// hot module reloading code) doesn't apply for tests.
process.env.NODE_ENV = 'test'; //step-1

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')(); //step-2

//step-3
// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

//step-4
// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef



//now let's automate it by writing npm script
    "test": "mocha --reporter progress tools/testSetup.js src/**/*.test.js src/components/**/*.test.js",



reporter flag: we are using progress reporter bcos it's compact and doesn't add lot of noise to our terminal
and then we tell mocha to run testSetup and then run any tests that finds in our source directory...
we're following the convention of ending all test files in test.js

//now let's create a test file in src dir (index.test.js) (some prefer spec.js)
// Mocha doesn't come with assertion library, so we'll use 'expect'
// so just let's stub in test that will give true
(src/index.test.js)
    import expect from 'expect';

    describe('Our first test', () => {
      it('should pass', () => {
        expect(true).toEqual(true);
      });
    });

$npm test (or $npm run test)


//now we want to run them automatically whenever we save file
    "test:watch": "npm run test -- --watch"
//and modify "start"
    "start": "npm-run-all --parallel test:watch open:src lint:watch",
      
$npm start  -s


/*  Voila! we're all wired up with a powerful and rapid development environemnt! */ 


