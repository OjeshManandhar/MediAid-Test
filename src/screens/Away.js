import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from 'firebase';

import Profile from './../components/Profile';
import Loading from './../components/Loading';
import NavBar from './../components/NavBar';

class Away extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'Away'
    };

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: null,
            user: null
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Profile user={ this.state.user } />
            case false:
                this.props.navigation.navigate('SignIn');
            default:
                return <Loading />
        }
    }
    
    render() {
        console.log('Away page');

        const { viewStyle, navBarStyle, contentStyle } = styles;

        return (
            <View style = { viewStyle }>
                <View style = { contentStyle } >
                    {this.renderContent()}
                </View>
                <View style = { navBarStyle } >
                    <NavBar navigation = {this.props.navigation} selected = 'Away' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    contentStyle: {
        flex: 1
    },
    navBarStyle: {
        height: 50
    }
});

export default Away;
