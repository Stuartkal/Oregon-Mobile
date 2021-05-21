import React, { useState, useEffect } from 'react'
import { View, Text, Modal, TextInput, ScrollView, Dimensions, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Ripple from 'react-native-material-ripple'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ModalUI from '../UI/ModalUI'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as actionCreators from '../../store/ActionCreators'

import Colors from '../../constants'
import Styles from './Styles'
const SalesModal = ({ visible, close }) => {

    const screenWidth = Dimensions.get('window').width;

    const [product, setProduct] = useState('')
    const [selectedProduct, setSelectedProduct] = useState('')
    const [selectedCustomer, setSelectedCustomer] = useState('')
    const [customer, setCustomer] = useState('')
    const [balance, setBalance] = useState('')
    const [message, setMessage] = useState('')
    const [credit, setCredit] = useState(false)
    const [cash, setCash] = useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [bgColor1, setBgColor1] = useState('')
    const [bgColor2, setBgColor2] = useState('')
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')

    const productsSearchFilter = useSelector(state => state.request.productsSearchFilter)
    const customersSearchFilter = useSelector(state => state.request.customersSearchFilter)
    // console.log(credit, cash, 'JJ')

    const dispatch = useDispatch()

    const productSearchHandler = ({ nativeEvent }) => {
        const { text } = nativeEvent
        setProduct(text)
        debounceSearch(product)
    }

    const customerSearchHandler = ({ nativeEvent }) => {
        const { text } = nativeEvent
        setCustomer(text)
        debounceSearch2(customer)
    }

    const searchProduct = (value) => {
        dispatch(actionCreators.searchProducts(value))
    }

    const searchCustomer = (value) => {
        dispatch(actionCreators.searchCustomers(value))
    }

    let timeoutId;

    const debounce = (func, delay) => {
        return (...args) => {
            if (timeoutId) clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                func.apply(null, args)
            }, delay)
        }
    }

    const debounceSearch = debounce(searchProduct, 500)

    const debounceSearch2 = debounce(searchCustomer, 500)

    const buy = selectedProduct && selectedProduct.cost
    const sell = selectedProduct && selectedProduct.price
    const _buy = buy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const _sell = sell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const profit = parseInt(selectedProduct.price) - parseInt(selectedProduct.cost)
    const _profit = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const toggleCashButton = () => {
        setToggle(false)
        setBgColor1('#e30016')
        setBgColor2('')
        setColor1('#fff')
        setColor2('#e30016')
        setCash(true)
        setCredit(false)
    }

    const toggleCreditButton = () => {
        setToggle(true)
        setBgColor2('#e30016')
        setColor1('#e30016')
        setBgColor1('')
        setColor2('#fff')
        setCredit(true)
        setCash(false)
    }

    const addSaleHandler = () => {
        dispatch(actionCreators.addSale(selectedProduct.name, selectedCustomer.name, buy, sell, profit, cash, credit, balance, (res) => {
            if (res.success === true) {
                setMessage('Sale added Successfully')
                dispatch(actionCreators.getSales())
                dispatch(actionCreators.addActivity({ activity: 'Added Sale', name: selectedProduct.name }))
                dispatch(actionCreators.getActivity())
            }
        }))
    }

    const closeModal = () => {
        dispatch(actionCreators.getSales())
        close(false)
    }



    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>

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
                        placeholder="Product Name"
                        value={product}
                        onChange={productSearchHandler}
                    />
                    <MaterialCommunityIcons name="magnify" size={40} color={'rgba(0,0,0,0.1)'} />
                </View>
                {productsSearchFilter.map(product => (
                    <Ripple style={Styles.searchList} key={product._id} onPress={() => {
                        setSelectedProduct(product)
                        setOpen(false)
                    }}>
                        <Text style={Styles.txt1}>{product.name}</Text>
                        <Text style={Styles.txt2}>{product.unit}</Text>
                    </Ripple>
                ))

                }
            </ModalUI>

            <ModalUI visible={show} setOpen={setShow}>
                <View style={Styles.inputRow}>
                    <TextInput
                        style={{
                            height: 40,
                            fontSize: 20,
                            width: '85%',
                            paddingLeft: 10,
                            paddingVertical: 10
                        }}
                        placeholder="Customer Name"
                        value={customer}
                        onChange={customerSearchHandler}
                    />
                    <MaterialCommunityIcons name="magnify" size={40} color={'rgba(0,0,0,0.1)'} />
                </View>
                {customersSearchFilter.map(customer => (
                    <Ripple style={Styles.searchList} key={customer._id} onPress={() => {
                        setSelectedCustomer(customer)
                        setShow(false)
                    }}>
                        <Text style={Styles.txt1}>{customer.name}</Text>
                        <Text style={Styles.txt2}>{customer.phoneNumber}</Text>
                    </Ripple>
                ))

                }
            </ModalUI>


            <View style={Styles.saleMain}>
                <ScrollView contentContainerStyle={{ width: screenWidth, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                    <Text style={Styles.saleTxt1}>Add Sale</Text>
                    <View style={Styles.saleForm}>
                        <View style={Styles.btnRow}>
                            <Ripple onPress={() => setOpen(true)} style={Styles.btn}>
                                <Text style={Styles.btnTxt}>{selectedProduct ? 'Change Product' : 'Add Product'}</Text>
                                <MaterialCommunityIcons name="plus" size={30} color={Colors.secondary} />
                            </Ripple>
                            {selectedProduct ? <Text style={Styles.rowTxt}>{selectedProduct.name}</Text> : null}
                        </View>
                        <View style={Styles.btnRow}>
                            <Ripple onPress={() => setShow(true)} style={Styles.btn}>
                                <Text style={Styles.btnTxt}>{selectedCustomer ? 'Change Customer' : 'Add Customer'}</Text>
                                <MaterialCommunityIcons name="plus" size={30} color={Colors.secondary} />
                            </Ripple>
                            {selectedCustomer ? <Text style={Styles.rowTxt}>{selectedCustomer.name}</Text> : null}
                        </View>
                        <View style={Styles.salesTable}>
                            <View style={Styles.tableHeader}>
                                <Text style={Styles.headerTxt}>Buy</Text>
                                <Text style={Styles.headerTxt}>Sell</Text>
                                <Text style={Styles.headerTxt}>Profit</Text>
                            </View>
                            <View style={Styles.tabledata}>
                                <Text style={Styles.salesTxt}>{_buy}</Text>
                                <Text style={Styles.salesTxt}>{_sell}</Text>
                                <Text style={Styles.salesTxt}>{profit ? _profit : null}</Text>
                            </View>
                        </View>
                        <View style={Styles.paymentRow}>
                            <Pressable onPress={toggleCashButton} style={{ width: '50%', height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: bgColor1 ? bgColor1 : null }}>
                                <Text style={{ color: color1 }}>Cash</Text>
                            </Pressable>
                            <View style={{ width: 1, height: 40, backgroundColor: Colors.primary }} />
                            <Pressable onPress={toggleCreditButton} style={{ width: '50%', height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: bgColor2 ? bgColor2 : null }}>
                                <Text style={{ color: color2 }}>Credit</Text>
                            </Pressable>
                        </View>
                        {toggle ? <View style={Styles.tabledata}>
                            <TextInput
                                placeholder="Enter Credit Balance please"
                                style={{
                                    height: 50,
                                    fontSize: 20,
                                    width: '100%',
                                    borderWidth: 1,
                                    borderColor: 'rgba(0,0,0,0.1)',
                                    marginVertical: 10
                                }}
                                onChangeText={(e) => setBalance(e)}
                            />
                        </View> : null}
                    </View>
                    <Text style={{ color: 'red' }}>{message}</Text>
                    <Ripple onPress={addSaleHandler} style={Styles.button}>
                        <Text style={Styles.btnTxt}>Add Sale</Text>
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

export default SalesModal
