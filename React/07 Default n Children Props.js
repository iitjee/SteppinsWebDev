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


	  
	  
	  
//Children in JSX
In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children. There are several different ways to pass children:
1)String Literals:
You can put a string between the opening and closing tags and props.children will just be that string. This is useful for many of the built-in HTML elements. For example:
	<MyComponent>Hello world!</MyComponent>
This is valid JSX, and props.children in MyComponent will simply be the string "Hello world!". HTML is unescaped, so you can generally write JSX just like you would write HTML in this way:
	<div>This is valid HTML &amp; JSX at the same time.</div>
JSX removes whitespace at the beginning and ending of a line. It also removes blank lines. New lines adjacent to tags are removed; new lines that occur in the middle of string literals are condensed into a single space. 
So these all render to the same thing:

<div>Hello World</div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>

2)JSX Children
	<MyContainer>
	  <MyFirstComponent />
	  <MySecondComponent />
	</MyContainer>
//For the MyContainer, <MyFirstComponent /> and <MySecondComponent /> are the children


