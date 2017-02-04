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

    const action = {
      type: C.CLEAR_ERROR,
      payload: 0
    }

    const nextState = errors(state, action)

    console.log(`

        initial state: ${state}
        action: ${JSON.stringify(action)}
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

        case C.CLEAR_ERROR : 

          return state.filter((message, i) => i !== action.payload)

        default: 
          return state

      }

    }



