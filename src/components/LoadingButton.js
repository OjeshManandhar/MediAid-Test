import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

class LoadingButton extends React.Component {
    render() {
        return(
            <TouchableOpacity style={styles.container}>
                <ActivityIndicator size='large' />
            </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        width: 300,
        height: 40,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#007aff',
    }
});

export default LoadingButton;
