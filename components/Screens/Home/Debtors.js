import React, { useEffect } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Ripple from 'react-native-material-ripple'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../constants/'
import moment from 'moment'
import * as actionCreators from '../../store/ActionCreators'

import Styles from './Styles'
const Debtors = (props) => {

    const sales = useSelector(state => state.request.sales)

    const screenWidth = Dimensions.get('window').width

    const debtors = sales.filter(el => el.credit === true)
    console.log(debtors, 'new damn')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCreators.getSales())
    }, [])

    return (
        <View style={Styles.debtorContainer}>
            <ScrollView style={Styles.debtors}>
                <View style={Styles.debtorsRow}>
                    <Ionicons onPress={() => props.navigation.navigate('Oregon')} name="arrow-back-outline" size={40} color={Colors.primary} />
                    <Text style={Styles.debtorTxt}>Debtors</Text>
                </View>
                <View style={Styles.scrollInner}>
                    {debtors.map(debtor => (
                        <View style={Styles.debtor} key={debtor._id}>
                            <View style={Styles.debtorIcon}>
                                <MaterialCommunityIcons name="account-cash-outline" size={80} color={Colors.primary} />
                            </View>
                            <View style={Styles.debtorColumn}>
                                <Text style={Styles.debtorTxt1}>{debtor.customer}</Text>
                                <View style={Styles.balanceRow}>
                                    <Text>Product: </Text>
                                    <Text style={Styles.debtorTxt2}>{debtor.customer}</Text>
                                </View>
                                <View style={Styles.balanceRow}>
                                    <Text>Date: </Text>
                                    <Text style={Styles.debtorTxt2}>{moment(debtor.dateCreated).fromNow()}</Text>
                                </View>
                                <View style={Styles.balanceRow}>
                                    <Text>Balnace: </Text>
                                    <Text style={Styles.debtorTxt3}>Shs {debtor.balance}</Text>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.txtFaint} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default Debtors
