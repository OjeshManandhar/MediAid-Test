import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import Button from './Button';

class Profile extends React.Component {
    SignOut() {
        console.log('Sign Out');

        // Alert.alert(
        //     'Sign Out',
        //     'You have pressed Sign Out',
        //     [
        //         {text: 'OK', onPress: () => console.log('OK Pressed')},
        //     ],
        //     { cancelable: false }
        // );

        firebase.auth().signOut();
    }

    render() {
        return(
            <View style={styles.container}>
                <Button onPress={() => this.SignOut()}>{ this.props.uid }</Button>
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
