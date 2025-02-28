import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Account from './personal/Account';
import YourGIGs from './personal/gigs/YourGIGs';
import ChooseCategory from '../signup/ChooseCat';
import TitleGIG from './personal/gigs/create/title';
import PriceGIG from './personal/gigs/create/pricng';
import ImageGIG from './personal/gigs/create/image';
import ChooseCity from '../signup/ChooseCity';
import DescGIG from './personal/gigs/create/description';
import ViewGIG from './gigs/ViewGIG';

const Stack = createStackNavigator();

export default function HomeRouter({ navigation }) {
  


  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="YourGIGs" component={YourGIGs} />
        {/* CREATE GIG */}
        <Stack.Screen name="TitleGIG" component={TitleGIG} />
        <Stack.Screen name="PriceGIG" component={PriceGIG} />
        <Stack.Screen name="ImageGIG" component={ImageGIG} />
        <Stack.Screen name="DescGIG" component={DescGIG} />
        {/* VIEW GIG */}
        <Stack.Screen name="ViewGIG" component={ViewGIG} />
        {/*  */}
        <Stack.Screen name="ChooseCategory" component={ChooseCategory}  />
        <Stack.Screen name="ChooseCity" component={ChooseCity}  />
    </Stack.Navigator>
  );
}
