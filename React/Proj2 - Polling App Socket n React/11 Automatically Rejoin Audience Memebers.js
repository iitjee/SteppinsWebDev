- We are pretty close to finishing with the audience member connections, but we need to smooth out some rough edges around 
joining and leaving. 

 Well, when I hit Refresh it assumes that that audience member has left, and then I need to come back in and type Alex and Join 
again. So, we don't want to do that every time we hit Refresh, or if the server refreshes. We want this to automatically happen 
for our users. And we can allow that to happen by using the session storage and saving information about the connected member.


(in APP.js)
// Now, when a member joins, that join is being handled by this joined function here on line 44. So when a member joins, what I 
//want to do is save that member's details to the browser's session state.
    joined(member) {
            sessionStorage.member = JSON.stringify(member); //this will turn our member object, who has just joined, into a
            //JSON string and then save that member object in sessionStorage. So, when we join, we will have our information 
            // saved to the browser.
            this.setState({ member: member });
        }

      connect() {
       var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
        // We are going to check to see if there is a member in sessionStorage. 
        if (member) {
            this.emit('join', member);
        } //So if we did find a member in sessionStorage, then we automatically want to rejoin that member. So, I am going to /           //use this.emit to use the emit function of the app instance, and I'm just going to re-emit another join event. 
       this.setState({ status: 'connected' });
    },


Welcome back Alex. So there, this completes joining audience members. We join the audience member from the join form, When that 
member is joined, we send that information back to the client. And if the member disconnects, we remove them, and if we just 
have a simple Refresh, we automatically rejoin those audience members. So we are set with our audience members. It's going to 
be time to move on to starting the presentation from the speaker's point of view.
