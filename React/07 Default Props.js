/*


Default props
An optional but very useful feature in React is default properties.
When we setup defaults, we can use the default values if another value is not provided.






*/

/*	Type-1: Class-type declaration	*/
(SkiDayCount.js in version which we used class-type component)

          getDefaultProps() { //just after export const SkiDayCount = createClass({
              return {
                total: 50,
                powder: 50, 
                backcountry: 15, 
                goal: 100
              }
            },

(index.js)
//comment out the other render function(SKIDAYLIST) to see only this :: how the default values work
          render( 
	<SkiDayCount />, 
	document.getElementById('react-container')
          )         
	  

/*        Type -2   : ES6-type*/
(SkiDayCount.js in version which we used ES6-type component)
//here  instead of adding a method to our class, we're actually getting to add this to the class instance. 

          //completely outside skidaycount es6 definition
          SkiDayCount.defaultProps = {
            total: 50,
            powder: 10,
            backcountry: 15,
            goal: 75
          }



/*        Type-3: Stateless   */
// It's kind of the ES6 class way but you can also set this up with your properties as default properties.
// So just like you can set up defaults in functions now with ES6, you can do the same thing here in your component. 
//completely outside skidaycount es6 definition
          SkiDayCount.defaultProps = {
            total: 50,
            powder: 10,
            backcountry: 15,
            goal: 75
          }

(or)
          export const SkiDayCount = ({total=50, powder=10, backcountry=15, goal=75}) => (.....)


