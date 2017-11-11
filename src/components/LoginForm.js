import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button, Input, Spinner } from './common';


export default class LoginForm extends Component {
    state = { username: '', password: '', error: '', success: '', loading: false };


    onButtonPress() {
        const { username, password } = this.state;
        
        this.setState({ error: '', success: '', loading: true });
        
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(response => {
                this.setState({ error: '', success: 'Login Success', loading: false });
            })
            .catch(error => {
                this.setState({ error: 'Authentication Failed, trying to create an Account ', loading: false });
                firebase.auth().createUserWithEmailAndPassword(username, password)
                    .then(response => {
                        this.setState({ error: '', success: 'Create User Success', loading: false });
                    })
                    .catch(error => {
                        this.setState({ loading: false });
                        this.setState({ error: 'Authentication Failed ' + error.message })
                    });
            });
    }

    renderButton () {
        if (this.state.loading){
            return <Spinner />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Header headerText={'Authentication'}/>
                <Card>
                    <CardSection>
                        <Input 
                            placeholder="Username"
                            label="Email"
                            value={this.state.username}
                            onChangeText={username => this.setState({ username })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input 
                            placeholder="Password"
                            label="Password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    <Text style={styles.successTextStyle}>
                        {this.state.success}
                    </Text>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    },
    successTextStyle: {
        fontSize: 18,
        color: 'green',
        alignSelf: 'center'
    }  
}
