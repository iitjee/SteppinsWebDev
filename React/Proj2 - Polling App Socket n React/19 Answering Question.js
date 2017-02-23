- When an audience member answers one of the questions by clicking on a choice button we need to collect that information on the server. So I'm going to start here in app-server and the first thing I'm going to do is add yet another variable to our state.



(in app-server.js)
  var results = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
//As our audience members answer each question we will then increment the results.  
  
  
  	socket.on('answer', function(payload) {
		results[payload.choice]++;
		console.log("Answer: '%s' - %j", payload.choice, results);
	});
When the client answers a question they will emit an answer event. And their answer information will be injected into this 
callback function here, so we'll just call it payload. So what we want to do is we want to take our results and we want to find 
out whether they answered a, b, c, or d. So payload.choice should give me a, b, c, or d. Now if they answered any of these what 
we actually want to do is increment that value.


Next thing that we have to do is we have to come in here to this ask handler, and we need to reset those results when a new 
question is being asked.
    socket.on('ask', function(question) {
        currentQuestion = question;
        results = {a:0, b:0, c:0, d:0};
        io.sockets.emit('ask', currentQuestion);
        console.log("Question Asked: '%s'", question.q);
      });
//so that will clear out any other results from our previous questions.

(Ask.js)

	getInitialState() {
		return {
			choices: [],
			answer: undefined //new ( So originally we will not have an answer until the user selects a choice.)
		};
	},
  
//   I need a function that will gather that user's answer and emit that answer event back to the server.
      select(choice) {
        this.setState({ answer: choice }); //saving the answer in the state
        sessionStorage.answer = choice; //So if our users have already answered the question, we don't want them to hit refresh 
//and see the buttons again. So I'm going to save their answer to session storage
        this.props.emit('answer', {
          question: this.props.question,
          choice: choice
        });
      },
      
      
      
      
      




