import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import GotoText from '../components/GotoText';
import NavBar from '../components/NavBar';

class Home extends React.Component {
    render() {
        console.log('Home page');

        const { viewStyle, navBarStyle, gotoTextStyle } = styles;
        
        return (
            <View style = { viewStyle }>
                <View style = { navBarStyle } >
                    <NavBar navigation = {this.props.navigation} selected = 'Home' />
                </View>
                <View style = { gotoTextStyle } >
                    <GotoText navigation = {this.props.navigation} target = 'Away' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
    },
    gotoTextStyle: {
        flex: 1
    },
    navBarStyle: {
        height: 50,
        backgroundColor: '#aa0000'
    }
});

export default Home;
