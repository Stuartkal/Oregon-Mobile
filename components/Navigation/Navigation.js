import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from '../Screens/Products/Products'
import Home from '../Screens/Home/Home'
import Customers from '../Screens/Customers/Customers'
import Sales from '../Screens/Sales/Sales'
import Debtors from '../Screens/Home/Debtors'
import Profile from '../Screens/Profile/Profile'
import Login from '../Screens/Auth/Login'
import SignUp from '../Screens/Auth/SignUp'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../constants/'
const AppStackNavigator = createStackNavigator()
const AppTabNavigator = createBottomTabNavigator()

export const AppNavigation = () => {

    const defaultOptions = {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTitleStyle: {
            fontSize: 30
        },
        headerTintColor: Colors.secondary
    }
    return (
        <AppStackNavigator.Navigator screenOptions={defaultOptions}>
            <AppStackNavigator.Screen name="Oregon" component={Home} options={{ headerShown: false }} />
            <AppStackNavigator.Screen name="Customers" component={Customers} />
            <AppStackNavigator.Screen name="Debtors" component={Debtors} options={{ headerShown: false }} />
            <AppStackNavigator.Screen name="Products" component={Products} />
            <AppStackNavigator.Screen name="Sales" component={Sales} />
        </AppStackNavigator.Navigator>
    )
}

export const ProfileStack = () => {

    const defaultOptions = {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTitleStyle: {
            fontSize: 30
        },
        headerTintColor: Colors.secondary
    }
    return (
        <AppStackNavigator.Navigator screenOptions={defaultOptions}>
            <AppTabNavigator.Screen name="Account" component={Profile} options={{ headerShown: false }} />
        </AppStackNavigator.Navigator>
    )
}


export const TabNavigator = () => {
    return (
        <AppTabNavigator.Navigator tabBarOptions={{ activeTintColor: Colors.primary, style: { paddingVertical: 10 } }}>
            <AppTabNavigator.Screen name="Oregon" component={AppNavigation} options={{
                tabBarIcon: props => {
                    return <MaterialIcons name="domain" size={40} color={props.color} />
                }
            }} />
            <AppTabNavigator.Screen name="Account" component={ProfileStack} options={{
                tabBarIcon: props => {
                    return <MaterialIcons name="person" size={40} color={props.color} />
                }
            }} />
        </AppTabNavigator.Navigator>
    )
}

export const Authentication = () => {
    return (
        <AppStackNavigator.Navigator>
            <AppStackNavigator.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <AppStackNavigator.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
            <AppStackNavigator.Screen name="Home" component={TabNavigator} />
        </AppStackNavigator.Navigator>
    )
}