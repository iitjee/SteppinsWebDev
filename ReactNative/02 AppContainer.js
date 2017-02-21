touch AppContainer.js

(in AppContainer.js)
    import React, { Component } from 'react'

    export default class AppContainer extends Component { //Creating AppContainer component and exporting it at the same time
      constructor(props) { //It's going to take in the properties of a component, and it's going to pass those properties up to its super. 
        super(props)
        
        this.state = { //setting up initial state
          store: {}, //where we're going to hold all of our data stores
          theme: null //The over-arching theme file for Native Base
        }
      }

      render() { //a blank render method
        return null
      }
    }
