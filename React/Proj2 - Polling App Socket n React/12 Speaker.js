(in app-server.js)
  var speaker = {}; //since only one speaker, we made a single dictionary instead of array
  
  socket.on('start', function(payload) {
		speaker.name = payload.name
		speaker.id = this.id; //this.id == socket.id
		speaker.type = 'speaker'; //just giving something like a 'datatype'
		title = payload.title;
		this.emit('joined', speaker); //using the same 'joined' event for speaker also, telling that he has connected to the server
		console.log("Presentation Started: '%s' by %s", title, speaker.name);
	});
  
  
  //Notice that in socket.on('join',...) we are setting up the member(audience) object
  //in socket.on('start', ..) we are setting up the speaker object
  
  
  	socket.on('join', function(payload) {
		var newMember = {
			id: this.id,
			name: payload.name,
			type: 'audience' //giving 'type' to audience member also
		};
		this.emit('joined', newMember);
		audience.push(newMember);
		io.sockets.emit('audience', audience);
		console.log("Audience Joined: %s", payload.name);
	});
  
  
  
//Now we will create a special form for the speaker, very similar to the audience
(in /parts/ JoinSpeaker.js)
      var React = require('react');

      var JoinSpeaker = React.createClass({

        start() {
          var speakerName = React.findDOMNode(this.refs.name).value;
          var title = React.findDOMNode(this.refs.title).value;
          this.props.emit('start', { name: speakerName, title: title });
          // Great, so now when a speaker starts, we emit a start event and send the speaker's name in the presentation title back to the server.
        }, 

        render() {
          return (
            <form action="javascript:void(0)" onSubmit={this.start}> //this.start is the event handler

              <label>Full Name</label>
              <input ref="name"
                   className="form-control"
                     placeholder="enter your full name..."
                     required />

              <label>Presentation Title</label>
              <input ref="title"
                   className="form-control"
                     placeholder="enter a title for this Presentation..."
                     required />

              <button className="btn btn-primary">Join</button>

            </form>
          );
        }

      });

      module.exports = JoinSpeaker;
      
      
      
//Now let's modify the Speaker Component
(in Speaker.js)
var React = require('react');
var Display = require('./parts/Display');
var JoinSpeaker = require('./parts/JoinSpeaker'); //join speaker form

var Speaker = React.createClass({
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>

					<Display if={this.props.member.name && this.props.member.type === 'speaker'}>
          //if there's a memeber and the member's a speaker then ...
						<p>Questions</p> //simple placeholders, we will take care about them later
						<p>Attendance</p>
					</Display>

          //if no member, show the JoinSpeaker form
					<Display if={!this.props.member.name}>
						<h2>Start the presentation</h2>
            //And remember the JoinSpeaker component uses this.props emit. That means that we need to pass the emit function 
            //to that component as a property. Now our speaker component already has the emit function because it was already 
            //passed down from the app to the route handler which is the speaker or the audience or even the board. So to pass 
            //it down one step further, I just need to add an emit property to JoinSpeaker and then say this.props.emit and we'll
            //pass that down to JoinSpeaker.
						<JoinSpeaker emit={this.props.emit} />
					</Display>

				</Display>
			</div>
		);
	}
});

module.exports = Speaker;
