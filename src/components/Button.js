import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class Button extends React.Component {
    render() {
        return(
            <TouchableOpacity 
                style={styles.container}
                onPress={this.props.onPress}
            >
                <Text style={styles.textStyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>

            // <TouchableOpacity 
            //     style={styles.container}
            //     onPress={this.props.onPress}
            // >
            //     <Text style={styles.textStyle}>
            //         {this.props.children}
            //     </Text>
            // </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#007aff',
    },
    textStyle: {
        fontSize: 18,
        color: '#007aff'
    }
});

export default Button;
