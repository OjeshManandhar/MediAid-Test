import React from 'react';
import { 
    View,
    StyleSheet,
    TextInput,
    Text
} from 'react-native';

import firebase from 'firebase';

import Button from './../components/Button';
import NavBar from '../components/NavBar';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    signIn() {
        console.log(this.state);

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.props.navigation.navigate('Away'));
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.contentStyle}>
                    <Text style={styles.textStyle} >Username:</Text>
                    <TextInput 
                        placeholder='Jon Snow'
                        value={this.state.username}
                        style={styles.inputBoxStyle}
                        onChangeText={username => this.setState({ username })}
                    />

                    <Text style={styles.textStyle} >Email:</Text>
                    <TextInput 
                        placeholder='jon.snow@got.com'
                        value={this.state.email}
                        style={styles.inputBoxStyle}
                        onChangeText={email => this.setState({ email })}
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
                        <Button onPress={() => this.signIn()}>Sign In</Button>
                    </View>
                </View>

                <View style={styles.navBarStyle}>
                    <NavBar navigation={this.props.navigation} />
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
    navBarStyle: {
        height: 50
    }
});

export default SignIn;
