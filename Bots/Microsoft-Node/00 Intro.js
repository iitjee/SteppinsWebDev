
/*
# Requirements
- A Skype account.
- A Microsoft Account (live, outlook, msn, hotmail, etc).
- A [Movie DB](https://www.themoviedb.org) account with a free developer API key
- [Ngrok](https://ngrok.com/).
- [Node.js](https://nodejs.org/en/download/) version 5 or higher.



$npm init
$npm install --save botbuilder
$touch bot.js
*/
(in bot.js)
const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen(); //a connector between your console and node bot
const bot = new builder.UniversalBot(connector); //build a UniversalBot using the connector

//bot 
bot.dialog('/', session =>  //routes the incoming message to the active dialgo
	session.send('Hello') //no semi colon
	)

$node bot.js //type anything and press return, you get the default msg, 'hello'


//Now let's understand a concept called waterfall
//Waterfalls let you collect input from a user using a sequence of steps. A bot is always in a state of providing a user with 
information or asking a question and then waiting for input. In the Node version of Bot Builder its waterfalls that drive this 
back-n-forth flow.
//To implement assign array of functions to the dialog, so that the results of the first function are inputs to the second fn
      bot.dialog('/', [
          function (session) { //es6 syntax will be `session => {..
              builder.Prompts.text(session, "Hi! I'm Movie DB. What's your name?");
          },
          function (session, results) {
              session.send('Hello %s!', results.response);
          }
      ]);
$node bot.js
//press return to get the prompt rolling
//note that the bot doesn't remember our name. So let's fix that

//SDK provides 4 ways of persisting data relative to a user or conversation
//one of them is 'userData' like his name




//Now the framework includes an 'intentDialog' class designed to determine the user intent when they ask your bot to do something
const intents = new builder.IntentDialog();
bot.dialog('/', intents); //the bot will call the most apt intent based on the regular expressions

//if no intents are recognized, onDefault hander will be invoked
intents.onDefault([
  (session, args, next) => {
    if(!session.userData.name) { //if username is not yet given
      session.beginDialog('/askName')
    } else {
      next(); //if name is already there, it will proceed to 2nd method
      }
   } //end of 1st method
    session =>
         	session.send(`I'm new around here %s. I only know the movie command. Say it if you want some recommendation`, session.userData.name);
    ]);

//@bottom of code
The IntentDialog class lets you listen for the user to say a specific keyword or phrase. We call this intent detection because 
you are attempting to determine what the user is intending to do. IntentDialogs are useful for building more open ended bots 
that support natural language style understanding. 
intents.matches(/^movie/i, [ //array of functions
  session =>
    session.beginDialog('/genrePrompt'),
 (session, results) => {
    if(results.response.id > 0) { //if user types in an id, we'll store that in dialogData property
      session.dialogData.genre = results.response.id; //dialogData persists info for a single dialog which is used in storing 
//temprorary information in between wthe step of the waterfall.
      session.beginDialog('/yearPrompt');
      } else {
      session.send('Okay, maybe next time');
      }
    },
    (session, results) {
      //finally we'll store the data in antoher dialogData property
      session.dialogData.year = results.response;
      getMovie(session);
    }
    //Let's call the dialogs first and then the MovieDB API
    
 ]);
 
 
 
      
      
      
      










