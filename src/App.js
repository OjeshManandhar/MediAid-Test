import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'firebase';
import firebaseKeys from './assets/firebaseKeys';

import Home from './screens/Home';
import Away from './screens/Away';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Away: { screen: Away },
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
