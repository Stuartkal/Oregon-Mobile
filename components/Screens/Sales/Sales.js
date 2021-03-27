import React, { useState } from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'
import SalesModal from './SalesModal'

import Colors from '../../constants/'
import Styles from './Styles'
const Sales = () => {

    const [open, setOpen] = useState(false)

    return (
        <View style={Styles.container}>
            <SalesModal visible={open} close={setOpen} />
            <Text style={Styles.salesTxt}>No Sales Found</Text>
            <Ripple onPress={() => setOpen(true)} rippleCentered={true} rippleSize={150} style={Styles.addButton}>
                <MaterialCommunityIcons name="cash-plus" size={40} color={Colors.secondary} />
            </Ripple>
        </View>
    )
}

export default Sales
