import React from 'react';
import { 
    View,
    ScrollView,
    StyleSheet,
    TextInput,
    Text,
    Picker
} from 'react-native';

import Button from './../components/Button';
import LoadingButton from './../components/LoadingButton';
import NavBar from './../components/NavBar';

class Database extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            location: null,
            lat: null,
            lang: null,
            type: null,
            fee: null
        };
    }

    renderButton() {
        if (this.state.loadingButton) {
            return <LoadingButton />
        }

        return <Button onPress={() => this.signIn()}>Add data</Button>
    }

    render() {
        return(
            <View style = { styles.container }>
                <ScrollView contentContainerStyle = { styles.content }>
                    <Text style={styles.labelStyle} >Name</Text>
                    <TextInput 
                        value={this.state.name}
                        style={styles.inputBoxStyle}
                        onChangeText={name => this.setState({ name })}
                    />

                    <Text style={styles.labelStyle} >Location</Text>
                    <TextInput 
                        value={this.state.location}
                        style={styles.inputBoxStyle}
                        onChangeText={location => this.setState({ location })}
                    />

                    <Text style={styles.labelStyle} >Latitude</Text>
                    <TextInput 
                        value={this.state.lat}
                        style={styles.inputBoxStyle}
                        onChangeText={lat => this.setState({ lat })}
                    />

                    <Text style={styles.labelStyle} >Longitude</Text>
                    <TextInput 
                        value={this.state.lang}
                        style={styles.inputBoxStyle}
                        onChangeText={lang => this.setState({ lang })}
                    />

                    <Text style={styles.labelStyle} >Type</Text>
                    <View style={styles.inputBoxStyle}>
                        <Picker
                            selectedValue={this.state.type}
                            style={{ height: 35 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({type: itemValue})
                            }
                        >
                                <Picker.Item label="Private" value="private" />
                                <Picker.Item label="Public" value="public" />
                        </Picker>
                    </View>

                    <Text style={styles.labelStyle} >General Fee</Text>
                    <TextInput 
                        value={this.state.fee}
                        style={styles.inputBoxStyle}
                        onChangeText={fee => this.setState({ fee })}
                    />

                    <View style={styles.buttonStyle}>
                        { this.renderButton() }
                    </View>

                    <View style={styles.buttonStyle}>
                        { this.renderButton() }
                    </View>
                </ScrollView>

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
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        color: '#7777ff',
        marginBottom: 5
    },
    inputBoxStyle: {
        width: 300,
        height: 40,
        fontSize: 18,
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 20,
        paddingBottom: 5
    },
    buttonStyle: {
        marginBottom: 20,
    },
    navBarStyle: {
        height: 50
    }
});

export default Database;
