/*  Typechecking With PropTypes
  
As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or 
TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run 

typechecking on the props for a component, you can assign the special propTypes property:'PropTypes' allow us to supply a property type 
for all of our different properties, so that it will validate to 
make sure that we're supplying the right type.

Note:  For performance reasons, propTypes is only checked in development mode.

primitives:
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol,
  
  PropTypes.instanceOf(Date) //for date objects


There are many more complex data types: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
*/

/*  Type 1: Creating Components using Class */
(SkiDayCount-createClass.js)

                import { createClass, PropTypes } from 'react'
//Just after `export const SkiDayCount = createClass({` and before `getDefaultProps() {`
                propTypes: {
                    total: PropTypes.number.isRequired, //make sure a warning is shown if the prop isn't provided. (if defaults are there,this will never give a warning)
                    powder: PropTypes.number,
                    backcountry: PropTypes.number
                  },
//note that we've destructured PropTypes from 'react'. Hadn't we done that, we should use React.propTypes.number etc

(index.js)
                import { SkiDayCount } from './components/SkiDayCount-createClass.js'

                render(
                  <SkiDayCount total="lots" />,   //we're intentionally giving wrong type(string) to `total` (which shuld have number type)
                  document.getElementById('react-container')
                )


//Once you run, You'll see that it will still render but in console, you will get a warning!
                
                

/*  Type-2: Using ES6 Syntax */
(in SkiDayCount-ES6.js)
            import { Component, PropTypes } from 'react'

//completely outside the class definition
              SkiDayCount.propTypes = {
                total: PropTypes.number,
                powder: PropTypes.number,
                backcountry: PropTypes.number
              }

(in index.js)
              import { SkiDayCount } from './components/SkiDayCount-ES6.js'

              render( //supplied wrong type(boolean) instead of number
                <SkiDayCount backcountry={false} />,  
                document.getElementById('react-container')
              )

/* Type-3: Statless Function Types  */
(in SkiDay.js)
              import { PropTypes } from 'react'
  
//completely outside the class definition
              SkiDayCount.propTypes = {
                total: PropTypes.number,
                powder: PropTypes.number,
                backcountry: PropTypes.number
              }

(in index.js)
              import { SkiDayCount } from './components/SkiDayCount'

              render(
                <SkiDayCount backcountry={false} />, 
                document.getElementById('react-container')
              )














