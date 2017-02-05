/*

Now that we know how to use the store, along with its various methods, we are ready to dive in to a more
advanced redux topic: middleware. 

Middleware gives us the ability to add functionality directly to the store's dispatch pipeline.
Now the subscribe method allows us to subscribe listeners to the store, and these listeners are invoked AFTER the dispatch
occurs. 

But middleware is far more powerful. Middleware gives us control over how actions are dispatched. We can add functionality 
before the action is dispatched or after the action is dispatched. We can delay the dispatching of actions. 
We can even skip dispatching and action altogether.

 Basically It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
 People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.


One of the benefits of Redux is that it makes state changes predictable and transparent. Every time an action is
dispatched, the new state is computed and saved. The state cannot change by itself, it can only change as a 
consequence of a specific action.

Wouldn't it be nice if we logged every action that happens in the app, together with the state computed after it? When 
something goes wrong, we can look back at our log, and figure out which action corrupted the state.
*/

//To introduce middleware, we must first create a file that encapsulates all the code necessary to create stores for 
//our application. 
(create new file in root/src/store/ index.js)
/*The idea behind this file is we want to export a function that we can use to create stores,
but we don't have to worry about wiring up the reducers or even the middleware that we're going to add.*/

import C from '../constants'
import appReducer from './reducers'
import { createStore } from 'redux'

export default (initialState={}) => {	
  return createStore(appReducer, initialState) //this file exports a function that we can use to create stores with the
	//help of initialState argument
	//createStore is redux method
}

//Now the reason I want to encapsulate everything in this file is so that we can add middleware.
//Now middleware uses a higher order function. Okay,
//so in order to create middleware, we're going to need to create a function that returns a function that returns a function.

//creation of middleware which just logs messages to the console
    const consoleMessages = function(store)  { //the name of this function is consolemessages
      return function(next) { //This is the function that we will use to actually invoke or dispatch the action
        return function(action) { //this function will pass the action itself
		...
      }}
      }
// Now the reason that it's a higher order function is because we have asynchronicity to deal with. 
//So the action is going to be dispatched when that occurs. 
      
/* short hand for above */ 
    const consoleMessages = (store) => (next) => (action) => {
// This function gives us the action that is currently being dispatched, along with a mechanism to 
//dispatch that action and change the state. What we need to do is record the result.

const consoleMessages = store => next => action => { //since each function takes a single argument, we 've removed parans
	let result	//to record the result
   result = next(action) //action gets dispatched, and our state will actually change.
	return result	// to make sure the state change gets registered, we must return the result.
}
/*
 So now I have a function that doesn't really do much, except dispatch the action. 
 And this makes sure that we do not break the store's current dispatch pipeline.
 
 But inside of this function, I can add functionality before or after I dispatch the action by adding code
 before or after I dispatch the action i.e before `result = next(action)`
 
 So before we dispatch the action, let's create a console group. 
 Console groups allow us to group all of the logs that are associated with this action into a collapsible group on the console.
*/

//before `result = next(action)` (before action is dispatched)
	console.groupCollapsed(`dispatching action: ${action.type}`)
	    
// So after I log the action's type, I could also log some information about the state before the action is dispatched.
	console.log('ski days', store.getState().allSkiDays.length)

// So now after the action is dispatched, we can get some information about the current state. 
	    //after `result=next(action)`
	let { allSkiDays, goal, errors, resortNames } = store.getState() //state after action is dispatched

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

    
    /* Now in order to associate this middleware (consoleMessages function) with our store, we're going to need to grab 
    the applyMiddleware function from redux. The applyMiddleware function is used to apply this crazy higher order function 
    to the store and make sure that each function gets its appropriate arguments. . */
    import { createStore, applyMiddleware } from 'redux'


//So let's go down to the bottom of this file where we export our function
//Instead of returning a createStore with our appReducer, we are going to return the results of the applyMiddleware function.
// And we are going to apply our consoleMessages.

/*	REMOVE this	*/
	export default (initialState={}) => {	
	  return createStore(appReducer, initialState) 
	}

/* Replace with this	*/
	export default (initialState={}) => {
		return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
	}
// Now applyMiddleware will return a function, which takes the createStore function (which is used to build our stores)
// as argument. And now this will return a createStore function with us.
// So it's a new createStore function that will create stores with our consoleMessages middleware.
// I'm going to go ahead and add our appReducer, and whatever the initialState is that is being passed to this function

	
/*	So now this file exports a function that we can use to create stores for the ski day counter. 
It returns a store that's created with our middleware, the consoleMessages and it also applies our appReducer 
and any initialState that is passed to this function. 	*/
	

(finally root/src/store/index.js) 
	import C from '../constants'
	import appReducer from './reducers'
	import { createStore, applyMiddleware } from 'redux'

	const consoleMessages = store => next => action => {

		let result

		console.groupCollapsed(`dispatching action => ${action.type}`)
		console.log('ski days', store.getState().allSkiDays.length)
		result = next(action)

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

	export default (initialState={}) => {
		return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
	}



(now open root/src/index.js and edit as follows)
	import C from './constants'
	import storeFactory from './store' //store is a dir! :/

	const initialState = (localStorage['redux-store']) ?
		JSON.parse(localStorage['redux-store']) :
		{}

	const saveState = () => {
		const state = JSON.stringify(store.getState())
	  localStorage['redux-store'] = state
	}

	const store = storeFactory(initialState) //creatign store

	store.subscribe(saveState)
//once we created the store we'll dispatch 3 actions
	store.dispatch({
		type: C.ADD_DAY,
		payload: {
			"resort": "Mt Shasta",
			"date": "2016-10-28",
			"powder": true,
			"backcountry": true
		}
	})

	store.dispatch({
		type: C.ADD_DAY,
		payload: {
			"resort": "Squaw Valley",
			"date": "2016-3-28",
			"powder": true,
			"backcountry": false
		}
	})

	store.dispatch({
		type: C.ADD_DAY,
		payload: {
			"resort": "The Canyons",
			"date": "2016-1-2",
			"powder": false,
			"backcountry": true
		}
	})




















