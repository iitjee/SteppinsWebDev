/*
  ly React Ess Tra
  








*/

/*    Part 1: Properties  */
 Think of components in React as being an object and every property is a key. 
 We're going to add four properties to our component. 
    -Total, powder, back country and goal
    
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


