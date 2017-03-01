// Previously, we created…the login component which handles input…and login communication.…Now we're going to build a scene…
//where that will be used.

$npm i -S react-native-vector-icon //install vector icons
$react-native link //links our new vector icons into our native code


(in scenes/loginscene.js)
import React, { Component } from 'react'
import {
  Container,
  Content,
  View
} from 'native-base'

import { Image } from 'react-native'
import Login from '../components/login'
import { observer } from 'mobx-react/native'

//we'll apply observer as a decorator to our new class  
//it will notify our class to refresh when there's data change
@observer
export default class LoginScene extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { theme, stores } = this.props
    return (
      <Container theme={theme}>
        <View>
          <Content scrollEnabled={false}> //Content is a native-base's wrapper around RN's scrollView
            <Image source={stores.settings.LoginBG}> //yet to add to store
              <View>
                <Login {...this.props}/>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    )
  }
}


//Tada, let's import this in AppContainer.js
    import SplashScene from './scenes/splashScene'
    import LoginScene from './scenes/loginScene' //new

    renderScene(route, navigator) {
        switch(route.title) {
          case 'Splash': {
            return <SplashScene {...route.passProps} navigator={navigator}/>
          }
          case 'Login': { //new
            return <LoginScene {...route.passProps} navigator={navigator} />
          }
          default: {
            return null
          }
        }
      }
      
//also in stores/ settingsStore.js
    this.loginBG = require('../../images/login.jpg')
//accessor
get LoginBG() {
    return this.loginBG
  }


$react-native run-ios
(you can see debugger tools at localhost:8081/debugger-ui)
