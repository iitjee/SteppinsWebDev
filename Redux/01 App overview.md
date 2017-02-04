So we'll be using Redux to build the data store that manages all of this state. But when planning an application, 
we always start out with wire frames. Even if the wire frames are just sketches or whiteboard drawings, is always a 
good idea to draw out your screens and what data you want to see on those screens.

Now, looking at these wire frames, you might jump the gun and start identifying all of the objects that would e necessary
to create this application. These are the nouns, and if you've done this, it's probably because you come from an object 
oriented background. However, we're working in the functional paradigm. So we're not concerned with the nouns as much as
we are concerned with the verbs. To start planning a Redux application, you want to identify all of your actions. 
So here, looking at these wire frames, I see that we have a form. So that means that users will be able to add days.

![image Actions] (https://cloud.githubusercontent.com/assets/20602254/22618006/07b8f074-eaf8-11e6-98bd-3ae2bfffa47b.png)

 Now, once we've identified all of the options in our application, we want to go ahead and record these in a file called constants.
 
 (in root/src/constants.js)
 ```
 // it's very easy to make typos in strings in Javascript, and typically Javascript will not complain. So we create a hash //(dictionary)
         const constants = {
          ADD_DAY: "ADD_DAY",
          REMOVE_DAY: "REMOVE_DAY",
          SET_GOAL: "SET_GOAL",
          ADD_ERROR: "ADD_ERROR",
          CLEAR_ERROR: "CLEAR_ERROR",
          FETCH_RESORT_NAMES: "FETCH_RESORT_NAMES",
          CANCEL_FETCHING: "CANCEL_FETCHING",
          CHANGE_SUGGESTIONS: "CHANGE_SUGGESTIONS",
          CLEAR_SUGGESTIONS: "CLEAR_SUGGESTIONS"
        }

        export default constants
```


Now that we have identified the actions, we want to identify the variables that those actions impact. Our state. So looking at our wire frames and thinking about our actions, we know that we have ski days. So our main data point is going to be an array. It's going to be an array of objects that contain information about a ski day.

![image](https://cloud.githubusercontent.com/assets/20602254/22618006/07b8f074-eaf8-11e6-98bd-3ae2bfffa47b.png)
```
{ //initialstate.json

      "allSkiDays": [
       {
        "resort": "Kirkwood",
        "date": "2016-12-7",
        "powder": true,
        "backcountry": false
       },
       {
        "resort": "Squaw Valley",
        "date": "2016-12-8",
        "powder": false,
        "backcountry": false
       },
       {
        "resort": "Mt Tallac",
        "date": "2016-12-9",
        "powder": false,
        "backcountry": true
       }
      ],
      "goal": 10,
      "errors": [],
      "resortNames": {
       "fetching": false,
       "suggestions": ["Squaw Valley", "Snowbird", "Stowe", "Steamboat"]
      }
     }
```

