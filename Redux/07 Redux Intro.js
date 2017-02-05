/*
 So far we haven't actually used Redux. We've just been building pure functions with Javascript.
 Now, these pure functions are reducers that will be used by Redux, but we haven't actually installed Redux until this point. 


*/

$npm install --save redux

// I can use the combined reducers method in Redux to combine all of the reducers that we've constructed into a single reducer function.

//initialstate.json is our initial 
// Now, when we combine these reducers, we need to make sure that they are in the same shape as this object.
// That means that all ski days, goals, errors, and resort names are on the same level, but fetching and suggestions have been combined under resort names.
// single state object and this is the state that we would send to a single reducer

(in reducers.js)
      ....
      import { combineReducers } from 'redux'
      ...

      //at last
      const resortNames = combineReducers({
         fetching,
         suggestions
       })
      
      const singleReducer =  combineReducers({
       allSkiDays,
       goal,
       errors,
       resortNames
     })
      
     export default singleReducer //will be exported by default when you import this file

      // we've combined all of the reducers into one single 
      //reducer, but the shape of the single reducer matches the shape of our initial state JSON object.

/* an equivalentn restructuring will be */
   export default combineReducers({
     allSkiDays,
     goal,
     errors,
     resortNames: combineReducers({ //nesting reducers
       fetching,
       suggestions
     })
   })


(in index.js)
    import C from './constants'

    import appReducer from './store/reducers' // because the single reducer has been exported by default, there's no need to destructure specific reducer functions

    import initialState from './initialState.json'

    let state = initialState

    console.log(`

     Initial state
     =============
     goal: ${state.goal}
     resorts: ${JSON.stringify(state.allSkiDays)}
     fetching: ${state.resortNames.fetching}
     suggestions: ${state.resortNames.suggestions}

    `)

// Our single reducer, and we're going to send it the initial state object, and the second argument is going to be the action.
    state = appReducer(state, {
     type: C.SET_GOAL,
     payload: 2
    })

    state = appReducer(state, {
     type: C.ADD_DAY,
     payload: {
      "resort": "Mt Shasta",
      "date": "2016-10-28",
      "powder": false,
      "backcountry": true
     }
    })

    state = appReducer(state, {
     type: C.CHANGE_SUGGESTIONS,
     payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
    })
//a series of actions(mutations) have been done

    console.log(`

     Next state
     =============
     goal: ${state.goal}
     resorts: ${JSON.stringify(state.allSkiDays)}
     fetching: ${state.resortNames.fetching}
     suggestions: ${state.resortNames.suggestions}

    `)
