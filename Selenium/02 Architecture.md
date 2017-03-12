 At first glance it might appear that Selenium is actually driving the browser directly from your code but there's actually a 
 little bit more going on here.
 
 
 ![image](https://cloud.githubusercontent.com/assets/20602254/23832663/62dff4ce-075f-11e7-9c61-3bac2b46d829.png)
 
 at the top here we've got some bindings and these are language level bindings and with what these bindings are just implementations in the various languages that we can use to do our automation. So we have a common API that we use for Selenium that has a common set of commands and we have various bindings for the different languages.
 
 Now these bindings communicate across a common API, this WebDriver API, and this is an API that is a standard that is possibly going to be incorporated natively in browsers eventually, at least that's what the Selenium folks are pushing for.
 
 Now let's not worry too much about exactly how this API works at this point but understand that this API allows us to have 
 some drivers that interpret commands that are sent across the API. So these drivers here at the bottom, you see we have an IE 
 driver, a Firefox, Chrome, a driver called HTML unit which is an interesting one. It is basically a not real web browser. 
 It's a headless web browser. What I mean by that is it doesn't display any window. It doesn't show you anything but it is 
 able to respond like a real web browser, so it can make your test execute quite fast since I don't have that slowdown of any 
 kind of rendering. 
 
 
 But the basic idea here is that each one of these drivers knows how to drive the browser that it corresponds to. So the IE driver knows how to use the low level details of Internet Explorer and drive it to do things like clicking button, going into pages, getting data from the browser itself, the same thing for Firefox, Chrome, and so on.
 
 
 And so what's happening here is you're going to write your test in let's say C Sharp and you're going to be using common Selenium API and that C Sharp binding is going to be sending command across this common WebDriver API. Now on the other end is going to be listening a driver, whatever driver that you've hooked up you've specified in your test is going to listen. It's going to interpret those commands and it's going to execute them on the actual browser and then it's going to return the result backup using the WebDriver API to your code where you can look at that result.
 
 
 ![image](https://cloud.githubusercontent.com/assets/20602254/23832685/c246398c-075f-11e7-9356-534404ef703a.png)


You're going to write your tests, let's say using C Sharp against that Selenium API and that binding code is going to issue commands across what's called the WebDriver wire protocol which is basically a rest-based web service that is able to interpret those commands. So we can actually even just send HTTP requests. We can send posts and gets to what is a driver server and this driver server is just a little executable that runs each one of the drivers has this driver server that basically listens on a port on your local machine when you run your tests and it's waiting for these commands to come in.

<b>
And when these commands come in it interprets those commands and then automates the browser and then returns those results back. So really when you're executing your tests locally you're not really doing a local execution. What you're doing is you're basically sending out commands over this web service and then a server that's sitting on your machine is catching them and then performing the action and giving you back the results.

So this is not apparent when you're running Selenium. It looks like it's just running directly from the code that you're executing. You might not catch that it's actually doing all this over the wire.
<b/>
