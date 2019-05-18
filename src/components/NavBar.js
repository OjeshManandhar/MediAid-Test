import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class NavBar extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Image source={require('./../assets/NavBarIcons/events.png')} style={styles.normal} />
                <Image source={require('./../assets/NavBarIcons/schedule.png')} style={styles.normal} />
                <Image source={require('./../assets/NavBarIcons/call.png')} style={styles.large} />
                <Image source={require('./../assets/NavBarIcons/filter.png')} style={styles.normal} />
                <Image source={require('./../assets/NavBarIcons/account.png')} style={styles.normal} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    normal: {
        width: 30,
        height: 30
    },
    large: {
        width: 50,
        height: 50,
        marginBottom: 15
    }
});

export default NavBar;
