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

We'll make an each file for each action:
Before that,
(in root/store/reducers.js)
        export const fetching = (state=false, action) => {

          switch(action.type) {

            case C.FETCH_RESORT_NAMES :
              return true

            case C.CANCEL_FETCHING :
              return false 

            case C.CHANGE_SUGGESTIONS :
              return false   

            default:
              return state
          }

        }

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

(Now in CANCEL_FETCHING.js)
          import C from '../constants'
          import expect from 'expect'
          import { fetching } from '../store/reducers' //notice this

          const action = {
              type: C.CANCEL_FETCHING
          }

          const state = true
          const expectedState = false

          const actualState = fetching(state, action)

          expect(actualState).toEqual(expectedState)

          console.log(`

              Challenge B: CANCEL_FETCHING PASSED!!!


          `)
