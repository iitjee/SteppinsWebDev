Previously we set up our app container class. Now we will add a side menu drawer to it.
notice the render() is now changed. 


(in AppContainer.js)
    import React, { Component } from 'react'
    import { Drawer, View } from 'native-base' //new

    export default class AppContainer extends Component {
      constructor(props) {
        super(props) //Class components should always call the base constructor with props.
        this.state = {
          toggled: false,
          store: {},
          theme: null
        }
      }
      toggleDrawer() {
        this.state.toggled ? this._drawer.close() : this._drawer.open()
      }
      openDrawer() { //And what this event handler is going to do is it's going to set the state of our toggled Boolean.
        this.setState({toggled: true})
      }
      closeDrawer() {
        this.setState({toggled: false})
      }
      render() {
        return (
          <Drawer
            ref={(ref) => this._drawer = ref} //underscore just represents private variable;  We'll hold that reference for later and use it in other methods.
            type="displace" //add the property type and this is going to be displace. This property controls how the menu appears on the screen. We chose displace because we would like our menu to push our current content over to the side instead of overlay on top it.
            content={<View style={{backgroundColor: "#000", height: 1000}}/>} // Next we will add our content property. This contains the actual view of our side menu. We're going to have some place holders since we have not built our side menu yet.
            //double braces => passing an object
            onClose={this.closeDrawer.bind(this)} //This will get called when the drawer closes.  We are binding this method to the this keyword so that when we references this inside of the method it still maps correctly to our current class is this keyword.
            onOpen={this.openDrawer.bind(this)}
            openDrawerOffset={0.2}
            >
            </Drawer>
        )
      }
    }
