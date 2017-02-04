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

              <label htmlFor="resort">Resort Name</label> //notice this 'htmlFor'. Since 'for' is a keyword reserved in js, we use htmlFor in JSX
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
            
              <button>Add Day</button> //new
            
            </form>
          )

/* Awesome. So now that we have created refs for all of our inputs, we need to handle the submission of this form, or
we actually need to capture these values. So let's go ahead to our component, and we're going to add submit as a new 
function.*/

export class AddDayForm extends Component {
	
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) { //new
		e.preventDefault()
		console.log('resort', this.refs.resort.value)
		console.log('date', this.refs.date.value)
		console.log('powder', this.refs.powder.checked)
		console.log('backcountry', this.refs.backcountry.checked)
// So just like we have a props object that we can use this.refs to grab, we can use refs the same way. 
	}

	render() {
            ...
            return (
			<form onSubmit={this.submit} className="add-day-form">
                  ...
      }
                  
                  
// let's set up our constructor first. So we'lL send in props to the constructor and to super. We need to bind this. So when we create a custom method and we need to use this for this.submit or anything else, we need to have this accessible. So all we need to do here is use this.submit.bind(this).
      export class AddDayForm extends Component {
	
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {...}

	render() {...}
                  
                  
                  
