- Once the presentation has started we will have the speaker name in the presentation title saved to our state variables on the 
server. We now need to take that data and broadcast it to the client and make sure that the client state is in sync with the 
server state. So, let's start with the app server file.


(in app-server.js)
      var title = 'Untitled Presentation';
      var audience = [];
      var speaker = {};
// these are the three variables in our app server file that represent application state. Now, when a user connects to this 
// socket they are welcomed with the title, but really when a user connects we need to send all three of these state variables // to the client.
      
//Down in the 'welcome' emit handler where we passed the title
      socket.emit('welcome', {
          title: title,
          audience: audience,
          speaker: speaker.name
        });
// Now, you might be tempted to just pass the speaker object, but all of the clients don't need to know what that speaker 
//socket ID is, the only information that we actually need is the speaker's name.

//So, now when we welcome our users we are going to go ahead and welcome them with the current state of the application. Now, //if you are a audience member who has joined the presentation before the speaker has started it you need to be updated with //the speaker's name and the title of the presentation. So, in order to do that we're gonna need to broadcast the title and the 
//speaker's name to all of the clients when the speaker starts the presentation.
      socket.on('start', function(payload) { //start event is emitted by the speaker (in JoinSpeaker.js)
        speaker.name = payload.name
        speaker.id = this.id;
        speaker.type = 'speaker';
        title = payload.title;
        this.emit('joined', speaker);
        //broadcasting i.e we are going to emit an event on every connected socket that event is going to be the start event.
        io.sockets.emit('start', { title: title, speaker: speaker.name });
        console.log("Presentation Started: '%s' by %s", title, speaker.name);
      });
     
     
 //So, we are now keeping our state data in sync in two places. One when the user joins the presentation and two when the user 
//starts the presentation.      
     
//so we need to listen to the socket's 'start' event in APP.js
(in APP.js)
     getInitialState() {
            return {
                status: 'disconnected',
                title: '',
                member: {},
                audience: [],
                speaker: '' //new
            }
        },
        
     componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.updateState); //renamed welcome event handler to updateState event handler
        this.socket.on('joined', this.joined);
        this.socket.on('audience', this.updateAudience);
        this.socket.on('start', this.updateState); //new
    },
//note that the same eventHandler 'updateState' is used for both welcome and start events

//welcome event handler
updateState(serverState) {
  this.setState({ title: serverState.title, speaker: serverState.speaker });
  //or simply 'this.setState(serverState);'
  //this is possible only because the keys in here {title, audience, speaker} are same in app-server.js{title, audience, //speaker}
  
    }
    
//in render 
                <Header {...this.state} />    //same as   <Header title={this.state.title} status={this.state.status} />

// So now, let's go into our header component and add the speaker's name.
(in Header.js)
  render() {
		return (
			<header className="row">
				<div className="col-xs-10">
					<h1>{this.props.title}</h1>
					<p>{this.props.speaker}</p> //new
				</div>
				<div className="col-xs-2">
					<span id="connection-status" className={this.props.status}></span>
				</div>
			</header>
		);
	}
