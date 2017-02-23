- Now that we have the questions loaded, we need to allow the speaker to ask a question. When a speaker asks the question, we 
will update the state of currentQuestion on the server, and then we will broadcast that question to every connected socket. So 
let's start with the Questions component. 

(in Questions.js)

    var Questions = React.createClass({

      ask(question) { //new
      //argumetn = question string
        this.props.emit('ask', question);
      }, //So now we need to invoke this ask function when the speaker clicks on the span

      addQuestion(question, i) {
        return (
          <div key={i} className="col-xs-12 col-sm-6 col-md-3">
            <span onClick={this.ask.bind(null, question)}>{question.q}</span> //new
            //read about bind. author told some thing
          </div>
        );
      },

(in Speaker.js)
//here on line 14, where we include the Questions component, we also need to pass the emit property.
    <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
                <Questions questions={this.props.questions} emit={this.props.emit} /> //new (emitting)
                <Attendance audience={this.props.audience} />
    </Display>


//The next thing that we're going to do is go to the server and collect that question, app-server. Now from app-server, we're 
//going to need to add another state variable. That state variable is currentQuestion.
(in app-server.js)
    var currentQuestion = false;
// I will set it to false because when we start off, we aren't asking any questions.
//The other thing that I need to do is emit the current question to the user when they join the socket.

      socket.emit('welcome', {
          title: title,
          audience: audience,
          speaker: speaker.name,
          questions: questions,
          currentQuestion: currentQuestion //new
        });
//So that would cover getting the question if you connect it to the socket in the middle of a question.        
  
//  Now we need to broadcast the question that the speaker will ask to all sockets that are already connected.
// we will now listen to the 'ask' event which we've just created in the Questions component
    socket.on('ask', function(question) {
        currentQuestion = question;
        io.sockets.emit('ask', currentQuestion); //broadcasting to all sockets
        console.log("Question Asked: '%s'", question.q);
      });
Great, so that handles the question from the server perspective. When the speaker asks a question, on line 64, we will 
broadcast the current question to every connected user. And if you connect to the presentation after the speaker has asked the 
question, you will get the current question with the welcome event down here on line 73.


//So now we need to handle current questions in our app state. 
(In app.js)
      getInitialState() {
              return {
                  status: 'disconnected',
                  title: '',
                  member: {},
                  audience: [],
                  speaker: '',
                  questions: [],
                  currentQuestion: false //new
              }
          },
// Speaker emits a question. That will get sent to app-server, so we are listening for an ask from the client, but then we also 
//broadcast an ask event to all of the clients.

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.updateState);
        this.socket.on('joined', this.joined);
        this.socket.on('audience', this.updateAudience);
        this.socket.on('start', this.start);
        this.socket.on('end', this.updateState);
        this.socket.on('ask', this.ask); //new
    },
    
    
 ask(question) {
        this.setState({ currentQuestion: question });
    },

//And the last thing that we're going to need to do is display this question to all of our audience members.


(in Audience.js)
//We do want to display the question if we do have a member. However, we don't want to display a question if the speaker hasn't 
//asked one. So we are going to do another level of Display component hierarchy here.
          <Display if={this.props.member.name}>

						<Display if={!this.props.currentQuestion}>
            // if we don't have a current question
							<h2>Welcome {this.props.member.name}</h2>
							<p>{this.props.audience.length} audience members connected</p>
							<p>Questions will appear here.</p>
						</Display>

						<Display if={this.props.currentQuestion}>
            //if we have a current question
							<h2>{this.props.currentQuestion.q}</h2>
						</Display>

					</Display>
          
          
 //with this, speaker can ask any question by selecting a question. 
 // This works even if a user joins after the speaker has already asked a question!
          
          
          
          
          
          
          
          
          
