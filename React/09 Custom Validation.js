/* 04_05




*/

(SkiDayList.js)
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
                {days.map((day, i) =>
                  <SkiDayRow key={i}
                         {...day}/>	
                  )}
              </tbody>

            </table>
          )

          SkiDayList.propTypes = {      //days is a property
            days: function(props) {     //custom-validation. Passing a function!
              if(!Array.isArray(props.days)) {    //check to see if props.days is an array
                return new Error(
                  "SkiDayList should be an array"	
                  )
              } else if(!props.days.length) {     //check if 'days' array has some thing  
                return new Error(
                  "SkiDayList must have at least one record"
                  )
              } else {        //if both the above conditions passed, just return null! :)
                return null
              }
            }
          }
(SkiDayRow.js)
          export const SkiDayRow = ({resort, date, 
                        powder, backcountry}) => (
            <tr>
              <td>
                {date.getMonth()+1}/{date.getDate()}/
                {date.getFullYear()}
              </td>
              <td>
                {resort}
              </td>
              <td>
                {(powder) ? <SnowFlake/> : null}
              </td>
              <td>
                {(backcountry) ? <Terrain /> : null}
              </td>
            </tr>						

          )

          SkiDayRow.propTypes = {
            resort: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired,
            powder: PropTypes.bool,
            backcountry: PropTypes.bool
          }

