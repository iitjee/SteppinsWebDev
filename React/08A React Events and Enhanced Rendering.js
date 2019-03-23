
(below course is diff from ess trai which all the remaining tuturoial pages are related with)
(but much simpler... so appended to this tutorial)
https://www.lynda.com/React-js-tutorials/Using-React-events/800214/2204557-4.html



 In a React application, like any application, we'll want to be able to track events. In this video, we'll take a closer look at how to 
 bind event functions to UI elements.
 
 
         <script type="text/babel">
            
            const Lake = ({name}) => <h1>{name}</h1>;

            class App extends React.Component {
                state = { //state property of this component
                    loggedIn: false
                }
                
                logIn = () => this.setState({loggedIn: true}) // a local method to this component
                logOut = () => this.setState({loggedIn: false}) // a local method to this component
                
                render() {
                    return (
                        <div>
                            <button onClick={this.logIn}>Log In</button> //when clicked, login() is invoked
                            <button onClick={this.logOut}>Log Out</button> //when clicked, logout() is invoked
                            <div>
                                The user is {
                                this.state.loggedIn 
                                ? "logged in" 
                                : "not logged in"}.
                            </div>
                            <Lake name="Lake Tahoe" />
                            <Lake name="Angora Lake" />
                            <Lake name="Shirley Lake" />
                            <Lake name="Cathedral Lake" />
                        </div>
                    )
                }
            }
            
            ReactDOM.render(
                <App />,
                document.getElementById("root")
            );
        </script>
