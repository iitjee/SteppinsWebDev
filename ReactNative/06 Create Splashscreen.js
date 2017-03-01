Previously we made a side menu.…Now let's add our splash screen.…Under app, let's make a new folder called scenes.

(app/scenes splashscene.js)
    import React, { Component } from 'react'
    import { Image } from 'react-native'
    import { View } from 'native-base'

    export default class SplashScene extends Component {
      constructor(props) {
        super(props)
      }
      componentDidMount() { //called everytime component is mounted on react's virtual dom
        const { stores } = this.props //taking out from our props
        setTimeout(() => { //will execute after a delay
          this.props.navigator.replace({title: "Login", passProps: this.props})
        }, stores.settings.SplashTime)
      }

      render() {
        const { settings } = this.props.stores //destructuring again
        return (
          <View style={{flex:1}}> //we'll take all the flex space available
            <Image style={{flex:1, width:null, height:null}} source={settings.SplashImg}/>
          </View>
        )
      }
    }
    
    
Previously we created a splash screen.…But it needed data from the settings store.
…Settings is going to be our first MobX slash Firebase store.
$npm i -S firebase


While that installs, we are going to be installing…3 other packages.…
Mobx, Mobx react and Mobx Firebase store
$npm i -S mobx mobx-react mobx-react-firebase-store firebase-nest

(in app/stores settingsStore.js)
      import firebase from 'firebase'
      import MobxFirebaseStore from 'mobx-firebase-store'

      // Replace with your Configuration Information (go to firebase and click for WEB app and get details)
      const config = {
          apiKey: "XXXXXXX",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx-xxxxx.appspot.com",
          messagingSenderId: "xxxxxxxxxxx"
        }
      export default class SettingsStore extends MobxFirebaseStore { 
        constructor() {
          firebase.initializeApp(config) //initialize firebase app
          super(firebase.database().ref()) //initialize firebase mobx store

          this.splashTime = 5000
          this.splashImg = require('../../images/splash.jpg') //take care of images folder(assets)
        }
        //accessors
        get SplashTime() {
          return this.splashTime
        }
        get SplashImg() {
          return this.splashImg
        }
      }
      
      
      
      
      
//Previously, we built the…settings store and splash screen.…Now let's wire those up to the main application.
(in AppContainer.js)
      import SettingsStore from './stores/settingsStore'
      import SplashScene from './scenes/splashScene'

      import theme from './theme/base-theme' //you can visit native-base to find and make different themes





      const settings = new SettingsStore()
      //let's add the settings store into our states stores
      constructor(props) {
        super(props)
        this.state = {
          toggled: false,
          store: { //new  
            settings: settings
          },
          theme: theme //new
        }
      }
      
      //let's handle rendering scenes
      renderScene(route, navigator) {
        switch(route.title) {
          case 'Splash': {
            return <SplashScene {...route.passProps} navigator={navigator}/>
          }
          default: {
            return null
          }
        }
      }
      
      //in render()
      <Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
            initialRoute={{ //let's add a new route property which will be accessed by user when open first time
              title: "Splash",
              passProps: {
                stores: this.state.store,
                toggleDrawer: this.toggleDrawer.bind(this),
                theme: this.state.theme
              }
            }}
            />-ios
$react-native run
