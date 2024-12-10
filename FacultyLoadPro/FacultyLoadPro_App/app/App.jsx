import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import DashboardScreen from './dashboard';
import SignUpScreen from './SignUp'; 
import TestScreen from './test';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        {/* <Stack.Screen name="TestScreen" component={TestScreen} /> */}
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;