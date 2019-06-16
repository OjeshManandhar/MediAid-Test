import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';

class Home extends React.Component {
    render() {
        console.log('Home page');

        const { viewStyle, navBarStyle, contentStyle } = styles;
        
        return (
            <View style = {viewStyle}>
                <View style = { contentStyle } >
                    <LoginForm navigation = {this. props.navigation}/>
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
        flex: 1
    },
    navBarStyle: {
        height: 50
    },
    contentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;
