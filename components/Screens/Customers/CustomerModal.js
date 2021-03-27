import React from 'react'
import { View, Text, Modal, TextInput } from 'react-native'
import Ripple from 'react-native-material-ripple'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../../constants'
import Styles from './Styles'
const CustomerModal = ({
    visible,
    close,
    setName,
    setPhoneNumber,
    setAddress,
    message,
    addCustomerHandler
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={Styles.customerMain}>
                <Text style={Styles.customerTxt1}>Add Customer</Text>
                <View style={Styles.customerForm}>
                    <Text>Name</Text>
                    <TextInput
                        style={{
                            height: 40,
                            fontSize: 20,
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.1)',
                            marginVertical: 10
                        }}
                        onChangeText={(e) => setName(e)}
                    />
                    <Text>Phone Number</Text>
                    <TextInput
                        style={{
                            height: 40,
                            fontSize: 20,
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.1)',
                            marginVertical: 10
                        }}
                        onChangeText={(e) => setPhoneNumber(e)}
                    />
                    <Text>Address</Text>
                    <TextInput
                        style={{
                            height: 40,
                            fontSize: 20,
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.1)',
                            marginVertical: 10
                        }}
                        onChangeText={(e) => setAddress(e)}
                    />
                </View>
                <Text style={{ color: 'red' }}>{message}</Text>
                <Ripple onPress={addCustomerHandler} style={Styles.button}>
                    <Text style={Styles.btnTxt}>Add Customer</Text>
                </Ripple>
                <View style={Styles.backButton}>
                    <Ionicons onPress={() => close(false)} name="chevron-back-outline" size={20} color={Colors.primary} />
                    <Text onPress={() => close(false)} style={{ color: Colors.primary }}>go back</Text>
                </View>
            </View>
        </Modal>
    )
}

export default CustomerModal
