

scaffolder:
https://github.com/coryhouse/react-slingshot

^we wont use this though
well use: https://github.com/coryhouse/pluralsight-redux-starter

Our dev environment:
1. Automated Testign
2. Linting
3. Minification
4. Bundling
5. JSXCompilation
6. ES6 Transpilation

Babel-Polyfill:
few things babel cant do and babel-polyfill can do for es6->5
array.from, set, map, promise, generator functions etc.
Downsides: Its too large 50K but we can pull out whatever particula polyfill we want

babel-preset-react-hmre
its a babel preset that wraps up a number of other libraries and settings in a single prest
It works by wrapping your components in a custom proxy using Babel.
Proxies are classes that act just like your classes but  they provide hooks for injectin new implementiaton
So when you hit save, your changes are immd8ly applied without requiring a reload
WARNINGS: experimental and doesnt reload functional  components and container functions like mapStateTOprops
(I think this is embedded into react now)


npm scripts replaced gulp! cool right!
https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.scjzloi78

  
