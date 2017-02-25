Let's set up our development environment first. We're going to have 3 Nodes
- a Node web server, and 
- we want to write react components for the front end, and we want our Node web server to render initial static HTML from our 
front-end React components.
- We also want a Node API server to talk to the database.

To keep things simple, I'll create one Node project to perform all three tasks. We don't want to optimize things very early on. 
I'll be tracking the progress of the project we're going to build in this course using GitHub.


Main Dependencies:($npm i -S)
Backend:
1. Express
2. mongodb
Frontend:
1. react
2. react-dom
Global
1. typescript

Dev dependencies:($npm i -D)
1. webpack
2. babel-cli          
babel-loader          (works along with webpack)
json-loader
babel-preset-es2015
babel-preset-stage-2 
babel-preset-react
3. nodemon
4. eslint
eslint-plugin-react
babel-eslint


Project Structure:
--server.ts
--src
 -index.ts
--public (for static assets) //( We're going to have Express serve these public files directly with its static middleware.)
 -index.html
--api (for backend api server)
 -index.ts
 
//The index name is usually used to reference the starting point in every directory.

NPM scripts:
"scripts": {
    "start": "nodemon --exec babel-node server.js --ignore public/", //simple one would be `node server.js` now we add nodemon 
//execution wrapper and use babel-node instead of node. Also ignore the public directory from nodemon watch  as changes there //are usually driven by changes in the source directory.
    "dev": "webpack -wd" //To transform the source files into a bundled file for the browser
  },

Testing:
We won't do any automated testing in this course

Webpack Configuration: (webpack.config.js)
    module.exports = {
      entry: './src/index.js',
      output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.json$/,
            loader: 'json-loader' //run json-loader on all json files
          },
          {
            test: /\.js$/,
            loader: 'babel-loader'//run babel-loader on all js files
          }
        ]
      }
    };
    
    
To configure Babel to work with our selected presets, we can add the .babelrc file on the root level
{
  "presets": ["react", "es2015", "stage-2"]
}
(or)
(in webpack.config.js itself)
{
            test: /\.js$/,
            loader: 'babel-loader',//run babel-loader on all js files
            query: { //to make sure babel knows which presets to use in order to transpile our code.
             presets: ["es2015", "stage-2", "react"]   //don't use 'latest' instead of 'es2015'
             }
}


And finally eslint configuration:(.eslintrc.js)
    module.exports = {
      "parser": 'babel-eslint',
      "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
      },
      "extends": ["eslint:recommended", "plugin:react/recommended"],
      "parserOptions": {
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
        },
        "sourceType": "module"
      },
      "plugins": [ "react" ],
      "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error","unix"],
        "quotes": ["error","single"],
        "semi": ["error","always"],
        "no-console": ["warn", { "allow": ["info", "error"] }]
      }
    };


