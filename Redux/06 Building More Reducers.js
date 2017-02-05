/*




*/


(in initialState.json)
//  notice you've allSkiDays and resortNames keys. We've implemented actions for allSkiDays state but not yet for resortNames
          "resortNames": {
              "fetching": false,
              "suggestions": ["Squaw Valley", "Snowbird", "Stowe", "Steamboat"]
            }  

//We're going to make a request to a server, and when we make that request, fetching will be true. When we receive a response,
//fetching is going to be changed to false, and with the response we're either going to have an error or we will have 
//suggestions for resort names like Squaw Valley, Snowbird, or Stowe.

corresponding action names are defined in constants.js
        const constants = {
          ADD_DAY: "ADD_DAY",
          REMOVE_DAY: "REMOVE_DAY",
          SET_GOAL: "SET_GOAL",
          ADD_ERROR: "ADD_ERROR",
          CLEAR_ERROR: "CLEAR_ERROR",
          FETCH_RESORT_NAMES: "FETCH_RESORT_NAMES", //todo  
          CANCEL_FETCHING: "CANCEL_FETCHING",       //todo
          CHANGE_SUGGESTIONS: "CHANGE_SUGGESTIONS", //todo
          CLEAR_SUGGESTIONS: "CLEAR_SUGGESTIONS"    //todo
        }

        export default constants

//We'll make an each file to test each action:
//Before that,
(in root/store/reducers.js)
        export const fetching = (state=false, action) => {

          switch(action.type) {

            case C.FETCH_RESORT_NAMES :
              return true
          //we're going to be looking for the case FETCH_RESORT_NAMES, and when we are fetching resort names, 
          //it means we've made a request for the server to return some resort names, I want to return true.

            case C.CANCEL_FETCHING :
              return false 
             //so when we're done fetching, I'm simply going to return false, meaning that we're done fetching.

            case C.CHANGE_SUGGESTIONS :
              return false   

            default:
              return state
          }

        }

(Now in FETCH_RESORT_NAMES.js)
                    import C from '../constants'
                    import expect from 'expect'
                    import { fetching } from '../store/reducers'

                    const action = {
                        type: C.FETCH_RESORT_NAMES
                              //no payload for obvious reasons
                    }

                    const state = false
                    const expectedState = true //see it like this. we want the state to be in fetching moe('true') after we call the reducer
                    // Now the initial state of fetching is going to be false, but 
                    //if we send the FETCH_RESORT_NAMES action, we expect that to return a state of true. 

                    const actualState = fetching(state, action) //if you don't destructure 'fetching' while import, you should write reducers.fethcing(state, action)

                    expect(actualState).toEqual(expectedState)

                    //And the big difference between this file and the other index files that we created earlier in the lesson is we're using expect.
                    //So expect is going to check the actualState against the expectedState, and throw an error if those two values are not equal.

                    console.log(`Challenge A: FETCH_RESORT_NAMES PASSED!!!`)


/*        Voila! now move on to the next          */
(in CANCEL_FETCHING.js)
//u can see that this is pretty much the opposite of the last action. So if we send a CANCEL_FETCHING action to the 
//fetching reducer, we expect it to return a false, meaning that we're not fetching. 

                    import C from '../constants'
                    import expect from 'expect'
                    import { fetching } from '../store/reducers'

                    const action = {
                        type: C.CANCEL_FETCHING
                    }

                    const state = true //initialstate
                    const expectedState = false //see it like this. is the state in fetching now? No. We are aborting the fetch

                    const actualState = fetching(state, action)

                    expect(actualState).toEqual(expectedState)

                    console.log(`Challenge B: CANCEL_FETCHING PASSED!!!`)


/* yoyo*/
(in CLEAR_SUGGESTIONS.js)

                    import C from '../constants'
                    import { suggestions } from '../store/reducers'
                    import expect from 'expect'

                    const action = {
                        type: C.CLEAR_SUGGESTIONS
                    }

                    const state = ['Heavenly Ski Resort', 'Heavens Sonohara']

                    const expectedState = [] 
                    //after we call the clear_suggestions reducer, we expect that the state which is an array should be empty

                    const actualState = suggestions(state, action)

                    expect(actualState).toEqual(expectedState)

                    console.log(`Challenge C: CLEAR_SUGGESTIONS PASSED!!!`)

//uh oh, we need to add suggestions reducer yet
(in reducers.js)
                    export const suggestions = (state=[], action) => {

                      switch(action.type) {

                        case C.CLEAR_SUGGESTIONS :
                          return []

                        case C.CHANGE_SUGGESTIONS :
                          return action.payload  

                        default :
                          return state
                      }

                    }

 /* getting momentum uh        */
(in change_suggestions.js)
//this one is a little bit more tricky, because the CHANGE_SUGGESTIONS action actually effects two reducers.
                    import C from '../constants'
                    import expect from 'expect'
                    import { suggestions, fetching } from '../store/reducers'
// importing the suggestions reducer and the fetching reducer. So, we're going to have to modify both of those functions, 
//and we're going to send one action, CHANGE_SUGGESTIONS, and the suggestions response that we get
// is Heavenly Ski Resort and Heavens Sonohara.

                    const action = {
                        type: C.CHANGE_SUGGESTIONS,
                        payload: ['Heavenly Ski Resort', 'Heavens Sonohara']
                    }

                    const state = {
                              fetching: true,     //initial state
                              suggestions: [] //initially empty array
                    }

                    const expectedState = {
                              fetching: false,    //after suggestion are done, we want fetching state to be fetching. i.e no fetching
                              suggestions: ['Heavenly Ski Resort', 'Heavens Sonohara']
                    }

                    const actualState = {
                              fetching: fetching(state.fetching, action),
                              suggestions: suggestions(state.suggestions, action)
                    } //note that `case C.CHANGE_SUGGESTIONS :` is in both fetching reducer as well as suggestions reducer as it effects both
                    //see below

                    expect(actualState.suggestions).toEqual(expectedState.suggestions)
                    expect(actualState.fetching).toEqual(expectedState.fetching)
// we're checking both the values for suggestions and fetching to make sure that they represent our expected state. 

                    console.log(`Challenge D: CHANGE_SUGGESTIONS PASSED!!!`)



export const suggestions = (state=[], action) => {
...
case C.CHANGE_SUGGESTIONS :
                          return action.payload  
...
}

export const fetching = (state=false, action) => {
          ...
          case C.CHANGE_SUGGESTIONS :
      return false 
...
}
















