//  Now that we're displaying the current question on the audience screen, we also need to provide them with a way to 
// answer the question. We're going to need to add a button for each one of the available multiple choices. Let's create a 
// component called Ask that will handle this task.

(in parts/ Ask.js)
      var React = require('react');

      var Ask = React.createClass({


        addChoiceButton(choice, i) {
        //for four options, this method will be invoked 4 times
        
        var buttonTypes = ['primary', 'success', 'warning', 'danger'];
        return (
          <button key={i} className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]}> //curly braces as we use a variable(butTy
            {choice}: {this.props.question[choice]}
          </button>
        );
      },
      
        render() {
          return (
            <div id="currentQuestion">
              <h2>{this.props.question.q}</h2>
              <div className="row"> //creates 4 buttons
                {this.state.choices.map(this.addChoiceButton)} //this.state.choices is array
              </div>
            </div>
          );
        }

      });

      module.exports = Ask;
      
      
//now add state
	getInitialState() {
		return {
			choices: []
		};
	},
  
//So initially, this choices array is going to be empty.
//Now, we need to populate this choices array. So, I'm going to create a function here on line 10 called setupChoices
    setUpChoices() {
      var choices = Object.keys(this.props.question); //creates an array ["q", "a", "b", "c", "d"]
      choices.shift(); //shifting q out of this array so resultant is ["a", "b", "c", "d"]
      this.setState({ choices: choices });
    },
   
/*
  we would have done
    getInitialState() {
		return {
			choices: ["a", "b", "c", "d"]
		};
	}
  but What if there's an e, or an f? Or what if there's only an a or a b? We're going to want this to still be able to work. So, that's why we are doing this dynamically, based off of the question that is sent to this component.
  */
  
  
//So now, we need to invoke this setupChoices, and we need to do this at two places. We either need to do this when the 
//component mounts, and it receives the question, or when this component's properties change.  
      componentWillMount() {
        this.setUpChoices();
      },

      componentWillReceiveProps() { //life-cycle method
        this.setUpChoices();
      },



//add this Ask component to our Audience component.
(in Audience.js)
	var Ask = require('./parts/Ask');

...
	<Display if={this.props.member.name}>

		<Display if={!this.props.currentQuestion}>
			<h2>Welcome {this.props.member.name}</h2>
			<p>{this.props.audience.length} audience members connected</p>
			<p>Questions will appear here.</p>
		</Display>

		<Display if={this.props.currentQuestion}>
			<Ask question={this.props.currentQuestion} /> //replaced
		</Display>

	</Display>



      



