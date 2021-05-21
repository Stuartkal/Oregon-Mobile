import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import moment from 'moment'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'
import SalesModal from './SalesModal'
import * as actionCreators from '../../store/ActionCreators'

import Colors from '../../constants/'
import Styles from './Styles'
const Sales = () => {

    const screenWidth = Dimensions.get('window').width

    const [open, setOpen] = useState(false)

    const sales = useSelector(state => state.request.sales)
    // console.log(sales, 'yee')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCreators.getSales())
    }, [])

    return (
        <View style={Styles.container}>
            <SalesModal visible={open} close={setOpen} />
            <ScrollView contentContainerStyle={{ width: screenWidth }}>
                {sales ? sales.map(sale => (
                    <View key={sale._id} style={Styles.salesDetails}>
                        <View style={Styles.detailsRow}>
                            <MaterialCommunityIcons name="cash-multiple" size={80} color={Colors.primary} />
                            <View style={Styles.detailsColumn}>
                                <Text style={Styles.label1}>{sale.product}</Text>
                                <View style={Styles.detailsRow}>
                                    <Text style={Styles.label2}>Buyer: </Text>
                                    <Text>{sale.customer}</Text>
                                </View>
                                <View style={Styles.detailsRow}>
                                    <Text style={Styles.label2}>Contact: </Text>
                                    <Text>0708970697</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={Styles.label3}>{moment(sale.dateCreated).fromNow()}</Text>
                    </View>
                ))
                    :
                    <Text style={Styles.salesTxt}>No Sales Found</Text>
                }
            </ScrollView>
            <Ripple onPress={() => setOpen(true)} rippleCentered={true} rippleSize={150} style={Styles.addButton}>
                <MaterialCommunityIcons name="cash-plus" size={40} color={Colors.secondary} />
            </Ripple>
        </View>
    )
}

export default Sales
