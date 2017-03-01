
$npm i -D babel-plugin-transform-decorators-legacy

(in .babel-rc)
      {
      "presets": ["react-native"],
      "plugins": ["transform-decorators-legacy"]
      }
      
//now we can use decorators without any concern



//Previously we created a splash screen and a side menu. Now let's add some authentication.
(in app/stores authStore.js)
      import { observable, action } from 'mobx'
      import firebase from 'firebase'

//The authentication store will be a bit different than the other stores we've made so far. It's not going to use the mobx 
//firebase store package, so this will give us a small taste of how to use firebase and mobx without any external packages. 
 
        export default class AuthStore {
        
        
//   we're going to make a member variable. That member variable is going to have a decorator called @observable.

//The observable decorator tells mobx that whenever the value of this variable changes, we will need to tell React Native also 
//to refresh any components that use it. So this variable is going to be a reference to our user. So we'll call it authUser, //and for right now it'll be null. 
        @observable authUser = null

        constructor() {
        //create a firebase authentication listener.
          firebase.auth().onAuthStateChanged((user) => { //arg is an observable function
            this.authUser = user;
          })
        }
// Now what this listener is setting us up for is every time the user state changes in firebase, it's going to send us a new 
// user reference. So initially, the user will be null, then when you sign in, the user will be filled out with your profile 
// data, and then when you sign back out, the user will become again null.
 
// Next, we're going to create the sign in method, and this will have a decorator of @action. What the @action decorator does 
//is it tells mobx that this method is going to have an effect on our back end. In this case, it will change our authUser 
// variable through the AuthStateChanged method. So we'll do signIn, this is going to accept an object that has an email, //password.
        @action
        signIn({email, password}) {
        //we're going to do two things. First we're going to check if the user is already logged in.
          if(this.authUser) {
            return Promise.resolve(this.authUser)
          }
          //if user is not logged in and user is null
          return firebase.auth().signInWithEmailAndPassword(email, password)
        }
  //  The reason we're doing this is if we're already logged in, there's no point in trying to re-authenticate against the 
//server, we might as well just pass back the user we already have. However, if we're not logged in, and the user is null, //we'll want to return firebase.auth() .sighnInWithEmailAndPassword().
      }


//Now let's head over to our AppContainer.js file and import that store.
(in APPContainer.js)
            import AuthStore from './stores/authStore'
            
            const authStore = new AuthStore()
            
            //let's add to our state
            this.state = {
            toggled: false,
            store: {
              settings: settings,
              auth: authStore //new
            },
            theme: theme
          }
//Now that(auth) will accessible to all of our components and scenes.
