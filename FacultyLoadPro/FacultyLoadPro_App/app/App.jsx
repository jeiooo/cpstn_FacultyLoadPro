import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import DashboardScreen from './dashboard';
import SignUpScreen from './SignUp'; 
import TestScreen from './test';

import { Provider } from '../components/globalContext/globalContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          {/* <Stack.Screen name="TestScreen" component={TestScreen} /> */}
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;