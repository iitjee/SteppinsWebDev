 Regular HTTP requests are stateless. You request a page, the server processes the request, and sends the response.
After the request is processed, there is no connection between the client and the server. It's a one shot. WebSockets work a bit differently. There is an initial HTTP request where the client asks the server if it could do WebSockets, the WebSocket capable web server then replies, which completes the handshake. After that, a stateful bidirectional communication channel is opened. This means server as client can use this channel to send or receive messages. And this is exactly what we need for a chat application.
<br/>

We see that the RealTimeMessaging API provides everything we need, and that it relies on WebSockets. This information is important if we would want to run our application behind some web server or proxy. In this case, we would have to make sure that WebSocket connections are passed through to Node. We will later discuss if we are going to use an existing module to communicate with Slack, or build everything from scratch. But even if we will use a module, we should always know what's going on behind the scenes, and not blindly rely on third party code.
https://api.slack.com/rtm
<br/>

<b> Anatomy of our app: </b> <br/>
First, we need a main application. We will use the Express framework for that, as it provides a good starting point for what we will create. 
This main implication should handle connections to Slack, handle our services, receive messages from Slack, process messages, route messages to a service, and send replies to Slack.
<br/>

Then we have Wit, a service that lets us process natural language to try to understand its meaning. We need it to process messages. Then we will create services that can tell us the local time for a given location and the weather for a given location, and this can be extended as we want. All of these services are again based on Express. The services need a way to reach to our application and to main application needs to route the requests or messages to a service that can handle it.
<br/>
