import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import UserListScreen from '../screens/userlist';

// Define the parameter list for type safety
export type RootStackParamList = {
  Home: undefined;
  Profile: {
    userId: string;
    userName: string;
  };
  UserList: undefined;
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#218ed2ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Home Screen',
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            title: 'User Profile',
          }}
        />
        <Stack.Screen 
          name="UserList" 
          component={UserListScreen}
          options={{
            title: 'All Users',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;