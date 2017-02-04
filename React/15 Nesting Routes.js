/*



*/

So in the root of the folder, you should see an index js file and this is going to be responsible for rendering all of 
our routes. Now, the routes come from the routes js file and right now we're just rendering Home and Whoops404 
(in index.js)
    import React from 'react'
    import { render } from 'react-dom'
    import routes from './routes'

    window.React = React

    render(routes, document.getElementById('react-container'))










