/*
mkdir iris  //name of our proj
cd !$
npm init
  "main": "server/service.js" //server is a folder
npm install --save express
*/

(in service.js)
    'use strict'; //This tells node.js that we want to use ES6 strict mode,

    const express = require('express');
    const service = express();

    module.exports = service;


create bin folder -> run.js
(run.js)
    'use strict';

    const service = require('../server/service'); //note you don't have to put js in the end
    const http = require('http');

    const server = http.createServer(service);
    server.listen(3000);

    server.on('listening', function() {
        console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode.`);
    });
    
    
$node run



//Now that we're done with a boilerplate code, we'll start hunting
 Let's use a module called node.slack-stk, it's provided by the Slack team.
 This is a trustworthy source, and we can expect that the module will always be on par with Slack's API. 
 So in our project, we will use this module.
