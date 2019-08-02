import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class DateTimePicker extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'Date Time Picker'
    };

    render() {
        return(
            <View style={styles.container}>
                <Text>Date Time Picker</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DateTimePicker;
