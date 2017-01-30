/* Started at google
 * Sites: plnkr.co, https://www.madewithangular.com/
 * ng is an Angular directive (like a short form eg: ng Conference etc)
 
 plnkr basics 
 1. libraries can be added by clicking the button below eye (right)
 2. you can save, beautify and download
 3. double click on file to rename
 4. you can delete by hovering on cross symbol beside file
*5. you can preview by clicking eye button (right) and maxmise button (to left of eye button)
*6. click linting button (5th one @right) to check for any errors!
 7. Go for monakai theme by clicking setting button(7th @rgiht)
*8. In the same settings button, you can find autorefresh which wqill render in the preview pane
*9. (Errors) You do that in console of chrome (for eg if there is an error in scriptjs, you can get a red
  cross somewhere in dev console. ALso notice the line no and file the error is in @right most)
*10. (Debugging) go to sources tab and cmd+O. Then type the file (eg: scrpt.js) and put a break point.
press refresh button of plnkr in preview window and runtime stops execution there. select variables and you can
see their values there as well.
 
 //Getting started:
 1. Add a <script> tag pointing to angular.js
 2. Add an 'ng-app' attribute in any of your HTML tags
 
 
 
 AngularJS1 cs AngularJS2 
The latest one is basically for app development which is a dramatic upgrade.
They run 3-5 times faster than v1
Now, everything is focus on components
No more controllers.

 You can use either
 -  ES5
 -  Dart (By Google)
 - *TypeScript (superset of JS) (ES6) (Made by Microsoft)
 
 Angular2 is basically made with TypeScript(ES6)
It has ES6:Classes, ES6:templates, Typescript:types, TypeScript:annotations

Because modern broswers  don't support ES6 or Typescript, we need tools like gulp.js`
 
 
 
 
Javascript function patterns:
- Functions as abstractions.  (writing every damn thing in functions and then invoking them for use)
- Functions to build modules (revealing module poattern (see below))
- Functions to avoid global variabls (iffe aka immd8ly invoked function expressoin)
*/

/* Revealing Module patterns */
var createWorker = function() {
 var task1 = function() {console.log("task1");
 var task2 = function() {console.log("task2");
 
 return {
  job1: task1, 
  job2: task2
  }; //you can rename task1 as job1 and put job1: job1 also
};

var worker = createWorker();
worker.job1();
worker.job2();
worker.task1(); //doesn't work
//problem with this is that we are creating global vars like createWorker. Let's see how we can avoid them
//we know glbal vars are bad in general but in JS, they are downright evil. because js is dynamically typed 
//language we can override them very easily


//so how can we do that?
//we can encapsulate the whole function definition as well as calling code into one single function and call it.
var program = function() {
......
}
program();
//now number of glbal var has dropped to one, can we drop to zero? Yes

(function() {.......}()) //this anonymous style function completely eliminates global vars
//note initial and final parans. we need to put it for JS naming standards
//A lot of libs use IFFEs to control the scope of teh vars to build modules to provide encapsuation








