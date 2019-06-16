import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from './Button';

class Profile extends React.Component {
    logOut() {
        console.log('Log Out');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Profile Page</Text>
                <Button onPress={() => this.logOut()}>
                    Log Out
                </Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        marginBottom: 20,
        fontSize: 18,
        color: '#7777ff'
    }
});

export default Profile;
