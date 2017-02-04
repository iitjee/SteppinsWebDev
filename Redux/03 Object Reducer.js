/*


*/

(index.j)
      import C from './constants'
      import { skiDay } from './store/reducers'

      const state = null

      const action = {
        type: C.ADD_DAY,
        payload: {
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


      export const skiDay = (state=null, action) => 
        (action.type === C.ADD_DAY) ?
          action.payload :
          state


      
      
      
      
      
      
      
      
      
