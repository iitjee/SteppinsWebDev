//Right now, we have multiple components being rendered to our page, but there may be cases where you want to conditionally render a 
//component based on some sort of a condition


        <script type="text/babel">
            
            const Lake = ({name}) => <h1>{name}</h1>; //"name" is a prop for Lake element
            const SkiResort = ({name}) => <h1>{name}</h1>; //"name" is alos a prop for SkiResortElment

            const App = ({summer}) => ( //"summer" is a prop for App element
                <div> //note the design ---- when we're rendering conditionally, we wrap it in a div block!!
                //following {} is there.... i.e in JSX it means evaluating the expression which here is the ternary operator exprerssion
                    {summer //conditionally rendering the elements i.e depending on value of summer
                        ? <Lake name="Lake Tahoe"/> 
                        : <SkiResort name="Alpine Meadows"/>}
                </div>
            )
            
            ReactDOM.render(
                <App summer={false}/>,
                document.getElementById("root")
            );
        </script>
