import React from 'react';
import { View, StyleSheet } from 'react-native';

class SignUp extends React.Component {
    render() {
        return(
            <View>
                <Text>Sign Up</Text>
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

export default SignUp;
