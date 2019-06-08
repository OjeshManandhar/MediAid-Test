import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';

class Home extends React.Component {
    render() {
        console.log('Home page');

        const { viewStyle, navBarStyle, formStyle } = styles;
        
        return (
            <View style = { viewStyle }>
                <View style = { formStyle } >
                    <LoginForm />
                </View>

                <View style = { navBarStyle } >
                    <NavBar navigation = {this.props.navigation} selected = 'Home' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
    },
    navBarStyle: {
        height: 50
    },
    formStyle: {
        flex: 1
    }
});

export default Home;
