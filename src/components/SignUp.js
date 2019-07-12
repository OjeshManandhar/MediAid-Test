import React from 'react';
import { 
    View,
    StyleSheet,
    TextInput,
    Text
} from 'react-native';

import firebase from 'firebase';

import Button from './Button';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    signUp() {
        console.log(this.state);

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.props.navigation.navigation('Away'));
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.labelStyle} >Email:</Text>
                <TextInput 
                    placeholder='jon.snow@got.com'
                    value={this.state.email}
                    style={styles.inputBoxStyle}
                    onChangeText={email => this.setState({ email })}
                />

                <Text style={styles.labelStyle} >Password:</Text>
                <TextInput 
                    placeholder='password'
                    secureTextEntry
                    value={this.state.password}
                    style={styles.inputBoxStyle}
                    onChangeText={password => this.setState({ password })}
                />

                <View style={styles.buttonStyle}>
                    <Button onPress={() => this.signUp()}>Sign Up</Button>
                </View>

                <Text style={styles.textStyle}>
                    Already have an account, <Text style={styles.labelStyle}>Sign In</Text>
                </Text>
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
    },
    labelStyle: {
        fontSize: 18,
        color: '#7777ff',
        marginBottom: 5
    },
    inputBoxStyle: {
        width: 300,
        height: 40,
        fontSize: 18,
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    buttonStyle: {
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 18,
        color: '#000',
        marginBottom: 5
    }
});

export default SignUp;
