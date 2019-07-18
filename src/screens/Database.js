import React from 'react';
import { 
    View,
    StyleSheet
} from 'react-native';

import Button from './../components/Button';
import LoadingButton from './../components/LoadingButton';
import NavBar from './../components/NavBar';

class Database extends React.Component {
    render() {
        return(
            <View style = { styles.container }>
                <View style = { styles.content }>

                </View>

                <View style = { styles.navBarStyle } >
                    <NavBar navigation = {this.props.navigation} selected = 'Home' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBarStyle: {
        height: 50
    }
});

export default Database;
