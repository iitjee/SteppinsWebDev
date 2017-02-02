/*  
State represents the possible conditions of your application. Maybe you have a state for editing, and a state for saved,
or a state for logged in and logged out. In react apps we want to identify the minimal representation of app state, and 
then we want to reduce state to as few components as possible. 
This way we can avoid overwriting state variables, which can cause chaos in our applications.


*/




//Create a new component called "App"
//(make new file "app.js" in Components flder
(in app.js)

                import { createClass } from 'react'

                export const App = createClass({
                  getInitialState() {
                    return {
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
                  },
                  render() {
                    return (
                      <div className="app">
                        {this.state.allSkiDays[0]["resort"]}  //"Squaw Valley"
                      </div>
                    )
                  }
                })
                
(in index.js) //we've removed the table structure and now instead of holding these as props, we're going to hold them in state.
              import React from 'react'
              import { render } from 'react-dom'
              import './stylesheets/ui.scss'
              import { App } from './components/App'

              window.React = React

              render(
                <App />,
                document.getElementById('react-container')
              )
