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
    constructor(props) {
        super(props);

        this.state={
            date: new Date(this.props.date)
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
                date: this.state.date,
                minDate: new Date(),
                mode: 'calendar'
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day

                selected.setFullYear(year, month, day);

                console.log('selected date:', selected.getFullYear(), selected.getMonth() + 1, selected.getDate());

                // Time Picker will only be called if date is picked and not Canceled
                try {
                    const {action, hour, minute} = await TimePickerAndroid.open({
                        hour: this.state.date.getHours(),
                        minute: this.state.date.getMinutes(),
                        is24Hour: true, // Will display '2 PM'
                    });
        
                    if (action !== TimePickerAndroid.dismissedAction) {
                        // Selected hour (0-23), minute (0-59)
        
                        selected.setHours(hour);
                        selected.setMinutes(minute);
        
                        console.log('selected time:', selected.getHours(), selected.getMinutes());

                        // Save the selected date to state
                        console.log('Selected:', selected);
                        this.setState({
                            date: selected.toString()
                        });

                        // To return selected date as string 
                        this.props.onDateChange(selected.toString());
                    }
                } catch ({code, message}) {
                    console.warn('Cannot open time picker', message);
                }
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    dateToText(d) {
        const date = new Date(d);
        var text = `${date.getFullYear()} - `;

        if ((date.getMonth() + 1) < 10) {
            text += `0${date.getMonth() + 1} - `;
        } else {
            text += `${date.getMonth() + 1} - `;
        }

        if (date.getDate() < 10) {
            text += `0${date.getDate()}   `;
        } else {
            text += `${date.getDate()}   `;
        }

        if (date.getHours() === 0) {
            text += '12 : ';
        } else if (date.getHours() < 10) {
            text += `0${date.getHours()} : `;
        } else if (date.getHours() >= 12) {
            if ((date.getHours() - 12) === 0) {
                text += '12 : ';
            } else if ((date.getHours() - 12) < 10) {
                text += `0${date.getHours() - 12} : `;
            } else {
                text =+ `${date.getHours() - 12} : `;
            }
        }

        if (date.getMinutes() < 10) {
            text += `0${date.getMinutes()} `;
        } else {
            text += `${date.getMinutes()} `;
        }

        if (date.getHours() < 12) {
            text += 'AM';
        } else {
            text += 'PM';
        }

        return text;
    }

    render() {
        return(
            <TouchableOpacity 
                onPress={() => this.showPickers()}
            >
                <View style={styles.pickerContainer}>
                    <Text style={{ fontSize: 18 }}>{this.dateToText(this.state.date)}</Text>
                </View>
            </TouchableOpacity>
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
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'gray'
    }
});

export default DateTimePicker;
