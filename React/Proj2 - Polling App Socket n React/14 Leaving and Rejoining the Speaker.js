- The same issues that we had with audience members disconnecting, we also have with our speaker.
The other issue that occurs is when the speaker leaves, so if I close this Socket, that information has not been reflected in 
this audience member Socket.
So we have a couple rough edges to smooth out.

(in app-server.js)
socket.once('disconnect', function() {

		var member = _.findWhere(audience, { id: this.id });

		if (member) { //Handling Member Disconnection
			audience.splice(audience.indexOf(member), 1);
			io.sockets.emit('audience', audience);
			console.log("Left: %s (%s audience members)", member.name, audience.length)
		} else if (this.id === speaker.id) { //Handling Speaker Disconnection
			console.log("%s has left. '%s' is over.", speaker.name, title);
			speaker = {};
			title = "Untitled Presentation";
			io.sockets.emit('end', { title: title, speaker: '' }); //we're going to emit an event for every Socket.
		}
    
//So this handles leaving a speaker on the server, now we need to handle this on the clients
      //    In componentWillMount,
          this.socket.on('end', this.updateState);
updateState function is automatically going to update our title and our speaker for us. That handles broadcasting an end event. 
Now we need to handle rejoining the speakers. 

 So what happens when the speaker hits refresh in the browser? They leave, and then we need to automatically rejoin them. So in 
order to do that we also need to save information about the title.
so we'll change the eventhandler of 'start' event to a custom this.start method
        this.socket.on('start', this.start);
        
start(presentation) {
        if (this.state.member.type === 'speaker') { //storing the title when the speaker connects the first time
            sessionStorage.title = presentation.title;
        }
        this.setState(presentation);
    },
    //Now the reason we're saving the title is because when we start a presentation, we need to send the speaker's name and the title.
    
    
