import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Account from './Personal/Account';

const Stack = createStackNavigator();

export default function HomeRouter({ navigation }) {
  


  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}
