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

        render( if first line is not there, we've to write ReactDOM.render(
          title,
          document.getElementById('react-container')
        )
