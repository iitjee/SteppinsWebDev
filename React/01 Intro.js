/*  ly react ess tra  */

>create dist folder:
//(index.html)
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <script src="https://fb.me/react-15.1.0.js"></script>
            <script src="https://fb.me/react-dom-15.1.0.js"></script>
            <meta charset="UTF-8">
            <title>Bye World with React</title>
        </head>
        <body>
            <div id="react-container"></div>
            <script src="index.js"></script>
        </body>
        </html>
        
//(index.js)
        const { createElement } = React //new syntax which says, we'll use createElement method of React
        const { render } = ReactDOM

        const title = createElement(  //if first line is not there, we've to write React.createElement(
          'h1',
          {id: 'title', className: 'header'},
          'Bye World'
        )

        render( //if first line is not there, we've to write ReactDOM.render(
          title,
          document.getElementById('react-container')
        )

$httpster -d ./dist -p 3000     (run it from parent dir of dist only. from dist shit does not work)


/*      Let's add some style with CSS   */
        const style = {
                backgroundColor: 'orange',
                color: 'white',
                fontFamily: 'verdana'
        }
        const title = createElement(  //if first line is not there, we've to write React.createElement(
          'h1',
          {id: 'title', className: 'header', style: style},
          'Bye World'
        )

/*      Let's convert everything to JSX */
        const { render } = ReactDOM
        const style = {
                backgroundColor: 'orange',
                color: 'white',
                fontFamily: 'verdana'
        }
        
        render(
                <h1 id='title'	//here we've put h1 tag directly instead of constructing by React.createElement This is JSX! \m/
                    className='header'
                    style={style}>
                Hello World	
                </h1>,
                document.getElementById('react-container')
        )
        

/*      Inline styling  : Use double braces*/
        const { render } = ReactDOM

        render(
                <h1 id='title'
                        className='header'
                        style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
                Hello World	
                </h1>,
                document.getElementById('react-container')
        )
        
/*      Transpiling into Common normal js by Babel     */
        //cdnjs.com -> babel core -> v5.8.38 (this version so as to use in-browser transpiler)
        //(in index.html add) 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.js"></script>
        <script type="text/babel" src="index.js"></script>
// what babel basically does is convert your render(<h1 ...> </h1>) to a React.createElement() call   

/*      Babel CLI       */
// we used Babel's inline browser transpiler. As I mentioned, this is really great for quick projects or for testing,
// but when you're working in production, you'll want to handle transpiling before your scripts get to the browser. 
// We're going to set up a project using npm as well as the Babel Command Line Interface, or CLI, to demonstrate this.

$npm install --save-dev babel-cli (installing locally)
$sudo install -g babel-cli      (or to install globally)
//changing folder structure
create new folder src and move 'index.js' from dist foldr
create new file in parent dir(not in src) called '.babelrc' where we will set up all of the presets or everything we want to transpile using Babel. 
                {
                        'presets' : ['latest', 'react', 'stage-0'];
                }
// now install them 
$npm install --save-dev babel-preset-latest babel-preset-react babel-prest-stage-0
// and
babel ./src/index.js --out-file ./dist/bundle.js
// ^this transpiles index.js to bundle.js





/*      WEBPACK (will replace httpster of above */
//see this for how to use it: https://github.com/iitjee/SteppinsWebDev/blob/master/Modules/webpack.js
$npm install webpack babel-loader webpack-dev-server --save-dev
$webpack	//this will bundle up
$webpack-dev-server //will not work unless you install it as global
so add this in package.json
	"scripts": {
    "start": "./node_modules/.bin/webpack-dev-server"
  },
$npm start //(./node_modules/.bin/webpack-dev-server is being execu underhood)
	  
//Since it'll be converted into bundle.js file, we will change the source in index.html
            <script type="text/babel" src="assets/bundle.js"></script>
$npm install --save react react-dom
//(now you can remove <script> tags of react in index.js file
create src/lib.js and src/titles.json 
               (lib.js)
                                import React from 'react'
                                import mytext from './titles.json' //the dot slash is necessary! :/

                                export const hello = (
                                        <h1 id='title'
                                                className='header'
                                                style={{backgroundColor: 'purple', color: 'yellow'}}> //inline styling remember?
                                                {mytext.hello}    //mytext is variable from './titles.json'
                                        </h1>
                                )

                                export const goodbye = (
                                        <h1 id='title'
                                                className='header'
                                                style={{backgroundColor: 'yellow', color: 'purple'}}>
                                                {mytext.goodbye}
                                        </h1>
                                )
                (modify index.js)
                                import React from 'react'
                                import { render } from 'react-dom'
                                import { hello, goodbye } from './lib'

                                render(
                                        <div>
                                                {hello}
                                                {goodbye}
                                        </div>,
                                        document.getElementById('react-container')
                                )
//Now we need to modify webpack to handle the json data used above
//(in webpack.config.js modify for json)module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			}
		]
	}
//and now install the json-laoder
$npm install --save-dev json-loader


// Another thing that you can do with Webpack is you can bundle your CSS so that you don't have to make additional HTTP requests.
//create src/stylesheets folder and create hello.css and goodbye.scss in it.
//(hello.css)
                        .hello {
                                background-color: indigo;
                                color: turquoise;
                        }
//(goodbye.scss)
                $bg-color: turquoise;
                $text-color: indigo;

                .goodbye {
                        background-color: $bg-color;
                        color: $text-color;
                }
//we're going to be able to use Webpack to take SCSS and transpile it into CSS.
//So this pre-processing step can all be automated using Webpack.
//now you need extra loaders for css and scss
                        loaders: [
                                {
                                        test: /\.js$/,
                                        exclude: /(node_modules)/,
                                        loader: ["babel-loader"],
                                        query: {
                                                presets: ["latest", "stage-0", "react"]
                                        }
                                },
                                {
                                        test: /\.json$/,
                                        exclude: /(node_modules)/,
                                        loader: "json-loader"
                                },
                                {
                                        test: /\.css$/,
                                        loader: 'style-loader!css-loader!autoprefixer-loader'
                                },
                                {
                                        test: /\.scss$/,
                                        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
                                }
                        ]
$npm install --save-dev style-loader css-loader autoprefixer-loader sass-loader node-sass
//note that node-sass is not listed in loaders config but we need this in order to make our SCSS work
//Now in lib.js, import the stylesheets and change the className

                                        import React from 'react'
                                        import text from './titles.json'
                                        import './stylesheets/goodbye.scss'
                                        import './stylesheets/hello.css'

                                        export const hello = (
                                                <h1 id='title'
                                                        className='hello'> //className changed 
                                                        {text.hello}
                                                </h1>
                                        )

                                        export const goodbye = (
                                                <h1 id='title'
                                                        className='goodbye'> //className changed
                                                        {text.goodbye}
                                                </h1>
                                        )


