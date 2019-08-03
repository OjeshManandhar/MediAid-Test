import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import GotoText from '../components/GotoText';
import NavBar from '../components/NavBar';

class Home extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'Home'
    };
    
    render() {
        console.log('Home page');

        const { viewStyle, navBarStyle, gotoTextStyle } = styles;
        
        return (
            <View style = { viewStyle }>
                <View style = { gotoTextStyle } >
                    <GotoText navigation = {this.props.navigation} target = 'AddData' />
                </View>

                <View style = { gotoTextStyle } >
                    <GotoText navigation = {this.props.navigation} target = 'ViewData' />
                </View>

                <View style = { gotoTextStyle } >
                    <GotoText navigation = {this.props.navigation} target = 'UserLoc' />
                </View>

                <View style = { gotoTextStyle } >
                    <GotoText navigation = {this.props.navigation} target = 'Picker' />
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
    gotoTextStyle: {
        flex: 1
    },
    navBarStyle: {
        height: 50
    }
});

export default Home;
