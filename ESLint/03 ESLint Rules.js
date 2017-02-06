http://eslint.org/docs/rules/   Best!!  (nicholas zakas -foucner)
-> Possible Errors
-> Best Practices
Everything in this website has a code that fails and passes

"env": {
  "browser": true //server-side js fails will fail (you will get error for 'require' function_
  //if you are testing node files, try `"node":true`
 },
 "extend" : "eslint:recommended",//eslint recommended rule set
 //
 "rules" : {
    "no-console" : "off", //we turned off the no-console rule
    "indent" : [ //for indentation we use two spaces
        "error", //"error" is the warning level. You can also have "warn"
         2
      ],
      "linebreak-style": [ //we use unix line breaks
          "error",
           "unix"
       ],
       "quotes" : [ //we use single quotes
          "error",
          "single"
        ],
        "semi": [ //we always require semi-colons
            "error",
             "always"
        ]
  }
}


Check out 
-> no-console
-> callback-return
-> no-eval (deprecated by js, juniors might use. eval is evil!)
-> no-restricted-modules


The best purpose of ESLint is to try and automate all the stylistics things adn lot of the easy thigns 
that come in code reviews, so you can really focus on the harder and architecure issues.


How to see the rules to add?
We've to wait till a error or until we see a bad pattern popping up.
At that point, we ask "can we use lint for this?"

Let's say we're replacing underscorejs with the popular lodash.js
We want to deprecate use of underscorejs within our team/
Check for "Node.js and CommonJS" section and see "no-restricted-modules"
This rules disallows specified modules from being required in Node
     "no-restricted-modules": ["error", "underscore"]

/* use === rather than == */
the rule for this is eqeqeq
    "eqeqeq" : "error" //you get error when you don't use ===




// Let's add a new folder for these use cases
// Let's create a new ESLint rules set
cp ../.eslintrc.json . (we are copying boilerplate)
// (note that the files existing in this folder will use this rule set instead of that existing in the parent folder)
// This sill give us more flexibility
$touch find_fruit.js
    var _ = require('underscore')
    var arr = ['oranges', 'apples', 'kiwi', 'pomegranates'];

    var index = _.findIndex(arr, 'kiwi'); //this uses underscore to find the index at which kiwi exists
    console.log(index);
// Now lodash is a popular lib which is replacing underscore. Now we want to add a rule
// instructing our team not to use underscore

//Go to docs -> 'no-restricted-modules' (http://eslint.org/docs/rules/no-restricted-modules)
This rules disallows specified modules from being required in node
      eg: to restrict the use of all Node.js core modules 
      {
          "no-restricted-modules": ["error", //the first param is the warning level followed by a list of modules you want to disallow
              "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"
          ] //cool, so let's implement this
      }

//in the new .eslintrc.json
in "rules"
  "no-restricted-modules" : ["error", "underscore"];


now run `$eslint .`
(note that if you get a error saying 'require' is not defined, that means you've your environemnt as browser
 change that to "node": true in .eslintrc.json)
//now you get a warning that 'underscore' is used


/* Another one  */
$touch is_even.js
    function isEvenNumber(number) {
            return number%2 == 0; //in js it's considered as a bestpractice to use ===
    } //because === checks for both value and object type i.e it avoids type coercion

    console.log('5', isEvenNumber(5));
    cosole.log('6', isEvenNumber(6));
//let's head to docs and check if there a lint to enforce this.
//we're in luck (http://eslint.org/docs/rules/eqeqeq)

(in .eslintrc.json)
    "eqeqeq" : "error"  //since there's only one element, no array is used

$eslint .









