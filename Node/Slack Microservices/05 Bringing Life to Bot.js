/*

  npm install @slack/client --save
  


*/
(in slackClient.js)
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

function handleOnMessage(message) {
    console.log(message); //prints a json object of the msg
    //message.channel is the id of the channel you want to send the message to
    rtm.sendMessage('this is a test message', message.channel, function messageSent() {
    // optionally, you can supply a callback to execute once the message has been sent
  });
}

//now we have to add this message function as to the RTM_EVENT handler.
module.exports.init = function slackClient(token, logLevel) {
    rtm = new RtmClient(token, {logLevel: logLevel});
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    rtm.on(RTM_EVENTS.MESSAGE, handleOnMessage); //handleOnMessage is called everytime a new message comes in
    return rtm;
}

//since we are using rtm in handleOnMessage also (initially declared only in module.exports.init)
//let's make it global
let rtm = null;

//Now you need to invite iris in your particular channel
//go to you #channel and message
Hey @iris and you get an option to invite







