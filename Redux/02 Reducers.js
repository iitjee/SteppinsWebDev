/*


*/


$npm init
$npm install --save-dev babel-cli babel-preset-latest babel-preset-stage-0

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








