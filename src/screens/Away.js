import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from 'firebase';

import Profile from './../components/Profile';
import Loading from './../components/Loading';
import SignIn from './../components/SignIn';
import SignUp from './../components/SignUp';
import NavBar from './../components/NavBar';

class Away extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // compToRender => Component To Render
            // can have followinf values:
            // loading, profile, signIn, signUp
            compToRender: 'loading',
            user: null
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    compToRender: 'profile',
                    user: user
                });
            } else {
                this.setState({ compToRender: 'signIn' });
            }
        });
    }

    updateState(newState) {
        this.setState(newState);
    }

    renderContent() {
        if (this.state.compToRender === 'profile')
            return <Profile />
        else if (this.state.compToRender === 'signIn')
            return <SignIn />
        else if (this.state.compToRender === 'signUp')
            return <SignUp />
        else
            return <Loading />
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
