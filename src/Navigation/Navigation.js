import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screen/auth/BottomTabs/Home';
import Settings from '../screen/auth/BottomTabs/Settings';
import Reports from '../screen/auth/BottomTabs/Reports';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/auth/loginScreen';


function StackNavigator(){
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown:false}}/>   
        </Stack.Navigator>
    )
}

function BottomTabs(){
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Reports" component={Reports} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      )
}


export default function Navigation(){
    return(
        <NavigationContainer>
        <StackNavigator />
        </NavigationContainer>
     )

}

const styles = StyleSheet.create({})