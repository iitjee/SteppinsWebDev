/*
  ly React Ess Tra
  

methods: this.myMethod(...)
props:  this.props.myProp






*/

/*    Part 1: Properties  */
//  Think of components in React as being an object and every property is a key. 
//  We're going to add four properties to our component. 
//     -Total, powder, back country and goal
    
Let's add few properties

(in SkiDayCount.js)
                  import React from 'react'
                  import '../stylesheets/ui.scss'

                  export const SkiDayCount = React.createClass({
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
    



/*    PART 2: METOHDS  */
// In addition to properties, we can add methods that are local to our components.
(in skidaycount.js)
                export const SkiDayCount = React.createClass({
                  percentToDecimal(decimal) { //new method
                    return ((decimal * 100) + '%')
                  },
                  calcGoalProgress(total, goal) { //newmethod
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

/*  Part 3: Creating components with ES6 class syntax */
//  One feature of ES6 that is often used with React is class syntax.
//  React has a base class called React.Component, and we extend this class to create our own components.
 (SkiDayCount.js)
            import { Component } from 'react' //here we're being particular about which part of 'react' library you want to use
            import '../stylesheets/ui.scss'

//if you write `import React from 'react' you would declare class as `export class SkiDayCount extends React.Component`

            export class SkiDayCount extends Component {  //(before) export const SkiDayCount = React.createClass({
              //basically we're making a component by extending Component rather than using createClass() method like in iOS
              percentToDecimal(decimal) {
                return ((decimal * 100) + '%')
              } //notice, commas are not needed between methods in class declaration
              calcGoalProgress(total, goal) {
                return this.percentToDecimal(total/goal)
              }
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
 
 
 
 
 
 
 
 
 
