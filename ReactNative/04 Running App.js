//Previously we modified AppContainer.js to have a navigator inside menu. Now let's make it the single entry point for
//application.

(in index.ios.js)
//modify like this

import React, { Component } from 'react';
import {
  AppRegistry, //remoed other modules
} from 'react-native';

import AppContainer from './app/AppContainer' //imported our AppContainer
export default class dinder extends Component {
  render() {
    return ( //remove all other jsx except appcontainer
      <AppContainer/>
    );
  }
}

AppRegistry.registerComponent('dinder', () => dinder);

$react-native run-ios
(from now on  you can do cmd+R to refresh simulator)
    
    
    
//Similarly in Android
    import React, { Component } from 'react';
    import {
      AppRegistry
    } from 'react-native';
    
    import AppContainer from './app/AppContainer'
    export default class dinder extends Component {
      render() {
        return (
          <AppContainer/>
        );
      }
    }


    AppRegistry.registerComponent('dinder', () => dinder);
