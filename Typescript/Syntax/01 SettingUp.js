Tools:
   TypeScript is a compiled or transpiled language. So you'll need at least two tools to work with TypeScript, a text editor 
and a TypeScript compiler.
   Lucky for us, TypeScript has been around long enough and gained enough popularity that your favorite JavaScript editor 
almost certainly has some kind of TypeScript support, either built in or available as an extension. For most of the popular 
text editors, such as Sublime Text, TextMate, Atom, Notepad++, Visual Studio Code, it's as simple as searching in their library 
of extensions and installing the TypeScript feature.


 In order to be truly cross-platform compatible, the TypeScript command line interface is actually built in Node.js.
$npm install -g typescript
//to have local server
$npm install -g live-server
 $npm install -g lite-server
 
 $tsc -v 
$touch app.ts  
$tsc app.ts //creates app.js also in the same director
$tsc //shows you all options
$tsc -w app.ts //to watch for any changes also! :D


$touch tsconfig.json //configuration file(no need to pass command-line args everytime)
    {
        "compilerOptions": {
            "target": "es5"
        }
    }
$tsc -w //tada!! no need to mention the file also!


USE WEBSTORM. EASY!
(FOR SUBLIME, YOU NEED TO INSTALL A PACKAGE)
