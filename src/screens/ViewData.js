import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

class ViewData extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'View data'
    };

    renderData() {
        var ref = firebase.database().ref(`/hospital`);

        ref.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                
                console.log(`childKey: ${childKey}
                childData: ${childData}`);
            });
        });
    }
    
    render() {
        const data = this.props.navigation.getParam('data', null);

        return(
            <View style={StyleSheet.container}>
                <Text>{this.renderData()}</Text>
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
