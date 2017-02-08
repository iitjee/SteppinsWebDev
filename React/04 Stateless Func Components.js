/*


Component Syntax:
  -ES5 createClass method (discussed in 3rd page)
  -ES6 Class declaration (discussed in 3rd page)
  - stateless functional component (ES5, ES6)

 It's typically a good idea to use stateless components, whenever possible. 
 Stateless components offer a functional way to work with components, and, also, the React team has hinted that there may
 be some performance benefits of using these functions, rather than using createClass, or ES6 classes. 


*/

//  Stateless functional components are functions that take in property information, and return JSX elements.
//  Stateless components can't access this, so properties are passed directly into the function. 
//  Also, local methods need to be removed, and put into their own functions.


(skidaycount.js)

          //we are no longer using Component from react so we can remove that import statement as well
          import '../stylesheets/ui.scss'

          const percentToDecimal = (decimal) => { //function declarartion way is also changed. notice
            return ((decimal * 100) + '%')
          }

          const calcGoalProgress = (total, goal) => {
            return percentToDecimal(total/goal)
          }

          export const SkiDayCount = ({total, powder, backcountry, goal}) => (  //like an anonymous fn declaration. Takes properties as arguments
          // note that render() {return <....> } is removed
          // another way to pass argument is to pass = (props) => (...)   and inside you'll access say `powder` using `props.powder` 
          
              <div className="ski-day-count">
                <div className="total-days">
                  <span>{total}</span>
                  <span>days</span>
                </div>
                
                <div className="powder-days">
                  <span>{powder}</span>
                  <span>days</span>
                </div>
                
                <div className="backcountry-days">
                  <span>{backcountry}</span>
                  <span>days</span>
                </div>
                  
                <div>
                  <span>
                    {calcGoalProgress(
                      total, 
                      goal
                    )}
                  </span>
                </div>
              </div>
          )






