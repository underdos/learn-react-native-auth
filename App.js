/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCIG6sSEg9WJ76VNYB_EnFZPHbTWNVzA3Q",
      authDomain: "auth-8d09b.firebaseapp.com",
      databaseURL: "https://auth-8d09b.firebaseio.com",
      projectId: "auth-8d09b",
      storageBucket: "auth-8d09b.appspot.com",
      messagingSenderId: "828781488805"  
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'}/>
        <LoginForm />
      </View>
    );
  }
}
