/* 05_04

Currently, our ski day list component is rendering all of our different ski days. In this video, we're going 
to add some filters so that I can see just the powder days and just the back country days, based on links that 
I click on. Over in our ski day list component, we're going to make a few changes that will make this look much, much better.



*/


(i skiDayList.js)
      export const SkiDayList = ({days, myfilter}) => { //note the flower brace
        //myfilter = power | backcountry =>true      empty=>false
        const filteredDays = (!myfilter || !myfilter.match(/powder|backcountry/)) ? days : days.filter(day => day[myfilter])

        return ( //note the return ( in stateless component declaration. we're doing this for adding filteredDays property
          <div className="ski-day-list"> //we're also wrapping <table> with div
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Resort</th>
              <th>Powder</th>
              <th>Backcountry</th>
            </tr>
            <tr> //new row in table header
              <td colSpan={4}> //colSpan stretches for 4
                <Link to="/list-days"> All Days </Link>
                <Link to="/list-days/powder"> Powder Days</Link>
                <Link to="/list-days/backcountry"> Backcountry Days</Link>
              </td>
            </tr>
          </thead>
          <tbody>
            {filteredDays.map((day, i) => //changed to filteredDays from days
              <SkiDayRow key={i}
                     {...day}/>	
              )}
          </tbody>

        </table>
        </div>
      )
      }  

      SkiDayList.propTypes = {
        days: function(props) {
          if(!Array.isArray(props.days)) {
            return new Error(
              "SkiDayList should be an array"	
              )
          } else if(!props.days.length) {
            return new Error(
              "SkiDayList must have at least one record"
              )
          } else {
            return null
          }
        }
}


(index.js)
      render(
          <Router history={hashHistory}>
          <Route path="/" component={App}/>
        
          <Route path="list-days" component={App}>
            <Route path=":filter" component={App} /> //notice colon for teh nested route
          </Route>
        
          <Route path="add-day" component={App} />
          <Route path="*" component={Whoops404}/>
        </Router>,
        document.getElementById('react-container')
      )











