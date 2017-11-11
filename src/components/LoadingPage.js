import React from 'react';
import { View } from 'react-native';
import { Spinner } from './common';

const LoadingPage = () => {
    return (
        <View style={styles.spinnerContainer}>
            <Spinner />
        </View>
    );
}

const styles = {
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default LoadingPage;