import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SignIn extends React.Component {
    render() {
        return(
            <View>
                <Text>Sign In</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SignIn;
