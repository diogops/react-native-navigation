import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home';
import TopNav from './TopNav';

const StackNavigator = createNativeStackNavigator();

export default function Stack(props) {
    return (
        <StackNavigator.Navigator
            screenOptions={{ headerShown: false }}
        >
            <StackNavigator.Screen name="topnav" component={TopNav} />
        </StackNavigator.Navigator>
    )
}