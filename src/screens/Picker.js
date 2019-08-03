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

    chooseEndDate() {
        const start = new Date(this.state.startDate),
            end = new Date(this.state.endDate);

        // console.log('startDate:', start.getTime());
        // console.log('endDate:', end.getTime());
        // console.log('end < start:', end < start);

        if (end < start) {
            this.setState({
                endDate: this.state.startDate
            });
        }

        // console.log('startDate:', this.state.startDate);
        // console.log('endDate:', this.state.endDate);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Start Date:</Text>
                <DateTimePicker 
                    initialDate={this.state.startDate} 
                    minDate={new Date().toString()}
                    onDateChange={(date) => {
                        this.setState({
                            startDate: date
                        });
                        this.chooseEndDate();
                    }}
                />

                <Text>End Date:</Text>
                <DateTimePicker 
                    initialDate={this.state.endDate} 
                    minDate={this.state.startDate}
                    onDateChange={(date) => 
                        this.setState({
                            endDate: date
                        })
                    }
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
