/*
Git has a way to fire off custom scripts when certain important actions occur. 
There are two groups of these hooks(scripts): 
->  client-side and
-> server-side. 

Client-side hooks are triggered by operations such as committing and merging, while 
server-side hooks run on network operations such as receiving pushed commits. 

You can use these hooks for all sorts of reasons
The hooks are all stored in the hooks subdirectory of the Git directory. i.e .git/hooks

When you initialize a new repository with git init, Git populates the hooks directory with a bunch of example
scripts, many of which are useful by themselves; but they also document the input values of each script.
All the examples are written as shell scripts, with some Perl thrown in, but any properly named executable scripts
will work fine – you can write them in Ruby or Python or what have you. 

If you want to use the bundled hook scripts, you’ll have to rename them; their file names all end with .sample.
To enable a hook script, put a file in the hooks subdirectory of your Git directory that is named appropriately and is executable.
From that point forward, it should be called. We’ll cover most of the major hook filenames here.

$cd .git
$ls
$cd hooks

you'll see 
applypatch-msg.sample		pre-push.sample
commit-msg.sample		pre-rebase.sample
post-update.sample		prepare-commit-msg.sample
pre-applypatch.sample		update.sample
pre-commit.sample

pre-commit: for eg before u commit, you can autom run a scipt that spell checks your commit message
or you could have a script that will run a test

*/

$npm install --save-dev pre-commit
(in pkg.json) //we need to give which script to run 
      "pre-commit": ["test"],
      "dependencies":.....





