import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GotoText extends React.Component {
    render() {
        console.log(this.props.navigation);
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
        backgroundColor: '#eee'
    },
    textStyle: {
        color: '#0000aa',
        fontSize: 20
    }
});

export default GotoText;
