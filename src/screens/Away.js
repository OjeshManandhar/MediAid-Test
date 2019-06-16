import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import GotoText from '../components/GotoText';
import NavBar from '../components/NavBar';

class Away extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'Away'
    };
    
    render() {
        console.log('Away page');

        const { viewStyle, navBarStyle, contentStyle } = styles;

        return (
            <View style = { viewStyle }>
                <View style = { contentStyle } >
                    <GotoText navigation = {this.props.navigation} target = 'Home' />
                </View>
                <View style = { navBarStyle } >
                    <NavBar navigation = {this.props.navigation} selected = 'Away' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    contentStyle: {
        flex: 1
    },
    navBarStyle: {
        height: 50
    }
});

export default Away;
