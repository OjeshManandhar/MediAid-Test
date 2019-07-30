import React from 'react';
import {
    View,
    Text,
    PermissionsAndroid,
    StyleSheet
} from 'react-native';

class UserLoc extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'User Location'
    };

    // For asking permission
    // import 'PermissionsAndroid' from 'react-native'
    componentDidMount() {
        PermissionsAndroid.requestMultiple(
            [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
            {
                title: 'Give Location Permission',
                message: 'App needs location permission to find your position.'
            }
        ).then(granted => {
            console.log(granted);
        }).catch(err => {
            console.warn(err);
        });
    }
    
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
