/*



*/



(in FormComponent.js)
import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	render() {

		const { resort, date, powder, backcountry } = this.props 
		//destructuring whatever you want in this.props like `import { render } from 'react-dom'`

		return (
			<form className="add-day-form">

				<label htmlFor="resort">Resort Name</label>
				<input id="resort" 
					   type="text" 
					   required 
					   defaultValue={resort}/> //if not destructured, you shud do this.props.resort

				<label htmlFor="date">Date</label>
				<input id="date" 
					   type="date" 
					   required 
					   defaultValue={date}/>
//if you don't provide defaultValue, <input id="date"  type="date" required/>
			
				<div> //powder dev
					<input id="powder" 
						   type="checkbox" 
						   defaultChecked={powder}	/>
					<label htmlFor="powder">Powder Day</label>
				</div> //checkboxes don't have defaultValues

				<div>	 //backcountry div
					<input id="backcountry" 
						   type="checkbox"
						   defaultChecked={backcountry} />
					<label htmlFor="backcountry">
						Backcountry Day
					</label>
				</div>
			</form>
		)
	}
}

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
