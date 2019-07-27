import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

class ViewData extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'View data'
    };

    constructor(props) {
        super(props);

        this.state={
            hospitals: []
        }
    }

    componentWillMount() {
        var ref = firebase.database().ref(`/hospitals`);

        console.log('new log');
        ref.once('value', (snap) => {
            const hospitals = [];

            console.log('snap.val(): ', snap.val());
            
            snap.forEach((child) => {
                const { name, location, phone, lat, long, fee, type } = child.val();
                hospitals.push({
                    key: child.key,
                    name,
                    location,
                    phone,
                    lat,
                    long,
                    fee,
                    type
                });
            })

            console.log('hospitals:', hospitals);
            
            this.setState({
                hospitals
            });
        })

        // ref.on('value', function(snapshot) {
        //     snapshot.forEach(function(childSnapshot) {
        //         childKey = childSnapshot.key;
        //         childData = childSnapshot.val();
                
        //         console.log('new data');
        //         console.log('childKey:', childKey);
        //         console.log('childData:', childData);
        //         console.log('childData.name:', childData.name);
        //         console.log('childData.location:', childData.location);
        //         console.log('\n');
                
        //         this.setState({
        //             key: childKey,
        //             name: childData.name,
        //             location: childData.location,
        //             phone: childData.phone,
        //             lat: childData.lat,
        //             long: childData.long,
        //             fee: childData.fee,
        //             type: childData.type
        //         });

        //     });
        // });
    }

    renderData() {
        var i;
        const returnText = [];

        for (i = 0; i < this.state.hospitals.length; i++){
            returnText.push(<Text>counter: {i}</Text>);
            for (var key in this.state.hospitals[i]) {
                if (this.state.hospitals[i].hasOwnProperty(key)) {
                    returnText.push(<Text>{key}: {this.state.hospitals[i][key]}</Text>);
                }
            }
            returnText.push(<Text></Text>);
        }

        return returnText;
    }
    
    render() {
        const data = this.props.navigation.getParam('data', null);

        return(
            <ScrollView style={StyleSheet.container}>
                {this.renderData()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ViewData;
