import React from 'react';
import { View, StyleSheet } from 'react-native';

import GotoText from '../components/GotoText';
import NavBar from '../components/NavBar';

class Home extends React.Component {
    render() {
        const { viewStyle, navBarStyle, gotoTextStyle } = styles;

        return (
            <View style = { viewStyle }>
                <View style = { gotoTextStyle } >
                    <GotoText pageName = 'Away'/>
                </View>
                <View style = { navBarStyle } >
                    <NavBar />
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
        flex: 11
    },
    navBarStyle: {
        flex: 1
    }
});

export default Home;
