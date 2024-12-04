import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FacultyLoadProLogin from './index'; // Login screen
import Dashboard from './dashboard'; // Dashboard screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FacultyLoadProLogin">
        {/* Login Screen */}
        <Stack.Screen
          name="FacultyLoadProLogin" // This is your login screen name
          component={FacultyLoadProLogin}
          options={{ headerShown: false }}
        />
        
        {/* Dashboard Screen */}
        <Stack.Screen
          name='dashboard' // Ensure this matches the name used in navigation
          component={Dashboard}
          options={{ headerShown: false }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
