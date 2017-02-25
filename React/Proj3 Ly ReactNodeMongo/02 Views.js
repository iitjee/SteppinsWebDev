--Views
 -footer.ejs
 -header.ejs
 -index.ejs
 
$npm run dev //custom script to run "webpack -wd"
This bundle.js is generated under public, so just like we served about that HTML statically with the Express static middleware, 
we can also serve bundle.js statically. But we do need to include this bundle.js in our HTML somewhere. Usually, we include it 
in the footer, right after everything else, so in here we can go with a script tag and just do /bundle.js here. 

(in src/index.js)
