/*


Let's merge all the reducers





*/


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

        export const allSkiDays = (state=[], action) => {

          switch(action.type) {

            case C.ADD_DAY : 

              const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date)
              //The some() method returns true if some element in the array passes the test implemented by the provided function.

              return (hasDayAlready) ?
                 state :
                 [
                   ...state,
                   skiDay(null, action) //see how you are using skiDay reducer
                 ].sort((a, b) => new Date(b.date) - new Date(a.date))

            case C.REMOVE_DAY :

              return state.filter(skiDay => skiDay.date !== action.payload)     

            default:
              return state
          }

        }












