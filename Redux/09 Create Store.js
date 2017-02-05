/*
 So far, we've coded all of the reducers required for the ski day counter, and we've combined them into a single function
 that we've named appReducer. In our last file, we have created a state variable, and we are mutating that state variable 
 using our single appReducer. Now, with Redux, we don't need to use our single appReducer to mutate the state, because the
 store will manage the state for us. So, in order to incorporate a store, I'm going to go ahead and delete everything except
 import statements

*/


(in index.js)
      import C from './constants'
      import appReducer from './store/reducers'
      import initialState from './initialState.json'
      import { createStore } from 'redux'

      const store = createStore(appReducer, initialState)
//at minimum, the createStore expects one argument, and that is the reducer function used by the store, so we'll use our appReducer.
//And now the store holds state, and the store manages your state.
//So we can always look at the current state of a store using the getState method. 

      console.log('initial state', store.getState())

      store.dispatch({
        type: C.ADD_DAY,
        payload: {
          "resort": "Mt Shasta",
          "date": "2016-10-28",
          "powder": false,
          "backcountry": true
        }
      })

      console.log('next state', store.getState())

