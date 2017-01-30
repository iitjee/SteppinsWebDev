(ly react ess tra)

start folder->webpack.config.js
            var webpack = require("webpack");

            module.exports = {      
              entry: "./src/index.js",          //creating entry point
              output: {
                path: "dist/assets",
                filename: "bundle.js",          //creates bundle.js(browser-friendly) from index.js(latest-js friendly) file
                publicPath: "assets"            //folder where 'bundle' file will reside
              },
              devServer: {          //a server like http along with hotreloading feature! :D (alternative to httpster)
                inline: true,
                contentBase: './dist',          //all files are located here
                port: 3000
              },
              module: {
                loaders: [
                  {//to handle js
                    test: /\.js$/,  //look for any file that has .js extension
                    exclude: /(node_modules)/,  //don't look in /node_modules folder
                    loader: ["babel-loader"],
                    query: {
                      presets: ["latest", "stage-0", "react"]   //
                    }
                  }
                   {//To handle json
                        test: /\.json$/,
                        exclude: /(node_modules)/,
                        loader: "json-loader"
                    }
                {//to handle css
                            test: /\.css$/,
                            loader: 'style-loader!css-loader!autoprefixer-loader'
                    },
                    {//to handle scss
                            test: /\.scss$/,
                            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
                    }
                ]
              }
            }
$npm install webpack babel-loader json-loader webpack-dev-server --save-dev
$npm install --save-dev style-loader css-loader autoprefixer-loader sass-loader node-sass //(dev-deps for css and sass)
$webpack


/*          (Note:Now this says webpack command not found, and there's a couple different
ways that we can fix this problem. One way is that we can install webpack globally using our sudo npm install -g webpack.
If you'd prefer not to use a global command, what you can do is this, you can use ./node_modules/.bin/webpack.)         */

//Since it'll be connverted into bundle.js file, we will change the source in index.html
            <script type="text/babel" src="assets/bundle.js"></script>


In the previous video, we looked at how the Babel CLI can help us transpile JavaScript that uses new syntax into static 
files that use browser-supported syntax. This approach offers performance benefits in the browser because all transpiling 
happens before runtime. 
As an alternative to this, we can use module bundlers like webpack to handle some of this work for us.

Webpack is a module bundler that helps us create static files and helps us automate processes that need to happen 
before our files can go into production.

Think about a typical HTML file. We might load several different scripts making several HTTP requests.
Webpack will run several commands at a time to create a bundle file. This bundle packages scripts, dependencies and 
even CSS into one file. And one file means one request. The first thing that we need to do to use webpack is we're going
to create a webpack config file. In the start folder, I'm going to go ahead and save this as webpack.config.js.

The webpack config is going to describe everything that we want webpack to do to our files to ready them for production.
So we'll use module.exports, and we're going to create an entry point for this file. 
So the entry point is just the source file. So we'll use ./source, index.js. 
The next thing we'll specify is the output. So where do we want to output these files? 
Now in order to make this a little bit different than our previous, we're going to create a path.

We're going to use dist/assets. Then we're going to specify a filename, which will be bundle.js.
And then finally, we want to add a node here for public path, and this is going to be assets. So this is the folder name where all of these bundled files will reside, or bundle file, I should say. Next we're going to use another key here called module, and we're going to specify some loaders.

Now webpack has a ton of different loaders that you can choose from, but basically, these are all the different tasks that 
we want webpack to perform. So the first step of the task we're going to set up in this video is the Babel loader, and we're
going to look for any files that have a .js extension. So .js. Then we're going to exclude anything we want.
So here we will exclude just our node modules folder.

Next we'll use the name of the loader, which is Babel loader. And finally, we can specify any presets that we'd like to.
So just as we did in our Babel RC file, we're going to say presets, latest, stage 0 and react. Awesome, let me clean up 
these single quotes just for consistency.

And there we go. The other thing I want to do here real quick, it's usually good practice to import webpack or require it. 
So we'll require webpack. Excellent. Let's add one more thing here to our webpack config file, and that is the devServer. So something that is very useful when working with webpack is this devServer. And what this is going to do is it's going to be a server, just like httpster, but the good news about this is it will automatically reload as soon as I make any changes.

So it enables hot reloading, which is a pretty nice feature for us as developers. So we're going to say inline is true, 
contentBase. So where are our files located? We're going to look in dist, and then we're going to run everything on port 3000. 
So now that we have done this, we need to install several npm packages. Great, so in our terminal window, let's go ahead and
npm install webpack. We're going to install the Babel loader.

We're going to install the webpack dev server, and all of these are going to be installed as dev dependencies. Cool. 
Now that I've done that, I'm going to run webpack. Now this says webpack command not found, and there's a couple different
ways that we can fix this problem. One way is that we can install webpack globally using our sudo npm install -g webpack.
If you'd prefer not to use a global command, what you can do is this, you can use ./node_modules/.bin/webpack.

We have created a bundle js from the index js file. Pretty cool. So let's take a look at our Sublime Text here. 
We should, in the start folder, have a new file called assets, and this has bundled everything up for us.

Pretty cool. Now in our index js file, let's also make sure that we're linking to the correct file. So we're going to look in the assets folder for the bundle js. Now the final thing I want to do here in the packaged JSON file is I want to, instead of using httpster, remember we installed the webpack devServer? And that's going to handle loading all of our files for us. So let's use ./node_modules/.bin/webpack dev server. Now when I go back to the terminal and type npm start, this should serve everything up on localhost 3000.

There we go. So we're using the webpack devServer. The benefit of this is if I make any changes at all to my files, 
those are going to automatically rebuild for me.


Pretty cool.
