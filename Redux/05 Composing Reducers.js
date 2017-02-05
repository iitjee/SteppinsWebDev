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
              // The some() method returns true if some element in the array passes the test 
              // implemented by the provided function.
              //test is checking if the new state(payload) has the same date as anything which already exists in array
`
              return (hasDayAlready) ?
                 state : //day is already reserved for sth else. return prev state
                 [
                   ...state,
                   skiDay(null, action) //see how you are using skiDay reducer (viz called comopsing) //however, in this p case it's not really as skiDay(null, action) simply returns action.payload which we can write directly
                 ].sort((a, b) => new Date(b.date) - new Date(a.date))

            case C.REMOVE_DAY :
                        //removes day on basis of date as key
              return state.filter(skiDay => skiDay.date !== action.payload)     
                //state.filter returns a new array with only those elements that pass the test
            default:
              return state
          }

        }












