/*


Component Syntax:
  -ES5 createClass method (discussed in 3rd page)
  -ES6 Class declaration (discussed in 3rd page)
  - stateless  component (ES5, ES6) -- purely functional way (discussed here in this page)

 It's typically a good idea to use stateless components, whenever possible. 
 Stateless components offer a functional way to work with components, and, also, the React team has hinted that there may
 be some performance benefits of using these functions, rather than using createClass, or ES6 classes. 
*/
//SIMPLEST EXAMPLE!!
<script type="text/babel">
  const Hello = () => { //if you don't put curly braces, then 'return' is not required. what ever is in () will be returned by default
      return (
          <div className="heading">
          <h1>Welcome to React</h1>
          </div>
      )
  };
  ReactDOM.render(
      <Hello />, //note: always give first letter uppercase!!! or else straight away error, not even warning!
      document.getElementById("root")
  );
</script>

/*
One of the most important concepts in React is State. When a component's State data changes, the 
render function will be called again to re-render the state change. (we'll see about "state" in detail in later chapters)

    Advanvtages:
    1. No class needed. Functions!!
   
    2. Lets you avoid 'this' keyword. uff!
    
    3. Enforced best practices. Useful for dumb presentational components.
    Presentational components focus on the UI rather than the behavoir.
    So it's important to avoid using state in presentational components.
    Instead, state should be managed by higher level container components or via flux, redux etc.
    
    4. Doesn't support life-cycle methods and hence protects us from lazyness
    It's always temptign to add a little state to our presentational component when  
    you're in a hurry.. It's a quick way to hack in a feature but stateless components
    don't support local state it's not easy to hack in. So you're forced to put state management wehre it belongs
    in hihger level container components.
    
    5. High signal-to-noise ratio. i.e less typing
    
    6. Easier to understand. 
    Stateless functional components are functions that take in property information, and spits out JSX elements.
    => Easy to test and assertions are easier
    each component can be tested neatly in isolation and no mocking, no statem manipulations, special libraies or tricky test harnesses are need.
  
    7. Performance (wince no state, no life-cycle methds and no memory leaks)


*/

//  Stateless components are functions that take in property information, and return JSX elements.
//  Stateless components can't access this, so properties are passed directly into the function. 
//  Also, local methods need to be removed, and put into their own functions.


(skidaycount.js)

          //we are no longer using Component from react so we can remove that import statement as well
          import '../stylesheets/ui.scss'

          //we'll use const.
          //In ES6 'var' keyword should be avoided. we should use only 'let' or 'const'
          //const to ensure we don't reassign the component
          const percentToDecimal = (decimal) => { //function declarartion way is also changed. notice
            return ((decimal * 100) + '%') //here react assumes your return statemntis your render function
          } //they have no state. Hence the name. They get their data solely from props, which are
          //are immutable

          const calcGoalProgress = (total, goal) => {
            return percentToDecimal(total/goal)
          }

          export const SkiDayCount = ({total, powder, backcountry, goal}) => (  //like an anonymous fn declaration... 
            //...Takes properties as arguments -------------- const MyStatelessComponent = props => <div>{props.name}</div>;
            //even if it's one property, {} is req.... for eg  = ({total}) => (
          // note that render() {return <....> } is no longer required
          // another way to pass argument is to pass = (props) => (...)   and inside you'll access say `powder` using `props.powder` 
          //notice how '=> {//body return (...)}' is replaced by "=> (...)"
            
            
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




/* When Should I use each?  */
Use class component anytime u need to utilze local state | to access refs in the underlying dom |
  | to use lifecycle methods | child functions(for performace bcos classes are good at that!)
(stateless fn comp doesnt actually create a component instance and hence ref will always return null whe)
(child functions are pain for stateless, because every render will create a new instance of that function)

Use stateeless com for every reason other than above :)


/* Other ways to create components  */
Object.create
Mixins
Parasitic Components
StampIt
(For details: https://gist.github.com/jquense/47bbd2613e0b03d7e51c#file-0-intro-md)

