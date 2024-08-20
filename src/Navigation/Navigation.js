import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/BottomTabs/Home';
import Report from '../screen/BottomTabs/Report';
import Settings from '../screen/BottomTabs/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screen/auth/LoginScreen';
import Transcations from '../screen/MoneyManagerTabs/Transcations';
import Stats from '../screen/MoneyManagerTabs/Stats';
import Accounts from '../screen/MoneyManagerTabs/Accounts';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AddExpense from '../screen/MoneyManagerTabs/AddExpense';
import AddNew from '../screen/MoneyManagerTabs/AddNew';

function BottomTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Report}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="stats-chart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MoneyManagerTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Transcations') {
            iconName = 'home-outline';
          } else if (route.name === 'Stats') {
            iconName = 'stats-chart-outline';
          } else if (route.name === 'Accounts') {
            iconName = 'settings-outline';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#fff', // Customize active tab color
        tabBarInactiveTintColor: '#a0a3c0', // Customize inactive tab color
        tabBarStyle: {
          backgroundColor: '#414781', // Customize background color here
          paddingBottom: 10, // Customize padding if needed
        },
      })}
    >
      <Tab.Screen
        name="Transcations"
        component={Transcations}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text style={styles.headerTitle}>Transcations</Text>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" size={25} color="#fff" style={styles.headerIcon} />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Calendar icon pressed')}>
              <Icon name="calendar-outline" size={25} color="#fff" style={styles.headerIcon} />
              </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#3b53bd', // Set your app bar background color here
          },
          headerTintColor: '#fff', // Set the color of the header title and icons
        })}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text style={styles.headerTitle}>Stats</Text>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" size={25} color="#fff" style={styles.headerIcon} />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Calendar icon pressed')}>
              <Icon name="calendar-outline" size={25} color="#fff" style={styles.headerIcon} />
              </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#3b53bd', // Set your app bar background color here
          },
          headerTintColor: '#fff', // Set the color of the header title and icons
        })}
      />
    <Tab.Screen
        name="Accounts"
        component={Accounts}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text style={styles.headerTitle}>Accounts</Text>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" size={25} color="#fff" style={styles.headerIcon} />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Calendar icon pressed')}>
              <Icon name="calendar-outline" size={25} color="#fff" style={styles.headerIcon} />
              </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#3b53bd', // Set your app bar background color here
          },
          headerTintColor: '#fff', // Set the color of the header title and icons
        })}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="MoneyManagerTabs" component={MoneyManagerTabs} options={{ headerShown: false }} />
      <Stack.Screen name="AddExpense" component={AddExpense} options={{headerStyle:{
        backgroundColor:"#1c274c"
      },
      headerTintColor:"#fff"}} />
      <Stack.Screen name="AddNew" component={AddNew} options={{headerStyle:{
        backgroundColor:"#1c274c"},headerTintColor:"#fff"}} />
      
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Title color
  },
  headerIcon: {
    marginHorizontal: 10, // Space between icons and edges
  },
});