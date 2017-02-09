/*
https://allzzwell.slack.com/messages/general/

Let's use a module called node.slack-stk, it's provided by the Slack team.
 This is a trustworthy source, and we can expect that the module will always be on par with Slack's API. 
https://github.com/slackapi/node-slack-sdk
https://slackapi.github.io/node-slack-sdk/ (documentation)
 
https://api.slack.com/bot-users
ctrlF for ' creating a new bot user.' link and go there
Give name to bot
copy access tok (msgd to slackbot)
click 'save integratoin' @bottom

*/
//  We set up a basic express application, created a bot using Slack and we an API token to connect to this bot user.
//  Now we are ready to add the Slack client to our project and run it. 

//go to https://slackapi.github.io/node-slack-sdk/
//INSTALLATION: npm install @slack/client --save

/*  Creating an RTM Client: */
https://github.com/slackapi/node-slack-sdk (under Posting a message with the Real-Time Messaging API)

   var RtmClient = require('@slack/client').RtmClient;
   var bot_token = "MYTOKEN" //remove this `process.env.SLACK_BOT_TOKEN || '';`
   var rtm = new RtmClient(bot_token);
   rtm.start();

// But where shall we put in this snippet? You may be tempted to put it into service.js because your express
// app lives there and it would make sense to add the Slack logic here. But our addition contains a run method which 
// will connect to Slack using web sockets. Do we really want to connect to Slack each time we require the app? A better 
// place would be the run.js.
// But I'd rather recommend to put it in a separate module. That way we can extend it later without cluttering our runscript. 

 //Let's use an initializing function to set up our Slack object to be used by all the modules. 
//let's addd 'use strict;' again and module.exports
(create slackClient.js)
   'use strict';
   var RtmClient = require('@slack/client').RtmClient;
   var bot_token = "MYTOKEN" //remove this `process.env.SLACK_BOT_TOKEN || '';`
   
   module.exports.init = function slackClient(token, loglevel) {
    const var rtm = new RtmClient(bot_token); //note const is added
    return rtm;
   }


   (in run.js)
   'use strict';

   const slackClient = require('../server/slackClient'); //new
   const service = require('../server/service');
   const http = require('http');
   const server = http.createServer(service);

   const slackToken = 'SLACK_API_KEY'; //new
   const slackLogLevel = 'verbose'; //new

   const rtm = slackClient.init(slackToken, slackLogLevel); //new
   rtm.start(); //new

   slackClient.addAuthenticatedHandler(rtm, () => server.listen(3000));

   //server.listen(3000);
   server.on('listening', function() {
       console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode.`);
   });

$node bin/run (bin is our folder only, remember?)


//Let's add a few more things in slackClient.js to get actual events about the connection status 
   'use strict';

   const RtmClient = require('@slack/client').RtmClient;
   const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS; //new

  //new
  function handleOnAuthenticated(rtmStartData) { //rtmStartData is passed when the event is triggered
       console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
   }

   function addAuthenticatedHandler(rtm, handler) { //new
       rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, handler); //when a client is authenticated we want to call this function passed in as handler.
   }


   module.exports.init = function slackClient(token, logLevel) {
       const rtm = new RtmClient(token, {logLevel: logLevel});
       addAuthenticatedHandler(rtm, handleOnAuthenticated); // we will now use this addAuthenticatedHandler 
    // with our rtm object, and use this handle authenticated method to be called. 
       return rtm;
   }
   
   /*  Now there's just one thing missing. We are now starting the express server regardless if the Slack connection 
was successful. Even if the connection to Slack takes a bit longer, the express server will start. I'd say that we 
should take care that the express starts only after the Slack client has connected.
Using events, this can be easily achieved. And that's why we added the addAuthenticatedHandler helper before. We just have 
to export this function in Slackclient.js. 
*/
  module.exports.addAuthenticatedHandler = addAuthenticatedHandler; //^


/* in our run.js script we can now simply subscribe to this event by typing in slackClient addAuthenticatedHandler, using
this rtm object we have here already, and then create the anonymous function. */
(in run.js)
    'use strict';

    const slackClient = require('../server/slackClient');
    const service = require('../server/service');
    const http = require('http');
    const server = http.createServer(service);

    const slackToken = 'SLACK_API_KEY';
    const slackLogLevel = 'verbose';

    const rtm = slackClient.init(slackToken, slackLogLevel);
    rtm.start();

    slackClient.addAuthenticatedHandler(rtm, () => server.listen(3000)); //new
//here we add in the authenticated handler and server.listen as callback
//So express will only start if we actually have a real working connection to Slack.

    server.on('listening', function() {
        console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode.`);
    });


$npm bin/run.js
//and voila! iris is online in slack!





