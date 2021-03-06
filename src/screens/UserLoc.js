import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet, PermissionsAndroid } from 'react-native';

import Button from './../components/Button';
import LoadingButton from './../components/LoadingButton';

class SwichExample extends Component {
    state = {
        initialPosition: 'unknown',
        // lastPosition: 'unknown',
        loading: false
    }

    // watchID: ?number = null;

    componentDidMount = () => {
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

        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         const initialPosition = JSON.stringify(position);
        //         this.setState({ initialPosition });
        //     },
        //     (error) => alert('Initial ' + error.message), {
        //         enableHighAccuracy: true, 
        //         timeout: 20000, 
        //         maximumAge: 1000 
        //     }
        // );

        // this.watchID = navigator.geolocation.watchPosition(
        //     (position) => {
        //         const lastPosition = JSON.stringify(position);
        //         this.setState({ lastPosition });
        //     },
        //     (error) => alert('Current ' + error.message), {
        //         enableHighAccuracy: true, 
        //         timeout: 2000, 
        //         maximumAge: 1000,
        //         distanceFilter: 5,
        //         useSignificantChanges: true
        //     }
        // );
    }

    // componentWillUnmount = () => {
    //     navigator.geolocation.clearWatch(this.watchID);
    // }

    findLocation() {
        this.setState({
            loading: true
        });

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const initialPosition = JSON.stringify(position);
                this.setState({ 
                    initialPosition,
                    loading: false
                });
            },
            (error) => {
                this.setState({
                    loading: false
                });
                alert('Initial ' + error.message);
            }, {
                enableHighAccuracy: true, 
                timeout: 20000, 
                maximumAge: 1000 
            }
        );
    }

    renderButton() {
        if (this.state.loading) {
            return <LoadingButton />
        }

        return <Button onPress={() => this.findLocation()}>Find Location</Button>
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.boldText}>
                    Initial position:
                </Text>
                
                <Text>
                    {this.state.initialPosition}
                </Text>
                
                {/* <Text style = {styles.boldText}>
                    Current position:
                </Text>
                
                <Text>
                    {this.state.lastPosition}
                </Text> */}

                {this.renderButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    }
});

export default SwichExample;
