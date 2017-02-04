/*

Props are typically the only way that parents' components can interact with their children. 
When we modify a child, you re-render it with new props.
In some cases, we want to reach out to individual elements to figure out what their values are. 

The way that we can do this is with refs. So let's go ahead and open our add day form again, and we're going to add all
of these refs to our input fields

*/

//we'll change the return() in render as follows
//(in AddDayForm.js)
      return (
            <form onSubmit={this.submit} className="add-day-form">

              <label htmlFor="resort">Resort Name</label>
              <input id="resort" 
                   type="text" 
                   required 
                   defaultValue={resort}
                   ref="resort"/> //new

              <label htmlFor="date">Date</label>
              <input id="date" 
                   type="date" 
                   required 
                   defaultValue={date}
                   ref="date"/> //new 

              <div>
                <input id="powder" 
                     type="checkbox" 
                     defaultChecked={powder}	
                     ref="powder"/> //new
                <label htmlFor="powder">Powder Day</label>
              </div>

              <div>	
                <input id="backcountry" 
                     type="checkbox"
                     defaultChecked={backcountry} 
                     ref="backcountry"/> //new
                <label htmlFor="backcountry">
                  Backcountry Day
                </label>
              </div>
              <button>Add Day</button>
            </form>
          )
