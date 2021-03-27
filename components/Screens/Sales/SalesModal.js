import React from 'react'
import { View, Text, Modal, TextInput, ScrollView, Dimensions } from 'react-native'
import Ripple from 'react-native-material-ripple'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../../constants'
import Styles from './Styles'

const SalesModal = ({ visible, close }) => {

    const screenWidth = Dimensions.get('window').width;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={Styles.saleMain}>
                <ScrollView contentContainerStyle={{ width: screenWidth, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                    <Text style={Styles.saleTxt1}>Add Sale</Text>
                    <View style={Styles.saleForm}>
                        <Text>Add Product</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                        />
                        <Text>Add Customer</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                        />
                        <Text>Cost</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                        />
                        <Text>Sell Price</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                        />
                        <Text>Purchase Price</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                        />
                        <Text>Profit</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                        />
                    </View>
                    <Ripple style={Styles.button}>
                        <Text style={Styles.btnTxt}>Add Sale</Text>
                    </Ripple>
                    <View style={Styles.backButton}>
                        <Ionicons onPress={() => close(false)} name="chevron-back-outline" size={20} color={Colors.primary} />
                        <Text onPress={() => close(false)} style={{ color: Colors.primary }}>go back</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default SalesModal
