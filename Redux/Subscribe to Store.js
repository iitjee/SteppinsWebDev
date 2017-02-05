/*
The store has a subscribe method that will allow you to subscribe callback handlers that are invoked every time state changes. 








*/

(in index.js)
    import C from './constants'
    import appReducer from './store/reducers'
    import { createStore } from 'redux'

    const store = createStore(appReducer) //no initialstate is passed, so every thing is set up with their default values

    window.store = store

    store.subscribe(() => console.log(store.getState());
    
    store.dispatch({
      type: C.ADD_DAY,
      payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": false,
        "backcountry": true
      }
    })
    
     store.dispatch({
      type: C.SET_GOAL,
      payload: 2
    })
//the subscribe method will invoke the callback function once for every action we dispatch
//so when you run and see in chrome console, you see two messages one for each dispatch call

//I can subscribe as many callback handlers as I like, simply by making additional calls to the store.subscribe method. 
//So we could, for instance, create a handler that will save the present state of the store to localStorage.

//just after `store.subscribe(() => console.log(store.getState());`
      store.subscribe(() => {

        const state = JSON.stringify(store.getState())
        localStorage['redux-store'] = state

      })

//now run and see in chcrome console. and type localstorage to check the value
