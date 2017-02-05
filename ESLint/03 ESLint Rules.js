http://eslint.org/docs/rules/   Best!!  (nicholas zakas -foucner)
-> Possible Errors
-> Best Practices
Everything has a code that fails and passes

"env": {
  "browser": true //server-side js fails will fail (you will get error for 'require' function_
  //if you are testing node files, try `"node":true`
 },
 "extend" : "eslint:recommended",//eslint recommended rule set
 //
 "rules" : {
    "no-console" : "off", //we turned off the no-console rule
    "indent" : [ //for indentation we use two spaces
        "error",
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

















