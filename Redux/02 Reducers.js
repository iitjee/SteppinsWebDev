/*


*/


$npm init
$npm install --save-dev babel-cli babel-preset-latest babel-preset-stage-0
//(in babel-cli, babel-node also is installed to run node scripts)
// we have Babel installed, along with the presets that we need in order to transpile our code.
//Now, we are going to have to create a .babelrc file to tell Babel which presets to use.

(in root/src/   .babelrc)
          {
            "presets": ["latest", "stage-0"]
          }

(index.js in src)
      import C from './constants'
      import { allSkiDays, goal } from './initialState.json'

      console.log(`

         Ski Day Counter
         ================
         The goal is ${goal} days 
         Initially there are ${allSkiDays.length} ski days in state 

         Constants (actions)
         -------------------
         ${Object.keys(C).join('\n     ')}

      `)

(in package.json)
          "scripts": {
              "start": "./node_modules/.bin/babel-node ./src/" 
            }
$npm start


//note: ( index is the default file in the folder, so we could type it, but we don't have to)  "start": "./node_modules/.bin/babel-node ./src/index.js" 


/*                  Building Reducers   */
// Remember, reducers are pure functions that are designed to manage specific parts of your state object. 
// we'll remove prev contents of index.js for a quick demo
                    import C from './constants'
                    import { goal } from './store/reducers'

                    const state = 10

                    const action = {
                              type: C.SET_GOAL,
                              payload: 15
                    }

                    const nextState = goal(state, action)

                    console.log(`

                        initial goal: ${state}
                        action: ${JSON.stringify(action)}
                        new goal: ${nextState}

                    `)

(in root/src/ create store/reduceers.js)
                    import C from '../constants'

                    export const goal = (state=10, action) => {

                       if (action.type === C.SET_GOAL) {
                                 return parseInt(action.payload)
                       } else {
                           return state
                       }

                    }


