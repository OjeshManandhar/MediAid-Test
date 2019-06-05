import React from 'react';
import { 
    View,
    StyleSheet,
    TextInput,
    Text,
    Button
} from 'react-native';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            phoneNumber: '',
            password: ''
        };
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle} >Username:</Text>
                <TextInput 
                    value={this.state.username}
                    style={styles.inputBoxStyle}
                    onChangeText={username => this.setState({ username })}
                />

                <Text style={styles.textStyle} >Phone Number:</Text>
                <TextInput 
                    value={this.state.phoneNumber}
                    style={styles.inputBoxStyle}
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                />

                <Text style={styles.textStyle} >Password:</Text>
                <TextInput 
                    secureTextEntry
                    value={this.state.password}
                    style={styles.inputBoxStyle}
                    onChangeText={password => this.setState({ password })}
                />

                <Button title="Login"/>
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
        color: '#00aaff',
        marginBottom: 5
    },
    inputBoxStyle: {
        height: 40,
        width: 300,
        fontSize: 18,
        marginBottom: 15,
        borderWidth: 2,
        borderRadius: 5
    },
    buttonStyle: {
        fontSize: 18,
        height: 20,
        width: 50,
        borderRadius: 5
    }
});

export default LoginForm;
