import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import DateTimePicker from './../components/DateTimePicker';

class Picker extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'Picker'
    };

    constructor(props) {
        super(props);

        this.state={
            startDate: new Date().toString(),
            endDate: new Date().toString()
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Start Date:</Text>
                <DateTimePicker 
                    initialDate={this.state.startDate} 
                    onDateChange={(date) => this.setState({
                        startDate: date
                    })} 
                />

                <Text>End Date:</Text>
                <DateTimePicker 
                    initialDate={this.state.startDate} 
                    onDateChange={(date) => this.setState({
                        endDate: date
                    })} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Picker;
