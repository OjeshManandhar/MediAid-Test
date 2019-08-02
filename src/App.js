import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'firebase';
import firebaseKeys from './assets/firebaseKeys';

import Home from './screens/Home';
import Away from './screens/Away';
import AddData from './screens/AddData';
import ViewData from './screens/ViewData';
import UserLoc from './screens/UserLoc';
import DateTimePicker from './screens/DateTimePicker';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Away: { screen: Away },
        AddData: { screen: AddData },
        ViewData: { screen: ViewData },
        UserLoc: { screen: UserLoc },
        DTPicker: { screen: DateTimePicker }
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            header: null
        }
    }
);

// simple render
//export default createAppContainer(AppNavigator);


// Render through a class
// ------------------------------- 
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp(firebaseKeys);
    }
    
    render() {
        return <AppContainer />;
    }
}
// -------------------------------
