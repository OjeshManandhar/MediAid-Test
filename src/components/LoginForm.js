import React from 'react';
import { 
    View,
    StyleSheet,
    TextInput,
    Text
} from 'react-native';
import Button from './Button';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            phoneNumber: '',
            password: ''
        };
    }

    logIn() {
        console.log(this.state);
    }

    signUp() {
        console.log(this.state);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle} >Username:</Text>
                <TextInput 
                    placeholder='Jon Snow'
                    value={this.state.username}
                    style={styles.inputBoxStyle}
                    onChangeText={username => this.setState({ username })}
                />

                <Text style={styles.textStyle} >Phone Number:</Text>
                <TextInput 
                    placeholder='+9779812345678'
                    value={this.state.phoneNumber}
                    style={styles.inputBoxStyle}
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                />

                <Text style={styles.textStyle} >Password:</Text>
                <TextInput 
                    placeholder='password'
                    secureTextEntry
                    value={this.state.password}
                    style={styles.inputBoxStyle}
                    onChangeText={password => this.setState({ password })}
                />

                <View style={styles.buttonStyle}>
                    <Button onPress={() => this.logIn()}>Login</Button>
                </View>

                <View style={styles.buttonStyle}>
                    <Button onPress={() => this.signUp()}>Sign Up</Button>
                </View>
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
    textStyle: {
        fontSize: 18,
        color: '#7777ff',
        marginBottom: 5
    },
    inputBoxStyle: {
        width: 300,
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
        height: 40,
        width: 300,
        marginBottom: 20,
    }
});

export default LoginForm;
