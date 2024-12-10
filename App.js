import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FacultyLoadProLogin from './FacultyLoadProLogin'; // Update path as per your structure
import Dashboard from './Dashboard'; // Update path as per your structure
import ProfilePage from './ProfilePage'; // Update path as per your structure
import SignIn from './SignIn'; // Update path as per your structure
import FacultySchedule from './FacultySchedule'; // Add FacultySchedule screen import
import OnlineClassApplication from './OnlineClassApplication'; // Add OnlineClassApplication screen import
import CertificationOfAccomplishment from './CertificationOfAccomplishment'; // Add CertificationOfAccomplishment screen import
import TeacherLoadProgram from './TeacherLoadProgram'; // Add TeacherLoadProgram screen import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FacultyLoadProLogin">
        <Stack.Screen
          name="FacultyLoadProLogin"
          component={FacultyLoadProLogin}
          options={{ headerShown: false }} // Hides the default header
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }} // Hides the default header
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ title: 'Profile' }} // You can customize the header title here
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="FacultySchedule"
          component={FacultySchedule}
          options={{ title: 'Faculty Schedule & Teaching Load' }}
        />
        <Stack.Screen
          name="OnlineClassApplication"
          component={OnlineClassApplication}
          options={{ title: 'Online Class Application Form' }}
        />
        <Stack.Screen
          name="CertificationOfAccomplishment"
          component={CertificationOfAccomplishment}
          options={{ title: 'Certification of Accomplishment' }}
        />
        <Stack.Screen
          name="TeacherLoadProgram"
          component={TeacherLoadProgram}
          options={{ title: 'Teacher Load Program' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
