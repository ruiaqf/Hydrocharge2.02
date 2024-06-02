import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './LoginPage';
import Home from './Home';
import Statistics from './Statistics';
import AccountDetails from './AccountDetails';
import Contacts from './Contacts';
import Information from './Information';
import Register from './Register';
import React from 'react';
import Alerts from './Alerts';
import { initializeApp } from 'firebase/app';
import ButtonGrid from './ButtonGrid';
import DeletedAlerts from './DeletedAlerts';

const firebaseConfig = {
  apiKey: "AIzaSyAwv1sAIQ7OSie5rclJpLU2v2ISNjcfaX4",
  authDomain: "hydrocharge-56b42.firebaseapp.com",
  projectId: "hydrocharge-56b42",
  storageBucket: "hydrocharge-56b42.appspot.com",
  messagingSenderId: "94771243424",
  appId: "1:94771243424:web:f754a97ee2a72eb34fdcc5",
  measurementId: "G-866YXG6DLK"
};

const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="ButtonGrid" component={ButtonGrid} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Statistics" component={Statistics} options={{ headerShown: false }}/>
        <Stack.Screen name="AccountDetails" component={AccountDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="Contacts" component={Contacts} options={{ headerShown: false }}/>
        <Stack.Screen name="Information" component={Information} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Alerts" component={Alerts} options={{ headerShown: false }}/>
        <Stack.Screen name="DeletedAlerts" component={DeletedAlerts} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}