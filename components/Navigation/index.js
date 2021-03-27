import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { Authentication, TabNavigator } from './Navigation'


const index = () => {

    const auth = useSelector(state => state.auth.authenticated)

    return (
        <NavigationContainer>
            {!auth && <Authentication />}
            {auth && <TabNavigator />}
        </NavigationContainer>
    )
}

export default index
