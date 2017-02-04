


Redux is a JavaScript library that you can use to manage client data within your application. 
Now Redux is based on Flux, a design pattern that provides developers with an alternative to NVC. 
It was designed to tackle the challenge of understanding how data changes flow through an application. 
Using Redux, you can incorporate simplified approaches to data management within your client application that 
should make it easier to understand, easier to wrap your head around, and ultimately, easier to debug. 
This simplified approach is highly dependent on Flux and the functional programming paradigm.


 In 2015, Dan Abramov signed up for a presentation at the ReactEurope conference.
 His talk was going to be on developer tools, and to prepare for his talk, he ended up developing Redux.
Dan has jokingly proclaimed that the methodology used to develop Redux was talk-driven development, sign up for a talk, and 
let drive your development. 
Andrew Clark, the author of Flummox, another Flux implementation, abandoned that project to join forces with Dan Abramov 
in order to complete Redux. In order to understand Redux, we must first take a look at Flux. 
Flux is a design pattern developed at Facebook to provide an alternative to MVC or MVP or MVVM.

These are all variations of the model-view-controller design pattern. 
Each of these patterns allow for two-way data communication between models and views. 
For example, these patterns have models. Models are used to manage the data within an application.
Now, the data from the model is used in a view. Views are objects that present data as user interface.
They represent what we see and interact with on the screen. Now, models can feed data to multiple views.
When the user interacts with a view, the view, through a controller or a presenter, may update the data stored in a model.

Changing data in a model can trigger data changes in other views. This means that in order to work with MVC, you need to
be on top of your game. Changing the way one model works could potentially cause unexpected consequences.
That level of complexity can be exaggerated at scale. In addition to having many models and many views, large-scale
applications also have many developers and teams working on the same codebase. Making changes can be intimidating at 
this level. So, Facebook developed a new approach, Flux. In Flux, the data flows in one direction.

Changes are initiated with actions. Actions are objects that describe what should change about the data. 
Actions are dispatched with the dispatcher. The dispatcher is an object that sends the action to the appropriate store. 
The store holds the data. It's like a model, but they're not exactly the same. The store is responsible for updating or 
changing its data. Finally, when the store updates the data, that change updates the view. The screen changes, reflecting
the data back to the user. Now, if the user interacts with the view, a new action is generated and the process starts all 
over again.

Data flows in one direction. Now, as a Flux application grows, it may include more stores and more views, but the dataflow
remains unidirectional. All changes in a Flux application begin by dispatching actions and end with updating views.
Flux itself is not a library, it's a design pattern that can be implemented with Javascript. 
The Facebook Flux library only includes a generic dispatcher that you can use in your Flux applications. 
So, the community got to work, and GitHub exploded with Javascript libraries that represent variations of this 
design pattern.

Each of these libraries represent a different implementation of Flux.
We have Flummox, Alt, Reflux, Fluxxer, McFly, there are too many to name. Redux is one of these Flux implementations.
Now, due to its simplicity and ease of use, it has emerged as one of the winners in the Flux library shakedown.
Redux can help you build applications that are easier to understand. Now, this will make it easier to collaborate
with other developers about your codebase and the dataflow in your application. 
It should also make it easier for you to find and fix bugs.



How Redux works
Redux isn't exactly Flux, it's Flux-like, and Flux data flows in one direction.
An action is sent to the dispatcher, and then dispatched to one or more stores before the view is updated.
And Redux data still flows in one direction, but there's a big difference. There's only one store. 
With Redux you cannot use multiple stores, and because there is only one store, there's no need for a dispatcher.
The store will dispatch the actions directly. Having one stores means that all of your state will be located in one place.
We refer to this as the single source of truth.

For example, let's say we have a social media application.
All of the data for one client can be stored in a single object. Everything we need to know about the current state of 
our application is right here. We have user information, along with their preferences, information about posts, friends,
and we even have an array to save information about errors that could have occurred. Storing everything in one place makes
it much easier to reason about the data within our application, and since we have all of the data here, it should make it 
a little easier for us to track down bugs too. Now at this point you may be thinking that we lose modularity by storing all
of the data in one object.

One object does not sound very modular. But with Redux, modularity is obtained through functions. 
Instead of breaking the state up into different objects, we will create functions that are designed to manage specific
leaves and branches of this state tree. We'll have a function to manage the user part. We'll have another function to 
manage an individual post, and one to manage an entire array of posts. We could probably reuse the user function to
manage our friends, but we may have a friends function to manage the entire array of friends.

And we would even have an error function to manage the array of errors. The idea of using functions for modularity comes 
from the functional programming paradigm. It's the paradigm that was used to develop Redux. Now you don't have to be an 
expert in functional programming to work with Redux, but there are a few important concepts that you want to keep in mind. 
The first are pure functions. Pure functions are functions that do not cause side effects. Everything the function needs 
to operate is sent as arguments, and a new result is returned. Pure functions do not change any of their arguments or any 
global variables.They simply use the information to produce a new result. 

That brings us to our second point: immutability. To mutate is to change, so to be immutable is to be unchangeable.
We do not want to change the variables and objects in a functional application. Instead we want to produce new ones. 
The third and final point is composition. Composition refers to the ability to put functions together in a way that one 
function's output becomes the next function's input. This means that the values returned from one function become the 
arguments of the next function, until eventually the last function returns the value we were looking for.

Let's take a look at composition by examining the getPercent function. Let's assume we have a function that we can send 
one and four to, and it will return 25%. This function could be composed of smaller functions, so when we send one and 
four as arguments to getPercent, they become the arguments that are sent to convertToDecimal. Now the convertToDecimal 
function will return 0.25, and the value returned by convertToDecimal becomes the arguments for decimalToPercent, which
will then take that value, multiply it by 100, and give us 25.

Now the output from decimalToPercent will become the input for addPercentSign, and a percent sign becomes concatenated 
onto our value. Eventually 25% is returned. This is the idea behind composition. In Redux, composition is used in the
store. The reducer functions that we create to manage specific parts of the state tree are composed, and the action and 
state is sent to and piped through each of these reducers until a state is eventually mutated. Now we don't have to worry 
about how these reducers are composed.

All we have to do is identify state, write good reducers, and let the Redux store handle the rest.
![image] (https://cloud.githubusercontent.com/assets/20602254/22617952/d2fe3f16-eaf6-11e6-9b1f-a731fad58392.png)










