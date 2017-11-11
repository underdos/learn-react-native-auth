/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Header, Spinner, Button, Card, CardSection } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import LoadingPage from './src/components/LoadingPage';
import HomePage from './src/components/HomePage';

export default class App extends Component {
   state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCIG6sSEg9WJ76VNYB_EnFZPHbTWNVzA3Q",
      authDomain: "auth-8d09b.firebaseapp.com",
      databaseURL: "https://auth-8d09b.firebaseio.com",
      projectId: "auth-8d09b",
      storageBucket: "auth-8d09b.appspot.com",
      messagingSenderId: "828781488805"  
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    console.log(this.state);
    switch(this.state.loggedIn){
      case true:
        return <HomePage />;
      case false:
        return <LoginForm />;
      default:
        return <LoadingPage />;
    }
  }
}
