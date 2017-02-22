/*
- One of the benefits of React is that it handles state very elegantly. React makes it a bit easier for us to build large 
applications that deal with a lot of changing data. Combining React components with web sockets provides a graceful way to 
share real time data between the server and many clients.

 Lets think about what data types our application needs to manage.
 - Our app is going to be used by speakers when they're giving  a presentation. So everyone will want to know who the speaker 
is and what the presentation is called. We will need an object to store speaker information as well as a variable to hold the 
presentation title. We will refer to everyone else who's joining the presentation as the audience.
- We will need an object to track how many audience members are connected as well as information about each audience member. 
- Finally this polling app is gonna work with questions and answers. The speaker will have a pre-defined list of questions to 
ask and the audience will be able to answer each question. So the app will need to store questions and collect audience 
responses and store that as well. 
The speaker, presentation title, audience and questions will be stored in memory on the server. We will 
hold this data in JavaScript variables that we create in appserver.js. It will be our job to make sure this data stays in sync 
with each client and every user is viewing the most accurate and up to date data.


Every client connection will have the same root component; the app.
Information about the speaker, the presentation title and the audience members and all the questions and answers will be stored 
in the state of the app component.
 When a new client connects we will welcome them to the presentation by sending them current state data from the server. Every 
time a new member joins the presentation the state of the audience will change. We will then broadcast that change to all 
connected clients. Each client app component will update its state based upon the change and pass those state values down to 
child components as properties.
 When a speaker asks a question that question will be broadcast to each of the clients. When each of the clients answer the 
question we will also broadcast their answers as well. Our job is to keep the state variables in sync between the client and 
the server. Using Socket IO with React makes our job a bit easier.
*/


- The first state variable that we will handle is the presentation title. Let's create a default title variable on the server and pass its value all the way to the client. 
(in app-server.js)
      var title = 'Untitled Presentation';
...
//in io.sockets.on(..)
      socket.emit('welcome', {
          title: title
        });

//So this title variable will change when a speaker connects and sets the title, but for now let's pass this Untitled Presentation value all the way to the client when they connect.
(in
