- The other thing that a speaker will need to see on their screen is a predefined list of questions to ask at the presentation. 
Let's go ahead and add those questions. 

(create app-questions.js)
    module.exports = [
        {
            "q": "How much of your true potential are you using?",
            "a": "none of my true potential",
            "b": "some of my true potential",
            "c": "most of my true potential",
            "d": "all of my true potential"
        },
        {
            "q": "How much money would you like to make?",
            "a": "no money",
            "b": "some money",
            "c": "most of the money",
            "d": "all of the money"
        },
        {
            "q": "How much money would you like to put down?",
            "a": "more money than I have",
            "b": "all of my money",
            "c": "some of my money",
            "d": "no money at all"
        },
        {
            "q": "Who do you want to be your boss?",
            "a": "someone bossy",
            "b": "someone who knows what they are doing",
            "c": "I'm my own boss",
            "d": "no boss at all"
        }
    ];
    
(in app-server.js)
    var questions = require('./app-questions');
// Now the next thing that we need to do is we need to pass these questions to each socket when they are welcome.
    socket.emit('welcome', {
        title: title,
        audience: audience,
        speaker: speaker.name,
        questions: questions
      });
      
//So we're going to need to add these questions as another state variable.
(in APP.js)
var APP = React.createClass({

    getInitialState() {
        return {
            status: 'disconnected',
            title: '',
            member: {},
            audience: [],
            speaker: '',
            questions: [] //new
        }
    },
    
    
    
//So as soon as you connect to this socket, you will receive questions in this array. Now we need to create a component for //
//displaying those questions to our speaker. 
(in parts/ create Questions.js)
      var React = require('react');

      var Questions = React.createClass({

        addQuestion(question, i) { //callback function for map(see below)
        //first argument = value in array
        //secodn arg = index of first arg in array
          return (
            <div key={i} className="col-xs-12 col-sm-6 col-md-3"> //key is attr in React //(https://facebook.github.io/react/docs/lists-and-keys.html)
              <span>{question.q}</span>
            </div>
          );
        },

        render() {
          return (
            <div id="questions" className="row"> //'row' is bootstrap class
              <h2>Questions</h2>
              {this.props.questions.map(this.addQuestion)} // map each question to a div element.
            </div>
          );
        }
      });

//So we'll go ahead and save this. So let's go ahead and add this Questions component to our Speaker component.
(in Speaker)
return (
			<div>
				<Display if={this.props.status === 'connected'}>

					<Display if={this.props.member.name && this.props.member.type === 'speaker'}>
						<Questions questions={this.props.questions} /> //new (this.props.questions is getting passed from APP's state)
						<Attendance audience={this.props.audience} />
					</Display>

					<Display if={!this.props.member.name}>
						<h2>Start the presentation</h2>
						<JoinSpeaker emit={this.props.emit} />
					</Display>

				</Display>
			</div>
		);
      module.exports = Questions;

