/*



*/

// So in the root of the folder, you should see an index js file and this is going to be responsible for rendering all of 
// our routes. Now, the routes come from the routes js file and right now we're just rendering Home and Whoops404 
(in root/index.js)
    import React from 'react'
    import { render } from 'react-dom'
    import routes from './routes'

    window.React = React

    render(routes, document.getElementById('react-container'))

// The components folder also has an index js file and the index js currently contains our Whoops404.
// The folder also contains a UI folder that has our Home Page that we just saw.
(in comopnents/index.js)
        import MainMenu from './ui/MainMenu'

        //left navigation
        export const Left = ({ children }) => //the reason that we're passing in children is that the Left component when rendered will render any children dynamically.
            <div className="page"> //page is a predefined class name in css
                <MainMenu className="main-menu"/>
                {children} //children will appear right after the Mainmenu
            </div>

        export const Right = ({ children }) => 
            <div className="page">
                {children}
                <MainMenu className="main-menu"/>
            </div>

        export const Whoops404 = ({ location }) =>
            <div>
                <h1>Whoops, resource not found</h1>
                <p>Could not find {location.pathname}</p>
            </div>

(in routes.js)
            import React from 'react'
            import { Router, Route, hashHistory } from 'react-router'
            import Home from './components/ui/Home'
            import About from './components/ui/About'
            import MemberList from './components/ui/MemberList'
            import  { Left, Right, Whoops404  } from './components'

            const routes = (
                <Router history={hashHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/" component={Left}> //try both Left and Right
                        <Route path="about" component={About} />
                        <Route path="members" component={MemberList} />
                    </Route>
                    <Route path="*" component={Whoops404} />
                </Router>
            )

            export default routes






