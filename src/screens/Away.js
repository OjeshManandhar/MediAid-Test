import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import GotoText from '../components/GotoText';
import NavBar from '../components/NavBar';

const view = !null;

class Away extends React.Component {
    static navigationOptions = {
        header: undefined
    };

    render() {
        console.log('Away page');

        const { viewStyle, navBarStyle, gotoTextStyle } = styles;

        return (
            <View style = { viewStyle }>
                <View style = { navBarStyle } >
                    <NavBar navigation = {this.props.navigation} selected = 'Away' />
                </View>
                <View style = { gotoTextStyle } >
                    <GotoText navigation = {this.props.navigation} target = 'Home' />
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
        height: 50,
        backgroundColor: '#aa0000'
    },
    gotoTextStyle: {
        flex: 1
    }
});

export default Away;
