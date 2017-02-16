NGINX container, which is a reverse proxy type of tool. We can also set a port inside of the NGINX. Now normally NGINX is kind of a front-end server that'll serve up static files and forward more complex requests to back-end servers, ASP.NET, Node.js, and others, and so normally it's on port 80 if it's a kind of a public facing website. So what I'm going to do is come into here and we're going to use a command-line switch on run, and I'm going to say that I would like to run this image, but I want to run it on port 80 for the machine, and that's going to forward internally to port 80 in the container itself. Now this is a really important one because we need to set what is the port we're going to call on our actual machine, and then what's it going to call on this container that's going to get created based on this image. 


<br/>
you'll also see nginx in a RPi course in PS
