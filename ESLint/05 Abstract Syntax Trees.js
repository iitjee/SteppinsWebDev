/*

AST = A js object representation of our code

Let's see how ESLint analyzes your code by using abstract syntax trees
- Webpack, babel.js, linters, minifiers, syntax highlighters many uses this
- Even those editors which analyses your code and gives helpful suggestions


console.log('hello'); -------------> {'type':.. 'expression':.. arguments:..} 
  {CODE}              -P-A-R-S-E-R->  {AST}
 */

(astexplorer.net)
console.log('hello'); (left side)

//"start" and "end" keys were erased by me
  {
      "type": "ExpressionStatement",
        
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "name": "log"
          },
          "computed": false
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'"
          }
        ]
      }
Static analysis: We run automated analysis against our code and then try to analyse the grammar of our code.
ASTs are vital for this process



Whenever ESLint runs any rule, it will look for any 'MemberExpression' in your code.
Above, when you hover cursor on "MemberExpression' note that console.log is highlighted.
That's the member expression
    and it's object is the `console` (see object.name inside MemberExpression)`







