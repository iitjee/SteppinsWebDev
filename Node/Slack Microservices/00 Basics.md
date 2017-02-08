
Microservices is a specialisation of an implementation approach for service-oriented architectures (SOA) used to 
build flexible, independently deployable software systems <br/>

Node is very good at consuming data from different sources and transforming it for other applications. Let's put it this way. Node is the ideal platform to provide services of all kinds. Why is that? Well, Node.js is event-based. It uses an event loop that application can load off asynchronous tasks to. The event loop takes care of completing the task while the application can proceed processing requests. When the task is complete, the event loop pings back the main application, then executes a callback function to proceed with the result.
<br/>

Simply put, we tell the event loop, please do this task while we do other work, and let us know when you are done. Because of that, we can use one single thread for our Node application, which saves system resources and also brings higher throughput. Remember, creating a thread for every request depletes resources. It's much better this way. In our application, we will use the API of Slack to get notified when a new message arrives, use a natural language processor called Wit to try to understand the meaning of a message, use self-built, self applications called microservices to find out what to reply, and send the reply back to Slack.
<br/>

 Until 20 to 30 years ago, architectures were strictly monolithic, which means they consisted of one single application. If you wanted to modify code, you had to check out the whole application from your version control system, and then your change was ready to go into production, it was deployed with the whole application.
 <br/>
 
 Usually, these applications were also ran on a single server. The program logic tended to be very tightly coupled. This means, if you changed the method of functioning one file, there was a significant chance that your action would affect other parts of the application. This means that the developer had to have a model of the whole application in mind when doing any change. When a new developer started to work on something, she or he needed to first understand how everything was stitched together before writing a single line of code.
 <br/>
 
 Think of a shopping system. The front and the product management, the custom management, the shipping, it was all in one application. Around 2000, there was a paradigm shift. Computer networks were quite common by then, and architects started to create distributed applications. So, they sliced the applications into logical pieces called services that exchanged the data over the network. This was called service-oriented architecture, or SOA. The communication between continents was mostly done by a XML.
 <br/>
 
 Still, those logical pieces were quite large and unfortunately, often incorrectly used when some vendors developed proprietary ways to transparently call methods over the network, which basically introduced tight coupling again. Coming back to our shopping system example, in the SOA application, you would maybe decouple the display logic from the data excess providing methods to fetch all items or to place an order. Such systems were still tightly coupled, but distributed, which made things rather worse than better. And soon SOA lost its popularity.
 <br/>
 
 Around 2010, the term microservices was coined, while they have much in common with SOA, their aim was simplicity. There is no standard but the set of best practices apply. Most important, one microservice should only do one task, like fetching a customer from a backend. It should be possible to develop and deploy a microservice completely independent from all other parts of an application. Microservices should communicate using standard HTTP methods.
 <br/>
 
 By the way, the most common protocol today is changed and no longer XML. The shopping system I talked about would now have an independent front that fetches data from various microservices. One service might return a list of items, while another one may provide excess to the shopping cart for a given user. Note that I am now talking about services and not methods as I did before.
 <br/>
 
 So, what are the overall benefits of using microservices? 
 - First of all, a new developer doesn't have to understand the whole application, as it was before.
 -  Services can be developed and deployed by independent teams, because there is not so much interdependency between those teams.
 - Services can develop with the language that does a given task best, and also where the team feels comfortable with. And if a service fails, maybe you deployed a faulty service, something is wrong, not the whole application has to fail anymore. 
 <br/>
 For our application, we will apply best practices and we will also take measures that if one service is degraded, the application will still be functioning.We call this resilience.


