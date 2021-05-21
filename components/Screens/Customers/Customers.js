import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'
import CustomerModal from './CustomerModal'
import * as actionCreators from '../../store/ActionCreators'

import Colors from '../../constants/'
import Styles from './Styles'
const Customers = () => {

    const screenWidth = Dimensions.get('window').width

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const customers = useSelector(state => state.request.customers)
    // console.log(customers, 'damn')



    useEffect(() => {
        setMessage('')
        dispatch(actionCreators.getCustomers())
    }, [])

    const addCustomerHandler = () => {
        if (name.length === 0 || phoneNumber.length === 0) {
            return setMessage('Invalid Entry')
        }
        dispatch(actionCreators.addCustomer(name, phoneNumber, address, (res) => {
            if (res.success === true) {
                setName('')
                setPhoneNumber('')
                setAddress('')
                setMessage('Customer added Successfully')
                dispatch(actionCreators.getCustomers())
                dispatch(actionCreators.addActivity({ activity: 'Added Customer', name: name }))
                dispatch(actionCreators.getActivity())
            }
        }))
    }

    const [open, setOpen] = useState(false)

    return (
        <View style={Styles.container}>
            <Ripple onPress={() => setOpen(true)} rippleCentered={true} rippleSize={150} style={Styles.addButton}>
                <MaterialCommunityIcons name="account-plus" size={40} color={Colors.secondary} />
            </Ripple>
            <CustomerModal
                visible={open}
                close={setOpen}
                setName={setName}
                setPhoneNumber={setPhoneNumber}
                setAddress={setAddress}
                message={message}
                addCustomerHandler={addCustomerHandler}
            />
            {/* <Text style={Styles.customerTxt}>No Customers Found</Text> */}
            <ScrollView contentContainerStyle={{ width: screenWidth }}>
                {customers.map(customer => (
                    <View key={customer._id} style={Styles.productDetails}>
                        <View style={Styles.detailsRow}>
                            <MaterialCommunityIcons style={Styles.icon} name="account-circle" size={80} color={Colors.primary} />
                            <View>
                                <Text style={Styles.label1}>{customer.name}</Text>
                                <View style={Styles.detailsRow}>
                                    <Text style={Styles.label2}>{customer.phoneNumber} </Text>
                                    {/* <Text>yes</Text> */}
                                </View>
                                {/* <View style={Styles.detailsRow}>
                                <Text style={Styles.label2}>Qty:</Text>
                                <Text>yes</Text>
                            </View> */}
                            </View>
                        </View>
                        {/* <Text style={Styles.label3}>time</Text> */}
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Customers
