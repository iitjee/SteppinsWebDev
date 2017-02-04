/*


*/

(index.j)
      import C from './constants'
      import { skiDay } from './store/reducers'

      const state = null      //initial state is set to null

      const action = {  //setting up an ADD_DAY action
        type: C.ADD_DAY,      //this will check the corresponding one in reducers.js
        payload: {      //object which will be added. this structure will match that of skiday
          "resort": "Heavenly",
          "date": "2016-12-16",
          "powder": true,
          "backcountry": false
        }
      }

      const nextState = skiDay(state, action)

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

      //default value of state is set to null
      export const skiDay = (state=null, action) => 
        (action.type === C.ADD_DAY) ?
          action.payload :
          state


(action.type === C.ADD_DAY) ?
          action.payload :
          state
is short hand for
      if(action.type ===C.ADD_DAY) return action.payload
      else return state
      
      
      
      
      
      
      
