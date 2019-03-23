Tutorial divided into 3 parts


//Right now, we have multiple components being rendered to our page, but there may be cases where you want to conditionally render a 
//component based on some sort of a condition
PART--1

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


PART -- 2
// Currently, were just rendering two components. Theres one component, our App, and thats conditionally rendering either the lake or 
//the ski resort component. Now one of the really cool things about React is as your data changes, as it becomes more dynamic, you can 
//use React to render the correct number of elements based on whatever your data is.


   <body>
        <div id="root"></div>
        <script type="text/babel">
            
            const lakeList = [
                "Echo Lake", 
                "Maud Lake", 
                "Cascade Lake"
            ];

            const App = ({lakes}) => ( //App "containing" element has "lakes" prop of type array
                <ul>
                    {lakes.map((lake, i) => 
                        <li key={i}>{lake}</li>    
                    )}
                </ul>
            )
//And then we're going to map over these lakes. So when we map over them, we're going to say okay, for each of these lakes 
// we want to display each of their names in an li. So we'll say for each lake, let's go ahead and return a list item, and inside of 
 //that list item should be the lake, so the name of the lake should be displayed.
            
            ReactDOM.render(
                <App lakes={lakeList}/>,
                document.getElementById("root")
            );

        </script>
    </body>



ParT 3
// we looked at how to iterate over a list and display different elements based on the data in that list. Lets go ahead and adjust our 
//lake list a little bit to include objects instead of strings. So lets first replace Echo Lake we're going to give it an ID. And the ID 
//will be 1.

     const lakeList = [
                {id: 1, name: "Echo Lake", trailhead: "Echo Lake"}, 
                {id: 2, name: "Maud Lake", trailhead: "Wright's Lake"}, 
                {id: 3, name: "Cascade Lake", trailhead: "Bayview"}
            ];
// we're going to have to pull the data off of each of these keys. So lets do that. The first thing that we are going to do is we're 
//going to use lake dot name. 
             const App = ({lakes}) => ( //lakes is a prop of type array
                <ul>
                    {lakes.map(lake => 
                        <li key={lake.id}>      {lake.name} | Trailhead: {lake.trailhead}      </li>    
                    )}
                </ul>
            )
            
            ReactDOM.render(
                <App lakes={lakeList}/>,
                document.getElementById("root")
            );
