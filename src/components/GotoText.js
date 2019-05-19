import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GotoText extends React.Component {
    render() {
        const { viewStyle, textStyle } = styles;

        return (
            <View style = { viewStyle }>
                <Text 
                    style = { textStyle }
                    onPress={ () => this.props.navigation.navigate( this.props.target ) }
                >Press to goto { this.props.target }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bbb'
    },
    textStyle: {
        color: '#0000aa'
    }
});

export default GotoText;
