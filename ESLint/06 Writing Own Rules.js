/*



*/



(in rules/find_giraffe.js  rules is our custom folder)
var findGiraffe = require('findGiraffe');
findGiraffe('spotted');
//say findGiraffe is a deprecated function and we no longer support calling that in our codebase.


(now let's copy no-console.js to our folder to avoide boilerplate for our custom lint)
 $cp node_modules/eslint/lib/rules/no-console.js .
 
 (now test)
eslint .

uhoh! You might have errors for the no-console.js
we don't want to run lint on our rules files viz no-console.js here
so we put .eslintignore file
      $nano .eslintignore
      rules  //says to ignore rules directory
$eslint .


let's rename our rules file to no-giraffe.js
and open it



Firstly "meta" property is optional for custom lints

