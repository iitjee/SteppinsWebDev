/*
  ly React Ess Tra
  
  
Component Syntax:
  - createElement (very simple and straightforward.. not discussed here)
  -ES5 createClass method (discussed here)
  -ES6 Class declaration (i.e extends React.Component) (discussed here)
  -stateless functional component (see 4th page)
  
(ES5 createClass style of component autobound for you. This means it avoided JS's quirky
'this' keyword behavior by autobinding functions to the component's 'this' contenxt for you.
    //works fine with es5 createClass
    <div onClick={this.handleClick}> </div>
  
React components built using ES6 doesn't autobind for you. So you need to understand that the context of 'this'
changes depending on the caller.
    //requires explicit bind with ES6 class
    <div onClick={this.handleClick.bind(this)}> </div>
    
To solve this, there are few ways. You can call `.bind` inline within your render function
But for performance reasons it's recommended to bind `this` in the constructor
    class Contacts extends React.Component {
      constructor(props) {
        super(props); //Class components should always call the base constructor with props.
        this.handleClick = this.handleClick.bind(this);
      }
      ...
      } //we can infact lint this to enforce in our design :)

methods: this.myMethod(...)
props:  this.props.myProp


From within Component Methods:
 - you can fetch data from an api
 - or do some calculations etc. etc.



*/

/*    Part 1: Properties  */
//  Think of components in React as being an object(like dictionary) and every property is a key. 
//  We're going to add four properties(keys) to our component(dictionary). 
//     - Total, (string)
//     - powder, (string)
//     - backcountry :Is it a backcountry day or no?(Bool)
//     - goal: Is it a backcountry day or no?(boolean)
    
//Let's add them

(in SkiDayCount.js)
                  import React from 'react'
                  import '../stylesheets/ui.scss'

                  export const SkiDayCount = React.createClass({ //es5 way of createClass
                    render() {
                      return (
                        <div className="ski-day-count">
                          <div className="total-days">
                            <span>{this.props.total}</span> 
                            <span>days</span>
                          </div>
                        
                          <div className="powder-days">
                            <span>{this.props.powder}</span>
                            <span>days</span>
                          </div>
                        
                          <div className="backcountry-days">
                            <span>{this.props.backcountry}</span>
                            <span>days</span>
                          </div>
                        
                          <div>
                            <span>{this.props.goal}</span>
                          </div>
                        </div>
                      )
                    }
                  })
(in index.js)
                import { SkiDayCount } from './components/SkiDayCount'

                render(
                  <SkiDayCount total={50} //total is a prop defined in SkiDayCount.js
                         powder={20}
                         backcountry={10}
                         goal={100}/>,
                  document.getElementById('react-container')
                )
    



/*  2: METOHDS  */
// In addition to properties, we can add methods that are local to our components.
(in skidaycount.js)
                export const SkiDayCount = React.createClass({
                  percentToDecimal(decimal) { //new method only local to skiDayCount component
                    return ((decimal * 100) + '%')
                  },
                  
                  calcGoalProgress(total, goal) { //newmethod only local to skiDayCount component
                    return this.percentToDecimal(total/goal)
                  },
                  
                  render() { // you can say render as a constructor for SkiDayCount "class"
                    return (
                      <div className="ski-day-count">
                        <div className="total-days">
                          <span>{this.props.total}</span>
                          <span>days</span>
                        </div>
                        <div className="powder-days">
                          <span>{this.props.powder}</span>
                          <span>days</span>
                        </div>
                        <div className="backcountry-days">
                          <span>{this.props.backcountry}</span>
                          <span>days</span>
                        </div>
                        <div>
                          <span>
                            {this.calcGoalProgress(
                              this.props.total, 
                              this.props.goal
                            )}
                          </span>
                        </div>
                      </div>
                    )
                  }
                })

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
/*  Method 3: Creating components with ES6 class syntax (i.e using extends React.Component) */
//  One feature of ES6 that is often used with React is class syntax.
//  React has a base class called React.Component, and we extend this class to create our own components.
 (SkiDayCount.js)
            import { Component } from 'react' //here we're being particular about which part of 'react' library you want to use
            import '../stylesheets/ui.scss'

//if you write `import React from 'react' you would declare class as `export class SkiDayCount extends React.Component`

            export class SkiDayCount extends Component {  //(before in es5) export const SkiDayCount = React.createClass({
              //basically we're making a component by extending Component rather than using createClass() method like in iOS
              
              percentToDecimal(decimal) { // method only local to skiDayCount component
                return ((decimal * 100) + '%')
              } //notice, commas are not needed between methods in class declaration
              
              calcGoalProgress(total, goal) { // method only local to skiDayCount component
                return this.percentToDecimal(total/goal)
              }
              
              render() { //and remember, we always need to have the render method inside of the component class(skiDayCount here).
                //exactly same like in es5
                return (
                  <div className="ski-day-count">
                    <div className="total-days">
                      <span>{this.props.total}</span>
                      <span>days</span>
                    </div>
                    <div className="powder-days">
                      <span>{this.props.powder}</span>
                      <span>days</span>
                    </div>
                    <div className="backcountry-days">
                      <span>{this.props.backcountry}</span>
                      <span>days</span>
                    </div>
                    <div>
                      <span>
                        {this.calcGoalProgress(
                          this.props.total, 
                          this.props.goal
                        )}
                      </span>
                    </div>
                  </div>
                )
              }
            }
 
 
 
 
 
 
 
 
 
