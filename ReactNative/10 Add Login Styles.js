//Previously, we made our login scene,…but it needs some styling.…So we're going to use React Native StyleSheets,…which are 
//very similar and usually match up with CSS,…to fix our login scene.…Best practice is to have your styles…in a separate file 
//from each component.…If they're small enough, they can be inline,…which is what we've been doing up to now.…However, these 
//styles are kind of in the middle.…They're not quite large enough to have their own file,…and they're not quite small enough 
//just to be inline.…So we're going to do,…we're going to open up our login scene,…and we're going to put them at the bottom.…

(in loginscene.js)
(at bottom)
const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBackground: { //this is RN's best practise to make full-screen image
    flex:1, //takes all of our flex space
    width: null,
    height: null
  },
  loginForeground: {
    flex:1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
})


//Now let's apply them. (look out for style attribute)
return (
      <Container theme={theme}>
        <View style={style.container}>
          <Content scrollEnabled={false}>
            <Image style={style.loginBackground} source={stores.settings.LoginBG}>
              <View style={style.loginForeground}>
                <Login {...this.props}/>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    )
