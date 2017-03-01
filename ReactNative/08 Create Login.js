 Previously, we set up…our authentication store,…now we'll build the login component that uses it.
 
 (in app/components login.js)
  import React, { Component } from 'react'
  import {
    Button,
    InputGroup,
    Input,
    Icon,
    View,
    Spinner
  } from 'native-base'
  import { observer } from 'mobx-react/native'

//Now we're going to use an observer decorator.…What this is going to do is kind of tell the class…to be aware of changing 
//data from our store…and rerender when needed

  @observer
  export default class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email: '',
        password: '',
        loading: null
      }
    }
    updateEmail(email) { this.setState({email}) }
    updatePassword(password) { this.setState({password}) }

    signIn() {
      const { auth } = this.props.stores //pulling out auth object from stores
      const { email, password } = this.state //pulling from our state so we can use 'email' instead of 'this.state.email'

      this.setState({loading: true}, () => {
        auth.signIn({email, password})
          .then(() =>  //inside promise
            this.props.navigator.replace({
              title: 'Match',
              passProps: this.props
            })
          })
      })
    
    
    render() {
      const { loading } = this.state
      const { auth } = this.props.stores

      return (
        <View theme={this.props.theme}> //overarcing view
        
          <InputGroup style={{marginBottom:10}} boarderType='round'> //input group will have it's own inline style
            <Icon style={{color:"#fff"}} name='person-outline'/> //icon also have it's own style
            <Input style={{color:"#fff"}}
              placeholder='Please Enter Email'
              placeholderTextColor="#fff"
              onChangeText={(email) => { this.updateEmail(email)}} />
          </InputGroup>
          
          <InputGroup style={{marginBottom:10}} boarderType='round'>
            <Icon style={{color:"#fff"}} name='lock-open'/>
            <Input style={{color:"#fff"}}
              placeholder='Please Enter Password'
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(pass) => { this.updatePassword(pass)}} />
          </InputGroup>
          
          <Button rounded block style={{marginBottom:10}} onPress={this.signIn.bind(this)}>
            {'Login'}
          </Button>
          
        </View>
      )
    }
  }
