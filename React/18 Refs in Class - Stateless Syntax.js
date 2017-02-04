 As I've mentioned before with stateless functional components, we don't have access to the This keyword.
 So how can we use refs with stateless components if we get their values with this .refs.value? 
 Well, we can actually use callback functions as refs to capture the values that we need from all of our input fields. 
