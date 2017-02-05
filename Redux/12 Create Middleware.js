/*

Now that we know how to use the store, along with its various methods, we are ready to dive in to a more
advanced redux topic: middleware. 

Middleware gives us the ability to add functionality directly to the store's dispatch pipeline.
Now the subscribe method allows us to subscribe listeners to the store, and these listeners are invoked after the dispatch
occurs. 

But middleware is far more powerful. Middleware gives us control over how actions are dispatched. We can add functionality 
before the action is dispatched or after the action is dispatched. We can delay the dispatching of actions. 
We can even skip dispatching and action altogether.

*/

//To introduce middleware, we must first create a file that encapsulates all the code necessary to create stores for 
//our application. 
(create new file in root/src/store/ index.js)

import C from '../constants'
import appReducer from './reducers'
import { createStore } from 'redux'

export default (initialState={}) => {
  return createStore(appReducer, initialState) //this file exports a function that we can use to create stores. 
}

//Now the reason I want to encapsulate everything in this file is so that we can add middleware.
//Now middleware uses a higher order function. Okay,
//so in order to create middleware, we're going to need to create a function that returns a function that returns a function.


    const consoleMessages = function(store)  {
      return function(next) { //
        return function(action) { //This is the function that we will use to actually invoke or dispatch the action

      }}
      }

// Now the reason that it's a higher order function is because we have asynchronicity to deal with. So the action is going to be dispatched when that occurs. 
// Now this code looks scary a little bit. This is where arrow functions can make your code look a little bit nicer. 
    const consoleMessages = store => next => action => {
// This function gives us the action that is currently being dispatched, along with a mechanism to dispatch that action and change the state. What we need to do is record the result.

const consoleMessages = store => next => action => { //since each function takes a single argument, we 've removed parans

	let result
   result = next(action) //action gets dispatched, and our state will actually change.
	return result
}
/*
 So now I have a function that doesn't really do much, except dispatch the action. And this makes sure that we do not break the store's current dispatch pipeline.
 But inside of this function, I can add functionality before or after I dispatch the action by adding code
 before or after `result = next(action)`
 
 So before we dispatch the action, let's create a console group. Console groups allow us to group all of the logs hat are associated with this action into a collapsible group on the console.
*/

//after let result
console.groupCollapsed(` dispatching action: ${action.type}`)
	    
//So after I log the action's type, I could log some information about the state before the action is dispatched.
	console.log('ski days', store.getState().allSkiDays.length)

// So now after the action is dispatched, we can get some information about the current state. 
	    

	let { allSkiDays, goal, errors, resortNames } = store.getState()

	console.log(`

		ski days: ${allSkiDays.length}
		goal: ${goal}
		fetching: ${resortNames.fetching}
		suggestions: ${resortNames.suggestions}
		errors: ${errors.length}

	`)

	console.groupEnd()

	return result

}

