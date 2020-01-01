/*          
similar to express?
React Router is a complete routing library for React.

React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading,
dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.
*/

$npm install --save react-router

/*          Demo        */
(in index.js)
            import React from 'react'
            import { render } from 'react-dom'
            import './stylesheets/ui.scss'
            import { App } from './components/App'
            
            import { Whoops404 } from './components/Whoops404' //new
            import { Router, Route, hashHistory } from 'react-router' //new

            window.React = React

/*          Here we are basically navigating between two components: App and Whoops404          */
            render( //see below
              <Router history={hashHistory}>  //hashHistory is react-router's variable
                <Route path="/" component={App}/> //home director
                <Route path="*" component={Whoops404}/> //any path except home dir since path='homedir' is already checked above
              </Router>,
              document.getElementById('react-container')
            )
//history is going to listen to the browser's address bar for any changes, and it will keep track of those changes.
//So, we're going to use hash history, because we can set it up here without having to configure a server. 

(in whoops404.js)
                  export const Whoops404 = () => (//used stateless component syntax
                    <div>
                      <h1>Whoops, route not found</h1>
                    </div>
		  )
			 


/*        back to  Main project            */
//  our app has the SkyDayList and the SkiDayCount, and we want to be able to navigate between them. We also want to add
//  a new bit of functionality, the AddDayForm, that will allow us to add new ski days to our list. So the first place we want 
//  to handle that is by creating that AddDayForm component, and then we're going to dynamically switch between those screens using the router.

//create a new file in Components: AddDayForm.js
(in AddDayForm.js)
            //this will render just a simple h1 tag
            export const AddDayForm = () => (
	<h1>Add A Day</h1>
            )

(in App.js)
            import { Component } from 'react'
            import { SkiDayList } from './SkiDayList'
            import { SkiDayCount } from './SkiDayCount'
            import { AddDayForm } from './AddDayForm'       //new

            export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
		}
	}
	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}
	render() {//Our SkiDayList will render when we're on the list-days route and then our AddDayForm will 
                      //render when we're on the add-day route. 
		return (
			<div className="app"> //the following line is a nested ternary if statement. Notice carefully
			{
                                    (this.props.location.pathname === "/") ?
			  <SkiDayCount total={this.countDays()}
                                                   powder={this.countDays("powder")}
                                                   backcountry={this.countDays("backcountry")}/>
                                    :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm /> : <SkiDayList days={this.state.allSkiDays}/>				 
			} //<SkiDayList /> Component is rendered if path is neither / or /add-day
					
			</div>
		)
	}
            }




