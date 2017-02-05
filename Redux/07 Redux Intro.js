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
      
     export default singleReducer

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
