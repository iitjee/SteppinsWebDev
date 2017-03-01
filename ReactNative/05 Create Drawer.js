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
        <Header/>
        <View>
          <List dataArray={list} renderRow={(item) => 
            <ListItem button onPress={item.onPress.bind(this)}>
              <Text> {item.title} </Text>
            </ListItem>
          }/>
        </View>
      </Container>
