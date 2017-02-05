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



/* Since we are saving the present state of the store every time a action is dispatched, let's go ahead and use this 
state from localStorage when we create the store as our initial data. */
        const initialState =  JSON.parse(localStorage['redux-store']) :
//So in order to load storage data from the redux-store key, I'm going to create a variable called initialState. 
//Now what I want to do is I want to set that initialState to whatever data we have in localStorage, saved under redux-store. 
//Now, when I get this data, it's going to be a string, because we saved it as a string to localStorage, so I also want to parse it. 
//JSON.parse our localStorage string will turn that into an object.
  
//Now if this is your first time using the counter, you won't have a variable called localStorage redux-store, that will cause an error.
        const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}
        
//and Now we will add this initialState to the createStore call
        const store = createStore(appReducer, initialState)

        
(finally)
        import C from './constants'
        import appReducer from './store/reducers'
        import { createStore } from 'redux'

//localStorage is v similar to NSPersistentDictionary. Data stored in it will persist even after you refresh the page
        const initialState = (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {}

        const store = createStore(appReducer, initialState)

        window.store = store // exposes the store as a global variable that can be used in the console.
//this is great for debuggin but don't do it in production

        store.subscribe(() => {
            const state = JSON.stringify(store.getState())
            localStorage['redux-store'] = state
        })
 /* all we have is the loading of the initialState, 
     the creation of the store, and 
    a subscription that will save new data to the redux-store under localStorage every time an action is dispatched. */

now run and see in console and type 
`store.getState()` //will give out some data, if even if it's saved under previous session
`localStorage`
`localStorage.clear()` //clears the localstorage data
`localStorage` //now it'll give out default values provided inside appReducer (i.e reducers.js) all variables are defaulted to null or [] except goal which is initialized to 10
        

/*  So using the store's subscribe method, we created a subscription that will save data every time an action is 
dispatched to the localStorage under the key redux-store, and we also are initially loading that data from localStorage
if it exists.
*/
        
        
        
        
        
        
