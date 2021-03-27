import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as actionCreators from '../../store/ActionCreators'

import Color from '../../constants'
import Styles from './Styles'
const Profile = (props) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)


    const logout = () => {
        dispatch(actionCreators.logout())
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.avatar}>
                <Ionicons name="person-outline" size={50} color={'#fff'} />
            </View>
            <View style={Styles.profileContainer}>
                <View style={Styles.profileDetails}>
                    <View style={Styles.detailColumn}>
                        <Text style={Styles.profileLable}>Username</Text>
                        <Text style={Styles.profileText}>{user.username}</Text>
                    </View>
                    <View style={Styles.detailColumn}>
                        <Text style={Styles.profileLable} >Phone Number</Text>
                        <Text style={Styles.profileText} >{user.phoneNumber}</Text>
                    </View>
                </View>
                <View style={Styles.detailColumn1}>
                    <Text onPress={logout} style={Styles.logout}>Logout</Text>
                    <Ionicons onPress={logout} name="log-out-outline" size={20} color={Color.primary} />
                </View>
            </View>
        </View>
    )
}

export default Profile
