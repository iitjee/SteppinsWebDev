/*
 As opposed to importing the skiDay, I'm going to do ahead and import errors. 
 That's the reducer that we're going to use. And remember, errors is an array, so I can add an initial
 state that's an array, and we can add some sample errors to this like "user not authorized." 
 These are just going to store error messages.



*/



(index.js)
    import C from './constants'
    import { errors } from './store/reducers'

    const state = [
      "user not authorized",
      "server feed not found"
    ]

    const clearaction = { //action you want to perform
      type: C.CLEAR_ERROR,
      payload: 0 //the one you want to add
    }

    const nextState = errors(state, clearaction)

    console.log(`

        initial state: ${state}
        action: ${JSON.stringify(clearaction)}
        new state: ${JSON.stringify(nextState)}

    `)

(reducers.js)
    import C from '../constants'

    export const goal = (state=10, action) => 
      (action.type === C.SET_GOAL) ? 
         parseInt(action.payload) :
         state


    export const skiDay = (state=null, action) => 
      (action.type === C.ADD_DAY) ?
        action.payload :
        state

    export const errors = (state=[], action) => {

      switch(action.type) {

        case C.ADD_ERROR :

          return [
             ...state,
             action.payload
          ]
        //note that state.push(action.payload) will mutate the state array

        case C.CLEAR_ERROR : 

          return state.filter((Errmessage, i) => i !== action.payload)

        default: 
          return state

      }

    }

//filter method constructs and return a new array. It also expects a callback function, notice.
    // This callback function will be invoked once for every message in the array.
    //Now, we call this function a predicate because it expects a true or false.
//here, the condition is if(i!==action.payload) then the item will make it into the array
    //(Errmessage, i) are arguments to callback
