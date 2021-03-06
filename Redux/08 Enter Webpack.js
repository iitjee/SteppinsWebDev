/*  Create a static build with webpack

Thus far, we've been running all of our code with Node.js. Now Redux does work, and can be used on the server or in
native applications built with Node.js. 
However, Redux is primarily used to manage state and client applications. So at this point, we're going to start running 
our code on the client side in the browser.

Now, in order to run our code in the browser. We must first bundle all of our code into a single Javascript file that
can be used by the browser, and we'll use web pack along with babel to do that. (https://github.com/iitjee/SteppinsWebDev/blob/master/Modules/webpack.js)




*/
(in pkg.json)
    "dependencies": {
      "redux": "^3.6.0"
    },
    "devDependencies": {
      "babel-core": "^6.18.0",
      "babel-loader": "^6.2.6",
      "babel-preset-latest": "^6.16.0",
      "babel-preset-stage-0": "^6.16.0",
      "json-loader": "^0.5.4",
      "webpack": "^1.13.3",
      "webpack-dev-server": "^1.16.2"
    }

$npm install 

(note: just like npm install --save pkgname, remember $npm install --save-dev pkgname)

/** webpack and webpack-dev-server
Web pack is the tool that we're going to use to actually create our bundle.js file, but we will also 
use the web pack dev server. The web pack dev server is an express server that we can use to actually host our application.
It will help improve our workflow by listening to any changes in our source code and automatically recreating the bundle.
Now, with web pack, we need to use loaders. Loaders are the instructions that web pack follows when transpiling our code and

* babel-loader and json-loader 
The first loader that I want to install is the babel loader. This is the loader used by babel to transpile our ES6 and 
other emerging Javascript syntax into ES5 compatible Javascript. Additionally we want to make sure any JSON documents 
make it inside of our bundle. I'm going to need to use the JSON loader for that. So I'll install the JSON loader as 
well, 
* babel-core (we're no longer usign babel-CLI)
and then finally, we've been using the babel CLI. That's come with the babel core, but since we're no longer using
it, I want to make sure that the babel core package has been installed, and this includes any core functionality required
by babel.creating the bundle.
*/

(create root/webpack-config.js)
        module.exports = {
            entry: "./src/index.js",
            output: {
                path: "dist/assets",
                filename: "bundle.js",
                publicPath: "assets" //so that the dev server knows where to find this file on the client
            },
            // The next thing I'm going to add is the node for the dev server. This will tell the web pack dev server how it should operate.
            devServer: {
                inline: true,
                contentBase: "./dist", // to tell the dev server is where to serve content from.
                port: 3000
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: ['babel'],
                        query: { //to make sure babel knows which presets to use in order to transpile our code.
                            presets: ['latest', 'stage-0']
                        }
                    },
                    {
                        test: /\.json$/,
                        exclude: /(node_modules)/,
                        loader: 'json-loader'
                        //Node.js automatically loads JSON documents, but the client and the browser does not.
//                         So we need to use a loader to make sure any improted JSON gets added to our bundle. So again, we're 
//                         going to do another test using a regular expression, and we will test for the JSON extension, and also
//                         we want to make sure that we exclude anything found in the node modules folder,
                    }
                ]
            }
        }

//and finally put this in pkg.json
"scripts": {
    "start": "./node_modules/.bin/webpack-dev-server"
  },
