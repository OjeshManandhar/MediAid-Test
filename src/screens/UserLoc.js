import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class UserLoc extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'User Location'
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>UserLoc</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default UserLoc;
