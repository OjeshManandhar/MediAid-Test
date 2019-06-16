import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Button from './Button';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    SignOut() {
        console.log('Sign Out');
        Alert.alert(
            'Sign Out',
            'You have pressed Sign Out',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          );
    }

    render() {
        return(
            <View style={styles.container}>
                <Button onPress={() => this.SignOut()}>Sign Out</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Profile;
