/* React ess Tra Lyn
(continuation of 1Intro.js)

We'll build a simple activity counter : counts number of times you've done the activity

data structure for this application:
{
  resort: "somestring",
  date:   "somestring",
  powder: true|flase, //is it powderday?
  backcountry: true | false //is it backcountry day?
}

*/


/*  The purpose of each component is to display data  */
//create src>components>skiDayCount.js
//and src -> stylesheets -> {globals.scss index.scss ui.scss}    (just copy them from training files)

(skidaycount.js)
        import React from 'react'
        import '../stylesheets/ui.scss'

        export const SkiDayCount = React.createClass({  //create a component using React.createClass   (export so that it can be imported)
          //or you can have `render: function { return (...) }`
          render() {  //returns html-like elements using JSX syntax
            return (
              <div className="ski-day-count">
                <div className="total-days">
                  <span>5 days</span>
                </div>
                
                <div className="powder-days">
                  <span>2 days</span>
                </div>
                
                <div className="backcountry-days">
                  <span>1 hiking day</span>
                </div>
              </div>
            )
          }
        })
        
(index.js)
      import React from 'react'
      import { render } from 'react-dom'
      import { SkiDayCount } from './components/SkiDayCount'    //new line

      window.React = React  //sometimes we'll have some errors pop up where it says, "React is not defined." Adding react to the window will deal with this problem. 

      render(
        <SkiDayCount />,
        document.getElementById('react-container')
      )

