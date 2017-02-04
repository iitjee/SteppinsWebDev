/*
 For a larger scale project, most people like to use a build tool to help automated processes like transpiling, 
 SAS conversion, and more.


 Webpack is a build tool that helps us load all of our dependencies: CSS, images, node modules, and more.
 And babel and webpack work really well together and can help automate the process of performing these conversions


*/



$npm init
$npm install --save webpack
$sudo npm install -g webpack
$sudo npm install --save babel-loader //transpiling ES6 to ES5

(root folder->webpack.config.js)
        module.exports = {
          entry: './script.js',
          output: {filename: 'bundle.js'}, //you can use any name but most use 'bundle.js'
          module: {
            loaders: [
              {test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/} //  /\.js?/ = check for files with .js file
            ]
          }
        };
        
$webpack

