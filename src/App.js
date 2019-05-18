import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Home from './screens/Home';
import Away from './screens/Away';

class App extends Component {
    render() {
        return (
            <View style = { styles.viewStyle }>
                <Home />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    }
});

export default App;
