import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ViewData extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'View data'
    };

    render() {
        const data = this.props.navigation.getParam('data', null);

        return(
            <View style={StyleSheet.container}>
                <Text>ViewData Page</Text>
                <Text>{data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ViewData;
