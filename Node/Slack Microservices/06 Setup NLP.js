/*


 We will use a free service called wit.ai. It comes with a web interface and an API. Let's get started with that.
 (https://www.linkedin.com/learning/building-a-slack-bot-with-node-js-microservices/set-up-natural-language-processing?autoplay=true)
 ^ watch this for how to get started
 
 What's the best way to add Wit to our project? The easiest way would be to simply add this API request into handleOnMessage
 on slackClient here. While this seems legit, it means tight coupling between the natural language processing API we use and
 the slackClient itself. What if we later decide to use another service for that or to implement the language processing part
 locally? So I'd rather move this into a dedicated module and pass it into slackClient as language processing service to be
 used.
 */
 
 (in server, create witClient.js)
 'use strict';
      module.exports = function witClient(token) { //step-1
          const ask = function ask(message) {
            console.log('ask: ' + message);
            console.log('token: ' + token);
          }
        }
        
/*   One important part is now that we have to return something from this initialization function, so we return
some anonymous object, and this object contains a function ask, ask property, that we also call ask. */

   return {
              ask: ask
          }
 
 
 
 
 
       'use strict';

      const request = require('superagent');

      function handleWitResponse(res) {
          return res.entities;
      }

      module.exports = function witClient(token) { //step-1
          const ask = function ask(message, cb) {

              request.get('https://api.wit.ai/message')
                  .set('Authorization', 'Bearer ' + token)
                  .query({v: '20160919'})
                  .query({q: message})
                  .end((err, res) => {
                      if(err) return cb(err);

                      if(res.statusCode != 200) return cb('Expected status 200 but got ' + res.statusCode);

                      const witResponse = handleWitResponse(res.body);
                      return cb(null, witResponse);
                  })

          }

          return {
              ask: ask
          }
      }
      
//And now we will initialize our witClient 
      (in bin/run.js)
      const witToken = 'WIT_API_KEY';
      const witClient = require('../server/witClient')(witToken);

 //in slackClient we now add a new module global, nlp, it's null, 
let nlp = null;

//and then mention it here
module.exports.init = function slackClient(token, logLevel, nlpClient) {
    rtm = new RtmClient(token, {logLevel: logLevel});
    nlp = nlpClient; //store nlpClient in the global 'nlp' variable
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    rtm.on(RTM_EVENTS.MESSAGE, handleOnMessage);
    return rtm;
}

//now
 function handleOnMessage(message) {
   //remove console.log(message);
  nlp.ask(message.text); //put this

  rtm.sendMessage('this is a test message, sir! Bye Bye', message.channel, function messageSent() {
    // optionally, you can supply a callback to execute once the message has been sent
  });
}

//We should now start implementing the call to Wit. For that, I'll use a library called SuperAgent, as it
//simplifies HTTP requests from Node.
(in witClient.js)
const request = require('superagent');






