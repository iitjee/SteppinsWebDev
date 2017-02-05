/*

In the last lesson, we learned that the store has a subscribe method that allows you to add callback handlers 
that are invoked every time state is changed. 
In this lesson, we'll learn that we also have an unsubscribe method so that we can turn off store subscriptions.



*/

(in index.js)
      import C from './constants'
      import appReducer from './store/reducers'
      import { createStore } from 'redux'

      const store = createStore(appReducer) //created a simple store

  store.subscribe(() => console.log(`   Goal === ${store.getState().goal}`));
  
  setInterval(() => {
    store.dispatch(() => {
      type: C.SET_GOAL,
      payload: Math.random() * 100 //givs a random percentage. random() gives between 0 and 1
      })
  }, 250);
  
And now, four times a second we are going to be dispatching set goal actions, so that means four times a second we should 
see these goals being logged to the console. Now let's say we wanted to turn this off after about three seconds
even though the interval is still going. Well every time we  call store.subscribe, it returns a function that can
be used to unsubscribe that particular method.

    //rewrite store.subscribe line as 
    const unsubscribeGoalLogger = store.subscribe(
        () => console.log(`   Goal: ${store.getState().goal}`)
      )

    //   and then write setTimeOUt after setInterval
    setTimeout(() => {
      unsubscribeGoalLogger();
    }, 3000)


(final index.js)
      import C from './constants'
      import appReducer from './store/reducers'
      import { createStore } from 'redux'

      const store = createStore(appReducer)

      const unsubscribeGoalLogger = store.subscribe(
        () => console.log(`   Goal: ${store.getState().goal}`)
      )

      setInterval(() => {

        store.dispatch({
          type: C.SET_GOAL,
          payload: Math.floor(Math.random() * 100)
        })

      }, 250) //fires 4 times per second

      setTimeout(() => {

        unsubscribeGoalLogger();

      }, 3000) //fires after 3 seconds



