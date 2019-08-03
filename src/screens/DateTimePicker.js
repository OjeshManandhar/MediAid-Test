import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    DatePickerAndroid,
    TimePickerAndroid,
    StyleSheet
} from 'react-native';

class DateTimePicker extends React.Component {
    static navigationOptions = {
        header: undefined,
        title: 'Date Time Picker'
    };

    constructor(props) {
        super(props);

        this.state={
            date: new Date().toString()
        }

        this.showPickers = this.showPickers.bind(this);
    }

    showPickers = async () => {
        // variable to store selected date and time
        let selected = new Date();

        // Date Picker
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date(this.state.date),
                minDate: new Date(),
                mode: 'calendar'
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day

                selected.setFullYear(year, month, day);

                console.log('selected date:', selected.getFullYear(), selected.getMonth() + 1, selected.getDate());
        }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }

        // Time Picker
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: new Date().getHours,
                minute: new Date().getMinutes,
                is24Hour: true, // Will display '2 PM'
            });

            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)

                selected.setHours(hour);
                selected.setMinutes(minute);

                console.log('selected time:', selected.getHours(), selected.getMinutes());
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }

        console.log('Selected:', selected);

        this.setState({
            date: selected
        });
    }

    dateToText(d) {
        const date = new Date(d);

        return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={() => this.showPickers()}
                >
                    <View style={styles.pickerContainer}>
                        <Text>{this.dateToText(this.state.date)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerContainer: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'gray'
    }
});

export default DateTimePicker;
