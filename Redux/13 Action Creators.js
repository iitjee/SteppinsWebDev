/*
] In Redux, the store is only intended to manage state data. You can read current state from the store or mutate state by
dispatching an action. The store should not contain any application logic. This means that your store and your reducers 
should not be involved in any of the following tasks, 
- generating unique id's, 
- reading or writing data to a persistence layer, 
- mutating Global state, 
- changing Global variables or
- fetching data from a rest endpoint or socket server if you had an Ajax request.


Your application should use the store. The store should not be your application.
The store simply contains the data. So where's our logic supposed to go? The answer is action creators. 

Action creators are functions that create and return actions. 
They allow us to encapsulate the logic of our applications using functions, not objects.

Let’s demonstrate how using an action creator can make dispatching an addDay action much easier.
So action creators are functions that would encapsulate the logic.


*/
(in root/index.js)
    import storeFactory from './store'
    import { addDay } from './actions'

    const store = storeFactory() //returns an action object. So, instead of sending an object to the dispatch
    //function, I'm actually going to invoke the action creator inside of it. 

    store.dispatch(
      addDay("Heavenly", "2016-12-22")  //dispatching addDay action. it'll take the arguments required to make a skiday
      //powder and backcountry are not passed, so as to give default values! cool.
    )


(create  root/actions.js)
    import C from './constants'

    export function addDay(resort, date, powder=false, backcountry=false) {
        //If we had any application logic, we could add it here. So if we wanted to write any other code that 
        //we're not allowed to write in reducers, we could add that here. 
      return {
        type: C.ADD_DAY,
        payload: {resort,date,powder,backcountry}
      }

    }

/*  Let's create some more action creators  */
    (in actions.js)
        import C from './constants'

        export function addDay(resort, date, powder=false, backcountry=false) {

            return {
                type: C.ADD_DAY,
                payload: {resort,date,powder,backcountry}
            }

        }

        export const removeDay = function(date) {

            return {
                type: C.REMOVE_DAY,
                payload: date
            }

        }

        export const setGoal = (goal) =>  //returning an entire object through parans
            ({
                type: C.SET_GOAL,
                payload: goal
            })

(in index.js)
        import storeFactory from './store'
        import { addDay, removeDay, setGoal } from './actions'

        const store = storeFactory()

        store.dispatch(
            addDay("Heavenly", "2016-12-22")
        )

        store.dispatch(
            removeDay("2016-12-22")
        )

        store.dispatch(
          setGoal(55)
        )

/*   So I was able to dispatch all of these actions using functions as opposed to dispatching the object directly.  */



