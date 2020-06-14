import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Bills from '../screens/Bills';
import Settings from '../screens/Settings';
import User from '../screens/User';
import Bill from '../screens/Bill';
import Kitchen from '../screens/Kitchen';
const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Kitchen" component={Kitchen} />
        <Stack.Screen name="Bills" component={Bills} />
        <Stack.Screen name="Bill" component={Bill} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
