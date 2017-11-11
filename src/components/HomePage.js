import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button } from './common';


const HomePage = () => {
    return (
        <View>
            <Header headerText={'Authentication'}/>
            <Card>
            <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                Log Out
                </Button>
            </CardSection>
            </Card>
      </View>
    );
}

export default HomePage;