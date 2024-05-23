import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './LoginPage';
import Home from './Home';
import Statistics from './Statistics';
import AccountDetails from './AccountDetails';
import Contacts from './Contacts';
import Information from './Information';
import Register from './Register';
import React, { useEffect } from 'react';
import { setupDatabase } from './db';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setupDatabase();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Statistics" component={Statistics} options={{ headerShown: false }}/>
        <Stack.Screen name="AccountDetails" component={AccountDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="Contacts" component={Contacts} options={{ headerShown: false }}/>
        <Stack.Screen name="Information" component={Information} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}