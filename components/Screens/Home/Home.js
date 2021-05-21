import React, { useEffect } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import FontAwsesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'
import Colors from '../../constants/'
import moment from 'moment'
import * as actionCreators from '../../store/ActionCreators'

import Styles from './Styles'
const Home = (props) => {

    const user = useSelector(state => state.auth.user)
    const recent = useSelector(state => state.request.recentActivity)
    // console.log(recent, 'ken')

    const screenWidth = Dimensions.get('window').width

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCreators.getActivity())
    }, [])

    return (
        <View style={Styles.container}>

            {/* <View style={Styles.recent}> */}
            <ScrollView style={Styles.recent}>
                <Text style={Styles.welcomeTxt}>Welcome {user.username}</Text>
                <View style={Styles.homeRow}>
                    <Ripple onPress={() => props.navigation.navigate('Products')} style={Styles.rowCard}>
                        <Text style={Styles.cardTxt}>Stock</Text>
                    </Ripple>
                    <Ripple onPress={() => props.navigation.navigate('Customers')} style={Styles.rowCard}>
                        <Text style={Styles.cardTxt}>Customers</Text>
                    </Ripple>
                    <Ripple onPress={() => props.navigation.navigate('Debtors')} style={Styles.rowCard}>
                        <Text style={Styles.cardTxt}>Debtors</Text>
                    </Ripple>
                    <Ripple style={Styles.rowCard}>
                        <Text style={Styles.cardTxt}>Creditors</Text>
                    </Ripple>
                </View>
                <View style={Styles.homeRow}>
                    <Ripple onPress={() => props.navigation.navigate('Sales')} style={Styles.iconColumn}>
                        <MaterialCommunityIcons name="cash" size={30} color={Colors.secondary} />
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
                <View style={Styles.scrollInner}>
                    <Text style={Styles.scrollTxt}>Recent Activities</Text>
                    {recent.map(item => (
                        <View style={Styles.recentActivity} key={item._id}>
                            <View style={Styles.recentColumn}>
                                <Text style={Styles.recentTxt1}>{item.activity}</Text>
                                <View style={Styles.unitRow}>
                                    <Text style={Styles.recentTxt2} >{item.name}</Text>
                                    {/* <Text style={Styles.recentTxt2}>{item.unit}</Text> */}
                                </View>
                            </View>
                            <Text style={Styles.recentTxt3}>{moment(item.dateCreated).fromNow()}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* </View> */}
        </View>
    )
}

export default Home
