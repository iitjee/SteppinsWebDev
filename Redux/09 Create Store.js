/*
 So far, we've coded all of the reducers required for the ski day counter, and we've combined them into a single function
 that we've named appReducer. In our last file, we have created a state variable, and we are mutating that state variable 
 using our single appReducer. Now, with Redux, we don't need to use our single appReducer to mutate the state, because the
 store will manage the state for us. 
*/


(in index.js)
      import C from './constants'
      import appReducer from './store/reducers'
      import initialState from './initialState.json'
      import { createStore } from 'redux'

      const store = createStore(appReducer)
//at minimum, the createStore expects one argument, and that is the reducer function used by the store, so we'll use our appReducer.
//And now the store holds state, and the store manages your state.
//So we can always look at the current state of a store using the getState method. 

      console.log('initial state', store.getState())

//  Now, by default just using the appReducer, our initial state will be created from all of the default variables that we 
// created in every reducer. So in the goal reducer, our initial state was set to 10, whereas in our ski day reducers, our
// initial state was set to an empty array. 
// The store will use the appReducer to help calculate the initial state.

      store.dispatch({ //used to dispatch actions that mutate the state. The dispatch method expects an action object. 
       //Now remember, an action is just an object with at minimum, a type field. 
        type: C.ADD_DAY, //ADD_DAY action
        payload: {
          "resort": "Mt Shasta",
          "date": "2016-10-28",
          "powder": false,
          "backcountry": true
        }
      })
//Great, so at this point, we've created a store. We can read the state with getState,
//and we can mutate the state with the dispatch function.

      console.log('next state', store.getState())
//run $webpack-dev-server and look in chrome console

//now you can also set up the initial state with a predefined set. Note that we've not use 'initialState' in import yet.
//you do this by
const store = createStore(appReducer, initialState)
//now look in chrome console
