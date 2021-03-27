import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import Ripple from 'react-native-material-ripple'
import * as actionCreators from '../../store/ActionCreators'
import Logo from '../../../assets/images/Oregon_Logo.png'


import Styles from './Styles'
const Login = (props) => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(actionCreators.login(phoneNumber, password))

    }

    return (
        <KeyboardAvoidingView behavior="height" style={Styles.container}>
            <Image style={Styles.image} source={Logo} />
            <View style={Styles.loginForm}>
                <View style={Styles.loginHeader}>
                    <Text style={Styles.txtHeader}>Hello There! You are Welcome to Login</Text>
                </View>
                <TextInput
                    style={Styles.input}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={(e) => setPhoneNumber(e)}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={true}
                />
                <Ripple onPress={handleLogin} style={Styles.button}>
                    <Text style={Styles.btnTxt}>Login</Text>
                </Ripple>
                <View style={Styles.links}>
                    <Text style={Styles.linkTxt}>Forgot Password?</Text>
                    <Text onPress={() => props.navigation.navigate('Signup')} style={Styles.linkTxt}>SignUp</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login
