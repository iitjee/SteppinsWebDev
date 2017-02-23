
// Once a speaker has connected, they will get to see information about each of the connected audience members in a table. We //will create an attendance component to handle this task.

var React = require('react');

var Attendance = React.createClass({

	addMemberRow(member, i) {
  //this function is the callback function to the array map function, which means that it's going to be invoked once for every 
//audience member and that audience member is going to be passed as an argument to this function.
		return (
			<tr key={i}>
				<td>{member.name}</td>
				<td>{member.id}</td>
			</tr>
		);
	},

	render() {
		return (
			<div>
				<h2>Attendance -- {this.props.audience.length}</h2>
				<table className="table table-stripped"> //bootstrap classes
					<thead> //tablehead
						<tr>
							<th>Audience Member</th>
							<th>Socket ID</th>
						</tr>
					</thead>
					<tbody>

						{this.props.audience.map(this.addMemberRow)} //the map function is going to return, for us, an array of table row jsx elements.

					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Attendance;


Let's save this component and add it to the speaker's homepage. 
(In Speaker.js)
	<Display if={this.props.status === 'connected'}>

		<Display if={this.props.member.name && this.props.member.type === 'speaker'}>
			<p>Questions</p>
			<Attendance audience={this.props.audience} />
		</Display>

		<Display if={!this.props.member.name}>
			<h2>Start the presentation</h2>
			<JoinSpeaker emit={this.props.emit} />
		</Display>

	</Display>
	
