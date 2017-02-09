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

//go to https://slackapi.github.io/node-slack-sdk/
//INSTALLATION: npm install @slack/client --save

/*  Creating an RTM Client: */
https://github.com/slackapi/node-slack-sdk (under Posting a message with the Real-Time Messaging API)
(create slackClient.js)
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

   server.on('listening', function() {
       console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode.`);
   });

$node bin/run (bin is our folder only, remember)






