import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class NavBar extends Component {
    homeStyle() {
        if (this.props.selected === 'Home') {
            return (styles.selected);
        }
        else {
            return (styles.notSelected);
        }
    }

    awayStyle() {
        if (this.props.selected === 'Away') {
            return (styles.selected);
        }
        else {
            return (styles.notSelected);
        }
    }

    render() {
        return(
            <View style = {styles.container}>
                <TouchableOpacity 
                    onPress={ () => this.props.navigation.navigate( 'Home' ) }
                    style = { this.homeStyle() }
                >
                    <Text style = { styles.textStyle }>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={ () => this.props.navigation.navigate( 'Away' ) }
                    style = { this.awayStyle() }
                >
                    <Text style = { styles.textStyle }>Away</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    selected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee'
    },
    notSelected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    textStyle: {
        fontSize: 25,
        color: '#000000',
    }
});

export default NavBar;
