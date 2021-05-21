import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Modal, TextInput, ScrollView, Dimensions } from 'react-native'
import Ripple from 'react-native-material-ripple'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as actionCreators from '../../store/ActionCreators'

import Colors from '../../constants'
import Styles from './Styles'
const ProductModal = ({
    visible,
    close,
    setShop,
    setName,
    setUnit,
    setQuantity,
    setCost,
    setPrice,
    addProduct,
    message
}) => {

    const screenWidth = Dimensions.get('window').width;

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(actionCreators.getProducts())
        close(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={Styles.productMain}>
                <ScrollView contentContainerStyle={{ width: screenWidth, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                    <Text style={Styles.productTxt1}>Add Product</Text>
                    <View style={Styles.productForm}>
                        <Text>Shop</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 14,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                            onChangeText={(e) => setShop(e)}
                        />
                        <Text>Product name</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 14,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                            onChangeText={(e) => setName(e)}
                        />
                        <Text>Units</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 14,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                            onChangeText={(e) => setUnit(e)}
                        />
                        <Text>Quantity</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 14,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                            onChangeText={(e) => setQuantity(e)}
                        />
                        <Text>Buy Price</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 14,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                            onChangeText={(e) => setCost(e)}
                        />
                        <Text>Sell Price</Text>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 14,
                                width: '100%',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.1)',
                                marginVertical: 10
                            }}
                            onChangeText={(e) => setPrice(e)}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{message}</Text>
                    <Ripple onPress={addProduct} style={Styles.button}>
                        <Text style={Styles.btnTxt}>Add Product</Text>
                    </Ripple>
                    <View style={Styles.backButton}>
                        <Ionicons onPress={closeModal} name="chevron-back-outline" size={20} color={Colors.primary} />
                        <Text onPress={closeModal} style={{ color: Colors.primary }}>go back</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default ProductModal
