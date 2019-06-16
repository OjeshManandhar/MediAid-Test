import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './screens/Home';
import Away from './screens/Away';
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Away: { screen: Away },
        Profile: { screen: Profile },
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp }
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            header: null
        }
    }
);

// simple render
export default createAppContainer(AppNavigator);


// Render through a class
// ------------------------------- 
/*
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
*/
// -------------------------------
