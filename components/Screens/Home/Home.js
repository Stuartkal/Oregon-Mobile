import React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import FontAwsesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'
import Colors from '../../constants/'

import Styles from './Styles'
const Home = (props) => {

    const user = useSelector(state => state.auth.user)

    const screenWidth = Dimensions.get('window').width

    return (
        <View style={Styles.container}>
            <Text style={Styles.welcomeTxt}>Welcome {user.username}</Text>
            <View style={Styles.homeRow}>
                <Ripple onPress={() => props.navigation.navigate('Products')} style={Styles.rowCard}>
                    <Text style={Styles.cardTxt}>Stock</Text>
                </Ripple>
                <Ripple style={Styles.rowCard}>
                    <Text style={Styles.cardTxt}>Debtors</Text>
                </Ripple>
                <Ripple style={Styles.rowCard}>
                    <Text style={Styles.cardTxt}>Creditors</Text>
                </Ripple>
                <Ripple onPress={() => props.navigation.navigate('Customers')} style={Styles.rowCard}>
                    <Text style={Styles.cardTxt}>Customers</Text>
                </Ripple>
            </View>
            <View style={Styles.homeRow}>
                <Ripple onPress={() => props.navigation.navigate('Sales')} style={Styles.iconColumn}>
                    <MaterialCommunityIcons name="cash-plus" size={30} color={Colors.secondary} />
                    <Text style={Styles.labelTxt}>Sales</Text>
                </Ripple>
                <Ripple onPress={() => props.navigation.navigate('Customers')} style={Styles.iconColumn}>
                    <FontAwsesome name="users" size={30} color={Colors.secondary} />
                    <Text style={Styles.labelTxt}>Payments</Text>
                </Ripple>
                <Ripple onPress={() => props.navigation.navigate('Products')} style={Styles.iconColumn}>
                    <MaterialCommunityIcons name="cash-multiple" size={30} color={Colors.secondary} />
                    <Text style={Styles.labelTxt}>Expenses</Text>
                </Ripple>
            </View>
            <View style={Styles.recent}>
                <ScrollView contentContainerStyle={{ width: screenWidth }} style={Styles.Scoll}>
                    <View style={Styles.scrollInner}>
                        <Text style={Styles.scrollTxt}>Recent Activities</Text>
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}

export default Home
