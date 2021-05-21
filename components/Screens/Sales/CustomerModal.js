import React, { useState } from 'react'
import { View, Text, TextInput, } from 'react-native'
import ModalUI from '../UI/ModalUI'


const CustomerModal = () => {

    const [open, setOpen] = useState(false)
    const [customer, setCustomer] = useState('')

    return (
        <ModalUI visible={open} setOpen={setOpen}>
            <View style={Styles.inputRow}>
                <TextInput
                    style={{
                        height: 40,
                        fontSize: 20,
                        width: '85%',
                        paddingLeft: 10,
                        paddingVertical: 10
                    }}
                    placeholder="Enter Name"
                    onChangeText={(e) => setCustomer(e)}
                />
                <MaterialCommunityIcons name="magnify" size={40} color={'rgba(0,0,0,0.1)'} />
            </View>

        </ModalUI>
    )
}

export default CustomerModal
