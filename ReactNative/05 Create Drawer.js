Previously, we set up navigation for our app.…Now we will add a side menu component…to facilitate that navigation

(create app/components SideMenu.js)
import React, { Component } from 'react'
import {
  Container, //overarching container
  Header, //headerportion of side menu
  Content, //content of side menu
  List,
  ListItem, //items of list
  Text,
  View,
  Button
} from 'native-base'

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return null
  }
}

//Now let's add some content
    render() {
        let list = [{ //array of list items
          title: "Match",
          onPress: () => {
            this.props.navigator.replace("Match") //navigator passed in with our properties "match" = title of scene
          }
        }, {
          title: "History",
          onPress: () => {
            this.props.navigator.replace("History") //we've used replace() instead of push() so that user won't be able to nav back
          }
        }]
        
        
        return (
      <Container theme={this.props.theme}>
        <Header/> //a blank header for now
          
        <View> //in this view, we will embed list. List has two properties: dataArray and renderRow
          <List dataArray={list} renderRow={(item) => 
            <ListItem button onPress={item.onPress.bind(this)}> //button is also like attrb of ListItem
              <Text> {item.title} </Text>
            </ListItem>
          }/> //renderRow is popoulating List with ListItems
        </View>

      </Container>


(in AppContainer.js)
  import SideMenu from './components/sideMenu'

//in render() , Drawer component, replace content's attribute with         
   content={<SideMenu navigator={this._navigator} theme={this.state.theme}/>}
//i.e our sidemenu has navigator

$react-native run-ios


