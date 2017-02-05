



import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, //enables displaying debug info
  
  devtool: 'cheap-module-eval-source-map', //recommended for this project, you can see doc for other values of devtool
  
  noInfo: false, //=> webpack will display a list of all the files that it's bundling
  
  entry: [ //good for injecting middleware like hotreloading
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web', //we can also set this to 'node' if we want to build an app running in Node adn that would change the way webpack bundles our code so that Node can work with it instead of the browser 
 
 output: { //where our output files should go to
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`. We've used node's __dirname variable
    publicPath: '/',
    filename: 'bundle.js'
  }, //note that this one (output) doesn't actually genearte physical files. Instead it will create bundles in memory that it serves to the browser. But we do need to 
  //define a path and a name so that it can simulate physical file's existence. we'll write a build process
  
  devServer: {
    contentBase: './src' //source directory
  },
  plugins: [ //plugins that enhance  webpacks' power
    new webpack.HotModuleReplacementPlugin(), //automatice reloading
    new webpack.NoErrorsPlugin() //this will keep errors from breaking our hot reloading experience. INstead we'll see error message in browser
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
      //the last 4 lines are necessary for the file types that Bootstrap utilizes for fonts
      //eot woff ttf svg files are file extensions. you can see in bootstrap documentation.
    ]
  }
};
