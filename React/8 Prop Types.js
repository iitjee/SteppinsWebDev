/*  Typechecking With PropTypes
  
Another enhancement we can add to our components is 'PropTypes.' 
'PropTypes' allow us to supply a property type for all of our different properties, so that it will validate to 
make sure that we're supplying the right type.

Note:  For performance reasons, propTypes is only checked in development mode.


*/

/*  Type 1: Creating Components using Class */
(SkiDayCount-createClass.js)
//Just after `export const SkiDayCount = createClass({` and before `getDefaultProps() {`
                propTypes: {
                    total: PropTypes.number.isRequired,
                    powder: PropTypes.number,
                    backcountry: PropTypes.number
                  },





















