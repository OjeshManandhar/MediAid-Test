import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import NavBar from './../components/NavBar';
import Button from './../components/Button';

class Profile extends React.Component {
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
                <View style={styles.contentStyle}>
                    <Button onPress={() => this.SignOut()}>Sign Out</Button>
                </View>
                <View style={styles.navBarStyle}>
                    <NavBar navigation={this.props.navigation} selected='Profile' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBarStyle: {
        height: 50
    }
});

export default Profile;
