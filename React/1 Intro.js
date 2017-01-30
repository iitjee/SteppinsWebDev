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
                <h1 id='title'
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
        
/*      Transpiling into Common js by Babel     */
        //cdnjs.com -> babel core -> v5.8.38 (to use in-browser transpiler)
        //(in index.html) 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.js"></script>
            <script type="text/babel" src="index.js"></script>
// what babel basically does is convert your render(<h1 ...> </h1>) to a React.createElement() call   

//Webpack: see this https://github.com/iitjee/SteppinsWebDev/blob/master/Modules/webpack.js
$npm install webpack babel-loader webpack-dev-server --save-dev

//Since it'll be connverted into bundle.js file, we will change the source in index.html
            <script type="text/babel" src="assets/bundle.js"></script>

