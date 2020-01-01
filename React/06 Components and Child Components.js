//we've 4 properties in our component
//     -Total, (string)
//     - powder, (string)
//     - back country :Is it a backcountry day or no?(Bool)
//     - goal: Is it a backcountry day or no?(boolean)


/*  Lets make a table called `SkiDayList`   */
(index.js)
            import React from 'react'
            import { render } from 'react-dom'
            import { SkiDayList } from './components/SkiDayList'  //changed from SkiDayCount to the new SkiDayList which we'll create in a moment

            window.React = React

            render(
              <SkiDayList days={  //days is a new prop of type array
                [
                  {
                    resort: "Squaw Valley",
                    date: new Date("1/2/2016"),
                    powder: true,
                    backcountry: false
                  },
                  {
                    resort: "Kirkwood",
                    date: new Date("3/28/2016"),
                    powder: false,
                    backcountry: false
                  },
                  {
                    resort: "Mt. Tallac",
                    date: new Date("4/2/2016"),
                    powder: false,
                    backcountry: true
                  }
                ]
              }/>,
              document.getElementById('react-container')
            )


//create ./components/skidayrow.js and  ./components/skidaylist.js
(skidayrow.js)
            import Terrain from 'react-icons/lib/md/terrain'
            import SnowFlake from 'react-icons/lib/ti/weather-snow'
            import Calendar from 'react-icons/lib/fa/calendar'

            export const SkiDayRow = ({resort, date, powder, backcountry}) => (
                        <tr>
                                    <td>
                                                {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} //{date.getMonth() etc are zero-indexed
                                    </td>
                                    <td>
                                                {resort}
                                    </td>
                                    <td>
                                                {(powder) ? <SnowFlake/> : null}    //JSX if-else ternary equivalent  
                        //parans around (powder) is optional
                                    </td>
                                    <td>
                                                {(backcountry) ? <Terrain /> : null}
                                    </td>
                        </tr>						

            )
             
                        
(skidaylist.js)
                        import Terrain from 'react-icons/lib/md/terrain'
                        import SnowFlake from 'react-icons/lib/ti/weather-snow'
                        import Calendar from 'react-icons/lib/fa/calendar'
                        import { SkiDayRow } from './SkiDayRow'

                        export const SkiDayList = ({days}) => (
                                    <table>
                                                <thead>
                                                     <tr>
                                                        <th>Date</th>
                                                        <th>Resort</th>
                                                        <th>Powder</th>
                                                        <th>Backcountry</th>
                                                     </tr>
                                                </thead>
                                                <tbody>
                                                        {days.map((day, i) => <SkiDayRow key={i} 
                                                                                         resort={day.resort}
                                                                                         date=day.date()
                                                                                         powder={day.powder}
                                                                                         backcountry={day.backcountry}
                                                                                />	
                                                                        )}
                                    //what this does this for every day in the 'days' array, we're going to render a new row
                                    //spread operator: instead of setting up all of these different properties, if we would just want to push all of the properties from the array into the props objects, 
                                    // <SkiDayRow key={i} {...day}/>
                                    // This is just going to take any keys that are part of that object and make them accessible by the SkiDayRow. 
                                                </tbody>

                                    </table>
                        )














