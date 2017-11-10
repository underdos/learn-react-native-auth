import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';


export default class LoginForm extends Component {
    state = { username: '', password: '' };
    render() {
        return (
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
                <CardSection>
                    <Button onPress={() => console.log(this.state.username + this.state.password)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
