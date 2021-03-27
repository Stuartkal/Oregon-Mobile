import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TextInput, Image, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import Ripple from 'react-native-material-ripple'
import * as actionCreators from '../../store/ActionCreators'
import Logo from '../../../assets/images/Oregon_Logo.png'

import Styles from './Styles'
const SignUp = (props) => {

    const screenWidth = Dimensions.get('window').width;

    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleLSignUp = () => {
        dispatch(actionCreators.signUp(username, phoneNumber, password, (res) => {
            if (res.success === true) {
                setError('Successfully Registered, User!')
            }
        }))
    }

    useEffect(() => {
        setError('')
    }, [])

    return (
        <KeyboardAvoidingView behavior="height" style={Styles.container}>
            <ScrollView contentContainerStyle={{ width: screenWidth, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                <Image style={Styles.image} source={Logo} />
                <View style={Styles.loginForm}>
                    <View style={Styles.loginHeader}>
                        <Text style={Styles.txtHeader1}>Hello There! You are Welcome to SignUp</Text>
                    </View>
                    <TextInput
                        style={Styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={(e) => setUsername(e)}
                    />
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
                    <Ripple onPress={handleLSignUp} style={Styles.button}>
                        <Text style={Styles.btnTxt}>SignUp</Text>
                    </Ripple>
                    <View style={Styles.links}>
                        <Text style={Styles.linkTxt}>Already Have An Account?</Text>
                        <Text onPress={() => props.navigation.navigate('Login')} style={Styles.linkTxt}>SignIn</Text>
                    </View>
                </View>
                <Text style={{ color: 'red', marginVertical: 20 }}>{error}</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUp
