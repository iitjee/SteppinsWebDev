Webpack is a build tool that allows us to take all of our assets and turn them into a production-ready bundle. All of our files are 
considered modules and we tell Webpack to load those modules when we configure our project. So why would we use something like Webpack? 
Well, the answer to that starts by looking back at how loading assets used to work in web projects. Consider this html file. We're adding 
tons of script tags here in the head, three of them and when we used to add the script tags like this, it could get pretty messy.

Errors could occur from the hierarchy of these scripts, global variables might be overwritten, and there might be unintended consequences 
of functions being called before others. Order was extremely important and really difficult to manage. And all of these http requests were 
really taxing on browsers. So some of the benefits of working with something like Webpack is that it provides an alternative to some of 
these complications with the concept of a dependency graph. We're going to require assets like images, CSS files, and JavaScript files and 
they're loaded when they're needed for the page.

We can also split our app into different files and just load the code that the page requires. Then when the user goes to a new page, they 
don't download the already downloaded code again. It also minimizes the initial loading time for the app. This process is called Code 
splitting. 

Webpack also helps us deal with transformations. If we're using Sass or Less, we can build that code to CSS prior to 
production. If we're using React or ES6, we can transform that into vanilla JavaScript.

All of this can be configured and then automated so that these transforms don't have to occur manually. So Webpack may seem a little bit 
complex at first glance, but throughout these videos we'll cover some of the most useful features that will optimize and simplify your web 
projects.



$   npm i webpack @3.6.0 --save-dev
