Previously we set up our app container class. Now we will add a side menu drawer to it.
notice the render() is now changed. 


(in AppContainer.js)
    import React, { Component } from 'react'
    import { Drawer, View } from 'native-base' //new

    export default class AppContainer extends Component {
      constructor(props) {
        super(props) //Class components should always call the base constructor with props.
        this.state = {
          toggled: false, //default, we want our drawer to be closed at start of app
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

            onClose={this.closeDrawer.bind(this)} //This will get called when the drawer closes.  We are binding this method to the this keyword so that when we references this inside of the method it still maps correctly to our current class is this keyword.
            onOpen={this.openDrawer.bind(this)}
            openDrawerOffset={0.2} //right-hand margin
            >
            </Drawer>
        )
      }
    }
    
    
//Previously we set up our app container class. Now let's add the navigation component. 
//Now, the navigator will handle the management of our navigation stack, which is similar to a stack of cards. 
//You can push a new card onto the top, pop a card off the top or replace the current card. To set up the navigator, let's
//go down to the render method and add it inside our previously created drawer component.
import { Navigator } from 'react-native'

render() {
    return (
      <Drawer
        ...
        >
          <Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)} //configureScene is our custom method(event handler is more correct term)
            renderScene={this.renderScene.bind(this)} //renderScene too ^
            />
        </Drawer>

    
// This will take in a route, which similarly to the renderScene is the current route and a routeStack. This is our current navigation stack.
  renderScene(route, navigator) {
    switch(route) {
      default: {
        return null
      }
    }
  }
//This method handles how our scenes are brought into view.
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight // what this will do is it will push in our new scene from the right-hand side over top of the old scene
  }
